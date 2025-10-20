import { test as base, expect } from "@playwright/test";
import { Moba } from "../page-object/moba";
import { v4 as uuidv4 } from "uuid";

export const test = base.extend({
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

  cleanupStPoEPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminPoePage();

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

  cleanupStLoLPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminLoLPage();

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

  cleanupStTFTPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminTFTPage();

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

  cleanupStValorantPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminValorantPage();

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

  cleanupStDestiny2Pages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup after test
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminDestiny2Page();

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

  cleanupStDiablo4Pages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminDiablo4Page();

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

  cleanupStHades2Pages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminHades2Page();

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

  cleanupStBorderlands4Pages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminBorderlands4Page();

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

  cleanupStNightreignPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminNightreignPage();

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStDeadlockPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminDeadlockPage();

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStMhwPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminMhwPage();

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStMarvelRivalsPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminMarvelRivalsPage();

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStBazaarPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminBazaarPage();

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

  cleanupStZzzPages: async ({ page, apiAuthAdmin }, use) => {
    const pagesToCleanup = [];

    const addPageForCleanup = (pageName) => {
      pagesToCleanup.push(pageName);
    };

    await use({ addPageForCleanup });

    // Cleanup после теста
    if (pagesToCleanup.length > 0) {
      const moba = new Moba(page);
      await page.context().addCookies(apiAuthAdmin.cookies);
      await moba.mainURLs.openAdminZzzPage();

      for (const pageName of pagesToCleanup) {
        try {
          await moba.stAdminPage.clickDeleteButton(pageName);
        } catch (error) {
          console.warn(`Failed to cleanup page ${pageName}:`, error);
        }
      }
    }
  },

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
