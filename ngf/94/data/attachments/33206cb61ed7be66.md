# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/widgets.test.js >> Focus Mode for published UG documents >> User can open and exit Focus Mode for published PoE 2 build
- Location: e2e-tests/ngf/widgets.test.js:17:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Exit Focus Mode' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('button', { name: 'Exit Focus Mode' })

```

```yaml
- paragraph: PoE2 API was updated, causing problems
- img "Close"
- link "Mobalytics":
  - /url: /poe-2
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
- link "Destiny 2 Destiny 2":
  - /url: https://stg.mobalytics.gg/destiny-2
  - img "Destiny 2"
  - text: Destiny 2
- link "Deadlock Deadlock":
  - /url: https://stg.mobalytics.gg/deadlock
  - img "Deadlock"
  - text: Deadlock
- link "Valorant VAL":
  - /url: https://stg.mobalytics.gg/valorant
  - img "Valorant"
  - text: VAL
- link "The Bazaar The Bazaar":
  - /url: https://stg.mobalytics.gg/the-bazaar
  - img "The Bazaar"
  - text: The Bazaar
- link "Monster Hunter Wilds Monster Hunter Wilds":
  - /url: https://stg.mobalytics.gg/mhw
  - img "Monster Hunter Wilds"
  - text: Monster Hunter Wilds
- link "Zenless Zone Zero ZZZ":
  - /url: https://stg.mobalytics.gg/zzz
  - img "Zenless Zone Zero"
  - text: ZZZ
- button:
  - img
- link "Gamebase Gamebase Reviews, Previews, & More":
  - /url: https://stg.mobalytics.gg/gamebase
  - img "Gamebase"
  - text: Gamebase Reviews, Previews, & More
- link "Download App":
  - /url: /lol/glp/download-welcome?utm_campaign=I5qu0ij&utm_medium=owaa&utm_source=app
  - button "Download App":
    - img
    - text: Download App
- button "Play & Get Free Rewards"
- img
- textbox "global search input":
  - /placeholder: Ask me anything about PoE builds!
- link "nikiheartj#6924":
  - /url: /poe-2/profile/pyp3emli
- button "admin+stg+ns@mobalyticshq.com": A admin+stg+ns@mobalyticshq.com
- button "Notifications":
  - img
- link "Home":
  - /url: /poe-2
  - img "Home"
- link "Profile":
  - /url: /poe-2/profile
  - img "Profile"
- link "Build Planner":
  - /url: /poe-2/planner/builds
  - img "Build Planner"
- link "Tier List":
  - /url: /poe-2/tier-list
  - img "Tier List"
- link "Starter Builds":
  - /url: /poe-2/starter-builds
  - img "Starter Builds"
- link "Builds":
  - /url: /poe-2/builds
  - img "Builds"
- link "Guides":
  - /url: /poe-2/guides
  - img "Guides"
- link "Creators":
  - /url: /poe-2/creators
  - img "Creators"
- main:
  - img "Diablo 4 s10 builder takeover"
  - navigation:
    - list:
      - listitem:
        - link "Path of Exile 2":
          - /url: /poe-2
      - listitem:
        - link "admin_auto_tests+stg+ns@mobalyticshq.com":
          - /url: /poe-2/profile/spy-man/builds
      - listitem: autotests-focus-mode-published
  - text: autotests-focus-mode-published
  - button "Edit"
  - button "SEO":
    - img
    - text: SEO
  - text: "Starter:"
  - button "Starter":
    - text: Starter
    - img
  - text: "End Game:"
  - button "End Game":
    - text: End Game
    - img
  - text: "Creator:"
  - button "Creator":
    - text: Creator
    - img
  - text: "Verified:"
  - button "Verified":
    - text: Verified
    - img
  - button "PoE 2 Build autotests-focus-mode-published presentation Druid 0.3 TTE By admin_auto_tests+stg+ns@mobalyticshq.com Follow Updated on Oct 2, 2026 Track Build Add to Favorites 0 Share Focus Mode":
    - text: PoE 2 Build
    - heading "autotests-focus-mode-published" [level=1]
    - img "presentation"
    - text: Druid 0.3 TTE By
    - link "admin_auto_tests+stg+ns@mobalyticshq.com":
      - /url: /poe-2/profile/spy-man/builds
    - button "Follow":
      - img
      - text: Follow
    - text: Updated on Oct 2, 2026
    - button "Track Build":
      - img
      - text: Track Build
    - button "Add to Favorites":
      - img
      - text: Add to Favorites
    - button "0":
      - img
      - text: "0"
    - button "Share":
      - img
      - text: Share
    - button:
      - img
    - button "Focus Mode":
      - img
      - text: Focus Mode
  - heading "Equipment" [level=2]
  - button "Focus Mode New":
    - img
    - text: Focus Mode New
  - radiogroup:
    - radio "Set 1" [checked]
    - text: Set 1
    - radio "Set 2"
    - text: Set 2
  - text: Equipment Priority
  - img "poe-2 icon"
  - text: nikiheartj#6924
  - button "Track This Build":
    - img
    - text: Track This Build
  - button "Show All":
    - text: Show All
    - img
  - heading "Passive Tree" [level=2]
  - button "Focus Mode New":
    - img
    - text: Focus Mode New
  - text: "main: 123 123 set 1: 20 20 set 2: 20 20"
  - heading "Quest Rewards" [level=2]
  - button "Focus Mode New":
    - img
    - text: Focus Mode New
  - text: Check which quests you’ve completed on your character
  - img "poe-2 icon"
  - text: nikiheartj#6924
  - button "Track This Build":
    - img
    - text: Track This Build
  - radiogroup:
    - radio "Choices" [checked]
    - text: Choices
    - radio "Skill Points"
    - text: Skill Points
    - radio "Character Upgrades"
    - text: Character Upgrades
    - radio "All"
    - text: All
  - button "Collapse section" [expanded]:
    - text: Act 2
    - img
  - img
  - text: Valley of the Titans — Medallion Not Specified 2 choices
  - button "Collapse section" [expanded]:
    - text: Act 3
    - img
  - img
  - text: The Venom Crypts — Venom Draught Not Specified 3 choices
  - button "Collapse section" [expanded]:
    - text: Act 4
    - img
  - img
  - text: Whakapanu Island — Great White One Not Specified 2 choices
  - img
  - text: Halls of the Dead — Tawhoa's Test Not Specified 2 choices
  - img
  - text: Abandoned Prison — Goddess of Justice Not Specified 2 choices
  - img
  - text: Halls of the Dead — Tasalio's Test Not Specified 2 choices
  - img
  - text: Halls of the Dead — Ngamahu's Test Not Specified 2 choices
  - img
  - text: Halls of the Dead — Tribal Medicine Not Specified 2 choices
  - button "Collapse section" [expanded]:
    - text: Interlude
    - img
  - img
  - text: Qimah — Tabana's Pillar Not Specified 7 choices
  - button "Hide Rewards":
    - text: Hide Rewards
    - img
  - heading "Comments" [level=2]
  - text: "0"
  - button:
    - img
  - button:
    - img
  - button:
    - img
  - button:
    - img
  - button:
    - img
  - button:
    - img
  - button:
    - img
  - button:
    - img
  - textbox:
    - paragraph
  - text: Share your thoughts...Type @ to try game data 1000 characters remaining
  - button "Comment"
  - button "Newest":
    - text: Newest
    - img
  - heading "Build Planner Export" [level=2]
  - paragraph: Export all build variants directly to your game.
  - button "Download Build File":
    - img
    - text: Download Build File
  - button "How it Works"
  - heading "Table of Contents" [level=2]
  - link "1. Equipment":
    - /url: /poe-2/profile/spy-man/builds/qa-automation-build-page-fm-published#4b46748c-2c9b-4cb5-b49e-7d4dddb609b6-equipment-0
  - link "2. Passive Tree":
    - /url: /poe-2/profile/spy-man/builds/qa-automation-build-page-fm-published#739a0a0f-6bd0-4807-8096-eee5ae1617ec-passive-tree-0
  - link "3. Quest Rewards":
    - /url: /poe-2/profile/spy-man/builds/qa-automation-build-page-fm-published#1f661161-9a7a-45a8-a06a-5d8cca2a0dd3-quest-rewards-0
  - link "4. Comments":
    - /url: /poe-2/profile/spy-man/builds/qa-automation-build-page-fm-published#0a3c3ef3-3ae7-4b30-b766-1efe04030dfe-comments-0
  - button "Back to top"
  - heading "Featured Builds" [level=2]
  - link:
    - /url: /poe-2/builds/ssrasalways
  - text: My Build Updated on Sep 2, 2026
  - link:
    - /url: /poe-2/builds/89765
  - text: 12345678989 Updated on Aug 21, 2026
  - link:
    - /url: /poe-2/builds/monk-build
  - text: Monk Build Updated on Aug 20, 2026
  - link:
    - /url: /poe-2/builds/1234578
  - text: My Build Updated on Aug 12, 2026
  - link:
    - /url: /poe-2/builds/ababagalamaga256
  - text: STG smoke 1.263.4.777 Updated on Aug 12, 2026
  - link "Become a Creator Want to earn rewards by sharing your builds with your community? Join Creator Program":
    - /url: https://form.typeform.com/to/iDJST6r5#email=xxxxx
    - paragraph: Become a Creator
    - paragraph: Want to earn rewards by sharing your builds with your community?
    - button "Join Creator Program"
  - status
- region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixture';
  2  | import { Moba } from '../../app/page-object/moba';
  3  | 
  4  | test.use({ storageState: { cookies: [], origins: [] } });
  5  | 
  6  | test('User can open and close the perimeter map modal', async ({ page }) => {
  7  |   const moba = new Moba(page);
  8  | 
  9  |   await moba.mainURLs.openMarathonPerimeterMapPage();
  10 |   await moba.stPage.perimeterMapButton.first().click();
  11 |   await expect(moba.stPage.closeMapModalButton).toBeVisible();
  12 |   await moba.stPage.closeMapModalButton.click();
  13 |   await expect(moba.stPage.closeMapModalButton).not.toBeVisible();
  14 | });
  15 | 
  16 | test.describe('Focus Mode for published UG documents', () => {
  17 |     test('User can open and exit Focus Mode for published PoE 2 build', async ({ page, apiAuthAdmin }) => {
  18 |         const moba = new Moba(page);
  19 | 
  20 |         await moba.mainURLs.openUgPoe2PublishedBuildPage();
  21 |         await moba.ugBuildPage.openFocusMode();
> 22 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  23 |         await moba.ugBuildPage.exitFocusMode();
  24 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
  25 |         await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
  26 |     })
  27 | })
```