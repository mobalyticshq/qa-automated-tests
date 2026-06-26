# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for plus user - STS 2 in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:10020:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-slay-the-spire-2-display-footer-d').locator('..').or(locator('#slay-the-spire-2-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-slay-the-spire-2-display-footer-d').locator('..').or(locator('#slay-the-spire-2-nitro-anchor').locator('..'))
    29 × locator resolved to <div class="m-114015r">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /slay-the-spire-2
          - img "Mobalytics" [ref=e7]
        - generic [ref=e9]:
          - link "League of Legends LoL" [ref=e11] [cursor=pointer]:
            - /url: https://mobalytics.gg/lol
            - generic [ref=e13]:
              - img "League of Legends" [ref=e14]
              - generic [ref=e15]: LoL
          - link "Teamfight Tactics TFT" [ref=e17] [cursor=pointer]:
            - /url: https://mobalytics.gg/tft
            - generic [ref=e19]:
              - img "Teamfight Tactics" [ref=e20]
              - generic [ref=e21]: TFT
          - link "Diablo 4 Diablo 4" [ref=e23] [cursor=pointer]:
            - /url: https://mobalytics.gg/diablo-4
            - generic [ref=e25]:
              - img "Diablo 4" [ref=e26]
              - generic [ref=e27]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e29] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe-2
            - generic [ref=e31]:
              - img "Path of Exile 2" [ref=e32]
              - generic [ref=e33]: PoE 2
          - link "Path of Exile PoE" [ref=e35] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe
            - generic [ref=e37]:
              - img "Path of Exile" [ref=e38]
              - generic [ref=e39]: PoE
          - link "Destiny 2 Destiny 2" [ref=e41] [cursor=pointer]:
            - /url: https://mobalytics.gg/destiny-2
            - generic [ref=e43]:
              - img "Destiny 2" [ref=e44]
              - generic [ref=e45]: Destiny 2
          - link "Marathon Marathon" [ref=e47] [cursor=pointer]:
            - /url: https://mobalytics.gg/marathon
            - generic [ref=e49]:
              - img "Marathon" [ref=e50]
              - generic [ref=e51]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
          - link "Deadlock Deadlock" [ref=e59] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e61]:
              - img "Deadlock" [ref=e62]
              - generic [ref=e63]: Deadlock
          - button [ref=e64] [cursor=pointer]:
            - img [ref=e65]
          - generic:
            - link "Overwatch Overwatch":
              - /url: https://mobalytics.gg/overwatch
              - generic:
                - generic:
                  - img "Overwatch"
                  - generic: Overwatch
          - generic:
            - link "Borderlands 4 Borderlands 4":
              - /url: https://mobalytics.gg/borderlands-4
              - generic:
                - generic:
                  - img "Borderlands 4"
                  - generic: Borderlands 4
          - generic:
            - link "Valorant VAL":
              - /url: https://mobalytics.gg/valorant
              - generic:
                - generic:
                  - img "Valorant"
                  - generic: VAL
          - generic:
            - link "Neverness to Everness NTE New":
              - /url: https://mobalytics.gg/neverness-to-everness
              - generic:
                - generic:
                  - img "Neverness to Everness"
                  - generic: NTE
                  - generic:
                    - generic: New
          - generic:
            - 'link "Arknights: Endfield Endfield"':
              - /url: https://mobalytics.gg/arknights-endfield
              - generic:
                - generic:
                  - 'img "Arknights: Endfield"'
                  - generic: Endfield
          - generic:
            - link "Elden Ring Nightreign Nightreign":
              - /url: https://mobalytics.gg/elden-ring-nightreign
              - generic:
                - generic:
                  - img "Elden Ring Nightreign"
                  - generic: Nightreign
          - generic:
            - link "Monster Hunter Wilds Monster Hunter Wilds":
              - /url: https://mobalytics.gg/mhw
              - generic:
                - generic:
                  - img "Monster Hunter Wilds"
                  - generic: Monster Hunter Wilds
          - generic:
            - link "Hades 2 Hades 2":
              - /url: https://mobalytics.gg/hades-2
              - generic:
                - generic:
                  - img "Hades 2"
                  - generic: Hades 2
          - generic:
            - link "The Bazaar The Bazaar":
              - /url: https://mobalytics.gg/the-bazaar
              - generic:
                - generic:
                  - img "The Bazaar"
                  - generic: The Bazaar
          - generic:
            - link "Marvel Rivals Marvel Rivals":
              - /url: https://mobalytics.gg/marvel-rivals
              - generic:
                - generic:
                  - img "Marvel Rivals"
                  - generic: Marvel Rivals
          - generic:
            - link "Zenless Zone Zero ZZZ":
              - /url: https://mobalytics.gg/zzz
              - generic:
                - generic:
                  - img "Zenless Zone Zero"
                  - generic: ZZZ
          - generic:
            - link "2XKO 2XKO":
              - /url: https://mobalytics.gg/2xko
              - generic:
                - generic:
                  - img "2XKO"
                  - generic: 2XKO
          - generic:
            - link "Riftbound Riftbound":
              - /url: https://mobalytics.gg/riftbound
              - generic:
                - generic:
                  - img "Riftbound"
                  - generic: Riftbound
      - generic [ref=e66]:
        - generic [ref=e67]:
          - button "plus Activate Pass" [ref=e72] [cursor=pointer]:
            - img "plus" [ref=e74]
            - generic [ref=e75]: Activate Pass
          - link "DOWNLOAD APP" [ref=e76] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-slay-the-spire-2&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e78]:
              - img [ref=e79]
              - text: DOWNLOAD APP
          - link "News" [ref=e81] [cursor=pointer]:
            - /url: /news
            - generic [ref=e82]: News
        - generic [ref=e84]:
          - button "Sign In" [ref=e86] [cursor=pointer]
          - button [ref=e88] [cursor=pointer]:
            - img [ref=e90]
          - button "Theme" [ref=e92] [cursor=pointer]:
            - img "Theme" [ref=e94]
      - generic [ref=e96]:
        - link "Home" [ref=e99] [cursor=pointer]:
          - /url: /slay-the-spire-2
          - img "Home" [ref=e101]
        - link "Profile" [ref=e104] [cursor=pointer]:
          - /url: /slay-the-spire-2/profile
          - img "Profile" [ref=e106]
        - link "Characters" [ref=e109] [cursor=pointer]:
          - /url: /slay-the-spire-2/characters
          - img "Characters" [ref=e111]
        - link "Tier Lists" [ref=e114] [cursor=pointer]:
          - /url: /slay-the-spire-2/tier-lists
          - img "Tier Lists" [ref=e116]
        - link "Encounters" [ref=e119] [cursor=pointer]:
          - /url: /slay-the-spire-2/encounters
          - img "Encounters" [ref=e121]
        - link "Guides" [ref=e124] [cursor=pointer]:
          - /url: /slay-the-spire-2/guides
          - img "Guides" [ref=e126]
        - link "Wiki" [ref=e129] [cursor=pointer]:
          - /url: /slay-the-spire-2/wiki
          - img "Wiki" [ref=e131]
      - generic [ref=e133]:
        - main [ref=e134]:
          - generic [ref=e136]:
            - generic [ref=e137]:
              - button "Slay the Spire 2 Decks, Guides, Tier Lists, & More Whether you're a series veteran or a newcomer to Slay the Spire 2, Mobalytics has you covered with Decks, Guides, Tier Lists, and more." [ref=e140]:
                - generic [ref=e145]:
                  - generic [ref=e146]:
                    - img [ref=e148]
                    - heading "Slay the Spire 2 Decks, Guides, Tier Lists, & More" [level=1] [ref=e149]
                  - paragraph [ref=e157]: Whether you're a series veteran or a newcomer to Slay the Spire 2, Mobalytics has you covered with Decks, Guides, Tier Lists, and more.
              - generic [ref=e159]:
                - link "Encounters Discover all Events, Bosses, Elites, and Monsters to help you prepare for future runs. See Encounters" [ref=e162] [cursor=pointer]:
                  - /url: /slay-the-spire-2/encounters
                  - generic [ref=e165]:
                    - generic [ref=e166]:
                      - paragraph [ref=e167]: Encounters
                      - paragraph [ref=e168]: Discover all Events, Bosses, Elites, and Monsters to help you prepare for future runs.
                    - button "See Encounters" [ref=e170]: See Encounters
                - link "Wiki Explore our comprehensive compendium of Cards, Relics, and Potions. Explore Our Wiki" [ref=e174] [cursor=pointer]:
                  - /url: /slay-the-spire-2/wiki
                  - generic [ref=e177]:
                    - generic [ref=e178]:
                      - paragraph [ref=e179]: Wiki
                      - paragraph [ref=e180]: Explore our comprehensive compendium of Cards, Relics, and Potions.
                    - button "Explore Our Wiki" [ref=e182]: Explore Our Wiki
                - link "Tier Lists Check out a variety of tier lists to see what's popular, or create your own! Review Tier Lists" [ref=e186] [cursor=pointer]:
                  - /url: /slay-the-spire-2/tier-lists
                  - generic [ref=e189]:
                    - generic [ref=e190]:
                      - paragraph [ref=e191]: Tier Lists
                      - paragraph [ref=e192]: Check out a variety of tier lists to see what's popular, or create your own!
                    - button "Review Tier Lists" [ref=e194]: Review Tier Lists
              - generic [ref=e199]:
                - heading "Learn the Characters" [level=2] [ref=e203]
                - paragraph [ref=e211]: Everything you need to know about the characters of Slay the Spire 2 - cards, playstyles, deck archetypes, and more!
                - generic [ref=e213]:
                  - link "The Ironclad" [ref=e214] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/ironclad-guide
                    - generic "The Ironclad" [ref=e219]
                  - link "The Silent" [ref=e220] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/silent-guide
                    - generic "The Silent" [ref=e225]
                  - link "The Regent" [ref=e226] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/regent-guide
                    - generic "The Regent" [ref=e231]
                  - link "The Necrobinder" [ref=e232] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/necrobinder-guide
                    - generic "The Necrobinder" [ref=e237]
                  - link "The Defect" [ref=e238] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/defect-guide
                    - generic "The Defect" [ref=e243]
              - generic [ref=e247]:
                - heading "Latest Guides" [level=2] [ref=e251]
                - generic [ref=e253]:
                  - generic [ref=e256] [cursor=pointer]:
                    - link [ref=e257]:
                      - /url: /slay-the-spire-2/guides/enchantments
                    - generic [ref=e259]:
                      - generic [ref=e260]: How Enchantments Work
                      - generic [ref=e261]:
                        - text: By
                        - link "Mobalytics" [ref=e262]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e263]: Updated on
                        - generic [ref=e264]: Jun 2, 2026
                    - generic [ref=e265]:
                      - button "Share" [ref=e268]:
                        - img [ref=e269]
                        - text: Share
                      - generic [ref=e270]:
                        - generic [ref=e271]: Beginner
                        - generic [ref=e272]: Mechanics
                  - generic [ref=e275] [cursor=pointer]:
                    - link [ref=e276]:
                      - /url: /slay-the-spire-2/guides/ancients
                    - generic [ref=e278]:
                      - generic [ref=e279]: How Ancients Work
                      - generic [ref=e280]:
                        - text: By
                        - link "Mobalytics" [ref=e281]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e282]: Updated on
                        - generic [ref=e283]: Jun 2, 2026
                    - generic [ref=e284]:
                      - button "Share" [ref=e287]:
                        - img [ref=e288]
                        - text: Share
                      - generic [ref=e289]:
                        - generic [ref=e290]: Beginner
                        - generic [ref=e291]: Mechanics
                  - generic [ref=e294] [cursor=pointer]:
                    - link [ref=e295]:
                      - /url: /slay-the-spire-2/guides/beta-patch-v01000
                    - generic [ref=e297]:
                      - generic [ref=e298]: Beta Patch v0.100.0 - All Card Changes
                      - generic [ref=e299]:
                        - text: By
                        - link "Mobalytics" [ref=e300]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e301]: Updated on
                        - generic [ref=e302]: Mar 21, 2026
                    - generic [ref=e303]:
                      - button "Share" [ref=e306]:
                        - img [ref=e307]
                        - text: Share
                      - generic [ref=e309]: News
                  - generic [ref=e312] [cursor=pointer]:
                    - link [ref=e313]:
                      - /url: /slay-the-spire-2/guides/beginner-guide
                    - generic [ref=e315]:
                      - generic [ref=e316]: Slay the Spire 2 Ultimate Beginner Guide
                      - generic [ref=e317]:
                        - text: By
                        - link "Mobalytics" [ref=e318]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e319]: Updated on
                        - generic [ref=e320]: Mar 19, 2026
                    - generic [ref=e321]:
                      - button "Share" [ref=e324]:
                        - img [ref=e325]
                        - text: Share
                      - generic [ref=e327]: Beginner
                  - generic [ref=e330] [cursor=pointer]:
                    - link [ref=e331]:
                      - /url: /slay-the-spire-2/guides/keywords
                    - generic [ref=e333]:
                      - generic [ref=e334]: Keywords and Terms Explained
                      - generic [ref=e335]:
                        - text: By
                        - link "Mobalytics" [ref=e336]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e337]: Updated on
                        - generic [ref=e338]: Mar 17, 2026
                    - generic [ref=e339]:
                      - button "Share" [ref=e342]:
                        - img [ref=e343]
                        - text: Share
                      - generic [ref=e344]:
                        - generic [ref=e345]: Beginner
                        - generic [ref=e346]: Mechanics
                - button "Show more" [ref=e347] [cursor=pointer]
            - status [ref=e348]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e356]:
    - banner [ref=e357]:
      - generic [ref=e358] [cursor=pointer]:
        - generic [ref=e359]: Advertisement
        - generic [ref=e360]: Remove Ads
    - generic [ref=e363] [cursor=pointer]:
      - generic [ref=e364]: Remove all ads
      - generic [ref=e365]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e366]:
        - generic [ref=e367]: Remove ads
```

# Test source

```ts
  9972  |                 .not.toBeVisible();
  9973  |             });
  9974  |             break;
  9975  |           case 'Overwatch':
  9976  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9977  |               await expect
  9978  |                 .soft(
  9979  |                   page
  9980  |                     .locator('#overwatch-video-all-pages')
  9981  |                     .or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
  9982  |                 )
  9983  |                 .not.toBeVisible();
  9984  |             });
  9985  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9986  |               await expect
  9987  |                 .soft(
  9988  |                   page
  9989  |                     .locator('#overwatch-display-all-pages')
  9990  |                     .or(page.locator('#overwatch-nitro-l'))
  9991  |                     .or(page.locator('#overwatch-nitro-3'))
  9992  |                     .first()
  9993  |                 )
  9994  |                 .not.toBeVisible();
  9995  |             });
  9996  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9997  |               await expect
  9998  |                 .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
  9999  |                 .not.toBeVisible();
  10000 |             });
  10001 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10002 |               await expect
  10003 |                 .soft(
  10004 |                   page
  10005 |                     .locator('#web-overwatch-display-footer-d')
  10006 |                     .locator('xpath=..')
  10007 |                     .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
  10008 |                 )
  10009 |                 .not.toBeVisible();
  10010 |             });
  10011 |             break;
  10012 |         }
  10013 |       } finally {
  10014 |         await adFreeUserContext.close();
  10015 |       }
  10016 |     });
  10017 |   });
  10018 | 
  10019 |   filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  10020 |     test(`Check video block & footer banner for plus user - ${game} in desktop at 1100x800 viewport size`, async ({
  10021 |       browser,
  10022 |     }) => {
  10023 |       const plusUserContext = await browser.newContext({ storageState: '.auth/plusUserAuth.json' });
  10024 |       const page = await plusUserContext.newPage();
  10025 |       await page.setViewportSize({ width: 1100, height: 800 });
  10026 | 
  10027 |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  10028 |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  10029 |           waitUntil: 'domcontentloaded',
  10030 |         });
  10031 |       });
  10032 |       try {
  10033 |         switch (game) {
  10034 |           case 'STS 2':
  10035 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10036 |               await expect
  10037 |                 .soft(
  10038 |                   page
  10039 |                     .locator('#slay-the-spire-2-video-all-pages')
  10040 |                     .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
  10041 |                 )
  10042 |                 .not.toBeVisible();
  10043 |             });
  10044 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10045 |               await expect
  10046 |                 .soft(
  10047 |                   page
  10048 |                     .locator('#slay-the-spire-2-display-all-pages')
  10049 |                     .or(page.locator('#slay-the-spire-2-nitro-l'))
  10050 |                     .or(page.locator('#slay-the-spire-2-nitro-3'))
  10051 |                     .first()
  10052 |                 )
  10053 |                 .not.toBeVisible();
  10054 |             });
  10055 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10056 |               await expect
  10057 |                 .soft(
  10058 |                   page
  10059 |                     .locator('#slay-the-spire-2-display-small-all-pages')
  10060 |                     .or(page.locator('#slay-the-spire-2-nitro-m'))
  10061 |                 )
  10062 |                 .not.toBeVisible();
  10063 |             });
  10064 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10065 |               await expect
  10066 |                 .soft(
  10067 |                   page
  10068 |                     .locator('#web-slay-the-spire-2-display-footer-d')
  10069 |                     .locator('xpath=..')
  10070 |                     .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
  10071 |                 )
> 10072 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
  10073 |             });
  10074 |             break;
  10075 |           case 'LoL':
  10076 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10077 |               await expect
  10078 |                 .soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video')))
  10079 |                 .not.toBeVisible();
  10080 |             });
  10081 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10082 |               await expect
  10083 |                 .soft(
  10084 |                   page
  10085 |                     .locator('#lol-display-all-pages')
  10086 |                     .or(page.locator('#lol-nitro-l'))
  10087 |                     .or(page.locator('#lol-nitro-3'))
  10088 |                     .first()
  10089 |                 )
  10090 |                 .not.toBeVisible();
  10091 |             });
  10092 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10093 |               await expect
  10094 |                 .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  10095 |                 .not.toBeVisible();
  10096 |             });
  10097 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10098 |               await expect
  10099 |                 .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
  10100 |                 .not.toBeVisible();
  10101 |             });
  10102 |             break;
  10103 |           case 'ZZZ':
  10104 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10105 |               await expect
  10106 |                 .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
  10107 |                 .not.toBeVisible();
  10108 |             });
  10109 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10110 |               await expect
  10111 |                 .soft(
  10112 |                   page
  10113 |                     .locator('#zzz-display-all-pages')
  10114 |                     .or(page.locator('#zzz-nitro-l'))
  10115 |                     .or(page.locator('#zzz-nitro-3'))
  10116 |                     .first()
  10117 |                 )
  10118 |                 .not.toBeVisible();
  10119 |             });
  10120 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10121 |               await expect
  10122 |                 .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
  10123 |                 .not.toBeVisible();
  10124 |             });
  10125 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10126 |               await expect
  10127 |                 .soft(
  10128 |                   page
  10129 |                     .locator('#web-zzz-display-footer-d')
  10130 |                     .locator('xpath=..')
  10131 |                     .or(page.locator('#zzz-nitro-anchor').locator('xpath=..'))
  10132 |                 )
  10133 |                 .not.toBeVisible();
  10134 |             });
  10135 |             break;
  10136 |           case 'Val':
  10137 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10138 |               await expect
  10139 |                 .soft(
  10140 |                   page
  10141 |                     .locator('#valorant-video-all-pages')
  10142 |                     .or(page.locator('#valorant-nitro-video').locator('xpath=..'))
  10143 |                 )
  10144 |                 .not.toBeVisible();
  10145 |             });
  10146 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10147 |               await expect
  10148 |                 .soft(
  10149 |                   page
  10150 |                     .locator('#valorant-display-all-pages')
  10151 |                     .or(page.locator('#valorant-nitro-l'))
  10152 |                     .or(page.locator('#valorant-nitro-3'))
  10153 |                     .first()
  10154 |                 )
  10155 |                 .not.toBeVisible();
  10156 |             });
  10157 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10158 |               await expect
  10159 |                 .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
  10160 |                 .not.toBeVisible();
  10161 |             });
  10162 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10163 |               await expect
  10164 |                 .soft(
  10165 |                   page
  10166 |                     .locator('#web-valorant-display-footer-d')
  10167 |                     .locator('xpath=..')
  10168 |                     .or(page.locator('#valorant-nitro-anchor').locator('xpath=..'))
  10169 |                 )
  10170 |                 .not.toBeVisible();
  10171 |             });
  10172 |             break;
```