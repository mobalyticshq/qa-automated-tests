# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Playwright E2E test suite for Mobalytics (mobalytics.gg) — a multi-game platform covering 20+ game titles. Tests run against PROD and STG environments. ESM module project (`"type": "module"`).

## Commands

```bash
# Install dependencies
npm install && npx playwright install --with-deps

# Run all tests
npm test

# Run a specific project
npm test -- --project ngf-tests
npm test -- --project advertisement-tests
npm test -- --project sitemap-tests
npm test -- --project hydration-tests

# Run by test name
npm test -- --grep "test name pattern"

# Interactive UI mode
npm run ui

# Allure report
npm run generate-report
npm run open-report
```

## Environment

Tests require a `.env` file with `BASE_URL` (PROD or STG URL) and credentials for multiple user roles: admin, game manager, internal writer, regular user, ad-free user, plus user. See `.env.example` for the full list.

PROD vs STG is determined by `BASE_URL` value — it controls API endpoints, worker count, and test behavior branching throughout the codebase.

## Architecture

### Test Organization

- **`e2e-tests/`** — Test files, one per feature area
- **`e2e-tests/setup/`** — Authentication setup tests (`auth.setup.test.js`, `userRoles.setup.test.js`) that run before dependent test projects
- **`src/fixtures/fixture.js`** — Custom Playwright fixtures: API auth for 3 roles, per-game cleanup fixtures (`cleanupSt{Game}Pages`), account registration
- **`src/page-object/`** — Page Object Model classes, all composed into a single `Moba` class (`moba.js`)
- **`src/helpers/`** — Game project lists with feature flags (`projects.js`), sitemap/link validation utilities

### Playwright Projects (dependency chain)

```
auth-setup → ngf-tests, others-tests
user-roles-setup → advertisement-tests
account-tests, payment-tests (standalone)
sitemap-tests, hydration-tests (standalone, no video/screenshot/trace)
```

### Key Patterns

- **`Moba` composite page object**: All page objects are accessed through `new Moba(page)` — e.g., `moba.navbar`, `moba.stPage`, `moba.mainURLs`
- **Cleanup fixtures**: Each game has a `cleanupSt{Game}Pages` fixture that provides `addPageForCleanup(pageName)`. Pages registered for cleanup are automatically deleted via admin panel after the test
- **API auth fixtures** (`apiAuthAdmin`, `apiAuthGameManager`, `apiAuthInternalWriter`): Authenticate via GraphQL `SignIn` mutation, extract cookies, inject into page context with `page.context().addCookies()`
- **Test data isolation**: UUID-based unique identifiers for test-created content (e.g., ST page paths)
- **`test.step()`**: Tests use Playwright's step API for hierarchical Allure reporting
- **Feature flags in `projects.js`**: Each game project has boolean flags (builds, guides, tierLists, ads, etc.) — tests iterate over projects filtered by enabled features

### CI/CD

Three GitHub Actions workflows (`ngf.yml`, `advertisement.yml`, `sitemap-hydration.yml`) with scheduled and manual triggers. They use environment-specific secrets (PROD_*/STG_*), generate Allure reports deployed to GitHub Pages, and send Slack/Telegram notifications.

## Code Style

- Prettier with: semicolons, single quotes, 120 char width, trailing commas (es5)
- No TypeScript — plain JavaScript with JSDoc where needed

## Browser Automation Tooling

**Use `@playwright/cli` (Agent CLI) — `browser_navigate` + `browser_snapshot` — before editing any page-object selector or diagnosing UI flakiness.** Prefer Agent CLI over `mcp__playwright-test__*` (cheaper tokens, compact accessibility snapshots, no MCP schema load).

Anti-patterns:
- ❌ Guessing a selector → running the test → reading `error-context.md` → repeating. Use Agent CLI to see the DOM directly at any moment, not just at failure.
- ❌ Running `npm test --repeat-each N` more than once on the same hypothesis. If it failed deterministically, it'll fail again; switch to live investigation.

## Communication Language

- If the user writes in Russian (including voice-dictated input transcribed in Cyrillic), respond in Russian.
- If the user writes in English, respond in English.
- Code, identifiers, file paths, commit messages, and technical terms stay in English regardless of conversation language.
