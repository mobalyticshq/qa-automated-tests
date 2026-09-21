# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/role-permissions.test.js >> Admin permission >> Admin role has access to the Admin ST page
- Location: e2e-tests/ngf/role-permissions.test.js:10:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('heading', { name: 'Structure Pages' })
Expected substring: "Structure Pages"
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for getByRole('heading', { name: 'Structure Pages' })

```

```yaml
- region "Notifications Alt+T"
```

# Test source

```ts
  1   | import { v4 as uuidv4 } from 'uuid';
  2   | import { test, expect } from '../fixtures/fixture';
  3   | import { Moba } from '../../app/page-object/moba';
  4   | 
  5   | test.beforeEach(() => new Promise((resolve) => setTimeout(() => resolve(), 1000)));
  6   | 
  7   | test.describe('Admin permission', () => {
  8   |   test.use({ storageState: '.auth/adminAuth.json' }); // add admin auth
  9   | 
  10  |   test(`Admin role has access to the Admin ST page`, async ({ page }) => {
  11  |     let adminTitle = 'Structure Pages';
  12  |     const moba = new Moba(page);
  13  | 
  14  |     await moba.mainURLs.openAdminPoePage();
  15  | 
  16  |     await test.step(`Expected Result: Admin structure page is opened`, async () => {
> 17  |       await expect(moba.stAdminPage.stAdminTitle(adminTitle)).toContainText(adminTitle);
      |                                                               ^ Error: expect(locator).toContainText(expected) failed
  18  |     });
  19  |   });
  20  | 
  21  |   test('St Widget contains "Edit" button, "Delete" button & "Create Page" button is present on ST Admin page for Admin role', async ({
  22  |     page,
  23  |   }) => {
  24  |     const moba = new Moba(page);
  25  |     let stWidgetName = '/qa-not-delete-st-page';
  26  | 
  27  |     await moba.mainURLs.openAdminNightreignPage();
  28  | 
  29  |     await test.step('Expected Result: St Widget contains "Edit" button', async () => {
  30  |       await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
  31  |     });
  32  |     await test.step('Expected Result: St Widget contains "Delete" button', async () => {
  33  |       await expect(moba.stAdminPage.deleteButton(stWidgetName)).toBeVisible();
  34  |     });
  35  |     await test.step('Expected Result: "Create Page" button is present on ST page for Admin role', async () => {
  36  |       await expect(moba.stAdminPage.createStPageButton).toBeVisible();
  37  |     });
  38  |   });
  39  | 
  40  |   test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Admin role`, async ({ page }) => {
  41  |     let stWidgetName = '/qa-not-delete-st-page';
  42  | 
  43  |     const moba = new Moba(page);
  44  | 
  45  |     await moba.mainURLs.openAdminNightreignPage();
  46  |     await moba.stAdminPage.clickStCardWidget(stWidgetName);
  47  | 
  48  |     await test.step(`Expected Result: View mode the "/qa-not-delete-st-page" structure page is opened`, async () => {
  49  |       await expect(moba.stPage.controlPanel).toContainText(stWidgetName);
  50  |     });
  51  |   });
  52  | 
  53  |   test(`Admin role can duplicate the structure page`, async ({ page, cleanupStPoE2Pages }) => {
  54  |     const uniqueId = uuidv4();
  55  |     const pageName = `/qa-automation-st-page-${uniqueId}`;
  56  |     const moba = new Moba(page);
  57  |     let stWidgetName = '/qa-not-delete-st-page';
  58  | 
  59  |     await moba.mainURLs.openAdminPoe2Page();
  60  |     await moba.stAdminPage.clickStCardWidget(stWidgetName);
  61  |     await moba.stPage.duplicateStPage(pageName);
  62  |     cleanupStPoE2Pages.addPageForCleanup(pageName); // Register page for deleting
  63  |     await moba.mainURLs.openAdminPoe2Page();
  64  | 
  65  |     await test.step(`Expected Result: ST page: ${pageName} is duplicated under Admin role`, async () => {
  66  |       await expect(moba.stAdminPage.stCardWidget(pageName)).toBeVisible();
  67  |     });
  68  |   });
  69  | 
  70  |   test(`Admin role can edit the structure page`, async ({ page, cleanupStZzzPages }) => {
  71  |     const uniqueId = uuidv4();
  72  |     const pageName = `/qa-automation-st-page-${uniqueId}`;
  73  |     const moba = new Moba(page);
  74  | 
  75  |     await moba.mainURLs.openAdminZzzPage();
  76  |     await moba.stAdminPage.gotoStPlannerPage();
  77  |     await moba.stPage.addHeaderWidget();
  78  |     await moba.stPage.createStPage(pageName);
  79  |     cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
  80  |     await moba.stPage.editStPage();
  81  | 
  82  |     await test.step(`Expected Result: Document Discovery is added to the st page: ${pageName} in edit mode`, async () => {
  83  |       await expect(moba.stPage.headerWidget).toBeVisible();
  84  |       await expect(moba.stPage.documentDiscoveryWidget).toBeVisible();
  85  |       await expect(moba.stPage.addSectionButton).not.toBeVisible();
  86  |       await expect(moba.stPage.dotsButton).toBeVisible();
  87  |     });
  88  |   });
  89  | 
  90  |   test(`Admin role can delete the structure page on the ST page`, async ({ page }) => {
  91  |     const uniqueId = uuidv4();
  92  |     const pageName = `/qa-automation-st-page-${uniqueId}`;
  93  |     const moba = new Moba(page);
  94  | 
  95  |     await moba.mainURLs.openAdminDeadlockPage();
  96  |     await moba.stAdminPage.gotoStPlannerPage();
  97  |     await moba.stPage.addHeaderWidget();
  98  |     await moba.stPage.createStPage(pageName);
  99  |     await moba.stPage.deleteStPage();
  100 | 
  101 |     await test.step(`Expected Result: ST page: ${pageName} is deleted`, async () => {
  102 |       // await expect(moba.stAdminPage.stAdminTitle("Structure Pages")).toBeVisible();
  103 |       await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  104 |     });
  105 |   });
  106 | 
  107 |   test(`Admin role is allowed to publish structure pages`, async ({ page, cleanupStZzzPages }) => {
  108 |     const uniqueId = uuidv4();
  109 |     const pageName = `/qa-automation-st-page-${uniqueId}`;
  110 |     const moba = new Moba(page);
  111 | 
  112 |     await moba.mainURLs.openAdminZzzPage();
  113 |     await moba.stAdminPage.gotoStPlannerPage();
  114 |     await moba.stPage.addHeaderWidget();
  115 |     await moba.stPage.createStPage(pageName);
  116 |     cleanupStZzzPages.addPageForCleanup(pageName); // Register page for deleting
  117 |     await moba.stPage.publishStPage();
```