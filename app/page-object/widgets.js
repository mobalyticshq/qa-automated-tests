import { test } from '@playwright/test';

export class CommentsWidget {
  constructor(page) {
    this.inputCommentsWidget = page.getByRole('textbox');
    this.buttonComment = page.getByRole('button', { name: 'Comment', exact: true })
    this.textComment = (text) => page.getByText(text); 
  }

  async postComments(text) {
    await this.inputCommentsWidget.fill(text);
    await this.buttonComment.click();
  }
}
