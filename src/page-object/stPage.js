import { test } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { expect } from "@playwright/test";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class StPage {
  constructor(page) {
    this.page = page;
    this.errorModal = page.getByText("Changes could not be savedThere was an unexpected error while saving your");
    this.chooseFileButton = page
      .getByRole("button", {
        name: "Video Edit Video (Optional) Upload Video Supported formats: WebM, MP4 Choose file",
        exact: true,
      })
      .getByRole("button", { name: "Choose file" });
    this.addSectionButtonInModal = page.getByRole("button", {
      name: "Add section",
    });
    this.addSectionButton = page.getByRole("button", { name: "Add section" });
    this.editButton = page.getByTestId("ngf-st-edit-button");
    this.publishButton = page.getByTestId("ngf-st-publish-button");
    this.buttonPublishInModal = page
      .getByText("Publish pageIt will be visible to everyone via the assigned URL.CancelPublish")
      .getByRole("button", { name: "Publish" });
    this.dotsButton = page.getByTestId("ngf-st-draft-actions-menu");
    this.dotsButtonInWidget = page.getByTestId("widget-actions-list").getByRole("button");
    this.deleteStPageButton = page.getByRole("menuitem", { name: "Delete" });
    this.duplicateStPageButton = page.getByRole("menuitem", {
      name: "Duplicate",
    });
    this.buttonDeleteInModal = page.getByRole("button", { name: "Delete" });
    this.saveDraftButton = page.getByTestId("ngf-st-update-button");
    this.updateButton = page.getByTestId("ngf-st-update-button");
    this.buttonCreateSave = page.getByTestId("ngf-st-create-button");
    this.seoButton = page.getByTestId("ngf-seo-settings-button");
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.resetButton = page.getByRole("button", { name: "Reset" });
    this.stPageTitle = page.getByTestId("document-controls-panel");
    this.controlPanel = page.getByTestId("document-controls-panel");
    this.headerWidget = page.getByRole("heading", { name: "ZZZ Header" });
    this.documentDiscoveryWidget = page.locator("section").nth(4);
    this.cardGalleryV2Button = page.locator('[data-key="NgfDocumentStWidgetLinksGridManualV2"]');
    this.column1AutoOldGames = page.getByRole("button").filter({ hasText: /^$/ }).nth(1);
    this.column1Auto = page.getByRole("button").filter({ hasText: /^$/ }).nth(1);
    this.column1AutoEditMode = page
      .getByRole("button", {
        name: "Edit ZZZ Header",
        exact: true,
      })
      .nth(1);
    this.addWidgetButton1 = page.getByRole("button", { name: "columnAuto" }).getByRole("button");
    this.addWidgetButton3 = page.locator(".xe8ttls > div > .x19l6gds");
    this.addWidgetButton2 = page.getByRole("button", { name: "columnAuto Edit ZZZ Header" }).getByRole("button").nth(4);
    this.dropdownMenuWidgets = page.getByText(
      "Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards"
    );
    this.headerButton = page.locator('[data-key="NgfDocumentStWidgetHeaderV2"]');
    this.inputCreateSaveModal = page.getByRole("textbox", {
      name: "Page Path",
    });
    this.buttonCreateSaveInModal = page.getByRole("button", {
      name: "Create and Save",
    });
    this.documentDiscoveryButton = page.getByRole("menuitem", {
      name: "Documents Discovery Discover",
    });
    this.seoModal = page.getByText("SEO settingsMeta titleMeta");
    this.videoButton = page.locator('[data-key="NgfDocumentCmWidgetVideoV2"]');
    this.listOfWidgets = page.getByText("Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards");
    this.videoWidget = page.getByRole("heading", { name: "Video" });
    this.linkButtonVideoV2 = page.getByText("Link");
    this.inputVideoV2 = page.getByRole("textbox", {
      name: "YouTube, Twitch or Vimeo link",
    });
    this.headerDiablo4 = page.locator("#container").getByText("Diablo 4");
    this.headerLoL = page.locator("#container").getByText("LoL");
    this.headerValorant = page.locator("#container").getByText("Val");
    this.headerPoE = page.locator("#container").getByText("PoE");
    this.headerDestiny2 = page.locator("#container").getByText("Destiny 2");
    this.headerTFT = page.locator("#container").getByText("TFT");
    this.headerZzz = page.locator("#container").getByText("ZZZ");
    this.headerHades2 = page.locator("#container").getByText("Hades 2");
    this.headerBorderlands4 = page.locator("#container").getByText("Borderlands 4");
    this.headerNightreign = page.locator("#container").getByText("Nightreign");
    this.headerDeadlock = page.locator("#container").getByText("Deadlock");
    this.headerBazaar = page.locator("#container").getByText("The Bazaar");
    this.headerMarvelRivals = page.locator("#container").getByText("Marvel Rivals");
    this.headerMhw = page.locator("#container").getByText("Monster Hunter Wilds");
    this.inputRichTextWidget = page.getByRole("textbox");
    this.descriptionRichTextWidget = page.locator('span[data-lexical-text="true"]');
    this.richTextButton = page.locator('[data-key="NgfDocumentCmWidgetRichTextV2"]');
  }

  async updateDescriptionRichTextWidget(text) {
    await test.step(`Update description in the rich text widget on the ST page`, async () => {
      await this.editButton.click();
      await this.inputRichTextWidget.fill(text);
      await this.page.waitForTimeout(1_000); //* deBounce time 500ms
      await this.updateButton.click();
    });
  }

  async clickCancelButton() {
    await test.step(`Click Cancel button on the control panel`, async () => {
      await this.cancelButton.click();
    });
  }

  async addHeaderWidget() {
    await test.step(`Add Header widget on the structure page`, async () => {
      await this.addSectionButton.click();
      await this.addSectionButtonInModal.click();
      await this.column1Auto.hover();
      await this.addWidgetButton1.click();
      await this.headerButton.click();
    });
  }

  async addRichTextWidget() {
    await test.step(`Add Rich Text widget on the structure page`, async () => {
      await this.addSectionButton.click();
      await this.addSectionButtonInModal.click();
      await this.column1Auto.hover();
      await this.addWidgetButton1.click();
      await this.richTextButton.click();
    });
  }

  async addHeaderWidgetOldGames() {
    await test.step(`Add Header widget on the structure page`, async () => {
      await this.addSectionButton.click();
      await this.addSectionButtonInModal.click();
      await this.column1AutoOldGames.hover();
      await this.addWidgetButton1.click();
      await this.headerButton.click();
    });
  }

  async addCardGalleryV2Widget() {
    await test.step(`Add Card Gallery widget on the structure page`, async () => {
      await this.addSectionButton.click();
      await this.addSectionButtonInModal.click();
      await this.column1Auto.hover();
      await this.addWidgetButton1.click();
      await this.cardGalleryV2Button.click();
    });
  }

  async addVideoV2Widget() {
    await test.step(`Add VideoV2 widget on the structure page`, async () => {
      await this.page.keyboard.press("End");
      await this.addSectionButton.click();
      await this.addSectionButtonInModal.click();
      await this.column1Auto.hover();
      await this.addWidgetButton3.click();
      await this.videoButton.click();
    });
  }

  async uploadVideo(fileName) {
    await test.step(`Upload file: ${fileName} to CDN in the Video widget`, async () => {
      let actualFilePath;

      // If a file contains unique ID then create temporary copy of this file
      if (fileName.includes("aqa-video") && fileName.endsWith(".mp4")) {
        // Copy file with unique ID
        const baseFilePath = path.join(__dirname, "../images/", "aqa-video.mp4");
        const tempFilePath = path.join(__dirname, "../images/", fileName);

        try {
          // Copy file with a new name
          fs.copyFileSync(baseFilePath, tempFilePath);
          actualFilePath = tempFilePath;

          // Deleting file after test
          process.on("exit", () => {
            try {
              if (fs.existsSync(tempFilePath)) {
                fs.unlinkSync(tempFilePath);
              }
            } catch (error) {
              console.log(`Warning: Could not delete temp file ${tempFilePath}`);
            }
          });
        } catch (error) {
          console.log(`Warning: Could not create temp file, using base file`);
          actualFilePath = baseFilePath;
        }
      } else {
        // Use as is
        actualFilePath = path.join(__dirname, "../images/", fileName);
      }

      const fileChooserPromise = this.page.waitForEvent("filechooser");
      await this.chooseFileButton.click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(actualFilePath);
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

  async duplicateStPage(uuid) {
    await test.step(`Duplicate the structure page`, async () => {
      await this.dotsButton.click();

      // Creating a new tab
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent("page"),
        this.duplicateStPageButton.click(),
      ]);
      // Waiting for new tab
      await newPage.waitForLoadState("domcontentloaded");

      // Creating new locators for the new tab
      const buttonCreateSave = newPage.getByTestId("ngf-st-create-button");
      const inputCreateSaveModal = newPage.getByRole("textbox", {
        name: "Page Path",
      });
      const buttonCreateSaveInModal = newPage.getByRole("button", {
        name: "Create and Save",
      });

      // Performs actions
      await buttonCreateSave.click();
      await inputCreateSaveModal.click();
      await inputCreateSaveModal.fill(uuid);
      await buttonCreateSaveInModal.click();
    });
  }

  async editStPage() {
    await test.step(`Add Document Discovery widget to the ST page in edit mode`, async () => {
      await this.editButton.click();
      await this.column1AutoEditMode.click();
      await this.addWidgetButton2.click();
      await this.documentDiscoveryButton.click();
      await this.saveDraftButton.click();
    });
  }

  async openSeoModal() {
    await test.step(`Open SEO modal on the ST page`, async () => {
      await this.seoButton.click();
    });
  }
}
