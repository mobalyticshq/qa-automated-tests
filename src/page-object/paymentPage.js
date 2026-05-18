import { test, expect } from '@playwright/test';

export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.creditCardTab = page.getByRole('tab', { name: 'Credit/debit card' });
    this.activatePlusButton = page.getByRole('button', { name: 'Activate plus' });
    this.activateAdFreeButton = page.getByRole('button', { name: 'Activate ad-free' });

    this.stripeIframe = page.locator('iframe[src*="elements-inner-accessory-target"]');
    const stripeFrame = this.stripeIframe.contentFrame();
    this.cardNumberField = stripeFrame.getByRole('textbox', { name: 'Card number' });
    this.expiryField = stripeFrame.getByRole('textbox', { name: 'Expiration date MM / YY' });
    this.cvcField = stripeFrame.getByRole('textbox', { name: 'Security code' });
  }

  async fillCardDetails(cardNumber, expiryDate, cvc) {
    await test.step(`Fill card details`, async () => {
      await this.stripeIframe.waitFor({ state: 'visible' });
      await this.cardNumberField.waitFor({ state: 'visible' });

      await this.cardNumberField.click();
      await this.cardNumberField.fill(cardNumber);
      await expect(this.cardNumberField).toHaveValue(/4242.*4242.*4242.*4242/);

      await this.expiryField.click();
      await this.expiryField.pressSequentially(expiryDate);

      await this.cvcField.click();
      await this.cvcField.pressSequentially(cvc);
      await expect(this.cvcField).toHaveValue(cvc);
    });
  }

  async clickActivatePlus() {
    await test.step('Click Activate Plus button', async () => {
      await this.activatePlusButton.click();
    });
  }

  async clickActivateAdFree() {
    await test.step('Click Activate Plus button', async () => {
      await this.activateAdFreeButton.click();
    });
  }
}
