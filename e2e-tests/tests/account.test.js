import { test } from "../../src/fixtures/index";
import { expect } from "@playwright/test";
import { Moba } from "../../src/page-object/moba";
import { v4 as uuidv4 } from "uuid";

test("Delete mobalytics account", async ({ page, registerAccount }) => {
  const moba = new Moba(page);

  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountSettings.deleteAccount();
  await test.step("Account is deleted", async () => {
    await expect(moba.byeBye.header).toBeVisible();
    await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
  });
});
