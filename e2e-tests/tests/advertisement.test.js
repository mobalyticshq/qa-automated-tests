import { expect } from "@playwright/test";
import { test } from "../../src/fixtures/index";
import { Moba } from "../../src/page-object/moba";

// test.describe("Separate advertisement for all projects", () => {
//   test("Nightreign advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openNightreignPage();

//     await test.step(`Expected Result: elden-ring-nightreign-nitro-video is present on the page`, async () => {
//       await expect(
//         page.locator("#elden-ring-nightreign-nitro-video")
//       ).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "elden-ring-nightreign-display-all-pages" banner is present on the page`, async () => {
//       await expect(
//         page.locator("#elden-ring-nightreign-display-all-pages")
//       ).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "elden-ring-nightreign-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(
//         page.locator("#elden-ring-nightreign-display-small-all-pages")
//       ).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-elden-ring-nightreign-display-footer-d" banner is present on the page`, async () => {
//       await expect(
//         page.locator("#web-elden-ring-nightreign-display-footer-d")
//       ).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("MHW advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openMhwPage();

//     await test.step(`Expected Result: mhw-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#mhw-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "mhw-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#mhw-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "mhw-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#mhw-display-small-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-mhw-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-mhw-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Bazaar advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openBazaarPage();

//     await test.step(`Expected Result: the-bazaar-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#the-bazaar-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "the-bazaar-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#the-bazaar-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "the-bazaar-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(
//         page.locator("#the-bazaar-display-small-all-pages")
//       ).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-the-bazaar-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-the-bazaar-display-footer-d")).toBeAttached(
//         {
//           timeout: 30000,
//         }
//       );
//     });
//   });

//   test("LoL advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openLolPage();

//     await test.step(`Expected Result: lol-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#lol-nitro-video")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "lol-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#lol-display-all-pages")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "lol-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#lol-display-small-all-pages")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-lol-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-lol-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("TFT advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openTftPage();

//     await test.step(`Expected Result: tft-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#tft-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "tft-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#tft-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "tft-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#tft-display-small-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-tft-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-tft-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("PoE 2 advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openPoePage();

//     await test.step(`Expected Result: poe-2-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#poe-2-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "poe-2-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#poe-2-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "poe-2-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#poe-2-display-small-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-poe-2-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-poe-2-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Diablo 4 advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openDiablo4Page();

//     await test.step(`Expected Result: diablo-4-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#diablo-4-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "diablo-4-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#diablo-4-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "diablo-4-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#diablo-4-display-small-all-pages")).toBeVisible(
//         {
//           timeout: 30000,
//         }
//       );
//     });
//     await test.step(`Expected Result: "web-diablo-4-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-diablo-4-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Destiny 2 advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openDestiny2Page();

//     await test.step(`Expected Result: destiny-2-nitro-video or destiny-2-video-all-pages is present on the page`, async () => {
//       const videoBanner = page
//         .locator("#destiny-2-nitro-video")
//         .or(page.locator("#destiny-2-video-all-pages"));
//       await expect(videoBanner).toBeVisible({ timeout: 30_000 });
//     });
//     await test.step(`Expected Result: "web-destiny-2-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-destiny-2-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Borderlands 4 advertisement", async ({ page, apiAuthAdmin }) => {
//     const moba = new Moba(page);

//     await page.context().addCookies(apiAuthAdmin.cookies);
//     await moba.mainURLs.openBorderlands4Page();

//     await test.step(`Expected Result: bl4-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#bl4-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "bl4-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#bl4-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "bl4-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#bl4-display-small-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-bl4-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-bl4-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Deadlock advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openDeadlockPage();

//     await test.step(`Expected Result: deadlock-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#deadlock-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "deadlock-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#deadlock-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "deadlock-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#deadlock-display-small-all-pages")).toBeVisible(
//         {
//           timeout: 30000,
//         }
//       );
//     });
//     await test.step(`Expected Result: "web-deadlock-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-deadlock-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Valorant advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openValorantPage();

//     await test.step(`Expected Result: valorant-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#valorant-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "valorant-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#valorant-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "valorant-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#valorant-display-small-all-pages")).toBeVisible(
//         {
//           timeout: 30000,
//         }
//       );
//     });
//     await test.step(`Expected Result: "web-valorant-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-valorant-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Marvel Rivals advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openMarvelRivalsPage();

//     await test.step(`Expected Result: marvel-rivals-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#marvel-rivals-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "marvel-rivals-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#marvel-rivals-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "marvel-rivals-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(
//         page.locator("#marvel-rivals-display-small-all-pages")
//       ).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-marvel-rivals-display-footer-d" banner is present on the page`, async () => {
//       await expect(
//         page.locator("#web-marvel-rivals-display-footer-d")
//       ).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("ZZZ advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openZzzPage();

//     await test.step(`Expected Result: zzz-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#zzz-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "zzz-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#zzz-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "zzz-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#zzz-display-small-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-zzz-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-zzz-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Hades 2 advertisement", async ({ page, apiAuthAdmin }) => {
//     const moba = new Moba(page);

//     await page.context().addCookies(apiAuthAdmin.cookies);
//     await moba.mainURLs.openHades2Page();

//     await test.step(`Expected Result: hades-2-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#hades-2-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "hades-2-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#hades-2-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "hades-2-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#hades-2-display-small-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "web-hades-2-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-hades-2-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });

//   test("Lost Ark advertisement", async ({ page }) => {
//     const moba = new Moba(page);

//     await moba.mainURLs.openLostArkPage();

//     await test.step(`Expected Result: lost-ark-nitro-video is present on the page`, async () => {
//       await expect(page.locator("#lost-ark-nitro-video")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "lost-ark-display-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#lost-ark-display-all-pages")).toBeVisible({
//         timeout: 30000,
//       });
//     });
//     await test.step(`Expected Result: "lost-ark-display-small-all-pages" banner is present on the page`, async () => {
//       await expect(page.locator("#lost-ark-display-small-all-pages")).toBeVisible(
//         {
//           timeout: 30000,
//         }
//       );
//     });
//     await test.step(`Expected Result: "web-lost-ark-display-footer-d" banner is present on the page`, async () => {
//       await expect(page.locator("#web-lost-ark-display-footer-d")).toBeAttached({
//         timeout: 30000,
//       });
//     });
//   });
// });

test(`Check the availability of advertising blocks for all games`, async ({
  page,
}) => {
  const GAMES = {
    ZZZ: { projectUrl: "/zzz" },
    VALORANT: { projectUrl: `/valorant` },
    TFT: { projectUrl: `/tft` },
    LOST_ARK: { projectUrl: `/lost-ark` },
    DESTINY_2: { projectUrl: `/destiny-2` },
    DIABLO_4: { projectUrl: `/diablo-4` },
    ELDEN_RING: { projectUrl: `/elden-ring-nightreign` },
    MARVEL_RIVALS: { projectUrl: `/marvel-rivals` },
    MHV: { projectUrl: `/mhw` },
    HADES2: { projectUrl: `/hades-2` },
    BORDERLANDS4: { projectUrl: `/borderlands-4` },
    DEADLOCK: { projectUrl: `/deadlock` },
    POE_2: { projectUrl: `/poe-2` },
    BAZAAR: { projectUrl: `/the-bazaar` },
  };
  const gamesList = Object.keys(GAMES);

  for (let gamekey of gamesList) {
    const game = GAMES[gamekey];
    await test.step(`Open project url: "${process.env.BASE_URL}${game.projectUrl}"`, async () => {
      await page.goto(`${process.env.BASE_URL}${game.projectUrl}`, {
        waitUntil: "domcontentloaded",
      });
    });

    if (game.projectUrl === "/zzz") {
      await test.step(`Expected Result: zzz-nitro-video is present on the page`, async () => {
        await expect(page.locator("#zzz-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "zzz-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#zzz-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "zzz-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#zzz-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-zzz-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-zzz-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/lost-ark") {
      await test.step(`Expected Result: lost-ark-nitro-video is present on the page`, async () => {
        await expect(page.locator("#lost-ark-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "lost-ark-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#lost-ark-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "lost-ark-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#lost-ark-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-lost-ark-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-lost-ark-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/marvel-rivals") {
      await test.step(`Expected Result: marvel-rivals-nitro-video is present on the page`, async () => {
        await expect(page.locator("#marvel-rivals-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "marvel-rivals-display-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#marvel-rivals-display-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "marvel-rivals-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#marvel-rivals-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-marvel-rivals-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page
            .locator("#web-marvel-rivals-display-footer-d")
            .locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/hades-2") {
      await test.step(`Expected Result: hades-2-nitro-video is present on the page`, async () => {
        await expect(page.locator("#hades-2-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "hades-2-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#hades-2-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "hades-2-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#hades-2-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-hades-2-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-hades-2-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/valorant") {
      await test.step(`Expected Result: valorant-nitro-video is present on the page`, async () => {
        await expect(page.locator("#valorant-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "valorant-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#valorant-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "valorant-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#valorant-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-valorant-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-valorant-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/deadlock") {
      await test.step(`Expected Result: deadlock-nitro-video is present on the page`, async () => {
        await expect(page.locator("#deadlock-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "deadlock-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#deadlock-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "deadlock-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#deadlock-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-deadlock-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-deadlock-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/borderlands-4") {
      await test.step(`Expected Result: bl4-nitro-video is present on the page`, async () => {
        await expect(page.locator("#bl4-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "bl4-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#bl4-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "bl4-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#bl4-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-bl4-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-bl4-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/destiny-2") {
      await test.step(`Expected Result: destiny-2-nitro-video or destiny-2-video-all-pages is present on the page`, async () => {
        const videoBanner = page
          .locator("#destiny-2-nitro-video")
          .or(page.locator("#destiny-2-video-all-pages"));
        await expect(videoBanner).toBeVisible({ timeout: 30_000 });
      });
      await test.step(`Expected Result: "destiny-2-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#destiny-2-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "destiny-2-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#destiny-2-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-destiny-2-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-destiny-2-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/diablo-4") {
      await test.step(`Expected Result: diablo-4-nitro-video is present on the page`, async () => {
        await expect(page.locator("#diablo-4-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "diablo-4-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#diablo-4-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "diablo-4-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#diablo-4-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-diablo-4-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-diablo-4-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/poe-2") {
      await test.step(`Expected Result: poe-2-nitro-video is present on the page`, async () => {
        await expect(page.locator("#poe-2-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "poe-2-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#poe-2-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "poe-2-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#poe-2-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-poe-2-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-poe-2-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/tft") {
      await test.step(`Expected Result: tft-nitro-video is present on the page`, async () => {
        await expect(page.locator("#tft-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "tft-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#tft-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "tft-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#tft-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-tft-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-tft-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/lol") {
      await test.step(`Expected Result: lol-nitro-video is present on the page`, async () => {
        await expect(page.locator("#lol-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "lol-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#lol-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "lol-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#lol-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-lol-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-lol-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/the-bazaar") {
      await test.step(`Expected Result: the-bazaar-nitro-video is present on the page`, async () => {
        await expect(page.locator("#the-bazaar-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "the-bazaar-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#the-bazaar-display-all-pages")).toBeVisible(
          {
            timeout: 30000,
          }
        );
      });
      await test.step(`Expected Result: "the-bazaar-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#the-bazaar-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-the-bazaar-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-the-bazaar-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/mhw") {
      await test.step(`Expected Result: mhw-nitro-video is present on the page`, async () => {
        await expect(page.locator("#mhw-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "mhw-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#mhw-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "mhw-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#mhw-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-mhw-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page.locator("#web-mhw-display-footer-d").locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game.projectUrl === "/elden-ring-nightreign") {
      await test.step(`Expected Result: elden-ring-nightreign-nitro-video is present on the page`, async () => {
        await expect(
          page.locator("#elden-ring-nightreign-nitro-video")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "elden-ring-nightreign-display-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#elden-ring-nightreign-display-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "elden-ring-nightreign-display-small-all-pages" banner is present on the page`, async () => {
        await expect(
          page.locator("#elden-ring-nightreign-display-small-all-pages")
        ).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-elden-ring-nightreign-display-footer-d" banner is present on the page`, async () => {
        await expect(
          page
            .locator("#web-elden-ring-nightreign-display-footer-d")
            .locator("xpath=..")
        ).toBeVisible({
          timeout: 30000,
        });
      });
    }
  }
});
