# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Playwright E2E test suite for Mobalytics (mobalytics.gg) — a multi-game platform covering 20+ game titles. Tests run against PROD and STG environments. ESM module project (`"type": "module"`), plain JavaScript (no TypeScript), Chromium only.

## Commands

```bash
# Install dependencies
npm install && npx playwright install --with-deps

# Run all tests
npm test

# Run a specific project (see playwright.config.js for the full list)
npm test -- --project ngf-tests
npm test -- --project advertisement-tests

# Run a single file / by test name
npm test -- e2e-tests/ngf/creating-st-pages.test.js
npm test -- --grep "test name pattern"

# Interactive UI mode
npm run ui

# Allure report (generate also opens it)
npm run generate-report
npm run open-report
```

There is no lint or build step; formatting is Prettier (`.prettierrc`: semicolons, single quotes, 120 width, trailing commas es5).

## Environment

Tests need a `.env` file (copy `.env.example`; real credentials come from the #team-qa Slack channel). It sets `BASE_URL`, `URL_SITEMAP` and credentials for the admin, game manager, internal writer, regular, ad-free and plus users.

PROD vs STG is decided by checking `process.env.BASE_URL === 'https://mobalytics.gg'`. That check sets the worker count in `playwright.config.js` (STG runs with 1 worker) and the Allure environment label, and tests such as `sitemap.test.js` and `cf-cache-status.test.js` branch on it.

Every request sends the User-Agent `mobalytics-automation-qa` (set globally in config). STG sits behind Cloudflare and needs this UA, or you get the challenge page.

## Architecture

### Layout

- **`e2e-tests/`** — Test files, grouped into per-project folders (`ngf/`, `accounts/`, `payments/`, `advertisement/`, `build-tracker/`) plus root-level single-file projects (`sitemap`, `hydration`, `specific`, `cf-cache-status`)
- **`e2e-tests/setup/`** — `authByPermissions.setup.test.js` (admin/game manager/internal writer) and `authByUserRoles.setup.test.js` (regular/ad-free/plus). They log in through the GraphQL API and write storageState files to `.auth/*.json`
- **`e2e-tests/fixtures/fixture.js`** — Custom `test`/`expect`; tests import from here, not from `@playwright/test`
- **`app/page-object/`** — Page Object classes, re-exported through `index.js` and composed into a single `Moba` class (`moba.js`)
- **`app/helpers/`** — Auth/registration fixture factories (`auth.js`), ST cleanup factory (`stCleanup.js`), game project list with feature flags (`projects.js`), sitemap/link utilities

### Playwright Projects (dependency chain)

```
auth-setup       → ngf-tests (storageState: adminAuth), build-tracker-tests, cf-cache-tests
user-roles-setup → advertisement-tests
standalone       → account-tests, payment-tests, specific-tests, sitemap-tests, hydration-tests
```

Sitemap and hydration projects turn off video, screenshots and trace.

### Key Patterns

- **`Moba` composite page object**: Access every page object through `new Moba(page)`, e.g. `moba.navbar`, `moba.stPage`, `moba.mainURLs`. A new page object has to be added to `app/page-object/index.js` and to the `Moba` constructor.
- **Two auth mechanisms**:
  - storageState files written by the setup projects (used through project `use.storageState` or `test.use()`)
  - per-test fixtures `apiAuthAdmin`, `apiAuthGameManager`, `apiAuthInternalWriter`, `apiPlusUser`, built by `authByRole()`. Each one runs the GraphQL `SignIn` mutation at `${BASE_URL}/api/accounts/v2/graphql/query`, copies the cookies into the page context and yields a `Moba` instance

  Both mechanisms also set the `battle-pass-should-open-sidebar-on-load` localStorage key to the user id, which stops the sidebar from popping up. `apiRegisterAccount` and `uiRegisterAccount` create fresh `ns+<uuid>@mobalyticshq.com` accounts.
- **ST page cleanup fixtures**: Each game has a `cleanupSt{Game}Pages` fixture built with `makeStCleanup(urls => urls.openAdmin{Game}Page())`. It provides `{ moba, addPageForCleanup }`, and the registered pages are deleted through that game's ST admin panel after the test. To support a new game, add an `openAdmin{Game}Page` method to `MainURLs` and a fixture line in `fixture.js`. The factory's returned function must keep its `({ page }, use)` destructuring, because Playwright finds fixture dependencies by parsing the function source.
- **Feature flags in `projects.js`**: Each game entry has `projectPath`, `staticData` and boolean `features` (`build`, `guide`, `tierList`, `team`, `deck`, `staticData`, `advertisement`, …). Data-driven tests loop over `filterProjectsByFeatureStatus('<flag>')`.
- **Test data isolation**: Test-created content (e.g. ST page paths) gets a UUID-based unique name.
- **`test.step()`**: Tests use steps to build the hierarchical Allure report.

### CI/CD

GitHub Actions workflows in `.github/workflows/`:

| Workflow            | Projects run                                                  |
| ------------------- | ------------------------------------------------------------- |
| `common.yml`        | `account-tests ngf-tests specific-tests sitemap-tests`        |
| `advertisement.yml` | `advertisement-tests`                                         |
| `build-tracker.yml` | `build-tracker-tests`                                         |
| `hydration.yml`     | `hydration-tests`                                             |

Each workflow can run on a schedule or be triggered manually with a PROD/STG choice, and reads its URL and credentials from `PROD_*`/`STG_*` secrets. Allure reports are deployed to GitHub Pages under a sub-path per workflow, and Slack/Telegram notifications go out through `notifications/allure-notifications-*.jar` (needs Java 17; `npm run telegram`). CI uses 1 retry and `forbidOnly`.

## Browser Automation Tooling

**Use `@playwright/cli` (Agent CLI) — `browser_navigate` + `browser_snapshot` — before editing any page-object selector or diagnosing UI flakiness.** Prefer Agent CLI over `mcp__playwright-test__*` (cheaper tokens, compact accessibility snapshots, no MCP schema load).

Anti-patterns:
- ❌ Guessing a selector → running the test → reading `error-context.md` → repeating. Use Agent CLI to see the DOM directly at any moment, not just at failure.
- ❌ Running `npm test --repeat-each N` more than once on the same hypothesis. If it failed deterministically, it'll fail again; switch to live investigation.

## Communication Language

- If the user writes in Russian (including voice-dictated input transcribed in Cyrillic), respond in Russian.
- If the user writes in English, respond in English.
- Code, identifiers, file paths, commit messages, and technical terms stay in English regardless of conversation language.
