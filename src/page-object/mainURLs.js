import { test } from "@playwright/test";

export class MainURLs {
  constructor(page) {
    this.page = page;
  }

  async openMainPage() {
    await test.step(`Open url: ${process.env.BASE_URL}`, async () => {
      await this.page.goto("/", { waitUntil: "domcontentloaded" });
    });
  }

  async openAdminPoePage() {
    await test.step(`Open 'PoE' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe-2/admin`);
    });
  }

  async openAdminNightreignPage() {
    await test.step(`Open 'Nightreign' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/elden-ring-nightreign/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminDeadlockPage() {
    await test.step(`Open 'Deadlock' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/deadlock/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMhwPage() {
    await test.step(`Open "MHW" ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminBazaarPage() {
    await test.step(`Open 'Bazaar' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/the-bazaar/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminMarvelRivalsPage() {
    await test.step(`Open 'Marvel Rivals' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/marvel-rivals/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminZzzPage() {
    await test.step(`Open 'ZZZ' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/zzz/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openAdminExampleGamePage() {
    await test.step(`Open 'Example Game' ST admin page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/example-game/admin`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgZzzPage() {
    await test.step(`Open 'ZZZ' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/zzz/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMarvelRivalsPage() {
    await test.step(`Open 'Marvel Rivals' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/marvel-rivals/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgBazaarPage() {
    await test.step(`Open 'Bazaar' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/the-bazaar/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgExampleGamePage() {
    await test.step(`Open 'Example Game' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/example-game/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgMhwPage() {
    await test.step(`Open 'MHW' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgDeadlockPage() {
    await test.step(`Open 'Deadlock' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/deadlock/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgPoePage() {
    await test.step(`Open 'PoE' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe-2/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openUgNightreignPage() {
    await test.step(`Open 'Nightreign' UG page`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/elden-ring-nightreign/profile`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openPoePage() {
    await test.step(`Open url: ${process.env.BASE_URL}/poe-2`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/poe-2`, {
        waitUntil: "domcontentloaded",
      });
    });
  }

  async openDeadlockPage() {
    await test.step(`Open url: ${process.env.BASE_URL}/deadlock`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/deadlock`, {
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
