import { test } from "@playwright/test";

export class Navbar {
  constructor(page) {
    this.page = page;
    this.signInButton = page.getByRole("button", { name: "sign in" });
    this.navbar = page.getByText("NightreignNewLoLTFTDiablo");
    this.profileDropdown = page.locator("#account_pulldown");
    this.profileButton = page.getByRole("link", { name: "View your profile" });
    this.profileNameMenu = (profileName) =>
      page.getByRole("link", { name: `${profileName}` });
    this.profileName = page.getByRole("link", {
      name: "Account details: ",
    });
    this.profileNameMenu = page
      .locator(
        '[aria-label="Global Menu"] a[href="https://steamcommunity.com/my/"]'
      )
      .first();
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

  async gotoAccountPage() {
    await test.step("Go to Account page", async () => {
      await this.profileDropdown.click();
      await this.profileName.click();
    });
  }
}
