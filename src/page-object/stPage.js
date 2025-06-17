import { test } from "@playwright/test";

export class StPage {
  constructor(page) {
    this.page = page;
    this.addSectionButtonInModal = page.getByRole("button", {
      name: "Add section",
    });
    this.addSectionButton = page.getByRole("button", { name: "Add section" });
    this.editButton = page.getByTestId("ngf-st-edit-button");
    this.publishButton = page.getByTestId("ngf-st-publish-button");
    this.buttonPublishInModal = page
      .getByText(
        "Publish pageIt will be visible to everyone via the assigned URL.CancelPublish"
      )
      .getByRole("button", { name: "Publish" });
    this.dotsButton = page.getByTestId("ngf-st-draft-actions-menu");
    this.deleteStPageButton = page.getByRole("menuitem", { name: "Delete" });
    this.buttonDeleteInModal = page.getByRole("button", { name: "Delete" });
    this.saveDraftButton = page.getByTestId("ngf-st-update-button");
    this.buttonCreateSave = page.getByTestId("ngf-st-create-button");
    this.seoButton = page.getByTestId("ngf-seo-settings-button");
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.createButton = page.getByTestId("ngf-st-create-button");
    this.resetButton = page.getByRole("button", { name: "Reset" });
    this.stPageTitle = page.getByTestId("document-controls-panel");
    this.controlPanel = page.getByTestId("document-controls-panel");
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
    this.headerV2PoE = page.locator("#container").getByText("PoE");
    this.headerV2Zzz = page.locator("#container").getByText("ZZZ");
    this.headerV2Nightreign = page
      .locator("#container")
      .getByText("Nightreign");
    this.headerV2Deadlock = page.locator("#container").getByText("Deadlock");
    this.headerV2Bazaar = page.locator("#container").getByText("The Bazaar");
    this.headerV2MarvelRivals = page
      .locator("#container")
      .getByText("Marvel Rivals");
    this.headerV2Mhw = page
      .locator("#container")
      .getByText("Monster Hunter Wilds");
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
    await test.step(`Save the structure page`, async () => {
      await this.buttonCreateSave.click();
      await this.inputCreateSaveModal.click();
      await this.inputCreateSaveModal.fill(uuid);
      await this.buttonCreateSaveInModal.click();
    });
  }

  async publishStPage() {
    await test.step(`Publish the structure page`, async () => {
      await this.publishButton.click();
      await this.buttonPublishInModal.click();
    });
  }

  async deleteStPage() {
    await test.step(`Delete the structure page`, async () => {
      await this.dotsButton.click();
      await this.deleteStPageButton.click();
      await this.buttonDeleteInModal.click();
    });
  }
}
