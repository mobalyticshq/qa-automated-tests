import { test } from "@playwright/test";

export class UgBuildPage {
  constructor(page) {
    this.page = page;
    this.inputBuildName = page.locator("#title-id");
    this.buttonSaveDraft = page.getByTestId("ug-document-save-draft-button");
    this.buttonResetBuild = page.getByRole("button", { name: "Reset Build" });
    this.buttonCancelInModal = page.getByRole("button", { name: "Cancel" });
    this.buttonSaveDraftInModal = page.getByRole("button", {
      name: "Save as Draft",
    });
    this.buttonSavePublishInModal = page.getByRole("button", {
      name: "Save and Publish",
    });
    this.controlPanel = page.getByTestId("document-controls-panel");
    // this.header = page.locator("#ngfdocumentugwidgetheaderv1");
    this.mainPage = page.getByRole("main");
  }

  async createBuild(pageId) {
    await test.step("Create a build page", async () => {
      //   await this.inputBuildName.click();
      await this.inputBuildName.fill(pageId);
      await this.buttonSaveDraft.click();
      await this.buttonSaveDraftInModal.click();
    });
  }
}
