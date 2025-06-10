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

  async openStgPoeAdminPage() {
    await test.step(`Open PoE st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/poe-2/admin`, { waitUntil: "domcontentloaded" });
    });
  }

  async openStgNightreignAdminPage() {
    await test.step(`Open Nightreign st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/elden-ring-nightreign/admin`, { waitUntil: "domcontentloaded" });
    });
  }

  async openStgDeadlockAdminPage() {
    await test.step(`Open Deadlock st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/deadlock/admin`, { waitUntil: "domcontentloaded" });
    });
  }

  async openStgMhwAdminPage() {
    await test.step(`Open MHW st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/mhw/admin`, { waitUntil: "domcontentloaded" });
    });
  }
  
  async openStgBazaarAdminPage() {
    await test.step(`Open Bazaar st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/the-bazaar`, { waitUntil: "domcontentloaded" });
    });
  }

  async openStgMarvelRivalsAdminPage() {
    await test.step(`Open Marvel Rivals st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/marvel-rivals/admin`, { waitUntil: "domcontentloaded" });
    });
  }

  async openStgZzzAdminPage() {
    await test.step(`Open ZZZ st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/zzz/admin`, { waitUntil: "domcontentloaded" });
    });
  }

  async openStgExampleGameAdminPage() {
    await test.step(`Open Example Game st admin page on stg`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/example-game/admin`, { waitUntil: "domcontentloaded" });
    });
  }

  async openUgPage(ugUrl) {
    await test.step(`Open url: ${ugUrl}`, async () => {
      await this.page.goto(`${ugUrl}`, { waitUntil: "domcontentloaded" });
    });
  }

  async openDeadlockPage() {
    await test.step(`Open url: https://stg.mobalytics.gg/deadlock`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/deadlock`, {
        waitUntil: "domcontentloaded",
      });
    });
  }
}
