# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating UG Pages >> Create a build page on LoL project
- Location: e2e-tests/ngf.test.js:431:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('menuitem', { name: 'Build Create a Build' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /lol
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
      - generic [ref=e104]:
        - generic [ref=e105]:
          - link "DOWNLOAD APP" [ref=e106] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?isElectron=true&utm_campaign=hg4legG&utm_medium=owaa&utm_source=app
            - button "DOWNLOAD APP" [ref=e108]:
              - img [ref=e109]
              - text: DOWNLOAD APP
          - combobox [ref=e111]:
            - 'textbox "Game Name #Tag or Champion" [ref=e114]'
            - listbox
          - link "Gamebase" [ref=e116] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e117]: Gamebase
        - generic [ref=e119]:
          - link "A admin+stg+ns@mobalyticshq.com" [ref=e120] [cursor=pointer]:
            - /url: /lol/profile/new-pika4-2-439blm
            - generic [ref=e122]:
              - generic [ref=e124]: A
              - generic [ref=e126]: admin+stg+ns@mobalyticshq.com
          - button [ref=e128] [cursor=pointer]:
            - img [ref=e130]
      - generic [ref=e132]:
        - img "refresh" [ref=e137] [cursor=pointer]
        - link "Home" [ref=e140] [cursor=pointer]:
          - /url: /lol
          - img "Home" [ref=e142]
        - link "Summoner" [ref=e145] [cursor=pointer]:
          - /url: /lol/profile
          - img "Summoner" [ref=e147]
        - link "Game Highlights" [ref=e150] [cursor=pointer]:
          - /url: /lol/glp/smart-highlights-1
          - img "Game Highlights" [ref=e152]
        - link "GPI" [ref=e155] [cursor=pointer]:
          - /url: /lol/gpi
          - img "GPI" [ref=e157]
        - link "Challenges" [ref=e160] [cursor=pointer]:
          - /url: /lol/challenges
          - img "Challenges" [ref=e162]
        - link "Champions" [ref=e165] [cursor=pointer]:
          - /url: /lol/champions
          - img "Champions" [ref=e167]
        - link "Tier List" [ref=e170] [cursor=pointer]:
          - /url: /lol/tier-list
          - img "Tier List" [ref=e172]
        - link "Guides" [ref=e175] [cursor=pointer]:
          - /url: /lol/guides
          - img "Guides" [ref=e177]
        - link "Classic new" [ref=e180] [cursor=pointer]:
          - /url: /lol/classic
          - generic [ref=e182]:
            - img "Classic" [ref=e183]
            - text: new
      - main [ref=e186]:
        - generic [ref=e187]:
          - generic [ref=e190]:
            - generic [ref=e192]:
              - generic [ref=e194]: A
              - generic [ref=e196]: admin+stg+ns@mobalyticshq.com
              - link "Edit profile" [ref=e197] [cursor=pointer]:
                - /url: /lol/account-settings/profile
                - generic [ref=e198]: Edit profile
              - generic [ref=e199]:
                - generic [ref=e200]:
                  - generic [ref=e201]: new-pika4-2-439blm
                  - generic [ref=e202]: ∙
                  - generic [ref=e203]: Member Since May 15, 2025
                - generic [ref=e204]: ∙
                - generic [ref=e205]:
                  - link "12" [ref=e206] [cursor=pointer]:
                    - /url: https://discord.gg/12
                    - img [ref=e208]
                    - generic [ref=e209]: "12"
                  - generic [ref=e210]: ∙
                  - link "elonmusksu" [ref=e211] [cursor=pointer]:
                    - /url: https://x.com/elonmusksu?lang=en44
                    - img [ref=e213]
                    - generic [ref=e214]: elonmusksu
                  - generic [ref=e215]: ∙
                  - link "YouTube" [ref=e216] [cursor=pointer]:
                    - /url: https://www.youtube.com/f11
                    - img [ref=e218]
                    - generic [ref=e219]: YouTube
              - paragraph [ref=e227]: asdasdasd ad sadas das das d22
            - tablist [ref=e230]:
              - tab "Overview" [ref=e231] [cursor=pointer]:
                - link "Overview" [ref=e233]:
                  - /url: https://stg.mobalytics.gg/profile/new-pika4-2-439blm
              - tab "PoE" [ref=e234] [cursor=pointer]:
                - link "PoE" [ref=e236]:
                  - /url: https://stg.mobalytics.gg/poe/profile/new-pika4-2-439blm
                  - img [ref=e238]
                  - text: PoE
              - tab "PoE 2" [ref=e239] [cursor=pointer]:
                - link "PoE 2" [ref=e241]:
                  - /url: https://stg.mobalytics.gg/poe-2/profile/new-pika4-2-439blm
                  - img [ref=e243]
                  - text: PoE 2
              - tab "LoL" [selected] [ref=e244] [cursor=pointer]:
                - link "LoL" [ref=e246]:
                  - /url: https://stg.mobalytics.gg/lol/profile/new-pika4-2-439blm
                  - img [ref=e248]
                  - text: LoL
              - tab "TFT" [ref=e250] [cursor=pointer]:
                - link "TFT" [ref=e252]:
                  - /url: https://stg.mobalytics.gg/tft/profile/new-pika4-2-439blm
                  - img [ref=e254]
                  - text: TFT
              - tab "The Bazaar" [ref=e255] [cursor=pointer]:
                - link "The Bazaar" [ref=e257]:
                  - /url: https://stg.mobalytics.gg/the-bazaar/profile/new-pika4-2-439blm
                  - img [ref=e259]
                  - text: The Bazaar
              - tab "Diablo 4" [ref=e260] [cursor=pointer]:
                - link "Diablo 4" [ref=e262]:
                  - /url: https://stg.mobalytics.gg/diablo-4/profile/new-pika4-2-439blm
                  - img [ref=e264]
                  - text: Diablo 4
              - tab "Monster Hunter Wilds" [ref=e265] [cursor=pointer]:
                - link "Monster Hunter Wilds" [ref=e267]:
                  - /url: https://stg.mobalytics.gg/mhw/profile/new-pika4-2-439blm
                  - img [ref=e269]
                  - text: Monster Hunter Wilds
              - tab "ZZZ" [ref=e270] [cursor=pointer]:
                - link "ZZZ" [ref=e272]:
                  - /url: https://stg.mobalytics.gg/zzz/profile/new-pika4-2-439blm
                  - img [ref=e274]
                  - text: ZZZ
              - tab "Nightreign" [ref=e275] [cursor=pointer]:
                - link "Nightreign" [ref=e277]:
                  - /url: https://stg.mobalytics.gg/elden-ring-nightreign/profile/new-pika4-2-439blm
                  - img [ref=e279]
                  - text: Nightreign
              - tab "Deadlock" [ref=e280] [cursor=pointer]:
                - link "Deadlock" [ref=e282]:
                  - /url: https://stg.mobalytics.gg/deadlock/profile/new-pika4-2-439blm
                  - img [ref=e284]
                  - text: Deadlock
              - tab "Destiny 2" [ref=e285] [cursor=pointer]:
                - link "Destiny 2" [ref=e287]:
                  - /url: https://stg.mobalytics.gg/destiny-2/profile/new-pika4-2-439blm
                  - img [ref=e289]
                  - text: Destiny 2
          - generic [ref=e290]:
            - generic [ref=e292]:
              - tablist [ref=e294]:
                - tab "Krayvanz" [selected] [ref=e295] [cursor=pointer]:
                  - generic [ref=e297]:
                    - img [ref=e298]
                    - generic [ref=e299]: Krayvanz
              - button "Create" [expanded] [ref=e306] [cursor=pointer]:
                - img [ref=e308]
                - generic [ref=e309]: Create
                - img [ref=e311]
              - tablist [ref=e315]:
                - tab "Classic" [ref=e316] [cursor=pointer]:
                  - generic [ref=e317]: Classic
                - tab "Guides" [ref=e318] [cursor=pointer]:
                  - generic [ref=e319]: Guides
                - tab "Tier Lists" [ref=e320] [cursor=pointer]:
                  - generic [ref=e321]: Tier Lists
            - generic [ref=e324]:
              - img "No games were played in the last 30 days" [ref=e325]
              - generic [ref=e326]: No games were played in the last 30 days
              - generic [ref=e327]: If this is your account, get back to Summoner's Rift and play! Your new matches will be here when you come back.
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e328]:
    - menu "Create" [active] [ref=e331]:
      - menuitem "Classic Create a Build" [ref=e332] [cursor=pointer]:
        - generic [ref=e334]:
          - generic [ref=e335]: Classic
          - generic [ref=e336]: Create a Build
      - menuitem "Guide Create a Guide" [ref=e337] [cursor=pointer]:
        - generic [ref=e339]:
          - generic [ref=e340]: Guide
          - generic [ref=e341]: Create a Guide
      - menuitem "Tier List Create a Tier List" [ref=e342] [cursor=pointer]:
        - generic [ref=e344]:
          - generic [ref=e345]: Tier List
          - generic [ref=e346]: Create a Tier List
    - button "Dismiss" [ref=e348]
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
  15 |     this.guideButton = page.getByRole('menuitem', {
  16 |       name: 'Guide Create a Guide',
  17 |     });
  18 |     this.tierListButton = page.getByRole('menuitem', {
  19 |       name: 'Tier List Create a Tier List',
  20 |     });
  21 |     this.characterButton = page.getByRole('menuitem', {
  22 |       name: 'Character Create a Character',
  23 |     });
  24 |     this.deckButton = page.getByRole('menuitem', { name: 'Create a Deck' });
  25 |     this.buildWidget = (pageName) => page.getByRole('main').filter({ hasText: `${pageName}` });
  26 |   }
  27 | 
  28 |   async gotoBuildPlannerPage() {
  29 |     await test.step('Go to Build Planner Page', async () => {
  30 |       await this.createButton.click();
> 31 |       await this.buildButton.click();
     |                              ^ Error: locator.click: Test timeout of 90000ms exceeded.
  32 |     });
  33 |   }
  34 | 
  35 |   async gotoDeckPlannerPage() {
  36 |     await test.step('Go to Deck Planner Page', async () => {
  37 |       await this.createButton.click();
  38 |       await this.deckButton.click();
  39 |     });
  40 |   }
  41 | 
  42 |   async gotoCharacterPlannerPage() {
  43 |     await test.step('Go to Character Planner Page', async () => {
  44 |       await this.createButton.click();
  45 |       await this.characterButton.click();
  46 |     });
  47 |   }
  48 | 
  49 |   async gotoTeamPlannerPage() {
  50 |     await test.step('Go to Team Planner Page', async () => {
  51 |       await this.createButton.click();
  52 |       await this.teamButton.click();
  53 |     });
  54 |   }
  55 | 
  56 |   async gotoTierListPlannerPage() {
  57 |     await test.step('Go to Tier List Planner Page', async () => {
  58 |       await this.createButton.click();
  59 |       await this.tierListButton.click();
  60 |     });
  61 |   }
  62 | 
  63 |   async gotoGuidePlannerPage() {
  64 |     await test.step('Go to Guide Planner Page', async () => {
  65 |       await this.createButton.click();
  66 |       await this.guideButton.click();
  67 |     });
  68 |   }
  69 | 
  70 |   async deleteBuild(pageName) {
  71 |     await test.step(`Delete ${pageName} build page`, async () => {
  72 |       await this.dotesButton.click();
  73 |       await this.deleteButton.click();
  74 |       await this.buttonDeleteInModal.click();
  75 |     });
  76 |   }
  77 | }
  78 | 
```