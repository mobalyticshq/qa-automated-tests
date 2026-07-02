# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating ST Pages >> Create a structure page on Deadlock project
- Location: e2e-tests/ngf.test.js:296:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add section', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Deadlock banner text Learn more Close":
      - /url: https://www.google.com
      - generic [ref=e4] [cursor=pointer]:
        - generic [ref=e5]:
          - paragraph [ref=e7]: Deadlock banner text
          - button "Learn more" [ref=e8]
        - img "Close" [ref=e9]
    - generic [ref=e10]:
      - generic [ref=e11]:
        - link "Mobalytics" [ref=e12] [cursor=pointer]:
          - /url: /deadlock
          - img "Mobalytics" [ref=e13]
        - generic [ref=e15]:
          - link "League of Legends LoL" [ref=e17] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/lol
            - generic [ref=e19]:
              - img "League of Legends" [ref=e20]
              - generic [ref=e21]: LoL
          - link "Teamfight Tactics TFT" [ref=e23] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/tft
            - generic [ref=e25]:
              - img "Teamfight Tactics" [ref=e26]
              - generic [ref=e27]: TFT
          - link "Diablo 4 Diablo 4" [ref=e29] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/diablo-4
            - generic [ref=e31]:
              - img "Diablo 4" [ref=e32]
              - generic [ref=e33]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e35] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe-2
            - generic [ref=e37]:
              - img "Path of Exile 2" [ref=e38]
              - generic [ref=e39]: PoE 2
          - link "Path of Exile PoE" [ref=e41] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe
            - generic [ref=e43]:
              - img "Path of Exile" [ref=e44]
              - generic [ref=e45]: PoE
          - link "Destiny 2 Destiny 2" [ref=e47] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/destiny-2
            - generic [ref=e49]:
              - img "Destiny 2" [ref=e50]
              - generic [ref=e51]: Destiny 2
          - link "Marathon Marathon" [ref=e53] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/marathon
            - generic [ref=e55]:
              - img "Marathon" [ref=e56]
              - generic [ref=e57]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e59] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/slay-the-spire-2
            - generic [ref=e61]:
              - img "Slay the Spire 2" [ref=e62]
              - generic [ref=e63]: STS 2
          - link "Deadlock Deadlock" [ref=e65] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/deadlock
            - generic [ref=e67]:
              - img "Deadlock" [ref=e68]
              - generic [ref=e69]: Deadlock
          - link "Overwatch Overwatch" [ref=e71] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/overwatch
            - generic [ref=e73]:
              - img "Overwatch" [ref=e74]
              - generic [ref=e75]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e77] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/borderlands-4
            - generic [ref=e79]:
              - img "Borderlands 4" [ref=e80]
              - generic [ref=e81]: Borderlands 4
          - link "Valorant VAL" [ref=e83] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/valorant
            - generic [ref=e85]:
              - img "Valorant" [ref=e86]
              - generic [ref=e87]: VAL
          - link "Neverness to Everness NTE New" [ref=e89] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/neverness-to-everness
            - generic [ref=e91]:
              - img "Neverness to Everness" [ref=e92]
              - generic [ref=e93]: NTE
              - generic [ref=e95]: New
          - 'link "Arknights: Endfield Endfield" [ref=e97] [cursor=pointer]':
            - /url: https://stg.mobalytics.gg/arknights-endfield
            - generic [ref=e99]:
              - 'img "Arknights: Endfield" [ref=e100]'
              - generic [ref=e101]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e103] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/elden-ring-nightreign
            - generic [ref=e105]:
              - img "Elden Ring Nightreign" [ref=e106]
              - generic [ref=e107]: Nightreign
          - button [ref=e108] [cursor=pointer]:
            - img [ref=e109]
          - generic:
            - link "Monster Hunter Wilds Monster Hunter Wilds":
              - /url: https://stg.mobalytics.gg/mhw
              - generic:
                - generic:
                  - img "Monster Hunter Wilds"
                  - generic: Monster Hunter Wilds
          - generic:
            - link "Hades 2 Hades 2":
              - /url: https://stg.mobalytics.gg/hades-2
              - generic:
                - generic:
                  - img "Hades 2"
                  - generic: Hades 2
          - generic:
            - link "The Bazaar The Bazaar":
              - /url: https://stg.mobalytics.gg/the-bazaar
              - generic:
                - generic:
                  - img "The Bazaar"
                  - generic: The Bazaar
          - generic:
            - link "Marvel Rivals Marvel Rivals":
              - /url: https://stg.mobalytics.gg/marvel-rivals
              - generic:
                - generic:
                  - img "Marvel Rivals"
                  - generic: Marvel Rivals
          - generic:
            - link "Zenless Zone Zero ZZZ":
              - /url: https://stg.mobalytics.gg/zzz
              - generic:
                - generic:
                  - img "Zenless Zone Zero"
                  - generic: ZZZ
          - generic:
            - link "2XKO 2XKO":
              - /url: https://stg.mobalytics.gg/2xko
              - generic:
                - generic:
                  - img "2XKO"
                  - generic: 2XKO
          - generic:
            - link "Riftbound Riftbound":
              - /url: https://stg.mobalytics.gg/riftbound
              - generic:
                - generic:
                  - img "Riftbound"
                  - generic: Riftbound
          - generic:
            - link "Example game ExG":
              - /url: https://stg.mobalytics.gg/example-game
              - generic:
                - generic:
                  - img "Example game"
                  - generic: ExG
      - generic [ref=e110]:
        - generic [ref=e111]:
          - link "DOWNLOAD APP" [ref=e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-deadlock&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e114]:
              - img [ref=e115]
              - text: DOWNLOAD APP
          - combobox [ref=e116]:
            - textbox "Steam Name or Steam ID" [ref=e119]
            - listbox
          - link "News" [ref=e121] [cursor=pointer]:
            - /url: /news
            - generic [ref=e122]: News
        - generic [ref=e124]:
          - link "A admin+stg+ns@mobalyticshq.com" [ref=e125] [cursor=pointer]:
            - /url: /deadlock/profile/new-pika4-2-439blm
            - generic [ref=e127]:
              - generic [ref=e129]: A
              - generic [ref=e131]: admin+stg+ns@mobalyticshq.com
          - button [ref=e133] [cursor=pointer]:
            - img [ref=e135]
          - button "Theme" [ref=e137] [cursor=pointer]:
            - img "Theme" [ref=e139]
      - generic [ref=e141]:
        - link "Home" [ref=e144] [cursor=pointer]:
          - /url: /deadlock
          - img "Home" [ref=e146]
        - link "Profile" [ref=e149] [cursor=pointer]:
          - /url: /deadlock/profile/new-pika4-2-439blm
          - img "Profile" [ref=e151]
        - link "Tier List" [ref=e154] [cursor=pointer]:
          - /url: /deadlock/tier-list
          - img "Tier List" [ref=e156]
        - link "Heroes" [ref=e159] [cursor=pointer]:
          - /url: /deadlock/heroes
          - img "Heroes" [ref=e161]
        - link "Builds" [ref=e164] [cursor=pointer]:
          - /url: /deadlock/builds
          - img "Builds" [ref=e166]
        - link "Build Stats" [ref=e169] [cursor=pointer]:
          - /url: /deadlock/build-stats
          - img "Build Stats" [ref=e171]
        - link "Guides" [ref=e174] [cursor=pointer]:
          - /url: /deadlock/guides
          - img "Guides" [ref=e176]
        - link "Items" [ref=e179] [cursor=pointer]:
          - /url: /deadlock/items
          - img "Items" [ref=e181]
      - main [ref=e184]:
        - generic [ref=e186]:
          - paragraph [ref=e187]: Oops, something went wrong!
          - paragraph [ref=e188]:
            - text: If reloading your page doesn't work, please
            - button "save your debug logs" [ref=e189] [cursor=pointer]
            - text: and contact our support team in
            - link "Discord" [ref=e190] [cursor=pointer]:
              - /url: https://discord.com/invite/B2ukr9M
              - button "Discord" [ref=e191]
            - text: . We'll help you out as soon as we can!
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  13  |     this.chooseFileButton = page
  14  |       .getByRole('button', {
  15  |         name: 'Video Edit Video (Optional) Upload Video Supported formats: WebM, MP4 Choose file',
  16  |         exact: true,
  17  |       })
  18  |       .getByRole('button', { name: 'Choose file' });
  19  |     this.addSectionButtonInModal = page.getByRole('button', {
  20  |       name: 'Add Section',
  21  |       exact: true,
  22  |     });
  23  |     this.addSectionButton = page.getByRole('button', { name: 'Add section', exact: true });
  24  |     this.editButton = page.getByTestId('ngf-st-edit-button');
  25  |     this.publishButton = page.getByTestId('ngf-st-publish-button');
  26  |     this.buttonPublishInModal = page
  27  |       .getByText('Publish pageIt will be visible to everyone via the assigned URL.CancelPublish')
  28  |       .getByRole('button', { name: 'Publish' });
  29  |     this.dotsButton = page.getByTestId('ngf-st-draft-actions-menu');
  30  |     this.dotsButtonInWidget = page.getByTestId('widget-actions-list').getByRole('button');
  31  |     this.deleteStPageButton = page.getByRole('menuitem', { name: 'Delete' });
  32  |     this.duplicateStPageButton = page.getByRole('menuitem', {
  33  |       name: 'Duplicate',
  34  |     });
  35  |     this.buttonDeleteInModal = page.getByRole('dialog').getByRole('button', { name: 'Delete' });
  36  |     this.saveDraftButton = page.getByTestId('ngf-st-update-button');
  37  |     this.updateButton = page.getByTestId('ngf-st-update-button');
  38  |     this.buttonCreateSave = page.getByTestId('ngf-st-create-button');
  39  |     this.seoButton = page.getByTestId('ngf-seo-settings-button');
  40  |     this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  41  |     this.resetButton = page.getByRole('button', { name: 'Reset' });
  42  |     this.controlPanel = page.getByTestId('document-controls-panel');
  43  |     this.headerWidget = page.getByRole('heading', { name: 'ZZZ Header' });
  44  |     this.documentDiscoveryWidget = page.locator('section').nth(4);
  45  |     this.cardGalleryV2Button = page.locator('[data-key="NgfDocumentStWidgetLinksGridManualV2"]');
  46  |     this.addWidgetButton = page.getByTestId('add-widget-button');
  47  |     this.dropdownMenuWidgets = page.getByText(
  48  |       'Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards'
  49  |     );
  50  |     this.headerButton = page.locator('[data-key="NgfDocumentStWidgetHeaderV2"]');
  51  |     this.inputCreateSaveModal = page.getByRole('textbox', {
  52  |       name: 'Page Path',
  53  |     });
  54  |     this.buttonCreateSaveInModal = page.getByRole('dialog').getByRole('button', {
  55  |       name: 'Create and Save',
  56  |     });
  57  |     this.documentDiscoveryButton = page.getByRole('menuitem', {
  58  |       name: 'Documents Discovery Discover',
  59  |     });
  60  |     this.seoModal = page.getByText('SEO settingsMeta titleMeta');
  61  |     this.videoButton = page.locator('[data-key="NgfDocumentCmWidgetVideoV2"]');
  62  |     this.listOfWidgets = page.getByText('Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards');
  63  |     this.videoWidget = page.getByRole('heading', { name: 'Video' });
  64  |     this.linkButtonVideo = page.getByTestId('video-widget-link-button');
  65  |     this.inputVideoWidget = page.getByRole('textbox', {
  66  |       name: 'YouTube, Twitch or Vimeo link',
  67  |     });
  68  |     this.headerDiablo4 = page.locator('#container').getByText('Diablo 4');
  69  |     this.header2xko = page.locator('#container').getByText('2xko');
  70  |     this.headerEndfield = page.locator('#container').getByText('Endfield');
  71  |     this.headerMarathon = page.locator('#container').getByText('Marathon');
  72  |     this.headerRiftbound = page.locator('#container').getByText('Riftbound');
  73  |     this.headerSts2 = page.locator('#ngfdocumentstwidgetheaderv2').locator('xpath=..');
  74  |     this.headerOverwatch = page.locator('#ngfdocumentstwidgetheaderv2').locator('xpath=..');
  75  |     this.headerLoL = page.locator('#container').getByText('LoL');
  76  |     this.headerValorant = page.locator('#container').getByText('Val');
  77  |     this.headerPoE2 = page.locator('#container').getByText('PoE 2');
  78  |     this.headerPoE = page.locator('#container').getByText('PoE');
  79  |     this.headerDestiny2 = page.locator('#container').getByText('Destiny 2');
  80  |     this.headerTFT = page.locator('#container').getByText('TFT');
  81  |     this.headerZzz = page.locator('#container').getByText('ZZZ');
  82  |     this.headerHades2 = page.locator('#container').getByText('Hades 2');
  83  |     this.headerBorderlands4 = page.locator('#container').getByText('Borderlands 4');
  84  |     this.headerNightreign = page.locator('#container').getByText('Nightreign');
  85  |     this.headerDeadlock = page.locator('#container').getByText('Deadlock');
  86  |     this.headerBazaar = page.locator('#container').getByText('The Bazaar');
  87  |     this.headerMarvelRivals = page.locator('#container').getByText('Marvel Rivals');
  88  |     this.headerMhw = page.locator('#container').getByText('Monster Hunter Wilds');
  89  |     this.inputRichTextWidget = page.getByRole('textbox');
  90  |     this.descriptionRichTextWidget = page.locator('span[data-lexical-text="true"]');
  91  |     this.richTextButton = page.locator('[data-key="NgfDocumentCmWidgetRichTextV2"]');
  92  |     this.staticDataButton = page.getByTestId('toolbar-plugin-static-data');
  93  |     this.dropdownStaticData = page.getByTestId('suggestion-static-data-menu');
  94  |   }
  95  | 
  96  |   async updateDescriptionRichTextWidget(text) {
  97  |     await test.step(`Update description in the rich text widget on the ST page`, async () => {
  98  |       await this.editButton.click();
  99  |       await this.inputRichTextWidget.fill(text);
  100 |       await this.page.waitForTimeout(1_000); //* deBounce time 500ms
  101 |       await this.updateButton.click();
  102 |     });
  103 |   }
  104 | 
  105 |   async clickCancelButton() {
  106 |     await test.step(`Click Cancel button on the control panel`, async () => {
  107 |       await this.cancelButton.click();
  108 |     });
  109 |   }
  110 | 
  111 |   async addHeaderWidget() {
  112 |     await test.step(`Add Header widget on the structure page`, async () => {
> 113 |       await this.addSectionButton.click();
      |                                   ^ Error: locator.click: Test timeout of 90000ms exceeded.
  114 |       await this.addSectionButtonInModal.click();
  115 |       await this.addWidgetButton.click();
  116 |       await this.headerButton.click();
  117 |     });
  118 |   }
  119 | 
  120 |   async addRichTextWidget() {
  121 |     await test.step(`Add Rich Text widget on the structure page`, async () => {
  122 |       await this.addSectionButton.click();
  123 |       await this.addSectionButtonInModal.click();
  124 |       await this.addWidgetButton.click();
  125 |       await this.richTextButton.click();
  126 |     });
  127 |   }
  128 | 
  129 |   async addHeaderWidgetOldGames() {
  130 |     await test.step(`Add Header widget on the structure page`, async () => {
  131 |       await this.addSectionButton.click();
  132 |       await this.addSectionButtonInModal.click();
  133 |       await this.addWidgetButton.click();
  134 |       await this.headerButton.click();
  135 |     });
  136 |   }
  137 | 
  138 |   async addCardGalleryWidget() {
  139 |     await test.step(`Add Card Gallery widget on the structure page`, async () => {
  140 |       await this.addSectionButton.click();
  141 |       await this.addSectionButtonInModal.click();
  142 |       await this.addWidgetButton.click();
  143 |       await this.cardGalleryV2Button.click();
  144 |     });
  145 |   }
  146 | 
  147 |   async addVideoWidget() {
  148 |     await test.step(`Add Video widget on the structure page`, async () => {
  149 |       await this.page.keyboard.press('End');
  150 |       await this.addSectionButton.click();
  151 |       await this.addSectionButtonInModal.click();
  152 |       await this.addWidgetButton.click();
  153 |       await this.videoButton.click();
  154 |     });
  155 |   }
  156 | 
  157 |   async uploadVideo(fileName) {
  158 |     await test.step(`Upload file: ${fileName} to CDN in the Video widget`, async () => {
  159 |       let actualFilePath;
  160 | 
  161 |       // If a file contains unique ID then create temporary copy of this file
  162 |       if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
  163 |         // Copy file with unique ID
  164 |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
  165 |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  166 | 
  167 |         try {
  168 |           // Copy file with a new name
  169 |           fs.copyFileSync(baseFilePath, tempFilePath);
  170 |           actualFilePath = tempFilePath;
  171 | 
  172 |           // Deleting file after test
  173 |           process.on('exit', () => {
  174 |             try {
  175 |               if (fs.existsSync(tempFilePath)) {
  176 |                 fs.unlinkSync(tempFilePath);
  177 |               }
  178 |             } catch (error) {
  179 |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  180 |             }
  181 |           });
  182 |         } catch (error) {
  183 |           console.log(`Warning: Could not create temp file, using base file`);
  184 |           actualFilePath = baseFilePath;
  185 |         }
  186 |       } else {
  187 |         // Use as is
  188 |         actualFilePath = path.join(__dirname, '../images/', fileName);
  189 |       }
  190 | 
  191 |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  192 |       await this.chooseFileButton.click();
  193 |       const fileChooser = await fileChooserPromise;
  194 |       await fileChooser.setFiles(actualFilePath);
  195 |     });
  196 |   }
  197 | 
  198 |   async createStPage(uuid) {
  199 |     await test.step(`Save the structure page`, async () => {
  200 |       await this.buttonCreateSave.click();
  201 |       await this.inputCreateSaveModal.click();
  202 |       await this.inputCreateSaveModal.fill(uuid);
  203 |       await this.buttonCreateSaveInModal.click();
  204 |     });
  205 |   }
  206 | 
  207 |   async publishStPage() {
  208 |     await test.step(`Publish the structure page`, async () => {
  209 |       await this.publishButton.click();
  210 |       await this.buttonPublishInModal.click();
  211 |     });
  212 |   }
  213 | 
```