import { test, expect } from "@playwright/test";

const isProd = process.env.BASE_URL === "https://mobalytics.gg";

const GAMES = {
  ZZZ: { isPresentInSitemap: !isProd, testUrl: "/zzz/sitemap.xml" },
  VALORANT: { isPresentInSitemap: true, testUrl: `/valorant/sitemap.xml` },
  SITEMAP_INDEX: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
  PRODUCT_SITEMAP: {
    isPresentInSitemap: true,
    testUrl: `/product-sitemap.xml`,
  },
  SITEMAP: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
  CHAMPOINS: { isPresentInSitemap: true, testUrl: `/champions-sitemap.xml` },
  TFT: { isPresentInSitemap: true, testUrl: `/tft/sitemap.xml` },
  SET14: { isPresentInSitemap: true, testUrl: `/tft/set14/sitemap.xml` },
  SET10: { isPresentInSitemap: true, testUrl: `/tft/set10/sitemap.xml` },
  LOST_ARK: { isPresentInSitemap: true, testUrl: `/lost-ark/sitemap.xml` },
  DESTINY_2: { isPresentInSitemap: true, testUrl: `/destiny-2/sitemap.xml` },
  DIABLO_4: { isPresentInSitemap: true, testUrl: `/diablo-4/sitemap.xml` },
  ELDEN_RING: {
    isPresentInSitemap: true,
    testUrl: `/elden-ring-nightreign/sitemap.xml`,
  },
  MARVEL_RIVALS: {
    isPresentInSitemap: true,
    testUrl: `/marvel-rivals/sitemap.xml`,
  },
  MHV: { isPresentInSitemap: true, testUrl: `/mhw/sitemap.xml` },
  DEADLOCK: { isPresentInSitemap: true, testUrl: `/deadlock/sitemap.xml` },
  POE_2: { isPresentInSitemap: true, testUrl: `/poe-2/sitemap.xml` },
  BAZAAR: { isPresentInSitemap: true, testUrl: `/the-bazaar/sitemap.xml` },
};

test(`Product sitemap is ok on PROD/STG`, async ({ page }) => {
  const gamesList = Object.keys(GAMES);
  const ENV_SITEMAP = process.env.URL_SITEMAP;

  for (let gamekey of gamesList) {
    await test.step(`Open baseUrl: ${ENV_SITEMAP}`, async () => {
      await page.goto(ENV_SITEMAP);
    });
    const game = GAMES[gamekey];

    await test.step(`Expected Result: ${gamekey} is present in ${ENV_SITEMAP}`, async () => {
      if (game.isPresentInSitemap === true) {
        await expect(page.locator("#folder0")).toContainText(
          `${process.env.BASE_URL}${game.testUrl}`
        );
      } else {
        await expect(page.locator("#folder0")).not.toContainText(
          `${process.env.BASE_URL}${game.testUrl}`
        );
      }
    });
  }
});
