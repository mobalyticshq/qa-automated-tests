# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/static-data.test.js >> Check static data on NGF Genshin
- Location: e2e-tests/ngf/static-data.test.js:10:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByTestId('ngf-st-edit-button')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - link "Mobalytics" [ref=e6] [cursor=pointer]:
        - /url: /genshin-impact
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
        - link "Destiny 2 Destiny 2" [ref=e41] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/destiny-2
          - generic [ref=e43]:
            - img "Destiny 2" [ref=e44]
            - generic [ref=e45]: Destiny 2
        - link "Marathon Marathon" [ref=e47] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/marathon
          - generic [ref=e49]:
            - img "Marathon" [ref=e50]
            - generic [ref=e51]: Marathon
        - link "Slay the Spire 2 STS 2" [ref=e53] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/slay-the-spire-2
          - generic [ref=e55]:
            - img "Slay the Spire 2" [ref=e56]
            - generic [ref=e57]: STS 2
        - link "Deadlock Deadlock" [ref=e59] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/deadlock
          - generic [ref=e61]:
            - img "Deadlock" [ref=e62]
            - generic [ref=e63]: Deadlock
        - link "Overwatch Overwatch" [ref=e65] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/overwatch
          - generic [ref=e67]:
            - img "Overwatch" [ref=e68]
            - generic [ref=e69]: Overwatch
        - link "Borderlands 4 Borderlands 4" [ref=e71] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/borderlands-4
          - generic [ref=e73]:
            - img "Borderlands 4" [ref=e74]
            - generic [ref=e75]: Borderlands 4
        - link "Valorant VAL" [ref=e77] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/valorant
          - generic [ref=e79]:
            - img "Valorant" [ref=e80]
            - generic [ref=e81]: VAL
        - link "Neverness to Everness NTE New" [ref=e83] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/neverness-to-everness
          - generic [ref=e85]:
            - img "Neverness to Everness" [ref=e86]
            - generic [ref=e87]: NTE
            - generic [ref=e89]: New
        - 'link "Arknights: Endfield Endfield" [ref=e91] [cursor=pointer]':
          - /url: https://stg.mobalytics.gg/arknights-endfield
          - generic [ref=e93]:
            - 'img "Arknights: Endfield" [ref=e94]'
            - generic [ref=e95]: Endfield
        - link "Elden Ring Nightreign Nightreign" [ref=e97] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/elden-ring-nightreign
          - generic [ref=e99]:
            - img "Elden Ring Nightreign" [ref=e100]
            - generic [ref=e101]: Nightreign
        - button [ref=e102] [cursor=pointer]:
          - img [ref=e103]
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
        - generic:
          - link "Genshin Impact Genshin New":
            - /url: https://stg.mobalytics.gg/genshin-impact
            - generic:
              - generic:
                - img "Genshin Impact"
                - generic: Genshin
                - generic:
                  - generic: New
    - generic [ref=e104]:
      - generic [ref=e105]:
        - link "DOWNLOAD APP" [ref=e106] [cursor=pointer]:
          - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-genshin-impact&utm_medium=homepage&utm_source=web
          - button "DOWNLOAD APP" [ref=e108]:
            - img [ref=e109]
            - text: DOWNLOAD APP
        - link "Gamebase" [ref=e111] [cursor=pointer]:
          - /url: /gamebase
          - generic [ref=e112]: Gamebase
      - generic [ref=e114]:
        - link "A admin+stg+ns@mobalyticshq.com" [ref=e115] [cursor=pointer]:
          - /url: /genshin-impact/profile/krayvanz-v414m0
          - generic [ref=e117]:
            - generic [ref=e119]: A
            - generic [ref=e121]: admin+stg+ns@mobalyticshq.com
        - button [ref=e123] [cursor=pointer]:
          - img [ref=e125]
        - button "Theme" [ref=e127] [cursor=pointer]:
          - img "Theme" [ref=e129]
    - generic [ref=e131]:
      - link "Home" [ref=e134] [cursor=pointer]:
        - /url: /genshin-impact
        - img "Home" [ref=e136]
      - link "Profile" [ref=e139] [cursor=pointer]:
        - /url: /genshin-impact/profile
        - img "Profile" [ref=e141]
      - link "Characters" [ref=e144] [cursor=pointer]:
        - /url: /genshin-impact/characters
        - img "Characters" [ref=e146]
      - link "Tier List" [ref=e149] [cursor=pointer]:
        - /url: /genshin-impact/tier-list
        - img "Tier List" [ref=e151]
      - link "Teams" [ref=e154] [cursor=pointer]:
        - /url: /genshin-impact/teams
        - img "Teams" [ref=e156]
      - link "Guides" [ref=e159] [cursor=pointer]:
        - /url: /genshin-impact/guides
        - img "Guides" [ref=e161]
    - main [ref=e164]:
      - generic [ref=e165]:
        - heading "404" [level=1] [ref=e166]
        - heading "The page you are looking for is not found" [level=2] [ref=e167]
        - paragraph [ref=e168]: There may have been an error or the link you tried may be broken.
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixture';
  2  | import { Moba } from '../../app/page-object/moba';
  3  | import { filterProjectsByFeatureStatus as filterProjectsByAvailableStaticData } from '../../app/helpers/index';
  4  | 
  5  | test.use({ storageState: '.auth/adminAuth.json' }); // add admin auth
  6  | 
  7  | filterProjectsByAvailableStaticData('staticData').forEach(({ game, staticData }) => {
  8  |   const { staticDataStPage, gameSpecificItem, exactMatch } = staticData;
  9  | 
  10 |   test(`Check static data on NGF ${game}`, async ({ page }) => {
  11 |     const moba = new Moba(page);
  12 | 
  13 |     await test.step(`Open the ST page with static data for ${game}`, async () => {
  14 |       await page.goto(`${process.env.BASE_URL}${staticDataStPage}`);
> 15 |       await moba.stPage.editButton.click();
     |                                    ^ Error: locator.click: Test timeout of 90000ms exceeded.
  16 |       await moba.stPage.staticDataButton.click();
  17 |     });
  18 | 
  19 |     await test.step(`Expected Result: "${gameSpecificItem}" is present in the static data dropdown`, async () => {
  20 |       await expect(moba.stPage.dropdownStaticData).toContainText(gameSpecificItem);
  21 |     });
  22 | 
  23 |     await test.step(`Expected Result: "${gameSpecificItem}" is visible on the page`, async () => {
  24 |       await expect(page.getByText(gameSpecificItem, { exact: Boolean(exactMatch) })).toBeVisible();
  25 |     });
  26 |   });
  27 | });
  28 | 
```