import { test, expect } from "@playwright/test";

test("There is no a new game in navbar on the produciton", async ({ page }) => {
  const GAME = "ZZZ";
  await page.goto("");
  await page.getByRole("link", { name: "5c7b868f-logo-diablo-" }).click();
  await expect(page.getByText("LoLTFTVALLost ArkDestiny")).not.toContainText(
    GAME
  );
});
