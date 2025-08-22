import { test } from "@playwright/test";

export class Navbar {
  constructor(page) {
    this.page = page;
    this.settingsButton = page.getByRole("img", { name: "settings" });
    this.signInButton = page.getByRole("button", { name: "sign in" });
    this.gameList = page.getByTestId("navbar-game-list");
    this.profileDropdown = page.getByRole("img", { name: "settings" });
    this.profileButton = page.getByRole("link", { name: "View your profile" });
    this.profileNameMenu = (profileName) =>
      page.getByRole("link", { name: `${profileName}` });
    this.profileName = page.getByRole('link', { name: 'Account Settings' });
  }

  async gotoSignInPage() {
    await test.step("Go to the Sign In page", async () => {
      await this.signInButton.click();
    });
  }

  async gotoProfilePage() {
    await test.step("Go to Profile page", async () => {
      await this.profileButton.click();
    });
  }

  async gotoAccountSettingsPage() {
    await test.step("Go to Account Settings page", async () => {
      await this.profileDropdown.hover();
      await this.profileName.click();
    });
  }
}
