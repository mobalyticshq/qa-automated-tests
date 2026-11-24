# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/static-data.test.js >> Check static data on NGF Diablo 4
- Location: e2e-tests/ngf/static-data.test.js:8:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('suggestion-static-data-menu')
Expected substring: "Amethyst"
Received string:    "AspectsAccelerating AspectAggressive AspectAgile Aspect539 more resultsUnique Items100,000 StepsAccord of the WildsAe'grom's Schism381 more resultsSkills1h Axe1h Mace1h Sword"
Timeout: 15000ms

Call log:
  - Expect "toContainText" getByTestId('suggestion-static-data-menu') with timeout 15000ms
  - waiting for getByTestId('suggestion-static-data-menu')
    31 × locator resolved to <div data-testid="suggestion-static-data-menu" class="x1gylzyl x1o7jumi x614542 x1q06psa x14roueg xwzcjdk">…</div>
       - unexpected value "AspectsAccelerating AspectAggressive AspectAgile Aspect539 more resultsUnique Items100,000 StepsAccord of the WildsAe'grom's Schism381 more resultsSkills1h Axe1h Mace1h Sword"

```

```yaml
- list:
  - text: Aspects
  - listitem: Accelerating Aspect
  - listitem: Aggressive Aspect
  - listitem: Agile Aspect
  - listitem: 539 more results
  - text: Unique Items
  - listitem: 100,000 Steps
  - listitem: Accord of the Wilds
  - listitem: Ae'grom's Schism
  - listitem: 381 more results
  - text: Skills
  - listitem: 1h Axe
  - listitem: 1h Mace
  - listitem: 1h Sword
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