# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-ug-pages.test.js >> Creating UG Pages >> Create a tier-list page on The Bazaar project
- Location: e2e-tests/ngf/creating-ug-pages.test.js:63:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('menuitem', { name: 'Tier List Create a Tier List' })

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
            - /url: /the-bazaar
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
          - button "Play & Get Free Rewards" [ref=e111] [cursor=pointer]
          - generic [ref=e114]:
            - button "Remove Ads" [ref=e115] [cursor=pointer]
            - button "admin_auto_tests+stg+ns@mobalyticshq.com" [ref=e117] [cursor=pointer]:
              - generic [ref=e119]:
                - generic [ref=e120]: A
                - generic [ref=e122]: admin_auto_tests+stg+ns@mobalyticshq.com
            - button "Notifications" [ref=e125] [cursor=pointer]
        - generic [ref=e128]:
          - link [ref=e131] [cursor=pointer]:
            - /url: /the-bazaar
            - img "Home" [ref=e132]
            - generic: Home
          - link [ref=e135] [cursor=pointer]:
            - /url: /the-bazaar/profile
            - img "Profile" [ref=e136]
            - generic: Profile
          - link [ref=e139] [cursor=pointer]:
            - /url: /the-bazaar/planner/builds
            - img "Build Planner" [ref=e140]
            - generic: Build Planner
          - link [ref=e143] [cursor=pointer]:
            - /url: /the-bazaar/builds
            - img "Builds" [ref=e144]
            - generic: Builds
          - link [ref=e147] [cursor=pointer]:
            - /url: /the-bazaar/guides/meta-builds
            - img "Meta Builds" [ref=e148]
            - generic: Meta Builds
          - link [ref=e151] [cursor=pointer]:
            - /url: /the-bazaar/heroes
            - img "Heroes" [ref=e152]
            - generic: Heroes
          - link [ref=e155] [cursor=pointer]:
            - /url: /the-bazaar/database/items-and-enchantments
            - img "Items | Skills" [ref=e156]
            - generic: Items | Skills
          - link [ref=e159] [cursor=pointer]:
            - /url: /the-bazaar/guides
            - img "Guides" [ref=e160]
            - generic: Guides
          - link [ref=e163] [cursor=pointer]:
            - /url: /the-bazaar/guides/pve-encounters-and-drops
            - img "PvE Monsters" [ref=e164]
            - generic: PvE Monsters
        - generic [ref=e166]:
          - main [ref=e167]:
            - generic [ref=e168]:
              - img "the-bazaar rp2 takeover" [ref=e169] [cursor=pointer]
              - generic [ref=e171]:
                - generic [ref=e174]:
                  - generic [ref=e176]:
                    - generic [ref=e177]: A
                    - generic [ref=e179]: admin_auto_tests+stg+ns@mobalyticshq.com
                    - generic [ref=e181]:
                      - button "Copy UUID" [ref=e182] [cursor=pointer]
                      - link "Edit profile" [ref=e184] [cursor=pointer]:
                        - /url: /the-bazaar/account-settings/profile
                    - generic [ref=e186]: 1 Follower
                    - generic [ref=e188]:
                      - generic [ref=e189]: spy-man
                      - generic [ref=e190]: ∙
                      - generic [ref=e191]: Member Since Dec 4, 2025
                    - paragraph [ref=e199]: "11111"
                  - tablist [ref=e202]:
                    - tab [ref=e203] [cursor=pointer]:
                      - link "Overview" [ref=e205]:
                        - /url: https://stg.mobalytics.gg/profile/spy-man
                    - tab [ref=e206] [cursor=pointer]:
                      - link [ref=e208]:
                        - /url: https://stg.mobalytics.gg/diablo-4/profile/spy-man
                    - tab [ref=e211] [cursor=pointer]:
                      - link [ref=e213]:
                        - /url: https://stg.mobalytics.gg/poe-2/profile/spy-man
                    - tab [ref=e216] [cursor=pointer]:
                      - link [ref=e218]:
                        - /url: https://stg.mobalytics.gg/poe/profile/spy-man
                    - tab [ref=e221] [cursor=pointer]:
                      - link [ref=e223]:
                        - /url: https://stg.mobalytics.gg/deadlock/profile/spy-man
                    - tab [ref=e226] [cursor=pointer]:
                      - link [ref=e228]:
                        - /url: https://stg.mobalytics.gg/riftbound/profile/spy-man
                    - tab [ref=e231] [cursor=pointer]:
                      - link [ref=e233]:
                        - /url: https://stg.mobalytics.gg/zzz/profile/spy-man
                    - tab [ref=e236] [cursor=pointer]:
                      - link [ref=e238]:
                        - /url: https://stg.mobalytics.gg/marvel-rivals/profile/spy-man
                    - tab [selected] [ref=e241] [cursor=pointer]:
                      - link [ref=e243]:
                        - /url: https://stg.mobalytics.gg/the-bazaar/profile/spy-man
                    - tab [ref=e247] [cursor=pointer]:
                      - link [ref=e249]:
                        - /url: https://stg.mobalytics.gg/2xko/profile/spy-man
                    - tab [ref=e252] [cursor=pointer]:
                      - link [ref=e254]:
                        - /url: https://stg.mobalytics.gg/hades-2/profile/spy-man
                    - tab [ref=e257] [cursor=pointer]:
                      - link [ref=e259]:
                        - /url: https://stg.mobalytics.gg/overwatch/profile/spy-man
                    - tab [ref=e262] [cursor=pointer]:
                      - link [ref=e264]:
                        - /url: https://stg.mobalytics.gg/mhw/profile/spy-man
                    - tab [ref=e267] [cursor=pointer]:
                      - link [ref=e269]:
                        - /url: https://stg.mobalytics.gg/elden-ring-nightreign/profile/spy-man
                    - tab [ref=e272] [cursor=pointer]:
                      - link [ref=e274]:
                        - /url: https://stg.mobalytics.gg/borderlands-4/profile/spy-man
                - generic [ref=e278]:
                  - generic [ref=e279]:
                    - generic [ref=e280]:
                      - button "Create" [active] [ref=e285] [cursor=pointer]
                      - tablist [ref=e294]:
                        - tab "Builds" [selected] [ref=e295] [cursor=pointer]
                        - tab "Guides" [ref=e298] [cursor=pointer]
                        - tab "Tier Lists" [ref=e300] [cursor=pointer]
                    - generic [ref=e307]:
                      - radiogroup [ref=e309]:
                        - generic [ref=e313] [cursor=pointer]:
                          - radio "Favorite Builds" [checked] [ref=e315]
                          - generic [ref=e316]: Favorite Builds
                        - generic [ref=e321] [cursor=pointer]:
                          - radio "Following" [ref=e323]
                          - generic [ref=e324]: Following
                        - generic [ref=e328] [cursor=pointer]:
                          - radio "My Builds" [ref=e330]
                          - generic [ref=e331]: My Builds
                      - generic "select" [ref=e336]:
                        - combobox [ref=e339]
                        - button "Heroes" [ref=e342] [cursor=pointer]
                      - generic "select" [ref=e348]:
                        - combobox [ref=e351]
                        - button "Creators" [ref=e354] [cursor=pointer]
                  - generic [ref=e361]:
                    - generic [ref=e362]: Your favorites are private. Only you can see them
                    - generic [ref=e365]:
                      - generic [ref=e366]: No favorite Builds
                      - generic [ref=e367]: You don’t have have any favorite Builds that match active filters
            - generic [ref=e369] [cursor=pointer]
          - complementary [ref=e373]:
            - generic [ref=e374]:
              - generic [ref=e376]:
                - generic [ref=e378] [cursor=pointer]:
                  - generic [ref=e379]: Advertisement
                  - generic [ref=e380]: Remove Ads
                - generic [ref=e386] [cursor=pointer]:
                  - generic [ref=e387]: Remove all ads
                  - generic [ref=e388]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e389]
              - generic [ref=e391]:
                - generic [ref=e393] [cursor=pointer]:
                  - generic [ref=e394]: Advertisement
                  - generic [ref=e395]: Remove Ads
                - generic [ref=e401] [cursor=pointer]:
                  - generic [ref=e402]: Remove all ads
                  - generic [ref=e403]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e404]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e407]:
    - banner [ref=e408]:
      - generic [ref=e409] [cursor=pointer]:
        - generic [ref=e410]: Advertisement
        - generic [ref=e411]: Remove Ads
    - generic [ref=e415] [cursor=pointer]:
      - generic [ref=e416]: Remove all ads
      - generic [ref=e417]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e418]
```

# Test source

```ts
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
  82  |       await this.deckButton.click();
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
> 110 |       await this.tierListButton.click();
      |                                 ^ Error: locator.click: Test timeout of 90000ms exceeded.
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