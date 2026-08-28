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
- **`e2e-tests/setup/`** — Authentication setup tests (`authByPermissions.setup.test.js`, `authByUserRoles.setup.test.js`) that run before dependent test projects
- **`e2e-tests/agent-seeds/`** — Seed tests for the AI codegen agents (see below). Never regular tests.
- **`e2e-tests/fixtures/fixture.js`** — Custom Playwright fixtures: API auth for 3 roles, per-game cleanup fixtures (`cleanupSt{Game}Pages`), account registration
- **`app/page-object/`** — Page Object Model classes, all composed into a single `Moba` class (`moba.js`)
- **`app/helpers/`** — Game project lists with feature flags (`projects.js`), sitemap/link validation utilities
- **`specs/`** — Human-written Markdown test plans consumed by the AI agents

### Playwright Projects (dependency chain)

```
auth-setup → ngf-tests, specific-tests, seed-admin*
user-roles-setup → advertisement-tests, seed-regular-user*, seed-plus-user*
account-tests, payment-tests (standalone)
sitemap-tests, hydration-tests (standalone, no video/screenshot/trace)
seed-anonymous* (standalone)

* seed-* projects only exist when PW_AGENT_MODE=1
```

### Key Patterns

- **`Moba` composite page object**: All page objects are accessed through `new Moba(page)` — e.g., `moba.navbar`, `moba.stPage`, `moba.mainURLs`
- **Cleanup fixtures**: Each game has a `cleanupSt{Game}Pages` fixture that provides `addPageForCleanup(pageName)`. Pages registered for cleanup are automatically deleted via admin panel after the test
- **API auth fixtures** (`apiAuthAdmin`, `apiAuthGameManager`, `apiAuthInternalWriter`): Authenticate via GraphQL `SignIn` mutation, extract cookies, inject into page context with `page.context().addCookies()`
- **Test data isolation**: UUID-based unique identifiers for test-created content (e.g., ST page paths)
- **`test.step()`**: Tests use Playwright's step API for hierarchical Allure reporting
- **Feature flags in `projects.js`**: Each game project has boolean flags (builds, guides, tierLists, ads, etc.) — tests iterate over projects filtered by enabled features

### CI/CD

Three GitHub Actions workflows (`ngf.yml`, `advertisement.yml`, `sitemap-hydration.yml`) with scheduled and manual triggers. They use environment-specific secrets (PROD*\*/STG*\*), generate Allure reports deployed to GitHub Pages, and send Slack/Telegram notifications.

## Code Style

- Prettier with: semicolons, single quotes, 120 char width, trailing commas (es5)
- No TypeScript — plain JavaScript with JSDoc where needed

## Browser Automation Tooling

**Use `@playwright/cli` (Agent CLI) — `browser_navigate` + `browser_snapshot` — before editing any page-object selector or diagnosing UI flakiness.** Prefer Agent CLI over `mcp__playwright-test__*` (cheaper tokens, compact accessibility snapshots, no MCP schema load).

Anti-patterns:

- ❌ Guessing a selector → running the test → reading `error-context.md` → repeating. Use Agent CLI to see the DOM directly at any moment, not just at failure.
- ❌ Running `npm test --repeat-each N` more than once on the same hypothesis. If it failed deterministically, it'll fail again; switch to live investigation.

## Spec-Based AI Test Authoring

Manual QA writes Markdown specs in `specs/`; Playwright's AI agents turn them into committed
`*.test.js` files. **The AI runs at authoring time only — CI runs plain Playwright, no model
calls.**

```
specs/<feature>.md  ──/qa-spec──▶  e2e-tests/<area>/<scenario>.test.js  ──npm test──▶  Allure
```

- `specs/README.md` — the spec format, written for manual QA. Read it before touching a spec.
- `specs/CONVENTIONS.md` — **the house rules the generator and healer must obey.** Read this
  before generating, healing, or reviewing any AI-authored test.
- `specs/plus-upsell.md` — reference spec showing the expected shape.

Slash commands: `/qa-plan` (draft a spec from the live app), `/qa-spec` (spec → tests),
`/qa-heal` (fix failing tests).

Agents live in `.claude/agents/playwright-test-{planner,generator,healer}.md` and are
regenerated by `npx playwright init-agents --loop=claude --project=seed-anonymous`. **Do not
hand-edit them** — that command overwrites the files. Repo-specific instructions belong in
`specs/CONVENTIONS.md` and in the seed file comments, which is why both exist.

### Seeds

`e2e-tests/agent-seeds/*.seed.test.js` are the entry points the agents drive. Each one is run
and paused by `generator_setup_page`, so the seed's Playwright project decides the auth state
and fixtures the AI generates against — and the seed's source is handed to the model as the
code template. Comments in a seed are load-bearing instructions.

| Seed                        | Project             | Auth                         |
| --------------------------- | ------------------- | ---------------------------- |
| `anonymous.seed.test.js`    | `seed-anonymous`    | none                         |
| `admin.seed.test.js`        | `seed-admin`        | `.auth/adminAuth.json`       |
| `regular-user.seed.test.js` | `seed-regular-user` | `.auth/regularUserAuth.json` |
| `plus-user.seed.test.js`    | `seed-plus-user`    | `.auth/plusUserAuth.json`    |

Seed projects only exist when `PW_AGENT_MODE=1`, which `.mcp.json` sets for the MCP server, so
a normal `npm test` never runs them. To run one by hand:

```bash
PW_AGENT_MODE=1 npm test -- --project seed-admin
```

### Reviewing AI-authored tests

The generator has no write access outside `generator_write_test`, so it cannot extend a page
object — it emits inline locators flagged `// TODO(pom):`. Lifting those into
`app/page-object/` is a required review step, not optional cleanup. Also check that every
`- expect:` in the spec became a real assertion, not just a `test.step()` title.

## Communication Language

- If the user writes in Russian (including voice-dictated input transcribed in Cyrillic), respond in Russian.
- If the user writes in English, respond in English.
- Code, identifiers, file paths, commit messages, and technical terms stay in English regardless of conversation language.
