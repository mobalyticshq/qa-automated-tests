import { test } from '@playwright/test';

export class AccountSettings {
  constructor(page) {
    this.page = page;
    this.buttonDeleteMyAccount = page.getByText('Delete my account');
    this.modalDeleteButton = page.getByRole('button', { name: 'Delete' });
  }

  async deleteAccount() {
    await test.step('Delete account', async () => {
      await this.buttonDeleteMyAccount.click();
      await this.modalDeleteButton.click();
    });
  }
}
