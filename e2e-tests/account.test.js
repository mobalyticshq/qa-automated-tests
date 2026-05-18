import { test } from '../src/fixtures/fixture';
import { expect } from '@playwright/test';
import { Moba } from '../src/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

test('Delete mobalytics account', async ({ registerAccount }) => {
  const moba = registerAccount;

  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountInformationTab.deleteAccount();

  await test.step('Account is deleted', async () => {
    await expect(moba.byeBye.header).toBeVisible();
    await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
  });
});

test('Change display name', async ({ page }) => {
  const moba = new Moba(page);
  const uniqueId = uuidv4().substring(0, 4);
  const displayName = `displayName-${uniqueId}`;
  const credentials =
    process.env.BASE_URL === 'https://mobalytics.gg'
      ? 'rewad+prod-aqa-change-name@mobalyticshq.com' // prod account
      : 'rewad+stg-aqa-change-name@mobalyticshq.com'; // stg account

  await moba.mainURLs.openBorderlands4Page();
  await moba.navbar.gotoSignInPage();
  await moba.signInPage.loginUser(credentials, credentials);
  await moba.navbar.gotoAccountSettingsPage();
  await moba.accountSettingsPage.selectProfileTab();
  await moba.profileTab.changeDisplayName(displayName);

  await test.step(`Account name is changed to a new account name: ${displayName}`, async () => {
    await expect(moba.profileTab.previewProfileDisplayName(displayName)).toBeVisible();
    await expect(moba.profileTab.widgetDisplayName(displayName)).toBeVisible();
  });

  await moba.navbar.profileNameMenu(displayName).click();

  await test.step(`Account name isd changed to a new account name: ${displayName}`, async () => {
    await expect(moba.mgpProfile.displayNameHeader(displayName)).toBeVisible();
  });
});
