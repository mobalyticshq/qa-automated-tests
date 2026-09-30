import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

test.use({ storageState: { cookies: [], origins: [] } });

test('User can open and close the perimeter map modal', async ({ page }) => {
  const moba = new Moba(page);

  await moba.mainURLs.openMarathonPerimeterMapPage();
  await moba.stPage.perimeterMapButton.first().click();
  await expect(moba.stPage.closeMapModalButton).toBeVisible();
  await moba.stPage.closeMapModalButton.click();
  await expect(moba.stPage.closeMapModalButton).not.toBeVisible();
});

test.describe('Focus Mode for published UG documents', () => {
    test('User can open Focus Mode for published PoE 2 build', async ({ page, apiAuthAdmin }) => {
        const moba = new Moba(page);

        await moba.mainURLs.openUgPoe2PublishedBuildPage();
        await moba.ugBuildPage.openFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
    });

    test('User can exit Focus Mode for published PoE 2 build', async ({ page, apiAuthAdmin }) => {
        const moba = new Moba(page);

        await moba.mainURLs.openUgPoe2PublishedBuildPage();
        await moba.ugBuildPage.openFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
        await moba.ugBuildPage.exitFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
        await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
    })
})