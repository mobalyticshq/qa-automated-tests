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
    this.header = page.locator("section").first();
    this.controlPanel = page.getByTestId("document-controls-panel");
    this.mainPage = page.getByRole("main");
    this.coverImage = page.locator('div[style*="cdn.mobalytics.gg"]').first();
    this.videoGuideWidget = page.getByRole('heading', { name: 'Video Guide' });
    // this.header = page.locator("#ngfdocumentugwidgetheaderv1");
  }

  async createUgDraftPage(pageName) {
    await test.step("Create a draft page", async () => {
      await this.inputBuildName.click();
      await this.inputBuildName.fill(pageName);
      await this.buttonSaveDraft.click();
      await this.buttonSaveDraftInModal.click();
    });
  }
}
