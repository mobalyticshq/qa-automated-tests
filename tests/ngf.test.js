import { test, expect } from "@playwright/test";

test("There is no a new game in navbar on the produciton", async ({
  page,
  baseURL,
}) => {
  const NEW_GAME = "ZZZ";
  await test.step(`Go to ${baseURL}`, async () => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
  });
  await test.step("Click on the D4 game", async () => {
    await page.getByRole("link", { name: "5c7b868f-logo-diablo-" }).click();
  });

  await test.step(`Expected Result: There is no ${NEW_GAME} in the navbar on prod`, async () => {
    await expect(page.getByText("LoLTFTVALLost ArkDestiny")).not.toContainText(
      NEW_GAME
    );
  });
});
