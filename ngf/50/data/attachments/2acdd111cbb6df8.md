# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-st-pages.test.js >> Creating ST Pages >> Create a structure page on WoW Forever project
- Location: e2e-tests/ngf/creating-st-pages.test.js:9:3

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
            - /url: /wow-forever
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
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-wow-forever&utm_medium=homepage&utm_source=web
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
            - /url: /wow-forever
            - img "Home" [ref=e136]
          - link "Profile" [ref=e139] [cursor=pointer]:
            - /url: /wow-forever/profile
            - img "Profile" [ref=e141]
          - link "Planner" [ref=e144] [cursor=pointer]:
            - /url: /wow-forever/planner/classes
            - img "Planner" [ref=e146]
          - link "Classes" [ref=e149] [cursor=pointer]:
            - /url: /wow-forever/classes
            - img "Classes" [ref=e151]
          - link "Leveling" [ref=e154] [cursor=pointer]:
            - /url: /wow-forever/leveling-guides
            - img "Leveling" [ref=e156]
          - link "Tier List" [ref=e159] [cursor=pointer]:
            - /url: /wow-forever/tier-list
            - img "Tier List" [ref=e161]
          - link "Dungeons" [ref=e164] [cursor=pointer]:
            - /url: /wow-forever/dungeons
            - img "Dungeons" [ref=e166]
          - link "Raids" [ref=e169] [cursor=pointer]:
            - /url: /wow-forever/raids
            - img "Raids" [ref=e171]
          - link "Quests" [ref=e174] [cursor=pointer]:
            - /url: /wow-forever/quests
            - img "Quests" [ref=e176]
          - link "Professions" [ref=e179] [cursor=pointer]:
            - /url: /wow-forever/professions
            - img "Professions" [ref=e181]
          - link "Guides" [ref=e184] [cursor=pointer]:
            - /url: /wow-forever/guides
            - img "Guides" [ref=e186]
        - generic [ref=e188]:
          - main [ref=e189]:
            - generic [ref=e191]:
              - 'heading "error: something went terribly wrong..." [level=2] [ref=e192]':
                - generic [ref=e193]: "error:"
                - text: something went
                - text: terribly wrong...
              - paragraph [ref=e194]:
                - generic [ref=e195]:
                  - text: Sorry for any inconvenience, we are trying our best but this is
                  - text: still work in progress and there might be issues.
          - complementary [ref=e200]:
            - generic [ref=e201]:
              - generic [ref=e203]:
                - generic [ref=e205] [cursor=pointer]:
                  - generic [ref=e206]: Advertisement
                  - generic [ref=e207]: Remove Ads
                - generic [ref=e210] [cursor=pointer]:
                  - generic [ref=e211]: Remove all ads
                  - generic [ref=e212]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e213]
              - generic [ref=e215]:
                - generic [ref=e217] [cursor=pointer]:
                  - generic [ref=e218]: Advertisement
                  - generic [ref=e219]: Remove Ads
                - generic [ref=e222] [cursor=pointer]:
                  - generic [ref=e223]: Remove all ads
                  - generic [ref=e224]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e225]
      - generic [ref=e226]:
        - banner [ref=e227]:
          - heading "Reward Pass & Challenges" [level=4] [ref=e228]
          - button [ref=e229] [cursor=pointer]
        - generic [ref=e231]:
          - generic [ref=e232]:
            - 'link "Unlock 13 Rewards +8 Join us for the launch of our first Pass! Earn XP and unlock rewards by playing LoL, TFT, VALORANT, or PoE2. Ends in: 4 days Activate" [ref=e233] [cursor=pointer]':
              - /url: /reward-pass/01a07f10-c015-76cb-89b1-e33ae5b9667b
              - generic [ref=e234]:
                - generic [ref=e235]:
                  - generic:
                    - img
                    - img
                  - generic [ref=e237]:
                    - banner [ref=e238]:
                      - generic [ref=e242]: Level 0 - Booster [Free track]
                    - generic [ref=e243]:
                      - paragraph [ref=e244]: Unlock 13 Rewards
                      - generic [ref=e262]: "+8"
                    - paragraph [ref=e263]: Join us for the launch of our first Pass! Earn XP and unlock rewards by playing LoL, TFT, VALORANT, or PoE2.
                - contentinfo [ref=e264]:
                  - generic "September 22, 2026 05:00 PM GMT+00:00" [ref=e265]:
                    - img [ref=e266]
                    - generic [ref=e267]: "Ends in: 4 days"
                  - button "Activate" [ref=e268]
            - link "Explore Reward Passes" [ref=e269] [cursor=pointer]:
              - /url: /reward-pass
              - generic [ref=e270]: Explore Reward Passes
          - separator [ref=e271]
          - generic [ref=e272]:
            - heading "Challenges" [level=4] [ref=e273]
            - generic [ref=e274]:
              - generic [ref=e275]: No challenges at the moment
              - generic [ref=e276]: We are working on something special
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e280]:
    - banner [ref=e281]:
      - generic [ref=e282] [cursor=pointer]:
        - generic [ref=e283]: Advertisement
        - generic [ref=e284]: Remove Ads
    - generic [ref=e287] [cursor=pointer]:
      - generic [ref=e288]: Remove all ads
      - generic [ref=e289]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e290]
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