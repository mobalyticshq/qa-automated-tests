import { test, expect } from '@playwright/test';
import { filterProjectsByFeatureStatus as filterProjectsByAdvertisement } from '../src/helpers/index';

filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  test(`Check the availability of advertisement blocks for ${game} game`, async ({ page }) => {
    await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
      await page.goto(`${process.env.BASE_URL}${projectPath}`, {
        waitUntil: 'domcontentloaded',
      });
    });

    switch (game) {
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m').locator('xpath=..')))
            .toBeVisible();
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#valorant-display-small-all-pages')
                .or(page.locator('#valorant-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m').locator('xpath=..')))
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-tft-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#tft-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m').locator('xpath=..')))
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-poe-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#poe-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m').locator('xpath=..')))
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-poe-2-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#poe-2-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#the-bazaar-display-small-all-pages')
                .or(page.locator('#the-bazaar-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-the-bazaar-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#the-bazaar-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m').locator('xpath=..')))
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-mhw-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#mhw-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#elden-ring-nightreign-display-small-all-pages')
                .or(page.locator('#elden-ring-nightreign-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-elden-ring-nightreign-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#elden-ring-nightreign-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        break;
      case 'Riftbound':
        await test.step(`Expected Result: Video banner is present on the page`, async () => {
          await expect
            .soft(
              page.locator('#riftbound-video-all-pages').or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#riftbound-display-small-all-pages')
                .or(page.locator('#riftbound-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-riftbound-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#riftbound-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-2xko-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#\\32 xko-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#marvel-rivals-display-small-all-pages')
                .or(page.locator('#marvel-rivals-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-marvel-rivals-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#marvel-rivals-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#deadlock-display-small-all-pages')
                .or(page.locator('#deadlock-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-deadlock-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#deadlock-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#diablo-4-display-small-all-pages')
                .or(page.locator('#diablo-4-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-diablo-4-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#diablo-4-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        break;
      case 'Destiny 2':
        await test.step(`Expected Result: Video banner is present on the page`, async () => {
          await expect
            .soft(
              page.locator('#destiny-2-video-all-pages').or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#destiny-2-display-small-all-pages')
                .or(page.locator('#destiny-2-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-destiny-2-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#destiny-2-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#bl4-display-small-all-pages')
                .or(page.locator('#borderlands-4-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-bl4-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#borderlands-4-nitro-anchor').locator('xpath=..'))
            )
            .toBeVisible();
        });
        break;
      case 'Hades 2':
        await test.step(`Expected Result: Video banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..')))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-hades-2-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#hades-2-nitro-m').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#endfield-display-all-pages')
                .or(page.locator('#arknights-endfield-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-endfield-display-footer-d')
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(page.locator('#marathon-display-all-pages').or(page.locator('#marathon-nitro-m').locator('xpath=..')))
            .toBeVisible();
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
              page.locator('#overwatch-video-all-pages').or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
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
        await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
          await expect
            .soft(
              page.locator('#overwatch-display-all-pages').or(page.locator('#overwatch-nitro-m').locator('xpath=..'))
            )
            .toBeVisible();
        });
        await test.step(`Expected Result: Footer banner is present on the page`, async () => {
          await expect
            .soft(
              page
                .locator('#web-ovw-display-footer-d')
                .locator('xpath=..')
                .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
            )
            .toBeVisible();
        });
        break;
    }
  });
});
