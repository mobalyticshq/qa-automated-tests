import { test, expect } from '@playwright/test';

export class CommentsWidget {
  constructor(page) {
    this.page = page;
    this.inputCommentsWidget = page.getByRole('textbox');
    this.buttonComment = page.getByRole('button', { name: 'Comment', exact: true })
    this.textComment = (text) => page.getByText(text);
    this.postedComment = (text) => page.getByTestId('comment-widget-item-block').filter({ hasText: text });
  }

  async postComments(text) {
    await this.inputCommentsWidget.fill(text);
    await expect(async () => {
      await this.buttonComment.click();
      await expect(this.postedComment(text)).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 20000 });
  }
}
