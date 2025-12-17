import { test } from '@playwright/test';

export class AccountSettings {
  constructor(page) {
    this.page = page;
    this.buttonDeleteMyAccount = page.getByText('Delete my account');
    this.modalDeleteButton = page.getByRole('button', { name: 'Delete' });
    this.changeNameButton = page.getByRole('button', { name: 'change name' });
    this.inputAccountName = page.getByRole('textbox', { name: 'Account name' });
    this.modalChangeNameButton = page.getByRole('button', { name: 'change', exact: true });
  }

  accountName(accountName) {
    return this.page.getByText(accountName);
  }

  async deleteAccount() {
    await test.step('Delete account', async () => {
      await this.buttonDeleteMyAccount.click();
      await this.modalDeleteButton.click();
    });
  }

  async changeAccountName(name) {
    await test.step(`Change account name to ${name}`, async () => {
      await this.changeNameButton.click();
      await this.inputAccountName.fill(name);
      await this.modalChangeNameButton.click();
    });
  }
}
