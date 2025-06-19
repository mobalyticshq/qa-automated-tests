import { test } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.controlPanel = page.getByTestId("document-controls-panel");
  }

  async openStgMhwHomePage() {
    await test.step(`Open url: https://stg.mobalytics.gg/mhw`, async () => {
      await this.page.goto(`https://stg.mobalytics.gg/mhw`, {
        waitUntil: "domcontentloaded",
      });
    });
  }
}
