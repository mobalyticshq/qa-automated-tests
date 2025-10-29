import { test, expect } from "@playwright/test";
// const GAMES = {
//   ZZZ: { isPresentInSitemap: true, testUrl: "/zzz/sitemap.xml" },
//   VALORANT: { isPresentInSitemap: true, testUrl: `/valorant/sitemap.xml` },
//   SITEMAP_INDEX: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
//   PRODUCT_SITEMAP: {
//     isPresentInSitemap: true,
//     testUrl: `/product-sitemap.xml`,
//   },
//   SITEMAP: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
//   CHAMPIONS: { isPresentInSitemap: true, testUrl: `/champions-sitemap.xml` },
//   TFT: { isPresentInSitemap: true, testUrl: `/tft/sitemap.xml` },
//   SET15: { isPresentInSitemap: true, testUrl: `/tft/set15/sitemap.xml` },
//   LOST_ARK: { isPresentInSitemap: true, testUrl: `/lost-ark/sitemap.xml` },
//   DESTINY_2: { isPresentInSitemap: true, testUrl: `/destiny-2/sitemap.xml` },
//   DIABLO_4: { isPresentInSitemap: true, testUrl: `/diablo-4/sitemap.xml` },
//   ELDEN_RING: {
//     isPresentInSitemap: true,
//     testUrl: `/elden-ring-nightreign/sitemap.xml`,
//   },
//   MARVEL_RIVALS: {
//     isPresentInSitemap: true,
//     testUrl: `/marvel-rivals/sitemap.xml`,
//   },
//   MHV: { isPresentInSitemap: true, testUrl: `/mhw/sitemap.xml` },
//   HADES2: {
//     isPresentInSitemap: true,
//     testUrl: `/hades-2/sitemap.xml`,
//   },
//   NEWS: { isPresentInSitemap: true, testUrl: `/news/sitemap.xml` },
//   BORDERLANDS4: {
//     isPresentInSitemap: true,
//     testUrl: `/borderlands-4/sitemap.xml`,
//   },
//   DEADLOCK: { isPresentInSitemap: true, testUrl: `/deadlock/sitemap.xml` },
//   POE_2: { isPresentInSitemap: true, testUrl: `/poe-2/sitemap.xml` },
//   BAZAAR: { isPresentInSitemap: true, testUrl: `/the-bazaar/sitemap.xml` },
// };
// const gamesList = Object.keys(GAMES);

// for (let gamekey of gamesList) {
//   test(`Checking sitemap for ${gamekey} game on ${process.env.URL_SITEMAP}`, async ({ page }) => {
//     const game = GAMES[gamekey];
//     await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
//       await page.goto(process.env.URL_SITEMAP);
//     });

//     await test.step(`Expected Result: ${gamekey} is present in ${process.env.URL_SITEMAP}`, async () => {
//       if (game.isPresentInSitemap === true) {
//         await expect(page.locator("#folder0")).toContainText(`${process.env.BASE_URL}${game.testUrl}`);
//       } else {
//         await expect(page.locator("#folder0")).not.toContainText(`${process.env.BASE_URL}${game.testUrl}`);
//       }
//     });
//   });
// }

const isProd = process.env.BASE_URL === "https://mobalytics.gg";
[
  { game: "ZZZ", isPresentInSitemap: true, testUrl: "/zzz/sitemap.xml" },
  { game: "Valorant", isPresentInSitemap: true, testUrl: `/valorant/sitemap.xml` },
  { game: "Sitemap Index", isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
  { game: "Product Sitemap", isPresentInSitemap: true, testUrl: `/product-sitemap.xml` },
  { game: "Sitemap", isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
  { game: "Champions", isPresentInSitemap: true, testUrl: `/champions-sitemap.xml` },
  { game: "TFT", isPresentInSitemap: true, testUrl: `/tft/sitemap.xml` },
  { game: "Set15", isPresentInSitemap: true, testUrl: `/tft/set15/sitemap.xml` },
  { game: "Lost Ark", isPresentInSitemap: true, testUrl: `/lost-ark/sitemap.xml` },
  { game: "Destiny 2", isPresentInSitemap: true, testUrl: `/destiny-2/sitemap.xml` },
  { game: "Diablo 4", isPresentInSitemap: true, testUrl: `/diablo-4/sitemap.xml` },
  { game: "Elden Ring", isPresentInSitemap: true, testUrl: `/elden-ring-nightreign/sitemap.xml` },
  { game: "Marvel Rivals", isPresentInSitemap: true, testUrl: `/marvel-rivals/sitemap.xml` },
  { game: "Monster Hunter Wilds", isPresentInSitemap: true, testUrl: `/mhw/sitemap.xml` },
  { game: "Hades 2", isPresentInSitemap: true, testUrl: `/hades-2/sitemap.xml` },
  { game: "News", isPresentInSitemap: true, testUrl: `/news/sitemap.xml` },
  { game: "Borderlands 4", isPresentInSitemap: true, testUrl: `/borderlands-4/sitemap.xml` },
  { game: "Deadlock", isPresentInSitemap: true, testUrl: `/deadlock/sitemap.xml` },
  { game: "PoE 2", isPresentInSitemap: true, testUrl: `/poe-2/sitemap.xml` },
  { game: "The Bazaar", isPresentInSitemap: true, testUrl: `/the-bazaar/sitemap.xml` },
  { game: "PoE", isPresentInSitemap: true, testUrl: `/poe/sitemap.xml` },
].forEach(({ game, isPresentInSitemap, testUrl }) => {
  test(`Checking sitemap for ${game} game on ${process.env.URL_SITEMAP}`, async ({ page }) => {
    await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
      await page.goto(process.env.URL_SITEMAP);
    });

    if (isProd && isPresentInSitemap === true) {
      await test.step(`Expected Result: ${game} is present in ${process.env.URL_SITEMAP}`, async () => {
        await expect(page.locator("#folder0")).toContainText(`${process.env.BASE_URL}${testUrl}`);
      });
    } else if (isProd && isPresentInSitemap === false) {
      await test.step(`Expected Result: ${game} is not present in ${process.env.URL_SITEMAP}`, async () => {
        await expect(page.locator("#folder0")).not.toContainText(`${process.env.BASE_URL}${testUrl}`);
      });
    } else if (!isProd) {
      await test.step(`Expected Result: ${game} is present in ${process.env.URL_SITEMAP}`, async () => {
        await expect(page.locator("#folder0")).toContainText(`${process.env.BASE_URL}${testUrl}`);
      });
    }
  });
});
