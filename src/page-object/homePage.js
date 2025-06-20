import { test } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.controlPanel = page.getByTestId("document-controls-panel");
  }

  async openMhwHomePage(baseURL) {
    await test.step(`Open url: ${baseURL}/mhw`, async () => {
      await this.page.goto(`${baseURL}/mhw`, {
        waitUntil: "domcontentloaded",
      });
    });
  }
}
