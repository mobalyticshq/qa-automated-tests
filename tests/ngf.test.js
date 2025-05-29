import { expect } from "@playwright/test";
import { test } from "../src/fixtures/index";
import { Ngf } from "../src/page-object/ngf";
import { USER_ROLES } from "../src/setup/credentials";

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

test("Go to structure page", async ({ apiAuth, page }) => {
  // Добавляем куки в браузерный контекст
  await page.context().addCookies(apiAuth.cookies);
console.log(await page.context().cookies());
  const ngf = new Ngf(page);
  let stUrl = "https://stg.mobalytics.gg/elden-ring-nightreign/admin";

  await ngf.mainURLs.openStPage(stUrl);

  await test.step(`Expected Result: Structure page is opened`, async () => {
    await expect(ngf.stPage.createButton).toBeVisible();
  });
});
