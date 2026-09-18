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
