import { test, expect, devices } from '@playwright/test';
import { filterProjectsByFeatureStatus as filterProjectsByAdvertisement } from '../../app/helpers/index';
const { defaultBrowserType: _1, ...galaxyS24 } = devices['Galaxy S24']; // 360x780 viewport size

test.describe('Verify ad blocks for guest user', async () => {
  test.use({ ...galaxyS24 }); // set up the mobile device 360x780 viewport size

  filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
    test(`Check video block & footer banner for unauthorized user - ${game} in mobile at 360x780 viewport size`, async ({
      page,
    }) => {
      test.skip(game === 'Val', "Valorant doesn't contain ad on mobile devices");
      await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
        await page.goto(`${process.env.BASE_URL}${projectPath}`, {
          waitUntil: 'domcontentloaded',
        });
      });

      switch (game) {
        case 'STS 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-video-all-pages-mobile')
                  .or(page.locator('#slay-the-spire-2-nitro-video'))
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-l'))
                  .or(page.locator('#slay-the-spire-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page.locator('#slay-the-spire-2-display-small-all-pages').or(page.locator('#slay-the-spire-2-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-slay-the-spire-2-display-footer-m')
                  .or(page.locator('#slay-the-spire-2-nitro-anchor-mobile'))
              )
              .toBeAttached();
          });
          break;
        case 'LoL':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-video-all-pages-mobile').or(page.locator('#lol-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#lol-display-all-pages')
                  .or(page.locator('#lol-nitro-l'))
                  .or(page.locator('#lol-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-lol-display-footer-m').or(page.locator('#lol-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'ZZZ':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-video-all-pages-mobile').or(page.locator('#zzz-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#zzz-display-all-pages')
                  .or(page.locator('#zzz-nitro-l'))
                  .or(page.locator('#zzz-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-zzz-display-footer-m').or(page.locator('#zzz-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'TFT':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-video-all-pages-mobile').or(page.locator('#tft-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#tft-display-all-pages')
                  .or(page.locator('#tft-nitro-l'))
                  .or(page.locator('#tft-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-tft-display-footer-m').or(page.locator('#tft-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'PoE':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-video-all-pages-mobile').or(page.locator('#poe-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-display-all-pages')
                  .or(page.locator('#poe-nitro-l'))
                  .or(page.locator('#poe-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-display-footer-m').or(page.locator('#poe-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'PoE 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-video-all-pages-mobile').or(page.locator('#poe-2-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-2-display-all-pages')
                  .or(page.locator('#poe-2-nitro-l'))
                  .or(page.locator('#poe-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-2-display-footer-m').or(page.locator('#poe-2-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'The Bazaar':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-video-all-pages-mobile').or(page.locator('#the-bazaar-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-display-all-pages')
                  .or(page.locator('#the-bazaar-nitro-l'))
                  .or(page.locator('#the-bazaar-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#web-the-bazaar-display-footer-m').or(page.locator('#the-bazaar-nitro-anchor-mobile'))
              )
              .toBeAttached();
          });
          break;
        case 'Monster Hunter Wilds':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-video-all-pages-mobile').or(page.locator('#mhw-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#mhw-display-all-pages')
                  .or(page.locator('#mhw-nitro-l'))
                  .or(page.locator('#mhw-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-mhw-display-footer-m').or(page.locator('#mhw-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Riftbound':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-video-all-pages-mobile').or(page.locator('#riftbound-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-display-all-pages')
                  .or(page.locator('#riftbound-nitro-l'))
                  .or(page.locator('#riftbound-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-riftbound-display-footer-m').or(page.locator('#riftbound-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case '2XKO':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-video-all-pages-mobile').or(page.locator('#\\32 xko-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#xko-display-all-pages')
                  .or(page.locator('#\\32 xko-nitro-l'))
                  .or(page.locator('#\\32 xko-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-2xko-display-footer-m').or(page.locator('#\\32 xko-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Marvel Rivals':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#marvel-rivals-video-all-pages-mobile').or(page.locator('#marvel-rivals-nitro-video'))
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-display-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-l'))
                  .or(page.locator('#marvel-rivals-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-marvel-rivals-display-footer-m')
                  .or(page.locator('#marvel-rivals-nitro-anchor-mobile'))
              )
              .toBeAttached();
          });
          break;
        case 'Deadlock':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-video-all-pages-mobile').or(page.locator('#deadlock-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#deadlock-display-all-pages')
                  .or(page.locator('#deadlock-nitro-l'))
                  .or(page.locator('#deadlock-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-deadlock-display-footer-m').or(page.locator('#deadlock-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Diablo 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-video-all-pages-mobile').or(page.locator('#diablo-4-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#diablo-4-display-all-pages')
                  .or(page.locator('#diablo-4-nitro-l'))
                  .or(page.locator('#diablo-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-diablo-4-display-footer-m').or(page.locator('#diablo-4-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Destiny 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-video-all-pages-mobile').or(page.locator('#destiny-2-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-display-all-pages')
                  .or(page.locator('#destiny-2-nitro-l'))
                  .or(page.locator('#destiny-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-destiny-2-display-footer-m').or(page.locator('#destiny-2-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Borderlands 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-video-all-pages-mobile').or(page.locator('#borderlands-4-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#bl4-display-all-pages')
                  .or(page.locator('#borderlands-4-nitro-l'))
                  .or(page.locator('#borderlands-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-borderlands-4-display-footer-m')
                  .or(page.locator('#borderlands-4-nitro-anchor-mobile'))
              )
              .toBeAttached();
          });
          break;
        case 'Hades 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-video-all-pages-mobile').or(page.locator('#hades-2-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#hades-2-display-all-pages')
                  .or(page.locator('#hades-2-nitro-l'))
                  .or(page.locator('#hades-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-hades-2-display-footer-m').or(page.locator('#hades-2-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Endfield':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#endfield-video-all-pages-mobile').or(page.locator('#arknights-endfield-nitro-video'))
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-display-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-l'))
                  .or(page.locator('#arknights-endfield-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-arknights-endfield-display-footer-m')
                  .or(page.locator('#arknights-endfield-nitro-anchor-mobile'))
              )
              .toBeAttached();
          });
          break;
        case 'Marathon':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-video-all-pages-mobile').or(page.locator('#marathon-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marathon-display-all-pages')
                  .or(page.locator('#marathon-nitro-l'))
                  .or(page.locator('#marathon-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marathon-display-footer-m').or(page.locator('#marathon-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        case 'Overwatch':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-video-all-pages-mobile').or(page.locator('#overwatch-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-display-all-pages')
                  .or(page.locator('#overwatch-nitro-l'))
                  .or(page.locator('#overwatch-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-overwatch-display-footer-m').or(page.locator('#overwatch-nitro-anchor-mobile')))
              .toBeAttached();
          });
          break;
        // case 'Nightreign':
        //   await test.step(`Expected Result: Video banner is present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#elden-ring-nightreign-video-all-pages-mobile')
        //           .or(page.locator('#elden-ring-nightreign-nitro-video'))
        //       )
        //       .toBeAttached();
        //   });
        //   await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#elden-ring-nightreign-display-all-pages')
        //           .or(page.locator('#elden-ring-nightreign-nitro-l'))
        //           .or(page.locator('#elden-ring-nightreign-nitro-3'))
        //           .first()
        //       )
        //       .not.toBeVisible();
        //   });
        //   await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#elden-ring-nightreign-display-small-all-pages')
        //           .or(page.locator('#elden-ring-nightreign-nitro-m'))
        //       )
        //       .not.toBeVisible();
        //   });
        //   await test.step(`Expected Result: Footer banner is present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#web-elden-ring-nightreign-display-footer-m')
        //           .or(page.locator('#elden-ring-nightreign-nitro-anchor-mobile'))
        //       )
        //       .toBeAttached();
        //   });
        //   break;
      }
    });
  });

  filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
    test(`Check advertisement blocks for unauthorized user - ${game} in desktop at 640x1024 viewport size`, async ({
      page,
    }) => {
      test.skip(game === 'Val', "Valorant doesn't contain ad on mobile devices");

      await page.setViewportSize({ width: 640, height: 800 });
      await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
        await page.goto(`${process.env.BASE_URL}${projectPath}`, {
          waitUntil: 'domcontentloaded',
        });
      });

      switch (game) {
        case 'STS 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-video-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-video'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-l'))
                  .or(page.locator('#slay-the-spire-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page.locator('#slay-the-spire-2-display-small-all-pages').or(page.locator('#slay-the-spire-2-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-slay-the-spire-2-display-footer-d')
                  .or(page.locator('#slay-the-spire-2-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'LoL':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#lol-display-all-pages')
                  .or(page.locator('#lol-nitro-l'))
                  .or(page.locator('#lol-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'ZZZ':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#zzz-display-all-pages')
                  .or(page.locator('#zzz-nitro-l'))
                  .or(page.locator('#zzz-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'TFT':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#tft-display-all-pages')
                  .or(page.locator('#tft-nitro-l'))
                  .or(page.locator('#tft-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'PoE':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-display-all-pages')
                  .or(page.locator('#poe-nitro-l'))
                  .or(page.locator('#poe-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-display-footer-d').or(page.locator('#poe-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'PoE 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-2-display-all-pages')
                  .or(page.locator('#poe-2-nitro-l'))
                  .or(page.locator('#poe-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-2-display-footer-d').or(page.locator('#poe-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'The Bazaar':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-video-all-pages').or(page.locator('#the-bazaar-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-display-all-pages')
                  .or(page.locator('#the-bazaar-nitro-l'))
                  .or(page.locator('#the-bazaar-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-the-bazaar-display-footer-d').or(page.locator('#the-bazaar-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Monster Hunter Wilds':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#mhw-display-all-pages')
                  .or(page.locator('#mhw-nitro-l'))
                  .or(page.locator('#mhw-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-mhw-display-footer-d').or(page.locator('#mhw-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Riftbound':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-video-all-pages').or(page.locator('#riftbound-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-display-all-pages')
                  .or(page.locator('#riftbound-nitro-l'))
                  .or(page.locator('#riftbound-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case '2XKO':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#xko-display-all-pages')
                  .or(page.locator('#\\32 xko-nitro-l'))
                  .or(page.locator('#\\32 xko-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Marvel Rivals':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#marvel-rivals-video-all-pages').or(page.locator('#marvel-rivals-nitro-video').first())
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-display-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-l'))
                  .or(page.locator('#marvel-rivals-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Deadlock':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#deadlock-display-all-pages')
                  .or(page.locator('#deadlock-nitro-l'))
                  .or(page.locator('#deadlock-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-deadlock-display-footer-d').or(page.locator('#deadlock-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Diablo 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#diablo-4-display-all-pages')
                  .or(page.locator('#diablo-4-nitro-l'))
                  .or(page.locator('#diablo-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Destiny 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-video-all-pages').or(page.locator('#destiny-2-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-display-all-pages')
                  .or(page.locator('#destiny-2-nitro-l'))
                  .or(page.locator('#destiny-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-destiny-2-display-footer-d').or(page.locator('#destiny-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Borderlands 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#bl4-display-all-pages')
                  .or(page.locator('#borderlands-4-nitro-l'))
                  .or(page.locator('#borderlands-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Hades 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#hades-2-display-all-pages')
                  .or(page.locator('#hades-2-nitro-l'))
                  .or(page.locator('#hades-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Endfield':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#endfield-video-all-pages').or(page.locator('#arknights-endfield-nitro-video').first())
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-display-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-l'))
                  .or(page.locator('#arknights-endfield-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-arknights-endfield-display-footer-d')
                  .or(page.locator('#arknights-endfield-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Marathon':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marathon-display-all-pages')
                  .or(page.locator('#marathon-nitro-l'))
                  .or(page.locator('#marathon-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marathon-display-footer-d').or(page.locator('#marathon-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Overwatch':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-video-all-pages').or(page.locator('#overwatch-nitro-video').first()))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-display-all-pages')
                  .or(page.locator('#overwatch-nitro-l'))
                  .or(page.locator('#overwatch-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-overwatch-display-footer-d').or(page.locator('#overwatch-nitro-anchor')))
              .toBeAttached();
          });
          break;
        // case 'Nightreign':
        //   await test.step(`Expected Result: Video banner is present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#elden-ring-nightreign-video-all-pages')
        //           .or(page.locator('#elden-ring-nightreign-nitro-video'))
        //       )
        //       .toBeAttached();
        //   });
        //   await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#elden-ring-nightreign-display-all-pages')
        //           .or(page.locator('#elden-ring-nightreign-nitro-l'))
        //           .or(page.locator('#elden-ring-nightreign-nitro-3'))
        //           .first()
        //       )
        //       .not.toBeVisible();
        //   });
        //   await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#elden-ring-nightreign-display-small-all-pages')
        //           .or(page.locator('#elden-ring-nightreign-nitro-m'))
        //       )
        //       .not.toBeVisible();
        //   });
        //   await test.step(`Expected Result: Footer banner is present on the page`, async () => {
        //     await expect
        //       .soft(
        //         page
        //           .locator('#web-elden-ring-nightreign-display-footer-d')
        //           .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
        //       )
        //       .toBeAttached();
        //   });
        //   break;
      }
    });
  });

  filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
    test(`Check video block & footer banner for unauthorized user - ${game} in desktop at 800x800 viewport size`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 800, height: 800 });
      await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
        await page.goto(`${process.env.BASE_URL}${projectPath}`, {
          waitUntil: 'domcontentloaded',
        });
      });

      switch (game) {
        case 'STS 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-video-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-l'))
                  .or(page.locator('#slay-the-spire-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page.locator('#slay-the-spire-2-display-small-all-pages').or(page.locator('#slay-the-spire-2-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-slay-the-spire-2-display-footer-d')
                  .or(page.locator('#slay-the-spire-2-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'LoL':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#lol-display-all-pages')
                  .or(page.locator('#lol-nitro-l'))
                  .or(page.locator('#lol-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'ZZZ':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#zzz-display-all-pages')
                  .or(page.locator('#zzz-nitro-l'))
                  .or(page.locator('#zzz-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Val':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#valorant-display-all-pages')
                  .or(page.locator('#valorant-nitro-l'))
                  .or(page.locator('#valorant-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-valorant-display-footer-d').or(page.locator('#valorant-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'TFT':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#tft-display-all-pages')
                  .or(page.locator('#tft-nitro-l'))
                  .or(page.locator('#tft-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'PoE':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-display-all-pages')
                  .or(page.locator('#poe-nitro-l'))
                  .or(page.locator('#poe-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-display-footer-d').or(page.locator('#poe-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'PoE 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-2-display-all-pages')
                  .or(page.locator('#poe-2-nitro-l'))
                  .or(page.locator('#poe-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-2-display-footer-d').or(page.locator('#poe-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'The Bazaar':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-video-all-pages')
                  .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-display-all-pages')
                  .or(page.locator('#the-bazaar-nitro-l'))
                  .or(page.locator('#the-bazaar-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-the-bazaar-display-footer-d').or(page.locator('#the-bazaar-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Monster Hunter Wilds':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#mhw-display-all-pages')
                  .or(page.locator('#mhw-nitro-l'))
                  .or(page.locator('#mhw-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-mhw-display-footer-d').or(page.locator('#mhw-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Nightreign':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-video-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-l'))
                  .or(page.locator('#elden-ring-nightreign-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-small-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-elden-ring-nightreign-display-footer-d')
                  .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Riftbound':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-video-all-pages')
                  .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-display-all-pages')
                  .or(page.locator('#riftbound-nitro-l'))
                  .or(page.locator('#riftbound-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case '2XKO':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#xko-display-all-pages')
                  .or(page.locator('#\\32 xko-nitro-l'))
                  .or(page.locator('#\\32 xko-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Marvel Rivals':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-video-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-display-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-l'))
                  .or(page.locator('#marvel-rivals-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Deadlock':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#deadlock-display-all-pages')
                  .or(page.locator('#deadlock-nitro-l'))
                  .or(page.locator('#deadlock-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-deadlock-display-footer-d').or(page.locator('#deadlock-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Diablo 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#diablo-4-display-all-pages')
                  .or(page.locator('#diablo-4-nitro-l'))
                  .or(page.locator('#diablo-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Destiny 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-video-all-pages')
                  .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-display-all-pages')
                  .or(page.locator('#destiny-2-nitro-l'))
                  .or(page.locator('#destiny-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-destiny-2-display-footer-d').or(page.locator('#destiny-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Borderlands 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#bl4-display-all-pages')
                  .or(page.locator('#borderlands-4-nitro-l'))
                  .or(page.locator('#borderlands-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Hades 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#hades-2-display-all-pages')
                  .or(page.locator('#hades-2-nitro-l'))
                  .or(page.locator('#hades-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Endfield':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-video-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-display-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-l'))
                  .or(page.locator('#arknights-endfield-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-arknights-endfield-display-footer-d')
                  .or(page.locator('#arknights-endfield-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Marathon':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marathon-display-all-pages')
                  .or(page.locator('#marathon-nitro-l'))
                  .or(page.locator('#marathon-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marathon-display-footer-d').or(page.locator('#marathon-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Overwatch':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-video-all-pages')
                  .or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-display-all-pages')
                  .or(page.locator('#overwatch-nitro-l'))
                  .or(page.locator('#overwatch-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-overwatch-display-footer-d').or(page.locator('#overwatch-nitro-anchor')))
              .toBeAttached();
          });
          break;
      }
    });
  });

  filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
    test(`Check video block & footer banner for unauthorized user - ${game} in desktop at 1100x800 viewport size`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 1100, height: 800 });
      await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
        await page.goto(`${process.env.BASE_URL}${projectPath}`, {
          waitUntil: 'domcontentloaded',
        });
      });

      switch (game) {
        case 'STS 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-video-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-l'))
                  .or(page.locator('#slay-the-spire-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page.locator('#slay-the-spire-2-display-small-all-pages').or(page.locator('#slay-the-spire-2-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-slay-the-spire-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'LoL':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#lol-display-all-pages')
                  .or(page.locator('#lol-nitro-l'))
                  .or(page.locator('#lol-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'ZZZ':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#zzz-display-all-pages')
                  .or(page.locator('#zzz-nitro-l'))
                  .or(page.locator('#zzz-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-zzz-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#zzz-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Val':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#valorant-display-all-pages')
                  .or(page.locator('#valorant-nitro-l'))
                  .or(page.locator('#valorant-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-valorant-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#valorant-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'TFT':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#tft-display-all-pages')
                  .or(page.locator('#tft-nitro-l'))
                  .or(page.locator('#tft-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-tft-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#tft-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'PoE':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-display-all-pages')
                  .or(page.locator('#poe-nitro-l'))
                  .or(page.locator('#poe-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-poe-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#poe-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'PoE 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-2-display-all-pages')
                  .or(page.locator('#poe-2-nitro-l'))
                  .or(page.locator('#poe-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-poe-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#poe-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'The Bazaar':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-video-all-pages')
                  .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-display-all-pages')
                  .or(page.locator('#the-bazaar-nitro-l'))
                  .or(page.locator('#the-bazaar-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-the-bazaar-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#the-bazaar-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Monster Hunter Wilds':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#mhw-display-all-pages')
                  .or(page.locator('#mhw-nitro-l'))
                  .or(page.locator('#mhw-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-mhw-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#mhw-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Nightreign':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-video-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-l'))
                  .or(page.locator('#elden-ring-nightreign-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-small-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-elden-ring-nightreign-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Riftbound':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-video-all-pages')
                  .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-display-all-pages')
                  .or(page.locator('#riftbound-nitro-l'))
                  .or(page.locator('#riftbound-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-riftbound-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case '2XKO':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#xko-display-all-pages')
                  .or(page.locator('#\\32 xko-nitro-l'))
                  .or(page.locator('#\\32 xko-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-2xko-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#\\32 xko-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Marvel Rivals':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-video-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-display-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-l'))
                  .or(page.locator('#marvel-rivals-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-marvel-rivals-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#marvel-rivals-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Deadlock':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#deadlock-display-all-pages')
                  .or(page.locator('#deadlock-nitro-l'))
                  .or(page.locator('#deadlock-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-deadlock-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#deadlock-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Diablo 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#diablo-4-display-all-pages')
                  .or(page.locator('#diablo-4-nitro-l'))
                  .or(page.locator('#diablo-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-diablo-4-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#diablo-4-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Destiny 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-video-all-pages')
                  .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-display-all-pages')
                  .or(page.locator('#destiny-2-nitro-l'))
                  .or(page.locator('#destiny-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-destiny-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#destiny-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Borderlands 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#bl4-display-all-pages')
                  .or(page.locator('#borderlands-4-nitro-l'))
                  .or(page.locator('#borderlands-4-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-borderlands-4-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#borderlands-4-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Hades 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#hades-2-display-all-pages')
                  .or(page.locator('#hades-2-nitro-l'))
                  .or(page.locator('#hades-2-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-hades-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#hades-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Endfield':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-video-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-display-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-l'))
                  .or(page.locator('#arknights-endfield-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-arknights-endfield-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#arknights-endfield-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Marathon':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marathon-display-all-pages')
                  .or(page.locator('#marathon-nitro-l'))
                  .or(page.locator('#marathon-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-marathon-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#marathon-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Overwatch':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-video-all-pages')
                  .or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-display-all-pages')
                  .or(page.locator('#overwatch-nitro-l'))
                  .or(page.locator('#overwatch-nitro-3'))
                  .first()
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-overwatch-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
      }
    });
  });

  filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
    test(`Check video block, footer banner, L vertical banner for unauthorized user - ${game} in desktop at 1280x800 viewport size`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
        await page.goto(`${process.env.BASE_URL}${projectPath}`, {
          waitUntil: 'domcontentloaded',
        });
      });

      switch (game) {
        case 'STS 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-video-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-l').locator('xpath=..'))
                  .or(page.locator('#slay-the-spire-2-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page.locator('#slay-the-spire-2-display-small-all-pages').or(page.locator('#slay-the-spire-2-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-slay-the-spire-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'LoL':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#lol-display-all-pages')
                  .or(page.locator('#lol-nitro-l'))
                  .or(page.locator('#lol-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'ZZZ':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#zzz-display-all-pages')
                  .or(page.locator('#zzz-nitro-l').locator('xpath=..'))
                  .or(page.locator('#zzz-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-zzz-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#zzz-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Val':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#valorant-display-all-pages')
                  .or(page.locator('#valorant-nitro-l').locator('xpath=..'))
                  .or(page.locator('#valorant-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-valorant-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#valorant-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'TFT':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#tft-display-all-pages')
                  .or(page.locator('#tft-nitro-l').locator('xpath=..'))
                  .or(page.locator('#tft-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-tft-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#tft-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'PoE':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-display-all-pages')
                  .or(page.locator('#poe-nitro-l').locator('xpath=..'))
                  .or(page.locator('#poe-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-poe-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#poe-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'PoE 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-2-display-all-pages')
                  .or(page.locator('#poe-2-nitro-l').locator('xpath=..'))
                  .or(page.locator('#poe-2-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-poe-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#poe-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'The Bazaar':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-video-all-pages')
                  .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-display-all-pages')
                  .or(page.locator('#the-bazaar-nitro-l').locator('xpath=..'))
                  .or(page.locator('#the-bazaar-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-the-bazaar-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#the-bazaar-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Monster Hunter Wilds':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#mhw-display-all-pages')
                  .or(page.locator('#mhw-nitro-l').locator('xpath=..'))
                  .or(page.locator('#mhw-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-mhw-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#mhw-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Nightreign':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-video-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-l').locator('xpath=..'))
                  .or(page.locator('#elden-ring-nightreign-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-small-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-m'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-elden-ring-nightreign-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Riftbound':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-video-all-pages')
                  .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-display-all-pages')
                  .or(page.locator('#riftbound-nitro-l').locator('xpath=..'))
                  .or(page.locator('#riftbound-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-riftbound-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case '2XKO':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..')))
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#xko-display-all-pages')
                  .or(page.locator('#\\32 xko-nitro-l').locator('xpath=..'))
                  .or(page.locator('#\\32 xko-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m').locator('xpath=..'))
              )
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-2xko-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#\\32 xko-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Marvel Rivals':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-video-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-display-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-l').locator('xpath=..'))
                  .or(page.locator('#marvel-rivals-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-marvel-rivals-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#marvel-rivals-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Deadlock':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#deadlock-display-all-pages')
                  .or(page.locator('#deadlock-nitro-l').locator('xpath=..'))
                  .or(page.locator('#deadlock-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-deadlock-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#deadlock-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Diablo 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#diablo-4-display-all-pages')
                  .or(page.locator('#diablo-4-nitro-l').locator('xpath=..'))
                  .or(page.locator('#diablo-4-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-diablo-4-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#diablo-4-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Destiny 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-video-all-pages')
                  .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-display-all-pages')
                  .or(page.locator('#destiny-2-nitro-l').locator('xpath=..'))
                  .or(page.locator('#destiny-2-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-destiny-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#destiny-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Borderlands 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#bl4-display-all-pages')
                  .or(page.locator('#borderlands-4-nitro-l').locator('xpath=..'))
                  .or(page.locator('#borderlands-4-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-borderlands-4-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#borderlands-4-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Hades 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#hades-2-display-all-pages')
                  .or(page.locator('#hades-2-nitro-l').locator('xpath=..'))
                  .or(page.locator('#hades-2-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-hades-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#hades-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Endfield':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-video-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-display-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-l').locator('xpath=..'))
                  .or(page.locator('#arknights-endfield-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-arknights-endfield-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#arknights-endfield-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Marathon':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marathon-display-all-pages')
                  .or(page.locator('#marathon-nitro-l').locator('xpath=..'))
                  .or(page.locator('#marathon-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-marathon-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#marathon-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'Overwatch':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-video-all-pages')
                  .or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-display-all-pages')
                  .or(page.locator('#overwatch-nitro-l').locator('xpath=..'))
                  .or(page.locator('#overwatch-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
              .not.toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-overwatch-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
      }
    });
  });

  filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
    test(`Check video block, footer banner, L vertical banner, S vertical banner for unauthorized user - ${game} in desktop at 1680x1050 viewport size`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 1600, height: 1050 });

      await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
        await page.goto(`${process.env.BASE_URL}${projectPath}`, {
          waitUntil: 'domcontentloaded',
        });
      });

      switch (game) {
        case 'STS 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-video-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-l').locator('xpath=..'))
                  .or(page.locator('#slay-the-spire-2-nitro-3').locator('xpath=..'))
                  .first()
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#slay-the-spire-2-display-small-all-pages')
                  .or(page.locator('#slay-the-spire-2-nitro-m').locator('xpath=..'))
              )
              .toBeVisible();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-slay-the-spire-2-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
              )
              .toBeVisible();
          });
          break;
        case 'LoL':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#lol-display-all-pages')
                  .or(page.locator('#lol-nitro-l'))
                  .or(page.locator('#lol-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'ZZZ':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#zzz-display-all-pages')
                  .or(page.locator('#zzz-nitro-l'))
                  .or(page.locator('#zzz-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Val':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#valorant-display-all-pages')
                  .or(page.locator('#valorant-nitro-l'))
                  .or(page.locator('#valorant-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-valorant-display-footer-d').or(page.locator('#valorant-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'TFT':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#tft-display-all-pages')
                  .or(page.locator('#tft-nitro-l'))
                  .or(page.locator('#tft-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'PoE':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-display-all-pages')
                  .or(page.locator('#poe-nitro-l'))
                  .or(page.locator('#poe-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-display-footer-d').or(page.locator('#poe-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'PoE 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#poe-2-display-all-pages')
                  .or(page.locator('#poe-2-nitro-l'))
                  .or(page.locator('#poe-2-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-poe-2-display-footer-d').or(page.locator('#poe-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'The Bazaar':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-video-all-pages').or(page.locator('#the-bazaar-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#the-bazaar-display-all-pages')
                  .or(page.locator('#the-bazaar-nitro-l'))
                  .or(page.locator('#the-bazaar-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-the-bazaar-display-footer-d').or(page.locator('#the-bazaar-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Monster Hunter Wilds':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect.soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video'))).toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#mhw-display-all-pages')
                  .or(page.locator('#mhw-nitro-l'))
                  .or(page.locator('#mhw-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-mhw-display-footer-d')

                  .or(page.locator('#mhw-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Nightreign':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-video-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-video'))
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-l'))
                  .or(page.locator('#elden-ring-nightreign-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#elden-ring-nightreign-display-small-all-pages')
                  .or(page.locator('#elden-ring-nightreign-nitro-m'))
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-elden-ring-nightreign-display-footer-d')
                  .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Riftbound':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-video-all-pages').or(page.locator('#riftbound-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#riftbound-display-all-pages')
                  .or(page.locator('#riftbound-nitro-l'))
                  .or(page.locator('#riftbound-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case '2XKO':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#xko-display-all-pages')
                  .or(page.locator('#\\32 xko-nitro-l'))
                  .or(page.locator('#\\32 xko-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Marvel Rivals':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-video-all-pages').or(page.locator('#marvel-rivals-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marvel-rivals-display-all-pages')
                  .or(page.locator('#marvel-rivals-nitro-l'))
                  .or(page.locator('#marvel-rivals-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Deadlock':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#deadlock-display-all-pages')
                  .or(page.locator('#deadlock-nitro-l'))
                  .or(page.locator('#deadlock-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-deadlock-display-footer-d')
                  .locator('xpath=..')
                  .or(page.locator('#deadlock-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Diablo 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#diablo-4-display-all-pages')
                  .or(page.locator('#diablo-4-nitro-l'))
                  .or(page.locator('#diablo-4-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Destiny 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-video-all-pages').or(page.locator('#destiny-2-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#destiny-2-display-all-pages')
                  .or(page.locator('#destiny-2-nitro-l'))
                  .or(page.locator('#destiny-2-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-destiny-2-display-footer-d').or(page.locator('#destiny-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Borderlands 4':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#bl4-display-all-pages')
                  .or(page.locator('#borderlands-4-nitro-l'))
                  .or(page.locator('#borderlands-4-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Hades 2':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#hades-2-display-all-pages')
                  .or(page.locator('#hades-2-nitro-l'))
                  .or(page.locator('#hades-2-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Endfield':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-video-all-pages').or(page.locator('#arknights-endfield-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#endfield-display-all-pages')
                  .or(page.locator('#arknights-endfield-nitro-l'))
                  .or(page.locator('#arknights-endfield-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#web-arknights-endfield-display-footer-d')
                  .or(page.locator('#arknights-endfield-nitro-anchor'))
              )
              .toBeAttached();
          });
          break;
        case 'Marathon':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#marathon-display-all-pages')
                  .or(page.locator('#marathon-nitro-l'))
                  .or(page.locator('#marathon-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-marathon-display-footer-d').or(page.locator('#marathon-nitro-anchor')))
              .toBeAttached();
          });
          break;
        case 'Overwatch':
          await test.step(`Expected Result: Video banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-video-all-pages').or(page.locator('#overwatch-nitro-video')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
            await expect
              .soft(
                page
                  .locator('#overwatch-display-all-pages')
                  .or(page.locator('#overwatch-nitro-l'))
                  .or(page.locator('#overwatch-nitro-3'))
                  .first()
              )
              .toBeAttached();
          });
          await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
              .toBeAttached();
          });
          await test.step(`Expected Result: Footer banner is present on the page`, async () => {
            await expect
              .soft(page.locator('#web-overwatch-display-footer-d').or(page.locator('#overwatch-nitro-anchor')))
              .toBeAttached();
          });
          break;
      }
    });
  });
});
