# Test info

- Name: Creating UG Pages >> Create a guide page on Marvel Rivals project
- Location: /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/ngf.test.js:456:7

# Error details

```
Error: expect(locator).toContainText(expected)

Locator: getByTestId('document-controls-panel')
Expected string: "qa-automation-guide-page-b5962234-44e7-4258-bb45-d345f7bcb740"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for getByTestId('document-controls-panel')

    at /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/ngf.test.js:474:51
    at /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/ngf.test.js:470:5
```

# Page snapshot

```yaml
- link "Mobalytics":
  - /url: /marvel-rivals
  - img "Mobalytics"
- link "League of Legends LoL":
  - /url: https://mobalytics.gg/lol
  - img "League of Legends"
  - text: LoL
- link "Teamfight Tactics TFT":
  - /url: https://mobalytics.gg/tft
  - img "Teamfight Tactics"
  - text: TFT
- link "Path of Exile 2 PoE 2":
  - /url: https://mobalytics.gg/poe-2
  - img "Path of Exile 2"
  - text: PoE 2
- link "Diablo 4 Diablo 4":
  - /url: https://mobalytics.gg/diablo-4
  - img "Diablo 4"
  - text: Diablo 4
- link "Elden Ring Nightreign Nightreign New":
  - /url: https://mobalytics.gg/elden-ring-nightreign
  - img "Elden Ring Nightreign"
  - text: Nightreign New
- link "Deadlock Deadlock":
  - /url: https://mobalytics.gg/deadlock
  - img "Deadlock"
  - text: Deadlock
- link "Valorant VAL":
  - /url: https://mobalytics.gg/valorant
  - img "Valorant"
  - text: VAL
- link "Monster Hunter Wilds Monster Hunter Wilds":
  - /url: https://mobalytics.gg/mhw
  - img "Monster Hunter Wilds"
  - text: Monster Hunter Wilds
- link "Destiny 2 Destiny 2":
  - /url: https://mobalytics.gg/destiny-2
  - img "Destiny 2"
  - text: Destiny 2
- link "Lost Ark Lost Ark":
  - /url: https://mobalytics.gg/lost-ark
  - img "Lost Ark"
  - text: Lost Ark
- button:
  - img
- link "The Bazaar The Bazaar":
  - /url: https://mobalytics.gg/the-bazaar
  - img "The Bazaar"
  - text: The Bazaar
- link "Marvel Rivals Marvel Rivals":
  - /url: https://mobalytics.gg/marvel-rivals
  - img "Marvel Rivals"
  - text: Marvel Rivals
- link "win logo Download app":
  - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-marvel-rivals&utm_medium=homepage&utm_source=web
  - button "win logo Download app":
    - img "win logo"
    - text: Download app
- text: Community
- button "Remove Ads"
- img "settings"
- img "support"
- link "Home":
  - /url: /marvel-rivals
  - img "Home"
- link "Tier List":
  - /url: /marvel-rivals/tier-list
  - img "Tier List"
- link "Heroes":
  - /url: /marvel-rivals/heroes
  - img "Heroes"
- link "Team-Ups":
  - /url: /marvel-rivals/guides/best-team-ups
  - img "Team-Ups"
- link "Guides":
  - /url: /marvel-rivals/guides
  - img "Guides"
- link "Battle Matrix new":
  - /url: /marvel-rivals/battle-matrix/home
  - img "Battle Matrix"
  - text: new
- main:
  - iframe
- complementary:
  - text: Remove Ads
  - iframe
- banner: Advertisement Remove Ads
- text: Remove all ads Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
- button "Remove ads"
```

# Test source

```ts
  374 |   test(`Create a build page on Deadlock project`, async ({
  375 |     apiAuthAdmin,
  376 |     page,
  377 |     baseURL,
  378 |   }) => {
  379 |     await page.context().addCookies(apiAuthAdmin.cookies);
  380 |     const uniqueId = uuidv4();
  381 |     const pageName = `qa-automation-build-page-${uniqueId}`;
  382 |     const moba = new Moba(page);
  383 |
  384 |     await moba.mainURLs.openUgDeadlockPage(baseURL);
  385 |     await moba.ugProfilePage.gotoBuildPlannerPage();
  386 |     await moba.ugBuildPage.createBuild(pageName);
  387 |
  388 |     await test.step(`Expected Result: Build page with the name: ${pageName} is created on Deadlock project`, async () => {
  389 |       await expect(moba.ugBuildPage.header).toContainText("Deadlock Build");
  390 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  391 |     });
  392 |   });
  393 |
  394 |   test(`Create a guide page on Deadlock project`, async ({
  395 |     apiAuthAdmin,
  396 |     page,
  397 |     baseURL,
  398 |   }) => {
  399 |     await page.context().addCookies(apiAuthAdmin.cookies);
  400 |     const uniqueId = uuidv4();
  401 |     const pageName = `qa-automation-guide-page-${uniqueId}`;
  402 |     const moba = new Moba(page);
  403 |
  404 |     await moba.mainURLs.openUgDeadlockPage(baseURL);
  405 |     await moba.ugProfilePage.gotoGuidePlannerPage();
  406 |     await moba.ugBuildPage.createGuide(pageName);
  407 |
  408 |     await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Deadlock project`, async () => {
  409 |       await expect(moba.ugBuildPage.header).toContainText("Deadlock Guide");
  410 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  411 |     });
  412 |   });
  413 |
  414 |   test(`Create a guide page on MHW project`, async ({
  415 |     apiAuthAdmin,
  416 |     page,
  417 |     baseURL,
  418 |   }) => {
  419 |     await page.context().addCookies(apiAuthAdmin.cookies);
  420 |     const uniqueId = uuidv4();
  421 |     const pageName = `qa-automation-guide-page-${uniqueId}`;
  422 |     const moba = new Moba(page);
  423 |
  424 |     await moba.mainURLs.openUgMhwPage(baseURL);
  425 |     await moba.ugProfilePage.gotoGuidePlannerPage();
  426 |     await moba.ugBuildPage.createGuide(pageName);
  427 |
  428 |     await test.step(`Expected Result: Guide page with the name: ${pageName} is created on MHW project`, async () => {
  429 |       await expect(moba.ugBuildPage.header).toContainText(
  430 |         "Monster Hunter Wilds Guide"
  431 |       );
  432 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  433 |     });
  434 |   });
  435 |
  436 |   //* At this moment Bazaar guides isn't available
  437 |   // test(`Create a guide page on Bazaar project`, async ({
  438 |   //   apiAuthAdmin,
  439 |   //   page,
  440 |   // }) => {
  441 |   //   await page.context().addCookies(apiAuthAdmin.cookies);
  442 |   //   const uniqueId = uuidv4();
  443 |   //   const pageName = `qa-automation-guide-page-${uniqueId}`;
  444 |   //   const moba = new Moba(page);
  445 |
  446 |   //   await moba.mainURLs.openUgBazaarPage();
  447 |   //   await moba.ugProfilePage.gotoGuidePlannerPage();
  448 |   //   await moba.ugBuildPage.createGuide(pageName);
  449 |
  450 |   //   await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Bazaar project`, async () => {
  451 |   //     await expect(moba.ugBuildPage.header).toContainText("The Bazaar Guide");
  452 |   //     await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  453 |   //   });
  454 |   // });
  455 |
  456 |   test(`Create a guide page on Marvel Rivals project`, async ({
  457 |     apiAuthAdmin,
  458 |     page,
  459 |     baseURL,
  460 |   }) => {
  461 |     await page.context().addCookies(apiAuthAdmin.cookies);
  462 |     const uniqueId = uuidv4();
  463 |     const pageName = `qa-automation-guide-page-${uniqueId}`;
  464 |     const moba = new Moba(page);
  465 |
  466 |     await moba.mainURLs.openUgMarvelRivalsPage(baseURL);
  467 |     await moba.ugProfilePage.gotoGuidePlannerPage();
  468 |     await moba.ugBuildPage.createGuide(pageName);
  469 |
  470 |     await test.step(`Expected Result: Guide page with the name: ${pageName} is created on Marvel Rivals project`, async () => {
  471 |       await expect(moba.ugBuildPage.header).toContainText(
  472 |         "Marvel Rivals Guide"
  473 |       );
> 474 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
      |                                                   ^ Error: expect(locator).toContainText(expected)
  475 |     });
  476 |   });
  477 |
  478 |   test(`Create a guide page on ZZZ project`, async ({
  479 |     apiAuthAdmin,
  480 |     page,
  481 |     baseURL,
  482 |   }) => {
  483 |     await page.context().addCookies(apiAuthAdmin.cookies);
  484 |     const uniqueId = uuidv4();
  485 |     const pageName = `qa-automation-guide-page-${uniqueId}`;
  486 |     const moba = new Moba(page);
  487 |
  488 |     await moba.mainURLs.openUgZzzPage(baseURL);
  489 |     await moba.ugProfilePage.gotoGuidePlannerPage();
  490 |     await moba.ugBuildPage.createGuide(pageName);
  491 |
  492 |     await test.step(`Expected Result: Guide page with the name: ${pageName} is created on ZZZ project`, async () => {
  493 |       await expect(moba.ugBuildPage.header).toContainText("ZZZ Guide");
  494 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  495 |     });
  496 |   });
  497 |
  498 |   test(`Create a team page on ZZZ project`, async ({
  499 |     apiAuthAdmin,
  500 |     page,
  501 |     baseURL,
  502 |   }) => {
  503 |     await page.context().addCookies(apiAuthAdmin.cookies);
  504 |     const uniqueId = uuidv4();
  505 |     const pageName = `qa-automation-team-page-${uniqueId}`;
  506 |     const moba = new Moba(page);
  507 |
  508 |     await moba.mainURLs.openUgZzzPage(baseURL);
  509 |     await moba.ugProfilePage.gotoTeamPlannerPage();
  510 |     await moba.ugBuildPage.createGuide(pageName);
  511 |
  512 |     await test.step(`Expected Result: Team page with the name: ${pageName} is created on ZZZ project`, async () => {
  513 |       await expect(moba.ugBuildPage.header).toContainText("ZZZ Team");
  514 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  515 |     });
  516 |   });
  517 | });
  518 |
  519 | test.describe("Checking role permissions", () => {
  520 |   test.describe("Admin permission", () => {
  521 |     test(`Admin role has access to the Admin ST page`, async ({
  522 |       apiAuthAdmin,
  523 |       page,
  524 |       baseURL,
  525 |     }) => {
  526 |       await page.context().addCookies(apiAuthAdmin.cookies);
  527 |       let adminTitle = "Structure Pages";
  528 |       const moba = new Moba(page);
  529 |
  530 |       await moba.mainURLs.openAdminPoePage(baseURL);
  531 |       await test.step(`Expected Result: Admin structure page is opened`, async () => {
  532 |         await expect(moba.stAdminPage.stAdminTitle(adminTitle)).toContainText(
  533 |           adminTitle
  534 |         );
  535 |       });
  536 |     });
  537 |
  538 |     test('St Widget contains "Edit" button, "Delete" button & "Create Page" button is present on ST page for Admin role', async ({
  539 |       page,
  540 |       apiAuthAdmin,
  541 |       baseURL,
  542 |     }) => {
  543 |       await page.context().addCookies(apiAuthAdmin.cookies);
  544 |       const moba = new Moba(page);
  545 |       let stWidgetName = "/qa-not-delete-st-page";
  546 |
  547 |       await moba.mainURLs.openAdminNightreignPage(baseURL);
  548 |
  549 |       await test.step('Expected Result: St Widget contains "Edit" button', async () => {
  550 |         await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
  551 |       });
  552 |       await test.step('Expected Result: St Widget contains "Delete" button', async () => {
  553 |         await expect(moba.stAdminPage.deleteButton(stWidgetName)).toBeVisible();
  554 |       });
  555 |       await test.step('Expected Result: "Create Page" button is present on ST page for Admin role', async () => {
  556 |         await expect(moba.stAdminPage.createPageButton).toBeVisible();
  557 |       });
  558 |     });
  559 |
  560 |     test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Admin role`, async ({
  561 |       apiAuthAdmin,
  562 |       page,
  563 |       baseURL,
  564 |     }) => {
  565 |       await page.context().addCookies(apiAuthAdmin.cookies);
  566 |       let stWidgetName = "/qa-not-delete-st-page";
  567 |
  568 |       const moba = new Moba(page);
  569 |
  570 |       await moba.mainURLs.openAdminNightreignPage(baseURL);
  571 |       await moba.stAdminPage.clickOnStWidget(stWidgetName);
  572 |       await test.step(`Expected Result: View mode the "/home" structure page is opened`, async () => {
  573 |         await expect(moba.stPage.stPageTitle).toContainText(stWidgetName);
  574 |       });
```