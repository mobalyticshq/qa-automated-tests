import { test as base, expect } from "@playwright/test";
import { Ngf } from "../page-object/ngf";
import { USER_ROLES } from "../setup/credentials";

export const test = base.extend({
  loginUser: async ({ page }, use) => {
    const ngf = new Ngf(page);

    await ngf.mainURLs.openDeadlockPage();
    await ngf.navbar.gotoSignInPage();

    try {
      await expect(ngf.signInPage.welcomeModal).toBeVisible();
      await ngf.signInPage.closeWelcomeModal();
    } catch {
      // If modal doesn't appear - go to the next step
    }

    await ngf.signInPage.loginUser(
      USER_ROLES.admin_prod.email,
      USER_ROLES.admin_prod.password
    );
    await test.step(`User is logged in`, async () => {
      await expect(page.getByRole("img", { name: "settings" })).toBeVisible();
    });
    await use(ngf);
  },
});
