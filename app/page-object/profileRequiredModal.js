import { test, expect } from '@playwright/test';

export class ProfileRequiredModal {
  constructor(page) {
    this.page = page;
    this.profileRequiredModal = page.getByRole('dialog').getByRole('button', { name: 'Create Profile' });
  }

  
}
