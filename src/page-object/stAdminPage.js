import { test } from "@playwright/test";

export class StAdminPage {
  constructor(page) {
    this.page = page;
    this.createButton = page.getByTestId("create-button");
    this.stAdminTitle = page.getByRole("heading", { name: "Structure Pages" });
    this.editButton = (stPageName) =>
      page
        .locator("div")
        .filter({ hasText: new RegExp(`^${stPageName}Edit$`) })
        .getByTestId("edit-button");
    this.deleteButton = (stPageName) =>
      page
        .locator("div")
        .filter({ hasText: new RegExp(`^${stPageName}Edit$`) })
        .getByTestId("delete-button");
    this.stWidget = (stPageName) => page.getByText(`${stPageName}`);
  }

  async clickOnStWidget(stPageName) {
    await test.step(`Go to ${stPageName} structure page`, async () => {
      await this.stWidget(stPageName).click();
    });
  }

  async clickEditButton(stPageName) {
    await test.step(`Click Edit button on ${stPageName} widget`, async () => {
      await this.editButton(stPageName).click();
    });
  }

  async clickDeleteButton(stPageName) {
    await test.step(`Click Delete button on ${stPageName} widget`, async () => {
      await this.deleteButton(stPageName).click();
    });
  }
}
