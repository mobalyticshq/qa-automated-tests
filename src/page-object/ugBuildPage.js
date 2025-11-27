import { test } from '@playwright/test';

export class UgBuildPage {
  constructor(page) {
    this.page = page;
    this.inputBuildName = page.locator('#title-id');
    this.buttonSaveDraft = page.getByTestId('ug-document-save-draft-button');
    this.buttonResetBuild = page.getByRole('button', { name: 'Reset Build' });
    this.buttonCancelInModal = page.getByRole('button', { name: 'Cancel' });
    this.buttonSaveDraftInModal = page.getByRole('button', {
      name: 'Save as Draft',
    });
    this.buttonSavePublishInModal = page.getByRole('button', {
      name: 'Save and Publish',
    });
    this.header = page.getByTestId('document-ug-widget-header');
    this.controlPanel = page.getByTestId('document-controls-panel');
    this.mainPage = page.getByRole('main');
    this.coverImage = page
      .getByRole('button', { name: 'ZZZ Build /qa-automation-' })
      .locator('div[style*="cdn.mobalytics.gg"]');
    this.videoGuideWidget = page.getByRole('heading', { name: 'Video Guide' });
    this.editButton = page.getByTestId('ug-document-edit-button');
    this.inputBuildOverviewVariants = page.getByRole('textbox').nth(1);
    this.updateButton = page.getByTestId('ug-document-update-button');
    this.descriptionBuildOverviewVariants = page.locator('span[data-lexical-text="true"]');
  }

  async createUgDraftPage(pageName) {
    await test.step('Create a draft page', async () => {
      await this.inputBuildName.click();
      await this.inputBuildName.fill(pageName);
      await this.buttonSaveDraft.click();
      await this.buttonSaveDraftInModal.click();
    });
  }

  async gotoEditModePage() {
    await test.step('Got to edit mode page', async () => {
      await this.editButton.click();
    });
  }

  async updateUgBuildPage() {
    await test.step('Update ug build page', async () => {
      await this.updateButton.click();
    });
  }

  getDescriptionBuildOverviewVariants(text) {
    return this.descriptionBuildOverviewVariants.filter({ hasText: text });
  }
}
