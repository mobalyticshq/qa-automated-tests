# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-ug-pages.test.js >> Creating UG Pages >> Create a guide page on Riftbound project
- Location: e2e-tests/ngf/creating-ug-pages.test.js:39:5

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
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Web server is down Error code 521" [level=1] [ref=e5]:
      - generic [ref=e6]: Web server is down
      - text: Error code 521
    - generic [ref=e7]:
      - text: Visit
      - link "cloudflare.com" [ref=e8] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_521&utm_campaign=stg.mobalytics.gg
      - text: for more information.
    - generic [ref=e9]: 2026-08-19 13:42:21 UTC
  - generic [ref=e12]:
    - generic [ref=e13]:
      - text: You
      - heading "Browser" [level=3] [ref=e17]
      - text: Working
    - generic [ref=e18]:
      - link [ref=e20] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_521&utm_campaign=stg.mobalytics.gg
      - text: Chicago
      - heading "Cloudflare" [level=3] [ref=e23]:
        - link "Cloudflare" [ref=e24] [cursor=pointer]:
          - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_521&utm_campaign=stg.mobalytics.gg
      - text: Working
    - generic [ref=e25]:
      - text: stg.mobalytics.gg
      - heading "Host" [level=3] [ref=e29]
      - text: Error
  - generic [ref=e31]:
    - generic [ref=e32]:
      - heading "What happened?" [level=2] [ref=e33]
      - paragraph [ref=e34]: The web server is not returning a connection. As a result, the web page is not displaying.
    - generic [ref=e35]:
      - heading "What can I do?" [level=2] [ref=e36]
      - heading "If you are a visitor of this website:" [level=3] [ref=e37]
      - paragraph [ref=e38]: Please try again in a few minutes.
      - heading "If you are the owner of this website:" [level=3] [ref=e39]
      - paragraph [ref=e40]:
        - text: Contact your hosting provider letting them know your web server is not responding.
        - link "Additional troubleshooting information" [ref=e41] [cursor=pointer]:
          - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-521/
        - text: .
  - paragraph [ref=e43]:
    - generic [ref=e44]:
      - text: "Cloudflare Ray ID:"
      - strong [ref=e45]: a2d994bdeca56157
    - text: •
    - generic [ref=e46]:
      - text: "Your IP:"
      - button "Click to reveal" [ref=e47] [cursor=pointer]
      - text: •
    - generic [ref=e48]:
      - text: Performance & security by
      - link "Cloudflare" [ref=e49] [cursor=pointer]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_521&utm_campaign=stg.mobalytics.gg
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | export class UgProfilePage {
  4  |   constructor(page) {
  5  |     this.createButton = page.getByRole('button', { name: 'Create' });
  6  |     this.deleteButton = page.getByRole('menuitem', { name: 'Delete' });
  7  |     this.buttonDeleteInModal = page.getByRole('button', { name: 'Delete' });
  8  |     this.dotesButton = page.locator('section').getByRole('button').filter({ hasText: /^$/ });
  9  |     this.buildButton = page.getByRole('menuitem', {
  10 |       name: 'Build Create a Build',
  11 |     });
  12 |     this.teamButton = page.getByRole('menuitem', {
  13 |       name: 'Team Create a Team',
  14 |     });
  15 |     this.classicButton = page.getByRole('menuitem', {
  16 |       name: 'Classic Create a Build',
  17 |     });
  18 |     this.guideButton = page.getByRole('menuitem', {
  19 |       name: 'Guide Create a Guide',
  20 |     });
  21 |     this.tierListButton = page.getByRole('menuitem', {
  22 |       name: 'Tier List Create a Tier List',
  23 |     });
  24 |     this.characterButton = page.getByRole('menuitem', {
  25 |       name: 'Character Create a Character',
  26 |     });
  27 |     this.deckButton = page.getByRole('menuitem', { name: 'Create a Deck' });
  28 |     this.buildWidget = (pageName) => page.getByRole('main').filter({ hasText: `${pageName}` });
  29 |   }
  30 | 
  31 |   async gotoBuildPlannerPage() {
  32 |     await test.step('Go to Build Planner Page', async () => {
  33 |       await this.createButton.click();
  34 |       await this.buildButton.click();
  35 |     });
  36 |   }
  37 | 
  38 |   async gotoDeckPlannerPage() {
  39 |     await test.step('Go to Deck Planner Page', async () => {
  40 |       await this.createButton.click();
  41 |       await this.deckButton.click();
  42 |     });
  43 |   }
  44 | 
  45 |   async gotoCharacterPlannerPage() {
  46 |     await test.step('Go to Character Planner Page', async () => {
  47 |       await this.createButton.click();
  48 |       await this.characterButton.click();
  49 |     });
  50 |   }
  51 | 
  52 |   async gotoTeamPlannerPage() {
  53 |     await test.step('Go to Team Planner Page', async () => {
  54 |       await this.createButton.click();
  55 |       await this.teamButton.click();
  56 |     });
  57 |   }
  58 | 
  59 |   async gotoClassicPlannerPage() {
  60 |     await test.step('Go to Classic Planner Page', async () => {
  61 |       await this.createButton.click();
  62 |       await this.classicButton.click();
  63 |     });
  64 |   }
  65 | 
  66 |   async gotoTierListPlannerPage() {
  67 |     await test.step('Go to Tier List Planner Page', async () => {
  68 |       await this.createButton.click();
  69 |       await this.tierListButton.click();
  70 |     });
  71 |   }
  72 | 
  73 |   async gotoGuidePlannerPage() {
  74 |     await test.step('Go to Guide Planner Page', async () => {
> 75 |       await this.createButton.click();
     |                               ^ Error: locator.click: Test timeout of 90000ms exceeded.
  76 |       await this.guideButton.click();
  77 |     });
  78 |   }
  79 | 
  80 |   async deleteBuild(pageName) {
  81 |     await test.step(`Delete ${pageName} build page`, async () => {
  82 |       await this.dotesButton.click();
  83 |       await this.deleteButton.click();
  84 |       await this.buttonDeleteInModal.click();
  85 |     });
  86 |   }
  87 | }
  88 | 
```