import { v4 as uuidv4 } from 'uuid';
import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

test.beforeEach(() => new Promise((resolve) => setTimeout(() => resolve(), 1000)));

test.describe('Admin permission', () => {
  test.use({ storageState: '.auth/adminAuth.json' }); // add admin auth

  test(`Admin role has access to the Admin ST page`, async ({ page }) => {
    let adminTitle = 'Structure Pages';
    const moba = new Moba(page);

    await moba.mainURLs.openAdminPoePage();

    await test.step(`Expected Result: Admin structure page is opened`, async () => {
      await expect(moba.stAdminPage.stAdminTitle(adminTitle)).toContainText(adminTitle);
    });
  });

  test('St Widget contains "Edit" button, "Delete" button & "Create Page" button is present on ST Admin page for Admin role', async ({
    page,
  }) => {
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminNightreignPage();

    await test.step('Expected Result: St Widget contains "Edit" button', async () => {
      await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
    });
    await test.step('Expected Result: St Widget contains "Delete" button', async () => {
      await expect(moba.stAdminPage.deleteButton(stWidgetName)).toBeVisible();
    });
    await test.step('Expected Result: "Create Page" button is present on ST page for Admin role', async () => {
      await expect(moba.stAdminPage.createStPageButton).toBeVisible();
    });
  });

  test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Admin role`, async ({ page }) => {
    let stWidgetName = '/qa-not-delete-st-page';

    const moba = new Moba(page);

    await moba.mainURLs.openAdminNightreignPage();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);

    await test.step(`Expected Result: View mode the "/qa-not-delete-st-page" structure page is opened`, async () => {
      await expect(moba.stPage.controlPanel).toContainText(stWidgetName);
    });
  });

  test(`Admin role can duplicate the structure page`, async ({ page, cleanupStPoE2Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminPoe2Page();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);
    await moba.stPage.duplicateStPage(pageName);
    cleanupStPoE2Pages.addPageForCleanup(pageName); // Register page for deleting
    await moba.mainURLs.openAdminPoe2Page();

    await test.step(`Expected Result: ST page: ${pageName} is duplicated under Admin role`, async () => {
      await expect(moba.stAdminPage.stCardWidget(pageName)).toBeVisible();
    });
  });

  test(`Admin role can edit the structure page`, async ({ page, cleanupStZzzPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);
    cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
    await moba.stPage.editStPage();

    await test.step(`Expected Result: Document Discovery is added to the st page: ${pageName} in edit mode`, async () => {
      await expect(moba.stPage.headerWidget).toBeVisible();
      await expect(moba.stPage.documentDiscoveryWidget).toBeVisible();
      await expect(moba.stPage.addSectionButton).not.toBeVisible();
      await expect(moba.stPage.dotsButton).toBeVisible();
    });
  });

  test(`Admin role can delete the structure page on the ST page`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminDeadlockPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);
    await moba.stPage.deleteStPage();

    await test.step(`Expected Result: ST page: ${pageName} is deleted`, async () => {
      // await expect(moba.stAdminPage.stAdminTitle("Structure Pages")).toBeVisible();
      await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
    });
  });

  test(`Admin role is allowed to publish structure pages`, async ({ page, cleanupStZzzPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);
    cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
    await moba.stPage.publishStPage();

    await test.step(`Expected Result: The ST page: ${pageName} is published`, async () => {
      await expect(moba.stPage.controlPanel).toContainText('Published');
    });
  });

  test(`Admin role has access to SEO modal on the structure pages`, async ({ page }) => {
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);
    await moba.stPage.openSeoModal();

    await test.step(`Expected Result: SEO modal is available for Admin role`, async () => {
      await expect(moba.stPage.seoModal).toBeVisible();
    });
  });

  test(`Admin role can upload a video to CDN on the structure pages`, async ({ page, cleanupStMhwPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminMhwPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addVideoWidget();
    await moba.stPage.uploadVideo(`aqa-video${uniqueId}.mp4`);
    await moba.stPage.createStPage(pageName);

    cleanupStMhwPages.addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Video widget is present in the ST page`, async () => {
      await expect(moba.stPage.videoWidget).toBeVisible();
    });
  });

  test(`Admin role can upload an image to CDN on the ug page`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgZzzPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.uploadCoverImage(`aqa-telegram${uniqueId}.svg`);
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Cover image is uploaded and visible on the build page`, async () => {
      await expect(moba.ugBuildPage.coverImage).toBeVisible();
      expect(await moba.ugBuildPage.coverImage.getAttribute('style')).toContain('cdn.mobalytics.gg');
      expect(await moba.ugBuildPage.coverImage.getAttribute('style')).toContain(`aqa-telegram${uniqueId}.svg`);
    });
  });

  test('Check API admin permission', async ({ request }) => {
    const adminRoleResponse = await request.post(`${process.env.BASE_URL}/api/poe-2/v1/graphql/query`, {
      data: {
        query: `
            query Poe2 {
                poe2 {
                    id
                    permissions {
                        user {
                            id
                            role
                        }
                    }
                }
            }
        `,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(adminRoleResponse.ok()).toBeTruthy();
    const json = await adminRoleResponse.json();
    const role = json.data.poe2.permissions.user.role;
    expect(role).toBe('ADMIN');
  });
});

test.describe('Internal Writer permission', () => {
  test.use({ storageState: '.auth/internalWriterAuth.json' });

  test(`Internal Writer role has NO access to the Admin ST page`, async ({ page }) => {
    const moba = new Moba(page);

    await moba.mainURLs.openAdminMhwPage();
    await test.step(`Expected Result: Admin structure page is opened`, async () => {
      await expect(moba.stAdminPage.notFoundPage).toBeVisible();
    });
  });

  test(`Internal Writer role has NO access to the control panel`, async ({ page }) => {
    const moba = new Moba(page);

    await moba.homePage.openMhwHomePage();

    await test.step(`Expected Result: Control panel is missing for Internal Writer role`, async () => {
      await expect(moba.homePage.controlPanel).not.toBeVisible();
    });
  });

  test('Check API Internal Writer permission', async ({ request }) => {
    const internalWriterRoleResponse = await request.post(`${process.env.BASE_URL}/api/poe-2/v1/graphql/query`, {
      data: {
        query: `
            query Poe2 {
                poe2 {
                    id
                    permissions {
                        user {
                            id
                            role
                        }
                    }
                }
            }
        `,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(internalWriterRoleResponse.ok()).toBeTruthy();
    const json = await internalWriterRoleResponse.json();
    const role = json.data.poe2.permissions.user.role;
    expect(role).toBe('INTERNAL_WRITER');
  });
});

test.describe('Game Manager permission', () => {
  test.use({ storageState: '.auth/gameManagerAuth.json' }); // add game manager auth

  test('Game Manager role has access to the Admin ST page', async ({ page }) => {
    const moba = new Moba(page);
    const title = 'Structure Pages';

    await moba.mainURLs.openAdminPoePage();
    await test.step(`Expected Result: Game Manager role has access to the Admin ST page`, async () => {
      await expect(moba.stAdminPage.stAdminTitle(title)).toContainText(title);
    });
  });

  test('St Widget contains only "Edit" button & "Create Page" button is missing on ST page for Game Manager role', async ({
    page,
  }) => {
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminNightreignPage();

    await test.step('Expected Result: St Widget contains "Edit" button', async () => {
      await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
    });
    await test.step('Expected Result: St Widget contains "Delete" button', async () => {
      await expect(moba.stAdminPage.deleteButton(stWidgetName)).not.toBeVisible();
    });
    await test.step('Expected Result: "Create Page" button is missing on ST page for Game Manager role', async () => {
      await expect(moba.stAdminPage.createStPageButton).not.toBeVisible();
    });
  });

  test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Game Manager role`, async ({
    page,
  }) => {
    let stWidgetName = '/qa-not-delete-st-page';

    const moba = new Moba(page);

    await moba.mainURLs.openAdminNightreignPage();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);
    await test.step(`Expected Result: View mode the "/qa-not-delete-st-page" structure page is opened`, async () => {
      await expect(moba.stPage.controlPanel).toContainText(stWidgetName);
    });
  });

  test(`Game Manager role can't publish ST pages`, async ({ page }) => {
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);

    await test.step(`Expected Result: "Publish" button is missing in the control panel on the ST page`, async () => {
      await expect(moba.stPage.controlPanel).not.toContainText('Published');
      await expect(moba.stPage.publishButton).not.toBeVisible();
    });
  });

  test(`Game Manager role can't archive, duplicate ST pages`, async ({ page }) => {
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);

    await test.step(`Expected Result: "Dots" button is missing in the control panel on the ST page`, async () => {
      await expect(moba.stPage.dotsButton).not.toBeVisible();
    });
  });

  test(`Game Manager has access to SEO modal on the structure pages`, async ({ page }) => {
    const moba = new Moba(page);
    let stWidgetName = '/qa-not-delete-st-page';

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.clickStCardWidget(stWidgetName);
    await moba.stPage.openSeoModal();

    await test.step(`Expected Result: SEO modal is available for Game Manager role`, async () => {
      await expect(moba.stPage.seoModal).toBeVisible();
    });
  });

  test(`Game Manager can upload a video to CDN on the structure pages`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openMhwBuildPlanner();
    await moba.ugBuildPlanner.uploadVideo(`aqa-video${uniqueId}.mp4`);
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Video widget is present in the ST page`, async () => {
      await expect(moba.ugBuildPage.videoGuideWidget).toBeVisible();
    });
  });

  test(`Game Manager role can can upload an image to CDN on the ug page`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgZzzPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.uploadCoverImage(`aqa-telegram${uniqueId}.svg`);
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Cover image is uploaded and visible on the build page`, async () => {
      await expect(moba.ugBuildPage.coverImage).toBeVisible();
      expect(await moba.ugBuildPage.coverImage.getAttribute('style')).toContain('cdn.mobalytics.gg');
      expect(await moba.ugBuildPage.coverImage.getAttribute('style')).toContain(`aqa-telegram${uniqueId}.svg`);
    });
  });

  test('Check API Game Manager permission', async ({ request }) => {
    const gameManagerRoleResponse = await request.post(`${process.env.BASE_URL}/api/poe-2/v1/graphql/query`, {
      data: {
        query: `
            query Poe2 {
                poe2 {
                    id
                    permissions {
                        user {
                            id
                            role
                        }
                    }
                }
            }
        `,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(gameManagerRoleResponse.ok()).toBeTruthy();
    const json = await gameManagerRoleResponse.json();
    const role = json.data.poe2.permissions.user.role;
    expect(role).toBe('GAME_MANAGER');
  });
});
