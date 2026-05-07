import { test } from '@playwright/test';

export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.creditCardTab = page.getByRole('tab', { name: 'Credit/debit card' });
    this.activatePlusButton = page.getByRole('button', { name: 'Activate plus' });
    this.activateAdFreeButton = page.getByRole('button', { name: 'Activate ad-free' });
    const stripeFrame = page.frameLocator('iframe[name^="__privateStripeFrame"]').first();
    this.cardNumberField = stripeFrame.getByRole('textbox', { name: 'Card number' });
    this.expiryField = stripeFrame.getByRole('textbox', { name: 'Expiration date MM / YY' });
    this.cvcField = stripeFrame.getByRole('textbox', { name: 'Security code' });
  }

  async fillCardDetails(cardNumber, expiryDate, cvc) {
    await test.step(`Fill card details`, async () => {
      await this.cardNumberField.fill(cardNumber);
      await this.expiryField.fill(expiryDate);
      await this.cvcField.fill(cvc);
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
