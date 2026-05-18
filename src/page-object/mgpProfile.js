import { test } from '@playwright/test';

export class MgpProfile {
  constructor(page) {
    this.page = page;
    this.displayNameHeader = (displayName) => page.locator('#container').getByText(displayName);
  }
}
