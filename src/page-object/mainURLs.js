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

  async openStPage(stUrl) {
    await test.step(`Open url: ${stUrl}`, async () => {
      await this.page.goto(`${stUrl}`, { waitUntil: "domcontentloaded" });
    });
  }

  async openUgPage(ugUrl) {
    await test.step(`Open url: ${ugUrl}`, async () => {
      await this.page.goto(`${ugUrl}`, { waitUntil: "domcontentloaded" });
    });
  }

  async openDeadlockPage() {
    await test.step(`Open url: https://stg.mobalytics.gg/deadlock`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/deadlock`, { waitUntil: "domcontentloaded" });
    });
  }
}
