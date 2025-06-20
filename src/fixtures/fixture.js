import { test as base, expect } from "@playwright/test";
import { Moba } from "../page-object/moba";
import { USER_ROLES } from "../setup/credentials";

export const test = base.extend({
  apiAuthAdmin: async ({ request, baseURL }, use) => {
    if (baseURL === "https://stg.mobalytics.gg") {
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
    } else if (baseURL === "https://mobalytics.gg") {
      // 1. Выполнить логин-запрос
      const loginResponse = await request.post(
        "https://account.mobalytics.gg/api/graphql/v1/query",
        {
          data: {
            query: `
          mutation SignIn {
            signIn(
              email: "${USER_ROLES.admin_prod.email}"
              password: "${USER_ROLES.admin_prod.password}"
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
    }
  },

  apiAuthInternalWriter: async ({ request, baseURL }, use) => {
    if (baseURL === "https://stg.mobalytics.gg") {
      // 1. Выполнить логин-запрос
      const loginResponse = await request.post(
        "https://stg.mobalytics.gg/api/account/gql/v1/query",
        {
          data: {
            query: `
          mutation SignIn {
            signIn(
              email: "${USER_ROLES.internal_writer_stg.email}"
              password: "${USER_ROLES.internal_writer_stg.password}"
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
    } else if (baseURL === "https://mobalytics.gg") {
      // 1. Выполнить логин-запрос
      const loginResponse = await request.post(
        "https://account.mobalytics.gg/api/graphql/v1/query",
        {
          data: {
            query: `
          mutation SignIn {
            signIn(
              email: "${USER_ROLES.internal_writer_prod.email}"
              password: "${USER_ROLES.internal_writer_prod.password}"
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
    }
  },

  apiAuthGameManager: async ({ request, baseURL }, use) => {
    if (baseURL === "https://stg.mobalytics.gg") {
      // 1. Выполнить логин-запрос
      const loginResponse = await request.post(
        "https://stg.mobalytics.gg/api/account/gql/v1/query",
        {
          data: {
            query: `
          mutation SignIn {
            signIn(
              email: "${USER_ROLES.game_manager_stg.email}"
              password: "${USER_ROLES.game_manager_stg.password}"
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
    } else if (baseURL === "https://mobalytics.gg") {
      // 1. Выполнить логин-запрос
      const loginResponse = await request.post(
        "https://account.mobalytics.gg/api/graphql/v1/query",
        {
          data: {
            query: `
          mutation SignIn {
            signIn(
              email: "${USER_ROLES.game_manager_prod.email}"
              password: "${USER_ROLES.game_manager_prod.password}"
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
    }
  },

  cleanupStPoEPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminPoePage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
          // await moba.stPage.deleteStPage();
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStNightreignPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminNightreignPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStDeadlockPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminDeadlockPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStMhwPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminMhwPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStMarvelRivalsPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminMarvelRivalsPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStBazaarPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminBazaarPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStZzzPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminZzzPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgZzzBuildPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgZzzPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgMarvelRivalsBuildPages: async (
    { page, apiAuthAdmin, baseURL },
    use
  ) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgMarvelRivalsPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgBazaarBuildPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgBazaarPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgPoeBuildPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgPoePage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgMhwBuildPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgMhwPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgDeadlockBuildPages: async ({ page, apiAuthAdmin, baseURL }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgDeadlockPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupUgNightreignBuildPages: async (
    { page, apiAuthAdmin, baseURL },
    use
  ) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openUgNightreignPage(baseURL);

      for (const pageName of pagesToCleanup) {
        try {
          await moba.ugProfilePage.deleteBuild(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },
});
