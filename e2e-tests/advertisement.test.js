import { test, expect } from '@playwright/test';
import { projects } from '../src/modules/index';

projects.forEach(({ game, projectPath }) => {
  test(`Check the availability of advertisement blocks for ${game} game`, async ({ page }) => {
    await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
      await page.goto(`${process.env.BASE_URL}${projectPath}`, {
        waitUntil: 'domcontentloaded',
      });
    });

    switch (game) {
      case 'LOL':
        await test.step(`Expected Result: lol-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "lol-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#lol-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "lol-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#lol-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-lol-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-lol-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'ZZZ':
        await test.step(`Expected Result: zzz-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "zzz-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#zzz-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "zzz-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#zzz-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-zzz-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-zzz-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Valorant':
        await test.step(`Expected Result: valorant-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "valorant-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#valorant-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "valorant-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#valorant-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-valorant-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-valorant-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'TFT':
        await test.step(`Expected Result: tft-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "tft-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#tft-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "tft-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#tft-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-tft-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-tft-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Path of Exile':
        await test.step(`Expected Result: poe-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "poe-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#poe-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "poe-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#poe-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-poe-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-poe-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Path of Exile 2':
        await test.step(`Expected Result: poe-2-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "poe-2-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#poe-2-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "poe-2-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#poe-2-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-poe-2-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-poe-2-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'The Bazaar':
        await test.step(`Expected Result: the-bazaar-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#the-bazaar-video-all-pages').or(page.locator('#the-bazaar-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "the-bazaar-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#the-bazaar-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "the-bazaar-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#the-bazaar-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-the-bazaar-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-the-bazaar-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'MHV':
        await test.step(`Expected Result: mhw-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "mhw-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#mhw-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "mhw-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#mhw-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-mhw-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-mhw-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Elden Ring':
        await test.step(`Expected Result: elden-ring-nightreign-video-all-pages is present on the page`, async () => {
          await expect(
            page
              .locator('#elden-ring-nightreign-video-all-pages')
              .or(page.locator('#elden-ring-nightreign-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "elden-ring-nightreign-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#elden-ring-nightreign-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "elden-ring-nightreign-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#elden-ring-nightreign-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-elden-ring-nightreign-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-elden-ring-nightreign-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Riftbound':
        await test.step(`Expected Result: riftbound-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#riftbound-video-all-pages').or(page.locator('#riftbound-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "riftbound-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#riftbound-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "riftbound-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#riftbound-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-riftbound-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-riftbound-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case '2XKO':
        await test.step(`Expected Result: 2xko-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "2xko-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#xko-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "2xko-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#xko-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-2xko-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-2xko-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Marvel Rivals':
        await test.step(`Expected Result: marvel-rivals-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#marvel-rivals-video-all-pages').or(page.locator('#marvel-rivals-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "marvel-rivals-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#marvel-rivals-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "marvel-rivals-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#marvel-rivals-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-marvel-rivals-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-marvel-rivals-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Deadlock':
        await test.step(`Expected Result: deadlock-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "deadlock-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#deadlock-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "deadlock-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#deadlock-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-deadlock-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-deadlock-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Diablo 4':
        await test.step(`Expected Result: diablo-4-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "diablo-4-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#diablo-4-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "diablo-4-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#diablo-4-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-diablo-4-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-diablo-4-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Destiny 2':
        await test.step(`Expected Result: destiny-2-video-all-pages is present on the page`, async () => {
          await expect(
            page.locator('#destiny-2-video-all-pages').or(page.locator('#destiny-2-nitro-video'))
          ).toBeVisible();
        });
        await test.step(`Expected Result: "destiny-2-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#destiny-2-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "destiny-2-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#destiny-2-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-destiny-2-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-destiny-2-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
      case 'Borderlands 4':
        await test.step(`Expected Result: bl4-video-all-pages is present on the page`, async () => {
          await expect(page.locator('#bl4-video-all-pages').or(page.locator('#bl4-nitro-video'))).toBeVisible();
        });
        await test.step(`Expected Result: "bl4-display-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#bl4-display-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "bl4-display-small-all-pages" banner is present on the page`, async () => {
          await expect(page.locator('#bl4-display-small-all-pages')).toBeVisible();
        });
        await test.step(`Expected Result: "web-bl4-display-footer-d" banner is present on the page`, async () => {
          await expect(page.locator('#web-bl4-display-footer-d').locator('xpath=..')).toBeVisible();
        });
        break;
    }
  });
});
