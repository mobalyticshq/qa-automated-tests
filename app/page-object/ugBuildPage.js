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
    this.getDescriptionBuildOverviewVariants = (text) =>
      page.locator('span[data-lexical-text="true"]').filter({ hasText: text });
    this.commentButton = page.getByRole('button', { name: 'Comment', exact: true });
    this.removeCommentButton = page.getByRole('menuitem', { name: 'Remove' });
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

  async postEmptyComment() {
    await test.step('Post empty comment', async ()=> {
      await this.commentButton.click();
    } )
  }

  async deleteComment(text) {
    await test.step('Delete Own Comment', async ()=> {
      // await expect(async () => {
      //   if (!(await this.removeCommentButton.isVisible())) {
          await this.commentMoreActionsButton(text).click();
        // }
        await this.removeCommentButton.click({ timeout: 2000 });
      // }).toPass({ timeout: 20000 });
    })
  }

  async commentUp(text) {
    await test.step('Up Comment Rate', async ()=>{
      await this.upCommentRateButton(text).click();
    } )
  }
}
