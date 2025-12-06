import { test } from '../src/fixtures/fixture';
import { expect } from '@playwright/test';
import { Moba } from '../src/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

test('Delete mobalytics account', async ({ registerAccount }) => {
  const moba = registerAccount;

  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountSettings.deleteAccount();

  await test.step('Account is deleted', async () => {
    await expect(moba.byeBye.header).toBeVisible();
    await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
  });
});

test('Change account name', async ({ page }) => {
  const moba = new Moba(page);
  const uniqueId = uuidv4().substring(0, 4);
  const newAccountName = `newAccountName-${uniqueId}`;
  const credentials =
    process.env.BASE_URL === 'https://mobalytics.gg'
      ? 'rewad+prod-aqa-change-name@mobalyticshq.com'
      : 'rewad+stg-aqa-change-name@mobalyticshq.com';

  await moba.mainURLs.openBorderlands4Page();
  await moba.navbar.gotoSignInPage();
  await moba.signInPage.loginUser(credentials, credentials);
  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountSettings.changeAccountName(newAccountName);

  await test.step(`Account name is changed to a new account name: ${newAccountName}`, async () => {
    await expect(moba.accountSettings.accountName(newAccountName)).toBeVisible();
  });
});
