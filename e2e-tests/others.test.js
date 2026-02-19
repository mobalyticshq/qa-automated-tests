import { expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';
import { test } from '../src/fixtures/fixture';
import { Moba } from '../src/page-object/moba';
import { hydrationLinks } from '../src/helpers/hydrationLinks';

test('Check x-moba-ssr-cache header & new content are present on MHW build page', async ({ browser }) => {
  test.skip(
    process.env.BASE_URL === 'https://mobalytics.gg',
    'Skipping on production environment or when BASE_URL is not defined'
  );

  const uniqueId = uuidv4();
  const text = `uniqueText-${uniqueId}`;
  const pageName = `/mhw/x-moba-ssr-cache`;

  // Create guest context (no cookies)
  const guestContext = await browser.newContext();
  const guestPage = await guestContext.newPage();
  const guest = new Moba(guestPage);
  // Create admin context with cookies
  const adminContext = await browser.newContext({
    storageState: '.auth/adminAuth.json',
  });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);

  let headerFound = false;
  let ssrCacheValue = null;
  const maxAttempts = 10;

  await test.step('Open ST page multiple times as a guest until "x-moba-ssr-cache" header appears', async () => {
    const maxAttempts = 10;
    let headerFound = false;
    let ssrCacheValue = null;

    for (let attempt = 1; !headerFound && attempt <= maxAttempts; attempt++) {
      console.log(`Attempt ${attempt}/${maxAttempts}: Opening ${process.env.BASE_URL}${pageName}`);
      const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
        waitUntil: 'domcontentloaded',
      });

      const headers = response.headers();
      if (headers['x-moba-ssr-cache']) {
        headerFound = true;
        ssrCacheValue = headers['x-moba-ssr-cache'];
        console.log(`✓ Header found on attempt ${attempt}: x-moba-ssr-cache = ${ssrCacheValue}`);
      } else {
        console.log(`✗ Header not found on attempt ${attempt}`);
      }
    }
    expect(headerFound, `Header x-moba-ssr-cache is found`).toBe(true);
    expect(ssrCacheValue, `x-moba-ssr-cache value: ${ssrCacheValue}`).not.toBeNull();
  });
  await test.step('Update the ST page by admin', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    await admin.stPage.updateDescriptionRichTextWidget(text);
    await expect(admin.stPage.descriptionRichTextWidget).toContainText(text);
    console.log('ST page updated by admin');
  });
  await test.step("Open updated ST page as a guest multiple times until 'x-moba-ssr-cache' header & new description are present", async () => {
    let headerFound = false;
    const maxAttempts = 10;

    for (let attempt = 1; !headerFound && attempt <= maxAttempts; attempt++) {
      console.log(`Attempt ${attempt}/${maxAttempts}: Reload ST page: ${process.env.BASE_URL}${pageName}`);

      const reloadResponse = await guestPage.reload();
      const headers = reloadResponse.headers();

      if (headers['x-moba-ssr-cache']) {
        try {
          await expect(guest.stPage.descriptionRichTextWidget).toContainText(text);
          headerFound = true;
          let ssrCacheValue = headers['x-moba-ssr-cache'];
          console.log(`✓ Header and text found on attempt ${attempt}: x-moba-ssr-cache = ${ssrCacheValue}`);
        } catch (error) {
          console.log(`✗ Header found but text not visible on attempt ${attempt}`);
        }
      } else {
        console.log(`✗ Header not found on attempt ${attempt}`);
      }
    }
  });
  await test.step("Open updated ST page as a guest 10 times to be sure that 'x-moba-ssr-cache' header & new description are present within all attempts", async () => {
    for (let currentAttempt = 1; currentAttempt <= maxAttempts; currentAttempt++) {
      console.log(`Attempt ${currentAttempt}/${maxAttempts}: Reload ST page: ${process.env.BASE_URL}${pageName}`);
      const reloadResponse = await guestPage.reload();
      const headers = reloadResponse.headers();

      if (headers['x-moba-ssr-cache']) {
        headerFound = true;
        ssrCacheValue = headers['x-moba-ssr-cache'];
        try {
          await expect(guest.stPage.descriptionRichTextWidget).toContainText(text);
          console.log(`✓ Header and text found on attempt ${currentAttempt}: x-moba-ssr-cache = ${ssrCacheValue}`);
        } catch (error) {
          console.log(`✗ Header found but text not visible on attempt ${currentAttempt}`);
        }
      } else {
        headerFound = false;
        ssrCacheValue = null;
        console.log(`✗ Header not found on attempt ${currentAttempt}`);
      }
    }
  });

  await test.step(`Expected Result: Header x-moba-ssr-cache is present on all attempts: ${maxAttempts}/${maxAttempts}`, async () => {
    expect(headerFound).toBe(true);
  });
  await test.step(`Expected Result: x-moba-ssr-cache has a key: ${ssrCacheValue} on all attempts: ${maxAttempts}/${maxAttempts}`, async () => {
    expect(ssrCacheValue).not.toBeNull();
  });
  await test.step(`Expected Result: New description is updated in rich text widget for a guest within all attempts: ${maxAttempts}/${maxAttempts}`, async () => {
    await expect(guest.stPage.descriptionRichTextWidget).toContainText(text);
  });
});

test('Error validation: 404 status code & title on usual page', async ({ page }) => {
  let response = null;
  await test.step('Open not existing page', async () => {
    response = await page.goto(`${process.env.BASE_URL}/mhw/not-found`, {
      waitUntil: 'domcontentloaded',
    });
  });
  await test.step('Expected Result: 404 status code is present on the response', async () => {
    expect(response.status()).toBe(404);
  });
  await test.step("Expected Result: '404' title is present on the page", async () => {
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
  });
});

test('Error validation: 404 status code & title on NGF page', async ({ page }) => {
  let response = null;
  await test.step('Open not existing page', async () => {
    response = await page.goto(`${process.env.BASE_URL}/hades-2/builds/dystopianteddybear-aspect-of-charonsrghhfg`, {
      waitUntil: 'domcontentloaded',
    });
  });
  await test.step('Expected Result: 404 status code is present on the response', async () => {
    expect(response.status()).toBe(404);
  });
  await test.step("Expected Result: '404' title is present on the page", async () => {
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible();
  });
});

// test.describe('Screenshot tests on various projects', async () => {
//   test(`Screenshot check poe-2`, async ({ page, request }) => {
//     test.setTimeout(600000);

//     const response = await request.get(`${process.env.BASE_URL}/poe-2/sitemap.xml`);
//     expect(response.ok()).toBeTruthy();
//     const xmlData = await response.text();
//     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
//     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
//     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
//     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

//     for (const takeLink of arrayLinks) {
//       const screenshotName = `${takeLink.groups.link}.png`;
//       // const modifiedLink = takeLink.groups.link.replace(/stg\.mobalytics/g, 'as.int.mobalytics');
//       await page.goto(takeLink.groups.link);
//       await expect.soft(page).toHaveScreenshot(screenshotName, {
//         threshold: 0.2,
//         maxDiffPixelRatio: 0.01,
//         fullPage: true,
//         mask: [page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video'))],
//         // stylePath: 'e2e-tests/screenshot-styles.css',
//       });
//     }
//   });

//   test(`Screenshot check tft`, async ({ page, request }) => {
//     test.setTimeout(600000);

//     const response = await request.get(`${process.env.BASE_URL}/tft/sitemap.xml`);
//     expect(response.ok()).toBeTruthy();
//     const xmlData = await response.text();
//     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
//     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
//     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
//     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

//     for (const takeLink of arrayLinks) {
//       const screenshotName = `${takeLink.groups.link}.png`;
//       // const modifiedLink = takeLink.groups.link.replace(/stg\.mobalytics/g, 'as.int.mobalytics');
//       await page.goto(takeLink.groups.link);
//       await expect.soft(page).toHaveScreenshot(screenshotName, {
//         threshold: 0.2,
//         maxDiffPixelRatio: 0.01,
//         fullPage: true,
//         mask: [page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video'))],
//         // stylePath: 'e2e-tests/screenshot-styles.css',
//       });
//     }
//   });

//   test(`Screenshot check news`, async ({ page, request }) => {
//     test.setTimeout(600000);

//     const response = await request.get(`${process.env.BASE_URL}/news/sitemap.xml`);
//     expect(response.ok()).toBeTruthy();
//     const xmlData = await response.text();
//     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
//     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
//     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
//     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

//     for (const takeLink of arrayLinks) {
//       const screenshotName = `${takeLink.groups.link}.png`;
//       // const modifiedLink = takeLink.groups.link.replace(/stg\.mobalytics/g, 'as.int.mobalytics');
//       await page.goto(takeLink.groups.link);
//       await expect.soft(page).toHaveScreenshot(screenshotName, {
//         threshold: 0.2,
//         maxDiffPixelRatio: 0.01,
//         fullPage: true,
//         mask: [page.locator('#news-video-all-pages').or(page.locator('#news-nitro-video'))],
//         // stylePath: 'e2e-tests/screenshot-styles.css',
//       });
//     }
//   });

//   test(`Screenshot check diablo-4`, async ({ page, request }) => {
//     test.setTimeout(600000);

//     const response = await request.get(`${process.env.BASE_URL}/diablo-4/sitemap.xml`);
//     expect(response.ok()).toBeTruthy();
//     const xmlData = await response.text();
//     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
//     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
//     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
//     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

//     for (const takeLink of arrayLinks) {
//       const screenshotName = `${takeLink.groups.link}.png`;
//       // const modifiedLink = takeLink.groups.link.replace(/stg\.mobalytics/g, 'as.int.mobalytics');
//       await page.goto(takeLink.groups.link);
//       await expect.soft(page).toHaveScreenshot(screenshotName, {
//         threshold: 0.2,
//         maxDiffPixelRatio: 0.01,
//         fullPage: true,
//         mask: [page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video'))],
//         // stylePath: 'e2e-tests/screenshot-styles.css',
//       });
//     }
//   });

//   test(`Screenshot check valorant`, async ({ page, request }) => {
//     test.setTimeout(600000);

//     const response = await request.get(`${process.env.BASE_URL}/valorant/sitemap.xml`);
//     expect(response.ok()).toBeTruthy();
//     const xmlData = await response.text();
//     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
//     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
//     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
//     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

//     for (const takeLink of arrayLinks) {
//       const screenshotName = `${takeLink.groups.link}.png`;
//       // const modifiedLink = takeLink.groups.link.replace(/stg\.mobalytics/g, 'as.int.mobalytics');
//       await page.goto(takeLink.groups.link);
//       await expect.soft(page).toHaveScreenshot(screenshotName, {
//         threshold: 0.2,
//         maxDiffPixelRatio: 0.01,
//         fullPage: true,
//         mask: [page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video'))],
//         // stylePath: 'e2e-tests/screenshot-styles.css',
//       });
//     }
//   });

//   test(`Screenshot check deadlock`, async ({ page, request }) => {
//     test.setTimeout(600000);

//     const response = await request.get(`${process.env.BASE_URL}/deadlock/sitemap.xml`);
//     expect(response.ok()).toBeTruthy();
//     const xmlData = await response.text();
//     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
//     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
//     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
//     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

//     for (const takeLink of arrayLinks) {
//       const screenshotName = `${takeLink.groups.link}.png`;
//       // const modifiedLink = takeLink.groups.link.replace(/stg\.mobalytics/g, 'as.int.mobalytics');
//       await page.goto(takeLink.groups.link);
//       await expect.soft(page).toHaveScreenshot(screenshotName, {
//         threshold: 0.2,
//         maxDiffPixelRatio: 0.01,
//         fullPage: true,
//         mask: [page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video'))],
//         // stylePath: 'e2e-tests/screenshot-styles.css',
//       });
//     }
//   });
// });
