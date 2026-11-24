# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/static-data.test.js >> Check static data on NGF Hades 2
- Location: e2e-tests/ngf/static-data.test.js:8:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('suggestion-static-data-menu')
Expected substring: "Frinos"
Received string:    "Nocturnal ArmsDescuraLim and OrosRevaal3 more resultsNocturnal AspectsAspect of AnubisAspect of ArtemisAspect of Charon21 more resultsHammer UpgradesAetheric MoonburstAwakened RocketsBanshee Brand"
Timeout: 15000ms

Call log:
  - Expect "toContainText" getByTestId('suggestion-static-data-menu') with timeout 15000ms
  - waiting for getByTestId('suggestion-static-data-menu')
    33 × locator resolved to <div data-testid="suggestion-static-data-menu" class="x1gylzyl x1o7jumi x614542 x1q06psa x14roueg xwzcjdk">…</div>
       - unexpected value "Nocturnal ArmsDescuraLim and OrosRevaal3 more resultsNocturnal AspectsAspect of AnubisAspect of ArtemisAspect of Charon21 more resultsHammer UpgradesAetheric MoonburstAwakened RocketsBanshee Brand"

```

```yaml
- list:
  - text: Nocturnal Arms
  - listitem: Descura
  - listitem: Lim and Oros
  - listitem: Revaal
  - listitem: 3 more results
  - text: Nocturnal Aspects
  - listitem: Aspect of Anubis
  - listitem: Aspect of Artemis
  - listitem: Aspect of Charon
  - listitem: 21 more results
  - text: Hammer Upgrades
  - listitem: Aetheric Moonburst
  - listitem: Awakened Rockets
  - listitem: Banshee Brand
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
  12 |       await page.goto(`${process.env.BASE_URL}${staticDataStPage}`);
  13 |       await moba.stPage.editButton.click();
  14 |       await moba.stPage.staticDataButton.click();
  15 |     });
  16 | 
  17 |     await test.step(`Expected Result: "${gameSpecificItem}" is present in the static data dropdown`, async () => {
> 18 |       await expect(moba.stPage.dropdownStaticData).toContainText(gameSpecificItem);
     |                                                    ^ Error: expect(locator).toContainText(expected) failed
  19 |     });
  20 | 
  21 |     await test.step(`Expected Result: "${gameSpecificItem}" is visible on the page`, async () => {
  22 |       await expect(page.getByText(gameSpecificItem, { exact: Boolean(exactMatch) })).toBeVisible();
  23 |     });
  24 |   });
  25 | });
  26 | 
```