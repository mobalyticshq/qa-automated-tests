import { test, expect } from '@playwright/test';

export class CommentsWidget {
  constructor(page) {
    this.page = page;
    // posted comments and the promo banner are read-only Lexical editors with role "textbox" too
    this.inputCommentsWidget = page.getByTestId('comment-widget-general').locator('[contenteditable="true"]');
    this.buttonComment = page.getByRole('button', { name: 'Comment', exact: true })
    this.textComment = (text) => page.getByText(text);
    this.postedComment = (text) => page.getByTestId('comment-widget-item-block').filter({ hasText: text });
  }

  async postComments(text) {
    await this.inputCommentsWidget.fill(text);
    // the comment first renders with a temporary id, votes and deletes on it fail with "invalid commentId"
    // until the widget refetches the list with real ids
    const commentsRefetch = this.page.waitForResponse((response) =>
      response.request().postData()?.includes('NgfCommentsQuery')
    );
   // await expect(async () => {
      await this.buttonComment.click();
      await expect(this.postedComment(text)).toBeVisible({ timeout: 3000 });
    //}).toPass({ timeout: 20000 });
    await commentsRefetch;
  }
}
