import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Moba } from "../src/page-object/moba";
import { v4 as uuidv4 } from "uuid";

const stAdminUrl = "https://stg.mobalytics.gg/poe-2/admin";
const NEW_GAME = "ZZZ";

test("There is no a new game in navbar on the production", async ({
  page,
  baseURL,
}) => {
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

  await moba.mainURLs.openStPage(stAdminUrl);
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

  await moba.mainURLs.openStPage(stAdminUrl);
  await moba.stAdminPage.clickOnStWidget();
  await test.step(`Expected Result: View mode the /1180 structure page is opened`, async () => {
    await expect(moba.stPage.stPageTitle).toContainText("/1180");
  });
});

test(`Open an edit mode of "/1180" structure page`, async ({
  apiAuth,
  page,
}) => {
  await page.context().addCookies(apiAuth.cookies);

  const moba = new Moba(page);

  await moba.mainURLs.openStPage(stAdminUrl);
  await moba.stAdminPage.clickEditButton();
  await test.step(`Expected Result: Edit mode the "/1180" structure page is opened`, async () => {
    await expect(moba.stPage.stPageTitle).toContainText("/1180");
    await expect(moba.stPage.addSectionButton).toBeVisible();
  });
});

test(`Create a structure page on PoE project`, async ({
  apiAuth,
  page,
  cleanupPages,
}) => {
  await page.context().addCookies(apiAuth.cookies);
  const uniqueId = uuidv4();
  const pageId = `/qa-automation-st-page-${uniqueId}`;
  const moba = new Moba(page);

  await moba.mainURLs.openStPage(stAdminUrl);
  await moba.stAdminPage.clickOnCreatePageButton();
  await moba.stPage.addHeaderV2Widget();
  await moba.stPage.createStPage(pageId);

  // Регистрируем страницу для удаления
  cleanupPages.addPageForCleanup(pageId);

  await test.step(`Expected Result: Structure page is created on PoE project`, async () => {
    await expect(moba.stPage.headerV2GamePoE).toContainText(`PoE 2`);
    await expect(moba.stPage.stPageTitle).toContainText(pageId);
  });
});
