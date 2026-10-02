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
    this.widgetHeader = page.getByTestId('document-ug-widget-header');
    // this.viewHeader = (buildName) => page.getByRole('button', { name: `Diablo 4 Build ${buildName}` });
    this.controlPanel = page.getByTestId('document-controls-panel');
    this.mainPage = page.getByRole('main');
    this.coverImage = page
      .getByRole('button', { name: 'ZZZ Build /qa-automation-' })
      .locator('div[style*="cdn.mobalytics.gg"]');
    this.videoGuideWidget = page.getByRole('heading', { name: 'Video Guide' });
    this.editButton = page.getByTestId('ug-document-edit-button');
    this.inputBuildOverviewVariants = page.getByRole('textbox').nth(1);
    this.updateButton = page.getByTestId('ug-document-update-button');
    this.focusModeButton = page.getByRole('button', { name: 'Focus Mode', exact: true });
    this.exitFocusModeButton = page.getByRole('button', { name: 'Exit Focus Mode' });
    this.getStatusBadge = (status) => this.controlPanel.getByText(status, { exact: true });
    this.descriptionBuildOverviewVariants = page.locator('span[data-lexical-text="true"]');
    this.getDescriptionBuildOverviewVariants = (text) =>
      page.locator('span[data-lexical-text="true"]').filter({ hasText: text });
    this.inputCommentsWidget = page.getByRole('textbox');
    // this.lastComment = (comment) => page.getByRole('paragraph').first().filter({ hasText: comment });
    this.lastComment = (comment) => page.getByText(comment).first();
    this.buttonComment = page.getByRole('button', { name: 'Comment', exact: true });
    // this.textComment = (text) => page.getByText(text);
    this.commentMoreActionsButton = page.locator('button:has(span[style*="more-horizontal.svg"])');
    this.removeCommentButton = page.getByRole('menuitem', { name: 'Remove' });
    this.buildOverviewWidget = page
      .getByTestId('container-section')
      .getByRole('button', { name: 'Build Overview Edit select' });
    this.inputBuildOverview = page
      .getByTestId('container-section')
      .getByRole('button', { name: 'Build Overview Edit select' })
      .getByRole('textbox');
    this.viewBuildOverviewWidget = (text) => page.getByText(`Build Overview${text}`);
    this.inputUgDocumentName = page.locator('#title-id');
  }

  async openFocusMode() {
    await test.step('Open Focus Mode', async () => {
      await this.focusModeButton.click();
    });
  }

  async exitFocusMode() {
    await test.step('Exit Focus Mode', async () => {
      await this.exitFocusModeButton.click();
    });
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

  async postComments(text) {
    await test.step('Post comment', async () => {
      await this.inputCommentsWidget.fill(text);
      await this.buttonComment.click();
    });
  }

  async deleteComment() {
    await test.step('Delete the last comment', async () => {
      await this.commentMoreActionsButton.nth(3).click();
      await this.removeCommentButton.click();
    });
  }

  async updateDescriptionBuildOverviewWidget(text) {
    await test.step('Fill description of the build overview widget', async () => {
      await this.editButton.click();
      await this.inputBuildOverview.fill(text);
      await this.page.waitForTimeout(1_000);
      await this.updateButton.click();
    });
  }

  async updateUgDocumentName(text) {
    await test.step('Change name UG document', async () => {
      await this.editButton.click();
      // await this.inputUgDocumentName.click();
      await this.inputUgDocumentName.fill(text);
      await this.page.waitForTimeout(1_000);
      await this.updateButton.click();
    });
  }
  // getDescriptionBuildOverviewVariants(text) {
  //   return this.descriptionBuildOverviewVariants.filter({ hasText: text });
  // }
}
