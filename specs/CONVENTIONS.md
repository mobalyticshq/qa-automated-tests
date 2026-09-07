# Codegen conventions

Rules the **playwright-test-generator** and **playwright-test-healer** agents must follow when
writing tests into this repo. Read this before generating or healing anything.

## Imports

```js
import { test, expect } from '../fixtures/fixture';   // NEVER from '@playwright/test'
import { Moba } from '../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';                  // only when creating data
```

`e2e-tests/fixtures/fixture.js` re-exports `expect` and extends `test` with the API-auth and
per-game cleanup fixtures. Importing from `@playwright/test` silently drops all of them.

Exception: `e2e-tests/advertisement/` builds its own contexts from `storageState` files and
imports `devices` from `@playwright/test`. Match the file you are editing.

## Page objects come first

Every test starts with `const moba = new Moba(page);`.

Before writing a raw locator, **grep `app/page-object/` for an existing method or locator.**
There are ~22 page-object classes reachable through `Moba` (`moba.navbar`, `moba.stPage`,
`moba.mainURLs`, `moba.stAdminPage`, `moba.accountPage`, `moba.pricingPage`, …).

- Navigating? Use `moba.mainURLs.open*()` — never a bare `page.goto()`.
- Clicking a known control? Use the page-object method (`moba.navbar.gotoSignInPage()`).
- Nothing exists yet? The generator agent has no file-write access outside
  `generator_write_test`, so it cannot extend a page object. Emit a role- or test-id-based
  locator inline and flag it:

  ```js
  // TODO(pom): extract to app/page-object/pricingPage.js
  await page.getByRole('button', { name: 'Start free trial' }).click();
  ```

  Every `TODO(pom)` is then lifted into the right page-object class during the review pass
  (`/qa-spec` does this automatically after generation). Selectors do not stay in test bodies.

Locators in page objects are built in the constructor with role/test-id selectors:

```js
this.signInButton = page.getByRole('button', { name: 'sign in' });
this.gameList = page.getByTestId('navbar-game-list');
```

Actions in page objects wrap themselves in `test.step()`:

```js
async gotoSignInPage() {
  await test.step('Go to the Sign In page', async () => {
    await this.signInButton.click();
  });
}
```

## Test shape

```js
test.describe('<Suite name from the spec>', () => {
  test('<Scenario name from the spec>', async ({ page }) => {
    const moba = new Moba(page);

    // 1. <verbatim step text from the spec>
    await moba.mainURLs.openMainPage();

    // 2. <verbatim step text from the spec>
    await moba.navbar.gotoSignInPage();

    await test.step('Expected Result: <verbatim expected result from the spec>', async () => {
      await expect(moba.signInPage.signInInput).toBeVisible();
    });
  });
});
```

- One file, one test. File name = fs-friendly scenario name, e.g.
  `e2e-tests/ngf/create-st-page-on-poe2.test.js`.
- `test.describe` title = the spec's `### N.` heading, without the ordinal.
- `test` title = the spec's `#### N.N.` heading, without the ordinal.
- Target path = the spec's `**File:**` line when it has one.
- Header comment at the top of the file recording provenance:
  ```js
  // spec: specs/<file>.md
  // seed: e2e-tests/agent-seeds/<seed>.seed.test.js
  ```
- Prefix each step with a comment carrying the spec's step text verbatim.
- Wrap **every** `- expect:` line from the spec in
  `await test.step('Expected Result: <the expect text verbatim>')`. Allure builds the
  QA-readable report from these titles, so the wording must match the spec exactly.

## Where generated files go

The target directory decides which auth state and reporting config the test runs under:

| Spec area | Directory | Playwright project |
| --- | --- | --- |
| NGF / ST / UG planners, admin panel | `e2e-tests/ngf/` | `ngf-tests` (admin storageState) |
| Sign-up, sign-in, profile, settings | `e2e-tests/accounts/` | `account-tests` |
| Pricing, checkout, subscription | `e2e-tests/payments/` | `payment-tests` |
| Ad blocks per user role | `e2e-tests/advertisement/` | `advertisement-tests` |
| Anything else | `e2e-tests/` (root) | add a project, or use `specific-tests` |

Never write into `e2e-tests/agent-seeds/` — that folder is seeds only.

## Test data must clean itself up

Anything created in the product has to be removed. For ST pages there is a per-game fixture;
take it instead of `page` and destructure:

```js
test('Create a structure page on PoE 2 project', async ({ cleanupStPoE2Pages }) => {
  const pageName = `/qa-automation-st-page-${uuidv4()}`;
  const { moba, addPageForCleanup } = cleanupStPoE2Pages;

  await moba.mainURLs.openAdminPoe2Page();
  await moba.stAdminPage.gotoStPlannerPage();
  await moba.stPage.createStPage(pageName);

  addPageForCleanup(pageName); // deleted via the admin panel after the test
});
```

- Names of created entities are **always** suffixed with `uuidv4()`. No fixed names.
- Register for cleanup **immediately** after creation, before the assertions — otherwise a
  failing assertion leaks the record.
- Available fixtures: `cleanupSt<Game>Pages` for PoE2, Sts2, Overwatch, Marathon, Endfield,
  PoE, LoL, TFT, Valorant, Destiny2, Diablo4, 2xko, Hades2, Borderlands4, Nightreign,
  Deadlock, Mhw, MarvelRivals, Bazaar, Zzz, Riftbound. Check
  `e2e-tests/fixtures/fixture.js` for the current list.

## Environment

- `process.env.BASE_URL` selects PROD (`https://mobalytics.gg`) or STG. Tests must work on
  both; branch on it only when behaviour genuinely differs.
- Never hardcode a host. `page.goto('/')` uses `baseURL`; page objects use
  `${process.env.BASE_URL}` for absolute paths.
- Never put credentials in a test. Roles come from seeds/`storageState` or the
  `apiAuthAdmin` / `apiAuthGameManager` / `apiAuthInternalWriter` fixtures.

## Multi-game specs

Tests that repeat over game projects iterate over the filtered helper rather than duplicating:

```js
import { filterProjectsByFeatureStatus } from '../../app/helpers/index';

filterProjectsByFeatureStatus('advertisement').forEach(({ game, projectPath }) => {
  test(`Check ad blocks - ${game}`, async ({ page }) => { /* ... */ });
});
```

Feature flags per game live in `app/helpers/projects.js`.

## Style

- Prettier: single quotes, semicolons, 120 columns, trailing commas (`es5`). Run
  `npx prettier --write <file>` before finishing.
- Plain ESM JavaScript. No TypeScript, no `.spec.ts` files — this repo uses `*.test.js`.
- No `waitForTimeout`, no `waitForLoadState('networkidle')`. Assert on state instead.
- Prefer `expect.soft()` only where the existing area already does (advertisement tests).
- `test.skip(condition, 'reason')` for known product gaps; `test.fixme()` only as a last
  resort, with a comment stating what actually happens instead of the expected behaviour.
