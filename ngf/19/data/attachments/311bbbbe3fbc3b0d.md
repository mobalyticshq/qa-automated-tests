# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-st-pages.test.js >> Creating ST Pages >> Check error state for empty "CardGrid" widget
- Location: e2e-tests/ngf/creating-st-pages.test.js:394:3

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
    - generic [ref=e4]:
      - paragraph [ref=e11]: PoE2 API was updated, causing problems
      - img "Close" [ref=e12] [cursor=pointer]
    - generic [ref=e13]:
      - generic [ref=e14]:
        - link "Mobalytics" [ref=e15] [cursor=pointer]:
          - /url: /poe-2
          - img "Mobalytics" [ref=e16]
        - generic [ref=e18]:
          - link "League of Legends LoL" [ref=e20] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/lol
            - generic [ref=e22]:
              - img "League of Legends" [ref=e23]
              - generic [ref=e24]: LoL
          - link "Teamfight Tactics TFT" [ref=e26] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/tft
            - generic [ref=e28]:
              - img "Teamfight Tactics" [ref=e29]
              - generic [ref=e30]: TFT
          - link "Diablo 4 Diablo 4" [ref=e32] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/diablo-4
            - generic [ref=e34]:
              - img "Diablo 4" [ref=e35]
              - generic [ref=e36]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e38] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe-2
            - generic [ref=e40]:
              - img "Path of Exile 2" [ref=e41]
              - generic [ref=e42]: PoE 2
          - link "Path of Exile PoE" [ref=e44] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe
            - generic [ref=e46]:
              - img "Path of Exile" [ref=e47]
              - generic [ref=e48]: PoE
          - link "Destiny 2 Destiny 2" [ref=e50] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/destiny-2
            - generic [ref=e52]:
              - img "Destiny 2" [ref=e53]
              - generic [ref=e54]: Destiny 2
          - link "Marathon Marathon" [ref=e56] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/marathon
            - generic [ref=e58]:
              - img "Marathon" [ref=e59]
              - generic [ref=e60]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e62] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/slay-the-spire-2
            - generic [ref=e64]:
              - img "Slay the Spire 2" [ref=e65]
              - generic [ref=e66]: STS 2
          - link "Deadlock Deadlock" [ref=e68] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/deadlock
            - generic [ref=e70]:
              - img "Deadlock" [ref=e71]
              - generic [ref=e72]: Deadlock
          - link "Overwatch Overwatch" [ref=e74] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/overwatch
            - generic [ref=e76]:
              - img "Overwatch" [ref=e77]
              - generic [ref=e78]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e80] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/borderlands-4
            - generic [ref=e82]:
              - img "Borderlands 4" [ref=e83]
              - generic [ref=e84]: Borderlands 4
          - link "Valorant VAL" [ref=e86] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/valorant
            - generic [ref=e88]:
              - img "Valorant" [ref=e89]
              - generic [ref=e90]: VAL
          - link "Neverness to Everness NTE" [ref=e92] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/neverness-to-everness
            - generic [ref=e94]:
              - img "Neverness to Everness" [ref=e95]
              - generic [ref=e96]: NTE
          - 'link "Arknights: Endfield Endfield" [ref=e98] [cursor=pointer]':
            - /url: https://stg.mobalytics.gg/arknights-endfield
            - generic [ref=e100]:
              - 'img "Arknights: Endfield" [ref=e101]'
              - generic [ref=e102]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e104] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/elden-ring-nightreign
            - generic [ref=e106]:
              - img "Elden Ring Nightreign" [ref=e107]
              - generic [ref=e108]: Nightreign
          - button [ref=e109] [cursor=pointer]:
            - img [ref=e110]
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
      - generic [ref=e111]:
        - generic [ref=e112]:
          - generic [ref=e117] [cursor=pointer]:
            - button "plus Rewards" [ref=e118]:
              - img "plus" [ref=e120]
              - generic [ref=e121]: Rewards
            - generic [ref=e123]: New
          - link "DOWNLOAD APP" [ref=e124] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?utm_campaign=I5qu0ij&utm_medium=owaa&utm_source=app
            - button "DOWNLOAD APP" [ref=e126]:
              - img [ref=e127]
              - text: DOWNLOAD APP
          - generic [ref=e132]:
            - img [ref=e133]
            - textbox "global search input" [ref=e135]:
              - /placeholder: Ask me anything about PoE builds!
          - link "Gamebase" [ref=e137] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e138]: Gamebase
        - generic [ref=e140]:
          - link "A admin+stg+ns@mobalyticshq.com" [ref=e141] [cursor=pointer]:
            - /url: /poe-2/profile/krayvanz-v414m0
            - generic [ref=e143]:
              - generic [ref=e145]: A
              - generic [ref=e147]: admin+stg+ns@mobalyticshq.com
          - button "Notifications" [ref=e149] [cursor=pointer]:
            - img [ref=e150]
          - button [ref=e152] [cursor=pointer]:
            - img [ref=e154]
          - button "Theme" [ref=e156] [cursor=pointer]:
            - img "Theme" [ref=e158]
      - generic [ref=e160]:
        - link "Home" [ref=e163] [cursor=pointer]:
          - /url: /poe-2
          - img "Home" [ref=e165]
        - link "Profile" [ref=e168] [cursor=pointer]:
          - /url: /poe-2/profile
          - img "Profile" [ref=e170]
        - link "Build Planner" [ref=e173] [cursor=pointer]:
          - /url: /poe-2/planner/builds
          - img "Build Planner" [ref=e175]
        - link "Tier List" [ref=e178] [cursor=pointer]:
          - /url: /poe-2/tier-list
          - img "Tier List" [ref=e180]
        - link "Starter Builds" [ref=e183] [cursor=pointer]:
          - /url: /poe-2/starter-builds
          - img "Starter Builds" [ref=e185]
        - link "Builds" [ref=e188] [cursor=pointer]:
          - /url: /poe-2/builds
          - img "Builds" [ref=e190]
        - link "Guides" [ref=e193] [cursor=pointer]:
          - /url: /poe-2/guides
          - img "Guides" [ref=e195]
        - link "Creators" [ref=e198] [cursor=pointer]:
          - /url: /poe-2/creators
          - img "Creators" [ref=e200]
      - main [ref=e203]:
        - generic [ref=e205]:
          - paragraph [ref=e206]: Oops, something went wrong!
          - paragraph [ref=e207]:
            - text: If reloading your page doesn't work, please
            - button "save your debug logs" [ref=e208] [cursor=pointer]
            - text: and contact our support team in
            - link "Discord" [ref=e209] [cursor=pointer]:
              - /url: https://discord.com/invite/B2ukr9M
            - text: . We'll help you out as soon as we can!
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
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
  96  |   }
  97  | 
  98  |   async updateDescriptionRichTextWidget(text) {
  99  |     await test.step(`Update description in the rich text widget on the ST page`, async () => {
  100 |       await this.editButton.click();
  101 |       await this.inputRichTextWidget.fill(text);
  102 |       await this.page.waitForTimeout(1_000); //* deBounce time 500ms
  103 |       await this.updateButton.click();
  104 |     });
  105 |   }
  106 | 
  107 |   async clickCancelButton() {
  108 |     await test.step(`Click Cancel button on the control panel`, async () => {
  109 |       await this.cancelButton.click();
  110 |     });
  111 |   }
  112 | 
  113 |   async addHeaderWidget() {
  114 |     await test.step(`Add Header widget on the structure page`, async () => {
  115 |       await this.addSectionButton.click();
  116 |       await this.addSectionButtonInModal.click();
  117 |       await this.addWidgetButton.click();
  118 |       await this.headerButton.click();
  119 |     });
  120 |   }
  121 | 
  122 |   async addRichTextWidget() {
  123 |     await test.step(`Add Rich Text widget on the structure page`, async () => {
  124 |       await this.addSectionButton.click();
  125 |       await this.addSectionButtonInModal.click();
  126 |       await this.addWidgetButton.click();
  127 |       await this.richTextButton.click();
  128 |     });
  129 |   }
  130 | 
  131 |   async addHeaderWidgetOldGames() {
  132 |     await test.step(`Add Header widget on the structure page`, async () => {
  133 |       await this.addSectionButton.click();
  134 |       await this.addSectionButtonInModal.click();
  135 |       await this.addWidgetButton.click();
  136 |       await this.headerButton.click();
  137 |     });
  138 |   }
  139 | 
  140 |   async addCardGalleryWidget() {
  141 |     await test.step(`Add Card Gallery widget on the structure page`, async () => {
> 142 |       await this.addSectionButton.click();
      |                                   ^ Error: locator.click: Test timeout of 90000ms exceeded.
  143 |       await this.addSectionButtonInModal.click();
  144 |       await this.addWidgetButton.click();
  145 |       await this.cardGalleryV2Button.click();
  146 |     });
  147 |   }
  148 | 
  149 |   async addVideoWidget() {
  150 |     await test.step(`Add Video widget on the structure page`, async () => {
  151 |       await this.page.keyboard.press('End');
  152 |       await this.addSectionButton.click();
  153 |       await this.addSectionButtonInModal.click();
  154 |       await this.addWidgetButton.click();
  155 |       await this.videoButton.click();
  156 |     });
  157 |   }
  158 | 
  159 |   async uploadVideo(fileName) {
  160 |     await test.step(`Upload file: ${fileName} to CDN in the Video widget`, async () => {
  161 |       let actualFilePath;
  162 | 
  163 |       // If a file contains unique ID then create temporary copy of this file
  164 |       if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
  165 |         // Copy file with unique ID
  166 |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
  167 |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  168 | 
  169 |         try {
  170 |           // Copy file with a new name
  171 |           fs.copyFileSync(baseFilePath, tempFilePath);
  172 |           actualFilePath = tempFilePath;
  173 | 
  174 |           // Deleting file after test
  175 |           process.on('exit', () => {
  176 |             try {
  177 |               if (fs.existsSync(tempFilePath)) {
  178 |                 fs.unlinkSync(tempFilePath);
  179 |               }
  180 |             } catch (error) {
  181 |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  182 |             }
  183 |           });
  184 |         } catch (error) {
  185 |           console.log(`Warning: Could not create temp file, using base file`);
  186 |           actualFilePath = baseFilePath;
  187 |         }
  188 |       } else {
  189 |         // Use as is
  190 |         actualFilePath = path.join(__dirname, '../images/', fileName);
  191 |       }
  192 | 
  193 |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  194 |       await this.chooseFileButton.click();
  195 |       const fileChooser = await fileChooserPromise;
  196 |       await fileChooser.setFiles(actualFilePath);
  197 |     });
  198 |   }
  199 | 
  200 |   async createStPage(uuid) {
  201 |     await test.step(`Save the structure page`, async () => {
  202 |       await this.buttonCreateSave.click();
  203 |       await this.inputCreateSaveModal.click();
  204 |       await this.inputCreateSaveModal.fill(uuid);
  205 |       await this.buttonCreateSaveInModal.click();
  206 |     });
  207 |   }
  208 | 
  209 |   async publishStPage() {
  210 |     await test.step(`Publish the structure page`, async () => {
  211 |       await this.publishButton.click();
  212 |       await this.buttonPublishInModal.click();
  213 |     });
  214 |   }
  215 | 
  216 |   async deleteStPage() {
  217 |     await test.step(`Delete the structure page`, async () => {
  218 |       await this.dotsButton.click();
  219 |       await this.deleteStPageButton.click();
  220 |       await this.buttonDeleteInModal.click();
  221 |     });
  222 |   }
  223 | 
  224 |   async duplicateStPage(uuid) {
  225 |     await test.step(`Duplicate the structure page`, async () => {
  226 |       await this.dotsButton.click();
  227 | 
  228 |       // Creating a new tab
  229 |       const [newPage] = await Promise.all([
  230 |         this.page.context().waitForEvent('page'),
  231 |         this.duplicateStPageButton.click(),
  232 |       ]);
  233 |       // Waiting for new tab
  234 |       await newPage.waitForLoadState('domcontentloaded');
  235 | 
  236 |       // Creating new locators for the new tab
  237 |       const buttonCreateSave = newPage.getByTestId('ngf-st-create-button');
  238 |       const inputCreateSaveModal = newPage.getByRole('textbox', {
  239 |         name: 'Page Path',
  240 |       });
  241 |       const buttonCreateSaveInModal = newPage.getByRole('dialog').getByRole('button', {
  242 |         name: 'Create and Save',
```