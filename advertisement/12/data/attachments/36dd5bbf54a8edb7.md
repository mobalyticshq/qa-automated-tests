# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for plus user - The Bazaar in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:10020:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-the-bazaar-display-footer-d').locator('..').or(locator('#the-bazaar-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-the-bazaar-display-footer-d').locator('..').or(locator('#the-bazaar-nitro-anchor').locator('..'))
    31 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /the-bazaar
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
          - link "Slay the Spire 2 STS 2 New" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
              - generic [ref=e59]: New
          - link "Deadlock Deadlock" [ref=e61] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e63]:
              - img "Deadlock" [ref=e64]
              - generic [ref=e65]: Deadlock
          - button [ref=e66] [cursor=pointer]:
            - img [ref=e67]
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
      - generic [ref=e68]:
        - link "News" [ref=e71] [cursor=pointer]:
          - /url: /news
          - generic [ref=e72]: News
        - generic [ref=e74]:
          - button "Sign In" [ref=e76] [cursor=pointer]
          - button [ref=e78] [cursor=pointer]:
            - img [ref=e80]
          - button "Theme" [ref=e82] [cursor=pointer]:
            - img "Theme" [ref=e84]
      - generic [ref=e86]:
        - link "Home" [ref=e89] [cursor=pointer]:
          - /url: /the-bazaar
          - img "Home" [ref=e91]
        - link "Profile" [ref=e94] [cursor=pointer]:
          - /url: /the-bazaar/profile
          - img "Profile" [ref=e96]
        - link "Build Planner" [ref=e99] [cursor=pointer]:
          - /url: /the-bazaar/planner/builds
          - img "Build Planner" [ref=e101]
        - link "Builds" [ref=e104] [cursor=pointer]:
          - /url: /the-bazaar/builds
          - img "Builds" [ref=e106]
        - link "Meta Builds" [ref=e109] [cursor=pointer]:
          - /url: /the-bazaar/guides/meta-builds
          - img "Meta Builds" [ref=e111]
        - link "Heroes" [ref=e114] [cursor=pointer]:
          - /url: /the-bazaar/heroes
          - img "Heroes" [ref=e116]
        - link "Items | Skills" [ref=e119] [cursor=pointer]:
          - /url: /the-bazaar/database/items-and-enchantments
          - img "Items | Skills" [ref=e121]
        - link "Guides" [ref=e124] [cursor=pointer]:
          - /url: /the-bazaar/guides
          - img "Guides" [ref=e126]
        - link "PvE Monsters" [ref=e129] [cursor=pointer]:
          - /url: /the-bazaar/guides/pve-encounters-and-drops
          - img "PvE Monsters" [ref=e131]
      - generic [ref=e133]:
        - main [ref=e134]:
          - generic [ref=e136]:
            - generic [ref=e137]:
              - 'button "The Bazaar Builds, Guides, and More Mobalytics is your #1 source of The Bazaar builds, guides, and everything else you need to learn and master the game." [ref=e140]':
                - generic [ref=e144]:
                  - generic [ref=e145]:
                    - img [ref=e147]
                    - heading "The Bazaar Builds, Guides, and More" [level=1] [ref=e148]
                  - paragraph [ref=e151]: "Mobalytics is your #1 source of The Bazaar builds, guides, and everything else you need to learn and master the game."
              - generic [ref=e154]:
                - 'link "Mobalytics is home to builds by Kripparrian, the #1 player of The Bazaar! Updated every patch and every meta Explore Kripp''s Builds" [ref=e156] [cursor=pointer]':
                  - /url: /the-bazaar/kripparrian
                  - generic [ref=e158]:
                    - paragraph [ref=e160]: "Mobalytics is home to builds by Kripparrian, the #1 player of The Bazaar!"
                    - paragraph [ref=e161]: Updated every patch and every meta
                    - button "Explore Kripp's Builds" [ref=e163]: Explore Kripp's Builds
                - generic [ref=e166]:
                  - heading "Explore our Latest Guides and News" [level=2] [ref=e170]
                  - generic [ref=e172]:
                    - generic [ref=e175] [cursor=pointer]:
                      - link [ref=e176]:
                        - /url: /the-bazaar/guides/meta-builds
                      - generic [ref=e178]:
                        - generic [ref=e179]: The Bazaar Meta Builds (Season 14)
                        - generic [ref=e180]:
                          - text: By
                          - link "Mobalytics" [ref=e181]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e182]: Updated on
                          - generic [ref=e183]: May 20, 2026
                      - generic [ref=e184]:
                        - button "Share" [ref=e187]:
                          - img [ref=e188]
                          - text: Share
                        - generic [ref=e189]:
                          - generic [ref=e190]: Meta
                          - generic [ref=e191]: Heroes
                    - generic [ref=e194] [cursor=pointer]:
                      - link [ref=e195]:
                        - /url: /the-bazaar/guides/pve-encounters-and-drops
                      - generic [ref=e197]:
                        - generic [ref=e198]: The Bazaar PvE Encounters and Drops (Loot, Skills, and Items)
                        - generic [ref=e199]:
                          - text: By
                          - link "Mobalytics" [ref=e200]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e201]: Updated on
                          - generic [ref=e202]: May 14, 2026
                      - generic [ref=e203]:
                        - button "Share" [ref=e206]:
                          - img [ref=e207]
                          - text: Share
                        - generic [ref=e209]: Mechanics
                    - generic [ref=e212] [cursor=pointer]:
                      - link [ref=e213]:
                        - /url: /the-bazaar/guides/patch-notes
                      - generic [ref=e215]:
                        - generic [ref=e216]: The Bazaar Patch Notes Tracker
                        - generic [ref=e217]:
                          - text: By
                          - link "Mobalytics" [ref=e218]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e219]: Updated on
                          - generic [ref=e220]: May 5, 2026
                      - generic [ref=e221]:
                        - button "Share" [ref=e224]:
                          - img [ref=e225]
                          - text: Share
                        - generic [ref=e227]: News
                    - generic [ref=e230] [cursor=pointer]:
                      - link [ref=e231]:
                        - /url: /the-bazaar/guides/keywords-and-terms
                      - generic [ref=e233]:
                        - generic [ref=e234]: The Bazaar Keywords and Terms Guide
                        - generic [ref=e235]:
                          - text: By
                          - link "Mobalytics" [ref=e236]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e237]: Updated on
                          - generic [ref=e238]: Mar 12, 2026
                      - generic [ref=e239]:
                        - button "Share" [ref=e242]:
                          - img [ref=e243]
                          - text: Share
                        - generic [ref=e245]: Mechanics
                    - generic [ref=e248] [cursor=pointer]:
                      - link [ref=e249]:
                        - /url: /the-bazaar/guides/crash-site-expeditions-explained
                      - generic [ref=e251]:
                        - generic [ref=e252]: Crash Site Expeditions Explained
                        - generic [ref=e253]:
                          - text: By
                          - link "Mobalytics" [ref=e254]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e255]: Updated on
                          - generic [ref=e256]: Feb 16, 2026
                      - generic [ref=e257]:
                        - button "Share" [ref=e260]:
                          - img [ref=e261]
                          - text: Share
                        - generic [ref=e262]:
                          - generic [ref=e263]: News
                          - generic [ref=e264]: Mechanics
                    - generic [ref=e267] [cursor=pointer]:
                      - link [ref=e268]:
                        - /url: /the-bazaar/guides/greenheart-expeditions-explained
                      - generic [ref=e270]:
                        - generic [ref=e271]: Greenheart Expeditions Explained
                        - generic [ref=e272]:
                          - text: By
                          - link "Mobalytics" [ref=e273]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e274]: Updated on
                          - generic [ref=e275]: Feb 9, 2026
                      - generic [ref=e276]:
                        - button "Share" [ref=e279]:
                          - img [ref=e280]
                          - text: Share
                        - generic [ref=e281]:
                          - generic [ref=e282]: News
                          - generic [ref=e283]: Mechanics
                    - generic [ref=e286] [cursor=pointer]:
                      - link [ref=e287]:
                        - /url: /the-bazaar/guides/level-up-rewards
                      - generic [ref=e289]:
                        - generic [ref=e290]: The Bazaar Level-Up Rewards Explained
                        - generic [ref=e291]:
                          - text: By
                          - link "Mobalytics" [ref=e292]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e293]: Updated on
                          - generic [ref=e294]: Dec 4, 2025
                      - generic [ref=e295]:
                        - button "Share" [ref=e298]:
                          - img [ref=e299]
                          - text: Share
                        - generic [ref=e300]:
                          - generic [ref=e301]: Beginner
                          - generic [ref=e302]: Mechanics
                    - generic [ref=e305] [cursor=pointer]:
                      - link [ref=e306]:
                        - /url: /the-bazaar/guides/steam-release-monetization-updates
                      - generic [ref=e308]:
                        - generic [ref=e309]: The Bazaar's Steam Release & Monetization Updates
                        - generic [ref=e310]:
                          - text: By
                          - link "Mobalytics" [ref=e311]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e312]: Updated on
                          - generic [ref=e313]: Sep 3, 2025
                      - generic [ref=e314]:
                        - button "Share" [ref=e317]:
                          - img [ref=e318]
                          - text: Share
                        - generic [ref=e320]: News
                    - generic [ref=e323] [cursor=pointer]:
                      - link [ref=e324]:
                        - /url: /the-bazaar/guides/what-is-the-bazaar
                      - generic [ref=e326]:
                        - generic [ref=e327]: What is The Bazaar? - Tempo Storm Reynad's Long-Awaited Game
                        - generic [ref=e328]:
                          - text: By
                          - link "Mobalytics" [ref=e329]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e330]: Updated on
                          - generic [ref=e331]: Aug 19, 2025
                      - generic [ref=e332]:
                        - button "Share" [ref=e335]:
                          - img [ref=e336]
                          - text: Share
                        - generic [ref=e338]: News
                    - generic [ref=e341] [cursor=pointer]:
                      - link [ref=e342]:
                        - /url: /the-bazaar/guides/day-guide
                      - generic [ref=e344]:
                        - generic [ref=e345]: How Does a Day Work in The Bazaar?
                        - generic [ref=e346]:
                          - text: By
                          - link "Mobalytics" [ref=e347]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e348]: Updated on
                          - generic [ref=e349]: Aug 14, 2025
                      - generic [ref=e350]:
                        - button "Share" [ref=e353]:
                          - img [ref=e354]
                          - text: Share
                        - generic [ref=e355]:
                          - generic [ref=e356]: Beginner
                          - generic [ref=e357]: Mechanics
                  - button "Show more" [ref=e358] [cursor=pointer]
            - status [ref=e359]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e366]:
    - banner [ref=e367]:
      - generic [ref=e368] [cursor=pointer]:
        - generic [ref=e369]: Advertisement
        - generic [ref=e370]: Remove Ads
    - generic [ref=e373] [cursor=pointer]:
      - generic [ref=e374]: Remove all ads
      - generic [ref=e375]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e376]:
        - generic [ref=e377]: Remove ads
```

# Test source

```ts
  10206 |           case 'PoE':
  10207 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10208 |               await expect
  10209 |                 .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
  10210 |                 .not.toBeVisible();
  10211 |             });
  10212 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10213 |               await expect
  10214 |                 .soft(
  10215 |                   page
  10216 |                     .locator('#poe-display-all-pages')
  10217 |                     .or(page.locator('#poe-nitro-l'))
  10218 |                     .or(page.locator('#poe-nitro-3'))
  10219 |                     .first()
  10220 |                 )
  10221 |                 .not.toBeVisible();
  10222 |             });
  10223 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10224 |               await expect
  10225 |                 .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
  10226 |                 .not.toBeVisible();
  10227 |             });
  10228 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10229 |               await expect
  10230 |                 .soft(
  10231 |                   page
  10232 |                     .locator('#web-poe-display-footer-d')
  10233 |                     .locator('xpath=..')
  10234 |                     .or(page.locator('#poe-nitro-anchor').locator('xpath=..'))
  10235 |                 )
  10236 |                 .not.toBeVisible();
  10237 |             });
  10238 |             break;
  10239 |           case 'PoE 2':
  10240 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10241 |               await expect
  10242 |                 .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
  10243 |                 .not.toBeVisible();
  10244 |             });
  10245 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10246 |               await expect
  10247 |                 .soft(
  10248 |                   page
  10249 |                     .locator('#poe-2-display-all-pages')
  10250 |                     .or(page.locator('#poe-2-nitro-l'))
  10251 |                     .or(page.locator('#poe-2-nitro-3'))
  10252 |                     .first()
  10253 |                 )
  10254 |                 .not.toBeVisible();
  10255 |             });
  10256 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10257 |               await expect
  10258 |                 .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
  10259 |                 .not.toBeVisible();
  10260 |             });
  10261 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10262 |               await expect
  10263 |                 .soft(
  10264 |                   page
  10265 |                     .locator('#web-poe-2-display-footer-d')
  10266 |                     .locator('xpath=..')
  10267 |                     .or(page.locator('#poe-2-nitro-anchor').locator('xpath=..'))
  10268 |                 )
  10269 |                 .not.toBeVisible();
  10270 |             });
  10271 |             break;
  10272 |           case 'The Bazaar':
  10273 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10274 |               await expect
  10275 |                 .soft(
  10276 |                   page
  10277 |                     .locator('#the-bazaar-video-all-pages')
  10278 |                     .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
  10279 |                 )
  10280 |                 .not.toBeVisible();
  10281 |             });
  10282 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10283 |               await expect
  10284 |                 .soft(
  10285 |                   page
  10286 |                     .locator('#the-bazaar-display-all-pages')
  10287 |                     .or(page.locator('#the-bazaar-nitro-l'))
  10288 |                     .or(page.locator('#the-bazaar-nitro-3'))
  10289 |                     .first()
  10290 |                 )
  10291 |                 .not.toBeVisible();
  10292 |             });
  10293 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10294 |               await expect
  10295 |                 .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  10296 |                 .not.toBeVisible();
  10297 |             });
  10298 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10299 |               await expect
  10300 |                 .soft(
  10301 |                   page
  10302 |                     .locator('#web-the-bazaar-display-footer-d')
  10303 |                     .locator('xpath=..')
  10304 |                     .or(page.locator('#the-bazaar-nitro-anchor').locator('xpath=..'))
  10305 |                 )
> 10306 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
  10307 |             });
  10308 |             break;
  10309 |           case 'Monster Hunter Wilds':
  10310 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10311 |               await expect
  10312 |                 .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
  10313 |                 .not.toBeVisible();
  10314 |             });
  10315 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10316 |               await expect
  10317 |                 .soft(
  10318 |                   page
  10319 |                     .locator('#mhw-display-all-pages')
  10320 |                     .or(page.locator('#mhw-nitro-l'))
  10321 |                     .or(page.locator('#mhw-nitro-3'))
  10322 |                     .first()
  10323 |                 )
  10324 |                 .not.toBeVisible();
  10325 |             });
  10326 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10327 |               await expect
  10328 |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
  10329 |                 .not.toBeVisible();
  10330 |             });
  10331 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10332 |               await expect
  10333 |                 .soft(
  10334 |                   page
  10335 |                     .locator('#web-mhw-display-footer-d')
  10336 |                     .locator('xpath=..')
  10337 |                     .or(page.locator('#mhw-nitro-anchor').locator('xpath=..'))
  10338 |                 )
  10339 |                 .not.toBeVisible();
  10340 |             });
  10341 |             break;
  10342 |           case 'Nightreign':
  10343 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10344 |               await expect
  10345 |                 .soft(
  10346 |                   page
  10347 |                     .locator('#elden-ring-nightreign-video-all-pages')
  10348 |                     .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
  10349 |                 )
  10350 |                 .not.toBeVisible();
  10351 |             });
  10352 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10353 |               await expect
  10354 |                 .soft(
  10355 |                   page
  10356 |                     .locator('#elden-ring-nightreign-display-all-pages')
  10357 |                     .or(page.locator('#elden-ring-nightreign-nitro-l'))
  10358 |                     .or(page.locator('#elden-ring-nightreign-nitro-3'))
  10359 |                     .first()
  10360 |                 )
  10361 |                 .not.toBeVisible();
  10362 |             });
  10363 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10364 |               await expect
  10365 |                 .soft(
  10366 |                   page
  10367 |                     .locator('#elden-ring-nightreign-display-small-all-pages')
  10368 |                     .or(page.locator('#elden-ring-nightreign-nitro-m'))
  10369 |                 )
  10370 |                 .not.toBeVisible();
  10371 |             });
  10372 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10373 |               await expect
  10374 |                 .soft(
  10375 |                   page
  10376 |                     .locator('#web-elden-ring-nightreign-display-footer-d')
  10377 |                     .locator('xpath=..')
  10378 |                     .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
  10379 |                 )
  10380 |                 .not.toBeVisible();
  10381 |             });
  10382 |             break;
  10383 |           case 'Riftbound':
  10384 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10385 |               await expect
  10386 |                 .soft(
  10387 |                   page
  10388 |                     .locator('#riftbound-video-all-pages')
  10389 |                     .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  10390 |                 )
  10391 |                 .not.toBeVisible();
  10392 |             });
  10393 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10394 |               await expect
  10395 |                 .soft(
  10396 |                   page
  10397 |                     .locator('#riftbound-display-all-pages')
  10398 |                     .or(page.locator('#riftbound-nitro-l'))
  10399 |                     .or(page.locator('#riftbound-nitro-3'))
  10400 |                     .first()
  10401 |                 )
  10402 |                 .not.toBeVisible();
  10403 |             });
  10404 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10405 |               await expect
  10406 |                 .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
```