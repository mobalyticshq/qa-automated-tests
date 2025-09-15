import { test, expect } from "@playwright/test";

const isProd = process.env.BASE_URL === "https://mobalytics.gg";

const GAMES = {
  ZZZ: { isPresentInSitemap: true, testUrl: "/zzz/sitemap.xml" },
  VALORANT: { isPresentInSitemap: true, testUrl: `/valorant/sitemap.xml` },
  SITEMAP_INDEX: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
  PRODUCT_SITEMAP: {
    isPresentInSitemap: true,
    testUrl: `/product-sitemap.xml`,
  },
  SITEMAP: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
  CHAMPIONS: { isPresentInSitemap: true, testUrl: `/champions-sitemap.xml` },
  TFT: { isPresentInSitemap: true, testUrl: `/tft/sitemap.xml` },
  SET15: { isPresentInSitemap: true, testUrl: `/tft/set15/sitemap.xml` },
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
  HADES2: {
    isPresentInSitemap: true,
    testUrl: `/hades-2/sitemap.xml`,
  },
  NEWS: { isPresentInSitemap: true, testUrl: `/news/sitemap.xml` },
  BORDERLANDS4: {
    isPresentInSitemap: true,
    testUrl: `/borderlands-4/sitemap.xml`,
  },
  DEADLOCK: { isPresentInSitemap: true, testUrl: `/deadlock/sitemap.xml` },
  POE_2: { isPresentInSitemap: true, testUrl: `/poe-2/sitemap.xml` },
  BAZAAR: { isPresentInSitemap: true, testUrl: `/the-bazaar/sitemap.xml` },
};

test(`Checking sitemap for all games on ${process.env.URL_SITEMAP}`, async ({
  page,
}) => {
  const gamesList = Object.keys(GAMES);

  for (let gamekey of gamesList) {
    const game = GAMES[gamekey];
    await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
      await page.goto(process.env.URL_SITEMAP);
    });

    await test.step(`Expected Result: ${gamekey} is present in ${process.env.URL_SITEMAP}`, async () => {
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
