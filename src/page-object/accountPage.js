import { test } from '@playwright/test';

export class AccountPage {
  constructor(page) {
    this.page = page;
    this.accountName = page.getByRole('heading');
  }
}
