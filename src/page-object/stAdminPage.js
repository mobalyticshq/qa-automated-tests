import { test } from "@playwright/test";

export class StAdminPage {
  constructor(page) {
    this.page = page;
    this.notFoundPage = page.getByText("404The page you are looking");
    this.createPageButton = page.getByTestId("create-button");
    this.buttonDeleteInModal = page.getByRole("button", { name: "Delete" });
    this.editButton = (stWidgetName) =>
      page.getByText(`${stWidgetName}Edit`).getByTestId("edit-button");
    this.editButton1 = page.getByTestId("edit-button");
    this.deleteButton = (stWidgetName) =>
      page.getByText(`${stWidgetName}Edit`).getByTestId("delete-button");
    this.stWidget = (stWidgetName) => page.getByText(`${stWidgetName}Edit`);
    this.stAdminTitle = (adminTitle) =>
      page.getByRole("heading", { name: `${adminTitle}` });
    // this.editButton = (stPageName) =>
    //   page
    //     .locator("div")
    //     .filter({ hasText: new RegExp(`^${stPageName}Edit$`) })
    //     .getByTestId("edit-button");
    // this.deleteButton = (stPageName) =>
    //   page
    //     .locator("div")
    //     .filter({ hasText: new RegExp(`^${stPageName}Edit$`) })
    //     .getByTestId("delete-button");
    this.stWidget = (stPageName) => page.getByText(`${stPageName}`);
  }

  async gotoStPlannerPage() {
    await test.step(`Go to the planner of the structure page`, async () => {
      await this.createPageButton.click();
    });
  }

  async clickOnStWidget(stPageName) {
    await test.step(`Go to ${stPageName} structure page`, async () => {
      await this.stWidget(stPageName).click();
    });
  }

  async clickEditButton(stPageName = "/home") {
    await test.step(`Click Edit button on ${stPageName} widget`, async () => {
      await this.editButton(stPageName).click();
    });
  }

  async clickDeleteButton(stPageName) {
    await test.step(`Click Delete button on ${stPageName} widget`, async () => {
      await this.deleteButton(stPageName).click();
      await this.buttonDeleteInModal.click();
    });
  }
}
