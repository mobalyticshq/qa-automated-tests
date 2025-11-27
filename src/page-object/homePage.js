import { test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.controlPanel = page.getByTestId('document-controls-panel');
  }

  async openMhwHomePage() {
    await test.step(`Open url: ${process.env.BASE_URL}/mhw`, async () => {
      await this.page.goto(`${process.env.BASE_URL}/mhw`, {
        waitUntil: 'domcontentloaded',
      });
    });
  }
}
