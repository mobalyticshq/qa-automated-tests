import { expect } from '@playwright/test';
import { Moba } from '../page-object/moba';

/**
 * Builds an ST-pages cleanup fixture for a single game.
 *
 * The returned fixture hands the test `{ moba, addPageForCleanup }`; every page name registered
 * via `addPageForCleanup` is deleted through that game's ST admin panel after the test finishes.
 *
 * NOTE: the returned function must keep `({ page }, use)` in its source — Playwright detects
 * fixture dependencies by parsing the function text, so destructuring `page` is what wires it up.
 *
 * @param {(urls: Moba['mainURLs']) => Promise<void>} openAdminPage — navigates to the game's ST admin panel
 */
export const makeStCleanup =
  (openAdminPage) =>
  async ({ page }, use) => {
    const moba = new Moba(page);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ moba, addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length === 0) return;

    await openAdminPage(moba.mainURLs);

    for (const pageName of pagesToCleanup) {
      await moba.stAdminPage.deleteStCardWidget(pageName);
      await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM

      await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
    }
  };
