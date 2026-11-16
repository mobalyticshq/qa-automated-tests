import { test, expect } from '../../fixtures/fixture';
import { Moba } from '../../../app/page-object/moba';

test.use({ storageState: { cookies: [], origins: [] } });

test('User can open and close the perimeter map modal', async ({ page }) => {
  const moba = new Moba(page);

  await moba.mainURLs.openMarathonPerimeterMapPage();

  await expect(async () => {
    await moba.stPage.perimeterMapButton.first().click();
    await expect(moba.stPage.closeMapModalButton).toBeVisible({ timeout: 1_000 });
  }).toPass({ timeout: 20_000 });
  
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
  });

  test('Unlogged-in user can open and exit Focus Mode for published PoE 2 build', async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openUgPoe2PublishedBuildPage();
    await moba.ugBuildPage.openFocusMode();

    await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();

    await moba.ugBuildPage.exitFocusMode();

    await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
    await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
  });

  // test('Focus Mode hides build page controls', async ({ page, apiAuthAdmin }) => {
  //   moba = new Moba(page);

  //   await moba.mainURLs.openUgPoe2PublishedBuildPage();
  //   await moba.ugBuildPage.openFocusMode();
  //   await expect(moba.ugBuildPage.controlPanel).toBeHidden();
  //   await expect(moba.ugBuildPage.trackBuildButton).toBeHidden(); // узнать про Track Build button
  // });

  test('Exit Focus Mode restores build page controls', async ({ page, apiAuthAdmin }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openUgPoe2PublishedBuildPage();
    await moba.ugBuildPage.openFocusMode();
    await moba.ugBuildPage.exitFocusMode();

    await expect.soft(moba.ugBuildPage.focusModeButton).toBeVisible();
    await expect.soft(moba.ugBuildPage.controlPanel).toBeVisible();
    await expect.soft(moba.ugBuildPage.trackBuildButton).toBeVisible();
  });

  test('First tab is selected by default in Focus Mode', async ({ page, apiAuthAdmin }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openUgPoe2PublishedBuildPage();
    await moba.ugBuildPage.openFocusMode();

    await expect(moba.ugBuildPage.getFocusModeTab('Equipment')).toHaveAttribute('aria-selected', 'true');
  });

  test('Focus Mode header shows section tabs', async ({ page, apiAuthAdmin }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openUgPoe2PublishedBuildPage();
    await moba.ugBuildPage.openFocusMode();

    await expect.soft(moba.ugBuildPage.focusModeHeader).toBeVisible();
    await expect.soft(moba.ugBuildPage.getFocusModeTab('Equipment')).toBeVisible();
    await expect.soft(moba.ugBuildPage.getFocusModeTab('Skill Gems')).toBeVisible();
    await expect.soft(moba.ugBuildPage.getFocusModeTab('Passive Tree ')).toBeVisible();
    await expect.soft(moba.ugBuildPage.getFocusModeTab('Quest Rewards')).toBeVisible();
  });
});

test.describe('For draft UG documents', () => {
  test('User cant open Focus Mode for draft PoE 2 build', async ({ page, apiAuthAdmin }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openUgPoe2DraftBuildPage();
    
    await expect(moba.ugBuildPage.getStatusBadge('Draft')).toBeVisible();
    await expect(moba.ugBuildPage.focusModeButton).toBeHidden();
  });
});
