import { test, expect } from "@playwright/test";

test("New game is missing in navbar", async ({ page }) => {
  const GAME = "ZZZ";
  await page.goto("");
  await page.getByRole("link", { name: "5c7b868f-logo-diablo-" }).click();
  await expect(page.getByText("LoLTFTVALLost ArkDestiny")).not.toContainText(
    GAME
  );
});
