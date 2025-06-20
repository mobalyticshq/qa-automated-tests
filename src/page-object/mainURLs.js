import { test } from "@playwright/test";

export class MainURLs {
  constructor(page) {
    this.page = page;
  }

  async openMainPage(baseURL) {
    await test.step(`Open url: ${baseURL}`, async () => {
      await this.page.goto("/", { waitUntil: "domcontentloaded" });
    });
  }

  async openAdminPoePage(baseURL) {
    await test.step(`Open 'PoE' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/poe-2/admin`);
    });
  }

  async openAdminNightreignPage(baseURL) {
    await test.step(`Open 'Nightreign' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/elden-ring-nightreign/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminDeadlockPage(baseURL) {
    await test.step(`Open 'Deadlock' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/deadlock/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMhwPage(baseURL) {
    await test.step(`Open "MHW" ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/mhw/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminBazaarPage(baseURL) {
    await test.step(`Open 'Bazaar' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/the-bazaar/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMarvelRivalsPage(baseURL) {
    await test.step(`Open 'Marvel Rivals' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/marvel-rivals/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminZzzPage(baseURL) {
    await test.step(`Open 'ZZZ' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/zzz/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminExampleGamePage(baseURL) {
    await test.step(`Open 'Example Game' ST admin page on stg`, async () => {
      await this.page.goto(`${baseURL}/example-game/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgZzzPage(baseURL) {
    await test.step(`Open 'ZZZ' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/zzz/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMarvelRivalsPage(baseURL) {
    await test.step(`Open 'Marvel Rivals' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/marvel-rivals/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgBazaarPage(baseURL) {
    await test.step(`Open 'Bazaar' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/the-bazaar/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgExampleGamePage(baseURL) {
    await test.step(`Open 'Example Game' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/example-game/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMhwPage(baseURL) {
    await test.step(`Open 'MHW' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/mhw/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgDeadlockPage(baseURL) {
    await test.step(`Open 'Deadlock' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/deadlock/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgPoePage(baseURL) {
    await test.step(`Open 'PoE' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/poe-2/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgNightreignPage(baseURL) {
    await test.step(`Open 'Nightreign' UG page on stg`, async () => {
      await this.page.goto(`${baseURL}/elden-ring-nightreign/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openPoePage(baseURL) {
    await test.step(`Open url: ${baseURL}/poe-2`, async () => {
      await this.page.goto(`${baseURL}/poe-2`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openDeadlockPage(baseURL) {
    await test.step(`Open url: ${baseURL}/deadlock`, async () => {
      await this.page.goto(`${baseURL}/deadlock`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openMhwPage() {
    await test.step(`Open url: https://stg.mobalytics.gg/mhw`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/mhw`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  // async openAdminProdPoePage() {
  //   await test.step(`Open 'PoE' ST admin page on stg`, async () => {
  //     await this.page.goto(`https://mobalytics.gg/poe-2/admin`);
  //   });
  // }

  // async openAdminProdNightreignPage() {
  //   await test.step(`Open 'Nightreign' ST admin page on stg`, async () => {
  //     await this.page.goto(
  //       `https://mobalytics.gg/elden-ring-nightreign/admin`,
  //       { waitUntil: "domcontentloaded" }
  //     );
  //   });
  // }

  //   async openAdminProdDeadlockPage() {
  //     await test.step(`Open 'Deadlock' ST admin page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/deadlock/admin`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openAdminProdMhwPage() {
  //     await test.step(`Open "MHW" ST admin page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/mhw/admin`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openAdminProdBazaarPage() {
  //     await test.step(`Open 'Bazaar' ST admin page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/the-bazaar/admin`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openAdminProdMarvelRivalsPage() {
  //     await test.step(`Open 'Marvel Rivals' ST admin page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/marvel-rivals/admin`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openAdminProdZzzPage() {
  //     await test.step(`Open 'ZZZ' ST admin page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/zzz/admin`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openAdminProdExampleGamePage() {
  //     await test.step(`Open 'Example Game' ST admin page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/example-game/admin`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdZzzPage() {
  //     await test.step(`Open 'ZZZ' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/zzz/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdMarvelRivalsPage() {
  //     await test.step(`Open 'Marvel Rivals' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/marvel-rivals/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdBazaarPage() {
  //     await test.step(`Open 'Bazaar' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/the-bazaar/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdExampleGamePage() {
  //     await test.step(`Open 'Example Game' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/example-game/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdMhwPage() {
  //     await test.step(`Open 'MHW' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/mhw/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdDeadlockPage() {
  //     await test.step(`Open 'Deadlock' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/deadlock/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdPoePage() {
  //     await test.step(`Open 'PoE' UG page on stg`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/poe-2/profile`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openUgProdNightreignPage() {
  //     await test.step(`Open 'Nightreign' UG page on stg`, async () => {
  //       await this.page.goto(
  //         `https://mobalytics.gg/elden-ring-nightreign/profile`,
  //         {
  //           waitUntil: "domcontentloaded",
  //         }
  //       );
  //     });
  //   }

  //   async openProdPoePage() {
  //     await test.step(`Open url: https://mobalytics.gg/poe-2`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/poe-2`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openProdDeadlockPage() {
  //     await test.step(`Open url: https://mobalytics.gg/deadlock`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/deadlock`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }

  //   async openProdMhwPage() {
  //     await test.step(`Open url: https://mobalytics.gg/mhw`, async () => {
  //       await this.page.goto(`https://mobalytics.gg/mhw`, {
  //         waitUntil: "domcontentloaded",
  //       });
  //     });
  //   }
}
