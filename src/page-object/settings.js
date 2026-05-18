import { test } from '@playwright/test';

export class AccountInformationTab {
  constructor(page) {
    this.page = page;
    this.buttonDeleteMyAccount = page.getByRole('button', { name: 'Delete Account' });
    this.modalDeleteButton = page.getByRole('button', { name: 'Delete', exact: true });
    this.changeNameButton = page.getByRole('button', { name: 'change name' });
    this.inputAccountName = page.getByRole('textbox', { name: 'Account name' });
    this.modalChangeNameButton = page.getByRole('button', { name: 'change', exact: true });
  }

  userName(userName) {
    return this.page.getByText(userName);
  }

  async deleteAccount() {
    await test.step('Delete account', async () => {
      await this.buttonDeleteMyAccount.click();
      await this.modalDeleteButton.click();
    });
  }
}

export class ProfileTab {
  constructor(page) {
    this.page = page;
    this.plusLabel = page.getByText('Mobalytics Plus');
    this.changeDisplayNameButton = page.getByRole('button', { name: 'Change Display Name' });
    this.modalInputDisplayName = page.getByRole('textbox', { name: 'Display name' });
    this.modalChangeButton = page.getByRole('button', { name: 'Change', exact: true });
    this.previewProfileDisplayName = (displayName) => page.getByText(displayName).first();
    this.widgetDisplayName = (displayName) => page.getByText(displayName).nth(1);
  }

  async changeDisplayName(displayName) {
    await test.step(`Change display name to ${displayName}`, async () => {
      await this.changeDisplayNameButton.click();
      await this.modalInputDisplayName.fill(displayName);
      await this.modalChangeButton.click();
    });
  }
}

export class BillingInfoTab {
  constructor(page) {
    this.page = page;
    this.plusLabel = page.getByText('Mobalytics Plus');
    this.plusSubscriptionType = page.getByText('Plus Subscription');
    this.adFreeLabel = page.getByText('Ad-Free plan');
    this.adFreeSubscriptionType = page.getByText('Ad-free Subscription');
  }
}

export class AccountSettingsPage {
  constructor(page) {
    this.page = page;
    this.profileTab = page.locator('#container').getByRole('link', { name: 'Profile' });
  }

  async selectProfileTab() {
    test.step('Go to profile tab', async () => {
      await this.profileTab.click();
    });
  }
}
