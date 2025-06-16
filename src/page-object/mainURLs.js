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

  async openAdminStgPoePage() {
    await test.step(`Open 'PoE' ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/poe-2/admin`);
    });
  }

  async openAdminStgNightreignPage() {
    await test.step(`Open 'Nightreign' ST admin page on stg`, async () => {
      await this.page.goto(
        `https://stg.mobalytics.gg/elden-ring-nightreign/admin`,
        { waitUntil: "domcontentloaded" }
      );
    });
  }

  async openAdminStgDeadlockPage() {
    await test.step(`Open 'Deadlock' ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/deadlock/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminStgMhwPage() {
    await test.step(`Open "MHW" ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/mhw/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminStgBazaarPage() {
    await test.step(`Open 'Bazaar' ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/the-bazaar`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminStgMarvelRivalsPage() {
    await test.step(`Open 'Marvel Rivals' ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/marvel-rivals/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminStgZzzPage() {
    await test.step(`Open 'ZZZ' ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/zzz/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminStgExampleGamePage() {
    await test.step(`Open 'Example Game' ST admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/example-game/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgZzzPage() {
    await test.step(`Open 'ZZZ' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/zzz/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgMarvelRivalsPage() {
    await test.step(`Open 'Marvel Rivals' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/marvel-rivals/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgBazaarPage() {
    await test.step(`Open 'Bazaar' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/the-bazaar/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgExampleGamePage() {
    await test.step(`Open 'Example Game' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/example-game/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgMhwPage() {
    await test.step(`Open 'MHW' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/mhw/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgDeadlockPage() {
    await test.step(`Open 'Deadlock' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/deadlock/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgPoePage() {
    await test.step(`Open 'PoE' UG page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/poe-2/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgStgNightreignPage() {
    await test.step(`Open 'Nightreign' UG page on stg`, async () => {
      await this.page.goto(
        `https://stg.mobalytics.gg/elden-ring-nightreign/profile`,
        {
          waitUntil: "domcontentloaded",
        }
      );
    });
  }

  async openStgPoePage() {
    await test.step(`Open url: https://stg.mobalytics.gg/poe-2`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/poe-2`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openStgDeadlockPage() {
    await test.step(`Open url: https://stg.mobalytics.gg/deadlock`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/deadlock`, {
        waitUntil: "domcontentloaded",
      });
    });
  }
}
