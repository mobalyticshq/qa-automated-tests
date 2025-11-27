import { test } from '@playwright/test';

export class ByeBye {
  constructor(page) {
    this.page = page;
    this.header = page.getByRole('heading', { name: 'GAME OVER' });
    this.linkInsertCoinToContinue = page.getByRole('link', { name: 'INSERT COIN TO CONTINUE' });
  }
}
