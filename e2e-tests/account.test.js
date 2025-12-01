import { test } from '../src/fixtures/index';
import { expect } from '@playwright/test';
import { Moba } from '../src/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

test('Delete mobalytics account', async ({ page, registerAccount }) => {
  const moba = new Moba(page);

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
  const accountName = `newAccountName-${uniqueId}`;

  await moba.mainURLs.openBorderlands4Page();
  await moba.navbar.gotoSignInPage();
  await moba.signInPage.loginUser(
    'rewad+stg-aqa-change-name@mobalyticshq.com',
    'rewad+stg-aqa-change-name@mobalyticshq.com'
  );
  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountSettings.changeAccountName(accountName);

  await test.step(`Account name is changed to a new account name: ${accountName}`, async () => {
    await expect(moba.accountSettings.accountName(accountName)).toBeVisible();
  });
});
