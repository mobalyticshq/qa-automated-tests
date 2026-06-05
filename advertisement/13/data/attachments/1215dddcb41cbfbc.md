# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for plus user - Monster Hunter Wilds in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:10020:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-mhw-display-footer-d').locator('..').or(locator('#mhw-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-mhw-display-footer-d').locator('..').or(locator('#mhw-nitro-anchor').locator('..'))
    26 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /mhw
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
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-mhw&utm_medium=homepage&utm_source=web
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
          - /url: /mhw
          - img "Home" [ref=e93]
        - link "Profile" [ref=e96] [cursor=pointer]:
          - /url: /mhw/profile
          - img "Profile" [ref=e98]
        - link "Build Planner" [ref=e101] [cursor=pointer]:
          - /url: /mhw/planner/builds
          - img "Build Planner" [ref=e103]
        - link "Builds" [ref=e106] [cursor=pointer]:
          - /url: /mhw/builds
          - img "Builds" [ref=e108]
        - link "Weapons" [ref=e111] [cursor=pointer]:
          - /url: /mhw/weapons
          - img "Weapons" [ref=e113]
        - link "Monster Guides" [ref=e116] [cursor=pointer]:
          - /url: /mhw/monster-guides
          - img "Monster Guides" [ref=e118]
        - link "Guides" [ref=e121] [cursor=pointer]:
          - /url: /mhw/guides
          - img "Guides" [ref=e123]
      - generic [ref=e125]:
        - main [ref=e126]:
          - generic [ref=e128]:
            - generic [ref=e129]:
              - 'button "MH Wilds: Builds, Weapons, and Monsters Welcome to your all-in-one base camp for Monster Hunter Wilds! Dive into meta builds, master your weapons, learn how to hunt your next monster, and much more." [ref=e132]':
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - img [ref=e140]
                    - 'heading "MH Wilds: Builds, Weapons, and Monsters" [level=1] [ref=e141]'
                  - paragraph [ref=e149]: Welcome to your all-in-one base camp for Monster Hunter Wilds! Dive into meta builds, master your weapons, learn how to hunt your next monster, and much more.
              - generic [ref=e151]:
                - link "Builds Plan out your Build or explore community creations See Builds" [ref=e154] [cursor=pointer]:
                  - /url: /mhw/builds
                  - generic [ref=e157]:
                    - generic [ref=e158]:
                      - paragraph [ref=e159]: Builds
                      - paragraph [ref=e160]: Plan out your Build or explore community creations
                    - button "See Builds" [ref=e162]: See Builds
                - link "Weapons Learn how to play any of the 14 Monster Hunter weapons Explore Weapons" [ref=e166] [cursor=pointer]:
                  - /url: /mhw/weapons
                  - generic [ref=e169]:
                    - generic [ref=e170]:
                      - paragraph [ref=e171]: Weapons
                      - paragraph [ref=e172]: Learn how to play any of the 14 Monster Hunter weapons
                    - button "Explore Weapons" [ref=e174]: Explore Weapons
                - link "Monster Guides Find out how to beat every Monster in Wilds with tips, tricks, and more Conquer Bosses" [ref=e178] [cursor=pointer]:
                  - /url: /mhw/monster-guides
                  - generic [ref=e181]:
                    - generic [ref=e182]:
                      - paragraph [ref=e183]: Monster Guides
                      - paragraph [ref=e184]: Find out how to beat every Monster in Wilds with tips, tricks, and more
                    - button "Conquer Bosses" [ref=e186]: Conquer Bosses
              - generic [ref=e191]:
                - heading "Discover More Builds" [level=2] [ref=e195]
                - generic [ref=e202]:
                  - paragraph [ref=e203]: If you're interested in a specific weapon build, be sure to check out the pages below! You can find the latest builds, or navigate to builds dediacted to your weapon of choice.
                  - paragraph [ref=e204]:
                    - text: If you are interested in posting you own build, you should explore our
                    - link "MH Wilds Build Planner" [ref=e205] [cursor=pointer]:
                      - /url: /mhw/planner/builds
                    - text: .
                - generic [ref=e207]:
                  - link "Great Sword" [ref=e208] [cursor=pointer]:
                    - /url: /mhw/great-sword-builds
                    - generic "Great Sword" [ref=e213]
                  - link "Long Sword" [ref=e214] [cursor=pointer]:
                    - /url: /mhw/long-sword-builds
                    - generic "Long Sword" [ref=e219]
                  - link "Sword & Shield" [ref=e220] [cursor=pointer]:
                    - /url: /mhw/sword-and-shield-builds
                    - generic "Sword & Shield" [ref=e225]
                  - link "Dual Blades" [ref=e226] [cursor=pointer]:
                    - /url: /mhw/dual-blades-builds
                    - generic "Dual Blades" [ref=e231]
                  - link "Hammer" [ref=e232] [cursor=pointer]:
                    - /url: /mhw/hammer-builds
                    - generic "Hammer" [ref=e237]
                  - link "Hunting Horn" [ref=e238] [cursor=pointer]:
                    - /url: /mhw/hunting-horn-builds
                    - generic "Hunting Horn" [ref=e243]
                  - link "Lance" [ref=e244] [cursor=pointer]:
                    - /url: /mhw/lance-builds
                    - generic "Lance" [ref=e249]
                  - link "Gunlance" [ref=e250] [cursor=pointer]:
                    - /url: /mhw/gunlance-builds
                    - generic "Gunlance" [ref=e255]
                  - link "Switch Axe" [ref=e256] [cursor=pointer]:
                    - /url: /mhw/switch-axe-builds
                    - generic "Switch Axe" [ref=e261]
                  - link "Charge Blade" [ref=e262] [cursor=pointer]:
                    - /url: /mhw/charge-blade-builds
                    - generic "Charge Blade" [ref=e267]
                  - link "Insect Glaive" [ref=e268] [cursor=pointer]:
                    - /url: /mhw/insect-glaive-builds
                    - generic "Insect Glaive" [ref=e273]
                  - link "Light Bowgun" [ref=e274] [cursor=pointer]:
                    - /url: /mhw/light-bowgun-builds
                    - generic "Light Bowgun" [ref=e279]
                  - link "Heavy Bowgun" [ref=e280] [cursor=pointer]:
                    - /url: /mhw/heavy-bowgun-builds
                    - generic "Heavy Bowgun" [ref=e285]
                  - link "Bow" [ref=e286] [cursor=pointer]:
                    - /url: /mhw/bow-builds
                    - generic "Bow" [ref=e291]
              - generic [ref=e298]:
                - generic [ref=e301] [cursor=pointer]:
                  - link [ref=e302]:
                    - /url: /mhw/builds/syrobes-ultimate-dual-blades-guide
                  - generic [ref=e303]:
                    - img "icon" [ref=e310]
                    - generic [ref=e311]:
                      - generic [ref=e312]: Campaign Dual Blades Guide - SYROBE (w.i.p)
                      - generic [ref=e313]:
                        - text: By
                        - link "SYROBE" [ref=e314]:
                          - /url: /mhw/profile/silent-dragon-y4orev
                        - text: ∙
                        - generic [ref=e315]: Updated on
                        - generic [ref=e316]: Apr 6, 2025
                    - generic [ref=e318]:
                      - generic [ref=e319]:
                        - img "icon" [ref=e322]
                        - generic [ref=e324]: "1"
                      - generic [ref=e325]:
                        - img "icon" [ref=e328]
                        - generic [ref=e330]: "1"
                      - generic [ref=e331]:
                        - img "icon" [ref=e334]
                        - generic [ref=e336]: "3"
                      - generic [ref=e337]:
                        - img "icon" [ref=e340]
                        - generic [ref=e342]: "1"
                      - generic [ref=e343]:
                        - img "icon" [ref=e346]
                        - generic [ref=e348]: "1"
                      - generic [ref=e349]:
                        - img "icon" [ref=e352]
                        - generic [ref=e354]: "1"
                      - generic [ref=e355]:
                        - img "icon" [ref=e358]
                        - generic [ref=e360]: "1"
                      - generic [ref=e361]:
                        - img "icon" [ref=e364]
                        - generic [ref=e366]: "5"
                  - generic [ref=e367]:
                    - generic [ref=e369]:
                      - button "154 Favorites" [ref=e370]:
                        - img [ref=e371]
                        - text: 154 Favorites
                      - button "Share" [ref=e372]:
                        - img [ref=e373]
                        - text: Share
                    - generic [ref=e374]:
                      - generic [ref=e375]:
                        - img "presentation" [ref=e376]
                        - text: Dual Blades
                      - generic [ref=e377]:
                        - img "presentation" [ref=e378]
                        - text: Dual Blades
                      - generic [ref=e379]: High Rank
                      - generic [ref=e380]:
                        - img "presentation" [ref=e381]
                        - text: Raw
                      - generic [ref=e382]:
                        - img "presentation" [ref=e383]
                        - text: Paralysis
                      - generic [ref=e384]: "+7"
                - generic [ref=e387] [cursor=pointer]:
                  - link [ref=e388]:
                    - /url: /mhw/builds/sns-immortal-build-ss7even
                  - generic [ref=e389]:
                    - generic [ref=e394]:
                      - generic [ref=e395]: SNS Immortal Build - Wound & Regen
                      - generic [ref=e396]:
                        - text: By
                        - link "Ss7even" [ref=e397]:
                          - /url: /mhw/profile/iron-storm-op2mbc
                        - text: ∙
                        - generic [ref=e398]: Updated on
                        - generic [ref=e399]: Mar 18, 2025
                    - generic [ref=e401]:
                      - generic [ref=e402]:
                        - img "icon" [ref=e405]
                        - generic [ref=e407]: "1"
                      - generic [ref=e408]:
                        - img "icon" [ref=e411]
                        - generic [ref=e413]: "1"
                      - generic [ref=e414]:
                        - img "icon" [ref=e417]
                        - generic [ref=e419]: "1"
                      - generic [ref=e420]:
                        - img "icon" [ref=e423]
                        - generic [ref=e425]: "1"
                      - generic [ref=e426]:
                        - img "icon" [ref=e429]
                        - generic [ref=e431]: "5"
                      - generic [ref=e432]:
                        - img "icon" [ref=e435]
                        - generic [ref=e437]: "2"
                      - generic [ref=e438]:
                        - img "icon" [ref=e441]
                        - generic [ref=e443]: "1"
                      - generic [ref=e444]:
                        - img "icon" [ref=e447]
                        - generic [ref=e449]: "1"
                      - generic [ref=e450]:
                        - img "icon" [ref=e453]
                        - generic [ref=e455]: "1"
                      - generic [ref=e456]:
                        - img "icon" [ref=e459]
                        - generic [ref=e461]: "3"
                      - generic [ref=e462]:
                        - img "icon" [ref=e465]
                        - generic [ref=e467]: "3"
                      - generic [ref=e468]:
                        - img "icon" [ref=e471]
                        - generic [ref=e473]: "1"
                      - generic [ref=e474]:
                        - img "icon" [ref=e477]
                        - generic [ref=e479]: "3"
                      - generic [ref=e480]:
                        - img "icon" [ref=e483]
                        - generic [ref=e485]: "3"
                      - generic [ref=e486]:
                        - img "icon" [ref=e489]
                        - generic [ref=e491]: "2"
                      - generic [ref=e492]:
                        - img "icon" [ref=e495]
                        - generic [ref=e497]: "3"
                      - generic [ref=e498]:
                        - img "icon" [ref=e501]
                        - generic [ref=e503]: "2"
                      - generic [ref=e504]:
                        - img "icon" [ref=e507]
                        - generic [ref=e509]: "2"
                      - generic [ref=e510]:
                        - img "icon" [ref=e513]
                        - generic [ref=e515]: "2"
                  - generic [ref=e516]:
                    - generic [ref=e518]:
                      - button "150 Favorites" [ref=e519]:
                        - img [ref=e520]
                        - text: 150 Favorites
                      - button "Share" [ref=e521]:
                        - img [ref=e522]
                        - text: Share
                    - generic [ref=e523]:
                      - generic [ref=e524]:
                        - img "presentation" [ref=e525]
                        - text: Sword & Shield
                      - generic [ref=e526]:
                        - img "presentation" [ref=e527]
                        - text: Raw
                      - generic [ref=e528]:
                        - img "presentation" [ref=e529]
                        - text: Fire
                      - generic [ref=e530]:
                        - img "presentation" [ref=e531]
                        - text: Water
                      - generic [ref=e532]:
                        - img "presentation" [ref=e533]
                        - text: Thunder
                      - generic [ref=e534]: "+14"
                - generic [ref=e537] [cursor=pointer]:
                  - link [ref=e538]:
                    - /url: /mhw/builds/hr41-dps-frenzy-burst-sword-and-sheild-eravin
                  - generic [ref=e539]:
                    - img "icon" [ref=e546]
                    - generic [ref=e547]:
                      - generic [ref=e548]: HR41+ Max DPS Frenzy Burst Sword & Shield
                      - generic [ref=e549]:
                        - text: By
                        - link "Eravin" [ref=e550]:
                          - /url: /mhw/profile/eravin
                        - text: ∙
                        - generic [ref=e551]: Updated on
                        - generic [ref=e552]: Apr 2, 2025
                    - generic [ref=e554]:
                      - generic [ref=e555]:
                        - img "icon" [ref=e558]
                        - generic [ref=e560]: "5"
                      - generic [ref=e561]:
                        - img "icon" [ref=e564]
                        - generic [ref=e566]: "3"
                      - generic [ref=e567]:
                        - img "icon" [ref=e570]
                        - generic [ref=e572]: "5"
                      - generic [ref=e573]:
                        - img "icon" [ref=e576]
                        - generic [ref=e578]: "1"
                      - generic [ref=e579]:
                        - img "icon" [ref=e582]
                        - generic [ref=e584]: "2"
                      - generic [ref=e585]:
                        - img "icon" [ref=e588]
                        - generic [ref=e590]: "3"
                      - generic [ref=e591]:
                        - img "icon" [ref=e594]
                        - generic [ref=e596]: "1"
                      - generic [ref=e597]:
                        - img "icon" [ref=e600]
                        - generic [ref=e602]: "3"
                      - generic [ref=e603]:
                        - img "icon" [ref=e606]
                        - generic [ref=e608]: "2"
                      - generic [ref=e609]:
                        - img "icon" [ref=e612]
                        - generic [ref=e614]: "3"
                      - generic [ref=e615]:
                        - img "icon" [ref=e618]
                        - generic [ref=e620]: "3"
                      - generic [ref=e621]:
                        - img "icon" [ref=e624]
                        - generic [ref=e626]: "2"
                      - generic [ref=e627]:
                        - img "icon" [ref=e630]
                        - generic [ref=e632]: "2"
                  - generic [ref=e633]:
                    - generic [ref=e635]:
                      - button "72 Favorites" [ref=e636]:
                        - img [ref=e637]
                        - text: 72 Favorites
                      - button "Share" [ref=e638]:
                        - img [ref=e639]
                        - text: Share
                    - generic [ref=e640]:
                      - generic [ref=e641]:
                        - img "presentation" [ref=e642]
                        - text: Sword & Shield
                      - generic [ref=e643]:
                        - img "presentation" [ref=e644]
                        - text: Sword & Shield
                      - generic [ref=e645]: DPS
                      - generic [ref=e646]: Speedrunning
                      - generic [ref=e647]: High Rank
                      - generic [ref=e648]: "+7"
                - generic [ref=e651] [cursor=pointer]:
                  - link [ref=e652]:
                    - /url: /mhw/builds/priam-meta-gunlance
                  - generic [ref=e653]:
                    - img "icon" [ref=e660]
                    - generic [ref=e661]:
                      - generic [ref=e662]: "TU1 AT Rey Dau: Priam's Meta Gunlance"
                      - generic [ref=e663]:
                        - text: By
                        - link "Mobalytics" [ref=e664]:
                          - /url: /mhw/profile/mobalytics
                        - text: ∙
                        - generic [ref=e665]: Updated on
                        - generic [ref=e666]: May 2, 2025
                    - generic [ref=e668]:
                      - generic [ref=e669]:
                        - img "icon" [ref=e672]
                        - generic [ref=e674]: "1"
                      - generic [ref=e675]:
                        - img "icon" [ref=e678]
                        - generic [ref=e680]: "3"
                      - generic [ref=e681]:
                        - img "icon" [ref=e684]
                        - generic [ref=e686]: "1"
                      - generic [ref=e687]:
                        - img "icon" [ref=e690]
                        - generic [ref=e692]: "1"
                      - generic [ref=e693]:
                        - img "icon" [ref=e696]
                        - generic [ref=e698]: "1"
                      - generic [ref=e699]:
                        - img "icon" [ref=e702]
                        - generic [ref=e704]: "1"
                      - generic [ref=e705]:
                        - img "icon" [ref=e708]
                        - generic [ref=e710]: "5"
                      - generic [ref=e711]:
                        - img "icon" [ref=e714]
                        - generic [ref=e716]: "2"
                      - generic [ref=e717]:
                        - img "icon" [ref=e720]
                        - generic [ref=e722]: "2"
                      - generic [ref=e723]:
                        - img "icon" [ref=e726]
                        - generic [ref=e728]: "2"
                      - generic [ref=e729]:
                        - img "icon" [ref=e732]
                        - generic [ref=e734]: "2"
                      - generic [ref=e735]:
                        - img "icon" [ref=e738]
                        - generic [ref=e740]: "2"
                      - generic [ref=e741]:
                        - img "icon" [ref=e744]
                        - generic [ref=e746]: "1"
                      - generic [ref=e747]:
                        - img "icon" [ref=e750]
                        - generic [ref=e752]: "3"
                      - generic [ref=e753]:
                        - img "icon" [ref=e756]
                        - generic [ref=e758]: "1"
                      - generic [ref=e759]:
                        - img "icon" [ref=e762]
                        - generic [ref=e764]: "3"
                      - generic [ref=e765]:
                        - img "icon" [ref=e768]
                        - generic [ref=e770]: "3"
                      - generic [ref=e771]:
                        - img "icon" [ref=e774]
                        - generic [ref=e776]: "3"
                      - generic [ref=e777]:
                        - img "icon" [ref=e780]
                        - generic [ref=e782]: "2"
                  - generic [ref=e783]:
                    - generic [ref=e785]:
                      - button "57 Favorites" [ref=e786]:
                        - img [ref=e787]
                        - text: 57 Favorites
                      - button "Share" [ref=e788]:
                        - img [ref=e789]
                        - text: Share
                    - generic [ref=e790]:
                      - generic [ref=e791]:
                        - img "presentation" [ref=e792]
                        - text: Gun Lance
                      - generic [ref=e793]:
                        - img "presentation" [ref=e794]
                        - text: Gun Lance
                      - generic [ref=e795]: High Rank
                      - generic [ref=e796]: DPS
                      - generic [ref=e797]:
                        - img "presentation" [ref=e798]
                        - text: Raw
                      - generic [ref=e799]: "+2"
                - generic [ref=e802] [cursor=pointer]:
                  - link [ref=e803]:
                    - /url: /mhw/builds/dual-blade-dps-ss7even
                  - generic [ref=e804]:
                    - generic [ref=e809]:
                      - generic [ref=e810]: Dual Blades Best DPS Build - Adaptative with Artian weapon
                      - generic [ref=e811]:
                        - text: By
                        - link "Ss7even" [ref=e812]:
                          - /url: /mhw/profile/iron-storm-op2mbc
                        - text: ∙
                        - generic [ref=e813]: Updated on
                        - generic [ref=e814]: Mar 8, 2025
                    - generic [ref=e816]:
                      - generic [ref=e817]:
                        - img "icon" [ref=e820]
                        - generic [ref=e822]: "1"
                      - generic [ref=e823]:
                        - img "icon" [ref=e826]
                        - generic [ref=e828]: "2"
                      - generic [ref=e829]:
                        - img "icon" [ref=e832]
                        - generic [ref=e834]: "5"
                      - generic [ref=e835]:
                        - img "icon" [ref=e838]
                        - generic [ref=e840]: "3"
                      - generic [ref=e841]:
                        - img "icon" [ref=e844]
                        - generic [ref=e846]: "3"
                      - generic [ref=e847]:
                        - img "icon" [ref=e850]
                        - generic [ref=e852]: "5"
                      - generic [ref=e853]:
                        - img "icon" [ref=e856]
                        - generic [ref=e858]: "1"
                      - generic [ref=e859]:
                        - img "icon" [ref=e862]
                        - generic [ref=e864]: "3"
                      - generic [ref=e865]:
                        - img "icon" [ref=e868]
                        - generic [ref=e870]: "3"
                      - generic [ref=e871]:
                        - img "icon" [ref=e874]
                        - generic [ref=e876]: "1"
                      - generic [ref=e877]:
                        - img "icon" [ref=e880]
                        - generic [ref=e882]: "3"
                      - generic [ref=e883]:
                        - img "icon" [ref=e886]
                        - generic [ref=e888]: "1"
                      - generic [ref=e889]:
                        - img "icon" [ref=e892]
                        - generic [ref=e894]: "4"
                      - generic [ref=e895]:
                        - img "icon" [ref=e898]
                        - generic [ref=e900]: "2"
                      - generic [ref=e901]:
                        - img "icon" [ref=e904]
                        - generic [ref=e906]: "2"
                  - generic [ref=e907]:
                    - generic [ref=e909]:
                      - button "34 Favorites" [ref=e910]:
                        - img [ref=e911]
                        - text: 34 Favorites
                      - button "Share" [ref=e912]:
                        - img [ref=e913]
                        - text: Share
                    - generic [ref=e914]:
                      - generic [ref=e915]:
                        - img "presentation" [ref=e916]
                        - text: Raw
                      - generic [ref=e917]:
                        - img "presentation" [ref=e918]
                        - text: Fire
                      - generic [ref=e919]:
                        - img "presentation" [ref=e920]
                        - text: Water
                      - generic [ref=e921]:
                        - img "presentation" [ref=e922]
                        - text: Thunder
                      - generic [ref=e923]:
                        - img "presentation" [ref=e924]
                        - text: Ice
                      - generic [ref=e925]: "+11"
                - button "Show more" [ref=e926] [cursor=pointer]
              - generic [ref=e930]:
                - heading "Latest Guides and News" [level=2] [ref=e934]
                - generic [ref=e936]:
                  - generic [ref=e939] [cursor=pointer]:
                    - link [ref=e940]:
                      - /url: /mhw/guides/event-quests-tracker
                    - generic [ref=e942]:
                      - generic [ref=e943]: Event Quests Tracker (Start and End Times)
                      - generic [ref=e944]:
                        - text: By
                        - link "Mobalytics" [ref=e945]:
                          - /url: /mhw/profile/mobalytics
                        - text: ∙
                        - generic [ref=e946]: Updated on
                        - generic [ref=e947]: Jun 3, 2026
                    - generic [ref=e948]:
                      - generic [ref=e950]:
                        - button "12 Favorites" [ref=e951]:
                          - img [ref=e952]
                          - text: 12 Favorites
                        - button "Share" [ref=e953]:
                          - img [ref=e954]
                          - text: Share
                      - generic [ref=e956]: News
                  - generic [ref=e959] [cursor=pointer]:
                    - link [ref=e960]:
                      - /url: /mhw/guides/quest-counter-guide
                    - generic [ref=e962]:
                      - generic [ref=e963]: "Monster Hunter Wilds: Quest Counter Guide"
                      - generic [ref=e964]:
                        - text: By
                        - link "Mobalytics" [ref=e965]:
                          - /url: /mhw/profile/mobalytics
                        - text: ∙
                        - generic [ref=e966]: Updated on
                        - generic [ref=e967]: Mar 4, 2026
                    - generic [ref=e968]:
                      - generic [ref=e970]:
                        - button "Add to Favorites" [ref=e971]:
                          - img [ref=e972]
                          - text: Add to Favorites
                        - button "Share" [ref=e973]:
                          - img [ref=e974]
                          - text: Share
                      - generic [ref=e975]:
                        - generic [ref=e976]: Beginner
                        - generic [ref=e977]: Guides
                  - generic [ref=e980] [cursor=pointer]:
                    - link [ref=e981]:
                      - /url: /mhw/guides/new-and-returning-monsters
                    - generic [ref=e983]:
                      - generic [ref=e984]: Monster Hunter Wilds New & Returning Monsters
                      - generic [ref=e985]:
                        - text: By
                        - link "Mobalytics" [ref=e986]:
                          - /url: /mhw/profile/mobalytics
                        - text: ∙
                        - generic [ref=e987]: Updated on
                        - generic [ref=e988]: Mar 4, 2026
                    - generic [ref=e989]:
                      - generic [ref=e991]:
                        - button "Add to Favorites" [ref=e992]:
                          - img [ref=e993]
                          - text: Add to Favorites
                        - button "Share" [ref=e994]:
                          - img [ref=e995]
                          - text: Share
                      - generic [ref=e997]: Monsters
                  - generic [ref=e1000] [cursor=pointer]:
                    - link [ref=e1001]:
                      - /url: /mhw/guides/what-is-monster-hunter-wilds
                    - generic [ref=e1003]:
                      - generic [ref=e1004]: What Is Monster Hunter Wilds?
                      - generic [ref=e1005]:
                        - text: By
                        - link "Mobalytics" [ref=e1006]:
                          - /url: /mhw/profile/mobalytics
                        - text: ∙
                        - generic [ref=e1007]: Updated on
                        - generic [ref=e1008]: Mar 4, 2026
                    - generic [ref=e1009]:
                      - generic [ref=e1011]:
                        - button "Add to Favorites" [ref=e1012]:
                          - img [ref=e1013]
                          - text: Add to Favorites
                        - button "Share" [ref=e1014]:
                          - img [ref=e1015]
                          - text: Share
                      - generic [ref=e1016]:
                        - generic [ref=e1017]: News
                        - generic [ref=e1018]: Beginner
                  - generic [ref=e1021] [cursor=pointer]:
                    - link [ref=e1022]:
                      - /url: /mhw/guides/release-date
                    - generic [ref=e1024]:
                      - generic [ref=e1025]: Monster Hunter Wilds Release Date, Times, & Free Updates
                      - generic [ref=e1026]:
                        - text: By
                        - link "Mobalytics" [ref=e1027]:
                          - /url: /mhw/profile/mobalytics
                        - text: ∙
                        - generic [ref=e1028]: Updated on
                        - generic [ref=e1029]: Mar 4, 2026
                    - generic [ref=e1030]:
                      - generic [ref=e1032]:
                        - button "Add to Favorites" [ref=e1033]:
                          - img [ref=e1034]
                          - text: Add to Favorites
                        - button "Share" [ref=e1035]:
                          - img [ref=e1036]
                          - text: Share
                      - generic [ref=e1038]: News
                - button "Show more" [ref=e1039] [cursor=pointer]
            - status [ref=e1040]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e1047]:
    - banner [ref=e1048]:
      - generic [ref=e1049] [cursor=pointer]:
        - generic [ref=e1050]: Advertisement
        - generic [ref=e1051]: Remove Ads
    - generic [ref=e1054] [cursor=pointer]:
      - generic [ref=e1055]: Remove all ads
      - generic [ref=e1056]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e1057]:
        - generic [ref=e1058]: Remove ads
  - button "Do Not Sell or Share My Personal Information" [ref=e1062] [cursor=pointer]:
    - paragraph [ref=e1064]: Do Not Sell or Share My Personal Information
```

# Test source

```ts
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
  10306 |                 .not.toBeVisible();
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
> 10339 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
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
  10407 |                 .not.toBeVisible();
  10408 |             });
  10409 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10410 |               await expect
  10411 |                 .soft(
  10412 |                   page
  10413 |                     .locator('#web-riftbound-display-footer-d')
  10414 |                     .locator('xpath=..')
  10415 |                     .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
  10416 |                 )
  10417 |                 .not.toBeVisible();
  10418 |             });
  10419 |             break;
  10420 |           case '2XKO':
  10421 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10422 |               await expect
  10423 |                 .soft(
  10424 |                   page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..'))
  10425 |                 )
  10426 |                 .not.toBeVisible();
  10427 |             });
  10428 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10429 |               await expect
  10430 |                 .soft(
  10431 |                   page
  10432 |                     .locator('#xko-display-all-pages')
  10433 |                     .or(page.locator('#\\32 xko-nitro-l'))
  10434 |                     .or(page.locator('#\\32 xko-nitro-3'))
  10435 |                     .first()
  10436 |                 )
  10437 |                 .not.toBeVisible();
  10438 |             });
  10439 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
```