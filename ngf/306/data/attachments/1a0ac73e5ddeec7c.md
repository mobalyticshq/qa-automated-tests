# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating ST Pages >> Create a structure page on 2xko project
- Location: e2e-tests/ngf.test.js:77:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByTestId('add-widget-button')
    - locator resolved to <button tabindex="0" type="button" aria-haspopup="true" aria-expanded="false" id="react-aria6217234864-_r_o_" data-testid="add-widget-button" data-react-aria-pressable="true" class="x1hv8zah x1h7s0lp x78zum5 x6s0dn4 xl56j7k x167g77z xlkovuz x1ypdohk xjbqb8w x1f3rem x1717udv x1td3qas x10w6t97">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="x1n2onr6 x78zum5 xdt5ytf x1qjc9v5 xou54vl x1rqpnx3">…</div> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="x1n2onr6 x78zum5 xdt5ytf x1qjc9v5 xou54vl x1rqpnx3">…</div> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    134 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="x1n2onr6 x78zum5 xdt5ytf x1qjc9v5 xou54vl x1rqpnx3">…</div> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /2xko
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
          - link "Destiny 2 Destiny 2" [ref=e41] [cursor=pointer]:
            - /url: https://mobalytics.gg/destiny-2
            - generic [ref=e43]:
              - img "Destiny 2" [ref=e44]
              - generic [ref=e45]: Destiny 2
          - link "Marathon Marathon" [ref=e47] [cursor=pointer]:
            - /url: https://mobalytics.gg/marathon
            - generic [ref=e49]:
              - img "Marathon" [ref=e50]
              - generic [ref=e51]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
          - link "Deadlock Deadlock" [ref=e59] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e61]:
              - img "Deadlock" [ref=e62]
              - generic [ref=e63]: Deadlock
          - link "Overwatch Overwatch" [ref=e65] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e67]:
              - img "Overwatch" [ref=e68]
              - generic [ref=e69]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e71] [cursor=pointer]:
            - /url: https://mobalytics.gg/borderlands-4
            - generic [ref=e73]:
              - img "Borderlands 4" [ref=e74]
              - generic [ref=e75]: Borderlands 4
          - link "Valorant VAL" [ref=e77] [cursor=pointer]:
            - /url: https://mobalytics.gg/valorant
            - generic [ref=e79]:
              - img "Valorant" [ref=e80]
              - generic [ref=e81]: VAL
          - link "Neverness to Everness NTE New" [ref=e83] [cursor=pointer]:
            - /url: https://mobalytics.gg/neverness-to-everness
            - generic [ref=e85]:
              - img "Neverness to Everness" [ref=e86]
              - generic [ref=e87]: NTE
              - generic [ref=e89]: New
          - 'link "Arknights: Endfield Endfield" [ref=e91] [cursor=pointer]':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic [ref=e93]:
              - 'img "Arknights: Endfield" [ref=e94]'
              - generic [ref=e95]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e97] [cursor=pointer]:
            - /url: https://mobalytics.gg/elden-ring-nightreign
            - generic [ref=e99]:
              - img "Elden Ring Nightreign" [ref=e100]
              - generic [ref=e101]: Nightreign
          - button [ref=e102] [cursor=pointer]:
            - img [ref=e103]
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
      - generic [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e110] [cursor=pointer]:
            - button "plus Rewards" [ref=e111]:
              - img "plus" [ref=e113]
              - generic [ref=e114]: Rewards
            - generic [ref=e116]: New
          - link "DOWNLOAD APP" [ref=e117] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-2xko&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e119]:
              - img [ref=e120]
              - text: DOWNLOAD APP
          - link "Gamebase" [ref=e122] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e123]: Gamebase
        - generic [ref=e124]:
          - button "Remove Ads" [ref=e125] [cursor=pointer]
          - generic [ref=e126]:
            - link "A admin_auto_tests+ns@mobalyticshq.com" [ref=e127] [cursor=pointer]:
              - /url: /2xko/profile/rich-flame-e3lwjq
              - generic [ref=e129]:
                - generic [ref=e131]: A
                - generic [ref=e133]: admin_auto_tests+ns@mobalyticshq.com
            - button [ref=e135] [cursor=pointer]:
              - img [ref=e137]
            - button "Theme" [ref=e139] [cursor=pointer]:
              - img "Theme" [ref=e141]
      - generic [ref=e143]:
        - link "Home" [ref=e146] [cursor=pointer]:
          - /url: /2xko
          - img "Home" [ref=e148]
        - link "Champions" [ref=e151] [cursor=pointer]:
          - /url: /2xko/champions
          - img "Champions" [ref=e153]
        - link "Tier List" [ref=e156] [cursor=pointer]:
          - /url: /2xko/tier-lists
          - img "Tier List" [ref=e158]
        - link "Guides" [ref=e161] [cursor=pointer]:
          - /url: /2xko/guides
          - img "Guides" [ref=e163]
      - generic [ref=e165]:
        - main [ref=e166]:
          - generic [ref=e167]:
            - generic [ref=e169]:
              - generic [ref=e171]: New Page
              - generic [ref=e172]:
                - button "Create and Save" [ref=e173] [cursor=pointer]
                - button "Reset" [ref=e174] [cursor=pointer]:
                  - img [ref=e175]
                  - text: Reset
                - button "Cancel" [ref=e176] [cursor=pointer]
            - generic [ref=e177]:
              - button [ref=e181]:
                - button [ref=e188] [cursor=pointer]:
                  - img [ref=e190]
              - button "Add section" [active] [ref=e192] [cursor=pointer]:
                - img [ref=e193]
                - text: Add section
              - status [ref=e194]
        - complementary [ref=e200]:
          - generic [ref=e201]:
            - generic [ref=e203]:
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: Advertisement
                - generic [ref=e207]: Remove Ads
              - generic [ref=e211] [cursor=pointer]:
                - generic [ref=e212]: Remove all ads
                - generic [ref=e213]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e214]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - generic [ref=e219]: Advertisement
                - generic [ref=e220]: Remove Ads
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: Remove all ads
                - generic [ref=e226]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e227]
    - generic [ref=e228]:
      - banner [ref=e229]:
        - heading "Reward Pass & Challenges" [level=4] [ref=e230]
        - button [ref=e231] [cursor=pointer]
      - generic [ref=e233]:
        - generic [ref=e234]:
          - 'link "Unlock 28 Rewards +23 Join us for the launch of our first Pass! Earn XP and unlock rewards by playing LoL, TFT, VALORANT, or PoE2. Ends in: 55 days Activate" [ref=e235] [cursor=pointer]':
            - /url: /reward-pass/019ebc3c-22fd-734a-aa01-70783d769d8e
            - generic [ref=e236]:
              - generic [ref=e237]:
                - generic:
                  - img
                  - img
                - generic [ref=e239]:
                  - banner [ref=e240]:
                    - generic [ref=e244]: First Blood Pass
                  - generic [ref=e245]:
                    - paragraph [ref=e246]: Unlock 28 Rewards
                    - generic [ref=e258]: "+23"
                  - paragraph [ref=e259]: Join us for the launch of our first Pass! Earn XP and unlock rewards by playing LoL, TFT, VALORANT, or PoE2.
              - contentinfo [ref=e260]:
                - generic "September 22, 2026 12:00 AM GMT+00:00" [ref=e261]:
                  - img [ref=e262]
                  - generic [ref=e263]: "Ends in: 55 days"
                - button "Activate" [ref=e264]
          - link "Explore Reward Passes" [ref=e265] [cursor=pointer]:
            - /url: /reward-pass
            - generic [ref=e266]: Explore Reward Passes
        - separator [ref=e267]
        - generic [ref=e268]:
          - heading "Challenges" [level=4] [ref=e269]
          - generic [ref=e270]:
            - tablist [ref=e271]:
              - tab "LoL" [selected] [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: LoL
              - tab "PoE 2" [ref=e274] [cursor=pointer]:
                - generic [ref=e275]: PoE 2
              - tab "TFT" [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: TFT
              - tab "Val" [ref=e278] [cursor=pointer]:
                - generic [ref=e279]: Val
            - tabpanel "LoL" [ref=e280]:
              - generic [ref=e281]:
                - generic [ref=e282]:
                  - img [ref=e283]
                  - generic [ref=e284]:
                    - text: Connect your account to track your wins
                    - paragraph [ref=e285]: We cannot track your matches and grant XP without you logging into your account.
                  - button "Connect Riot Account" [ref=e286] [cursor=pointer]
                - generic [ref=e287]:
                  - generic [ref=e288]:
                    - generic "August 5, 2026 10:00 AM GMT+00:00" [ref=e289]:
                      - img [ref=e290]
                      - generic [ref=e291]: "Ends in: 7 days"
                    - heading "New LoL Challenge" [level=5] [ref=e292]
                  - generic [ref=e293]:
                    - generic [ref=e295]:
                      - generic [ref=e296]: Play 15 games as Zaahen
                      - generic [ref=e298]: 100 XP
                    - generic [ref=e301]:
                      - generic [ref=e302]: Win 5 games in a row
                      - generic [ref=e304]: 125 XP
                    - generic [ref=e307]:
                      - generic [ref=e308]: Get 10 kills in 1 game
                      - generic [ref=e310]: 150 XP
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  17  |         exact: true,
  18  |       })
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
> 117 |       await this.addWidgetButton.click();
      |                                  ^ Error: locator.click: Test timeout of 90000ms exceeded.
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
  142 |       await this.addSectionButton.click();
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
```