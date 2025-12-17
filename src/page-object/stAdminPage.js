import { test } from '@playwright/test';

export class StAdminPage {
  constructor(page) {
    this.page = page;
    this.notFoundPage = page.getByText('404The page you are looking');
    this.createStPageButton = page.getByTestId('create-button');
    this.buttonDeleteInModal = page.getByRole('button', { name: 'Delete' });
    this.editButton = (stPageName) =>
      page.getByTestId('admin-page-st-document-item-card').filter({ hasText: stPageName }).getByTestId('edit-button');
    this.deleteButton = (stPageName) =>
      page.getByTestId('admin-page-st-document-item-card').filter({ hasText: stPageName }).getByTestId('delete-button');
    this.stCardWidget = (stPageName) =>
      page.getByTestId('admin-page-st-document-item-card').filter({ hasText: stPageName });
    this.stAdminTitle = (adminTitle) => page.getByRole('heading', { name: `${adminTitle}` });
  }

  async gotoStPlannerPage() {
    await test.step(`Go to the planner of the structure page`, async () => {
      await this.createStPageButton.click();
    });
  }

  async clickStCardWidget(stPageName) {
    await test.step(`Go to ${stPageName} structure page`, async () => {
      await this.stCardWidget(stPageName).click();
    });
  }

  async clickEditButton(stPageName = '/home') {
    await test.step(`Click Edit button on ${stPageName} widget`, async () => {
      await this.editButton(stPageName).click();
    });
  }

  async clickDeleteButton(stPageName) {
    await test.step(`Click Delete button on ${stPageName} widget`, async () => {
      await this.deleteButton(stPageName).click();
      await this.buttonDeleteInModal.click();
      await this.page.waitForLoadState('domcontentloaded'); // added for waiting for the page to reload after deletion
    });
  }
}
