import { test, expect } from './fixtures/fixture';

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
