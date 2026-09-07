import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

/**
 * SEED: Plus subscriber — storageState '.auth/plusUserAuth.json',
 * via the user-roles-setup project.
 *
 * Use this seed for specs that assert Plus-only behaviour: no ad blocks,
 * no "Get Plus" upsell, premium widgets unlocked.
 *
 * House rules: see the header of anonymous.seed.test.js and specs/CONVENTIONS.md.
 */
test.describe('Agent seed', () => {
  test('plus user seed', async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openMainPage();

    await test.step('Expected Result: Plus user is signed in without an upsell button', async () => {
      await expect(moba.navbar.signInButton).toBeHidden();
      await expect(moba.navbar.getPlusButton).toBeHidden();
    });
  });
});
