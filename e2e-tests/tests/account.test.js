import { test, expect } from "@playwright/test";
import { Moba } from "../../src/page-object/moba";
import { v4 as uuidv4 } from "uuid";

test("Delete mobalytics account", async ({ page }) => {
  const moba = new Moba(page);
  const uniqueId = uuidv4().substring(0, 4);
  const accountName = `ns+${uniqueId}@mobalyticshq.com`;

  await moba.mainURLs.openMhwPage();
  await moba.navbar.gotoSignInPage();
  await moba.authorizePage.registerAccount(accountName);
  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountSettings.deleteAccount();
  await expect(moba.byeBye.header).toBeVisible();
  await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
});
