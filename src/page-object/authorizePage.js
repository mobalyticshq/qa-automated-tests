import { test } from '@playwright/test';

export class AuthorizePage {
  constructor(page) {
    this.page = page;
    this.fieldEmail = page.getByRole('textbox', { name: 'Email' });
    this.fieldName = page.getByRole('textbox', { name: 'Name' });
    this.fieldPassword = page.getByRole('textbox', { name: 'Password' });
    this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
    this.signUpTab = page.getByRole('tab', { name: 'sign up' });
  }

  async registerAccount(accountName) {
    await test.step(`Register account ${accountName}`, async () => {
      await this.signUpTab.click();
      await this.fieldEmail.click();
      await this.fieldEmail.fill(accountName);
      await this.fieldName.click();
      await this.fieldName.fill(accountName);
      await this.fieldPassword.click();
      await this.fieldPassword.fill(accountName);
      await this.signUpButton.click();
    });
  }
}
