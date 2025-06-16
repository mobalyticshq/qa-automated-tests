import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Moba } from "../src/page-object/moba";
import { USER_ROLES } from "../src/setup/credentials";
import { v4 as uuidv4 } from "uuid";

test("There is no a new game in navbar on the production", async ({
  page,
  baseURL,
}) => {
  const NEW_GAME = "ZZZ";
  const moba = new Moba(page);
  await moba.mainURLs.openMainPage(baseURL);
  await moba.mainPage.selectDestinyProject();

  await test.step(`Expected Result: There is no ${NEW_GAME} game in the navbar on prod`, async () => {
    await expect(moba.navbar.gameList).not.toContainText(NEW_GAME);
  });
});

test.describe("Open Admin Page & St Pages: view, edit", () => {
  test(`Go to the admin structure page`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    let adminTitle = "Structure Pages";
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgPoePage();
    await test.step(`Expected Result: Admin structure page is opened`, async () => {
      await expect(moba.stAdminPage.createPageButton).toBeVisible();
      await expect(moba.stAdminPage.stAdminTitle(adminTitle)).toContainText(
        adminTitle
      );
    });
  });

  test(`Open a view mode of "/1180" structure page`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);

    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgPoePage();
    await moba.stAdminPage.clickOnStWidget();
    await test.step(`Expected Result: View mode the /1180 structure page is opened`, async () => {
      await expect(moba.stPage.stPageTitle).toContainText("/1180");
    });
  });

  test(`Open an edit mode of "/1180" structure page`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);

    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgPoePage();
    await moba.stAdminPage.clickEditButton();
    await test.step(`Expected Result: Edit mode the "/1180" structure page is opened`, async () => {
      await expect(moba.stPage.stPageTitle).toContainText("/1180");
      await expect(moba.stPage.addSectionButton).toBeVisible();
    });
  });
});

test.describe("Creating ST Pages", () => {
  test(`Create a structure page on PoE project`, async ({
    apiAuthAdmin,
    page,
    cleanupStPoEPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgPoePage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Регистрируем страницу для удаления
    cleanupStPoEPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on PoE project`, async () => {
      await expect(moba.stPage.headerV2PoE).toContainText("PoE 2");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on Nightreign project`, async ({
    apiAuthAdmin,
    page,
    cleanupStNightreignPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgNightreignPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Регистрируем страницу для удаления
    cleanupStNightreignPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Nightreign project`, async () => {
      await expect(moba.stPage.headerV2Nightreign).toContainText("Nightreign");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on Deadlock project`, async ({
    apiAuthAdmin,
    page,
    cleanupStDeadlockPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgDeadlockPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Регистрируем страницу для удаления
    cleanupStDeadlockPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Deadlock project`, async () => {
      await expect(moba.stPage.headerV2Deadlock).toContainText("Deadlock");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on Mhw project`, async ({
    apiAuthAdmin,
    page,
    cleanupStMhwPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgMhwPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Регистрируем страницу для удаления
    cleanupStMhwPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Monster Hunter Wilds project`, async () => {
      await expect(moba.stPage.headerV2Mhw).toContainText(
        "Monster Hunter Wilds"
      );
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  // test(`Create a structure page on Bazaar project`, async ({
  //   apiAuthAdmin,
  //   page,
  //   cleanupStBazaarPages,
  // }) => {
  //   await page.context().addCookies(apiAuthAdmin.cookies);
  //   const uniqueId = uuidv4();
  //   const pageName = `/qa-automation-st-page-${uniqueId}`;
  //   const moba = new Moba(page);

  //   await moba.mainURLs.openStgBazaarAdminPage();
  //   await moba.stAdminPage.clickOnCreatePageButton();
  //   await moba.stPage.addHeaderV2Widget();
  //   await moba.stPage.createStPage(pageName);

  //   // Регистрируем страницу для удаления
  //   cleanupStBazaarPages.addPageForCleanup(pageName);

  //   await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Bazaar project`, async () => {
  //     await expect(moba.stPage.headerV2Bazaar).toContainText("The Bazaar");
  //     await expect(moba.stPage.stPageTitle).toContainText(pageName);
  //   });
  // });

  test(`Create a structure page on Marvel Rivals project`, async ({
    apiAuthAdmin,
    page,
    cleanupStMarvelRivalsPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgMarvelRivalsPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Регистрируем страницу для удаления
    cleanupStMarvelRivalsPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Marvel Rivals project`, async () => {
      await expect(moba.stPage.headerV2MarvelRivals).toContainText(
        "Marvel Rivals"
      );
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on ZZZ project`, async ({
    apiAuthAdmin,
    page,
    cleanupStZzzPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgZzzPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Регистрируем страницу для удаления
    cleanupStZzzPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.stPage.headerV2Zzz).toContainText("ZZZ");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });
});

test.describe("Creating UG Pages", () => {
  test(`Create a build page on ZZZ project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgZzzPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    //Регистрируем страницу для удаления
    // cleanupUgZzzBuildPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("ZZZ Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on Marvel Rivals project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgMarvelRivalsPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on Marvel Rivals project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText(
        "Marvel Rivals Build"
      );
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on Bazaar project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgBazaarPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on Bazaar project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("The Bazaar Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on MHW project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgMhwPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on MHW project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText(
        "Monster Hunter Wilds Build"
      );
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on PoE project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgPoePage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on PoE project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("PoE 2 Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on Nightreign project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgNightreignPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on Nightreign project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("Nightreign Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a guide page on Nightreign project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgNightreignPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Nightreign project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("Nightreign Guide");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a guide page on PoE project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgPoePage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on PoE project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("PoE 2 Guide");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on Deadlock project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgDeadlockPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    await test.step(`Expected Result: Build page with the name: ${pageName} is created on Deadlock project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("Deadlock Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a guide page on Deadlock project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgDeadlockPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Deadlock project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("Deadlock Guide");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a guide page on MHW project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgMhwPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on MHW project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText(
        "Monster Hunter Wilds Guide"
      );
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  //* At this moment Bazaar guides isn't available
  // test(`Create a guide page on Bazaar project`, async ({
  //   apiAuthAdmin,
  //   page,
  // }) => {
  //   await page.context().addCookies(apiAuthAdmin.cookies);
  //   const uniqueId = uuidv4();
  //   const pageName = `qa-automation-guide-page-${uniqueId}`;
  //   const moba = new Moba(page);

  //   await moba.mainURLs.openUgStgBazaarPage();
  //   await moba.ugProfilePage.gotoGuidePlannerPage();
  //   await moba.ugBuildPage.createGuide(pageName);

  //   await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Bazaar project`, async () => {
  //     await expect(moba.ugBuildPage.header).toContainText("The Bazaar Guide");
  //     await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  //   });
  // });

  test(`Create a guide page on Marvel Rivals project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgMarvelRivalsPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Marvel Rivals project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText(
        "Marvel Rivals Guide"
      );
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a guide page on ZZZ project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgZzzPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("ZZZ Guide");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a team page on ZZZ project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-team-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgZzzPage();
    await moba.ugProfilePage.gotoTeamPlannerPage();
    await moba.ugBuildPage.createGuide(pageName);

    await test.step(`Expected Result: Team page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("ZZZ Team");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });
});

test.describe("Checking permissions", () => {
  test("Check UI admin permission", async ({ page, apiAuthAdmin }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const moba = new Moba(page);
    const title = "Structure Pages";

    await moba.mainURLs.openAdminStgPoePage();
    await test.step(`User is logged in`, async () => {
      await expect(moba.stAdminPage.createPageButton).toBeVisible();
      await expect(moba.stAdminPage.stAdminTitle(title)).toContainText(title);
    });
  });

  test("Check API admin permission", async ({ request, apiAuthAdmin }) => {
    const adminRoleResponse = await request.post(
      "https://stg.mobalytics.gg/api/poe-2/v1/graphql/query",
      {
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
          "Content-Type": "application/json",
        },
      }
    );
    expect(adminRoleResponse.ok()).toBeTruthy();
    const json = await adminRoleResponse.json();
    const role = json.data.poe2.permissions.user.role;
    expect(role).toBe("ADMIN");
  });

  test("Check UI Internal Writer permission", async ({
    page,
    apiAuthInternalWriter,
  }) => {
    await page.context().addCookies(apiAuthInternalWriter.cookies);
    const moba = new Moba(page);
    const title = "Structure Pages";

    await moba.mainURLs.openAdminStgPoePage();
    await test.step(`User is logged in`, async () => {
      await expect(moba.stAdminPage.createPageButton).toBeVisible();
      await expect(moba.stAdminPage.stAdminTitle(title)).toContainText(title);
    });
  });

  test("Check API Internal Writer permission", async ({
    request,
    apiAuthInternalWriter,
  }) => {
    const adminRoleResponse = await request.post(
      "https://stg.mobalytics.gg/api/poe-2/v1/graphql/query",
      {
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
          "Content-Type": "application/json",
        },
      }
    );
    expect(adminRoleResponse.ok()).toBeTruthy();
    const json = await adminRoleResponse.json();
    const role = json.data.poe2.permissions.user.role;
    expect(role).toBe("INTERNAL_WRITER");
  });

  test("Check UI Game Manager permission", async ({
    page,
    apiAuthGameManager,
  }) => {
    await page.context().addCookies(apiAuthGameManager.cookies);
    const moba = new Moba(page);
    const title = "Structure Pages";

    await moba.mainURLs.openAdminStgPoePage();
    await test.step(`User is logged in`, async () => {
      await expect(moba.stAdminPage.createPageButton).toBeVisible();
      await expect(moba.stAdminPage.stAdminTitle(title)).toContainText(title);
    });
  });

  test("Check API Game Manager permission", async ({
    request,
    apiAuthGameManager,
  }) => {
    const adminRoleResponse = await request.post(
      "https://stg.mobalytics.gg/api/poe-2/v1/graphql/query",
      {
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
          "Content-Type": "application/json",
        },
      }
    );
    expect(adminRoleResponse.ok()).toBeTruthy();
    const json = await adminRoleResponse.json();
    const role = json.data.poe2.permissions.user.role;
    expect(role).toBe("GAME_MANAGER");
  });
});
