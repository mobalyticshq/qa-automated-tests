import { test } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class UgBuildPlanner {
  constructor(page) {
    this.page = page;
    this.coverImageButton = page.getByTestId(
      "ug-document-edit-cover-image-button"
    );
    this.chooseFileButton = page
      .getByText("Build Cover ImageCover Image(")
      .getByRole("button", { name: "Choose file" });
    this.applyButtonInCoverImageModal = page
      .getByText("Build Cover ImageCover Image(")
      .getByRole("button", { name: "Apply" });
    this.inputBuildName = page.locator("#title-id");
    this.buttonSaveDraft = page.getByTestId("ug-document-save-draft-button");
    this.buttonSaveDraftInModal = page.getByRole("button", {
      name: "Save as Draft",
    });
    this.buttonSavePublishInModal = page.getByRole("button", {
      name: "Save and Publish",
    });
  }

  async uploadCoverImage(fileName) {
    await test.step(`Upload file: ${fileName} to CDN in the Cover Image widget`, async () => {
      let actualFilePath;

      // Если файл содержит уникальный ID, создаем временную копию существующего файла
      if (fileName.includes("telegram") && fileName.endsWith(".svg")) {
        // Используем базовый telegram.svg файл
        const baseFilePath = path.join(__dirname, "../images/", "telegram.svg");
        const tempFilePath = path.join(__dirname, "../images/", fileName);

        try {
          // Копируем файл с новым именем
          fs.copyFileSync(baseFilePath, tempFilePath);
          actualFilePath = tempFilePath;

          // Планируем удаление временного файла после теста
          process.on("exit", () => {
            try {
              if (fs.existsSync(tempFilePath)) {
                fs.unlinkSync(tempFilePath);
              }
            } catch (error) {
              console.log(
                `Warning: Could not delete temp file ${tempFilePath}`
              );
            }
          });
        } catch (error) {
          console.log(`Warning: Could not create temp file, using base file`);
          actualFilePath = baseFilePath;
        }
      } else {
        // Используем файл как есть
        actualFilePath = path.join(__dirname, "../images/", fileName);
      }

      await this.coverImageButton.click();
      const fileChooserPromise = this.page.waitForEvent("filechooser");
      await this.chooseFileButton.click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(actualFilePath);
      await this.applyButtonInCoverImageModal.click();
    });
  }

  async createBuildPage(pageName) {
    await test.step("Create a build page", async () => {
      await this.inputBuildName.click();
      await this.inputBuildName.fill(pageName);
      await this.buttonSaveDraft.click();
      await this.buttonSaveDraftInModal.click();
    });
  }
}
