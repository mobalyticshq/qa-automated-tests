import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Ngf } from "../src/page-object/ngf";

let stAdminUrl = "https://stg.mobalytics.gg/poe-2/admin";
let stPageName = "/1180";
const NEW_GAME = "ZZZ";

test("There is no a new game in navbar on the production", async ({
  page,
  baseURL,
}) => {
  const ngf = new Ngf(page);
  await ngf.mainURLs.openMainPage(baseURL);
  await ngf.mainPage.selectDestinyProject();

  await test.step(`Expected Result: There is no ${NEW_GAME} game in the navbar on prod`, async () => {
    await expect(ngf.navbar.navbar).not.toContainText(NEW_GAME);
  });
});

test(`Go to ${stAdminUrl} admin structure page`, async ({ page }) => {
  // Добавляем куки в браузерный контекст
  // await page.context().addCookies(apiAuth.cookies);
  // console.log(await page.context().cookies());
  const ngf = new Ngf(page);

  await ngf.mainURLs.openStPage(stAdminUrl);
  await test.step(`Expected Result: Admin structure page is opened`, async () => {
    await expect(ngf.stAdminPage.createButton).toBeVisible();
  });
});

test(`Open view mode ${stPageName} of the structure page`, async ({ page }) => {
  const ngf = new Ngf(page);

  await ngf.mainURLs.openStPage(stAdminUrl);
  await ngf.stAdminPage.clickOnStWidget(stPageName);
  await test.step(`Expected Result: View mode of the ${stPageName} structure page is opened`, async () => {
    await expect(ngf.stPage.stPageTitle(stPageName)).toContainText(stPageName);
  });
});

test(`Open edit mode of the ${stPageName} structure page`, async ({ page }) => {
  const ngf = new Ngf(page);

  await ngf.mainURLs.openStPage(stAdminUrl);
  await ngf.stAdminPage.clickEditButton(stPageName);
  await test.step(`Expected Result: Edit mode of the ${stPageName} structure page is opened`, async () => {
    await expect(ngf.stPage.stPageTitle(stPageName)).toContainText(stPageName);
  });
});

