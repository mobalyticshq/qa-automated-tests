import { expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';
import { test } from '../src/fixtures/fixture';
import { Moba } from '../src/page-object/moba';
import {
  filterProjectsByFeatureStatus as filterProjectsByAvailableStaticData,
  filterProjectsByFeatureStatus as filterProjectsByBuilds,
  filterProjectsByFeatureStatus as filterProjectsByGuides,
  filterProjectsByFeatureStatus as filterProjectsByTierLists,
  filterProjectsByFeatureStatus as filterProjectsByTeams,
} from '../src/helpers/index';

test.beforeEach(() => new Promise((resolve) => setTimeout(() => resolve(), 1000)));

test(`Checking "New Games" in the navbar on ${process.env.BASE_URL}`, async ({ page }) => {
  let newGame1 = 'Marathon';
  let newGame2 = 'Overwatch';
  const moba = new Moba(page);
  await moba.mainURLs.openPoe2Page();

  if (process.env.BASE_URL === 'https://mobalytics.gg') {
    await test.step(`Expected Result: ${newGame1} game is missing in the navbar on PROD`, async () => {
      await expect(moba.navbar.gameList).not.toContainText(newGame1);
    });
    await test.step(`Expected Result: ${newGame2} game is missing in the navbar on PROD`, async () => {
      await expect(moba.navbar.gameList).not.toContainText(newGame2);
    });
  } else {
    await test.step(`Expected Result: ${newGame1} game is present in the navbar on STG`, async () => {
      await expect(moba.navbar.gameList).toContainText(newGame1);
    });
    await test.step(`Expected Result: ${newGame2} game is present in the navbar on STG`, async () => {
      await expect(moba.navbar.gameList).toContainText(newGame2);
    });
  }
});

test.describe('Creating ST Pages', () => {
  test.use({ storageState: '.auth/adminAuth.json' }); // add admin auth

  // test(`Create a structure page on Overwatch project`, async ({ cleanupSt2xkoPages }) => {
  //   const uniqueId = uuidv4();
  //   const pageName = `/qa-automation-st-page-${uniqueId}`;
  //   const { moba, addPageForCleanup } = cleanupSt2xkoPages;

  //   await moba.mainURLs.openAdmin2xkoPage();
  //   await moba.stAdminPage.gotoStPlannerPage();
  //   await moba.stPage.addHeaderWidget();
  //   await moba.stPage.createStPage(pageName);

  //   addPageForCleanup(pageName); // Register page for deleting

  //   await test.step(`Expected Result: Structure page with the name: ${pageName} is created on 2xko project`, async () => {
  //     await expect(moba.stPage.header2xko).toContainText('2XKO');
  //     await expect(moba.stPage.controlPanel).toContainText(pageName);
  //   });
  // });

  test(`Create a structure page on 2xko project`, async ({ cleanupSt2xkoPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupSt2xkoPages;

    await moba.mainURLs.openAdmin2xkoPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on 2xko project`, async () => {
      await expect(moba.stPage.header2xko).toContainText('2XKO');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Marathon project`, async ({ cleanupStMarathonPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStMarathonPages;

    await moba.mainURLs.openAdminMarathonPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Marathon project`, async () => {
      await expect(moba.stPage.headerMarathon).toContainText('Marathon');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Endfield project`, async ({ cleanupStEndfieldPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStEndfieldPages;

    await moba.mainURLs.openAdminEndfieldPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Endfield project`, async () => {
      await expect(moba.stPage.headerEndfield).toContainText('Endfield');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Riftbound project`, async ({ cleanupStRiftboundPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStRiftboundPages;

    await moba.mainURLs.openAdminRiftboundPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Riftbound project`, async () => {
      await expect(moba.stPage.headerRiftbound).toContainText('Riftbound');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Diablo 4 project`, async ({ cleanupStDiablo4Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStDiablo4Pages;

    await moba.mainURLs.openAdminDiablo4Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Diablo4 project`, async () => {
      await expect(moba.stPage.headerDiablo4).toContainText('Diablo 4');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on LoL project`, async ({ cleanupStLoLPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStLoLPages;

    await moba.mainURLs.openAdminLoLPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidgetOldGames();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on LoL project`, async () => {
      await expect(moba.stPage.headerLoL).toContainText('LoL');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on TFT project`, async ({ cleanupStTFTPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStTFTPages;

    await moba.mainURLs.openAdminTFTPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidgetOldGames();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on TFT project`, async () => {
      await expect(moba.stPage.headerTFT).toContainText('TFT');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Valorant project`, async ({ cleanupStValorantPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStValorantPages;

    await moba.mainURLs.openAdminValorantPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidgetOldGames();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Valorant project`, async () => {
      await expect(moba.stPage.headerValorant).toContainText('Val');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Destiny 2 project`, async ({ cleanupStDestiny2Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStDestiny2Pages;

    await moba.mainURLs.openAdminDestiny2Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidgetOldGames();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Destiny 2 project`, async () => {
      await expect(moba.stPage.headerDestiny2).toContainText('Destiny 2');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on PoE 2 project`, async ({ cleanupStPoE2Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStPoE2Pages;

    await moba.mainURLs.openAdminPoe2Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on PoE 2 project`, async () => {
      await expect(moba.stPage.headerPoE2).toContainText('PoE 2');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on PoE project`, async ({ cleanupStPoEPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStPoEPages;

    await moba.mainURLs.openAdminPoePage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on PoE project`, async () => {
      await expect(moba.stPage.headerPoE).toContainText('PoE');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Nightreign project`, async ({ cleanupStNightreignPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStNightreignPages;

    await moba.mainURLs.openAdminNightreignPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Nightreign project`, async () => {
      await expect(moba.stPage.headerNightreign).toContainText('Nightreign');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Deadlock project`, async ({ cleanupStDeadlockPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStDeadlockPages;

    await moba.mainURLs.openAdminDeadlockPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Deadlock project`, async () => {
      await expect(moba.stPage.headerDeadlock).toContainText('Deadlock');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on MHW project`, async ({ cleanupStMhwPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStMhwPages;

    await moba.mainURLs.openAdminMhwPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Monster Hunter Wilds project`, async () => {
      await expect(moba.stPage.headerMhw).toContainText('Monster Hunter Wilds');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Bazaar project`, async ({ cleanupStBazaarPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStBazaarPages;

    await moba.mainURLs.openAdminBazaarPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Bazaar project`, async () => {
      await expect(moba.stPage.headerBazaar).toContainText('The Bazaar');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Marvel Rivals project`, async ({ cleanupStMarvelRivalsPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStMarvelRivalsPages;

    await moba.mainURLs.openAdminMarvelRivalsPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    // Register page for deleting
    addPageForCleanup(pageName);

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Marvel Rivals project`, async () => {
      await expect(moba.stPage.headerMarvelRivals).toContainText('Marvel Rivals');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on ZZZ project`, async ({ cleanupStZzzPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStZzzPages;

    await moba.mainURLs.openAdminZzzPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on ZZZ project`, async () => {
      await expect(moba.stPage.headerZzz).toContainText('ZZZ');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Hades 2 project`, async ({ cleanupStHades2Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStHades2Pages;

    await moba.mainURLs.openAdminHades2Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Hades 2 project`, async () => {
      await expect(moba.stPage.headerHades2).toContainText('Hades 2');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Borderlands 4 project`, async ({ cleanupStBorderlands4Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStBorderlands4Pages;

    await moba.mainURLs.openAdminBorderlands4Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Borderlands 4 project`, async () => {
      await expect(moba.stPage.headerBorderlands4).toContainText('Borderlands 4');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });
});

test.describe('Creating UG Pages', () => {
  test.use({ storageState: '.auth/adminAuth.json' }); // add admin auth

  filterProjectsByBuilds('build').forEach(({ game, projectPath }) => {
    test(`Create a build page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-build-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoBuildPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Build page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Build`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  filterProjectsByGuides('guide').forEach(({ game, projectPath }) => {
    test(`Create a guide page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-guide-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoGuidePlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Guide page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Guide`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
  });

  filterProjectsByTierLists('tierList').forEach(({ game, projectPath }) => {
    test(`Create a tier-list page on ${game} project`, async ({ page }) => {
      test.skip(
        game === 'Diablo 4' && process.env.BASE_URL.includes('https://mobalytics.gg'),
        'Diablo 4 Tier List is not supported yet on production'
      );
      const uniqueId = uuidv4();
      const pageName = `qa-automation-tier-list-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoTierListPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Tier-list page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Tier List`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
    // }
  });

  filterProjectsByTeams('team').forEach(({ game, projectPath }) => {
    test(`Create a team page on ${game} project`, async ({ page }) => {
      const uniqueId = uuidv4();
      const pageName = `qa-automation-team-page-${uniqueId}`;
      const moba = new Moba(page);

      if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'Val') {
        await moba.mainURLs.openUgCreatorProfilePage(projectPath);
      } else {
        await moba.mainURLs.openUgProfilePage(projectPath);
      }
      await moba.ugProfilePage.gotoTeamPlannerPage();
      await moba.ugBuildPlanner.createUgDraftPage(pageName);

      await test.step(`Expected Result: Team page with the name: ${pageName} is created on ${game} project`, async () => {
        await expect(moba.ugBuildPage.header).toContainText(`${game} Team`);
        await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      });
    });
    // }
  });

  test(`Create a character page on Endfield project`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `qa-automation-character-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgEndfieldPage();
    await moba.ugProfilePage.gotoCharacterPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Character page with the name: ${pageName} is created on Endfield project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText('Endfield Character');
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a deck page on Riftbound project`, async ({ page }) => {
    const uniqueId = uuidv4();
    const pageName = `qa-automation-deck-page-${uniqueId}`;
    const moba = new Moba(page);

    await moba.mainURLs.openUgRiftboundPage();
    await moba.ugProfilePage.gotoDeckPlannerPage();
    await moba.ugBuildPlanner.createUgDraftPage(pageName);

    await test.step(`Expected Result: Deck page with the name: ${pageName} is created on Riftbound project`, async () => {
      await expect(moba.ugBuildPage.header).toContainText('Riftbound Deck');
      await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
    });
  });
});

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

test('Check error state for empty "CardGrid" widget', async ({ browser }) => {
  const adminContext = await browser.newContext({ storageState: '.auth/adminAuth.json' });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);
  const uniqueId = uuidv4();
  const pageName = `/qa-automation-st-page-${uniqueId}`;

  await admin.mainURLs.openDestiny2StPlanner();
  await admin.stPage.addCardGalleryWidget();
  await admin.stPage.createStPage(pageName);

  await test.step(`Expected Result: Error modal with Empty items appears`, async () => {
    await expect(admin.stPage.errorModal).toContainText('Changes could not be saved');
  });
});

filterProjectsByAvailableStaticData('staticData').forEach(({ game, staticDataStPage }) => {
  test(`Check static data on NGF ${game}`, async ({ browser }) => {
    const adminContext = await browser.newContext({ storageState: '.auth/adminAuth.json' });
    const adminPage = await adminContext.newPage();
    const admin = new Moba(adminPage);

    try {
      switch (game) {
        case 'Riftbound': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Adaptatron';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'ZZZ': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Alice';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case '2XKO': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Blitzcrank';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Diablo 4': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Amethyst';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Nightreign': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Blood Loss';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Monster Hunter Wilds': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Dragon';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem, { exact: true })).toBeVisible();
          break;
        }
        case 'Hades 2': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Frinos';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Borderlands 4': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Entanglement';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Deadlock': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Channeling Time';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'PoE 2': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Acolyte of Chayula';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'PoE': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Ascendant';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'The Bazaar': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Dooley';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Endfield': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Akekuri';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Marathon': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Light Rounds';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
        case 'Overwatch': {
          await adminPage.goto(`${process.env.BASE_URL}${staticDataStPage}`);
          await admin.stPage.editButton.click();
          await admin.stPage.staticDataButton.click();

          const gameSpecificItem = 'Light Rounds';

          await expect(admin.stPage.dropdownStaticData).toContainText(gameSpecificItem);
          await expect(adminPage.getByText(gameSpecificItem)).toBeVisible();
          break;
        }
      }
    } finally {
      await adminContext.close();
    }
  });
});
