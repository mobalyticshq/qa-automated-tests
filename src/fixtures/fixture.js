import { test as base, expect } from "@playwright/test";
import { Ngf } from "../page-object/ngf";
import { USER_ROLES } from "../setup/credentials";

export const test = base.extend({
  uiAuth: async ({ page }, use) => {
    const ngf = new Ngf(page);

    await ngf.mainURLs.openDeadlockPage();
    await ngf.navbar.gotoSignInPage();
    await test.step('Condition: Whether "Welcome" modal appears', async () => {
      if (await ngf.signInPage.welcomeModal.isVisible()) {
        await ngf.signInPage.closeWelcomeModal();
      }
    });
    await ngf.signInPage.loginUser(
      USER_ROLES.admin_prod.email,
      USER_ROLES.admin_prod.password
    );
    await test.step(`User is logged in`, async () => {
      await expect(page.getByRole("img", { name: "settings" })).toBeVisible();
    });
    await use(ngf);
  },

  apiAuth: async ({ request }, use) => {
    // 1. Выполнить логин-запрос
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
    // console.log(loginResponse.headers());

    // 2. Получить set-cookie из ответа
    const setCookieHeader = loginResponse.headers()["set-cookie"];
    if (!setCookieHeader)
      throw new Error("No set-cookie header in login response");

    // 3. Преобразовать куки для Playwright
    const cookies = setCookieHeader
      .split(/,(?=[^ ]+\=)/) // разбиваем по кукам, а не по запятым внутри значений
      .map((cookieStr) => {
        const [cookiePair, ...attributes] = cookieStr.split(";");
        const index = cookiePair.indexOf("=");
        const name = cookiePair.slice(0, index).trim();
        const value = cookiePair.slice(index + 1).trim();
        return {
          name: name.trim(),
          value: value.trim(),
          domain: ".mobalytics.gg",
          path: "/",
        };
      });
    // 4. Передать куки в тест
    await use({ cookies });
  },
});
