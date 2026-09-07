import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

/**
 * SEED: regular (free, ad-showing) signed-in user — storageState '.auth/regularUserAuth.json',
 * via the user-roles-setup project.
 *
 * Use this seed for advertisement, account and paywall specs written from the
 * point of view of an ordinary logged-in user.
 *
 * House rules: see the header of anonymous.seed.test.js and specs/CONVENTIONS.md.
 */
test.describe('Agent seed', () => {
  test('regular user seed', async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openMainPage();

    await test.step('Expected Result: regular user is signed in', async () => {
      await expect(moba.navbar.signInButton).toBeHidden();
    });
  });
});
