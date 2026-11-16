import { test } from '@playwright/test';

export class Navbar {
  constructor(page) {
    this.page = page;
    this.settingsButton = page.getByRole('link', { name: 'Settings' });
    this.signInButton = page.getByRole('button', { name: 'sign in' });
    this.getPlusButton = page.getByRole('button', { name: 'Get Plus' });
    this.removeAdsButton = page.getByRole('button', { name: 'Remove Ads', exact: true });
    this.gameList = page.getByTestId('navbar-game-list');
    this.profileButton = page.getByRole('link', { name: 'View your profile' });
    this.mgpProfileButton = (profileName) => page.getByRole('button', { name: profileName });
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

  async gotoMgpProfile(profileName) {
    await test.step('Go to MGP profile via navbar', async () => {
      await this.mgpProfileButton(profileName).click();
    });
  }

  async gotoAccountSettingsPage(profileName) {
    await test.step('Go to Account Settings page', async () => {
      await this.mgpProfileButton(profileName).click();
      await this.settingsButton.click();
    });
  }

  async gotoBillingInfoPage() {
    await test.step('Go to Account Settings page', async () => {
      await this.settingsButton.click();
      await this.billingInfoButton.click();
    });
  }

  async clickGetPlus() {
    await test.step('Click Get Plus button', async () => {
      await this.getPlusButton.click();
    });
  }

  async clickRemoveAds() {
    await test.step('Click Remove Ads button', async () => {
      await this.removeAdsButton.click();
    });
  }
}
