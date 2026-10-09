import { test, expect } from '../../fixtures/fixture';
import { Moba } from '../../../app/page-object/moba';

test.use({ storageState: { cookies: [], origins: [] } });

test('User can open and close the perimeter map modal', async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openMarathonPerimeterMapPage();
    await moba.stPage.perimeterMapButton.first().click();
    await expect(moba.stPage.closeMapModalButton).toBeVisible();
    await moba.stPage.closeMapModalButton.click();
    await expect(moba.stPage.closeMapModalButton).not.toBeVisible();
});

test.describe('For published UG documents', () => {
    test('Admin can open and exit Focus Mode for published PoE 2 build', async ({ page, apiAuthAdmin }) => {
        const moba = new Moba(page);

        await moba.mainURLs.openUgPoe2PublishedBuildPage();
        await expect(moba.ugBuildPage.getStatusBadge('Published')).toBeVisible();
        await moba.ugBuildPage.openFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
        await moba.ugBuildPage.exitFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
        await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
    })

    test('Unlogged-in user can open and exit Focus Mode for published WoW build', async ({ page }) => {
        const moba = new Moba(page);

        await moba.mainURLs.openUgPoe2PublishedBuildPage();
        await moba.ugBuildPage.openFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
        await moba.ugBuildPage.exitFocusMode();
        await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
        await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
    })
});

test.describe('For draft UG documents', () => {
    test('User cant open Focus Mode for draft PoE 2 build', async ({ page, apiAuthAdmin }) => {
        const moba = new Moba(page);

        await moba.mainURLs.openUgPoe2DraftBuildPage();
        await expect(moba.ugBuildPage.getStatusBadge('Draft')).toBeVisible();
        await expect(moba.ugBuildPage.focusModeButton).toBeHidden();
    })
});