import { test } from '@playwright/test';

export class ProfilePage {
  constructor(page) {
    this.editProfileButton = page.getByRole('link', {
      name: 'Edit Profile',
      exact: true,
    });
  }

  async gotoEditProfilePage() {
    await test.step('Go to Edit Profile Page', async () => {
      await this.editProfileButton.click();
    });
  }
}
