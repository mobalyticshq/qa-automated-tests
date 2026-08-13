import { v4 as uuidv4 } from 'uuid';
import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

test.beforeEach(() => new Promise((resolve) => setTimeout(() => resolve(), 1000)));

test.describe('Creating ST Pages', () => {
  //* Added new locator for header widget. It needs for testing purpose this locater
  test(`Create a structure page on STS 2 project`, async ({ cleanupStSts2Pages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStSts2Pages;

    await moba.mainURLs.openAdminSts2Page();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on STS 2  project`, async () => {
      await expect(moba.stPage.headerSts2).toContainText('STS 2');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

  test(`Create a structure page on Overwatch project`, async ({ cleanupStOverwatchPages }) => {
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;
    const { moba, addPageForCleanup } = cleanupStOverwatchPages;

    await moba.mainURLs.openAdminOverwatchPage();
    await moba.stAdminPage.gotoStPlannerPage();
    await moba.stPage.addHeaderWidget();
    await moba.stPage.createStPage(pageName);

    addPageForCleanup(pageName); // Register page for deleting

    await test.step(`Expected Result: Structure page with the name: ${pageName} is created on Overwatch project`, async () => {
      await expect(moba.stPage.headerOverwatch).toContainText('Overwatch');
      await expect(moba.stPage.controlPanel).toContainText(pageName);
    });
  });

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

  test('Check error state for empty "CardGrid" widget', async ({ page }) => {
    const moba = new Moba(page);
    const uniqueId = uuidv4();
    const pageName = `/qa-automation-st-page-${uniqueId}`;

    await moba.mainURLs.openPoE2StPlanner();
    await moba.stPage.addCardGalleryWidget();
    await moba.stPage.createStPage(pageName);

    await test.step(`Expected Result: Error modal with Empty items appears`, async () => {
      await expect(moba.stPage.errorModal).toContainText('Changes could not be saved');
    });
  });
});

// test('delete ST page', async ({ playwright }) => {
//   const api = await playwright.request.newContext({ storageState: '.auth/adminAuth.json' });
//   const id = 'f9f0ab23-7fd3-4689-b3c2-9283512c221c2';
//   const status = 'ARCHIVED'
//   const response = await api.post('https://stg.mobalytics.gg/api/poe-2/v1/graphql/query', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       query: `
//             mutation Poe2SetStatusStDocumentMutation($input: Poe2StructDocumentSetStatusInput!) {
//               game: poe2 {
//                 documents {
//                   structDocumentSetStatus(input: $input) {
//                     error
//                     data {
//                       ...NgfSetStatusDocumentFragment
//                     }
//                   }
//                 }
//               }
//             }

//             fragment NgfSetStatusDocumentFragment on NgfStructDocument {
//               id
//               slug
//               status
//             }
//           `,
//       // Переменные передаём отдельным полем, а не подстановкой в строку
//       variables: { input: { id, status } },
//     },
//   });

//   // GraphQL отвечает 200 даже на ошибку — проверяем оба уровня
//   expect.soft(response.ok()).toBeTruthy();
//   const body = await response.json();
//   console.log(body);

//   // documents === null => запрос ушёл неавторизованным
//   expect.soft(body.data.game.documents).not.toBeNull();

//   const result = body.data.game.documents?.structDocumentSetStatus;
//   expect.soft(result.error).toBeNull();
//   expect.soft(result.data.status).toBe('ARCHIVED');

//   await api.dispose();
// });
