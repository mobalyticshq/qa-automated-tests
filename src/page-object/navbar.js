import { test } from '@playwright/test';

export class Navbar {
  constructor(page) {
    this.settingsButton = page.getByRole('img', { name: 'settings' });
    this.signInButton = page.getByRole('button', { name: 'sign in' });
    this.getPlusButton = page.getByRole('button', { name: 'Get Plus' });
    this.removeAdsButton = page.getByRole('button', { name: 'Remove Ads' }).first();
    this.gameList = page.getByTestId('navbar-game-list');
    this.profileButton = page.getByRole('link', { name: 'View your profile' });
    this.accountSettingsButton = page.getByRole('link', { name: 'Account Settings' });
    this.billingInfoButton = page.getByRole('link', { name: 'Billing Info' });
    this.profileNameMenu = (profileName) => page.getByRole('link', { name: `${profileName}` });
  }

  async gotoSignInPage() {
    await test.step('Go to the Sign In page', async () => {
      await this.signInButton.click();
    });
  }

  async gotoProfilePage() {
    await test.step('Go to Profile page', async () => {
      await this.profileButton.click();
    });
  }

  async gotoAccountSettingsPage() {
    await test.step('Go to Account Settings page', async () => {
      await this.settingsButton.hover();
      await this.accountSettingsButton.click();
    });
  }

  async gotoBillingInfoPage() {
    await test.step('Go to Account Settings page', async () => {
      await this.settingsButton.hover();
      await this.billingInfoButton.click();
    });
  }

  async clickGetPlus() {
    await test.step('Click Get Plus button', async () => {
      await this.getPlusButton.click();
    });
  }

  async clickRemoveAds() {
    await test.step('Click Get Plus button', async () => {
      await this.removeAdsButton.click();
    });
  }
}
