import { test } from "@playwright/test";

export class StPage {
  constructor(page) {
    this.page = page;
    this.addSectionButtonInModal = page.getByRole("button", {
      name: "Add section",
    });
    this.addSectionButton = page.getByRole("button", { name: "Add section" });
    this.editButton = page.getByTestId("ngf-st-edit-button");
    this.publishButton = page.getByTestId("ngf-st-save-and-publish-button");
    this.saveDraftButton = page.getByTestId("ngf-st-update-button");
    this.buttonCreateSave = page.getByTestId("ngf-st-create-button");
    this.seoButton = page.getByTestId("ngf-seo-settings-button");
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.createButton = page.getByTestId("ngf-st-create-button");
    this.resetButton = page.getByRole("button", { name: "Reset" });
    this.stPageTitle = page.getByTestId("document-controls-panel");
    this.column1Auto = page
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .nth(1);
    this.addWidgetButton = page
      .getByRole("button", { name: "columnAuto" })
      .getByRole("button");
    this.headerV2 = page.getByRole("menuitem", {
      name: "Header V2 Introduce users to",
    });
    this.inputCreateSaveModal = page.getByRole("textbox", {
      name: "Page Path",
    });
    this.buttonCreateSaveInModal = page.getByRole("button", {
      name: "Create and Save",
    });
    this.headerV2GamePoE = page.locator("#container").getByText("PoE");
  }

  async clickCancelButton() {
    await test.step(`Click Сancel button on the control panel`, async () => {
      await this.cancelButton.click();
    });
  }

  async addHeaderV2Widget() {
    await test.step(`Add HeaderV2 widget on the structure page`, async () => {
      await this.addSectionButton.click();
      await this.addSectionButtonInModal.click();
      await this.column1Auto.hover();
      await this.addWidgetButton.click();
      await this.headerV2.click();
    });
  }

  async createStPage(uuid) {
    await test.step(`Create the structure page`, async () => {
      await this.buttonCreateSave.click();
      await this.inputCreateSaveModal.click();
      await this.inputCreateSaveModal.fill(uuid);
      await this.buttonCreateSaveInModal.click();
    });
  }
}
