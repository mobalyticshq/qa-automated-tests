import { v4 as uuidv4 } from 'uuid';
import { test, expect } from './fixtures/fixture';
import { Moba } from '../app/page-object/moba';

test.use({ userAgent: 'moba-warrior' });

test('Check cf-cache-status: cache is purged (MISS) and re-cached (HIT) after editing ST page', async ({ browser }) => {
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
  });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);

  await expect(async () => {
    const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    let headers = response.headers();
    console.log(`1: Opening ${process.env.BASE_URL}${pageName} as a guest: ${headers['cf-cache-status']}`);

    expect(headers['cf-cache-status'], `Expected Result: cf-cache-status: ${headers['cf-cache-status']}`).toBe('HIT');
  }, `Open ST page ${pageName} as a guest until the header "cf-cache-status: HIT" appears`).toPass({
    intervals: [2_000],
    timeout: 10_000,
  });

  await test.step('Update content on ST page by author', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    await admin.stPage.updateDescriptionRichTextWidget(text);
    await expect(
      admin.stPage.descriptionRichTextWidget(text),
      `Expected Result: Description is updated by author successfully`
    ).toBeVisible();
    console.log('2: Content is updated on ST page by author');
  });

  let CfCacheValueMiss;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueMiss = headers['cf-cache-status'];
    console.log(`3: Reload ST page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueMiss}`);

    expect(CfCacheValueMiss, `Expected Result: cf-cache-status should be MISS: ${CfCacheValueMiss}`).toBe('MISS');
    await expect(
      guest.stPage.descriptionRichTextWidget(text),
      `Expected Result: Updated description is visible`
    ).toBeVisible({
      timeout: 2_000,
    });
  }, `Open updated ST page as a guest until the header: "cf-cache-status: MISS" appears & new content is updated`).toPass(
    {
      intervals: [1_000],
      timeout: 20_000,
    }
  );

  let CfCacheValueHit;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueHit = headers['cf-cache-status'];
    console.log(`4: Reload ST page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueHit}`);

    expect(CfCacheValueHit, `Expected Result: cf-cache-status should be HIT: ${CfCacheValueHit}`).toBe('HIT');
    await expect(
      guest.stPage.descriptionRichTextWidget(text),
      `Expected Result: Updated description is visible`
    ).toBeVisible({
      timeout: 2_000,
    });
  }, `Open updated ST page as a guest until the header: "cf-cache-status: HIT" appears & new content is updated`).toPass(
    {
      intervals: [1_000],
      timeout: 20_000,
    }
  );
});

test('Check cf-cache-status: cache is purged (MISS) and re-cached (HIT) after editing UG page with short URL build', async ({
  browser,
}) => {
  test.skip(
    process.env.BASE_URL === 'https://mobalytics.gg',
    'Skipping on production environment or when BASE_URL is not defined'
  );
  const uniqueId = uuidv4();
  const text = `uniqueText-${uniqueId}`;
  const pageName = `/diablo-4/profile/spy-man/builds/check-cf-cache-status`;

  // Create guest context (no cookies & clean storage)
  const guestContext = await browser.newContext({
    userAgent: 'moba-warrior',
  });
  const guestPage = await guestContext.newPage();
  const guest = new Moba(guestPage);
  // Create admin context with cookies
  const adminContext = await browser.newContext({
    storageState: '.auth/adminAuth.json',
  });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);

  await expect(async () => {
    const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    let headers = response.headers();
    console.log(`1: Opening ${process.env.BASE_URL}${pageName} as a guest: ${headers['cf-cache-status']}`);

    expect(headers['cf-cache-status'], `Expected Result: cf-cache-status: ${headers['cf-cache-status']}`).toBe('HIT');
  }, `Open ST page ${pageName} as a guest until the header "cf-cache-status: HIT" appears`).toPass({
    intervals: [2_000],
    timeout: 10_000,
  });

  await test.step('Update UG page by author', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    await admin.ugBuildPage.updateDescriptionBuildOverviewWidget(text);
    await expect(
      admin.ugBuildPage.viewBuildOverviewWidget(text),
      'Expected Result: Description is updated by author successfully'
    ).toBeVisible();
    console.log('2: Content is updated on UG page by author');
  });

  let CfCacheValueMiss;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueMiss = headers['cf-cache-status'];
    console.log(`3: Reload UG page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueMiss}`);

    expect(CfCacheValueMiss, `Expected Result: cf-cache-status should be MISS: ${CfCacheValueMiss}`).toBe('MISS');
    await expect(
      guest.ugBuildPage.viewBuildOverviewWidget(text),
      'Expected Result: Updated description is visible'
    ).toBeVisible({ timeout: 2_000 });
  }, `Open updated UG page as a guest until appears the header: "cf-cache-status: MISS" & updated content`).toPass({
    intervals: [2_000],
    timeout: 20_000,
  });

  let CfCacheValueHit;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueHit = headers['cf-cache-status'];
    console.log(`4: Reload UG page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueHit}`);

    expect(CfCacheValueHit, `Expected Result: cf-cache-status should be HIT: ${CfCacheValueHit}`).toBe('HIT');
    await expect(
      guest.ugBuildPage.viewBuildOverviewWidget(text),
      'Expected Result: Updated description is visible'
    ).toBeVisible({ timeout: 2_000 });
  }, `Open updated UG page as a guest until appears the header: "cf-cache-status: HIT" & updated content appears`).toPass(
    {
      intervals: [2_000],
      timeout: 20_000,
    }
  );
});

// test('Check cf-cache-status: HIT & new content is taken from the cache on UG page', async ({ browser }) => {
//   test.skip(
//     process.env.BASE_URL === 'https://mobalytics.gg',
//     'Skipping on production environment or when BASE_URL is not defined'
//   );
//   const uniqueId = uuidv4();
//   const text = `uniqueText-${uniqueId}`;
//   const pageName = `/diablo-4/profile/bold-flame-c2mepg/builds/00fe7176-8383-4159-8143-a2b8dfbfb85e`;

//   // Create guest context (no cookies & clean storage)
//   const guestContext = await browser.newContext({
//     userAgent: 'moba-warrior',
//   });
//   const guestPage = await guestContext.newPage();
//   const guest = new Moba(guestPage);
//   // Create admin context with cookies
//   const adminContext = await browser.newContext({
//     storageState: '.auth/gameManagerAuth.json',
//   });
//   const adminPage = await adminContext.newPage();
//   const admin = new Moba(adminPage);

//   await expect(async () => {
//     console.log(`Opening ${process.env.BASE_URL}${pageName} as a guest`);
//     const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
//       waitUntil: 'domcontentloaded',
//     });

//     let headers = response.headers();
//     expect(headers['cf-cache-status'], `Expected Result: cf-cache-status: ${headers['cf-cache-status']}`).toBe('HIT');
//   }, `Open ST page ${pageName} as a guest until the header "cf-cache-status: HIT" appears`).toPass({
//     intervals: [2_000],
//     timeout: 10_000,
//   });

//   await test.step('Update UG page by admin', async () => {
//     await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
//       waitUntil: 'domcontentloaded',
//     });
//     await admin.ugBuildPage.updateDescriptionBuildOverviewWidget(text);
//     await expect(admin.ugBuildPage.viewBuildOverviewWidget(text)).toBeVisible();
//     console.log('Expected Result: UG page is updated by admin');
//   });

//   let CfCacheValue;
//   await expect(async () => {
//     console.log(`Reload UG page: ${process.env.BASE_URL}${pageName} as a guest`);
//     const reloadResponse = await guestPage.reload();
//     const headers = reloadResponse.headers();
//     CfCacheValue = headers['cf-cache-status'];

//     expect(CfCacheValue, `Expected Result: cf-cache-status should be HIT: ${CfCacheValue}`).toBe('HIT');
//     await expect(guest.ugBuildPage.viewBuildOverviewWidget(text)).toBeVisible({ timeout: 2_000 });
//   }, `Open updated UG page as a guest until the header: "cf-cache-status = HIT" appears & new content is updated`).toPass(
//     {
//       intervals: [1_000],
//       timeout: 14_000,
//     }
//   );

//   await test.step(`Expected Result: Header contains correct value "HIT", cf-cache-status: ${CfCacheValue}`, async () => {
//     expect(CfCacheValue).toBe('HIT');
//   });
//   await test.step(`Expected Result: New description is updated in rich text widget for a guest`, async () => {
//     await expect(guest.ugBuildPage.viewBuildOverviewWidget(text)).toBeVisible();
//   });
// });

test('Check cf-cache-status: cache is purged (MISS) and re-cached (HIT) after editing UG featured page', async ({
  browser,
}) => {
  test.skip(
    process.env.BASE_URL === 'https://mobalytics.gg',
    'Skipping on production environment or when BASE_URL is not defined'
  );
  const uniqueId = uuidv4();
  const text = `uniqueText-${uniqueId}`;
  const pageName = `/diablo-4/builds/check-cf-cache-featured-doc`;

  // Create guest context (no cookies & clean storage)
  const guestContext = await browser.newContext({
    userAgent: 'moba-warrior',
  });
  const guestPage = await guestContext.newPage();
  const guest = new Moba(guestPage);
  // Create admin context with cookies
  const adminContext = await browser.newContext({
    storageState: '.auth/adminAuth.json',
  });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);

  await expect(async () => {
    const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    let headers = response.headers();
    console.log(`1: Opening ${process.env.BASE_URL}${pageName} as a guest: ${headers['cf-cache-status']}`);

    expect(headers['cf-cache-status'], `Expected Result: cf-cache-status: ${headers['cf-cache-status']}`).toBe('HIT');
  }, `Open UG featured page ${pageName} as a guest until the header "cf-cache-status: HIT" appears`).toPass({
    intervals: [2_000],
    timeout: 10_000,
  });

  await test.step('Update UG page as author', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    await admin.ugBuildPage.updateDescriptionBuildOverviewWidget(text);
    await expect(
      admin.ugBuildPage.viewBuildOverviewWidget(text),
      'Expected Result: Description is updated by author successfully'
    ).toBeVisible();
    console.log('2: UG featured page is updated by author');
  });

  let CfCacheValueMiss;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueMiss = headers['cf-cache-status'];
    console.log(`3: Reload UG page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueMiss}`);

    expect(CfCacheValueMiss, `Expected Result: cf-cache-status should be HIT: ${CfCacheValueMiss}`).toBe('MISS');
    await expect(
      guest.ugBuildPage.viewBuildOverviewWidget(text),
      'Expected Result: Updated description is visible'
    ).toBeVisible({ timeout: 2_000 });
  }, `Open updated UG featured page as a guest until the header: "cf-cache-status: MISS" appears & new content is updated`).toPass(
    {
      intervals: [2_000],
      timeout: 20_000,
    }
  );

  let CfCacheValueHit;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueHit = headers['cf-cache-status'];
    console.log(`4: Reload UG page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueHit}`);

    expect(CfCacheValueHit, `Expected Result: cf-cache-status should be HIT: ${CfCacheValueHit}`).toBe('HIT');
    await expect(
      guest.ugBuildPage.viewBuildOverviewWidget(text),
      'Expected Result: Updated description is visible'
    ).toBeVisible({ timeout: 2_000 });
  }, `Open updated UG featured page as a guest until the header: "cf-cache-status: HIT" appears & new content is updated`).toPass(
    {
      intervals: [2_000],
      timeout: 20_000,
    }
  );
});

test('Check cf-cache-status: cache is purged (MISS) and re-cached (HIT) after editing UG page name', async ({
  browser,
}) => {
  test.skip(
    process.env.BASE_URL === 'https://mobalytics.gg',
    'Skipping on production environment or when BASE_URL is not defined'
  );
  const uniqueId = uuidv4();
  const buildName = `Build Name: ${uniqueId}`;
  const pageName = `/diablo-4/profile/spy-man/builds/my-build`;

  // Create guest context (no cookies & clean storage)
  const guestContext = await browser.newContext({
    userAgent: 'moba-warrior',
  });
  const guestPage = await guestContext.newPage();
  const guest = new Moba(guestPage);
  // Create admin context with cookies
  const adminContext = await browser.newContext({
    storageState: '.auth/adminAuth.json',
  });
  const adminPage = await adminContext.newPage();
  const admin = new Moba(adminPage);

  await expect(async () => {
    const response = await guestPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });
    let headers = response.headers();
    console.log(`1: Opening ${process.env.BASE_URL}${pageName} as a guest: ${headers['cf-cache-status']}`);

    expect(headers['cf-cache-status'], `Expected Result: cf-cache-status: ${headers['cf-cache-status']}`).toBe('HIT');
  }, `1: Open ST page ${pageName} as a guest until the header "cf-cache-status: HIT" appears`).toPass({
    intervals: [2_000],
    timeout: 10_000,
  });

  await test.step('Update UG document name by author', async () => {
    await adminPage.goto(`${process.env.BASE_URL}${pageName}`, {
      waitUntil: 'domcontentloaded',
    });

    await admin.ugBuildPage.updateUgDocumentName(buildName);
    await expect(admin.ugBuildPage.controlPanel).toContainText(buildName);
    console.log('2: UG document name is updated by author');
  });

  let CfCacheValueMiss;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueMiss = headers['cf-cache-status'];
    console.log(`Reload UG page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueMiss}`);

    expect(CfCacheValueMiss, `Expected Result: cf-cache-status should be MISS: ${CfCacheValueMiss}`).toBe('MISS');
    await expect(guest.ugBuildPage.widgetHeader).toContainText(buildName, { timeout: 2_000 });
  }, `Open updated UG page as a guest until the header: "cf-cache-status: MISS" appears & UG document name is updated`).toPass(
    {
      intervals: [2_000],
      timeout: 20_000,
    }
  );

  let CfCacheValueHit;
  await expect(async () => {
    const reloadResponse = await guestPage.reload();
    const headers = reloadResponse.headers();
    CfCacheValueHit = headers['cf-cache-status'];
    console.log(`Reload UG page: ${process.env.BASE_URL}${pageName} as a guest: ${CfCacheValueHit}`);

    expect(CfCacheValueHit, `Expected Result: cf-cache-status should be HIT: ${CfCacheValueHit}`).toBe('HIT');
    await expect(guest.ugBuildPage.widgetHeader).toContainText(buildName, { timeout: 2_000 });
  }, `Open updated UG page as a guest until the header: "cf-cache-status: HIT" appears & UG document name is updated`).toPass(
    {
      intervals: [2_000],
      timeout: 20_000,
    }
  );
});

test('cf-cache-status: BYPASS appears with query param in URL: ?force_ssr=1', async ({ page }) => {
  const response = await page.goto(`${process.env.BASE_URL}/mhw?force_ssr=1`);
  const headers = response.headers();

  expect(
    headers['cf-cache-status'],
    'cf-cache-status: BYPASS is received, opening the page with query param: ?force_ssr=1'
  ).toBe('BYPASS');
});

test('cf-cache-status: MISS appears when open url with always new query param', async ({ page }) => {
  const CfCacheValue = await test.step('Open url with always new query param', async () => {
    const uuid = uuidv4();
    const response = await page.goto(`${process.env.BASE_URL}/mhw?${uuid}`);
    const headers = response.headers();
    return headers['cf-cache-status'];
  });

  expect(CfCacheValue, 'Expected Result: cf-cache-status: MISS is received').toBe('MISS');
});
