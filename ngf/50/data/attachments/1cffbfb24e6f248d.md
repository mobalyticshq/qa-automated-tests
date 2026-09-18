# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-st-pages.test.js >> Creating ST Pages >> Create a structure page on Overwatch project
- Location: e2e-tests/ngf/creating-st-pages.test.js:45:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByTestId('create-button')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - link "Mobalytics" [ref=e6] [cursor=pointer]:
            - /url: /overwatch
            - img "Mobalytics" [ref=e7]
          - generic [ref=e9]:
            - link "League of Legends LoL" [ref=e11] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/lol
              - generic [ref=e13]:
                - img "League of Legends" [ref=e14]
                - generic [ref=e15]: LoL
            - link "Teamfight Tactics TFT" [ref=e17] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/tft
              - generic [ref=e19]:
                - img "Teamfight Tactics" [ref=e20]
                - generic [ref=e21]: TFT
            - link "Diablo 4 Diablo 4" [ref=e23] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/diablo-4
              - generic [ref=e25]:
                - img "Diablo 4" [ref=e26]
                - generic [ref=e27]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e29] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe-2
              - generic [ref=e31]:
                - img "Path of Exile 2" [ref=e32]
                - generic [ref=e33]: PoE 2
            - link "Path of Exile PoE" [ref=e35] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe
              - generic [ref=e37]:
                - img "Path of Exile" [ref=e38]
                - generic [ref=e39]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=e41] [cursor=pointer]':
              - /url: https://stg.mobalytics.gg/wow-forever
              - generic [ref=e43]:
                - 'img "World of Warcraft: Forever" [ref=e44]'
                - generic [ref=e45]: WoW Forever
                - generic [ref=e47]: New
            - link "Destiny 2 Destiny 2" [ref=e49] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/destiny-2
              - generic [ref=e51]:
                - img "Destiny 2" [ref=e52]
                - generic [ref=e53]: Destiny 2
            - link "Marathon Marathon" [ref=e55] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/marathon
              - generic [ref=e57]:
                - img "Marathon" [ref=e58]
                - generic [ref=e59]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e61] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/slay-the-spire-2
              - generic [ref=e63]:
                - img "Slay the Spire 2" [ref=e64]
                - generic [ref=e65]: STS 2
            - link "Deadlock Deadlock" [ref=e67] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e69]:
                - img "Deadlock" [ref=e70]
                - generic [ref=e71]: Deadlock
            - link "Overwatch Overwatch" [ref=e73] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/overwatch
              - generic [ref=e75]:
                - img "Overwatch" [ref=e76]
                - generic [ref=e77]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e79] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/borderlands-4
              - generic [ref=e81]:
                - img "Borderlands 4" [ref=e82]
                - generic [ref=e83]: Borderlands 4
            - link "Valorant VAL" [ref=e85] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/valorant
              - generic [ref=e87]:
                - img "Valorant" [ref=e88]
                - generic [ref=e89]: VAL
            - link "Neverness to Everness NTE" [ref=e91] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/neverness-to-everness
              - generic [ref=e93]:
                - img "Neverness to Everness" [ref=e94]
                - generic [ref=e95]: NTE
            - button [ref=e96] [cursor=pointer]:
              - img [ref=e97]
            - generic:
              - 'link "Arknights: Endfield Endfield"':
                - /url: https://stg.mobalytics.gg/arknights-endfield
                - generic:
                  - generic:
                    - 'img "Arknights: Endfield"'
                    - generic: Endfield
            - generic:
              - link "Elden Ring Nightreign Nightreign":
                - /url: https://stg.mobalytics.gg/elden-ring-nightreign
                - generic:
                  - generic:
                    - img "Elden Ring Nightreign"
                    - generic: Nightreign
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
              - link "Genshin Impact Genshin New":
                - /url: https://stg.mobalytics.gg/genshin-impact
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
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-overwatch&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e113]:
                - img [ref=e114]
                - text: DOWNLOAD APP
            - link "Gamebase" [ref=e116] [cursor=pointer]:
              - /url: /gamebase
              - generic [ref=e117]: Gamebase
          - generic [ref=e119]:
            - button "Sign In" [ref=e121] [cursor=pointer]
            - button [ref=e123] [cursor=pointer]:
              - img [ref=e125]
            - button "Theme" [ref=e127] [cursor=pointer]:
              - img "Theme" [ref=e129]
        - generic [ref=e131]:
          - link "Home" [ref=e134] [cursor=pointer]:
            - /url: /overwatch
            - img "Home" [ref=e136]
          - link "Profile" [ref=e139] [cursor=pointer]:
            - /url: /overwatch/profile
            - img "Profile" [ref=e141]
          - link "Heroes" [ref=e144] [cursor=pointer]:
            - /url: /overwatch/heroes
            - img "Heroes" [ref=e146]
          - link "Tier Lists" [ref=e149] [cursor=pointer]:
            - /url: /overwatch/tier-lists
            - img "Tier Lists" [ref=e151]
          - link "Stadium Builds" [ref=e154] [cursor=pointer]:
            - /url: /overwatch/builds
            - img "Stadium Builds" [ref=e156]
          - link "Guides" [ref=e159] [cursor=pointer]:
            - /url: /overwatch/guides
            - img "Guides" [ref=e161]
        - generic [ref=e163]:
          - main [ref=e164]:
            - generic [ref=e166]:
              - 'heading "error: something went terribly wrong..." [level=2] [ref=e167]':
                - generic [ref=e168]: "error:"
                - text: something went
                - text: terribly wrong...
              - paragraph [ref=e169]:
                - generic [ref=e170]:
                  - text: Sorry for any inconvenience, we are trying our best but this is
                  - text: still work in progress and there might be issues.
          - complementary [ref=e176]:
            - generic [ref=e177]:
              - generic [ref=e179]:
                - generic [ref=e181] [cursor=pointer]:
                  - generic [ref=e182]: Advertisement
                  - generic [ref=e183]: Remove Ads
                - generic [ref=e187] [cursor=pointer]:
                  - generic [ref=e188]: Remove all ads
                  - generic [ref=e189]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e190]
              - generic [ref=e192]:
                - generic [ref=e194] [cursor=pointer]:
                  - generic [ref=e195]: Advertisement
                  - generic [ref=e196]: Remove Ads
                - generic [ref=e200] [cursor=pointer]:
                  - generic [ref=e201]: Remove all ads
                  - generic [ref=e202]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e203]
      - generic [ref=e204]:
        - banner [ref=e205]:
          - heading "Reward Pass & Challenges" [level=4] [ref=e206]
          - button [ref=e207] [cursor=pointer]
        - generic [ref=e209]:
          - generic [ref=e211]:
            - generic:
              - img
              - img
            - generic [ref=e212]:
              - paragraph [ref=e213]: No passes at the moment
              - paragraph [ref=e214]: We are working on the new content
          - separator [ref=e215]
          - generic [ref=e216]:
            - heading "Challenges" [level=4] [ref=e217]
            - generic [ref=e218]:
              - generic [ref=e219]: No challenges at the moment
              - generic [ref=e220]: We are working on something special
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e224]:
    - banner [ref=e225]:
      - generic [ref=e226] [cursor=pointer]:
        - generic [ref=e227]: Advertisement
        - generic [ref=e228]: Remove Ads
    - generic [ref=e231] [cursor=pointer]:
      - generic [ref=e232]: Remove all ads
      - generic [ref=e233]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e234]
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | export class StAdminPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.notFoundPage = page.getByText('404The page you are looking');
  7  |     this.createStPageButton = page.getByTestId('create-button');
  8  |     this.buttonDeleteInModal = page.getByRole('button', { name: 'Delete' });
  9  |     this.editButton = (stPageName) =>
  10 |       page.getByTestId('admin-page-st-document-item-card').filter({ hasText: stPageName }).getByTestId('edit-button');
  11 |     this.deleteButton = (stPageName) =>
  12 |       page.getByTestId('admin-page-st-document-item-card').filter({ hasText: stPageName }).getByTestId('delete-button');
  13 |     this.stCardWidget = (stPageName) =>
  14 |       page.getByTestId('admin-page-st-document-item-card').filter({ hasText: stPageName });
  15 |     this.stAdminTitle = (adminTitle) => page.getByRole('heading', { name: `${adminTitle}` });
  16 |   }
  17 | 
  18 |   async gotoStPlannerPage() {
  19 |     await test.step(`Go to the planner of the structure page`, async () => {
> 20 |       await this.createStPageButton.click();
     |                                     ^ Error: locator.click: Test timeout of 90000ms exceeded.
  21 |     });
  22 |   }
  23 | 
  24 |   async clickStCardWidget(stPageName) {
  25 |     await test.step(`Go to ${stPageName} structure page`, async () => {
  26 |       await this.stCardWidget(stPageName).click();
  27 |     });
  28 |   }
  29 | 
  30 |   async clickEditButton(stPageName = '/home') {
  31 |     await test.step(`Click Edit button on ${stPageName} widget`, async () => {
  32 |       await this.editButton(stPageName).click();
  33 |     });
  34 |   }
  35 | 
  36 |   async deleteStCardWidget(stPageName) {
  37 |     await test.step(`Click Delete button on ${stPageName} widget`, async () => {
  38 |       await this.deleteButton(stPageName).click();
  39 |       await this.buttonDeleteInModal.click();
  40 |       await this.page.waitForLoadState('domcontentloaded'); // added for waiting for the page to reload after deletion
  41 |     });
  42 |   }
  43 | }
  44 | 
```