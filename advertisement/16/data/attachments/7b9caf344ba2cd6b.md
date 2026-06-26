# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for ad free user - Marathon in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:9246:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-marathon-display-footer-d').locator('..').or(locator('#marathon-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-marathon-display-footer-d').locator('..').or(locator('#marathon-nitro-anchor').locator('..'))
    29 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /marathon
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
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-marathon&utm_medium=homepage&utm_source=web
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
          - /url: /marathon
          - img "Home" [ref=e101]
        - link "Profile" [ref=e104] [cursor=pointer]:
          - /url: /marathon/profile
          - img "Profile" [ref=e106]
        - link "Build Planner" [ref=e109] [cursor=pointer]:
          - /url: /marathon/planner/builds
          - img "Build Planner" [ref=e111]
        - link "Tier Lists" [ref=e114] [cursor=pointer]:
          - /url: /marathon/tier-lists
          - img "Tier Lists" [ref=e116]
        - link "Builds" [ref=e119] [cursor=pointer]:
          - /url: /marathon/builds
          - img "Builds" [ref=e121]
        - link "Runners" [ref=e124] [cursor=pointer]:
          - /url: /marathon/runners
          - img "Runners" [ref=e126]
        - link "Weapons" [ref=e129] [cursor=pointer]:
          - /url: /marathon/weapons
          - img "Weapons" [ref=e131]
        - link "Factions" [ref=e134] [cursor=pointer]:
          - /url: /marathon/factions
          - img "Factions" [ref=e136]
        - link "Maps" [ref=e139] [cursor=pointer]:
          - /url: /marathon/maps
          - img "Maps" [ref=e141]
        - link "Guides" [ref=e144] [cursor=pointer]:
          - /url: /marathon/guides
          - img "Guides" [ref=e146]
      - generic [ref=e148]:
        - main [ref=e149]:
          - generic [ref=e151]:
            - generic [ref=e152]:
              - button "Marathon Loadouts, Guides & More Learn the best loadouts, guides, rankings, and more Marathon information with Mobalytics!" [ref=e155]:
                - generic [ref=e160]:
                  - generic [ref=e161]:
                    - img [ref=e163]
                    - heading "Marathon Loadouts, Guides & More" [level=1] [ref=e164]
                  - paragraph [ref=e172]: Learn the best loadouts, guides, rankings, and more Marathon information with Mobalytics!
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - generic [ref=e177]:
                    - heading "Season 2 Nightfall" [level=2] [ref=e180]
                    - paragraph [ref=e187]:
                      - text: Explore new
                      - link "Runner Shells" [ref=e188] [cursor=pointer]:
                        - /url: /marathon/runners
                      - text: ","
                      - link "Weapons" [ref=e189] [cursor=pointer]:
                        - /url: /marathon/weapons
                      - text: ", items, and events that come with the new Season"
                  - generic [ref=e191]:
                    - link "Sentinel Runner Shell Guide The Sentinel is the new Shell that is perfect for locking down space and making sure that a potential fight in the area is in your favor. If you like to set up ambushes or make sure your back is always covered, consider playing this Runner." [ref=e193] [cursor=pointer]:
                      - /url: /marathon/runners/sentinel
                      - generic [ref=e196]:
                        - paragraph [ref=e197]: Sentinel Runner Shell Guide
                        - paragraph [ref=e198]: The Sentinel is the new Shell that is perfect for locking down space and making sure that a potential fight in the area is in your favor. If you like to set up ambushes or make sure your back is always covered, consider playing this Runner.
                    - link "KKV-9SD Guide The KKV is a new pistol-frame SMG with an integrated suppressor and designed to be a good counter to the shotgun." [ref=e200] [cursor=pointer]:
                      - /url: /marathon/weapons/kkv-9sd-smg
                      - generic [ref=e203]:
                        - paragraph [ref=e204]: KKV-9SD Guide
                        - paragraph [ref=e205]: The KKV is a new pistol-frame SMG with an integrated suppressor and designed to be a good counter to the shotgun.
                    - link "D54 Battle Pistol Guide The D54 Battle Pistol that thrives in 1v1 duels and close encounters." [ref=e207] [cursor=pointer]:
                      - /url: /marathon/weapons/d54-battle-pistol
                      - generic [ref=e210]:
                        - paragraph [ref=e211]: D54 Battle Pistol Guide
                        - paragraph [ref=e212]: The D54 Battle Pistol that thrives in 1v1 duels and close encounters.
                - generic [ref=e214]:
                  - generic [ref=e215]:
                    - heading "Runner Shell Guides" [level=2] [ref=e218]
                    - paragraph [ref=e225]:
                      - text: Learn more about each available
                      - link "Runner" [ref=e226] [cursor=pointer]:
                        - /url: /marathon/runners
                      - text: Shell in Marathon. Discover their abilities, stats, strengths, weaknesses, and recommended loadouts.
                  - generic [ref=e228]:
                    - link "Destroyer Locus" [ref=e229] [cursor=pointer]:
                      - /url: /marathon/runners/destroyer
                      - generic [ref=e233]:
                        - generic "Destroyer" [ref=e234]
                        - generic "Locus" [ref=e235]
                    - link "Vandal Glitch" [ref=e236] [cursor=pointer]:
                      - /url: /marathon/runners/vandal
                      - generic [ref=e240]:
                        - generic "Vandal" [ref=e241]
                        - generic "Glitch" [ref=e242]
                    - link "Recon Blackbird" [ref=e243] [cursor=pointer]:
                      - /url: /marathon/runners/recon
                      - generic [ref=e247]:
                        - generic "Recon" [ref=e248]
                        - generic "Blackbird" [ref=e249]
                    - link "Assassin Void" [ref=e250] [cursor=pointer]:
                      - /url: /marathon/runners/assassin
                      - generic [ref=e254]:
                        - generic "Assassin" [ref=e255]
                        - generic "Void" [ref=e256]
                    - link "Triage Aux" [ref=e257] [cursor=pointer]:
                      - /url: /marathon/runners/triage
                      - generic [ref=e261]:
                        - generic "Triage" [ref=e262]
                        - generic "Aux" [ref=e263]
                    - link "Thief Icon" [ref=e264] [cursor=pointer]:
                      - /url: /marathon/runners/thief
                      - generic [ref=e268]:
                        - generic "Thief" [ref=e269]
                        - generic "Icon" [ref=e270]
                    - link "Rook Prototype Shell" [ref=e271] [cursor=pointer]:
                      - /url: /marathon/runners/rook
                      - generic [ref=e275]:
                        - generic "Rook" [ref=e276]
                        - generic "Prototype Shell" [ref=e277]
                    - link "Sentinel Rampart" [ref=e278] [cursor=pointer]:
                      - /url: /marathon/runners/sentinel
                      - generic [ref=e282]:
                        - generic "Sentinel" [ref=e283]
                        - generic "Rampart" [ref=e284]
                - generic [ref=e285]:
                  - generic [ref=e286]:
                    - heading "Runner Shell Tier Lists" [level=2] [ref=e289]
                    - paragraph [ref=e296]:
                      - text: Learn which
                      - link "Runner Shells" [ref=e297] [cursor=pointer]:
                        - /url: /marathon/runners
                      - text: are the best for Solo and Team play.
                  - generic [ref=e300]:
                    - generic [ref=e305] [cursor=pointer]:
                      - link [ref=e306]:
                        - /url: /marathon/tier-lists/best-squad-runner-shells
                      - generic [ref=e308]:
                        - generic [ref=e309]: Runner Shell Tier List (Squad Mode)
                        - generic [ref=e310]:
                          - text: By
                          - link "Mobalytics" [ref=e311]:
                            - /url: /marathon/profile/mobalytics
                          - text: ∙
                          - generic [ref=e312]: Jun 6, 2026
                      - generic [ref=e314]: Runners
                    - generic [ref=e319] [cursor=pointer]:
                      - link [ref=e320]:
                        - /url: /marathon/tier-lists/best-solo-runner-shells
                      - generic [ref=e322]:
                        - generic [ref=e323]: Runner Shell Tier List (Solo Mode)
                        - generic [ref=e324]:
                          - text: By
                          - link "Mobalytics" [ref=e325]:
                            - /url: /marathon/profile/mobalytics
                          - text: ∙
                          - generic [ref=e326]: Jun 6, 2026
                      - generic [ref=e328]: Runners
                - generic [ref=e329]:
                  - generic [ref=e330]:
                    - heading "Runner Shell Builds" [level=2] [ref=e333]
                    - paragraph [ref=e340]:
                      - text: Explore
                      - link "Loadout Builds" [ref=e341] [cursor=pointer]:
                        - /url: /marathon/builds
                      - text: for
                      - link "Runner Shells" [ref=e342] [cursor=pointer]:
                        - /url: /marathon/runners
                      - text: based on different Cores, Implants,
                      - link "Weapons" [ref=e343] [cursor=pointer]:
                        - /url: /marathon/weapons
                      - text: ", and more."
                  - generic [ref=e345]:
                    - generic [ref=e346]:
                      - generic [ref=e351] [cursor=pointer]:
                        - link [ref=e352]:
                          - /url: /marathon/builds/byrdman-trauma-triage-endgame
                        - generic [ref=e354]:
                          - generic [ref=e355]: Trauma Triage Endgame Build
                          - generic [ref=e356]:
                            - text: By
                            - link "Byrdman" [ref=e357]:
                              - /url: /marathon/profile/byrdman
                            - text: ∙
                            - generic [ref=e358]: Mar 29, 2026
                        - generic [ref=e359]:
                          - generic [ref=e360]: Season 1
                          - generic [ref=e361]:
                            - img "presentation" [ref=e362]
                            - text: Triage
                          - generic [ref=e363]: Cryo Archive
                          - generic [ref=e364]: "+6"
                      - generic [ref=e369] [cursor=pointer]:
                        - link [ref=e370]:
                          - /url: /marathon/builds/wallzer-greed-is-good-thief
                        - generic [ref=e372]:
                          - generic [ref=e373]: Greed is Good Thief
                          - generic [ref=e374]:
                            - text: By
                            - link "Wallzer" [ref=e375]:
                              - /url: /marathon/profile/wallzer
                            - text: ∙
                            - generic [ref=e376]: Mar 27, 2026
                        - generic [ref=e377]:
                          - generic [ref=e378]: Season 1
                          - generic [ref=e379]:
                            - img "presentation" [ref=e380]
                            - text: Thief
                          - generic [ref=e381]: Outpost
                          - generic [ref=e382]: "+7"
                      - generic [ref=e387] [cursor=pointer]:
                        - link [ref=e388]:
                          - /url: /marathon/builds/siegeoc-beginner-vandal
                        - generic [ref=e390]:
                          - generic [ref=e391]: Beginner Vandal Build
                          - generic [ref=e392]:
                            - text: By
                            - link "SiegeOC" [ref=e393]:
                              - /url: /marathon/profile/siegeoc
                            - text: ∙
                            - generic [ref=e394]: Mar 23, 2026
                        - generic [ref=e395]:
                          - generic [ref=e396]: Season 1
                          - generic [ref=e397]:
                            - img "presentation" [ref=e398]
                            - text: Vandal
                          - generic [ref=e399]: Verified
                      - generic [ref=e404] [cursor=pointer]:
                        - link [ref=e405]:
                          - /url: /marathon/builds/siegeoc-super-dash-vandal
                        - generic [ref=e407]:
                          - generic [ref=e408]: Super Dash Vandal
                          - generic [ref=e409]:
                            - text: By
                            - link "SiegeOC" [ref=e410]:
                              - /url: /marathon/profile/siegeoc
                            - text: ∙
                            - generic [ref=e411]: Mar 11, 2026
                        - generic [ref=e412]:
                          - generic [ref=e413]: Season 1
                          - generic [ref=e414]:
                            - img "presentation" [ref=e415]
                            - text: Vandal
                          - generic [ref=e416]: Solo
                          - generic [ref=e417]: "+6"
                    - link "View All Builds" [ref=e418] [cursor=pointer]:
                      - /url: /marathon/builds
                      - generic [ref=e419]: View All Builds
                - link "Loadout Planner Select Shells, Weapons, Cores, Implants, and Equipment and share it with others. Create Loadoout" [ref=e421] [cursor=pointer]:
                  - /url: /marathon/planner/builds
                  - generic [ref=e424]:
                    - generic [ref=e425]:
                      - paragraph [ref=e426]: Loadout Planner
                      - paragraph [ref=e427]: Select Shells, Weapons, Cores, Implants, and Equipment and share it with others.
                    - button "Create Loadoout" [ref=e429]: Create Loadoout
              - generic [ref=e431]:
                - link "Weapons Explore all weapons, their stats, mods and how to get them. Explore Weapons" [ref=e434] [cursor=pointer]:
                  - /url: /marathon/weapons
                  - generic [ref=e437]:
                    - generic [ref=e438]:
                      - paragraph [ref=e439]: Weapons
                      - paragraph [ref=e440]: Explore all weapons, their stats, mods and how to get them.
                    - button "Explore Weapons" [ref=e442]: Explore Weapons
                - link "Factions Explore their upgrades, rank bonuses and contracts. Explore Factions" [ref=e446] [cursor=pointer]:
                  - /url: /marathon/factions
                  - generic [ref=e449]:
                    - generic [ref=e450]:
                      - paragraph [ref=e451]: Factions
                      - paragraph [ref=e452]: Explore their upgrades, rank bonuses and contracts.
                    - button "Explore Factions" [ref=e454]: Explore Factions
                - link "Maps Learn the loot spots and routes, points of interest and major locations. Explore Maps" [ref=e458] [cursor=pointer]:
                  - /url: /marathon/maps
                  - generic [ref=e461]:
                    - generic [ref=e462]:
                      - paragraph [ref=e463]: Maps
                      - paragraph [ref=e464]: Learn the loot spots and routes, points of interest and major locations.
                    - button "Explore Maps" [ref=e466]: Explore Maps
              - generic [ref=e470]:
                - generic [ref=e471]:
                  - heading "Guides & News" [level=2] [ref=e474]
                  - paragraph [ref=e481]: "Find everything you need to succeed in Marathon: from game mechanics, to advanced tips and tricks"
                - generic [ref=e483]:
                  - generic [ref=e484]:
                    - generic [ref=e489] [cursor=pointer]:
                      - link [ref=e490]:
                        - /url: /marathon/guides/patch-notes
                      - generic [ref=e492]:
                        - generic [ref=e493]: Patch Notes Breakdown (1.1.0.2)
                        - generic [ref=e494]:
                          - text: By
                          - link "Mobalytics" [ref=e495]:
                            - /url: /marathon/profile/mobalytics
                          - text: ∙
                          - generic [ref=e496]: Jun 16, 2026
                      - generic [ref=e498]: News
                    - generic [ref=e503] [cursor=pointer]:
                      - link [ref=e504]:
                        - /url: /marathon/guides/season-2-dev-update
                      - generic [ref=e506]:
                        - generic [ref=e507]: What to Expect in Marathon Season 2
                        - generic [ref=e508]:
                          - text: By
                          - link "Mobalytics" [ref=e509]:
                            - /url: /marathon/profile/mobalytics
                          - text: ∙
                          - generic [ref=e510]: May 28, 2026
                      - generic [ref=e512]: News
                    - generic [ref=e517] [cursor=pointer]:
                      - link [ref=e518]:
                        - /url: /marathon/guides/s2-launch-revealed
                      - generic [ref=e520]:
                        - generic [ref=e521]: "Marathon Season 2: NIGHTFALL Begins June 2nd"
                        - generic [ref=e522]:
                          - text: By
                          - link "Mobalytics" [ref=e523]:
                            - /url: /marathon/profile/mobalytics
                          - text: ∙
                          - generic [ref=e524]: May 13, 2026
                      - generic [ref=e526]: News
                    - generic [ref=e531] [cursor=pointer]:
                      - link [ref=e532]:
                        - /url: /marathon/guides/ranked-mode
                      - generic [ref=e534]:
                        - generic [ref=e535]: How Ranked Mode Works (Holotags and Rewards)
                        - generic [ref=e536]:
                          - text: By
                          - link "Mobalytics" [ref=e537]:
                            - /url: /marathon/profile/mobalytics
                          - text: ∙
                          - generic [ref=e538]: Mar 25, 2026
                      - generic [ref=e539]:
                        - generic [ref=e540]: Mechanics
                        - generic [ref=e541]: News
                  - link "View All Guides" [ref=e542] [cursor=pointer]:
                    - /url: /marathon/guides
                    - generic [ref=e543]: View All Guides
            - status [ref=e544]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e551]:
    - banner [ref=e552]:
      - generic [ref=e553] [cursor=pointer]:
        - generic [ref=e554]: Advertisement
        - generic [ref=e555]: Remove Ads
    - generic [ref=e558] [cursor=pointer]:
      - generic [ref=e559]: Remove all ads
      - generic [ref=e560]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e561]:
        - generic [ref=e562]: Remove ads
```

# Test source

```ts
  9872  |                 .not.toBeVisible();
  9873  |             });
  9874  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9875  |               await expect
  9876  |                 .soft(
  9877  |                   page
  9878  |                     .locator('#hades-2-display-all-pages')
  9879  |                     .or(page.locator('#hades-2-nitro-l'))
  9880  |                     .or(page.locator('#hades-2-nitro-3'))
  9881  |                     .first()
  9882  |                 )
  9883  |                 .not.toBeVisible();
  9884  |             });
  9885  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9886  |               await expect
  9887  |                 .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  9888  |                 .not.toBeVisible();
  9889  |             });
  9890  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9891  |               await expect
  9892  |                 .soft(
  9893  |                   page
  9894  |                     .locator('#web-hades-2-display-footer-d')
  9895  |                     .locator('xpath=..')
  9896  |                     .or(page.locator('#hades-2-nitro-anchor').locator('xpath=..'))
  9897  |                 )
  9898  |                 .not.toBeVisible();
  9899  |             });
  9900  |             break;
  9901  |           case 'Endfield':
  9902  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9903  |               await expect
  9904  |                 .soft(
  9905  |                   page
  9906  |                     .locator('#endfield-video-all-pages')
  9907  |                     .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
  9908  |                 )
  9909  |                 .not.toBeVisible();
  9910  |             });
  9911  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9912  |               await expect
  9913  |                 .soft(
  9914  |                   page
  9915  |                     .locator('#endfield-display-all-pages')
  9916  |                     .or(page.locator('#arknights-endfield-nitro-l'))
  9917  |                     .or(page.locator('#arknights-endfield-nitro-3'))
  9918  |                     .first()
  9919  |                 )
  9920  |                 .not.toBeVisible();
  9921  |             });
  9922  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9923  |               await expect
  9924  |                 .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
  9925  |                 .not.toBeVisible();
  9926  |             });
  9927  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9928  |               await expect
  9929  |                 .soft(
  9930  |                   page
  9931  |                     .locator('#web-arknights-endfield-display-footer-d')
  9932  |                     .locator('xpath=..')
  9933  |                     .or(page.locator('#arknights-endfield-nitro-anchor').locator('xpath=..'))
  9934  |                 )
  9935  |                 .not.toBeVisible();
  9936  |             });
  9937  |             break;
  9938  |           case 'Marathon':
  9939  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9940  |               await expect
  9941  |                 .soft(
  9942  |                   page
  9943  |                     .locator('#marathon-video-all-pages')
  9944  |                     .or(page.locator('#marathon-nitro-video').locator('xpath=..'))
  9945  |                 )
  9946  |                 .not.toBeVisible();
  9947  |             });
  9948  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9949  |               await expect
  9950  |                 .soft(
  9951  |                   page
  9952  |                     .locator('#marathon-display-all-pages')
  9953  |                     .or(page.locator('#marathon-nitro-l'))
  9954  |                     .or(page.locator('#marathon-nitro-3'))
  9955  |                     .first()
  9956  |                 )
  9957  |                 .not.toBeVisible();
  9958  |             });
  9959  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9960  |               await expect
  9961  |                 .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
  9962  |                 .not.toBeVisible();
  9963  |             });
  9964  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9965  |               await expect
  9966  |                 .soft(
  9967  |                   page
  9968  |                     .locator('#web-marathon-display-footer-d')
  9969  |                     .locator('xpath=..')
  9970  |                     .or(page.locator('#marathon-nitro-anchor').locator('xpath=..'))
  9971  |                 )
> 9972  |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
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
  10072 |                 .not.toBeVisible();
```