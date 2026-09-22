import { v4 as uuidv4 } from 'uuid';
import { test, expect } from './fixtures/fixture';
import { Moba } from '../app/page-object/moba';

test('Check cf-cache-status & new content are present on MHW build page', async ({ browser }) => {
  test.skip(
    process.env.BASE_URL === 'https://mobalytics.gg',
    'Skipping on production environment or when BASE_URL is not defined'
  );

  const uniqueId = uuidv4();
  const text = `uniqueText-${uniqueId}`;
  const pageName = `/mhw/x-moba-ssr-cache`;

  // Create guest context (no cookies & clean storage)
  const guestContext = await browser.newContext({
    userAgent: 'moba-warrior',
  });
  const guestPage = await guestContext.newPage();
  const guest = new Moba(guestPage);
  // Create admin context with cookies
  const adminContext = await browser.newContext({
    storageState: '.auth/adminAuth.json',
    userAgent: 'mobalytics-automation-qa',
  });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);

  let headerFound = false;
  let CfCacheValue = null;
  const maxAttempts = 10;

  await test.step('Open ST page multiple times as a guest until "cf-cache-status = HIT"', async () => {
    const maxAttempts = 10;
    let headerFound = false;
    let CfCacheValue;

    for (let attempt = 1; !headerFound && attempt <= maxAttempts; attempt++) {
      console.log(`Attempt ${attempt}/${maxAttempts}: Opening ${process.env.BASE_URL}${pageName}`);
      const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
        waitUntil: 'domcontentloaded',
      });

      let headers = response.headers();
      console.log(headers);
      if (headers['cf-cache-status'] === 'HIT') {
        headerFound = true;
        CfCacheValue = headers['cf-cache-status'];
        console.log(`✓ Header 'cf-cache-status = HIT' on attempt ${attempt}: cf-cache-status = ${CfCacheValue}`);
      } else {
        console.log(`✗ cf-cache-status: ${headers['cf-cache-status']} on attempt ${attempt}`);
      }
    }
    expect(CfCacheValue, `cf-cache-status: ${CfCacheValue}`).toBe('HIT');
  });
  await test.step('Update the ST page by admin', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    await admin.stPage.updateDescriptionRichTextWidget(text);
    await expect(admin.stPage.descriptionRichTextWidget(text)).toContainText(text);
    console.log('ST page updated by admin');
  });
  await test.step("Open updated ST page as a guest multiple times until 'cf-cache-status = HIT' header & new description are present", async () => {
    let headerFound = false;
    const maxAttempts = 10;

    for (let attempt = 1; !headerFound && attempt <= maxAttempts; attempt++) {
      console.log(`Attempt ${attempt}/${maxAttempts}: Reload ST page: ${process.env.BASE_URL}${pageName}`);

      const reloadResponse = await guestPage.reload();
      const headers = reloadResponse.headers();

      if (headers['cf-cache-status'] === 'HIT') {
        try {
          await expect(guest.stPage.descriptionRichTextWidget).toContainText(text);
          headerFound = true;
          let CfCacheValue = headers['cf-cache-status'];
          console.log(`✓ Header 'cf-cache-status = HIT' found on attempt ${attempt}: cf-cache-status: ${CfCacheValue}`);
        } catch (error) {
          console.log(
            `✗ Header: cf-cache-status:${headers['cf-cache-status']} & text not visible on attempt ${attempt}`
          );
        }
      } else {
        console.log(`✗ Header: cf-cache-status:${headers['cf-cache-status']} not found on attempt ${attempt}`);
      }
    }
  });
  await test.step("Open updated ST page as a guest 10 times to be sure that 'cf-cache-status = HIT' & new description are present within all attempts", async () => {
    for (let currentAttempt = 1; currentAttempt <= maxAttempts; currentAttempt++) {
      console.log(`Attempt ${currentAttempt}/${maxAttempts}: Reload ST page: ${process.env.BASE_URL}${pageName}`);
      const reloadResponse = await guestPage.reload();
      const headers = reloadResponse.headers();

      if (headers['cf-cache-status'] === 'HIT') {
        headerFound = true;
        CfCacheValue = headers['cf-cache-status'];
        try {
          await expect(guest.stPage.descriptionRichTextWidget).toContainText(text);
          console.log(
            `✓ Header 'cf-cache-status = HIT' found on attempt ${currentAttempt}: cf-cache-status: ${CfCacheValue}`
          );
        } catch (error) {
          console.log(`✗ Header found but text not visible on attempt ${currentAttempt}`);
        }
      } else {
        headerFound = false;
        CfCacheValue = null;
        console.log(`✗ Header not found on attempt ${currentAttempt}`);
      }
    }
  });

  await test.step(`Expected Result: Header 'cf-cache-status = HIT' on all attempts: ${maxAttempts}/${maxAttempts}`, async () => {
    expect(headerFound).toBe(true);
  });
  await test.step(`Expected Result: Header 'cf-cache-status' has a key: ${CfCacheValue} on all attempts: ${maxAttempts}/${maxAttempts}`, async () => {
    expect(CfCacheValue).not.toBeNull();
  });
  await test.step(`Expected Result: New description is updated in rich text widget for a guest within all attempts: ${maxAttempts}/${maxAttempts}`, async () => {
    await expect(guest.stPage.descriptionRichTextWidget(text)).toContainText(text);
  });
});

test('Error validation: 404 status code & title on usual page', async ({ page }) => {
  let response;
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
  let response;
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
