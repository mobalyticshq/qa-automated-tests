import { test, expect } from "@playwright/test";

// const GAMES = {
//   ZZZ: { projectUrl: "/zzz" },
//   VALORANT: { projectUrl: `/valorant` },
//   TFT: { projectUrl: `/tft` },
//   LOST_ARK: { projectUrl: `/lost-ark` },
//   DESTINY_2: { projectUrl: `/destiny-2` },
//   DIABLO_4: { projectUrl: `/diablo-4` },
//   ELDEN_RING: { projectUrl: `/elden-ring-nightreign` },
//   MARVEL_RIVALS: { projectUrl: `/marvel-rivals` },
//   MHV: { projectUrl: `/mhw` },
//   HADES2: { projectUrl: `/hades-2` },
//   BORDERLANDS4: { projectUrl: `/borderlands-4` },
//   DEADLOCK: { projectUrl: `/deadlock` },
//   POE_2: { projectUrl: `/poe-2` },
//   BAZAAR: { projectUrl: `/the-bazaar` },
// };
// const gamesList = Object.keys(GAMES);

// for (let gamekey of gamesList) {
//   test(`Check the availability of advertising blocks for ${gamekey} game`, async ({ page }) => {
//     const game = GAMES[gamekey];

//     await test.step(`Open project url: "${process.env.BASE_URL}${game.projectUrl}"`, async () => {
//       await page.goto(`${process.env.BASE_URL}${game.projectUrl}`, {
//         waitUntil: "domcontentloaded",
//       });
//     });

//     if (gamekey === "ZZZ") {
//       await test.step(`Expected Result: zzz-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#zzz-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "zzz-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#zzz-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "zzz-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#zzz-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-zzz-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-zzz-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "LOST_ARK") {
//       await test.step(`Expected Result: lost-ark-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#lost-ark-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "lost-ark-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#lost-ark-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "lost-ark-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#lost-ark-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-lost-ark-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-lost-ark-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "MARVEL_RIVALS") {
//       await test.step(`Expected Result: marvel-rivals-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#marvel-rivals-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "marvel-rivals-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#marvel-rivals-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "marvel-rivals-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#marvel-rivals-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-marvel-rivals-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-marvel-rivals-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "HADES2") {
//       await test.step(`Expected Result: hades-2-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#hades-2-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "hades-2-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#hades-2-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "hades-2-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#hades-2-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-hades-2-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-hades-2-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "VALORANT") {
//       await test.step(`Expected Result: valorant-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#valorant-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "valorant-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#valorant-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "valorant-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#valorant-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-valorant-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-valorant-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "DEADLOCK") {
//       await test.step(`Expected Result: deadlock-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#deadlock-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "deadlock-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#deadlock-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "deadlock-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#deadlock-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-deadlock-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-deadlock-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "BORDERLANDS4") {
//       await test.step(`Expected Result: bl4-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#bl4-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "bl4-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#bl4-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "bl4-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#bl4-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-bl4-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-bl4-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "DESTINY_2") {
//       await test.step(`Expected Result: destiny-2-nitro-video or destiny-2-video-all-pages is present on the page`, async () => {
//         const videoBanner = page.locator("#destiny-2-nitro-video").or(page.locator("#destiny-2-video-all-pages"));
//         await expect(videoBanner).toBeVisible({ timeout: 30_000 });
//       });
//       await test.step(`Expected Result: "destiny-2-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#destiny-2-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "destiny-2-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#destiny-2-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-destiny-2-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-destiny-2-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "DIABLO_4") {
//       await test.step(`Expected Result: diablo-4-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#diablo-4-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "diablo-4-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#diablo-4-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "diablo-4-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#diablo-4-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-diablo-4-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-diablo-4-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "POE_2") {
//       await test.step(`Expected Result: poe-2-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#poe-2-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "poe-2-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#poe-2-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "poe-2-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#poe-2-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-poe-2-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-poe-2-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "TFT") {
//       await test.step(`Expected Result: tft-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#tft-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "tft-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#tft-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "tft-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#tft-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-tft-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-tft-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "LOL") {
//       await test.step(`Expected Result: lol-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#lol-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "lol-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#lol-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "lol-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#lol-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-lol-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-lol-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "BAZAAR") {
//       await test.step(`Expected Result: the-bazaar-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#the-bazaar-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "the-bazaar-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#the-bazaar-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "the-bazaar-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#the-bazaar-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-the-bazaar-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-the-bazaar-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "MHV") {
//       await test.step(`Expected Result: mhw-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#mhw-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "mhw-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#mhw-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "mhw-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#mhw-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-mhw-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-mhw-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     } else if (gamekey === "ELDEN_RING") {
//       await test.step(`Expected Result: elden-ring-nightreign-nitro-video is present on the page`, async () => {
//         await expect(page.locator("#elden-ring-nightreign-nitro-video")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "elden-ring-nightreign-display-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#elden-ring-nightreign-display-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "elden-ring-nightreign-display-small-all-pages" banner is present on the page`, async () => {
//         await expect(page.locator("#elden-ring-nightreign-display-small-all-pages")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//       await test.step(`Expected Result: "web-elden-ring-nightreign-display-footer-d" banner is present on the page`, async () => {
//         await expect(page.locator("#web-elden-ring-nightreign-display-footer-d").locator("xpath=..")).toBeVisible({
//           timeout: 30000,
//         });
//       });
//     }
//   });
// }

[
  { game: "ZZZ", projectUrl: "/zzz" },
  { game: "Valorant", projectUrl: `/valorant` },
  { game: "TFT", projectUrl: `/tft` },
  { game: "Lost Ark", projectUrl: `/lost-ark` },
  { game: "Destiny 2", projectUrl: `/destiny-2` },
  { game: "Diablo 4", projectUrl: `/diablo-4` },
  { game: "Elden Ring", projectUrl: `/elden-ring-nightreign` },
  { game: "Marvel Rivals", projectUrl: `/marvel-rivals` },
  { game: "Monster Hunter Wilds", projectUrl: `/mhw` },
  { game: "Hades 2", projectUrl: `/hades-2` },
  { game: "Borderlands 4", projectUrl: `/borderlands-4` },
  { game: "Deadlock", projectUrl: `/deadlock` },
  { game: "Path of Exile 2", projectUrl: `/poe-2` },
  { game: "The Bazaar", projectUrl: `/the-bazaar` },
  { game: "LoL", projectUrl: `/lol` }
].forEach(({game, projectUrl}) => {
  test(`Check the availability of advertising blocks for ${game} game`, async ({ page }) => {
    await test.step(`Open project url: "${process.env.BASE_URL}${projectUrl}"`, async () => {
      await page.goto(`${process.env.BASE_URL}${projectUrl}`, {
        waitUntil: "domcontentloaded",
      });
    });

    if (game === "ZZZ") {
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
        await expect(page.locator("#web-zzz-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Lost Ark") {
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
        await expect(page.locator("#lost-ark-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-lost-ark-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-lost-ark-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Marvel Rivals") {
      await test.step(`Expected Result: marvel-rivals-nitro-video is present on the page`, async () => {
        await expect(page.locator("#marvel-rivals-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "marvel-rivals-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#marvel-rivals-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "marvel-rivals-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#marvel-rivals-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-marvel-rivals-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-marvel-rivals-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Hades 2") {
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
        await expect(page.locator("#hades-2-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-hades-2-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-hades-2-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Valorant") {
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
        await expect(page.locator("#valorant-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-valorant-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-valorant-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Deadlock") {
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
        await expect(page.locator("#deadlock-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-deadlock-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-deadlock-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Borderlands 4") {
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
        await expect(page.locator("#web-bl4-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Destiny 2") {
      await test.step(`Expected Result: destiny-2-nitro-video or destiny-2-video-all-pages is present on the page`, async () => {
        const videoBanner = page.locator("#destiny-2-nitro-video").or(page.locator("#destiny-2-video-all-pages"));
        await expect(videoBanner).toBeVisible({ timeout: 30_000 });
      });
      await test.step(`Expected Result: "destiny-2-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#destiny-2-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "destiny-2-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#destiny-2-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-destiny-2-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-destiny-2-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Diablo 4") {
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
        await expect(page.locator("#diablo-4-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-diablo-4-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-diablo-4-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Path of Exile 2") {
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
        await expect(page.locator("#poe-2-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-poe-2-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-poe-2-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "TFT") {
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
        await expect(page.locator("#web-tft-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "LOL") {
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
        await expect(page.locator("#web-lol-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "The Bazaar") {
      await test.step(`Expected Result: the-bazaar-nitro-video is present on the page`, async () => {
        await expect(page.locator("#the-bazaar-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "the-bazaar-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#the-bazaar-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "the-bazaar-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#the-bazaar-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-the-bazaar-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-the-bazaar-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "MHV") {
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
        await expect(page.locator("#web-mhw-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    } else if (game === "Elden Ring") {
      await test.step(`Expected Result: elden-ring-nightreign-nitro-video is present on the page`, async () => {
        await expect(page.locator("#elden-ring-nightreign-nitro-video")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "elden-ring-nightreign-display-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#elden-ring-nightreign-display-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "elden-ring-nightreign-display-small-all-pages" banner is present on the page`, async () => {
        await expect(page.locator("#elden-ring-nightreign-display-small-all-pages")).toBeVisible({
          timeout: 30000,
        });
      });
      await test.step(`Expected Result: "web-elden-ring-nightreign-display-footer-d" banner is present on the page`, async () => {
        await expect(page.locator("#web-elden-ring-nightreign-display-footer-d").locator("xpath=..")).toBeVisible({
          timeout: 30000,
        });
      });
    }
  });
})