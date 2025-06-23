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
    await test.step(`Open 'PoE' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/poe-2/admin`);
    });
  }

  async openAdminNightreignPage(baseURL) {
    await test.step(`Open 'Nightreign' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/elden-ring-nightreign/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminDeadlockPage(baseURL) {
    await test.step(`Open 'Deadlock' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/deadlock/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMhwPage(baseURL) {
    await test.step(`Open "MHW" ST admin page`, async () => {
      await this.page.goto(`${baseURL}/mhw/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminBazaarPage(baseURL) {
    await test.step(`Open 'Bazaar' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/the-bazaar/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMarvelRivalsPage(baseURL) {
    await test.step(`Open 'Marvel Rivals' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/marvel-rivals/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminZzzPage(baseURL) {
    await test.step(`Open 'ZZZ' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/zzz/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminExampleGamePage(baseURL) {
    await test.step(`Open 'Example Game' ST admin page`, async () => {
      await this.page.goto(`${baseURL}/example-game/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgZzzPage(baseURL) {
    await test.step(`Open 'ZZZ' UG page`, async () => {
      await this.page.goto(`${baseURL}/zzz/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMarvelRivalsPage(baseURL) {
    await test.step(`Open 'Marvel Rivals' UG page`, async () => {
      await this.page.goto(`${baseURL}/marvel-rivals/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgBazaarPage(baseURL) {
    await test.step(`Open 'Bazaar' UG page`, async () => {
      await this.page.goto(`${baseURL}/the-bazaar/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgExampleGamePage(baseURL) {
    await test.step(`Open 'Example Game' UG page`, async () => {
      await this.page.goto(`${baseURL}/example-game/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMhwPage(baseURL) {
    await test.step(`Open 'MHW' UG page`, async () => {
      await this.page.goto(`${baseURL}/mhw/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgDeadlockPage(baseURL) {
    await test.step(`Open 'Deadlock' UG page`, async () => {
      await this.page.goto(`${baseURL}/deadlock/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgPoePage(baseURL) {
    await test.step(`Open 'PoE' UG page`, async () => {
      await this.page.goto(`${baseURL}/poe-2/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgNightreignPage(baseURL) {
    await test.step(`Open 'Nightreign' UG page`, async () => {
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
}
