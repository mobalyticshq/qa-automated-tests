# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/role-permissions.test.js >> Admin permission >> Admin role is allowed to publish structure pages
- Location: e2e-tests/ngf/role-permissions.test.js:107:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByTestId('add-widget-button')

```

# Test source

```ts
  19  |       .getByRole('button', { name: 'Choose file' });
  20  |     this.addSectionButtonInModal = page.getByRole('button', {
  21  |       name: 'Add Section',
  22  |       exact: true,
  23  |     });
  24  |     this.addSectionButton = page.getByRole('button', { name: 'Add section', exact: true });
  25  |     this.editButton = page.getByTestId('ngf-st-edit-button');
  26  |     this.publishButton = page.getByTestId('ngf-st-publish-button');
  27  |     this.buttonPublishInModal = page
  28  |       .getByText('Publish pageIt will be visible to everyone via the assigned URL.CancelPublish')
  29  |       .getByRole('button', { name: 'Publish' });
  30  |     this.dotsButton = page.getByTestId('ngf-st-draft-actions-menu');
  31  |     this.dotsButtonInWidget = page.getByTestId('widget-actions-list').getByRole('button');
  32  |     this.deleteStPageButton = page.getByRole('menuitem', { name: 'Delete' });
  33  |     this.duplicateStPageButton = page.getByRole('menuitem', {
  34  |       name: 'Duplicate',
  35  |     });
  36  |     this.buttonDeleteInModal = page.getByRole('dialog').getByRole('button', { name: 'Delete' });
  37  |     this.saveDraftButton = page.getByTestId('ngf-st-update-button');
  38  |     this.updateButton = page.getByTestId('ngf-st-update-button');
  39  |     this.buttonCreateSave = page.getByTestId('ngf-st-create-button');
  40  |     this.seoButton = page.getByTestId('ngf-seo-settings-button');
  41  |     this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  42  |     this.resetButton = page.getByRole('button', { name: 'Reset' });
  43  |     this.controlPanel = page.getByTestId('document-controls-panel');
  44  |     this.headerWidget = page.getByRole('heading', { name: 'ZZZ Header' });
  45  |     this.documentDiscoveryWidget = page.locator('section').nth(4);
  46  |     this.cardGalleryV2Button = page.locator('[data-key="NgfDocumentStWidgetLinksGridManualV2"]');
  47  |     this.addWidgetButton = page.getByTestId('add-widget-button');
  48  |     this.dropdownMenuWidgets = page.getByText(
  49  |       'Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards'
  50  |     );
  51  |     this.headerButton = page.locator('[data-key="NgfDocumentStWidgetHeaderV2"]');
  52  |     this.inputCreateSaveModal = page.getByRole('textbox', {
  53  |       name: 'Page Path',
  54  |     });
  55  |     this.buttonCreateSaveInModal = page.getByRole('dialog').getByRole('button', {
  56  |       name: 'Create and Save',
  57  |     });
  58  |     this.documentDiscoveryButton = page.getByRole('menuitem', {
  59  |       name: 'Documents Discovery Discover',
  60  |     });
  61  |     this.seoModal = page.getByText('SEO settingsMeta titleMeta');
  62  |     this.videoButton = page.locator('[data-key="NgfDocumentCmWidgetVideoV2"]');
  63  |     this.listOfWidgets = page.getByText('Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards');
  64  |     this.videoWidget = page.getByRole('heading', { name: 'Video' });
  65  |     this.linkButtonVideo = page.getByTestId('video-widget-link-button');
  66  |     this.inputVideoWidget = page.getByRole('textbox', {
  67  |       name: 'YouTube, Twitch or Vimeo link',
  68  |     });
  69  |     this.headerDiablo4 = page.locator('#container').getByText('Diablo 4');
  70  |     this.header2xko = page.locator('#container').getByText('2xko');
  71  |     this.headerEndfield = page.locator('#container').getByText('Endfield');
  72  |     this.headerMarathon = page.locator('#container').getByText('Marathon');
  73  |     this.headerRiftbound = page.locator('#container').getByText('Riftbound');
  74  |     this.headerSts2 = page.locator('#ngfdocumentstwidgetheaderv2').locator('xpath=..');
  75  |     this.headerOverwatch = page.locator('#ngfdocumentstwidgetheaderv2').locator('xpath=..');
  76  |     this.headerLoL = page.locator('#container').getByText('LoL');
  77  |     this.headerValorant = page.locator('#container').getByText('Val');
  78  |     this.headerPoE2 = page.locator('#container').getByText('PoE 2');
  79  |     this.headerPoE = page.locator('#container').getByText('PoE');
  80  |     this.headerDestiny2 = page.locator('#container').getByText('Destiny 2');
  81  |     this.headerTFT = page.locator('#container').getByText('TFT');
  82  |     this.headerZzz = page.locator('#container').getByText('ZZZ');
  83  |     this.headerHades2 = page.locator('#container').getByText('Hades 2');
  84  |     this.headerBorderlands4 = page.locator('#container').getByText('Borderlands 4');
  85  |     this.headerNightreign = page.locator('#container').getByText('Nightreign');
  86  |     this.headerDeadlock = page.locator('#container').getByText('Deadlock');
  87  |     this.headerBazaar = page.locator('#container').getByText('The Bazaar');
  88  |     this.headerMarvelRivals = page.locator('#container').getByText('Marvel Rivals');
  89  |     this.headerMhw = page.locator('#container').getByText('Monster Hunter Wilds');
  90  |     this.inputRichTextWidget = page.getByRole('textbox');
  91  |     this.descriptionRichTextWidget = (text) => page.getByText(text);
  92  |     // this.descriptionRichTextWidget = page.locator('span[data-lexical-text="true"]');
  93  |     this.richTextButton = page.locator('[data-key="NgfDocumentCmWidgetRichTextV2"]');
  94  |     this.staticDataButton = page.getByTestId('toolbar-plugin-static-data');
  95  |     this.dropdownStaticData = page.getByTestId('suggestion-static-data-menu');
  96  |     this.perimeterMapButton = page.getByAltText('Perimeter Map');
  97  |     this.closeMapModalButton = page.getByTestId('image-preview-modal-icon-close');
  98  |   } 
  99  | 
  100 |   async updateDescriptionRichTextWidget(text) {
  101 |     await test.step(`Update description in the rich text widget on the ST page`, async () => {
  102 |       await this.editButton.click();
  103 |       await this.inputRichTextWidget.fill(text);
  104 |       await this.page.waitForTimeout(1_000); //* deBounce time 500ms
  105 |       await this.updateButton.click();
  106 |     });
  107 |   }
  108 | 
  109 |   async clickCancelButton() {
  110 |     await test.step(`Click Cancel button on the control panel`, async () => {
  111 |       await this.cancelButton.click();
  112 |     });
  113 |   }
  114 | 
  115 |   async addHeaderWidget() {
  116 |     await test.step(`Add Header widget on the structure page`, async () => {
  117 |       await this.addSectionButton.click();
  118 |       await this.addSectionButtonInModal.click();
> 119 |       await this.addWidgetButton.click();
      |                                  ^ Error: locator.click: Test timeout of 90000ms exceeded.
  120 |       await this.headerButton.click();
  121 |     });
  122 |   }
  123 | 
  124 |   async addRichTextWidget() {
  125 |     await test.step(`Add Rich Text widget on the structure page`, async () => {
  126 |       await this.addSectionButton.click();
  127 |       await this.addSectionButtonInModal.click();
  128 |       await this.addWidgetButton.click();
  129 |       await this.richTextButton.click();
  130 |     });
  131 |   }
  132 | 
  133 |   async addHeaderWidgetOldGames() {
  134 |     await test.step(`Add Header widget on the structure page`, async () => {
  135 |       await this.addSectionButton.click();
  136 |       await this.addSectionButtonInModal.click();
  137 |       await this.addWidgetButton.click();
  138 |       await this.headerButton.click();
  139 |     });
  140 |   }
  141 | 
  142 |   async addCardGalleryWidget() {
  143 |     await test.step(`Add Card Gallery widget on the structure page`, async () => {
  144 |       await this.addSectionButton.click();
  145 |       await this.addSectionButtonInModal.click();
  146 |       await this.addWidgetButton.click();
  147 |       await this.cardGalleryV2Button.click();
  148 |     });
  149 |   }
  150 | 
  151 |   async addVideoWidget() {
  152 |     await test.step(`Add Video widget on the structure page`, async () => {
  153 |       await this.page.keyboard.press('End');
  154 |       await this.addSectionButton.click();
  155 |       await this.addSectionButtonInModal.click();
  156 |       await this.addWidgetButton.click();
  157 |       await this.videoButton.click();
  158 |     });
  159 |   }
  160 | 
  161 |   async uploadVideo(fileName) {
  162 |     await test.step(`Upload file: ${fileName} to CDN in the Video widget`, async () => {
  163 |       let actualFilePath;
  164 | 
  165 |       // If a file contains unique ID then create temporary copy of this file
  166 |       if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
  167 |         // Copy file with unique ID
  168 |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
  169 |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  170 | 
  171 |         try {
  172 |           // Copy file with a new name
  173 |           fs.copyFileSync(baseFilePath, tempFilePath);
  174 |           actualFilePath = tempFilePath;
  175 | 
  176 |           // Deleting file after test
  177 |           process.on('exit', () => {
  178 |             try {
  179 |               if (fs.existsSync(tempFilePath)) {
  180 |                 fs.unlinkSync(tempFilePath);
  181 |               }
  182 |             } catch (error) {
  183 |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  184 |             }
  185 |           });
  186 |         } catch (error) {
  187 |           console.log(`Warning: Could not create temp file, using base file`);
  188 |           actualFilePath = baseFilePath;
  189 |         }
  190 |       } else {
  191 |         // Use as is
  192 |         actualFilePath = path.join(__dirname, '../images/', fileName);
  193 |       }
  194 | 
  195 |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  196 |       await this.chooseFileButton.click();
  197 |       const fileChooser = await fileChooserPromise;
  198 |       await fileChooser.setFiles(actualFilePath);
  199 |     });
  200 |   }
  201 | 
  202 |   async createStPage(uuid) {
  203 |     await test.step(`Save the structure page`, async () => {
  204 |       await this.buttonCreateSave.click();
  205 |       await this.inputCreateSaveModal.click();
  206 |       await this.inputCreateSaveModal.fill(uuid);
  207 |       await this.buttonCreateSaveInModal.click();
  208 |     });
  209 |   }
  210 | 
  211 |   async publishStPage() {
  212 |     await test.step(`Publish the structure page`, async () => {
  213 |       await this.publishButton.click();
  214 |       await this.buttonPublishInModal.click();
  215 |     });
  216 |   }
  217 | 
  218 |   async deleteStPage() {
  219 |     await test.step(`Delete the structure page`, async () => {
```