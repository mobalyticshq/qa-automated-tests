import { v4 as uuidv4 } from 'uuid';
import { test, expect } from './fixtures/fixture';
import { Moba } from '../app/page-object/moba';

// test.use({ userAgent: 'moba-warrior' });

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

test('404 error page appears after deleting a build', async ({ apiPlusUser, request, browser }) => {
  // Create guest context (no cookies & only special user agent)
  const guestContext = await browser.newContext({
    userAgent: 'moba-warrior',
  });
  const guestPage = await guestContext.newPage();

  const createBuildResponse = await request.post(`${process.env.BASE_URL}/api/diablo4/v4/graphql/query`, {
    data: {
      operationName: 'Diablo4UgDocumentCreateMutation',
      query: `
        mutation Diablo4UgDocumentCreateMutation($input: Diablo4UserGeneratedDocumentCreateInput!) {
          game: diablo4 {
            documents {
              userGeneratedDocumentCreate(input: $input) {
                errorMessage
                error
                data {
                  ...NgfUgBaseDocumentFragment
                }
              }
            }
          }
        }

        fragment NgfUgBaseDocumentFragment on NgfUserGeneratedDocument {
          id
          type
          category
          version
          createdAt
          updatedAt
        }
      `,
      variables: {
        input: {
          document:
            'eyJpZCI6IiIsInNsdWdpZmllZE5hbWUiOm51bGwsInZlcnNpb24iOjAsImZpcnN0UHVibGlzaGVkQXQiOm51bGwsInN0YXR1cyI6IkRSQUZUIiwiZmF2b3JpdGVzIjp7ImZhdm9yaXRlc0NvdW50IjowLCJpc0Zhdm9yaXRlIjpmYWxzZX0sImNvbW1lbnRzIjp7InN0YXRzIjp7InRvdGFsQ29tbWVudHMiOjB9fSwiZmVhdHVyZWQiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjYtMTAtMDdUMDg6MjA6NTYuNzA5WiIsInVwZGF0ZWRBdCI6IjIwMjYtMTAtMDdUMDg6MjA6NTYuNzA5WiIsImNhdGVnb3J5IjoiVUciLCJ0eXBlIjoiYnVpbGRzIiwidHlwZURhdGEiOnsic2x1ZyI6ImJ1aWxkcyIsImRpc3BsYXlNZXRhZGF0YSI6eyJjb3ZlckltYWdlVXJsUGF0dGVybiI6Imh0dHBzOi8vY2RuLm1vYmFseXRpY3MuZ2cvYXNzZXRzL2RpYWJsby00L2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy9jbGFzc2VzL3t7Y2xhc3N9fS5qcGcifX0sInNlbyI6eyJ0aXRsZSI6IkRpYWJsbyA0IEJ1aWxkIFBsYW5uZXIgLSBDcmVhdGUgJiBTaGFyZSBZb3VyIEJ1aWxkcyIsImRlc2NyaXB0aW9uIjoiQ3JlYXRlICYgc2hhcmUgeW91ciBidWlsZHMgd2l0aCBmcmllbmRzIG9yIHRoZSBlbnRpcmUgRGlhYmxvIDQgY29tbXVuaXR5IHdpdGggb3VyIGJ1aWxkIHBsYW5uZXIuIiwib2dJbWFnZSI6bnVsbCwiY2Fub25pY2FsVXJsIjpudWxsLCJub0luZGV4IjpudWxsLCJzY2hlbWFNYXJrdXAiOm51bGx9LCJjb250ZW50IjpbeyJfX3R5cGVuYW1lIjoiTmdmRG9jdW1lbnRDbVNlY3Rpb25BdXRvMVYxIiwiaWQiOiJyb290IiwiZGF0YSI6eyJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOm51bGwsImNoaWxkcmVuSWRzIjpbIjg2N2MwNmNiLWQ0YjAtNDQ0Yi1iN2M0LWU2ZTI1NjJjY2MzNCIsImVhOWMzZGM1LTRlNDctNDJkMy1hYWU1LWViNWNjNDhkNzNmNyJdfX0seyJfX3R5cGVuYW1lIjoiTmdmRG9jdW1lbnRDbVNlY3Rpb25WaWRlb0FkVjEiLCJpZCI6Ijg2N2MwNmNiLWQ0YjAtNDQ0Yi1iN2M0LWU2ZTI1NjJjY2MzNCIsImRhdGEiOnsiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjpudWxsLCJjaGlsZHJlbklkcyI6WyJmZGUwZTA5YS0yNWRhLTQzNzEtYWU0MC03ZDA0M2I1ODQzZWEiXX19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50VWdXaWRnZXRIZWFkZXJWMSIsImlkIjoiZmRlMGUwOWEtMjVkYS00MzcxLWFlNDAtN2QwNDNiNTg0M2VhIiwiZGF0YSI6eyJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOm51bGwsInRpdGxlIjoiTmV3IGhlYWRlciB3aWRnZXQifX0seyJfX3R5cGVuYW1lIjoiTmdmRG9jdW1lbnRDbVNlY3Rpb25BdXRvMVYxIiwiaWQiOiJiODViY2Y2MC05ZDI5LTQ2ZWMtOTRjNS0xMzE5NjZlOWIwYWYiLCJkYXRhIjp7ImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbCwiY2hpbGRyZW5JZHMiOlsiZmU5YmUwMDQtZjMzOS00MTk0LWJlMDctYzdiZTg1NmYwN2Y1IiwiMTUiLCIxNCIsIjEiLCIxNyIsIjE4IiwiMGEzYzNlZjMtM2FlNy00YjMwLWI3NjYtMWVmZTA0MDMwZGZlIl19fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudENtU2VjdGlvbkF1dG8xVjEiLCJpZCI6IjYxMDJhYTJmLWI3MGMtNGMyZS04NTAxLTZhMWM3NWRiMjEzNCIsImRhdGEiOnsiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjpudWxsLCJjaGlsZHJlbklkcyI6WyIyNyIsIjkiLCIxMCIsIjEzIiwiMTIiXX19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50Q21TZWN0aW9uQXV0bzQwMFYxIiwiaWQiOiJlYTljM2RjNS00ZTQ3LTQyZDMtYWFlNS1lYjVjYzQ4ZDczZjciLCJkYXRhIjp7ImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbCwiY2hpbGRyZW5JZHMiOlsiYjg1YmNmNjAtOWQyOS00NmVjLTk0YzUtMTMxOTY2ZTliMGFmIiwiNjEwMmFhMmYtYjcwYy00YzJlLTg1MDEtNmExYzc1ZGIyMTM0Il19fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudENtV2lkZ2V0Q29udGVudFZhcmlhbnRzVjEiLCJpZCI6IjEiLCJkYXRhIjp7ImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbCwidGl0bGUiOiJCdWlsZCBWYXJpYW50cyIsImNoaWxkcmVuVmFyaWFudHMiOlt7ImlkIjoiMDQ2YTVkMzItOGIyNi00ZGRkLWE0NjAtYTY0ZDJjNWJiZTIzIiwidGl0bGUiOiJEZWZhdWx0IiwiZGVzY3JpcHRpb24iOnsidmFsdWUiOm51bGwsInBsYWNlaG9sZGVyIjoiRW50ZXIgYSBkZXNjcmlwdGlvbi4uLiIsImNoYXJMaW1pdCI6NTAwMH0sImNoaWxkcmVuSWRzIjpbIjIiLCIyNiIsIjMxIiwiMjQiLCIyMCIsIjIxIiwiMjIiLCIzMiJdfV19fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudFVnV2lkZ2V0QnVpbGRlclYxIiwiaWQiOiIyIiwiZGF0YSI6eyJ0aXRsZSI6IkVxdWlwbWVudCIsInRoZW1lIjoiZXF1aXBtZW50Iiwic3ViVGl0bGUiOm51bGwsImRlc2NyaXB0aW9uIjp7InZhbHVlIjpudWxsLCJjaGFyTGltaXQiOjEwMDAwLCJwbGFjZWhvbGRlciI6bnVsbH0sImdyb3VwcyI6W3sidGl0bGUiOiJDb21tb24iLCJzbHVnIjoiODgzNWQ2NDItYmRkYS00ZjI3LTg3MjAtYTliOTJhMWJmNjIzIiwic2xvdFZpZXciOiJFWFBBTkRFRCIsInNsb3RJY29uRmlsbCI6IkNFTlRFUkVEIiwic2xvdEljb25TdHlsZSI6IlNRVUFSRSIsInNsb3RzUGVyUm93IjoxLCJkaXNwbGF5VGl0bGUiOmZhbHNlLCJkZXBlbmRhYmxlVGFncyI6W10sInNsb3RzIjpbeyJ0aXRsZSI6IkhlbG0iLCJnYW1lU2xvdFNsdWciOiJoZWxtIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiQ2hlc3QgYXJtb3IiLCJnYW1lU2xvdFNsdWciOiJjaGVzdC1hcm1vciIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6Ikdsb3ZlcyIsImdhbWVTbG90U2x1ZyI6Imdsb3ZlcyIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IlBhbnRzIiwiZ2FtZVNsb3RTbHVnIjoicGFudHMiLCJhbGxvd2VkR2FtZURhdGFHcm91cHMiOltdLCJkZXBlbmRhYmxlVGFncyI6W119LHsidGl0bGUiOiJCb290cyIsImdhbWVTbG90U2x1ZyI6ImJvb3RzIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiQW11bGV0IiwiZ2FtZVNsb3RTbHVnIjoiYW11bGV0IiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiUmluZyAxIiwiZ2FtZVNsb3RTbHVnIjoicmluZy0xIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiUmluZyAyIiwiZ2FtZVNsb3RTbHVnIjoicmluZy0yIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiQmx1ZGdlb25pbmcgd2VhcG9uIiwiZ2FtZVNsb3RTbHVnIjoiYmx1ZGdlb25pbmctd2VhcG9uIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOlt7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6ImJhcmJhcmlhbiJ9XX0seyJ0aXRsZSI6IkR1YWwgd2llbGQgd2VhcG9uIDEiLCJnYW1lU2xvdFNsdWciOiJkdWFsLXdpZWxkLXdlYXBvbi0xIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOlt7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6ImJhcmJhcmlhbiJ9LHsiZ3JvdXBTbHVnIjoiY2xhc3MiLCJzbHVnIjoicm9ndWUifV19LHsidGl0bGUiOiJEdWFsIHdpZWxkIHdlYXBvbiAyIiwiZ2FtZVNsb3RTbHVnIjoiZHVhbC13aWVsZC13ZWFwb24tMiIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbeyJncm91cFNsdWciOiJjbGFzcyIsInNsdWciOiJiYXJiYXJpYW4ifSx7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6InJvZ3VlIn1dfSx7InRpdGxlIjoiU2xhc2hpbmcgd2VhcG9uIiwiZ2FtZVNsb3RTbHVnIjoic2xhc2hpbmctd2VhcG9uIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOlt7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6ImJhcmJhcmlhbiJ9XX0seyJ0aXRsZSI6IlJhbmdlZCB3ZWFwb24iLCJnYW1lU2xvdFNsdWciOiJyYW5nZWQtd2VhcG9uIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOlt7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6InJvZ3VlIn1dfSx7InRpdGxlIjoiV2VhcG9uIiwiZ2FtZVNsb3RTbHVnIjoid2VhcG9uIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOlt7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6ImRydWlkIn0seyJncm91cFNsdWciOiJjbGFzcyIsInNsdWciOiJuZWNyb21hbmNlciJ9LHsiZ3JvdXBTbHVnIjoiY2xhc3MiLCJzbHVnIjoic29yY2VyZXIifSx7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6InNwaXJpdGJvcm4ifSx7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6InBhbGFkaW4ifSx7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6IndhcmxvY2sifV19LHsidGl0bGUiOiJPZmZoYW5kIiwiZ2FtZVNsb3RTbHVnIjoib2ZmaGFuZCIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbeyJncm91cFNsdWciOiJjbGFzcyIsInNsdWciOiJkcnVpZCJ9LHsiZ3JvdXBTbHVnIjoiY2xhc3MiLCJzbHVnIjoibmVjcm9tYW5jZXIifSx7Imdyb3VwU2x1ZyI6ImNsYXNzIiwic2x1ZyI6InNvcmNlcmVyIn0seyJncm91cFNsdWciOiJjbGFzcyIsInNsdWciOiJwYWxhZGluIn0seyJncm91cFNsdWciOiJjbGFzcyIsInNsdWciOiJ3YXJsb2NrIn1dfV19XSwic2hvd0VtcHR5R3JvdXBzIjpudWxsLCJzaG93RW1wdHlTbG90cyI6bnVsbCwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjp7ImVuYWJsZWQiOnRydWV9fX0seyJfX3R5cGVuYW1lIjoiTmdmRG9jdW1lbnRDbVdpZGdldFZpZGVvVjIiLCJpZCI6IjkiLCJkYXRhIjp7InRpdGxlIjoiVmlkZW8iLCJzdWJUaXRsZSI6bnVsbCwidmlkZW9VcmwiOm51bGwsImF1dG9wbGF5IjpmYWxzZSwibG9vcCI6ZmFsc2UsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbH19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50Q21XaWRnZXRUYWJsZU9mQ29udGVudFYxIiwiaWQiOiIxMCIsImRhdGEiOnsiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjp0cnVlLCJpc1N0aWNreUluVmlld01vZGUiOnRydWUsImZvY3VzTW9kZSI6bnVsbCwic3R1YiI6IlRhYmxlIG9mIENvbnRlbnQifX0seyJfX3R5cGVuYW1lIjoiTmdmRG9jdW1lbnRDbVdpZGdldFByb21vQmFubmVySG9yaXpvbnRhbFYxIiwiaWQiOiIxMiIsImRhdGEiOnsiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjpudWxsLCJ0aXRsZSI6IkJlY29tZSBhIENyZWF0b3IiLCJzdWJUaXRsZSI6IldhbnQgdG8gZWFybiByZXdhcmRzIGJ5IHNoYXJpbmcgeW91ciBidWlsZHMgd2l0aCB5b3VyIGNvbW11bml0eT8iLCJidXR0b25Db2xvciI6IiNGMkJGNDMiLCJidXR0b25UaXRsZSI6IkpvaW4gQ3JlYXRvciBQcm9ncmFtIiwiYnV0dG9uVGV4dENvbG9yIjoiIzAwMDAwMCIsImJhY2tncm91bmRDc3MiOm51bGwsImJhY2tncm91bmRJbWFnZU1hc2siOm51bGwsImxpbmtVcmwiOiJodHRwczovL2Zvcm0udHlwZWZvcm0uY29tL3RvL2lESlNUNnI1I2VtYWlsPXh4eHh4Iiwib3BlbkxpbmtJbk5ld1RhYiI6dHJ1ZSwicGxhdGZvcm1zIjpudWxsLCJ1c2VyTGV2ZWxzIjpudWxsLCJtaXhwYW5lbFNsdWciOiJiZWNvbWUtY3JlYXRvciJ9fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudENtV2lkZ2V0RGlzY292ZXJ5UHJldmlld0NvbXBhY3RWMiIsImlkIjoiMTMiLCJkYXRhIjp7ImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbCwidGl0bGUiOiJGZWF0dXJlZCBCdWlsZHMiLCJidXR0b25MaW5rVXJsIjoiL2RpYWJsby00L2J1aWxkcyIsIm9wZW5CdXR0b25MaW5rSW5OZXdUYWIiOnRydWUsImRpc2NvdmVyeSI6eyJjdXJzb3IiOm51bGwsImxpbWl0Ijo1LCJpZHMiOm51bGwsInNsdWdzIjpudWxsLCJhdXRob3JJZCI6bnVsbCwidHlwZSI6ImJ1aWxkcyIsIm5hbWUiOm51bGwsInNlYXNvblNsdWciOm51bGwsInRpZXJTbHVnIjpudWxsLCJ0YWdzIjpbXSwiaW5pdGlhbFN0YXRlIjp7InRhZ3MiOltdfSwiZG9jdW1lbnRTdGF0dXMiOlsiUFVCTElTSEVEIl0sImZlYXR1cmVkU3RhdHVzZXMiOlsiRkVBVFVSRUQiXSwiaXNGYXZvcml0ZSI6bnVsbCwicHVibGlzaGVkVGltZWZyYW1lIjoiQUxMIiwic29ydEJ5IjoiTkVXIiwiaXRlbXMiOnsiZXJyb3IiOm51bGwsInBhZ2VJbmZvIjp7Imhhc01vcmVJdGVtcyI6dHJ1ZSwiY3Vyc29yIjoiYm1kbVEzVnljMjl5VmpJSk1qQXlOQzB3T0MweE4xUXhPRG94TXpveU5pNDJPRGd3TVRoYUNURXdOemszQ1RJd01qWXRNRGt0TVRWVU1UWTZNelU2TkRVdU16SXlOemt5V2drM05tVmlabVkxWmkwek1tWXpMVFJrTUdNdFlqZ3pOeTFqTkRsbFlURXdPVEU0TTJNSk1DNDFOell6TXpneU16RTFOak0xTmpneCIsInRvdGFsIjo2NH0sImRvY3VtZW50cyI6bnVsbH19LCJzdWJUaXRsZSI6bnVsbCwidmlzdWFsIjoiSU1BR0UiLCJidXR0b25UaXRsZSI6IlZpZXcgQWxsIn19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50Q21XaWRnZXRTdHJlbmd0aHNBbmRXZWFrbmVzc2VzVjEiLCJpZCI6IjE0IiwiZGF0YSI6eyJ0aXRsZSI6IlN0cmVuZ3RocyBhbmQgV2Vha25lc3NlcyIsInN1YlRpdGxlIjp7InZhbHVlIjpudWxsLCJjaGFyTGltaXQiOm51bGwsInBsYWNlaG9sZGVyIjpudWxsfSwibGF5b3V0IjoiSE9SSVpPTlRBTCIsInBvaW50c0xpbWl0IjoxMCwid2Vha25lc3NlcyI6eyJ2YWx1ZSI6bnVsbCwiY2hhckxpbWl0IjoyNTAwLCJwbGFjZWhvbGRlciI6IkFkZCBXZWFrbmVzc2VzLCBzZXBhcmF0ZWQgYnkgRW50ZXIifSwic3RyZW5ndGhzIjp7InZhbHVlIjpudWxsLCJjaGFyTGltaXQiOjI1MDAsInBsYWNlaG9sZGVyIjoiQWRkIFN0cmVuZ3Rocywgc2VwYXJhdGVkIGJ5IEVudGVyIn0sImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbH19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50Q21XaWRnZXRSaWNoVGV4dFNpbXBsaWZpZWRWMiIsImlkIjoiMTUiLCJkYXRhIjp7InRpdGxlIjoiQnVpbGQgT3ZlcnZpZXciLCJzdWJUaXRsZSI6bnVsbCwiY29udGVudCI6eyJ2YWx1ZSI6bnVsbCwiY2hhckxpbWl0IjoxMDAwMCwicGxhY2Vob2xkZXIiOm51bGx9LCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOm51bGx9fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudENtV2lkZ2V0UmljaFRleHRTaW1wbGlmaWVkVjIiLCJpZCI6IjE3IiwiZGF0YSI6eyJ0aXRsZSI6IkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zIiwic3ViVGl0bGUiOm51bGwsImNvbnRlbnQiOnsidmFsdWUiOm51bGwsImNoYXJMaW1pdCI6NTAwMDAsInBsYWNlaG9sZGVyIjpudWxsfSwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjp7ImVuYWJsZWQiOmZhbHNlfX19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50Q21XaWRnZXRSaWNoVGV4dFNpbXBsaWZpZWRWMiIsImlkIjoiMTgiLCJkYXRhIjp7InRpdGxlIjoiQ2hhbmdlbG9nIiwic3ViVGl0bGUiOm51bGwsImNvbnRlbnQiOnsidmFsdWUiOm51bGwsImNoYXJMaW1pdCI6NTAwMCwicGxhY2Vob2xkZXIiOm51bGx9LCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOm51bGx9fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudENtV2lkZ2V0Q29tbWVudHNWMSIsImlkIjoiMGEzYzNlZjMtM2FlNy00YjMwLWI3NjYtMWVmZTA0MDMwZGZlIiwiZGF0YSI6eyJpc0Rpc2FibGVkIjpmYWxzZSwicGF5bG9hZCI6eyJyZXNvdXJjZUlkIjoiMTIzIiwiY29tbWVudElkIjoiIiwiZXJyb3IiOm51bGwsInBhZ2UiOnsiaGFzTW9yZUl0ZW1zIjpmYWxzZSwibmV4dEN1cnNvciI6bnVsbH0sImRhdGEiOnsicGFyZW50SWQiOm51bGwsInNvcnRCeSI6Ik5FVyIsImxpbWl0IjoxMCwiY29tbWVudHMiOltdfX0sInVpQ2FwYWJpbGl0aWVzIjp7ImxvYWRpbmdCZWhhdmlvdXIiOiJTSE9XX01PUkUiLCJzb3J0aW5nIjp7ImVuYWJsZWQiOnRydWUsImRlZmF1bHRTb3J0aW5nT3B0aW9uIjoiTkVXIn19LCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOnsiZW5hYmxlZCI6ZmFsc2V9fX0seyJfX3R5cGVuYW1lIjoiRGlhYmxvNERvY3VtZW50VWdXaWRnZXRTa2lsbFRyZWVWMSIsImlkIjoiMjAiLCJkYXRhIjp7InRpdGxlIjoiU2tpbGwgVHJlZSIsInN1YlRpdGxlIjpudWxsLCJkZXNjcmlwdGlvbiI6eyJjaGFyTGltaXQiOjUwMDAsInBsYWNlaG9sZGVyIjpudWxsLCJ2YWx1ZSI6bnVsbH0sImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6eyJlbmFibGVkIjp0cnVlfSwibWF4TGV2ZWwiOjcxfX0seyJfX3R5cGVuYW1lIjoiRGlhYmxvNERvY3VtZW50VWdXaWRnZXRQYXJhZ29uVjEiLCJpZCI6IjIxIiwiZGF0YSI6eyJ0aXRsZSI6IlBhcmFnb24gQm9hcmQiLCJzdWJUaXRsZSI6bnVsbCwiZGVzY3JpcHRpb24iOnsiY2hhckxpbWl0Ijo1MDAwLCJwbGFjZWhvbGRlciI6bnVsbCwidmFsdWUiOm51bGx9LCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOnsiZW5hYmxlZCI6dHJ1ZX0sInBhcmFnb25Ob2Rlc0xpbWl0IjpudWxsLCJyZW5vd25WYWx1ZSI6bnVsbH19LHsiX190eXBlbmFtZSI6IkRpYWJsbzREb2N1bWVudFVnV2lkZ2V0TWVyY2VuYXJ5VjEiLCJpZCI6IjIyIiwiZGF0YSI6eyJ0aXRsZSI6Ik1lcmNlbmFyaWVzIiwic3ViVGl0bGUiOm51bGwsImRlc2NyaXB0aW9uIjp7ImNoYXJMaW1pdCI6NTAwMCwicGxhY2Vob2xkZXIiOm51bGwsInZhbHVlIjpudWxsfSwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjp7ImVuYWJsZWQiOnRydWV9fX0seyJfX3R5cGVuYW1lIjoiRGlhYmxvNERvY3VtZW50VWdXaWRnZXRBc3NpZ25lZFNraWxsc1YxIiwiaWQiOiIyNCIsImRhdGEiOnsidGl0bGUiOiJTa2lsbHMgJiBSb3RhdGlvbiIsInN1YlRpdGxlIjpudWxsLCJkZXNjcmlwdGlvbiI6eyJjaGFyTGltaXQiOjEwMDAwLCJwbGFjZWhvbGRlciI6bnVsbCwidmFsdWUiOm51bGx9LCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOnsiZW5hYmxlZCI6ZmFsc2V9fX0seyJfX3R5cGVuYW1lIjoiRGlhYmxvNERvY3VtZW50VWdXaWRnZXRUcmFja2luZ1YxIiwiaWQiOiJmZTliZTAwNC1mMzM5LTQxOTQtYmUwNy1jN2JlODU2ZjA3ZjUiLCJkYXRhIjp7InRpdGxlIjoiQnVpbGQgVHJhY2tlciIsInN1YlRpdGxlIjpudWxsLCJpc1N0aWNreUluVmlld01vZGUiOmZhbHNlLCJpc1N0aWNreUluRWRpdGluZ01vZGUiOmZhbHNlLCJmb2N1c01vZGUiOm51bGx9fSx7Il9fdHlwZW5hbWUiOiJOZ2ZEb2N1bWVudFVnV2lkZ2V0QnVpbGRlclYxIiwiaWQiOiIyNiIsImRhdGEiOnsidGl0bGUiOiJUYWxpc21hbiIsInRoZW1lIjoidGFsaXNtYW4iLCJzdWJUaXRsZSI6bnVsbCwiZGVzY3JpcHRpb24iOnsidmFsdWUiOm51bGwsImNoYXJMaW1pdCI6MzAwMCwicGxhY2Vob2xkZXIiOm51bGx9LCJncm91cHMiOlt7InRpdGxlIjoiU2VhbHMiLCJzbHVnIjoiYTU3MTYxMjctZjg3Ni00NjE2LWI3YjItZDM2YmFhZTNkYzg1Iiwic2xvdFZpZXciOiJFWFBBTkRFRCIsInNsb3RJY29uRmlsbCI6IkNFTlRFUkVEIiwic2xvdEljb25TdHlsZSI6IlNRVUFSRV9ST1VOREVEIiwic2xvdHNQZXJSb3ciOjEsImRpc3BsYXlUaXRsZSI6ZmFsc2UsImRlcGVuZGFibGVUYWdzIjpbXSwic2xvdHMiOlt7InRpdGxlIjoiU2VhbCIsImdhbWVTbG90U2x1ZyI6InNlYXNvbi0xMi1zZWFsIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfV19LHsidGl0bGUiOiJDaGFybXMiLCJzbHVnIjoiMDQxNjdjMzktNzc0Yi00NWU0LWJjMTYtY2FlMTJiNmRkOWRkIiwic2xvdFZpZXciOiJFWFBBTkRFRCIsInNsb3RJY29uRmlsbCI6IkNFTlRFUkVEIiwic2xvdEljb25TdHlsZSI6IkNJUkNMRSIsInNsb3RzUGVyUm93IjoxLCJkaXNwbGF5VGl0bGUiOmZhbHNlLCJkZXBlbmRhYmxlVGFncyI6W10sInNsb3RzIjpbeyJ0aXRsZSI6IkNoYXJtIDEiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTItY2hhcm0tMSIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IkNoYXJtIDIiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTItY2hhcm0tMiIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IkNoYXJtIDMiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTItY2hhcm0tMyIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IkNoYXJtIDQiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTItY2hhcm0tNCIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IkNoYXJtIDUiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTItY2hhcm0tNSIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IkNoYXJtIDYiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTItY2hhcm0tNiIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX1dfV0sInNob3dFbXB0eUdyb3VwcyI6bnVsbCwic2hvd0VtcHR5U2xvdHMiOm51bGwsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6eyJlbmFibGVkIjp0cnVlfX19LHsiX190eXBlbmFtZSI6Ik5nZkRvY3VtZW50VWdXaWRnZXRCdWlsZGVyVjEiLCJpZCI6IjMxIiwiZGF0YSI6eyJ0aXRsZSI6IlByaW1lIEV2aWwgUG93ZXJzIiwidGhlbWUiOiJwcmltZS1ldmlsLXBvd2VycyIsInN1YlRpdGxlIjpudWxsLCJkZXNjcmlwdGlvbiI6eyJ2YWx1ZSI6bnVsbCwiY2hhckxpbWl0IjoxMDAwLCJwbGFjZWhvbGRlciI6bnVsbH0sImdyb3VwcyI6W3sidGl0bGUiOiJQb3dlcnMiLCJzbHVnIjoiOWQ5N2Q2ZDAtZWI0Yi00ODk2LWFiYmUtMDA1ODFiMmE2YWIxIiwic2xvdFZpZXciOiJDT0xMQVBTRUQiLCJzbG90SWNvbkZpbGwiOiJDRU5URVJFRCIsInNsb3RJY29uU3R5bGUiOiJDSVJDTEUiLCJzbG90c1BlclJvdyI6MSwiZGlzcGxheVRpdGxlIjpmYWxzZSwiZGVwZW5kYWJsZVRhZ3MiOltdLCJzbG90cyI6W3sidGl0bGUiOiJDb3JlIHBvd2VyIiwiZ2FtZVNsb3RTbHVnIjoic2Vhc29uLTE1LXBvd2VyLXNsb3QtY29yZSIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IlBvd2VyIDEiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTUtcG93ZXItc2xvdC0xIiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiUG93ZXIgMiIsImdhbWVTbG90U2x1ZyI6InNlYXNvbi0xNS1wb3dlci1zbG90LTIiLCJhbGxvd2VkR2FtZURhdGFHcm91cHMiOltdLCJkZXBlbmRhYmxlVGFncyI6W119LHsidGl0bGUiOiJQb3dlciAzIiwiZ2FtZVNsb3RTbHVnIjoic2Vhc29uLTE1LXBvd2VyLXNsb3QtMyIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX0seyJ0aXRsZSI6IlBvd2VyIDQiLCJnYW1lU2xvdFNsdWciOiJzZWFzb24tMTUtcG93ZXItc2xvdC00IiwiYWxsb3dlZEdhbWVEYXRhR3JvdXBzIjpbXSwiZGVwZW5kYWJsZVRhZ3MiOltdfSx7InRpdGxlIjoiUG93ZXIgNSIsImdhbWVTbG90U2x1ZyI6InNlYXNvbi0xNS1wb3dlci1zbG90LTUiLCJhbGxvd2VkR2FtZURhdGFHcm91cHMiOltdLCJkZXBlbmRhYmxlVGFncyI6W119LHsidGl0bGUiOiJQb3dlciA2IiwiZ2FtZVNsb3RTbHVnIjoic2Vhc29uLTE1LXBvd2VyLXNsb3QtNiIsImFsbG93ZWRHYW1lRGF0YUdyb3VwcyI6W10sImRlcGVuZGFibGVUYWdzIjpbXX1dfV0sInNob3dFbXB0eUdyb3VwcyI6dHJ1ZSwic2hvd0VtcHR5U2xvdHMiOnRydWUsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6eyJlbmFibGVkIjpmYWxzZX19fSx7Il9fdHlwZW5hbWUiOiJEaWFibG80RG9jdW1lbnRVZ1dpZGdldExvb3RGaWx0ZXJWMSIsImlkIjoiMjciLCJkYXRhIjp7InRpdGxlIjoiTG9vdCBGaWx0ZXIiLCJzdWJUaXRsZSI6bnVsbCwiaXNTdGlja3lJblZpZXdNb2RlIjpmYWxzZSwiaXNTdGlja3lJbkVkaXRpbmdNb2RlIjpmYWxzZSwiZm9jdXNNb2RlIjpudWxsfX0seyJfX3R5cGVuYW1lIjoiRGlhYmxvNERvY3VtZW50VWdXaWRnZXRXYXJQbGFuc1YxIiwiaWQiOiIzMiIsImRhdGEiOnsidGl0bGUiOiJXYXIgUGxhbnMiLCJzdWJUaXRsZSI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsImlzU3RpY2t5SW5WaWV3TW9kZSI6ZmFsc2UsImlzU3RpY2t5SW5FZGl0aW5nTW9kZSI6ZmFsc2UsImZvY3VzTW9kZSI6bnVsbH19XSwiZGF0YSI6eyJiYWNrZ3JvdW5kSW1hZ2UiOiIiLCJjaGlsZHJlbklkcyI6WyJyb290Il0sInRpZXJMaXN0cyI6eyJ2YWx1ZXMiOltdfSwiYnVpbGRWYXJpYW50cyI6eyJ2YWx1ZXMiOlt7ImlkIjoiMDQ2YTVkMzItOGIyNi00ZGRkLWE0NjAtYTY0ZDJjNWJiZTIzIiwiZ2VuZXJpY0J1aWxkZXIiOnsic2xvdHMiOm51bGx9LCJlcXVpcG1lbnRQcmlvcml0eUxpc3QiOm51bGwsInRhbGlzbWFuc1ByaW9yaXR5TGlzdCI6bnVsbH1dfSwibmFtZSI6Ik15IEJ1aWxkIn0sInRhZ3MiOnsiZGF0YSI6W3siZ3JvdXBTbHVnIjoiY2xhc3MiLCJhcmNoaXZlZCI6ZmFsc2UsImRlc2NyaXB0aW9uIjpudWxsLCJpY29uVXJsIjpudWxsLCJpbWFnZVVybCI6Imh0dHBzOi8vY2RuLm1vYmFseXRpY3MuZ2cvYXNzZXRzL2RpYWJsby00L2ltYWdlcy9jbGFzc2VzLWljb25zL0JhcmJhcmlhbi5wbmciLCJuYW1lIjoiQmFyYmFyaWFuIiwicGx1cmFsTmFtZSI6bnVsbCwic2x1ZyI6ImJhcmJhcmlhbiIsImxpbmtVcmwiOm51bGwsImxpbmtlZFRhZ3MiOm51bGx9LHsiZ3JvdXBTbHVnIjoic2Vhc29uIiwiYXJjaGl2ZWQiOmZhbHNlLCJkZXNjcmlwdGlvbiI6bnVsbCwiaWNvblVybCI6bnVsbCwiaW1hZ2VVcmwiOm51bGwsIm5hbWUiOiJTZWFzb24gMTQiLCJwbHVyYWxOYW1lIjpudWxsLCJzbHVnIjoic2Vhc29uLTE0IiwibGlua1VybCI6bnVsbCwibGlua2VkVGFncyI6bnVsbH1dfSwiYXV0aG9yIjp7ImlkIjoiIiwibmFtZSI6IiIsImlzQ3JlYXRvciI6bnVsbCwibGlua3MiOm51bGwsInR3aXRjaExpdmUiOm51bGwsInVzZXIiOm51bGx9fQ',
        },
      },
    },
  });

  const actualBuildJson = await createBuildResponse.json();
  const buildId = actualBuildJson.data?.game?.documents?.userGeneratedDocumentCreate?.data?.id;
  const result = actualBuildJson.data?.game?.documents?.userGeneratedDocumentCreate;

  expect(result.error).toBeNull();
  expect(result.errorMessage).toBeNull();
  expect(result.data).toMatchObject({
    id: expect.any(String),
    type: 'builds',
    category: 'UG',
  });

  const buildStatusResponse = await request.post(`${process.env.BASE_URL}/api/diablo4/v4/graphql/query`, {
    data: {
      query: `
        mutation Diablo4UgDocumentSetStatusMutation($input: Diablo4UserGeneratedDocumentSetStatusInput!) {
            game: diablo4 {
              documents {
                userGeneratedDocumentSetStatus(input: $input) {
                  errorMessage
                  error
                  data {
                    id
                    status
                  }
                }
              }
            }
          }
      `,
      variables: {
        input: {
          id: `${buildId}`,
          status: 'PUBLISHED',
        },
      },
    },
  });

  const statusResponse = await buildStatusResponse.json();
  const resultStatus = statusResponse.data?.game?.documents?.userGeneratedDocumentSetStatus;

  expect(resultStatus.error).toBeNull();
  expect(resultStatus.errorMessage).toBeNull();
  expect(resultStatus.data.status).toBe('PUBLISHED');

  const deleteBuildResponse = await request.post(`${process.env.BASE_URL}/api/diablo4/v4/graphql/query`, {
    data: {
      query: `
        mutation Diablo4UgDocumentSetStatusMutation($input: Diablo4UserGeneratedDocumentSetStatusInput!) {
            game: diablo4 {
              documents {
                userGeneratedDocumentSetStatus(input: $input) {
                  errorMessage
                  error
                  data {
                    id
                    status
                  }
                }
              }
            }
          }
      `,
      variables: {
        input: {
          id: `${buildId}`,
          status: 'ARCHIVED',
        },
      },
    },
  });

  const statusDeletedResponse = await deleteBuildResponse.json();
  const resultDeletedStatus = statusDeletedResponse.data?.game?.documents?.userGeneratedDocumentSetStatus;

  expect(resultDeletedStatus.error).toBeNull();
  expect(resultDeletedStatus.errorMessage).toBeNull();
  expect(resultDeletedStatus.data.status).toBe('ARCHIVED');

  await guestPage.goto(`${process.env.BASE_URL}/diablo-4/profile/bold-robot-uaxekz/builds/${buildId}`, {
    waitUntil: 'domcontentloaded',
  });

  await expect(guestPage.getByRole('heading', { name: '410' })).toBeVisible();
});

test('cf-cache-status: DYNAMIC appears with query param in URL: ?force_ssr=1', async ({ page }) => {
  const response = await page.goto(`${process.env.BASE_URL}/mhw?force_ssr=1`);
  const headers = response.headers();

  expect(
    headers['cf-cache-status'],
    'cf-cache-status: DYNAMIC is received, opening the page with query param: ?force_ssr=1'
  ).toBe('DYNAMIC');
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
