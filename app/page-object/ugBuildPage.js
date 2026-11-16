import { test, expect } from '@playwright/test';

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
    this.controlPanel = page.getByTestId('document-controls-panel');
    this.mainPage = page.getByRole('main');
    this.coverImage = page.getByTestId('document-ug-widget-header').locator('div[style*="cdn.mobalytics.gg"]');
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
    // posted comments and the promo banner are read-only Lexical editors with role "textbox" too
    this.inputCommentsWidget = page.getByTestId('comment-widget-general').locator('[contenteditable="true"]');
    // this.lastComment = (comment) => page.getByRole('paragraph').first().filter({ hasText: comment });
    this.lastComment = (comment) => page.getByText(comment).first();
    this.buttonComment = page.getByRole('button', { name: 'Comment', exact: true });
    // this.textComment = (text) => page.getByText(text);
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
    this.commentItem = (text) => page.getByTestId('comment-widget-item-block').filter({ hasText: text });
    this.countCommentText = (text) => this.commentItem(text).locator('[data-testid="comment-widget-up"] + span');
    this.commentMoreActionsButton = (text) => this.commentItem(text).getByTestId('comment-widget-actions-menu');
    this.upCommentRateButton = (text) => this.commentItem(text).getByTestId('comment-widget-up');
    this.downCommentCounterButton = (text) => this.commentItem(text).getByTestId('comment-widget-down');
    // button name changes to the selected option, so it's matched by its listbox popup
    this.sortingButton = page.locator('button[aria-haspopup="listbox"]').filter({ hasText: /^(Top|Newest|Oldest)$/ });
    this.sortingOption = (name) => page.getByRole('option', { name, exact: true });
    this.commentItems = page.getByTestId('comment-widget-item-block');
    this.commentRatings = page.locator('[data-testid="comment-widget-item-block"] [data-testid="comment-widget-up"] + span');
    this.showMoreCommentsButton = page.getByRole('button', { name: 'Show more comments' });
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

  async postEmptyComment() {
    await test.step('Post empty comment', async () => {
      await this.buttonComment.click();
    });
  }

  async deleteComment(text) {
    await test.step('Delete own comment', async () => {
    await expect(async () => {
        await this.commentMoreActionsButton(text).click();
        await this.removeCommentButton.click({ timeout: 2000 });
      }).toPass({ timeout: 20000 });
    });
  }

  async commentUp(text) {
    await test.step('Up comment rate', async () => {
      await this.upCommentRateButton(text).click();
    });
  }

  async sortComments(name) {
    await test.step(`Sort comments by ${name}`, async () => {
      await this.sortingButton.click();
      await this.sortingOption(name).click();
      await expect(this.sortingButton).toHaveText(name);
    });
  }

  async getCommentRatings() {
    return (await this.commentRatings.allInnerTexts()).map(Number);
  }

  // deleted comments stay in the API response with status DELETED and take slots in each page of 10,
  // so a visible comment can be several pages away from the top
  async loadAllComments() {
    await test.step('Load all comments', async () => {
      for (let i = 0; i < 50 && (await this.showMoreCommentsButton.isVisible()); i++) {
        const nextPage = this.page.waitForResponse((res) => res.request().postData()?.includes('NgfCommentsQuery'));
        await this.showMoreCommentsButton.click();
        await nextPage;
      }
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
      await this.inputUgDocumentName.fill(text);
      await this.page.waitForTimeout(1_000);
      await this.updateButton.click();
    });
  }
  // getDescriptionBuildOverviewVariants(text) {
  //   return this.descriptionBuildOverviewVariants.filter({ hasText: text });
  // }
}
