# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-ug-pages.test.js >> Creating UG Pages >> Create a classes page on WoW Forever project
- Location: e2e-tests/ngf/creating-ug-pages.test.js:126:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Create' })

```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - generic:
      - region "Notifications Alt+T"
```

# Test source

```ts
  1   | import { test } from '@playwright/test';
  2   | 
  3   | export class UgProfilePage {
  4   |   constructor(page) {
  5   |     this.createButton = page.getByRole('button', { name: 'Create' });
  6   |     this.deleteButton = page.getByRole('menuitem', { name: 'Delete' });
  7   |     this.buttonDeleteInModal = page.getByRole('button', { name: 'Delete' });
  8   |     this.dotesButton = page.locator('section').getByRole('button').filter({ hasText: /^$/ });
  9   |     this.buildButton = page.getByRole('menuitem', {
  10  |       name: 'Build Create a Build',
  11  |     });
  12  |     this.teamButton = page.getByRole('menuitem', {
  13  |       name: 'Team Create a Team',
  14  |     });
  15  |     this.classicButton = page.getByRole('menuitem', {
  16  |       name: 'Classic Create a Build',
  17  |     });
  18  |     this.guideButton = page.getByRole('menuitem', {
  19  |       name: 'Guide Create a Guide',
  20  |     });
  21  |     this.tierListButton = page.getByRole('menuitem', {
  22  |       name: 'Tier List Create a Tier List',
  23  |     });
  24  |     this.characterButton = page.getByRole('menuitem', {
  25  |       name: 'Character Create a Character',
  26  |     });
  27  |     this.classButton = page.getByRole('menuitem', {
  28  |       name: 'Create a Class Guide',
  29  |     });
  30  |     this.dungeonButton = page.getByRole('menuitem', {
  31  |       name: 'Create a Dungeon Guide',
  32  |     });
  33  |     this.questButton = page.getByRole('menuitem', {
  34  |       name: 'Create a Quest Guide',
  35  |     });
  36  |     this.raidButton = page.getByRole('menuitem', {
  37  |       name: 'Create a Raid Guide',
  38  |     });
  39  |     this.deckButton = page.getByRole('menuitem', { name: 'Create a Deck' });
  40  |     this.buildWidget = (pageName) => page.getByRole('main').filter({ hasText: `${pageName}` });
  41  |   }
  42  | 
  43  |   async gotoQuestsPlannerPage() {
  44  |     await test.step('Go to Quest Planner Page', async () => {
  45  |       await this.createButton.click();
  46  |       await this.questButton.click();
  47  |     });
  48  |   }
  49  | 
  50  |   async gotoDungeonsPlannerPage() {
  51  |     await test.step('Go to Dungeon Planner Page', async () => {
  52  |       await this.createButton.click();
  53  |       await this.dungeonButton.click();
  54  |     });
  55  |   }
  56  | 
  57  |   async gotoRaidsPlannerPage() {
  58  |     await test.step('Go to Raid Planner Page', async () => {
  59  |       await this.createButton.click();
  60  |       await this.raidButton.click();
  61  |     });
  62  |   }
  63  | 
  64  |   async gotoClassesPlannerPage() {
  65  |     await test.step('Go to Class Planner Page', async () => {
> 66  |       await this.createButton.click();
      |                               ^ Error: locator.click: Test timeout of 90000ms exceeded.
  67  |       await this.classButton.click();
  68  |     });
  69  |   }
  70  | 
  71  |   async gotoBuildPlannerPage() {
  72  |     await test.step('Go to Build Planner Page', async () => {
  73  |       await this.createButton.click();
  74  |       await this.buildButton.click();
  75  |     });
  76  |   }
  77  | 
  78  |   async gotoDeckPlannerPage() {
  79  |     await test.step('Go to Deck Planner Page', async () => {
  80  |       await this.createButton.click();
  81  |       await this.deckButton.click();
  82  |     });
  83  |   }
  84  | 
  85  |   async gotoCharacterPlannerPage() {
  86  |     await test.step('Go to Character Planner Page', async () => {
  87  |       await this.createButton.click();
  88  |       await this.characterButton.click();
  89  |     });
  90  |   }
  91  | 
  92  |   async gotoTeamPlannerPage() {
  93  |     await test.step('Go to Team Planner Page', async () => {
  94  |       await this.createButton.click();
  95  |       await this.teamButton.click();
  96  |     });
  97  |   }
  98  | 
  99  |   async gotoClassicPlannerPage() {
  100 |     await test.step('Go to Classic Planner Page', async () => {
  101 |       await this.createButton.click();
  102 |       await this.classicButton.click();
  103 |     });
  104 |   }
  105 | 
  106 |   async gotoTierListPlannerPage() {
  107 |     await test.step('Go to Tier List Planner Page', async () => {
  108 |       await this.createButton.click();
  109 |       await this.tierListButton.click();
  110 |     });
  111 |   }
  112 | 
  113 |   async gotoGuidePlannerPage() {
  114 |     await test.step('Go to Guide Planner Page', async () => {
  115 |       await this.createButton.click();
  116 |       await this.guideButton.click();
  117 |     });
  118 |   }
  119 | 
  120 |   async deleteBuild(pageName) {
  121 |     await test.step(`Delete ${pageName} build page`, async () => {
  122 |       await this.dotesButton.click();
  123 |       await this.deleteButton.click();
  124 |       await this.buttonDeleteInModal.click();
  125 |     });
  126 |   }
  127 | }
  128 | 
```