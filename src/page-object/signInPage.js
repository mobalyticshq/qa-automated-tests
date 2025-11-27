import { test } from '@playwright/test';

export class SignInPage {
  constructor(page) {
    this.page = page;
    this.signInInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.consestButton = page.getByRole('button', { name: 'Consent' });
    this.welcomeModal = page.getByRole('heading', {
      name: 'Mobalytics asks for your',
    });
  }

  async loginUser(accountName, password) {
    await test.step('Login to the account', async () => {
      await this.signInInput.click();
      await this.signInInput.fill(accountName);
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
      await this.signInButton.click();
    });
  }

  async closeWelcomeModal() {
    await test.step('Close Welcome Mobalytics modal', async () => {
      await this.consestButton.click();
    });
  }
}
