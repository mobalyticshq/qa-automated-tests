import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

/**
 * SEED: admin user (storageState '.auth/adminAuth.json', via the auth-setup project).
 *
 * Use this seed for NGF / ST / UG planner specs that need the admin panel.
 *
 * House rules the generator MUST follow (see specs/CONVENTIONS.md):
 *   - Prefer `moba.mainURLs.openAdmin<Game>Page()` over hand-written goto() calls.
 *   - Anything created in the admin panel MUST be registered for cleanup. Take the
 *     per-game fixture instead of `page` and pull `moba` out of it:
 *
 *       test('...', async ({ cleanupStPoE2Pages }) => {
 *         const { moba, addPageForCleanup } = cleanupStPoE2Pages;
 *         const pageName = `/qa-automation-st-page-${uuidv4()}`;
 *         ...
 *         addPageForCleanup(pageName); // deleted automatically after the test
 *       });
 *
 *   - Never reuse a hard-coded page name: always suffix with `uuidv4()`.
 */
test.describe('Agent seed', () => {
  test('admin seed', async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openMainPage();

    await test.step('Expected Result: admin is signed in', async () => {
      await expect(moba.navbar.signInButton).toBeHidden();
    });
  });
});
