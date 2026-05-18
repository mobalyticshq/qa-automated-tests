import { test } from '@playwright/test';

export class Sidebar {
  constructor(page) {
    this.page = page;
    this.home = page.getByRole('link', { name: 'Home', exact: true });
    this.profile = page.getByRole('link', { name: 'Profile', exact: true });
    this.buildPlanner = page.getByRole('link', { name: 'Build Planner', exact: true });
    this.legendaries = page.getByRole('link', { name: 'Legendaries', exact: true });
    this.builds = page.getByRole('link', { name: 'Builds', exact: true });
    this.vaultHunters = page.getByRole('link', { name: 'Vault Hunters', exact: true });
    this.guides = page.getByRole('link', { name: 'Guides', exact: true });
    this.shiftCodes = page.getByRole('link', { name: 'SHiFT Codes', exact: true });
    this.wiki = page.getByRole('link', { name: 'Wiki', exact: true });
    this.creators = page.getByRole('link', { name: 'Creators', exact: true });
  }

  async gotoHome() {
    await test.step('Sidebar: go to Home', async () => {
      await this.home.click();
    });
  }

  async gotoProfile() {
    await test.step('Sidebar: go to Profile', async () => {
      await this.profile.click();
    });
  }

  async gotoBuildPlanner() {
    await test.step('Sidebar: go to Build Planner', async () => {
      await this.buildPlanner.click();
    });
  }

  async gotoLegendaries() {
    await test.step('Sidebar: go to Legendaries', async () => {
      await this.legendaries.click();
    });
  }

  async gotoBuilds() {
    await test.step('Sidebar: go to Builds', async () => {
      await this.builds.click();
    });
  }

  async gotoVaultHunters() {
    await test.step('Sidebar: go to Vault Hunters', async () => {
      await this.vaultHunters.click();
    });
  }

  async gotoGuides() {
    await test.step('Sidebar: go to Guides', async () => {
      await this.guides.click();
    });
  }

  async gotoShiftCodes() {
    await test.step('Sidebar: go to SHiFT Codes', async () => {
      await this.shiftCodes.click();
    });
  }

  async gotoWiki() {
    await test.step('Sidebar: go to Wiki', async () => {
      await this.wiki.click();
    });
  }

  async gotoCreators() {
    await test.step('Sidebar: go to Creators', async () => {
      await this.creators.click();
    });
  }
}
