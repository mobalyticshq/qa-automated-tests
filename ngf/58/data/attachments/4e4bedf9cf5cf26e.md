# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-st-pages.test.js >> Creating ST Pages >> Create a structure page on PoE project
- Location: e2e-tests/ngf/creating-st-pages.test.js:244:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByTestId('add-widget-button')
    - locator resolved to <button tabindex="0" type="button" aria-haspopup="true" aria-expanded="false" id="react-aria7471595815-_r_f_" data-testid="add-widget-button" data-react-aria-pressable="true" class="x1hv8zah x1h7s0lp x78zum5 x6s0dn4 xl56j7k x167g77z xlkovuz x1ypdohk xjbqb8w x1f3rem x1717udv x1td3qas x10w6t97">…</button>

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - link "Mobalytics" [ref=e6] [cursor=pointer]:
        - /url: /poe
        - img "Mobalytics" [ref=e7]
      - generic [ref=e9]:
        - link "League of Legends LoL" [ref=e11] [cursor=pointer]:
          - /url: https://mobalytics.gg/lol
          - generic [ref=e13]:
            - img "League of Legends" [ref=e14]
            - generic [ref=e15]: LoL
        - link "Teamfight Tactics TFT" [ref=e17] [cursor=pointer]:
          - /url: https://mobalytics.gg/tft
          - generic [ref=e19]:
            - img "Teamfight Tactics" [ref=e20]
            - generic [ref=e21]: TFT
        - link "Diablo 4 Diablo 4" [ref=e23] [cursor=pointer]:
          - /url: https://mobalytics.gg/diablo-4
          - generic [ref=e25]:
            - img "Diablo 4" [ref=e26]
            - generic [ref=e27]: Diablo 4
        - link "Path of Exile 2 PoE 2" [ref=e29] [cursor=pointer]:
          - /url: https://mobalytics.gg/poe-2
          - generic [ref=e31]:
            - img "Path of Exile 2" [ref=e32]
            - generic [ref=e33]: PoE 2
        - link "Path of Exile PoE" [ref=e35] [cursor=pointer]:
          - /url: https://mobalytics.gg/poe
          - generic [ref=e37]:
            - img "Path of Exile" [ref=e38]
            - generic [ref=e39]: PoE
        - 'link "World of Warcraft: Forever WoW Forever New" [ref=e41] [cursor=pointer]':
          - /url: https://mobalytics.gg/wow-forever
          - generic [ref=e43]:
            - 'img "World of Warcraft: Forever" [ref=e44]'
            - generic [ref=e45]: WoW Forever
            - generic [ref=e47]: New
        - link "Destiny 2 Destiny 2" [ref=e49] [cursor=pointer]:
          - /url: https://mobalytics.gg/destiny-2
          - generic [ref=e51]:
            - img "Destiny 2" [ref=e52]
            - generic [ref=e53]: Destiny 2
        - link "Marathon Marathon" [ref=e55] [cursor=pointer]:
          - /url: https://mobalytics.gg/marathon
          - generic [ref=e57]:
            - img "Marathon" [ref=e58]
            - generic [ref=e59]: Marathon
        - link "Slay the Spire 2 STS 2" [ref=e61] [cursor=pointer]:
          - /url: https://mobalytics.gg/slay-the-spire-2
          - generic [ref=e63]:
            - img "Slay the Spire 2" [ref=e64]
            - generic [ref=e65]: STS 2
        - link "Deadlock Deadlock" [ref=e67] [cursor=pointer]:
          - /url: https://mobalytics.gg/deadlock
          - generic [ref=e69]:
            - img "Deadlock" [ref=e70]
            - generic [ref=e71]: Deadlock
        - link "Overwatch Overwatch" [ref=e73] [cursor=pointer]:
          - /url: https://mobalytics.gg/overwatch
          - generic [ref=e75]:
            - img "Overwatch" [ref=e76]
            - generic [ref=e77]: Overwatch
        - link "Borderlands 4 Borderlands 4" [ref=e79] [cursor=pointer]:
          - /url: https://mobalytics.gg/borderlands-4
          - generic [ref=e81]:
            - img "Borderlands 4" [ref=e82]
            - generic [ref=e83]: Borderlands 4
        - link "Valorant VAL" [ref=e85] [cursor=pointer]:
          - /url: https://mobalytics.gg/valorant
          - generic [ref=e87]:
            - img "Valorant" [ref=e88]
            - generic [ref=e89]: VAL
        - link "Neverness to Everness NTE" [ref=e91] [cursor=pointer]:
          - /url: https://mobalytics.gg/neverness-to-everness
          - generic [ref=e93]:
            - img "Neverness to Everness" [ref=e94]
            - generic [ref=e95]: NTE
        - button [ref=e96] [cursor=pointer]:
          - img [ref=e97]
        - generic:
          - 'link "Arknights: Endfield Endfield"':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic:
              - generic:
                - 'img "Arknights: Endfield"'
                - generic: Endfield
        - generic:
          - link "Elden Ring Nightreign Nightreign":
            - /url: https://mobalytics.gg/elden-ring-nightreign
            - generic:
              - generic:
                - img "Elden Ring Nightreign"
                - generic: Nightreign
        - generic:
          - link "Monster Hunter Wilds Monster Hunter Wilds":
            - /url: https://mobalytics.gg/mhw
            - generic:
              - generic:
                - img "Monster Hunter Wilds"
                - generic: Monster Hunter Wilds
        - generic:
          - link "Hades 2 Hades 2":
            - /url: https://mobalytics.gg/hades-2
            - generic:
              - generic:
                - img "Hades 2"
                - generic: Hades 2
        - generic:
          - link "The Bazaar The Bazaar":
            - /url: https://mobalytics.gg/the-bazaar
            - generic:
              - generic:
                - img "The Bazaar"
                - generic: The Bazaar
        - generic:
          - link "Marvel Rivals Marvel Rivals":
            - /url: https://mobalytics.gg/marvel-rivals
            - generic:
              - generic:
                - img "Marvel Rivals"
                - generic: Marvel Rivals
        - generic:
          - link "Zenless Zone Zero ZZZ":
            - /url: https://mobalytics.gg/zzz
            - generic:
              - generic:
                - img "Zenless Zone Zero"
                - generic: ZZZ
        - generic:
          - link "2XKO 2XKO":
            - /url: https://mobalytics.gg/2xko
            - generic:
              - generic:
                - img "2XKO"
                - generic: 2XKO
        - generic:
          - link "Riftbound Riftbound":
            - /url: https://mobalytics.gg/riftbound
            - generic:
              - generic:
                - img "Riftbound"
                - generic: Riftbound
        - generic:
          - link "Genshin Impact Genshin New":
            - /url: https://mobalytics.gg/genshin-impact
            - generic:
              - generic:
                - img "Genshin Impact"
                - generic: Genshin
                - generic:
                  - generic: New
    - generic [ref=e98]:
      - generic [ref=e99]:
        - generic [ref=e104] [cursor=pointer]:
          - button "plus Rewards" [ref=e105]:
            - img "plus" [ref=e107]
            - generic [ref=e108]: Rewards
          - generic [ref=e110]: New
        - link "DOWNLOAD APP" [ref=e111] [cursor=pointer]:
          - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-poe&utm_medium=homepage&utm_source=web
          - button "DOWNLOAD APP" [ref=e113]:
            - img [ref=e114]
            - text: DOWNLOAD APP
        - link "Gamebase" [ref=e116] [cursor=pointer]:
          - /url: /gamebase
          - generic [ref=e117]: Gamebase
      - generic [ref=e118]:
        - button "Remove Ads" [ref=e119] [cursor=pointer]
        - generic [ref=e120]:
          - link "A admin_auto_tests+ns@mobalyticshq.com" [ref=e121] [cursor=pointer]:
            - /url: /poe/profile/rich-flame-e3lwjq
            - generic [ref=e123]:
              - generic [ref=e125]: A
              - generic [ref=e127]: admin_auto_tests+ns@mobalyticshq.com
          - button "Notifications" [ref=e129] [cursor=pointer]:
            - img [ref=e130]
          - button [ref=e132] [cursor=pointer]:
            - img [ref=e134]
          - button "Theme" [ref=e136] [cursor=pointer]:
            - img "Theme" [ref=e138]
    - generic [ref=e140]:
      - link "Home" [ref=e143] [cursor=pointer]:
        - /url: /poe
        - img "Home" [ref=e145]
      - link "Profile" [ref=e148] [cursor=pointer]:
        - /url: /poe/profile
        - img "Profile" [ref=e150]
      - link "Build Planner" [ref=e153] [cursor=pointer]:
        - /url: /poe/planner/builds
        - img "Build Planner" [ref=e155]
      - link "Tier List" [ref=e158] [cursor=pointer]:
        - /url: /poe/tier-list
        - img "Tier List" [ref=e160]
      - link "Starter Builds" [ref=e163] [cursor=pointer]:
        - /url: /poe/starter-builds
        - img "Starter Builds" [ref=e165]
      - link "Builds" [ref=e168] [cursor=pointer]:
        - /url: /poe/builds
        - img "Builds" [ref=e170]
      - link "Guides" [ref=e173] [cursor=pointer]:
        - /url: /poe/guides
        - img "Guides" [ref=e175]
      - link "Creators" [ref=e178] [cursor=pointer]:
        - /url: /poe/creators
        - img "Creators" [ref=e180]
    - generic [ref=e182]:
      - main [ref=e183]:
        - generic [ref=e184]:
          - generic [ref=e186]:
            - generic [ref=e188]: New Page
            - generic [ref=e189]:
              - button "Create and Save" [ref=e190] [cursor=pointer]
              - button "Reset" [ref=e191] [cursor=pointer]:
                - img [ref=e192]
                - text: Reset
              - button "Cancel" [ref=e193] [cursor=pointer]
          - generic [ref=e194]:
            - button [ref=e198]:
              - button [ref=e205] [cursor=pointer]:
                - img [ref=e207]
            - button "Add section" [active] [ref=e209] [cursor=pointer]:
              - img [ref=e210]
              - text: Add section
            - status [ref=e211]
      - complementary [ref=e217]:
        - generic [ref=e218]:
          - generic [ref=e220]:
            - generic [ref=e222] [cursor=pointer]:
              - generic [ref=e223]: Advertisement
              - generic [ref=e224]: Remove Ads
            - generic [ref=e228] [cursor=pointer]:
              - generic [ref=e229]: Remove all ads
              - generic [ref=e230]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
              - button "Remove ads" [ref=e231]
          - generic [ref=e233]:
            - generic [ref=e235] [cursor=pointer]:
              - generic [ref=e236]: Advertisement
              - generic [ref=e237]: Remove Ads
            - generic [ref=e241] [cursor=pointer]:
              - generic [ref=e242]: Remove all ads
              - generic [ref=e243]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
              - button "Remove ads" [ref=e244]
  - generic:
    - region "Notifications Alt+T"
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