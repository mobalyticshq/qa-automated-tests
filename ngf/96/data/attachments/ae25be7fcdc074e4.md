# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/static-data.test.js >> Check static data on NGF Nightreign
- Location: e2e-tests/ngf/static-data.test.js:8:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: page.goto: Test timeout of 90000ms exceeded.
Call log:
  - navigating to "https://stg.mobalytics.gg/elden-ring-nightreign/qa-check-static-data-not-delete", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Elden Ring Nightreign banner text Learn more Close":
      - /url: https://www.google.com
      - generic [ref=e4] [cursor=pointer]:
        - generic [ref=e5]:
          - paragraph [ref=e11]: Elden Ring Nightreign banner text
          - button "Learn more" [ref=e12]
        - img "Close" [ref=e13]
    - generic [ref=e14]:
      - generic [ref=e16]:
        - link "Mobalytics" [ref=e18] [cursor=pointer]:
          - /url: /elden-ring-nightreign
          - img "Mobalytics" [ref=e19]
        - generic [ref=e21]:
          - link "League of Legends LoL" [ref=e23] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/lol
            - generic [ref=e25]:
              - img "League of Legends" [ref=e27]
              - generic [ref=e28]: LoL
          - link "Teamfight Tactics TFT" [ref=e30] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/tft
            - generic [ref=e32]:
              - img "Teamfight Tactics" [ref=e34]
              - generic [ref=e35]: TFT
          - link "Diablo 4 Diablo 4" [ref=e37] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/diablo-4
            - generic [ref=e39]:
              - img "Diablo 4" [ref=e41]
              - generic [ref=e42]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e44] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe-2
            - generic [ref=e46]:
              - img "Path of Exile 2" [ref=e48]
              - generic [ref=e49]: PoE 2
          - link "Path of Exile PoE" [ref=e51] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe
            - generic [ref=e53]:
              - img "Path of Exile" [ref=e55]
              - generic [ref=e56]: PoE
          - link "Destiny 2 Destiny 2" [ref=e58] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/destiny-2
            - generic [ref=e60]:
              - img "Destiny 2" [ref=e62]
              - generic [ref=e63]: Destiny 2
          - link "Deadlock Deadlock" [ref=e65] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/deadlock
            - generic [ref=e67]:
              - img "Deadlock" [ref=e69]
              - generic [ref=e70]: Deadlock
          - link "Valorant VAL" [ref=e72] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/valorant
            - generic [ref=e74]:
              - img "Valorant" [ref=e76]
              - generic [ref=e77]: VAL
          - link "The Bazaar The Bazaar" [ref=e79] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/the-bazaar
            - generic [ref=e81]:
              - img "The Bazaar" [ref=e83]
              - generic [ref=e84]: The Bazaar
          - link "Monster Hunter Wilds Monster Hunter Wilds" [ref=e86] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/mhw
            - generic [ref=e88]:
              - img "Monster Hunter Wilds" [ref=e90]
              - generic [ref=e91]: Monster Hunter Wilds
          - link "Zenless Zone Zero ZZZ" [ref=e93] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/zzz
            - generic [ref=e95]:
              - img "Zenless Zone Zero" [ref=e97]
              - generic [ref=e98]: ZZZ
          - button [ref=e100] [cursor=pointer]:
            - img [ref=e101]
        - link "Gamebase Gamebase Reviews, Previews, & More" [ref=e103] [cursor=pointer]:
          - /url: https://stg.mobalytics.gg/gamebase
          - generic [ref=e104]:
            - img "Gamebase" [ref=e106]
            - generic [ref=e107]: Gamebase
            - generic [ref=e108]: Reviews, Previews, & More
      - generic [ref=e109]:
        - link "Download App" [ref=e110] [cursor=pointer]:
          - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-elden-ring-nightreign&utm_medium=homepage&utm_source=web
          - button "Download App" [ref=e112]:
            - img [ref=e113]
            - text: Download App
        - button "Play & Get Free Rewards" [ref=e115] [cursor=pointer]:
          - generic [ref=e117]: Play & Get Free Rewards
        - generic [ref=e118]:
          - button "Remove Ads" [ref=e119] [cursor=pointer]
          - button "admin+stg+ns@mobalyticshq.com" [ref=e121] [cursor=pointer]:
            - generic [ref=e123]:
              - generic [ref=e125]: A
              - generic [ref=e127]: admin+stg+ns@mobalyticshq.com
          - button "Notifications" [ref=e129] [cursor=pointer]:
            - img [ref=e130]
      - generic [ref=e132]:
        - link "Home" [ref=e135] [cursor=pointer]:
          - /url: /elden-ring-nightreign
          - img "Home" [ref=e137]
        - link "Builds" [ref=e140] [cursor=pointer]:
          - /url: /elden-ring-nightreign/builds
          - img "Builds" [ref=e142]
        - link "Classes" [ref=e145] [cursor=pointer]:
          - /url: /elden-ring-nightreign/classes
          - img "Classes" [ref=e147]
        - link "Tier List" [ref=e150] [cursor=pointer]:
          - /url: /elden-ring-nightreign/tier-list
          - img "Tier List" [ref=e152]
        - link "Bosses" [ref=e155] [cursor=pointer]:
          - /url: /elden-ring-nightreign/bosses
          - img "Bosses" [ref=e157]
        - link "Guides" [ref=e160] [cursor=pointer]:
          - /url: /elden-ring-nightreign/guides
          - img "Guides" [ref=e162]
        - link "Wiki" [ref=e165] [cursor=pointer]:
          - /url: /elden-ring-nightreign/wiki
          - img "Wiki" [ref=e167]
      - main [ref=e170]:
        - generic [ref=e174]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - generic [ref=e178]: /qa-check-static-data-not-delete
              - generic [ref=e180]: Draft
            - generic [ref=e181]:
              - button "Publish" [ref=e182] [cursor=pointer]
              - button "Edit" [ref=e183] [cursor=pointer]
              - button "SEO" [ref=e184] [cursor=pointer]:
                - img [ref=e185]
                - text: SEO
              - button [ref=e187] [cursor=pointer]:
                - img [ref=e189]
          - status [ref=e190]
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixture';
  2  | import { Moba } from '../../app/page-object/moba';
  3  | import { filterProjectsByFeatureStatus as filterProjectsByAvailableStaticData } from '../../app/helpers/index';
  4  | 
  5  | filterProjectsByAvailableStaticData('staticData').forEach(({ game, staticData }) => {
  6  |   const { staticDataStPage, gameSpecificItem, exactMatch } = staticData;
  7  | 
  8  |   test(`Check static data on NGF ${game}`, async ({ page }) => {
  9  |     const moba = new Moba(page);
  10 | 
  11 |     await test.step(`Open the ST page with static data for ${game}`, async () => {
> 12 |       await page.goto(`${process.env.BASE_URL}${staticDataStPage}`);
     |                  ^ Error: page.goto: Test timeout of 90000ms exceeded.
  13 |       await moba.stPage.editButton.click();
  14 |       await moba.stPage.staticDataButton.click();
  15 |     });
  16 | 
  17 |     await test.step(`Expected Result: "${gameSpecificItem}" is present in the static data dropdown`, async () => {
  18 |       await expect(moba.stPage.dropdownStaticData).toContainText(gameSpecificItem);
  19 |     });
  20 | 
  21 |     await test.step(`Expected Result: "${gameSpecificItem}" is visible on the page`, async () => {
  22 |       await expect(page.getByText(gameSpecificItem, { exact: Boolean(exactMatch) })).toBeVisible();
  23 |     });
  24 |   });
  25 | });
  26 | 
```