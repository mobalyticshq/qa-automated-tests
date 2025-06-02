import { USER_ROLES } from "../src/setup/credentials";
import { test, expect } from "@playwright/test";
import { Ngf } from "../src/page-object/ngf";

test("UI login", async ({ page }) => {
  const ngf = new Ngf(page);

  await ngf.mainURLs.openDeadlockPage();
  await ngf.navbar.gotoSignInPage();
  await test.step('Condition: Whether "Welcome" modal appears', async () => {
    if (await ngf.signInPage.welcomeModal.isVisible()) {
      await ngf.signInPage.closeWelcomeModal();
    }
  });
  await ngf.signInPage.loginUser(
    USER_ROLES.admin_stg.email,
    USER_ROLES.admin_stg.password
  );
  await test.step(`User is logged in`, async () => {
    await expect(page.getByRole("img", { name: "settings" })).toBeVisible();
  });
});

test("API login", async ({ request }) => {
  const loginResponse = await request.post(
    "https://stg.mobalytics.gg/api/account/gql/v1/query",
    {
      data: {
        query: `
          mutation SignIn {
            signIn(
              email: "${USER_ROLES.admin_stg.email}"
              password: "${USER_ROLES.admin_stg.password}"
            )
          }
        `,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  await expect(loginResponse.ok()).toBeTruthy();
  const authResponse = await request.post(
    "https://stg.mobalytics.gg/api/account/gql/v1/query",
    {
      data: {
        query: `
          query Auth {
            auth {
                token
            }
          }
        `,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  await expect(authResponse.ok()).toBeTruthy();
  // console.log(authResponse.headers());
  const json = await authResponse.json();
  const token = json.data?.auth?.token;
  // console.log("Bearer token:", token);
});
