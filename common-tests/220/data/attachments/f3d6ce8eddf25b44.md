# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-ug-pages.test.js >> Creating UG Pages >> Create a deck page on Riftbound project
- Location: e2e-tests/ngf/creating-ug-pages.test.js:224:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('menuitem', { name: 'Create a Deck' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Play games to unlock free Logitech G Pro gear, skins, and Amazon/Steam Cards → Activate Pass Close":
        - /url: https://mobalytics.gg/reward-pass/01a1a4a6-7885-7cc1-95a4-e0b3aa0bc53e
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e11]: Play games to unlock free Logitech G Pro gear, skins, and Amazon/Steam Cards
            - button "→ Activate Pass" [ref=e12]
          - img "Close" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e16]:
          - link [ref=e18] [cursor=pointer]:
            - /url: /riftbound
            - img "Mobalytics" [ref=e19]
          - generic [ref=e21]:
            - link "Diablo 4 Diablo 4" [ref=e23] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/diablo-4
              - generic [ref=e25]:
                - img "Diablo 4" [ref=e27]
                - generic [ref=e28]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e30] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe-2
              - generic [ref=e32]:
                - img "Path of Exile 2" [ref=e34]
                - generic [ref=e35]: PoE 2
            - link "Path of Exile PoE" [ref=e37] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe
              - generic [ref=e39]:
                - img "Path of Exile" [ref=e41]
                - generic [ref=e42]: PoE
            - link "Deadlock Deadlock" [ref=e44] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e46]:
                - img "Deadlock" [ref=e48]
                - generic [ref=e49]: Deadlock
            - link "Riftbound Riftbound" [ref=e51] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/riftbound
              - generic [ref=e53]:
                - img "Riftbound" [ref=e55]
                - generic [ref=e56]: Riftbound
            - link "Zenless Zone Zero ZZZ" [ref=e58] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/zzz
              - generic [ref=e60]:
                - img "Zenless Zone Zero" [ref=e62]
                - generic [ref=e63]: ZZZ
            - link "Marvel Rivals Marvel Rivals" [ref=e65] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/marvel-rivals
              - generic [ref=e67]:
                - img "Marvel Rivals" [ref=e69]
                - generic [ref=e70]: Marvel Rivals
            - link "The Bazaar The Bazaar" [ref=e72] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/the-bazaar
              - generic [ref=e74]:
                - img "The Bazaar" [ref=e76]
                - generic [ref=e77]: The Bazaar
            - link "2XKO 2XKO" [ref=e79] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/2xko
              - generic [ref=e81]:
                - img "2XKO" [ref=e83]
                - generic [ref=e84]: 2XKO
            - link "Hades 2 Hades 2" [ref=e86] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/hades-2
              - generic [ref=e88]:
                - img "Hades 2" [ref=e90]
                - generic [ref=e91]: Hades 2
            - link "Overwatch Overwatch" [ref=e93] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/overwatch
              - generic [ref=e95]:
                - img "Overwatch" [ref=e97]
                - generic [ref=e98]: Overwatch
            - button [ref=e100] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=e103] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/gamebase
            - generic [ref=e104]:
              - img "Gamebase" [ref=e106]
              - generic [ref=e107]: Gamebase
              - generic [ref=e108]: Reviews, Previews, & More
        - generic [ref=e109]:
          - link [ref=e110] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-riftbound&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=e112]
          - button "Play & Get Free Rewards" [ref=e115] [cursor=pointer]
          - generic [ref=e118]:
            - button "Remove Ads" [ref=e119] [cursor=pointer]
            - button "admin_auto_tests+stg+ns@mobalyticshq.com" [ref=e121] [cursor=pointer]:
              - generic [ref=e123]:
                - generic [ref=e124]: A
                - generic [ref=e126]: admin_auto_tests+stg+ns@mobalyticshq.com
            - button "Notifications" [ref=e129] [cursor=pointer]
        - generic [ref=e132]:
          - link [ref=e135] [cursor=pointer]:
            - /url: /riftbound
            - img "Home" [ref=e136]
            - generic: Home
          - link [ref=e139] [cursor=pointer]:
            - /url: /riftbound/profile
            - img "Profile" [ref=e140]
            - generic: Profile
          - link [ref=e143] [cursor=pointer]:
            - /url: /riftbound/decks
            - img "Decks" [ref=e144]
            - generic: Decks
          - link [ref=e147] [cursor=pointer]:
            - /url: /riftbound/tournaments
            - img "Tournaments" [ref=e148]
            - generic: Tournaments
          - link [ref=e151] [cursor=pointer]:
            - /url: /riftbound/tier-list
            - img "Tier List" [ref=e152]
            - generic: Tier List
          - link [ref=e155] [cursor=pointer]:
            - /url: /riftbound/guides
            - img "Guides" [ref=e156]
            - generic: Guides
          - link [ref=e159] [cursor=pointer]:
            - /url: /riftbound/gallery
            - img "Gallery" [ref=e160]
            - generic: Gallery
        - generic [ref=e162]:
          - main [ref=e163]:
            - generic [ref=e164]:
              - img "rb rp2 takeover" [ref=e165] [cursor=pointer]
              - generic [ref=e167]:
                - generic [ref=e170]:
                  - generic [ref=e172]:
                    - generic [ref=e173]: A
                    - generic [ref=e175]: admin_auto_tests+stg+ns@mobalyticshq.com
                    - generic [ref=e177]:
                      - button "Copy UUID" [ref=e178] [cursor=pointer]
                      - link "Edit profile" [ref=e180] [cursor=pointer]:
                        - /url: /riftbound/account-settings/profile
                    - generic [ref=e182]: 1 Follower
                    - generic [ref=e184]:
                      - generic [ref=e185]: spy-man
                      - generic [ref=e186]: ∙
                      - generic [ref=e187]: Member Since Dec 4, 2025
                    - paragraph [ref=e195]: "11111"
                  - tablist [ref=e198]:
                    - tab [ref=e199] [cursor=pointer]:
                      - link "Overview" [ref=e201]:
                        - /url: https://stg.mobalytics.gg/profile/spy-man
                    - tab [ref=e202] [cursor=pointer]:
                      - link [ref=e204]:
                        - /url: https://stg.mobalytics.gg/diablo-4/profile/spy-man
                    - tab [ref=e207] [cursor=pointer]:
                      - link [ref=e209]:
                        - /url: https://stg.mobalytics.gg/poe-2/profile/spy-man
                    - tab [ref=e212] [cursor=pointer]:
                      - link [ref=e214]:
                        - /url: https://stg.mobalytics.gg/poe/profile/spy-man
                    - tab [ref=e217] [cursor=pointer]:
                      - link [ref=e219]:
                        - /url: https://stg.mobalytics.gg/deadlock/profile/spy-man
                    - tab [selected] [ref=e222] [cursor=pointer]:
                      - link [ref=e224]:
                        - /url: https://stg.mobalytics.gg/riftbound/profile/spy-man
                    - tab [ref=e228] [cursor=pointer]:
                      - link [ref=e230]:
                        - /url: https://stg.mobalytics.gg/zzz/profile/spy-man
                    - tab [ref=e233] [cursor=pointer]:
                      - link [ref=e235]:
                        - /url: https://stg.mobalytics.gg/marvel-rivals/profile/spy-man
                    - tab [ref=e238] [cursor=pointer]:
                      - link [ref=e240]:
                        - /url: https://stg.mobalytics.gg/the-bazaar/profile/spy-man
                    - tab [ref=e243] [cursor=pointer]:
                      - link [ref=e245]:
                        - /url: https://stg.mobalytics.gg/2xko/profile/spy-man
                    - tab [ref=e248] [cursor=pointer]:
                      - link [ref=e250]:
                        - /url: https://stg.mobalytics.gg/hades-2/profile/spy-man
                    - tab [ref=e253] [cursor=pointer]:
                      - link [ref=e255]:
                        - /url: https://stg.mobalytics.gg/overwatch/profile/spy-man
                    - tab [ref=e258] [cursor=pointer]:
                      - link [ref=e260]:
                        - /url: https://stg.mobalytics.gg/mhw/profile/spy-man
                    - tab [ref=e263] [cursor=pointer]:
                      - link [ref=e265]:
                        - /url: https://stg.mobalytics.gg/elden-ring-nightreign/profile/spy-man
                    - tab [ref=e268] [cursor=pointer]:
                      - link [ref=e270]:
                        - /url: https://stg.mobalytics.gg/borderlands-4/profile/spy-man
                - generic [ref=e274]:
                  - generic [ref=e275]:
                    - generic [ref=e276]:
                      - button "Create" [active] [ref=e281] [cursor=pointer]
                      - tablist [ref=e290]:
                        - tab "Tier Lists" [selected] [ref=e291] [cursor=pointer]
                        - tab "Guides" [ref=e294] [cursor=pointer]
                        - tab "Tournaments" [ref=e296] [cursor=pointer]
                        - tab "Decks" [ref=e298] [cursor=pointer]
                    - generic [ref=e305]:
                      - radiogroup [ref=e307]:
                        - generic [ref=e311] [cursor=pointer]:
                          - radio "Favorite Tier Lists" [checked] [ref=e313]
                          - generic [ref=e314]: Favorite Tier Lists
                        - generic [ref=e319] [cursor=pointer]:
                          - radio "Following" [ref=e321]
                          - generic [ref=e322]: Following
                        - generic [ref=e326] [cursor=pointer]:
                          - radio "My Tier Lists" [ref=e328]
                          - generic [ref=e329]: My Tier Lists
                      - generic "select" [ref=e334]:
                        - combobox [ref=e337]
                        - button "Verified" [ref=e340] [cursor=pointer]
                      - generic "select" [ref=e346]:
                        - combobox [ref=e349]
                        - button "Featured" [ref=e352] [cursor=pointer]
                  - generic [ref=e359]:
                    - generic [ref=e360]: Your favorites are private. Only you can see them
                    - generic [ref=e363]:
                      - generic [ref=e364]: No favorite Tier Lists
                      - generic [ref=e365]: You don’t have have any favorite Tier Lists that match active filters
            - generic [ref=e367] [cursor=pointer]
          - complementary [ref=e371]:
            - generic [ref=e372]:
              - generic [ref=e374]:
                - generic [ref=e376] [cursor=pointer]:
                  - generic [ref=e377]: Advertisement
                  - generic [ref=e378]: Remove Ads
                - generic [ref=e384] [cursor=pointer]:
                  - generic [ref=e385]: Remove all ads
                  - generic [ref=e386]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e387]
              - generic [ref=e389]:
                - generic [ref=e391] [cursor=pointer]:
                  - generic [ref=e392]: Advertisement
                  - generic [ref=e393]: Remove Ads
                - generic [ref=e399] [cursor=pointer]:
                  - generic [ref=e400]: Remove all ads
                  - generic [ref=e401]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e402]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e405]:
    - banner [ref=e406]:
      - generic [ref=e407] [cursor=pointer]:
        - generic [ref=e408]: Advertisement
        - generic [ref=e409]: Remove Ads
    - generic [ref=e413] [cursor=pointer]:
      - generic [ref=e414]: Remove all ads
      - generic [ref=e415]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e416]
  - button "Do Not Sell or Share My Personal Information" [ref=e420] [cursor=pointer]:
    - paragraph [ref=e422]: Do Not Sell or Share My Personal Information
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
  41  |     this.profilePage = page.locator('#container');
  42  |   }
  43  | 
  44  |   async gotoQuestsPlannerPage() {
  45  |     await test.step('Go to Quest Planner Page', async () => {
  46  |       await this.createButton.click();
  47  |       await this.questButton.click();
  48  |     });
  49  |   }
  50  | 
  51  |   async gotoDungeonsPlannerPage() {
  52  |     await test.step('Go to Dungeon Planner Page', async () => {
  53  |       await this.createButton.click();
  54  |       await this.dungeonButton.click();
  55  |     });
  56  |   }
  57  | 
  58  |   async gotoRaidsPlannerPage() {
  59  |     await test.step('Go to Raid Planner Page', async () => {
  60  |       await this.createButton.click();
  61  |       await this.raidButton.click();
  62  |     });
  63  |   }
  64  | 
  65  |   async gotoClassesPlannerPage() {
  66  |     await test.step('Go to Class Planner Page', async () => {
  67  |       await this.createButton.click();
  68  |       await this.classButton.click();
  69  |     });
  70  |   }
  71  | 
  72  |   async gotoBuildPlannerPage() {
  73  |     await test.step('Go to Build Planner Page', async () => {
  74  |       await this.createButton.click();
  75  |       await this.buildButton.click();
  76  |     });
  77  |   }
  78  | 
  79  |   async gotoDeckPlannerPage() {
  80  |     await test.step('Go to Deck Planner Page', async () => {
  81  |       await this.createButton.click();
> 82  |       await this.deckButton.click();
      |                             ^ Error: locator.click: Test timeout of 90000ms exceeded.
  83  |     });
  84  |   }
  85  | 
  86  |   async gotoCharacterPlannerPage() {
  87  |     await test.step('Go to Character Planner Page', async () => {
  88  |       await this.createButton.click();
  89  |       await this.characterButton.click();
  90  |     });
  91  |   }
  92  | 
  93  |   async gotoTeamPlannerPage() {
  94  |     await test.step('Go to Team Planner Page', async () => {
  95  |       await this.createButton.click();
  96  |       await this.teamButton.click();
  97  |     });
  98  |   }
  99  | 
  100 |   async gotoClassicPlannerPage() {
  101 |     await test.step('Go to Classic Planner Page', async () => {
  102 |       await this.createButton.click();
  103 |       await this.classicButton.click();
  104 |     });
  105 |   }
  106 | 
  107 |   async gotoTierListPlannerPage() {
  108 |     await test.step('Go to Tier List Planner Page', async () => {
  109 |       await this.createButton.click();
  110 |       await this.tierListButton.click();
  111 |     });
  112 |   }
  113 | 
  114 |   async gotoGuidePlannerPage() {
  115 |     await test.step('Go to Guide Planner Page', async () => {
  116 |       await this.createButton.click();
  117 |       await this.guideButton.click();
  118 |     });
  119 |   }
  120 | 
  121 |   async deleteBuild(pageName) {
  122 |     await test.step(`Delete ${pageName} build page`, async () => {
  123 |       await this.dotesButton.click();
  124 |       await this.deleteButton.click();
  125 |       await this.buttonDeleteInModal.click();
  126 |     });
  127 |   }
  128 | }
  129 | 
```