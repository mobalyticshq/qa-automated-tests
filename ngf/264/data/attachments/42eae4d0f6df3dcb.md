# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating UG Pages >> Create a tier-list page on Overwatch project
- Location: e2e-tests/ngf.test.js:474:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('#title-id')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link ". . Close":
      - /url: http://fce.gg/FLS9_MOBA
      - generic [ref=e4] [cursor=pointer]:
        - generic [ref=e5]:
          - paragraph [ref=e7]: .
          - button "." [ref=e8]
        - img "Close" [ref=e9]
    - generic [ref=e10]:
      - generic [ref=e11]:
        - link "Mobalytics" [ref=e12] [cursor=pointer]:
          - /url: /overwatch
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
          - generic [ref=e116] [cursor=pointer]:
            - button "plus Rewards" [ref=e117]:
              - img "plus" [ref=e119]
              - generic [ref=e120]: Rewards
            - generic [ref=e122]: New
          - link "DOWNLOAD APP" [ref=e123] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-overwatch&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e125]:
              - img [ref=e126]
              - text: DOWNLOAD APP
          - link "News" [ref=e128] [cursor=pointer]:
            - /url: /news
            - generic [ref=e129]: News
        - generic [ref=e131]:
          - link "A admin+stg+ns@mobalyticshq.com" [ref=e132] [cursor=pointer]:
            - /url: /overwatch/profile/new-pika4-2-439blm
            - generic [ref=e134]:
              - generic [ref=e136]: A
              - generic [ref=e138]: admin+stg+ns@mobalyticshq.com
          - button [ref=e140] [cursor=pointer]:
            - img [ref=e142]
          - button "Theme" [ref=e144] [cursor=pointer]:
            - img "Theme" [ref=e146]
      - generic [ref=e148]:
        - link "Home" [ref=e151] [cursor=pointer]:
          - /url: /overwatch
          - img "Home" [ref=e153]
        - link "Profile" [ref=e156] [cursor=pointer]:
          - /url: /overwatch/profile
          - img "Profile" [ref=e158]
        - link "Heroes" [ref=e161] [cursor=pointer]:
          - /url: /overwatch/heroes
          - img "Heroes" [ref=e163]
        - link "Tier Lists" [ref=e166] [cursor=pointer]:
          - /url: /overwatch/tier-lists
          - img "Tier Lists" [ref=e168]
        - link "Stadium Builds" [ref=e171] [cursor=pointer]:
          - /url: /overwatch/builds
          - img "Stadium Builds" [ref=e173]
        - link "Guides" [ref=e176] [cursor=pointer]:
          - /url: /overwatch/guides
          - img "Guides" [ref=e178]
      - main [ref=e181]:
        - generic [ref=e183]:
          - paragraph [ref=e184]: Oops, something went wrong!
          - paragraph [ref=e185]:
            - text: If reloading your page doesn't work, please
            - button "save your debug logs" [ref=e186] [cursor=pointer]
            - text: and contact our support team in
            - link "Discord" [ref=e187] [cursor=pointer]:
              - /url: https://discord.com/invite/B2ukr9M
            - text: . We'll help you out as soon as we can!
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1   | import { test } from '@playwright/test';
  2   | import path from 'path';
  3   | import { fileURLToPath } from 'url';
  4   | import fs from 'fs';
  5   | 
  6   | const __filename = fileURLToPath(import.meta.url);
  7   | const __dirname = path.dirname(__filename);
  8   | 
  9   | export class UgBuildPlanner {
  10  |   constructor(page) {
  11  |     this.page = page;
  12  |     this.inputBuildName = page.locator('#title-id');
  13  |     this.buttonSaveDraft = page.getByTestId('ug-document-save-draft-button');
  14  |     this.buttonResetBuild = page.getByRole('button', { name: 'Reset Build' });
  15  |     this.buttonCancelInModal = page.getByRole('button', { name: 'Cancel' });
  16  |     this.buttonSaveDraftInModal = page.getByRole('button', {
  17  |       name: 'Save as Draft',
  18  |     });
  19  |     this.buttonSavePublishInModal = page.getByRole('button', {
  20  |       name: 'Save and Publish',
  21  |     });
  22  |     this.coverImageButton = page.getByTestId('ug-document-edit-cover-image-button');
  23  |     this.controlPanel = page.getByTestId('document-controls-panel');
  24  |     this.mainPage = page.getByRole('main');
  25  |     this.coverImage = page.locator('div[style*="cdn.mobalytics.gg"]').first();
  26  |     // this.header = page.locator("#ngfdocumentugwidgetheaderv1");
  27  |     this.videoChooseFileButton = page
  28  |       .getByRole('button', {
  29  |         name: 'Video Guide Edit Video (Optional) Upload Video Supported formats: WebM, MP4 Choose file',
  30  |         exact: true,
  31  |       })
  32  |       .getByRole('button', { name: 'Choose file' });
  33  |     this.imgChooseFileButton = page
  34  |       .getByText('Build Cover ImageCover Image(')
  35  |       .getByRole('button', { name: 'Choose file' });
  36  |     this.applyButtonInCoverImageModal = page
  37  |       .getByText('Build Cover ImageCover Image(')
  38  |       .getByRole('button', { name: 'Apply' });
  39  |   }
  40  | 
  41  |   async uploadCoverImage(fileName) {
  42  |     await test.step(`Upload file: ${fileName} to CDN in the Cover Image widget`, async () => {
  43  |       let actualFilePath;
  44  | 
  45  |       // If a file contains unique ID then create temporary copy of this file
  46  |       if (fileName.includes('aqa-telegram') && fileName.endsWith('.svg')) {
  47  |         // Use base file telegram.svg
  48  |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-telegram.svg');
  49  |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  50  | 
  51  |         try {
  52  |           // Copy file with a new name
  53  |           fs.copyFileSync(baseFilePath, tempFilePath);
  54  |           actualFilePath = tempFilePath;
  55  | 
  56  |           // Deleting file after test
  57  |           process.on('exit', () => {
  58  |             try {
  59  |               if (fs.existsSync(tempFilePath)) {
  60  |                 fs.unlinkSync(tempFilePath);
  61  |               }
  62  |             } catch (error) {
  63  |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  64  |             }
  65  |           });
  66  |         } catch (error) {
  67  |           console.log(`Warning: Could not create temp file, using base file`);
  68  |           actualFilePath = baseFilePath;
  69  |         }
  70  |       } else {
  71  |         // Use as is
  72  |         actualFilePath = path.join(__dirname, '../images/', fileName);
  73  |       }
  74  | 
  75  |       await this.coverImageButton.click();
  76  |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  77  |       await this.imgChooseFileButton.click();
  78  |       const fileChooser = await fileChooserPromise;
  79  |       await fileChooser.setFiles(actualFilePath);
  80  |       await this.applyButtonInCoverImageModal.click();
  81  |     });
  82  |   }
  83  |   async createUgDraftPage(pageName) {
  84  |     await test.step('Create a draft page', async () => {
> 85  |       await this.inputBuildName.click();
      |                                 ^ Error: locator.click: Test timeout of 90000ms exceeded.
  86  |       await this.inputBuildName.fill(pageName);
  87  |       await this.buttonSaveDraft.click();
  88  |       await this.buttonSaveDraftInModal.click();
  89  |     });
  90  |   }
  91  | 
  92  |   async uploadVideo(fileName) {
  93  |     await test.step(`Upload file: ${fileName} to CDN in the VideoV2 widget`, async () => {
  94  |       let actualFilePath;
  95  | 
  96  |       // If a file contains unique ID then create temporary copy of this file
  97  |       if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
  98  |         // Copy file with unique ID
  99  |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
  100 |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  101 | 
  102 |         try {
  103 |           // Copy file with a new name
  104 |           fs.copyFileSync(baseFilePath, tempFilePath);
  105 |           actualFilePath = tempFilePath;
  106 | 
  107 |           // Deleting file after test
  108 |           process.on('exit', () => {
  109 |             try {
  110 |               if (fs.existsSync(tempFilePath)) {
  111 |                 fs.unlinkSync(tempFilePath);
  112 |               }
  113 |             } catch (error) {
  114 |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  115 |             }
  116 |           });
  117 |         } catch (error) {
  118 |           console.log(`Warning: Could not create temp file, using base file`);
  119 |           actualFilePath = baseFilePath;
  120 |         }
  121 |       } else {
  122 |         // Use as is
  123 |         actualFilePath = path.join(__dirname, '../images/', fileName);
  124 |       }
  125 | 
  126 |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  127 |       await this.videoChooseFileButton.click();
  128 |       const fileChooser = await fileChooserPromise;
  129 |       await fileChooser.setFiles(actualFilePath);
  130 |     });
  131 |   }
  132 | }
  133 | 
```