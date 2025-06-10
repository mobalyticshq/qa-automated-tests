import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Moba } from "../src/page-object/moba";
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

test(`Go to the admin structure page`, async ({ apiAuth, page }) => {
  await page.context().addCookies(apiAuth.cookies);
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
  apiAuth,
  page,
}) => {
  await page.context().addCookies(apiAuth.cookies);

  const moba = new Moba(page);

  await moba.mainURLs.openAdminStgPoePage();
  await moba.stAdminPage.clickOnStWidget();
  await test.step(`Expected Result: View mode the /1180 structure page is opened`, async () => {
    await expect(moba.stPage.stPageTitle).toContainText("/1180");
  });
});

test.describe("Creating ST Pages", () => {
  test(`Open an edit mode of "/1180" structure page`, async ({
    apiAuth,
    page,
  }) => {
    await page.context().addCookies(apiAuth.cookies);

    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgPoePage();
    await moba.stAdminPage.clickEditButton();
    await test.step(`Expected Result: Edit mode the "/1180" structure page is opened`, async () => {
      await expect(moba.stPage.stPageTitle).toContainText("/1180");
      await expect(moba.stPage.addSectionButton).toBeVisible();
    });
  });

  test(`Create a structure page on PoE project`, async ({
    apiAuth,
    page,
    cleanupStPoEPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgPoePage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageId);

    // Регистрируем страницу для удаления
    cleanupStPoEPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Structure page is created on PoE project`, async () => {
      await expect(moba.stPage.headerV2PoE).toContainText("PoE 2");
      await expect(moba.stPage.stPageTitle).toContainText(pageId);
    });
  });

  test(`Create a structure page on Nightreign project`, async ({
    apiAuth,
    page,
    cleanupStNightreignPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgNightreignPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageId);

    // Регистрируем страницу для удаления
    cleanupStNightreignPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Structure page is created on Nightreign project`, async () => {
      await expect(moba.stPage.headerV2Nightreign).toContainText("Nightreign");
      await expect(moba.stPage.stPageTitle).toContainText(pageId);
    });
  });

  test(`Create a structure page on Deadlock project`, async ({
    apiAuth,
    page,
    cleanupStDeadlockPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgDeadlockPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageId);

    // Регистрируем страницу для удаления
    cleanupStDeadlockPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Structure page is created on Deadlock project`, async () => {
      await expect(moba.stPage.headerV2Deadlock).toContainText("Deadlock");
      await expect(moba.stPage.stPageTitle).toContainText(pageId);
    });
  });

  test(`Create a structure page on Mhw project`, async ({
    apiAuth,
    page,
    cleanupStMhwPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgMhwPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageId);

    // Регистрируем страницу для удаления
    cleanupStMhwPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Structure page is created on Monster Hunter Wilds project`, async () => {
      await expect(moba.stPage.headerV2Mhw).toContainText(
        "Monster Hunter Wilds"
      );
      await expect(moba.stPage.stPageTitle).toContainText(pageId);
    });
  });

  // test(`Create a structure page on Bazaar project`, async ({
  //   apiAuth,
  //   page,
  //   cleanupStBazaarPages,
  // }) => {
  //   await page.context().addCookies(apiAuth.cookies);
  //   const uniqueId = uuidv4();
  //   const pageId = `/qa-automation-st-page-${uniqueId}`;
  //   const moba = new Moba(page);

  //   await moba.mainURLs.openStgBazaarAdminPage();
  //   await moba.stAdminPage.clickOnCreatePageButton();
  //   await moba.stPage.addHeaderV2Widget();
  //   await moba.stPage.createStPage(pageId);

  //   // Регистрируем страницу для удаления
  //   cleanupStBazaarPages.addPageForCleanup(pageId);

  //   await test.step(`Expected Result: Structure page is created on Bazaar project`, async () => {
  //     await expect(moba.stPage.headerV2Bazaar).toContainText("The Bazaar");
  //     await expect(moba.stPage.stPageTitle).toContainText(pageId);
  //   });
  // });

  test(`Create a structure page on Marvel Rivals project`, async ({
    apiAuth,
    page,
    cleanupStMarvelRivalsPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgMarvelRivalsPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageId);

    // Регистрируем страницу для удаления
    cleanupStMarvelRivalsPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Structure page is created on Marvel Rivals project`, async () => {
      await expect(moba.stPage.headerV2MarvelRivals).toContainText(
        "Marvel Rivals"
      );
      await expect(moba.stPage.stPageTitle).toContainText(pageId);
    });
  });

  test(`Create a structure page on ZZZ project`, async ({
    apiAuth,
    page,
    cleanupStZzzPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminStgZzzPage();
    await moba.stAdminPage.clickOnCreatePageButton();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageId);

    // Регистрируем страницу для удаления
    cleanupStZzzPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Structure page is created on ZZZ project`, async () => {
      await expect(moba.stPage.headerV2Zzz).toContainText("ZZZ");
      await expect(moba.stPage.stPageTitle).toContainText(pageId);
    });
  });
});

test.describe("Creating UG Pages", () => {
  test(`Create a build page on ZZZ project`, async ({
    apiAuth,
    page,
    cleanupUgZzzBuildPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgZzzPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageId);

    //Регистрируем страницу для удаления
    cleanupUgZzzBuildPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Build page is created on ZZZ project`, async () => {
      await expect(moba.ugBuildPage.mainPage).toContainText("ZZZ Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
    });
  });

  test(`Create a build page on Marvel Rivals project`, async ({
    apiAuth,
    page,
    cleanupUgMarvelRivalsBuildPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgMarvelRivalsPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageId);

    //Регистрируем страницу для удаления
    cleanupUgMarvelRivalsBuildPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Build page is created on Marvel Rivals project`, async () => {
      await expect(moba.ugBuildPage.mainPage).toContainText(
        "Marvel Rivals Build"
      );
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
    });
  });

  // test(`Create a build page on Bazaar project`, async ({
  //   apiAuth,
  //   page,
  //   cleanupUgBazaarBuildPages,
  // }) => {
  //   await page.context().addCookies(apiAuth.cookies);
  //   const uniqueId = uuidv4();
  //   const pageId = `qa-automation-build-page-${uniqueId}`;
  //   const moba = new Moba(page);

  //   await moba.mainURLs.openUgStgBazaarPage();
  //   await moba.ugProfilePage.gotoBuildPlannerPage();
  //   await moba.ugBuildPage.createBuild(pageId);

  //   //Регистрируем страницу для удаления
  //   cleanupUgBazaarBuildPages.addPageForCleanup(pageId);

  //   await test.step(`Expected Result: Build page is created on Bazaar project`, async () => {
  //     await expect(moba.ugBuildPage.mainPage).toContainText("The Bazaar Build");
  //     await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
  //   });
  // });

  test(`Create a build page on MHW project`, async ({
    apiAuth,
    page,
    cleanupUgMhwBuildPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgMhwPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageId);

    //Регистрируем страницу для удаления
    cleanupUgMhwBuildPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Build page is created on MHW project`, async () => {
      await expect(moba.ugBuildPage.mainPage).toContainText(
        "Monster Hunter Wilds Build"
      );
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
    });
  });

  test(`Create a build page on Deadlock project`, async ({
    apiAuth,
    page,
    cleanupUgDeadlockBuildPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgDeadlockPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageId);

    //Регистрируем страницу для удаления
    cleanupUgDeadlockBuildPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Build page is created on Deadlock project`, async () => {
      await expect(moba.ugBuildPage.mainPage).toContainText("Deadlock Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
    });
  });

  test(`Create a build page on PoE project`, async ({
    apiAuth,
    page,
    cleanupUgPoeBuildPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgPoePage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageId);

    //Регистрируем страницу для удаления
    cleanupUgPoeBuildPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Build page is created on PoE project`, async () => {
      await expect(moba.ugBuildPage.mainPage).toContainText("PoE 2 Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
    });
  });

  test(`Create a build page on Nightreign project`, async ({
    apiAuth,
    page,
    cleanupUgNightreignBuildPages,
  }) => {
    await page.context().addCookies(apiAuth.cookies);
    const uniqueId = uuidv4();
    const pageId = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgNightreignPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageId);

    //Регистрируем страницу для удаления
    cleanupUgNightreignBuildPages.addPageForCleanup(pageId);

    await test.step(`Expected Result: Build page is created on Nightreign project`, async () => {
      await expect(moba.ugBuildPage.mainPage).toContainText("Nightreign Build");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageId);
    });
  });
});
