import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

/**
 * SEED: anonymous (not signed-in) visitor.
 *
 * Used by the Playwright generator agent as BOTH:
 *   1. the live environment — this test is executed and paused, and the agent drives that page;
 *   2. the code template — generated tests must look exactly like the test below.
 *
 * House rules the generator MUST follow (see specs/CONVENTIONS.md):
 *   - Always `const moba = new Moba(page);` and prefer existing page-object methods
 *     (app/page-object/*) over raw locators.
 *   - Wrap every assertion block in `await test.step('Expected Result: ...')` — Allure reads these.
 *   - Import `test`/`expect` from '../fixtures/fixture', never from '@playwright/test'.
 */
test.describe('Agent seed', () => {
  test('anonymous seed', async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openMainPage();

    await test.step('Expected Result: visitor is not signed in', async () => {
      await expect(moba.navbar.signInButton).toBeVisible();
    });
  });
});
