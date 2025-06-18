import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Moba } from "../src/page-object/moba";
import { v4 as uuidv4 } from "uuid";

test(`There is no "New Game" in the navbar in production`, async ({
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

    await moba.mainURLs.openAdminStgNightreignPage();
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

    await moba.mainURLs.openAdminStgDeadlockPage();
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

    await moba.mainURLs.openAdminStgMhwPage();
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

    await moba.mainURLs.openAdminStgBazaarPage();
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

    await moba.mainURLs.openAdminStgMarvelRivalsPage();
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

    await moba.mainURLs.openAdminStgZzzPage();
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
  test(`Create a build page on ZZZ project`, async ({ apiAuthAdmin, page }) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const uniqueId = uuidv4();
    const pageName = `qa-automation-build-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgStgZzzPage();
    await moba.ugProfilePage.gotoBuildPlannerPage();
    await moba.ugBuildPage.createBuild(pageName);

    //Register page for deleting
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

test.describe("Checking role permissions", () => {
  test.describe.serial("Checking Admin permission", () => {
    test(`Admin role has access to the Admin ST page`, async ({
      apiAuthAdmin,
      page,
    }) => {
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

    test('St Widget contains "Edit" button, "Delete" button for Admin role', async ({
      page,
      apiAuthAdmin,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const moba = new Moba(page);
      let stWidgetName = "/home";

      await moba.mainURLs.openAdminStgNightreignPage();

      await test.step('Expected Result: St Widget contains "Edit" button', async () => {
        await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
      });
      await test.step('Expected Result: St Widget contains "Delete" button', async () => {
        await expect(moba.stAdminPage.deleteButton(stWidgetName)).toBeVisible();
      });
    });

    test(`View mode of the "/home" structure page is available for the Admin role`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      let stWidgetName = "/home";

      const moba = new Moba(page);

      await moba.mainURLs.openAdminStgNightreignPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await test.step(`Expected Result: View mode the "/home" structure page is opened`, async () => {
        await expect(moba.stPage.stPageTitle).toContainText(stWidgetName);
      });
    });

    test(`Admin role is able to duplicate the structure page`, async ({
      apiAuthAdmin,
      page,
      cleanupStPoEPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);
      let stWidgetName = "/1180";

      await moba.mainURLs.openAdminStgPoePage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await moba.stPage.duplicateStPage(pageName);
      cleanupStPoEPages.addPageForCleanup(pageName); // Register page for deleting
      await moba.mainURLs.openAdminStgPoePage();

      await test.step(`Expected Result: ST page: ${pageName} is duplicated under admin role`, async () => {
        await expect(moba.stAdminPage.stWidget(pageName)).toContainText(
          pageName
        );
      });
    });

    test(`Admin role is able to edit the structure page`, async ({
      apiAuthAdmin,
      page,
      cleanupStPoEPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminStgZzzPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.createStPage(pageName);
      // cleanupStPoEPages.addPageForCleanup(pageName); // Register page for deleting
      await moba.stPage.editStPage();

      await test.step(`Expected Result: Document Discovery is added to the st page: ${pageName} in edit mode`, async () => {
        await expect(moba.stPage.headerV2Widget).toBeVisible();
        await expect(moba.stPage.documentDiscoveryWidget).toBeVisible();
        await expect(moba.stPage.addSectionButton).not.toBeVisible();
        await expect(moba.stPage.dotsButton).toBeVisible();
      });
    });

    test(`Admin role is able to delete the structure page on the ST page`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminStgDeadlockPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.createStPage(pageName);
      await moba.stPage.deleteStPage();

      await test.step(`Expected Result: ST page: ${pageName} is deleted`, async () => {
        await expect(moba.stAdminPage.stWidget(pageName)).not.toBeVisible();
      });
    });

    test(`The Admin role is allowed to publish structure pages`, async ({
      apiAuthAdmin,
      page,
      cleanupStZzzPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);

      await moba.mainURLs.openAdminStgZzzPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addHeaderV2Widget();
      await moba.stPage.createStPage(pageName);
      cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
      await moba.stPage.publishStPage();

      await test.step(`Expected Result: The ST page: ${pageName} is published`, async () => {
        await expect(moba.stPage.controlPanel).toContainText("Published");
      });
    });

    test(`The Admin role has access to SEO modal on the structure pages`, async ({
      apiAuthAdmin,
      page,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const moba = new Moba(page);
      let stWidgetName = "/home";

      await moba.mainURLs.openAdminStgZzzPage();
      await moba.stAdminPage.clickOnStWidget(stWidgetName);
      await moba.stPage.openSeoModal();

      await test.step(`Expected Result: SEO modal is available for admin role`, async () => {
        await expect(moba.stPage.seoModal).toBeVisible;
      });
    });

    test(`Admin role can add VideoV2 widget (link) to the structure pages`, async ({
      apiAuthAdmin,
      page,
      cleanupStMhwPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);
      let link = "https://youtu.be/g-qkY2yj4_A?si=senOMRXZQu9DivSQ";

      await moba.mainURLs.openAdminStgMhwPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addVideoInVideoV2Widget(link);
      await moba.stPage.createStPage(pageName);
      cleanupStMhwPages.addPageForCleanup(pageName); // Register page for deleting

      await test.step(`Expected Result: VideoV2 widget is present in the ST page`, async () => {
        await expect(moba.stPage.videoV2Widget).toBeVisible();
      });
    });

    test(`Admin role can add image (link) to the structure pages`, async ({
      apiAuthAdmin,
      page,
      cleanupStZzzPages,
    }) => {
      await page.context().addCookies(apiAuthAdmin.cookies);
      const uniqueId = uuidv4();
      const pageName = `/qa-automation-st-page-${uniqueId}`;
      const moba = new Moba(page);
      let link =
        "https://cdn.mobalytics.gg/cdn-cgi/image/format=auto,width=1150/assets/diablo-4/images/background-images/classes/sorcerer.jpg";

      await moba.mainURLs.openAdminStgZzzPage();
      await moba.stAdminPage.gotoStPlannerPage();
      await moba.stPage.addCardGalleryV2Widget();
      await moba.cardGalleryV2Widget.addImageLink(link);
      await moba.stPage.createStPage(pageName);
      cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting

      await test.step(`Expected Result: Image is present in the Card GalleryV2 widget on ST page`, async () => {
        await expect(
          moba.cardGalleryV2Widget.сardGalleryV2Widget
        ).toBeVisible();
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
  });

  test.describe("Checking Internal Writer permission", () => {
    // test("Check UI Internal Writer permission", async ({
    //   page,
    //   apiAuthInternalWriter,
    // }) => {
    //   await page.context().addCookies(apiAuthInternalWriter.cookies);
    //   const moba = new Moba(page);
    //   const title = "Structure Pages";

    //   await moba.mainURLs.openAdminStgPoePage();
    //   await test.step(`User is logged in`, async () => {
    //     await expect(moba.stAdminPage.createPageButton).toBeVisible();
    //     await expect(moba.stAdminPage.stAdminTitle(title)).toContainText(title);
    //   });
    // });

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
  });

  test.describe("Checking Game Manager permission", () => {
    test("Check UI Game Manager permission", async ({
      page,
      apiAuthGameManager,
    }) => {
      await page.context().addCookies(apiAuthGameManager.cookies);
      const moba = new Moba(page);
      const title = "Structure Pages";

      await moba.mainURLs.openAdminStgPoePage();
      await test.step(`User is logged in`, async () => {
        await expect(moba.stAdminPage.createPageButton).not.toBeVisible();
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
});
