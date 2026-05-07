import { test } from '@playwright/test';

export class PricingPage {
  constructor(page) {
    this.page = page;
    this.oneMonthPlanButton = page
      .getByRole('listitem')
      .filter({ hasText: '1 month' })
      .getByRole('button', { name: 'get plus' });
    this.threeMonthsPlanButton = page
      .getByRole('listitem')
      .filter({ hasText: '3 months' })
      .getByRole('button', { name: 'get plus' });
    this.twelveMonthsPlanButton = page
      .getByRole('listitem')
      .filter({ hasText: '12 months' })
      .getByRole('button', { name: 'get plus' });
  }

  async selectOneMonthPlan() {
    await test.step('Select 1 month plan', async () => {
      await this.oneMonthPlanButton.click();
    });
  }

  async selectThreeMonthsPlan() {
    await test.step('Select 3 months plan', async () => {
      await this.threeMonthsPlanButton.click();
    });
  }

  async selectTwelveMonthsPlan() {
    await test.step('Select 12 months plan', async () => {
      await this.twelveMonthsPlanButton.click();
    });
  }
}
