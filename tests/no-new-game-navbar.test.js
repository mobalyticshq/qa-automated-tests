import { test, expect } from "@playwright/test";

test("New game is missing in navbar", async ({ page }) => {
  const GAME = "ZZZ";
  await page.goto("https://mobalytics.gg/poe-2", {
    waitUntil: "domcontentloaded",
  });
  await expect(page.getByText("LoLTFTVALLost ArkDestiny")).not.toContainText(
    GAME
  );
});
