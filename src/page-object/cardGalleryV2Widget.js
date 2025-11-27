import { StPage } from './stPage';
import { test } from '@playwright/test';

export class CardGalleryV2Widget extends StPage {
  constructor(page) {
    super(page);
    this.plusButton = page.locator('.xg1i4pw > .x19l6gds');
    this.linkButtonInModal = page.getByText('Link', { exact: true });
    this.inputBackgroundImageInModal = page.getByRole('textbox', {
      name: 'Background image (Optional)',
    });
    this.addButtonInModal = page.getByRole('button', { name: 'Add' });
    this.сardGalleryV2Widget = page.getByText('Cards Gallery V2Title');
  }

  async addImageLink(link) {
    await test.step(`Add image to the Card GalleryV2 widget on the structure page`, async () => {
      await this.plusButton.click();
      await this.linkButtonInModal.click();
      await this.inputBackgroundImageInModal.click();
      await this.inputBackgroundImageInModal.fill(link);
      await this.addButtonInModal.click();
    });
  }
}
