import { test as base, expect } from "@playwright/test";
import { Moba } from "../page-object/moba";
import { v4 as uuidv4 } from "uuid";

export const test = base.extend({
  // apiAuth
  apiAuthAdmin: async ({ request }, use) => {
    // Clarify a correct endpoint depending on environment
    let apiEndpoint;
    if (process.env.BASE_URL === "https://mobalytics.gg") {
      apiEndpoint = "https://account.mobalytics.gg/api/graphql/v1/query";
    } else {
      apiEndpoint = "https://stg.mobalytics.gg/api/account/gql/v1/query";
    }
    const loginResponse = await request.post(apiEndpoint, {
      data: {
        query: `
        mutation SignIn {
          signIn(
            email: "${process.env.ADMIN_EMAIL}"
            password: "${process.env.ADMIN_PASSWORD}"
          )
        }
      `,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(loginResponse.ok()).toBeTruthy();
    // console.log(loginResponse.headers());

    // 2. Get set-cookie from response
    const setCookieHeader = loginResponse.headers()["set-cookie"];
    if (!setCookieHeader) throw new Error("No set-cookie header in login response");

    // 3. Transform cookie for Playwright
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
    // 4. Pass cookie into test
    await use({ cookies });
  },

  apiAuthInternalWriter: async ({ request }, use) => {
    // Clarify a correct endpoint depending on environment
    let apiEndpoint;
    if (process.env.BASE_URL === "https://mobalytics.gg") {
      apiEndpoint = "https://account.mobalytics.gg/api/graphql/v1/query";
    } else {
      apiEndpoint = "https://stg.mobalytics.gg/api/account/gql/v1/query";
    }
    // 1. Perform login-request
    const loginResponse = await request.post(apiEndpoint, {
      data: {
        query: `
        mutation SignIn {
          signIn(
            email: "${process.env.INTERNAL_WRITER_EMAIL}"
            password: "${process.env.INTERNAL_WRITER_PASSWORD}"
          )
        }
      `,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(loginResponse.ok()).toBeTruthy();
    // console.log(loginResponse.headers());

    // 2. Get set-cookie from response
    const setCookieHeader = loginResponse.headers()["set-cookie"];
    if (!setCookieHeader) throw new Error("No set-cookie header in login response");

    // 3. Transform cookie for Playwright
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
    // 4. Pass cookie into test
    await use({ cookies });
  },

  apiAuthGameManager: async ({ request }, use) => {
    // Clarify a correct endpoint depending on environment
    let apiEndpoint;
    if (process.env.BASE_URL === "https://mobalytics.gg") {
      apiEndpoint = "https://account.mobalytics.gg/api/graphql/v1/query";
    } else {
      apiEndpoint = "https://stg.mobalytics.gg/api/account/gql/v1/query";
    }
    // 1. Perform login-request
    const loginResponse = await request.post(apiEndpoint, {
      data: {
        query: `
        mutation SignIn {
          signIn(
            email: "${process.env.GAME_MANAGER_EMAIL}"
            password: "${process.env.GAME_MANAGER_PASSWORD}"
          )
        }
      `,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(loginResponse.ok()).toBeTruthy();
    // console.log(loginResponse.headers());

    // 2. Get set-cookie from response
    const setCookieHeader = loginResponse.headers()["set-cookie"];
    if (!setCookieHeader) throw new Error("No set-cookie header in login response");

    // 3. Transform cookie for Playwright
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
    // 4. Pass cookie into test
    await use({ cookies });
  },
  // Cleanup pages
  cleanupStPoE2Pages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminPoe2Page();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStPoEPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminPoePage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStLoLPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminLoLPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStTFTPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminTFTPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStValorantPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminValorantPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStDestiny2Pages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminDestiny2Page();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStDiablo4Pages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminDiablo4Page();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupSt2xkoPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdmin2xkoPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStHades2Pages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminHades2Page();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStBorderlands4Pages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminBorderlands4Page();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStNightreignPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminNightreignPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStDeadlockPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminDeadlockPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStMhwPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminMhwPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStMarvelRivalsPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminMarvelRivalsPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStBazaarPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminBazaarPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStZzzPages: async ({ page, apiAuthAdmin }, use) => {
    const moba = new Moba(page);
    await page.context().addCookies(apiAuthAdmin.cookies);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminZzzPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  cleanupStRiftboundPages: async ({ page, apiAuthAdmin }, use) => {
    await page.context().addCookies(apiAuthAdmin.cookies);
    const moba = new Moba(page);
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      await moba.mainURLs.openAdminRiftboundPage();

      for (const pageName of pagesToCleanup) {
        await moba.stAdminPage.clickDeleteButton(pageName);
        await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: "hidden", timeout: 2000 }); // Wait for the widget to disappear from DOM

        await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
      }
    }
  },

  // Register account
  registerAccount: async ({ page }, use) => {
    const moba = new Moba(page);
    const uniqueId = uuidv4().substring(0, 4);
    const accountName = `ns+${uniqueId}@mobalyticshq.com`;

    await moba.mainURLs.openMhwPage();
    await moba.navbar.gotoSignInPage();
    await moba.authorizePage.registerAccount(accountName);

    await use({ moba });
  },

  // cleanupUgZzzBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgZzzPage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },

  // cleanupUgMarvelRivalsBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgMarvelRivalsPage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },

  // cleanupUgBazaarBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgBazaarPage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },

  // cleanupUgPoeBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgPoePage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },

  // cleanupUgMhwBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgMhwPage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },

  // cleanupUgDeadlockBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgDeadlockPage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },

  // cleanupUgNightreignBuildPages: async ({ page, apiAuthAdmin }, use) => {
  //   const pagesToCleanup = [];

  //   const addPageForCleanup = (pageName) => {
  //     pagesToCleanup.push(pageName);
  //   };

  //   await use({ addPageForCleanup });

  //   // Cleanup после теста
  //   if (pagesToCleanup.length > 0) {
  //     const moba = new Moba(page);
  //     await page.context().addCookies(apiAuthAdmin.cookies);
  //     await moba.mainURLs.openUgNightreignPage();

  //     for (const pageName of pagesToCleanup) {
  //       try {
  //         await moba.ugProfilePage.deleteBuild(pageName);
  //       } catch (error) {
  //         console.warn(`Failed to cleanup page ${pageName}:`, error);
  //       }
  //     }
  //   }
  // },
});
