import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/index";
import { Moba } from "../../src/page-object/moba";
import { v4 as uuidv4 } from "uuid";

test(`Checking "New Game" in the navbar on ${process.env.BASE_URL}`, async ({
  page,
}) => {
  let newGame = "ZZZ";
  const moba = new Moba(page);
  await moba.mainURLs.openAdminPoePage();

  if (process.env.BASE_URL === "https://mobalytics.gg") {
    await test.step(`Expected Result: ${newGame} game is missing in the navbar on PROD`, async () => {
      await expect(moba.navbar.gameList).not.toContainText(newGame);
    });
  } else {
    await test.step(`Expected Result: ${newGame} game is present in the navbar on STG`, async () => {
      await expect(moba.navbar.gameList).toContainText(newGame);
    });
  }
});

test.describe("Creating ST Pages", () => {
  test(`Create a structure page on Diablo4 project`, async ({
    apiAuthAdmin,
    page,
    cleanupStDiablo4Pages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminDiablo4Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    cleanupStDiablo4Pages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Diablo4 project`, async () => {
      await expect(moba.stPage.headerV2Diablo4).toContainText("Diablo 4");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on PoE project`, async ({
    apiAuthAdmin,
    page,
    cleanupStPoEPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminPoePage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
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

    await moba.mainURLs.openAdminNightreignPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
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

    await moba.mainURLs.openAdminDeadlockPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
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

    await moba.mainURLs.openAdminMhwPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    cleanupStMhwPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Monster Hunter Wilds project`, async () => {
      await expect(moba.stPage.headerV2Mhw).toContainText(
        "Monster Hunter Wilds"
      );
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on Bazaar project`, async ({
    apiAuthAdmin,
    page,
    cleanupStBazaarPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminBazaarPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    cleanupStBazaarPages.addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Bazaar project`, async () => {
      await expect(moba.stPage.headerV2Bazaar).toContainText("The Bazaar");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });

  test(`Create a structure page on Marvel Rivals project`, async ({
    apiAuthAdmin,
    page,
    cleanupStMarvelRivalsPages,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openAdminMarvelRivalsPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
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

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderV2Widget();
    await moba.stPage.createStPage(pageName);

    cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.stPage.headerV2Zzz).toContainText("ZZZ");
      await expect(moba.stPage.stPageTitle).toContainText(pageName);
    });
  });
});

test.describe("Creating UG Pages", () => {
  test(`Create a guide page on Diablo4 project`, async ({
    apiAuthAdmin,
    page,
  }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-guide-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgDiablo4Page();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Diablo4 project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("Diablo 4 Guide");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a build page on ZZZ project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgZzzPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgMarvelRivalsPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgBazaarPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgMhwPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgPoePage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgNightreignPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgNightreignPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgPoePage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgDeadlockPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgDeadlockPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgMhwPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

  //   await moba.mainURLs.openUgBazaarPage();
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

    await moba.mainURLs.openUgMarvelRivalsPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgZzzPage();
    await moba.ugProfilePage.gotoGuidePlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

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

    await moba.mainURLs.openUgZzzPage();
    await moba.ugProfilePage.gotoTeamPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Team page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText("ZZZ Team");
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });
});

test.describe("Checking role permissions", () => {
  test.describe("Admin permission", () => {
    test(`Admin role has access to the Admin ST page`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      let adminTitle = "Structure Pages";
      const moba = new Moba(page);

      await moba.mainURLs.openAdminPoePage();
      await test.step(`Expected Result: Admin structure page is opened`, async () => {
        await expect(moba.stAdminPage.stAdminTitle(adminTitle)).toContainText(
          adminTitle
        );
      });
    });

    test('St Widget contains "Edit" button, "Delete" button & "Create Page" button is present on ST Admin page for Admin role', async ({
      page,
      apiAuthAdmin,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const moba = new Moba(page);
      let stWidgetName = "/qa-not-delete-st-page";

      await moba.mainURLs.openAdminNightreignPage();

      await test.step('Expected Result: St Widget contains "Edit" button', async () => {
        await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
      });
      await test.step('Expected Result: St Widget contains "Delete" button', async () => {
        await expect(moba.stAdminPage.deleteButton(stWidgetName)).toBeVisible();
      });
      await test.step('Expected Result: "Create Page" button is present on ST page for Admin role', async () => {
        await expect(moba.stAdminPage.createPageButton).toBeVisible();
      });
    });

    test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Admin role`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      let stWidgetName = "/qa-not-delete-st-page";

      const moba = new Moba(page);

      await moba.mainURLs.openAdminNightreignPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await test.step(`Expected Result: View mode the "/home" structure page is opened`, async () => {
        await expect(moba.stPage.stPageTitle).toContainText(stWidgetName);
      });
    });

    test(`Admin role can duplicate the structure page`, async ({
      apiAuthAdmin,
      page,
      cleanupStPoEPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);
      let stWidgetName = "/qa-not-delete-st-page";

      await moba.mainURLs.openAdminPoePage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await moba.stPage.duplicateStPage(pageName);
      cleanupStPoEPages.addPageForCleanup(pageName); // Register page for deleting
      await moba.mainURLs.openAdminPoePage();

      await test.step(`Expected Result: ST page: ${pageName} is duplicated under Admin role`, async () => {
        await expect(moba.stAdminPage.stWidget(pageName)).toContainText(
          pageName
        );
      });
    });

    test(`Admin role can edit the structure page`, async ({
      apiAuthAdmin,
      page,
      cleanupStZzzPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminZzzPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.createStPage(pageName);
      cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
      await moba.stPage.editStPage();

      await test.step(`Expected Result: Document Discovery is added to the st page: ${pageName} in edit mode`, async () => {
        await expect(moba.stPage.headerV2Widget).toBeVisible();
        await expect(moba.stPage.documentDiscoveryWidget).toBeVisible();
        await expect(moba.stPage.addSectionButton).not.toBeVisible();
        await expect(moba.stPage.dotsButton).toBeVisible();
      });
    });

    test(`Admin role can delete the structure page on the ST page`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminDeadlockPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.createStPage(pageName);
      await moba.stPage.deleteStPage();

      await test.step(`Expected Result: ST page: ${pageName} is deleted`, async () => {
        await expect(moba.stAdminPage.stWidget(pageName)).not.toBeVisible();
      });
    });

    test(`Admin role is allowed to publish structure pages`, async ({
      apiAuthAdmin,
      page,
      cleanupStZzzPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminZzzPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.createStPage(pageName);
      cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
      await moba.stPage.publishStPage();

      await test.step(`Expected Result: The ST page: ${pageName} is published`, async () => {
        await expect(moba.stPage.controlPanel).toContainText("Published");
      });
    });

    test(`Admin role has access to SEO modal on the structure pages`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const moba = new Moba(page);
      let stWidgetName = "/qa-not-delete-st-page";

      await moba.mainURLs.openAdminZzzPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await moba.stPage.openSeoModal();

      await test.step(`Expected Result: SEO modal is available for Admin role`, async () => {
        await expect(moba.stPage.seoModal).toBeVisible();
      });
    });

    test(`Admin role can upload a video to CDN on the structure pages`, async ({
      apiAuthAdmin,
      page,
      cleanupStMhwPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminMhwPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.addVideoV2Widget();
      await moba.stPage.uploadVideo(`aqa-video${uniqueId}.mp4`);
      await moba.stPage.createStPage(pageName);

      cleanupStMhwPages.addPageForCleanup(pageName); // Register page for deleting

      await test.step(`Expected Result: VideoV2 widget is present in the ST page`, async () => {
        await expect(moba.stPage.videoV2Widget).toBeVisible();
      });
    });

    test(`Admin role can upload an image to CDN on the ug page`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-build-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openUgZzzPage();
      await moba.ugProfilePage.gotoBuildPlannerPage();
      await moba.ugBuildPlanner.uploadCoverImage(`aqa-telegram${uniqueId}.svg`);
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Cover image is uploaded and visible on the build page`, async () => {
        await expect(moba.ugBuildPage.coverImage).toBeVisible();
        expect(
          await moba.ugBuildPage.coverImage.getAttribute("style")
        ).toContain("cdn.mobalytics.gg");
        expect(
          await moba.ugBuildPage.coverImage.getAttribute("style")
        ).toContain(`aqa-telegram${uniqueId}.svg`);
      });
    });

    test("Check API admin permission", async ({ request, apiAuthAdmin }) => {
      const adminRoleResponse = await request.post(
        `${process.env.BASE_URL}/api/poe-2/v1/graphql/query`,
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
  });

  test.describe("Internal Writer permission", () => {
    test(`Internal Writer role has NO access to the Admin ST page`, async ({
      apiAuthInternalWriter,
      page,
    }) => {
      await page.context().addCookies(apiAuthInternalWriter.cookies);
      const moba = new Moba(page);

      await moba.mainURLs.openAdminMhwPage();
      await test.step(`Expected Result: Admin structure page is opened`, async () => {
        await expect(moba.stAdminPage.notFoundPage).toBeVisible();
      });
    });

    test(`Internal Writer role has NO access to the control panel`, async ({
      apiAuthInternalWriter,
      page,
    }) => {
      await page.context().addCookies(apiAuthInternalWriter.cookies);
      const moba = new Moba(page);

      await moba.homePage.openMhwHomePage();
      await test.step(`Expected Result: Control panel is missing for Internal Writer role`, async () => {
        await expect(moba.homePage.controlPanel).not.toBeVisible();
      });
    });

    test("Check API Internal Writer permission", async ({
      request,
      apiAuthInternalWriter,
    }) => {
      const adminRoleResponse = await request.post(
        `${process.env.BASE_URL}/api/poe-2/v1/graphql/query`,
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
  });

  test.describe("Game Manager permission", () => {
    test("Game Manager role has access to the Admin ST page", async ({
      page,
      apiAuthGameManager,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      const moba = new Moba(page);
      const title = "Structure Pages";

      await moba.mainURLs.openAdminPoePage();
      await test.step(`Expected Result: Game Manager role has access to the Admin ST page`, async () => {
        await expect(moba.stAdminPage.stAdminTitle(title)).toContainText(title);
      });
    });

    test('St Widget contains only "Edit" button & "Create Page" button is missing on ST page for Game Manager role', async ({
      page,
      apiAuthGameManager,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      const moba = new Moba(page);
      let stWidgetName = "/qa-not-delete-st-page";

      await moba.mainURLs.openAdminNightreignPage();

      await test.step('Expected Result: St Widget contains "Edit" button', async () => {
        await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
      });
      await test.step('Expected Result: St Widget contains "Delete" button', async () => {
        await expect(
          moba.stAdminPage.deleteButton(stWidgetName)
        ).not.toBeVisible();
      });
      await test.step('Expected Result: "Create Page" button is missing on ST page for Game Manager role', async () => {
        await expect(moba.stAdminPage.createPageButton).not.toBeVisible();
      });
    });

    test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Game Manager role`, async ({
      apiAuthGameManager,
      page,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      let stWidgetName = "/qa-not-delete-st-page";

      const moba = new Moba(page);

      await moba.mainURLs.openAdminNightreignPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await test.step(`Expected Result: View mode the "/qa-not-delete-st-page" structure page is opened`, async () => {
        await expect(moba.stPage.stPageTitle).toContainText(stWidgetName);
      });
    });

    test(`Game Manager role can't publish ST pages`, async ({
      apiAuthGameManager,
      page,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      let stWidgetName = "/qa-not-delete-st-page";

      const moba = new Moba(page);

      await moba.mainURLs.openAdminZzzPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await test.step(`Expected Result: "Publish" button is missing in the control panel on the ST page`, async () => {
        await expect(moba.stPage.controlPanel).not.toContainText("Published");
      });
    });

    test(`Game Manager role can't archive, duplicate ST pages`, async ({
      apiAuthGameManager,
      page,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      let stWidgetName = "/qa-not-delete-st-page";

      const moba = new Moba(page);

      await moba.mainURLs.openAdminZzzPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await test.step(`Expected Result: "Dots" button is missing in the control panel on the ST page`, async () => {
        await expect(moba.stPage.dotsButton).not.toBeVisible();
      });
    });

    test(`Game Manager has access to SEO modal on the structure pages`, async ({
      apiAuthGameManager,
      page,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      const moba = new Moba(page);
      let stWidgetName = "/qa-not-delete-st-page";

      await moba.mainURLs.openAdminZzzPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await moba.stPage.openSeoModal();

      await test.step(`Expected Result: SEO modal is available for Game Manager role`, async () => {
        await expect(moba.stPage.seoModal).toBeVisible();
      });
    });

    test(`Game Manager can upload a video to CDN on the structure pages`, async ({
      apiAuthGameManager,
      page,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openMhwBuildPlanner();
      await moba.ugBuildPlanner.uploadVideo(`aqa-video${uniqueId}.mp4`);
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: VideoV2 widget is present in the ST page`, async () => {
        await expect(moba.ugBuildPage.videoGuideWidget).toBeVisible();
      });
    });

    test(`Game Manager role can can upload an image to CDN on the ug page`, async ({
      apiAuthGameManager,
      page,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-build-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openUgZzzPage();
      await moba.ugProfilePage.gotoBuildPlannerPage();
      await moba.ugBuildPlanner.uploadCoverImage(`aqa-telegram${uniqueId}.svg`);
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Cover image is uploaded and visible on the build page`, async () => {
        await expect(moba.ugBuildPage.coverImage).toBeVisible();
        expect(
          await moba.ugBuildPage.coverImage.getAttribute("style")
        ).toContain("cdn.mobalytics.gg");
        expect(
          await moba.ugBuildPage.coverImage.getAttribute("style")
        ).toContain(`aqa-telegram${uniqueId}.svg`);
      });
    });

    // test(`Game Manager role can edit the structure page`, async ({
    //   apiAuthGameManager,
    //   page,
    //   cleanupStZzzPages,
    // }) => {
    //   await page.context().addCookies(apiAuthGameManager.cookies);
    //   const uniqueId = uuidv4();
    //   const pageName = `/qa-game-manager-edit-function`;
    //   const moba = new Moba(page);

    //   await moba.mainURLs.openAdminZzzPage();
    //   await moba.stAdminPage.clickOnStWidget(pageName);
    //   await moba.stPage.editStPage();

    //   // await moba.stPage.createStPage(pageName);
    //   // cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting

    //   await test.step(`Expected Result: Document Discovery is added to the st page: ${pageName} in edit mode`, async () => {
    //     await expect(moba.stPage.headerV2Widget).toBeVisible();
    //     await expect(moba.stPage.documentDiscoveryWidget).toBeVisible();
    //     await expect(moba.stPage.addSectionButton).not.toBeVisible();
    //     await expect(moba.stPage.dotsButton).toBeVisible();
    //   });
    // });

    test("Check API Game Manager permission", async ({
      request,
      apiAuthGameManager,
    }) => {
      const adminRoleResponse = await request.post(
        `${process.env.BASE_URL}/api/poe-2/v1/graphql/query`,
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
});
