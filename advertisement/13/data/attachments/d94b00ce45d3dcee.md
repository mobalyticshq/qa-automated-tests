# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for ad free user - PoE 2 in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:9246:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-poe-2-display-footer-d').locator('..').or(locator('#poe-2-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-poe-2-display-footer-d').locator('..').or(locator('#poe-2-nitro-anchor').locator('..'))
    29 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "The Build Tracker has been updated for 0.5, follow your favorite creators automatically! → Start Tracking Close":
        - /url: https://mobalytics.gg/poe-2?promo=1
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e7]: The Build Tracker has been updated for 0.5, follow your favorite creators automatically!
            - button "→ Start Tracking" [ref=e8]
          - img "Close" [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e11]:
          - link "Mobalytics" [ref=e12] [cursor=pointer]:
            - /url: /poe-2
            - img "Mobalytics" [ref=e13]
          - generic [ref=e15]:
            - link "League of Legends LoL" [ref=e17] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=e19]:
                - img "League of Legends" [ref=e20]
                - generic [ref=e21]: LoL
            - link "Teamfight Tactics TFT" [ref=e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=e25]:
                - img "Teamfight Tactics" [ref=e26]
                - generic [ref=e27]: TFT
            - link "Diablo 4 Diablo 4" [ref=e29] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=e31]:
                - img "Diablo 4" [ref=e32]
                - generic [ref=e33]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e35] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=e37]:
                - img "Path of Exile 2" [ref=e38]
                - generic [ref=e39]: PoE 2
            - link "Path of Exile PoE" [ref=e41] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=e43]:
                - img "Path of Exile" [ref=e44]
                - generic [ref=e45]: PoE
            - link "Destiny 2 Destiny 2" [ref=e47] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=e49]:
                - img "Destiny 2" [ref=e50]
                - generic [ref=e51]: Destiny 2
            - link "Marathon Marathon" [ref=e53] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=e55]:
                - img "Marathon" [ref=e56]
                - generic [ref=e57]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e59] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=e61]:
                - img "Slay the Spire 2" [ref=e62]
                - generic [ref=e63]: STS 2
            - link "Deadlock Deadlock" [ref=e65] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=e67]:
                - img "Deadlock" [ref=e68]
                - generic [ref=e69]: Deadlock
            - button [ref=e70] [cursor=pointer]:
              - img [ref=e71]
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
        - generic [ref=e72]:
          - generic [ref=e73]:
            - link "DOWNLOAD APP" [ref=e74] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?utm_campaign=I5qu0ij&utm_medium=owaa&utm_source=app
              - button "DOWNLOAD APP" [ref=e76]:
                - img [ref=e77]
                - text: DOWNLOAD APP
            - generic [ref=e82]:
              - img [ref=e83]
              - textbox "global search input" [ref=e85]:
                - /placeholder: Ask me anything about PoE builds!
            - link "News" [ref=e87] [cursor=pointer]:
              - /url: /news
              - generic [ref=e88]: News
          - generic [ref=e90]:
            - button "Sign In" [ref=e92] [cursor=pointer]
            - button [ref=e94] [cursor=pointer]:
              - img [ref=e96]
            - button "Theme" [ref=e98] [cursor=pointer]:
              - img "Theme" [ref=e100]
        - generic [ref=e102]:
          - link "Home" [ref=e105] [cursor=pointer]:
            - /url: /poe-2
            - img "Home" [ref=e107]
          - link "Profile" [ref=e110] [cursor=pointer]:
            - /url: /poe-2/profile
            - img "Profile" [ref=e112]
          - link "Build Planner" [ref=e115] [cursor=pointer]:
            - /url: /poe-2/planner/builds
            - img "Build Planner" [ref=e117]
          - link "Tier List" [ref=e120] [cursor=pointer]:
            - /url: /poe-2/tier-list
            - img "Tier List" [ref=e122]
          - link "Starter Builds" [ref=e125] [cursor=pointer]:
            - /url: /poe-2/starter-builds
            - img "Starter Builds" [ref=e127]
          - link "Builds" [ref=e130] [cursor=pointer]:
            - /url: /poe-2/builds
            - img "Builds" [ref=e132]
          - link "Guides" [ref=e135] [cursor=pointer]:
            - /url: /poe-2/guides
            - img "Guides" [ref=e137]
          - link "Creators" [ref=e140] [cursor=pointer]:
            - /url: /poe-2/creators
            - img "Creators" [ref=e142]
        - generic [ref=e144]:
          - main [ref=e145]:
            - generic [ref=e147]:
              - generic [ref=e148]:
                - 'button "Path of Exile 2 Builds, Guides & More Mobalytics is your #1 source for trusted Path of Exile 2 builds, guides and the latest meta rankings." [ref=e151]':
                  - generic [ref=e155]:
                    - generic [ref=e156]:
                      - img [ref=e158]
                      - heading "Path of Exile 2 Builds, Guides & More" [level=1] [ref=e159]
                    - paragraph [ref=e162]: "Mobalytics is your #1 source for trusted Path of Exile 2 builds, guides and the latest meta rankings."
                - link "Live Build Tracker updated for 0.5 With automatic tracking, following a build by your favorite creator has never been easier Start Tracking" [ref=e167] [cursor=pointer]:
                  - /url: /poe-2?promo=1
                  - generic [ref=e169]:
                    - paragraph [ref=e171]: Live Build Tracker updated for 0.5
                    - paragraph [ref=e172]: With automatic tracking, following a build by your favorite creator has never been easier
                    - button "Start Tracking" [ref=e174]: Start Tracking
                - generic [ref=e176]:
                  - generic [ref=e177]:
                    - link "Verified Builds Check out builds made from our team of trusted partners and creators. Go to Builds Page" [ref=e179] [cursor=pointer]:
                      - /url: /poe-2/builds
                      - generic [ref=e182]:
                        - generic [ref=e183]:
                          - paragraph [ref=e184]: Verified Builds
                          - paragraph [ref=e185]: Check out builds made from our team of trusted partners and creators.
                        - button "Go to Builds Page" [ref=e187]: Go to Builds Page
                    - generic [ref=e190]:
                      - heading "Featured Builds" [level=2] [ref=e194]
                      - generic [ref=e196]:
                        - generic [ref=e198] [cursor=pointer]:
                          - link [ref=e199]:
                            - /url: /poe-2/builds/unlimited-hammers-gemling
                          - generic [ref=e203]:
                            - generic [ref=e204]: "[0.5] Unlimited Hammers - Gemling"
                            - generic [ref=e205]: Updated on Jun 4, 2026
                        - generic [ref=e208] [cursor=pointer]:
                          - link [ref=e209]:
                            - /url: /poe-2/builds/hollow-assault-beyblade
                          - generic [ref=e213]:
                            - generic [ref=e214]: Hollow Assault Beyblade
                            - generic [ref=e215]: Updated on Jun 3, 2026
                        - generic [ref=e218] [cursor=pointer]:
                          - link [ref=e219]:
                            - /url: /poe-2/builds/martial-artist-monk-build-league-starter-to-endgame
                          - generic [ref=e223]:
                            - generic [ref=e224]: "[0.5] WHIRLING Trinity Martial Artist Monk Build - League Starter to Endgame"
                            - generic [ref=e225]: Updated on Jun 4, 2026
                        - generic [ref=e228] [cursor=pointer]:
                          - link [ref=e229]:
                            - /url: /poe-2/builds/coc-spark-comet-recoup-infernalist-by-ignatius
                          - generic [ref=e233]:
                            - generic [ref=e234]: "[0.5] Comprehensive CoC Frostbolt/Spark Comet Recoup Infernalist - by Ignatius"
                            - generic [ref=e235]: Updated on Jun 4, 2026
                        - generic [ref=e238] [cursor=pointer]:
                          - link [ref=e239]:
                            - /url: /poe-2/builds/twister-spirit-walker-snoobae
                          - generic [ref=e243]:
                            - generic [ref=e244]: "[0.5] Twister Spirit Walker"
                            - generic [ref=e245]: Updated on Jun 5, 2026
                  - generic [ref=e246]:
                    - link "PoE 2 Guides Discover all of our guide content to learn more about the game. Go to Guides Page" [ref=e248] [cursor=pointer]:
                      - /url: /poe-2/guides
                      - generic [ref=e251]:
                        - generic [ref=e252]:
                          - paragraph [ref=e253]: PoE 2 Guides
                          - paragraph [ref=e254]: Discover all of our guide content to learn more about the game.
                        - button "Go to Guides Page" [ref=e256]: Go to Guides Page
                    - generic [ref=e259]:
                      - heading "Beginner Guides" [level=2] [ref=e263]
                      - generic [ref=e265]:
                        - generic [ref=e267] [cursor=pointer]:
                          - link [ref=e268]:
                            - /url: /poe-2/guides/0-5-campaign-checklist-stats-rewards-skillpoints-and-more
                          - generic [ref=e272]:
                            - generic [ref=e273]: PoE 0.5 Campaign Checklist - Stats, rewards, skillpoints and more
                            - generic [ref=e274]: Updated on Jun 2, 2026
                        - generic [ref=e277] [cursor=pointer]:
                          - link [ref=e278]:
                            - /url: /poe-2/guides/league-start-gearing-guide
                          - generic [ref=e282]:
                            - generic [ref=e283]: Gearing Like A Pro On League Start
                            - generic [ref=e284]: Updated on May 28, 2026
                        - generic [ref=e287] [cursor=pointer]:
                          - link [ref=e288]:
                            - /url: /poe-2/guides/regex
                          - generic [ref=e292]:
                            - generic [ref=e293]: PoE 2 Basic Regex Guide and the Search Bar
                            - generic [ref=e294]: Updated on May 24, 2026
                        - generic [ref=e297] [cursor=pointer]:
                          - link [ref=e298]:
                            - /url: /poe-2/guides/facebreaker-gloves-mechanics-and-best-builds
                          - generic [ref=e302]:
                            - generic [ref=e303]: "Facebreakers: Mechanics, Scaling, and Best Builds"
                            - generic [ref=e304]: Updated on May 28, 2026
                        - generic [ref=e307] [cursor=pointer]:
                          - link [ref=e308]:
                            - /url: /poe-2/guides/campaign-layout-act-1
                          - generic [ref=e312]:
                            - generic [ref=e313]: "Campaign Layout Guide: Act 1"
                            - generic [ref=e314]: Updated on May 23, 2026
                  - generic [ref=e315]:
                    - link "Version 0.5 Content Revealed! Check out all the new things coming to Update 0.5, Return of the Ancients! Reveal Summary Page" [ref=e317] [cursor=pointer]:
                      - /url: /poe-2/guides/0-5-return-of-the-ancients-content-livestream-summary
                      - generic [ref=e320]:
                        - generic [ref=e321]:
                          - paragraph [ref=e322]: Version 0.5 Content Revealed!
                          - paragraph [ref=e323]: Check out all the new things coming to Update 0.5, Return of the Ancients!
                        - button "Reveal Summary Page" [ref=e325]: Reveal Summary Page
                    - generic [ref=e328]:
                      - heading "Latest Classes" [level=2] [ref=e332]
                      - generic [ref=e334]:
                        - generic [ref=e336] [cursor=pointer]:
                          - link [ref=e337]:
                            - /url: /poe-2/guides/spirit-walker
                          - generic [ref=e341]:
                            - generic [ref=e342]: "Spirit Walker Ascendancy Class: Tree & Passives"
                            - generic [ref=e343]: Updated on Jun 1, 2026
                        - generic [ref=e346] [cursor=pointer]:
                          - link [ref=e347]:
                            - /url: /poe-2/guides/martial-artist
                          - generic [ref=e351]:
                            - generic [ref=e352]: "Martial Artist Ascendancy Class: Tree & Passives"
                            - generic [ref=e353]: Updated on Jun 1, 2026
                        - generic [ref=e356] [cursor=pointer]:
                          - link [ref=e357]:
                            - /url: /poe-2/guides/minion-summoner-gear-and-invest-priority-guide-mattjestic
                          - generic [ref=e361]:
                            - generic [ref=e362]: POE 2 Minion Summoner BIS Gears & Investment Priority Guide
                            - generic [ref=e363]: Updated on May 28, 2026
                        - generic [ref=e366] [cursor=pointer]:
                          - link [ref=e367]:
                            - /url: /poe-2/guides/classes-breakdown
                          - generic [ref=e371]:
                            - generic [ref=e372]: PoE 2 Classes & Ascendancies
                            - generic [ref=e373]: Updated on May 23, 2026
                        - generic [ref=e376] [cursor=pointer]:
                          - link [ref=e377]:
                            - /url: /poe-2/guides/monk-overview
                          - generic [ref=e381]:
                            - generic [ref=e382]: PoE 2 Monk - Overview, Skills, and Ascendancies
                            - generic [ref=e383]: Updated on May 23, 2026
                - generic [ref=e384]:
                  - link "Endgame Guides Learn about all the intricate endgame mechanics, maps, and more. Endgame Guides Hub" [ref=e387] [cursor=pointer]:
                    - /url: /poe-2/endgame-guides
                    - generic [ref=e390]:
                      - generic [ref=e391]:
                        - paragraph [ref=e392]: Endgame Guides
                        - paragraph [ref=e393]: Learn about all the intricate endgame mechanics, maps, and more.
                      - button "Endgame Guides Hub" [ref=e395]: Endgame Guides Hub
                  - link "Mechanic Guides Learn about all how things work, like statuses, ailments, defences, & more. Mechanics Guide Hub" [ref=e399] [cursor=pointer]:
                    - /url: /poe-2/mechanic-guides
                    - generic [ref=e402]:
                      - generic [ref=e403]:
                        - paragraph [ref=e404]: Mechanic Guides
                        - paragraph [ref=e405]: Learn about all how things work, like statuses, ailments, defences, & more.
                      - button "Mechanics Guide Hub" [ref=e407]: Mechanics Guide Hub
                  - link "Beginner Guides A guides hub focused for new players covering the basic topics. Coming Soon" [ref=e411] [cursor=pointer]:
                    - /url: /poe-2/guides
                    - generic [ref=e414]:
                      - generic [ref=e415]:
                        - paragraph [ref=e416]: Beginner Guides
                        - paragraph [ref=e417]: A guides hub focused for new players covering the basic topics.
                      - button "Coming Soon" [ref=e419]: Coming Soon
                - generic [ref=e422]:
                  - link "Explore Every Unique Item in Path of Exile 2 Discover build-defining powerful weapons, armor, and more! Go to Items" [ref=e424] [cursor=pointer]:
                    - /url: /poe-2/unique-items
                    - generic [ref=e427]:
                      - generic [ref=e428]:
                        - paragraph [ref=e429]: Explore Every Unique Item in Path of Exile 2
                        - paragraph [ref=e430]: Discover build-defining powerful weapons, armor, and more!
                      - button "Go to Items" [ref=e432]: Go to Items
                  - link "Meet the Mobalytics PoE 2 Team Discover our team of PoE and ARPG veterans powering Mobalytics! Learn More" [ref=e435] [cursor=pointer]:
                    - /url: /poe-2/creators
                    - generic [ref=e437]:
                      - paragraph [ref=e439]: Meet the Mobalytics PoE 2 Team
                      - paragraph [ref=e440]: Discover our team of PoE and ARPG veterans powering Mobalytics!
                      - button "Learn More" [ref=e442]: Learn More
                  - link "Have a 2nd monitor? Download our Free App Get easy access to all your Builds and more! Download App" [ref=e445] [cursor=pointer]:
                    - /url: /lol/glp/download-welcome?utm_source=app&utm_medium=owaa&utm_campaign=TzMMvA9
                    - generic [ref=e448]:
                      - generic [ref=e449]:
                        - paragraph [ref=e450]: Have a 2nd monitor? Download our Free App
                        - paragraph [ref=e451]: Get easy access to all your Builds and more!
                      - button "Download App" [ref=e453]: Download App
              - status [ref=e455]
          - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e462]:
    - banner [ref=e463]:
      - generic [ref=e464] [cursor=pointer]:
        - generic [ref=e465]: Advertisement
        - generic [ref=e466]: Remove Ads
    - generic [ref=e469] [cursor=pointer]:
      - generic [ref=e470]: Remove all ads
      - generic [ref=e471]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e472]:
        - generic [ref=e473]: Remove ads
  - button "Do Not Sell or Share My Personal Information" [ref=e477] [cursor=pointer]:
    - paragraph [ref=e479]: Do Not Sell or Share My Personal Information
```

# Test source

```ts
  9395 |                 )
  9396 |                 .not.toBeVisible();
  9397 |             });
  9398 |             break;
  9399 |           case 'TFT':
  9400 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9401 |               await expect
  9402 |                 .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
  9403 |                 .toBeVisible();
  9404 |             });
  9405 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9406 |               await expect
  9407 |                 .soft(
  9408 |                   page
  9409 |                     .locator('#tft-display-all-pages')
  9410 |                     .or(page.locator('#tft-nitro-l'))
  9411 |                     .or(page.locator('#tft-nitro-3'))
  9412 |                     .first()
  9413 |                 )
  9414 |                 .not.toBeVisible();
  9415 |             });
  9416 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9417 |               await expect
  9418 |                 .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
  9419 |                 .not.toBeVisible();
  9420 |             });
  9421 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9422 |               await expect
  9423 |                 .soft(
  9424 |                   page
  9425 |                     .locator('#web-tft-display-footer-d')
  9426 |                     .locator('xpath=..')
  9427 |                     .or(page.locator('#tft-nitro-anchor').locator('xpath=..'))
  9428 |                 )
  9429 |                 .toBeVisible();
  9430 |             });
  9431 |             break;
  9432 |           case 'PoE':
  9433 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9434 |               await expect
  9435 |                 .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
  9436 |                 .not.toBeVisible();
  9437 |             });
  9438 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9439 |               await expect
  9440 |                 .soft(
  9441 |                   page
  9442 |                     .locator('#poe-display-all-pages')
  9443 |                     .or(page.locator('#poe-nitro-l'))
  9444 |                     .or(page.locator('#poe-nitro-3'))
  9445 |                     .first()
  9446 |                 )
  9447 |                 .not.toBeVisible();
  9448 |             });
  9449 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9450 |               await expect
  9451 |                 .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
  9452 |                 .not.toBeVisible();
  9453 |             });
  9454 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9455 |               await expect
  9456 |                 .soft(
  9457 |                   page
  9458 |                     .locator('#web-poe-display-footer-d')
  9459 |                     .locator('xpath=..')
  9460 |                     .or(page.locator('#poe-nitro-anchor').locator('xpath=..'))
  9461 |                 )
  9462 |                 .not.toBeVisible();
  9463 |             });
  9464 |             break;
  9465 |           case 'PoE 2':
  9466 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9467 |               await expect
  9468 |                 .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
  9469 |                 .not.toBeVisible();
  9470 |             });
  9471 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9472 |               await expect
  9473 |                 .soft(
  9474 |                   page
  9475 |                     .locator('#poe-2-display-all-pages')
  9476 |                     .or(page.locator('#poe-2-nitro-l'))
  9477 |                     .or(page.locator('#poe-2-nitro-3'))
  9478 |                     .first()
  9479 |                 )
  9480 |                 .not.toBeVisible();
  9481 |             });
  9482 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9483 |               await expect
  9484 |                 .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
  9485 |                 .not.toBeVisible();
  9486 |             });
  9487 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9488 |               await expect
  9489 |                 .soft(
  9490 |                   page
  9491 |                     .locator('#web-poe-2-display-footer-d')
  9492 |                     .locator('xpath=..')
  9493 |                     .or(page.locator('#poe-2-nitro-anchor').locator('xpath=..'))
  9494 |                 )
> 9495 |                 .not.toBeVisible();
       |                      ^ Error: expect(locator).not.toBeVisible() failed
  9496 |             });
  9497 |             break;
  9498 |           case 'The Bazaar':
  9499 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9500 |               await expect
  9501 |                 .soft(
  9502 |                   page
  9503 |                     .locator('#the-bazaar-video-all-pages')
  9504 |                     .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
  9505 |                 )
  9506 |                 .not.toBeVisible();
  9507 |             });
  9508 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9509 |               await expect
  9510 |                 .soft(
  9511 |                   page
  9512 |                     .locator('#the-bazaar-display-all-pages')
  9513 |                     .or(page.locator('#the-bazaar-nitro-l'))
  9514 |                     .or(page.locator('#the-bazaar-nitro-3'))
  9515 |                     .first()
  9516 |                 )
  9517 |                 .not.toBeVisible();
  9518 |             });
  9519 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9520 |               await expect
  9521 |                 .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  9522 |                 .not.toBeVisible();
  9523 |             });
  9524 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9525 |               await expect
  9526 |                 .soft(
  9527 |                   page
  9528 |                     .locator('#web-the-bazaar-display-footer-d')
  9529 |                     .locator('xpath=..')
  9530 |                     .or(page.locator('#the-bazaar-nitro-anchor').locator('xpath=..'))
  9531 |                 )
  9532 |                 .not.toBeVisible();
  9533 |             });
  9534 |             break;
  9535 |           case 'Monster Hunter Wilds':
  9536 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9537 |               await expect
  9538 |                 .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
  9539 |                 .not.toBeVisible();
  9540 |             });
  9541 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9542 |               await expect
  9543 |                 .soft(
  9544 |                   page
  9545 |                     .locator('#mhw-display-all-pages')
  9546 |                     .or(page.locator('#mhw-nitro-l'))
  9547 |                     .or(page.locator('#mhw-nitro-3'))
  9548 |                     .first()
  9549 |                 )
  9550 |                 .not.toBeVisible();
  9551 |             });
  9552 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9553 |               await expect
  9554 |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
  9555 |                 .not.toBeVisible();
  9556 |             });
  9557 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9558 |               await expect
  9559 |                 .soft(
  9560 |                   page
  9561 |                     .locator('#web-mhw-display-footer-d')
  9562 |                     .locator('xpath=..')
  9563 |                     .or(page.locator('#mhw-nitro-anchor').locator('xpath=..'))
  9564 |                 )
  9565 |                 .not.toBeVisible();
  9566 |             });
  9567 |             break;
  9568 |           case 'Nightreign':
  9569 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9570 |               await expect
  9571 |                 .soft(
  9572 |                   page
  9573 |                     .locator('#elden-ring-nightreign-video-all-pages')
  9574 |                     .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
  9575 |                 )
  9576 |                 .not.toBeVisible();
  9577 |             });
  9578 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9579 |               await expect
  9580 |                 .soft(
  9581 |                   page
  9582 |                     .locator('#elden-ring-nightreign-display-all-pages')
  9583 |                     .or(page.locator('#elden-ring-nightreign-nitro-l'))
  9584 |                     .or(page.locator('#elden-ring-nightreign-nitro-3'))
  9585 |                     .first()
  9586 |                 )
  9587 |                 .not.toBeVisible();
  9588 |             });
  9589 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9590 |               await expect
  9591 |                 .soft(
  9592 |                   page
  9593 |                     .locator('#elden-ring-nightreign-display-small-all-pages')
  9594 |                     .or(page.locator('#elden-ring-nightreign-nitro-m'))
  9595 |                 )
```