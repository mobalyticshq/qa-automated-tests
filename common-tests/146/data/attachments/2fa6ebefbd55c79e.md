# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/widgets/focus-mode-widgets.test.js >> User can open and close the perimeter map modal
- Location: e2e-tests/ngf/widgets/focus-mode-widgets.test.js:6:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('image-preview-modal-icon-close')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByTestId('image-preview-modal-icon-close') with timeout 15000ms
  - waiting for getByTestId('image-preview-modal-icon-close')

```

```yaml
- link "Mobalytics":
  - /url: /marathon
  - img "Mobalytics"
- link "League of Legends LoL":
  - /url: https://stg.mobalytics.gg/lol
  - img "League of Legends"
  - text: LoL
- link "Teamfight Tactics TFT":
  - /url: https://stg.mobalytics.gg/tft
  - img "Teamfight Tactics"
  - text: TFT
- link "Diablo 4 Diablo 4":
  - /url: https://stg.mobalytics.gg/diablo-4
  - img "Diablo 4"
  - text: Diablo 4
- link "Path of Exile 2 PoE 2":
  - /url: https://stg.mobalytics.gg/poe-2
  - img "Path of Exile 2"
  - text: PoE 2
- link "Path of Exile PoE":
  - /url: https://stg.mobalytics.gg/poe
  - img "Path of Exile"
  - text: PoE
- 'link "World of Warcraft: Forever WoW Forever New"':
  - /url: https://stg.mobalytics.gg/wow-forever
  - 'img "World of Warcraft: Forever"'
  - text: WoW Forever New
- link "Destiny 2 Destiny 2":
  - /url: https://stg.mobalytics.gg/destiny-2
  - img "Destiny 2"
  - text: Destiny 2
- link "Marathon Marathon":
  - /url: https://stg.mobalytics.gg/marathon
  - img "Marathon"
  - text: Marathon
- link "Slay the Spire 2 STS 2":
  - /url: https://stg.mobalytics.gg/slay-the-spire-2
  - img "Slay the Spire 2"
  - text: STS 2
- link "Deadlock Deadlock":
  - /url: https://stg.mobalytics.gg/deadlock
  - img "Deadlock"
  - text: Deadlock
- link "Overwatch Overwatch":
  - /url: https://stg.mobalytics.gg/overwatch
  - img "Overwatch"
  - text: Overwatch
- button:
  - img
- link "Gamebase Gamebase Reviews, Previews, & More":
  - /url: https://stg.mobalytics.gg/gamebase
  - img "Gamebase"
  - text: Gamebase Reviews, Previews, & More
- link "Download App":
  - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-marathon&utm_medium=homepage&utm_source=web
  - button "Download App":
    - img
    - text: Download App
- button "Play & Get Free Rewards"
- button "Sign In"
- button "Settings":
  - img
- link "Home Home":
  - /url: /marathon
  - img "Home"
  - text: Home
- link "Profile Profile":
  - /url: /marathon/profile
  - img "Profile"
  - text: Profile
- link "Build Planner Build Planner":
  - /url: /marathon/planner/builds
  - img "Build Planner"
  - text: Build Planner
- link "Tier Lists Tier Lists":
  - /url: /marathon/tier-lists
  - img "Tier Lists"
  - text: Tier Lists
- link "Builds Builds":
  - /url: /marathon/builds
  - img "Builds"
  - text: Builds
- link "Runners Runners":
  - /url: /marathon/runners
  - img "Runners"
  - text: Runners
- link "Weapons Weapons":
  - /url: /marathon/weapons
  - img "Weapons"
  - text: Weapons
- link "Factions Factions":
  - /url: /marathon/factions
  - img "Factions"
  - text: Factions
- link "Maps Maps":
  - /url: /marathon/maps
  - img "Maps"
  - text: Maps
- link "Guides Guides":
  - /url: /marathon/guides
  - img "Guides"
  - text: Guides
- main:
  - heading "Rich Text" [level=2]
  - textbox:
    - paragraph:
      - img "Perimeter Map"
  - status
- complementary:
  - text: Advertisement Remove Ads Remove all ads Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
  - button "Remove ads"
  - text: Advertisement Remove Ads Remove all ads Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
  - button "Remove ads"
- region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/fixture';
  2  | import { Moba } from '../../../app/page-object/moba';
  3  | 
  4  | test.use({ storageState: { cookies: [], origins: [] } });
  5  | 
  6  | test('User can open and close the perimeter map modal', async ({ page }) => {
  7  |     const moba = new Moba(page);
  8  | 
  9  |     await moba.mainURLs.openMarathonPerimeterMapPage();
  10 |     await moba.stPage.perimeterMapButton.first().click();
> 11 |     await expect(moba.stPage.closeMapModalButton).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  12 |     await moba.stPage.closeMapModalButton.click();
  13 |     await expect(moba.stPage.closeMapModalButton).not.toBeVisible();
  14 | });
  15 | 
  16 | test.describe('For published UG documents', () => {
  17 |     test('Admin can open and exit Focus Mode for published PoE 2 build', async ({ page, apiAuthAdmin }) => {
  18 |         const moba = new Moba(page);
  19 | 
  20 |         await moba.mainURLs.openUgPoe2PublishedBuildPage();
  21 |         await expect(moba.ugBuildPage.getStatusBadge('Published')).toBeVisible();
  22 |         await moba.ugBuildPage.openFocusMode();
  23 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
  24 |         await moba.ugBuildPage.exitFocusMode();
  25 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
  26 |         await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
  27 |     })
  28 | 
  29 |     test('Unlogged-in user can open and exit Focus Mode for published WoW build', async ({ page }) => {
  30 |         const moba = new Moba(page);
  31 | 
  32 |         await moba.mainURLs.openUgPoe2PublishedBuildPage();
  33 |         await moba.ugBuildPage.openFocusMode();
  34 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
  35 |         await moba.ugBuildPage.exitFocusMode();
  36 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
  37 |         await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
  38 |     })
  39 | });
  40 | 
  41 | test.describe('For draft UG documents', () => {
  42 |     test('User cant open Focus Mode for draft PoE 2 build', async ({ page, apiAuthAdmin }) => {
  43 |         const moba = new Moba(page);
  44 | 
  45 |         await moba.mainURLs.openUgPoe2DraftBuildPage();
  46 |         await expect(moba.ugBuildPage.getStatusBadge('Draft')).toBeVisible();
  47 |         await expect(moba.ugBuildPage.focusModeButton).toBeHidden();
  48 |     })
  49 | });
```