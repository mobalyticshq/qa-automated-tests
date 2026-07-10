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
    33 × locator resolved to <div class="m-clr6n">…</div>
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
          - link "DOWNLOAD APP" [ref=e68] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-slay-the-spire-2&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e70]:
              - img [ref=e71]
              - text: DOWNLOAD APP
          - link "News" [ref=e73] [cursor=pointer]:
            - /url: /news
            - generic [ref=e74]: News
        - generic [ref=e76]:
          - button "Sign In" [ref=e78] [cursor=pointer]
          - button [ref=e80] [cursor=pointer]:
            - img [ref=e82]
          - button "Theme" [ref=e84] [cursor=pointer]:
            - img "Theme" [ref=e86]
      - generic [ref=e88]:
        - link "Home" [ref=e91] [cursor=pointer]:
          - /url: /slay-the-spire-2
          - img "Home" [ref=e93]
        - link "Profile" [ref=e96] [cursor=pointer]:
          - /url: /slay-the-spire-2/profile
          - img "Profile" [ref=e98]
        - link "Characters" [ref=e101] [cursor=pointer]:
          - /url: /slay-the-spire-2/characters
          - img "Characters" [ref=e103]
        - link "Tier Lists" [ref=e106] [cursor=pointer]:
          - /url: /slay-the-spire-2/tier-lists
          - img "Tier Lists" [ref=e108]
        - link "Encounters" [ref=e111] [cursor=pointer]:
          - /url: /slay-the-spire-2/encounters
          - img "Encounters" [ref=e113]
        - link "Guides" [ref=e116] [cursor=pointer]:
          - /url: /slay-the-spire-2/guides
          - img "Guides" [ref=e118]
        - link "Wiki" [ref=e121] [cursor=pointer]:
          - /url: /slay-the-spire-2/wiki
          - img "Wiki" [ref=e123]
      - generic [ref=e125]:
        - main [ref=e126]:
          - generic [ref=e128]:
            - generic [ref=e129]:
              - button "Slay the Spire 2 Decks, Guides, Tier Lists, & More Whether you're a series veteran or a newcomer to Slay the Spire 2, Mobalytics has you covered with Decks, Guides, Tier Lists, and more." [ref=e132]:
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - img [ref=e140]
                    - heading "Slay the Spire 2 Decks, Guides, Tier Lists, & More" [level=1] [ref=e141]
                  - paragraph [ref=e149]: Whether you're a series veteran or a newcomer to Slay the Spire 2, Mobalytics has you covered with Decks, Guides, Tier Lists, and more.
              - generic [ref=e151]:
                - link "Encounters Discover all Events, Bosses, Elites, and Monsters to help you prepare for future runs. See Encounters" [ref=e154] [cursor=pointer]:
                  - /url: /slay-the-spire-2/encounters
                  - generic [ref=e157]:
                    - generic [ref=e158]:
                      - paragraph [ref=e159]: Encounters
                      - paragraph [ref=e160]: Discover all Events, Bosses, Elites, and Monsters to help you prepare for future runs.
                    - button "See Encounters" [ref=e162]: See Encounters
                - link "Wiki Explore our comprehensive compendium of Cards, Relics, and Potions. Explore Our Wiki" [ref=e166] [cursor=pointer]:
                  - /url: /slay-the-spire-2/wiki
                  - generic [ref=e169]:
                    - generic [ref=e170]:
                      - paragraph [ref=e171]: Wiki
                      - paragraph [ref=e172]: Explore our comprehensive compendium of Cards, Relics, and Potions.
                    - button "Explore Our Wiki" [ref=e174]: Explore Our Wiki
                - link "Tier Lists Check out a variety of tier lists to see what's popular, or create your own! Review Tier Lists" [ref=e178] [cursor=pointer]:
                  - /url: /slay-the-spire-2/tier-lists
                  - generic [ref=e181]:
                    - generic [ref=e182]:
                      - paragraph [ref=e183]: Tier Lists
                      - paragraph [ref=e184]: Check out a variety of tier lists to see what's popular, or create your own!
                    - button "Review Tier Lists" [ref=e186]: Review Tier Lists
              - generic [ref=e191]:
                - heading "Learn the Characters" [level=2] [ref=e195]
                - paragraph [ref=e203]: Everything you need to know about the characters of Slay the Spire 2 - cards, playstyles, deck archetypes, and more!
                - generic [ref=e205]:
                  - link "The Ironclad" [ref=e206] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/ironclad-guide
                    - generic "The Ironclad" [ref=e211]
                  - link "The Silent" [ref=e212] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/silent-guide
                    - generic "The Silent" [ref=e217]
                  - link "The Regent" [ref=e218] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/regent-guide
                    - generic "The Regent" [ref=e223]
                  - link "The Necrobinder" [ref=e224] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/necrobinder-guide
                    - generic "The Necrobinder" [ref=e229]
                  - link "The Defect" [ref=e230] [cursor=pointer]:
                    - /url: /slay-the-spire-2/characters/defect-guide
                    - generic "The Defect" [ref=e235]
              - generic [ref=e239]:
                - heading "Latest Guides" [level=2] [ref=e243]
                - generic [ref=e245]:
                  - generic [ref=e248] [cursor=pointer]:
                    - link [ref=e249]:
                      - /url: /slay-the-spire-2/guides/enchantments
                    - generic [ref=e251]:
                      - generic [ref=e252]: How Enchantments Work
                      - generic [ref=e253]:
                        - text: By
                        - link "Mobalytics" [ref=e254]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e255]: Updated on
                        - generic [ref=e256]: Jun 2, 2026
                    - generic [ref=e257]:
                      - button "Share" [ref=e260]:
                        - img [ref=e261]
                        - text: Share
                      - generic [ref=e262]:
                        - generic [ref=e263]: Beginner
                        - generic [ref=e264]: Mechanics
                  - generic [ref=e267] [cursor=pointer]:
                    - link [ref=e268]:
                      - /url: /slay-the-spire-2/guides/ancients
                    - generic [ref=e270]:
                      - generic [ref=e271]: How Ancients Work
                      - generic [ref=e272]:
                        - text: By
                        - link "Mobalytics" [ref=e273]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e274]: Updated on
                        - generic [ref=e275]: Jun 2, 2026
                    - generic [ref=e276]:
                      - button "Share" [ref=e279]:
                        - img [ref=e280]
                        - text: Share
                      - generic [ref=e281]:
                        - generic [ref=e282]: Beginner
                        - generic [ref=e283]: Mechanics
                  - generic [ref=e286] [cursor=pointer]:
                    - link [ref=e287]:
                      - /url: /slay-the-spire-2/guides/beta-patch-v01000
                    - generic [ref=e289]:
                      - generic [ref=e290]: Beta Patch v0.100.0 - All Card Changes
                      - generic [ref=e291]:
                        - text: By
                        - link "Mobalytics" [ref=e292]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e293]: Updated on
                        - generic [ref=e294]: Mar 21, 2026
                    - generic [ref=e295]:
                      - button "Share" [ref=e298]:
                        - img [ref=e299]
                        - text: Share
                      - generic [ref=e301]: News
                  - generic [ref=e304] [cursor=pointer]:
                    - link [ref=e305]:
                      - /url: /slay-the-spire-2/guides/beginner-guide
                    - generic [ref=e307]:
                      - generic [ref=e308]: Slay the Spire 2 Ultimate Beginner Guide
                      - generic [ref=e309]:
                        - text: By
                        - link "Mobalytics" [ref=e310]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e311]: Updated on
                        - generic [ref=e312]: Mar 19, 2026
                    - generic [ref=e313]:
                      - button "Share" [ref=e316]:
                        - img [ref=e317]
                        - text: Share
                      - generic [ref=e319]: Beginner
                  - generic [ref=e322] [cursor=pointer]:
                    - link [ref=e323]:
                      - /url: /slay-the-spire-2/guides/keywords
                    - generic [ref=e325]:
                      - generic [ref=e326]: Keywords and Terms Explained
                      - generic [ref=e327]:
                        - text: By
                        - link "Mobalytics" [ref=e328]:
                          - /url: /slay-the-spire-2/profile/mobalytics
                        - text: ∙
                        - generic [ref=e329]: Updated on
                        - generic [ref=e330]: Mar 17, 2026
                    - generic [ref=e331]:
                      - button "Share" [ref=e334]:
                        - img [ref=e335]
                        - text: Share
                      - generic [ref=e336]:
                        - generic [ref=e337]: Beginner
                        - generic [ref=e338]: Mechanics
                - button "Show more" [ref=e339] [cursor=pointer]
            - status [ref=e340]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e347]:
    - banner [ref=e348]:
      - generic [ref=e349] [cursor=pointer]:
        - generic [ref=e350]: Advertisement
        - generic [ref=e351]: Remove Ads
    - generic [ref=e354] [cursor=pointer]:
      - generic [ref=e355]: Remove all ads
      - generic [ref=e356]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e357]:
        - generic [ref=e358]: Remove ads
  - button "Do Not Sell or Share My Personal Information" [ref=e362] [cursor=pointer]:
    - paragraph [ref=e364]: Do Not Sell or Share My Personal Information
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