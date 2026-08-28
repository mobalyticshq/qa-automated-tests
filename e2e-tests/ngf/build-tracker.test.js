import { test, expect } from '../fixtures/fixture';
// import { Moba } from '../../app/page-object/moba';
// import { v4 as uuidv4 } from 'uuid';

test.use({ storageState: { cookies: [], origins: [] } });

test('Activate tracking build modal appears for unauthorized user', async ({ page }) => {
  await page.goto('https://stg.mobalytics.gg/diablo-4/builds/sorcerer-mekuna-lightning-spear', {
    waitUntil: 'domcontentloaded',
  });

  await expect(async () => {
    await page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }).click();
    await expect(
      page.locator('.ModalBox').getByRole('button', { name: 'Activate Tracking' }),
      `Activate Tracking button is present`
    ).toBeVisible();
  }).toPass({ intervals: [1_000, 2_000], timeout: 20_000 });

  await page.locator('.x10l6tqk.x8l1umf').click();

  await expect
    .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }))
    .toBeVisible();
  await expect
    .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Tracking' }))
    .not.toBeVisible();
});

test('Activate tracking build modal appears for regular user', async ({ page, apiRegisterAccount }) => {
  await page.goto('https://stg.mobalytics.gg/diablo-4/builds/sorcerer-mekuna-lightning-spear');
  await page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }).click();

  await expect
    .soft(
      page.locator('.ModalBox').getByRole('button', { name: 'Activate Tracking' }),
      `Activate Tracking button is present`
    )
    .toBeVisible();
  await page.locator('.x10l6tqk.x8l1umf').click();
  await expect
    .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }))
    .toBeVisible();
  await expect
    .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Tracking' }))
    .not.toBeVisible();
});

// test('Activate tracking build feature  for plus user', async ({ page, apiPlusUser }) => {
//   await page.goto('https://stg.mobalytics.gg/diablo-4/builds/sorcerer-mekuna-lightning-spear');
//   await page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }).click();

//   await expect
//     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }))
//     .not.toBeVisible();
//   await expect
//     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Tracking' }))
//     .toBeVisible();
// });
