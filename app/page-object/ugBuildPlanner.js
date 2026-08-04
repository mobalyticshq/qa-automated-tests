import { test } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class UgBuildPlanner {
  constructor(page) {
    this.page = page;
    this.inputBuildName = page.locator('#title-id');
    this.buttonSaveDraft = page.getByTestId('ug-document-save-draft-button');
    this.buttonResetBuild = page.getByRole('button', { name: 'Reset Build' });
    this.buttonCancelInModal = page.getByRole('button', { name: 'Cancel' });
    this.buttonSaveDraftInModal = page.getByRole('button', {
      name: 'Save as Draft',
    });
    this.buttonSavePublishInModal = page.getByRole('button', {
      name: 'Save and Publish',
    });
    this.coverImageButton = page.getByTestId('ug-document-edit-cover-image-button');
    this.controlPanel = page.getByTestId('document-controls-panel');
    this.mainPage = page.getByRole('main');
    this.coverImage = page.locator('div[style*="cdn.mobalytics.gg"]').first();
    // this.header = page.locator("#ngfdocumentugwidgetheaderv1");
    this.videoChooseFileButton = page
      .getByRole('button', {
        name: 'Video Guide Edit Video (Optional) Upload Video Supported formats: WebM, MP4 Choose file',
        exact: true,
      })
      .getByRole('button', { name: 'Choose file' });
    this.imgChooseFileButton = page
      .getByText('Build Cover ImageCover Image(')
      .getByRole('button', { name: 'Choose file' });
    this.applyButtonInCoverImageModal = page
      .getByText('Build Cover ImageCover Image(')
      .getByRole('button', { name: 'Apply' });
  }

  async uploadCoverImage(fileName) {
    await test.step(`Upload file: ${fileName} to CDN in the Cover Image widget`, async () => {
      let actualFilePath;

      // If a file contains unique ID then create temporary copy of this file
      if (fileName.includes('aqa-telegram') && fileName.endsWith('.svg')) {
        // Use base file telegram.svg
        const baseFilePath = path.join(__dirname, '../images/', 'aqa-telegram.svg');
        const tempFilePath = path.join(__dirname, '../images/', fileName);

        try {
          // Copy file with a new name
          fs.copyFileSync(baseFilePath, tempFilePath);
          actualFilePath = tempFilePath;

          // Deleting file after test
          process.on('exit', () => {
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
        actualFilePath = path.join(__dirname, '../images/', fileName);
      }

      await this.coverImageButton.click();
      const fileChooserPromise = this.page.waitForEvent('filechooser');
      await this.imgChooseFileButton.click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(actualFilePath);
      await this.applyButtonInCoverImageModal.click();
    });
  }
  async createUgDraftPage(pageName) {
    await test.step('Create a draft page', async () => {
      await this.inputBuildName.click();
      await this.inputBuildName.fill(pageName);
      await this.buttonSaveDraft.click();
      await this.buttonSaveDraftInModal.click();
    });
  }

  async uploadVideo(fileName) {
    await test.step(`Upload file: ${fileName} to CDN in the VideoV2 widget`, async () => {
      let actualFilePath;

      // If a file contains unique ID then create temporary copy of this file
      if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
        // Copy file with unique ID
        const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
        const tempFilePath = path.join(__dirname, '../images/', fileName);

        try {
          // Copy file with a new name
          fs.copyFileSync(baseFilePath, tempFilePath);
          actualFilePath = tempFilePath;

          // Deleting file after test
          process.on('exit', () => {
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
        actualFilePath = path.join(__dirname, '../images/', fileName);
      }

      const fileChooserPromise = this.page.waitForEvent('filechooser');
      await this.videoChooseFileButton.click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(actualFilePath);
    });
  }
}
