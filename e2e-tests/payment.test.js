import { test } from '../src/fixtures/fixture';
import { expect } from '@playwright/test';
import { Moba } from '../src/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

// test('Purchase Ad Free on MHW page', async ({ registerAccount, page }) => { //! Нужно пофиксить проблему, плейрайт порой не видит iframe локатор для ввода данных карты
//   const moba = registerAccount;

//   await moba.navbar.clickRemoveAds();
//   await moba.paymentPage.fillCardDetails('4242 4242 4242 4242', '12 30', '123');
//   await moba.paymentPage.clickActivateAdFree();
//   await page.getByRole('button', { name: 'back to mobalytics' }).click();
//   await moba.navbar.gotoBillingInfoPage();

//   await test.step('Subscription is purchased successfully', async () => {
//     await expect(moba.navbar.getPlusButton).not.toBeVisible();
//     await expect(moba.billingInfoTab.adFreeLabel).toBeVisible();
//     await expect(moba.billingInfoTab.adFreeSubscriptionType).toBeVisible();
//   });
// });

// test('Purchase PLUS 1 month plan on PoE 2 page', async ({ registerAccount, page }) => {
//   //! Нужно закончить тесть
//   const moba = registerAccount;

//   // await moba.navbar.();
//   await moba.navbar.clickRemoveAds();
//   // await moba.pricingPage.selectOneMonthPlan();
//   await moba.paymentPage.fillCardDetails('4242 4242 4242 4242', '12 30', '123');
//   await moba.paymentPage.clickActivateAdFree();
//   // await page.getByRole('button', { name: 'Let’s play' }).click();
//   await page.getByRole('button', { name: 'back to mobalytics' }).click();
//   await moba.navbar.gotoBillingInfoPage();

//   await test.step('Subscription is purchased successfully', async () => {
//     await expect(moba.navbar.getPlusButton).not.toBeVisible();
//     await expect(moba.billingInfoTab.adFreeLabel).toBeVisible();
//     await expect(moba.billingInfoTab.adFreeSubscriptionType).toBeVisible();
//   });
// });
