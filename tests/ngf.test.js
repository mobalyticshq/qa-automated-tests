import { test, expect } from "@playwright/test";

test("There is no a new game in navbar on the produciton", async ({ page }) => {
  const NEW_GAME = "ZZZ";

  await page.goto("", {
    waitUntil: "domcontentloaded",
  });
  await page.getByRole("link", { name: "5c7b868f-logo-diablo-" }).click();
  await expect(page.getByText("LoLTFTVALLost ArkDestiny")).not.toContainText(
    NEW_GAME
  );
});
