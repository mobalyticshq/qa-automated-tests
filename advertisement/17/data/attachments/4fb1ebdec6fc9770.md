# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for plus user - Hades 2 in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:10020:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-hades-2-display-footer-d').locator('..').or(locator('#hades-2-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-hades-2-display-footer-d').locator('..').or(locator('#hades-2-nitro-anchor').locator('..'))
    30 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /hades-2
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
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-hades-2&utm_medium=homepage&utm_source=web
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
          - /url: /hades-2
          - img "Home" [ref=e101]
        - link "Profile" [ref=e104] [cursor=pointer]:
          - /url: /hades-2/profile
          - img "Profile" [ref=e106]
        - link "Builds" [ref=e109] [cursor=pointer]:
          - /url: /hades-2/builds
          - img "Builds" [ref=e111]
        - link "Build Planner" [ref=e114] [cursor=pointer]:
          - /url: /hades-2/planner/builds
          - img "Build Planner" [ref=e116]
        - link "Tier List" [ref=e120] [cursor=pointer]:
          - /url: /hades-2/tier-lists
          - img "Tier List" [ref=e122]
        - link "Guides" [ref=e125] [cursor=pointer]:
          - /url: /hades-2/guides
          - img "Guides" [ref=e127]
        - link "Wiki" [ref=e130] [cursor=pointer]:
          - /url: /hades-2/wiki
          - img "Wiki" [ref=e132]
      - generic [ref=e134]:
        - main [ref=e135]:
          - generic [ref=e137]:
            - generic [ref=e138]:
              - button "Hades 2 - Builds, Tier Lists, and Guides - Mobalytics Whether you're a Hades 2 beginner or veteran, we've got you covered with Builds, Tier Lists, Guides and more." [ref=e141]:
                - generic [ref=e146]:
                  - generic [ref=e147]:
                    - img [ref=e149]
                    - heading "Hades 2 - Builds, Tier Lists, and Guides - Mobalytics" [level=1] [ref=e150]
                  - paragraph [ref=e158]: Whether you're a Hades 2 beginner or veteran, we've got you covered with Builds, Tier Lists, Guides and more.
              - generic [ref=e160]:
                - link "Builds Explore builds for each Weapon and Aspect See Builds" [ref=e163] [cursor=pointer]:
                  - /url: /hades-2/builds
                  - generic [ref=e166]:
                    - generic [ref=e167]:
                      - paragraph [ref=e168]: Builds
                      - paragraph [ref=e169]: Explore builds for each Weapon and Aspect
                    - button "See Builds" [ref=e171]: See Builds
                - link "Tier Lists Understand how to optimize your options Master Meta" [ref=e175] [cursor=pointer]:
                  - /url: /hades-2/tier-lists
                  - generic [ref=e178]:
                    - generic [ref=e179]:
                      - paragraph [ref=e180]: Tier Lists
                      - paragraph [ref=e181]: Understand how to optimize your options
                    - button "Master Meta" [ref=e183]: Master Meta
                - link "Guides Learn the fundamental mechanics and systems Explore Guides" [ref=e187] [cursor=pointer]:
                  - /url: /hades-2/guides
                  - generic [ref=e190]:
                    - generic [ref=e191]:
                      - paragraph [ref=e192]: Guides
                      - paragraph [ref=e193]: Learn the fundamental mechanics and systems
                    - button "Explore Guides" [ref=e195]: Explore Guides
              - generic [ref=e198]:
                - link "Craft your own Hades 2 Builds Channel your inner Hephaestus whether you want to theorycraft in secret or share to the community! Build Planner" [ref=e200] [cursor=pointer]:
                  - /url: /hades-2/planner/builds
                  - generic [ref=e202]:
                    - paragraph [ref=e204]: Craft your own Hades 2 Builds
                    - paragraph [ref=e205]: Channel your inner Hephaestus whether you want to theorycraft in secret or share to the community!
                    - button "Build Planner" [ref=e207]: Build Planner
                - generic [ref=e210]:
                  - heading "Boss Guides (Guardians)" [level=2] [ref=e214]
                  - paragraph [ref=e222]:
                    - text: Learn how to beat
                    - link "Boss mechanics" [ref=e223] [cursor=pointer]:
                      - /url: /hades-2/guides?ws-ngf1-4=tag-topic%2CBosses
                    - text: with in-depth clips and explanations.
                  - generic [ref=e225]:
                    - link "Hecate Erebus" [ref=e226] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-hecate
                      - generic [ref=e230]:
                        - generic "Hecate" [ref=e231]
                        - generic "Erebus" [ref=e232]
                    - link "Scylla Oceanus" [ref=e233] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-scylla
                      - generic [ref=e237]:
                        - generic "Scylla" [ref=e238]
                        - generic "Oceanus" [ref=e239]
                    - link "Cerberus Fields of Mourning" [ref=e240] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-cerberus
                      - generic [ref=e244]:
                        - generic "Cerberus" [ref=e245]
                        - generic "Fields of Mourning" [ref=e246]
                    - link "Chronos Tartarus" [ref=e247] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-chronos
                      - generic [ref=e251]:
                        - generic "Chronos" [ref=e252]
                        - generic "Tartarus" [ref=e253]
                    - link "Polyphemus Infamous Cyclops" [ref=e254] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-polyphemus
                      - generic [ref=e258]:
                        - generic "Polyphemus" [ref=e259]
                        - generic "Infamous Cyclops" [ref=e260]
                    - link "Eris Strife Incarnate" [ref=e261] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-eris
                      - generic [ref=e265]:
                        - generic "Eris" [ref=e266]
                        - generic "Strife Incarnate" [ref=e267]
                    - link "Prometheus Titan of Foresight" [ref=e268] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-prometheus
                      - generic [ref=e272]:
                        - generic "Prometheus" [ref=e273]
                        - generic "Titan of Foresight" [ref=e274]
                    - link "Typhon Father of All Monsters" [ref=e275] [cursor=pointer]:
                      - /url: /hades-2/guides/how-to-beat-typhon
                      - generic [ref=e279]:
                        - generic "Typhon" [ref=e280]
                        - generic "Father of All Monsters" [ref=e281]
                - generic [ref=e283]:
                  - heading "Explore Nocturnal Arms Builds (Weapons)" [level=2] [ref=e287]
                  - paragraph [ref=e295]:
                    - text: See
                    - link "Builds" [ref=e296] [cursor=pointer]:
                      - /url: /hades-2/builds
                    - text: for different Aspects or
                    - link "Create" [ref=e297] [cursor=pointer]:
                      - /url: /hades-2/planner/builds
                    - text: your own.
                  - generic [ref=e299]:
                    - link "Descura The Witches Staff" [ref=e300] [cursor=pointer]:
                      - /url: /hades-2/descura-builds
                      - generic [ref=e304]:
                        - generic "Descura" [ref=e305]
                        - generic "The Witches Staff" [ref=e306]
                    - link "Lim and Oros Sister Blades" [ref=e307] [cursor=pointer]:
                      - /url: /hades-2/lim-and-oros-builds
                      - generic [ref=e311]:
                        - generic "Lim and Oros" [ref=e312]
                        - generic "Sister Blades" [ref=e313]
                    - link "Revaal Argent Skull" [ref=e314] [cursor=pointer]:
                      - /url: /hades-2/revaal-builds
                      - generic [ref=e318]:
                        - generic "Revaal" [ref=e319]
                        - generic "Argent Skull" [ref=e320]
                    - link "Xinth Black Coat" [ref=e321] [cursor=pointer]:
                      - /url: /hades-2/xinth-builds
                      - generic [ref=e325]:
                        - generic "Xinth" [ref=e326]
                        - generic "Black Coat" [ref=e327]
                    - link "Ygnium Umbral Flames" [ref=e328] [cursor=pointer]:
                      - /url: /hades-2/ygnium-builds
                      - generic [ref=e332]:
                        - generic "Ygnium" [ref=e333]
                        - generic "Umbral Flames" [ref=e334]
                    - link "Zorephet Moonstone Axe" [ref=e335] [cursor=pointer]:
                      - /url: /hades-2/zorephet-builds
                      - generic [ref=e339]:
                        - generic "Zorephet" [ref=e340]
                        - generic "Moonstone Axe" [ref=e341]
                - generic [ref=e343]:
                  - heading "God Guides" [level=2] [ref=e347]
                  - paragraph [ref=e355]: Understand the effects and synergies of each core God.
                  - generic [ref=e357]:
                    - link "Apollo" [ref=e358] [cursor=pointer]:
                      - /url: /hades-2/guides/apollo
                      - generic "Apollo" [ref=e363]
                    - link "Aphrodite" [ref=e364] [cursor=pointer]:
                      - /url: /hades-2/guides/aphrodite
                      - generic "Aphrodite" [ref=e369]
                    - link "Ares" [ref=e370] [cursor=pointer]:
                      - /url: /hades-2/guides/ares
                      - generic "Ares" [ref=e375]
                    - link "Demeter" [ref=e376] [cursor=pointer]:
                      - /url: /hades-2/guides/demeter
                      - generic "Demeter" [ref=e381]
                    - link "Hera" [ref=e382] [cursor=pointer]:
                      - /url: /hades-2/guides/hera
                      - generic "Hera" [ref=e387]
                    - link "Hephaestus" [ref=e388] [cursor=pointer]:
                      - /url: /hades-2/guides/hephaestus
                      - generic "Hephaestus" [ref=e393]
                    - link "Hestia" [ref=e394] [cursor=pointer]:
                      - /url: /hades-2/guides/hestia
                      - generic "Hestia" [ref=e399]
                    - link "Poseidon" [ref=e400] [cursor=pointer]:
                      - /url: /hades-2/guides/poseidon
                      - generic "Poseidon" [ref=e405]
                    - link "Zeus" [ref=e406] [cursor=pointer]:
                      - /url: /hades-2/guides/zeus
                      - generic "Zeus" [ref=e411]
              - generic [ref=e413]:
                - generic [ref=e415]:
                  - heading "Recent Builds" [level=2] [ref=e419]
                  - generic [ref=e421]:
                    - generic [ref=e424] [cursor=pointer]:
                      - link [ref=e425]:
                        - /url: /hades-2/builds/thanatos-axe-max-damage
                      - generic [ref=e427]:
                        - generic [ref=e428]: Than Axe Max Damage
                        - generic [ref=e429]:
                          - text: By
                          - link "HookieDookie" [ref=e430]:
                            - /url: /hades-2/profile/iron-key-zazrd3
                          - text: ∙
                          - generic [ref=e431]: Updated on
                          - generic [ref=e432]: Jul 1, 2026
                      - generic [ref=e433]:
                        - generic [ref=e435]:
                          - button "38 Favorites" [ref=e436]:
                            - img [ref=e437]
                            - text: 38 Favorites
                          - button "Share" [ref=e438]:
                            - img [ref=e439]
                            - text: Share
                        - generic [ref=e440]:
                          - generic [ref=e441]:
                            - img "presentation" [ref=e442]
                            - text: Zorephet (Moonstone Axe)
                          - generic [ref=e443]:
                            - img "presentation" [ref=e444]
                            - text: Aspect of Thanatos (Axe)
                          - generic [ref=e445]: Verified
                    - generic [ref=e448] [cursor=pointer]:
                      - link [ref=e449]:
                        - /url: /hades-2/builds/aspect-of-the-morrigan
                      - generic [ref=e451]:
                        - generic [ref=e452]: The Morrigan Blood Triad Build
                        - generic [ref=e453]:
                          - text: By
                          - link "HookieDookie" [ref=e454]:
                            - /url: /hades-2/profile/iron-key-zazrd3
                          - text: ∙
                          - generic [ref=e455]: Updated on
                          - generic [ref=e456]: Jun 29, 2026
                      - generic [ref=e457]:
                        - generic [ref=e459]:
                          - button "42 Favorites" [ref=e460]:
                            - img [ref=e461]
                            - text: 42 Favorites
                          - button "Share" [ref=e462]:
                            - img [ref=e463]
                            - text: Share
                        - generic [ref=e464]:
                          - generic [ref=e465]:
                            - img "presentation" [ref=e466]
                            - text: Lim and Oros (Sister Blades)
                          - generic [ref=e467]:
                            - img "presentation" [ref=e468]
                            - text: Aspect of the Morrigan (Blades)
                          - generic [ref=e469]: Verified
                    - generic [ref=e472] [cursor=pointer]:
                      - link [ref=e473]:
                        - /url: /hades-2/builds/persephone-skulls-blast-build
                      - generic [ref=e475]:
                        - generic [ref=e476]: Persephone Skulls Blast Build
                        - generic [ref=e477]:
                          - text: By
                          - link "HookieDookie" [ref=e478]:
                            - /url: /hades-2/profile/iron-key-zazrd3
                          - text: ∙
                          - generic [ref=e479]: Updated on
                          - generic [ref=e480]: Jun 15, 2026
                      - generic [ref=e481]:
                        - generic [ref=e483]:
                          - button "14 Favorites" [ref=e484]:
                            - img [ref=e485]
                            - text: 14 Favorites
                          - button "Share" [ref=e486]:
                            - img [ref=e487]
                            - text: Share
                        - generic [ref=e488]:
                          - generic [ref=e489]:
                            - img "presentation" [ref=e490]
                            - text: Revaal (Argent Skull)
                          - generic [ref=e491]: Verified
                          - generic [ref=e492]:
                            - img "presentation" [ref=e493]
                            - text: Aspect of Persephone (Skull)
                    - generic [ref=e496] [cursor=pointer]:
                      - link [ref=e497]:
                        - /url: /hades-2/builds/moonstone-axe-starter-build
                      - generic [ref=e499]:
                        - generic [ref=e500]: Moonstone Axe Starter Build
                        - generic [ref=e501]:
                          - text: By
                          - link "Mobalytics" [ref=e502]:
                            - /url: /hades-2/profile/mobalytics
                          - text: ∙
                          - generic [ref=e503]: Updated on
                          - generic [ref=e504]: Jun 3, 2026
                      - generic [ref=e505]:
                        - generic [ref=e507]:
                          - button "20 Favorites" [ref=e508]:
                            - img [ref=e509]
                            - text: 20 Favorites
                          - button "Share" [ref=e510]:
                            - img [ref=e511]
                            - text: Share
                        - generic [ref=e512]:
                          - generic [ref=e513]:
                            - img "presentation" [ref=e514]
                            - text: Zorephet (Moonstone Axe)
                          - generic [ref=e515]:
                            - img "presentation" [ref=e516]
                            - text: Aspect of Melinoë (Axe)
                          - generic [ref=e517]: Verified
                    - generic [ref=e520] [cursor=pointer]:
                      - link [ref=e521]:
                        - /url: /hades-2/builds/aspect-of-circe-staff
                      - generic [ref=e523]:
                        - generic [ref=e524]: Carried by Casts Circe Guide
                        - generic [ref=e525]:
                          - text: By
                          - link "HookieDookie" [ref=e526]:
                            - /url: /hades-2/profile/iron-key-zazrd3
                          - text: ∙
                          - generic [ref=e527]: Updated on
                          - generic [ref=e528]: May 16, 2026
                      - generic [ref=e529]:
                        - generic [ref=e531]:
                          - button "78 Favorites" [ref=e532]:
                            - img [ref=e533]
                            - text: 78 Favorites
                          - button "Share" [ref=e534]:
                            - img [ref=e535]
                            - text: Share
                        - generic [ref=e536]:
                          - generic [ref=e537]:
                            - img "presentation" [ref=e538]
                            - text: Descura (Witch's Staff)
                          - generic [ref=e539]:
                            - img "presentation" [ref=e540]
                            - text: Aspect of Circe (Staff)
                          - generic [ref=e541]: Verified
                  - button "Show more" [ref=e542] [cursor=pointer]
                - link "Have a 2nd monitor? Download our Free App Get easy access to all your Builds and more! Download App" [ref=e544] [cursor=pointer]:
                  - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=homepage_hades_2&utm_medium=banner&utm_source=web
                  - generic [ref=e547]:
                    - generic [ref=e548]:
                      - paragraph [ref=e549]: Have a 2nd monitor? Download our Free App
                      - paragraph [ref=e550]: Get easy access to all your Builds and more!
                    - button "Download App" [ref=e552]: Download App
            - status [ref=e554]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e561]:
    - banner [ref=e562]:
      - generic [ref=e563] [cursor=pointer]:
        - generic [ref=e564]: Advertisement
        - generic [ref=e565]: Remove Ads
    - generic [ref=e568] [cursor=pointer]:
      - generic [ref=e569]: Remove all ads
      - generic [ref=e570]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e571]:
        - generic [ref=e572]: Remove ads
```

# Test source

```ts
  10572 |                     .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
  10573 |                 )
  10574 |                 .not.toBeVisible();
  10575 |             });
  10576 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10577 |               await expect
  10578 |                 .soft(
  10579 |                   page
  10580 |                     .locator('#destiny-2-display-all-pages')
  10581 |                     .or(page.locator('#destiny-2-nitro-l'))
  10582 |                     .or(page.locator('#destiny-2-nitro-3'))
  10583 |                     .first()
  10584 |                 )
  10585 |                 .not.toBeVisible();
  10586 |             });
  10587 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10588 |               await expect
  10589 |                 .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
  10590 |                 .not.toBeVisible();
  10591 |             });
  10592 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10593 |               await expect
  10594 |                 .soft(
  10595 |                   page
  10596 |                     .locator('#web-destiny-2-display-footer-d')
  10597 |                     .locator('xpath=..')
  10598 |                     .or(page.locator('#destiny-2-nitro-anchor').locator('xpath=..'))
  10599 |                 )
  10600 |                 .not.toBeVisible();
  10601 |             });
  10602 |             break;
  10603 |           case 'Borderlands 4':
  10604 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10605 |               await expect
  10606 |                 .soft(
  10607 |                   page
  10608 |                     .locator('#bl4-video-all-pages')
  10609 |                     .or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
  10610 |                 )
  10611 |                 .not.toBeVisible();
  10612 |             });
  10613 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10614 |               await expect
  10615 |                 .soft(
  10616 |                   page
  10617 |                     .locator('#bl4-display-all-pages')
  10618 |                     .or(page.locator('#borderlands-4-nitro-l'))
  10619 |                     .or(page.locator('#borderlands-4-nitro-3'))
  10620 |                     .first()
  10621 |                 )
  10622 |                 .not.toBeVisible();
  10623 |             });
  10624 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10625 |               await expect
  10626 |                 .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
  10627 |                 .not.toBeVisible();
  10628 |             });
  10629 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10630 |               await expect
  10631 |                 .soft(
  10632 |                   page
  10633 |                     .locator('#web-borderlands-4-display-footer-d')
  10634 |                     .locator('xpath=..')
  10635 |                     .or(page.locator('#borderlands-4-nitro-anchor').locator('xpath=..'))
  10636 |                 )
  10637 |                 .not.toBeVisible();
  10638 |             });
  10639 |             break;
  10640 |           case 'Hades 2':
  10641 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10642 |               await expect
  10643 |                 .soft(
  10644 |                   page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
  10645 |                 )
  10646 |                 .not.toBeVisible();
  10647 |             });
  10648 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10649 |               await expect
  10650 |                 .soft(
  10651 |                   page
  10652 |                     .locator('#hades-2-display-all-pages')
  10653 |                     .or(page.locator('#hades-2-nitro-l'))
  10654 |                     .or(page.locator('#hades-2-nitro-3'))
  10655 |                     .first()
  10656 |                 )
  10657 |                 .not.toBeVisible();
  10658 |             });
  10659 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10660 |               await expect
  10661 |                 .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  10662 |                 .not.toBeVisible();
  10663 |             });
  10664 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10665 |               await expect
  10666 |                 .soft(
  10667 |                   page
  10668 |                     .locator('#web-hades-2-display-footer-d')
  10669 |                     .locator('xpath=..')
  10670 |                     .or(page.locator('#hades-2-nitro-anchor').locator('xpath=..'))
  10671 |                 )
> 10672 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
  10673 |             });
  10674 |             break;
  10675 |           case 'Endfield':
  10676 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10677 |               await expect
  10678 |                 .soft(
  10679 |                   page
  10680 |                     .locator('#endfield-video-all-pages')
  10681 |                     .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
  10682 |                 )
  10683 |                 .not.toBeVisible();
  10684 |             });
  10685 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10686 |               await expect
  10687 |                 .soft(
  10688 |                   page
  10689 |                     .locator('#endfield-display-all-pages')
  10690 |                     .or(page.locator('#arknights-endfield-nitro-l'))
  10691 |                     .or(page.locator('#arknights-endfield-nitro-3'))
  10692 |                     .first()
  10693 |                 )
  10694 |                 .not.toBeVisible();
  10695 |             });
  10696 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10697 |               await expect
  10698 |                 .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
  10699 |                 .not.toBeVisible();
  10700 |             });
  10701 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10702 |               await expect
  10703 |                 .soft(
  10704 |                   page
  10705 |                     .locator('#web-arknights-endfield-display-footer-d')
  10706 |                     .locator('xpath=..')
  10707 |                     .or(page.locator('#arknights-endfield-nitro-anchor').locator('xpath=..'))
  10708 |                 )
  10709 |                 .not.toBeVisible();
  10710 |             });
  10711 |             break;
  10712 |           case 'Marathon':
  10713 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10714 |               await expect
  10715 |                 .soft(
  10716 |                   page
  10717 |                     .locator('#marathon-video-all-pages')
  10718 |                     .or(page.locator('#marathon-nitro-video').locator('xpath=..'))
  10719 |                 )
  10720 |                 .not.toBeVisible();
  10721 |             });
  10722 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10723 |               await expect
  10724 |                 .soft(
  10725 |                   page
  10726 |                     .locator('#marathon-display-all-pages')
  10727 |                     .or(page.locator('#marathon-nitro-l'))
  10728 |                     .or(page.locator('#marathon-nitro-3'))
  10729 |                     .first()
  10730 |                 )
  10731 |                 .not.toBeVisible();
  10732 |             });
  10733 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10734 |               await expect
  10735 |                 .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
  10736 |                 .not.toBeVisible();
  10737 |             });
  10738 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  10739 |               await expect
  10740 |                 .soft(
  10741 |                   page
  10742 |                     .locator('#web-marathon-display-footer-d')
  10743 |                     .locator('xpath=..')
  10744 |                     .or(page.locator('#marathon-nitro-anchor').locator('xpath=..'))
  10745 |                 )
  10746 |                 .not.toBeVisible();
  10747 |             });
  10748 |             break;
  10749 |           case 'Overwatch':
  10750 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  10751 |               await expect
  10752 |                 .soft(
  10753 |                   page
  10754 |                     .locator('#overwatch-video-all-pages')
  10755 |                     .or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
  10756 |                 )
  10757 |                 .not.toBeVisible();
  10758 |             });
  10759 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  10760 |               await expect
  10761 |                 .soft(
  10762 |                   page
  10763 |                     .locator('#overwatch-display-all-pages')
  10764 |                     .or(page.locator('#overwatch-nitro-l'))
  10765 |                     .or(page.locator('#overwatch-nitro-3'))
  10766 |                     .first()
  10767 |                 )
  10768 |                 .not.toBeVisible();
  10769 |             });
  10770 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  10771 |               await expect
  10772 |                 .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
```