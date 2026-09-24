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
  const pageName = `/mhw/check-cf-cache-status-autotests`;

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

  const maxAttempts = 10;
  let attemptFirstStep = 1;
  await expect(async () => {
    console.log(`Attempt ${attemptFirstStep++}/${maxAttempts}: Opening ${process.env.BASE_URL}${pageName} as a guest`);
    const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });

    let headers = response.headers();

    expect(headers['cf-cache-status'], `cf-cache-status: ${headers['cf-cache-status']}`).toBe('HIT');
  }, `Open ST page ${pageName} as a guest until "cf-cache-status: HIT"`).toPass({
    intervals: [2_000],
    timeout: 10_000,
  });

  await test.step('Update the ST page by admin', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    await admin.stPage.updateDescriptionRichTextWidget(text);
    await expect(admin.stPage.descriptionRichTextWidget(text)).toBeVisible();
    console.log('ST page is updated by admin');
  });

  let CfCacheValue;
  let attemptLastStep = 1;
  await expect(async () => {
    console.log(
      `Attempt ${attemptLastStep++}/${maxAttempts}: Reload ST page: ${process.env.BASE_URL}${pageName} as a guest`
    );
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValue = headers['cf-cache-status'];

    expect(CfCacheValue, `cf-cache-status: ${CfCacheValue}`).toBe('HIT');
    await expect(guest.stPage.descriptionRichTextWidget(text)).toBeVisible({ timeout: 2_000 });
  }, `Open updated ST page as a guest multiple times until the header: 'cf-cache-status = HIT' appears & new description is present`).toPass(
    {
      intervals: [1_000],
      timeout: 12_000,
    }
  );

  await test.step(`Expected Result: Header contains correct value "HIT", cf-cache-status: ${CfCacheValue}`, async () => {
    expect(CfCacheValue).toBe('HIT');
  });
  await test.step(`Expected Result: New description is updated in rich text widget for a guest`, async () => {
    await expect(guest.stPage.descriptionRichTextWidget(text)).toBeVisible();
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
