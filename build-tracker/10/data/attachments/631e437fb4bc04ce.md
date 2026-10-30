# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: build-tracker/build-tracker.test.js >> Activate tracking build modal appears for unauthorized user
- Location: e2e-tests/build-tracker/build-tracker.test.js:22:1

# Error details

```
Error: Timeout 10000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Ready for a New ARPG? Play the Darkhaven Demo Now!111 → Try Demo Close":
        - /url: https://store.steampowered.com/app/4356650/Darkhaven_Demo/
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - textbox [ref=e10]:
              - paragraph [ref=e11]: Ready for a New ARPG? Play the Darkhaven Demo Now!111
            - button "→ Try Demo" [ref=e12]
          - img "Close" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e16]:
          - link [ref=e18] [cursor=pointer]:
            - /url: /diablo-4
            - img "Mobalytics" [ref=e19]
          - generic [ref=e21]:
            - link "League of Legends LoL" [ref=e23] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/lol
              - generic [ref=e25]:
                - img "League of Legends" [ref=e27]
                - generic [ref=e28]: LoL
            - link "Teamfight Tactics TFT" [ref=e30] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/tft
              - generic [ref=e32]:
                - img "Teamfight Tactics" [ref=e34]
                - generic [ref=e35]: TFT
            - link "Diablo 4 Diablo 4" [ref=e37] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/diablo-4
              - generic [ref=e39]:
                - img "Diablo 4" [ref=e41]
                - generic [ref=e42]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e44] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe-2
              - generic [ref=e46]:
                - img "Path of Exile 2" [ref=e48]
                - generic [ref=e49]: PoE 2
            - link "Path of Exile PoE" [ref=e51] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe
              - generic [ref=e53]:
                - img "Path of Exile" [ref=e55]
                - generic [ref=e56]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=e58] [cursor=pointer]':
              - /url: https://stg.mobalytics.gg/wow-forever
              - generic [ref=e60]:
                - 'img "World of Warcraft: Forever" [ref=e62]'
                - generic [ref=e63]: WoW Forever
                - generic [ref=e64]: New
            - link "Destiny 2 Destiny 2" [ref=e67] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/destiny-2
              - generic [ref=e69]:
                - img "Destiny 2" [ref=e71]
                - generic [ref=e72]: Destiny 2
            - link "Marathon Marathon" [ref=e74] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/marathon
              - generic [ref=e76]:
                - img "Marathon" [ref=e78]
                - generic [ref=e79]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e81] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/slay-the-spire-2
              - generic [ref=e83]:
                - img "Slay the Spire 2" [ref=e85]
                - generic [ref=e86]: STS 2
            - link "Deadlock Deadlock" [ref=e88] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e90]:
                - img "Deadlock" [ref=e92]
                - generic [ref=e93]: Deadlock
            - link "Overwatch Overwatch" [ref=e95] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/overwatch
              - generic [ref=e97]:
                - img "Overwatch" [ref=e99]
                - generic [ref=e100]: Overwatch
            - button [ref=e102] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=e105] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/gamebase
            - generic [ref=e106]:
              - img "Gamebase" [ref=e108]
              - generic [ref=e109]: Gamebase
              - generic [ref=e110]: Reviews, Previews, & More
        - generic [ref=e111]:
          - link [ref=e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?utm_campaign=eRtDdtB&utm_medium=owaa&utm_source=app
            - button "Download App" [ref=e114]
          - button "Play & Get Free Rewards" [ref=e117] [cursor=pointer]
          - generic [ref=e120]:
            - button "Sign In" [ref=e122] [cursor=pointer]
            - button "Settings" [ref=e124] [cursor=pointer]
        - generic [ref=e127]:
          - link [ref=e130] [cursor=pointer]:
            - /url: /diablo-4
            - img "Home" [ref=e131]
            - generic: Home
          - link [ref=e134] [cursor=pointer]:
            - /url: /diablo-4/profile
            - img "Profile" [ref=e135]
            - generic: Profile
          - link [ref=e138] [cursor=pointer]:
            - /url: /diablo-4/planner/builds
            - img "Build Planner" [ref=e139]
            - generic: Build Planner
          - link [ref=e142] [cursor=pointer]:
            - /url: /diablo-4/tier-list
            - img "Tier List" [ref=e143]
            - generic: Tier List
          - link [ref=e146] [cursor=pointer]:
            - /url: /diablo-4/builds
            - img "Builds" [ref=e147]
            - generic: Builds
          - link [ref=e150] [cursor=pointer]:
            - /url: /diablo-4/leveling-builds
            - img "Leveling Builds" [ref=e151]
            - generic: Leveling Builds
          - link [ref=e154] [cursor=pointer]:
            - /url: /diablo-4/guides
            - img "Guides" [ref=e155]
            - generic: Guides
          - link [ref=e158] [cursor=pointer]:
            - /url: /diablo-4/loot-filters
            - img "Loot Filters" [ref=e159]
            - generic: Loot Filters
          - link [ref=e162] [cursor=pointer]:
            - /url: /diablo-4/news
            - img "News" [ref=e163]
            - generic: News
          - link [ref=e166] [cursor=pointer]:
            - /url: /diablo-4/creators
            - img "Creators" [ref=e167]
            - generic: Creators
        - generic [ref=e168]:
          - generic [ref=e169]:
            - main [ref=e170]:
              - generic [ref=e174]:
                - navigation [ref=e175]:
                  - list [ref=e176]:
                    - listitem [ref=e177]:
                      - link "Diablo 4" [ref=e178] [cursor=pointer]:
                        - /url: /diablo-4
                    - listitem [aria-hidden] [ref=e179]
                    - listitem [ref=e181]:
                      - link "Builds" [ref=e182] [cursor=pointer]:
                        - /url: /diablo-4/builds
                    - listitem [aria-hidden] [ref=e183]
                    - listitem [ref=e185]: Omega Blood Surge
                - generic [ref=e186]:
                  - generic [ref=e187]:
                    - button "Diablo 4 Build Omega Blood Surge presentation Necromancer Speed Farm End Game Kay Season 12 Verified By Nikita Lodyanoy Follow Updated on Mar 11, 2026 Track Build 8.0 K Favorites 0 Share Focus Mode" [ref=e190]:
                      - generic [ref=e191]:
                        - generic [ref=e193]:
                          - generic [ref=e194]: Diablo 4 Build
                          - heading "Omega Blood Surge" [level=1] [ref=e195]
                          - generic [ref=e196]:
                            - generic [ref=e197]:
                              - img "presentation" [ref=e198]
                              - text: Necromancer
                            - generic [ref=e199]: Speed Farm
                            - generic [ref=e202]: End Game
                            - generic [ref=e203]: Kay
                            - generic [ref=e204]: Season 12
                            - generic [ref=e205]: Verified
                          - generic [ref=e206]:
                            - generic [ref=e208]:
                              - generic [ref=e209]:
                                - text: By
                                - link "Nikita Lodyanoy" [ref=e210] [cursor=pointer]:
                                  - /url: /diablo-4/profile/grim-shadow-ctosns/builds
                              - button "Follow" [ref=e212] [cursor=pointer]
                            - generic [ref=e216]:
                              - text: Updated on
                              - generic [ref=e217]: Mar 11, 2026
                        - generic [ref=e219]:
                          - button "Track Build" [active] [ref=e220] [cursor=pointer]
                          - button "8.0 K Favorites" [ref=e223] [cursor=pointer]
                          - button "0" [ref=e225] [cursor=pointer]
                          - button "Share" [ref=e228] [cursor=pointer]
                          - button "Focus Mode" [ref=e231] [cursor=pointer]
                    - generic [ref=e234]:
                      - generic [ref=e235]:
                        - generic [ref=e236]:
                          - heading "Build Overview" [level=2] [ref=e240]
                          - textbox [ref=e247]:
                            - paragraph [ref=e248]:
                              - text: This build is design to go insanely fast while dealing loads of damage with
                              - generic [ref=e249]: Blood Surge
                              - text: . This build got some buffs this season which makes it a bit better, though in raw DPS its still behind the higher tier builds.
                            - list [ref=e254]:
                              - listitem [ref=e255]:
                                - text: ▶️Full build guide & gameplay on
                                - link "YouTube" [ref=e256] [cursor=pointer]:
                                  - /url: https://www.youtube.com/@goblin-inc
                        - generic [ref=e257]:
                          - heading "Strengths and Weaknesses" [level=2] [ref=e261]
                          - generic [ref=e264]:
                            - textbox [ref=e270]:
                              - list [ref=e271]:
                                - listitem [ref=e272]: Extremely Fast Farming
                                - listitem [ref=e273]: Amazing AOE
                                - listitem [ref=e274]: Easy to play
                                - listitem [ref=e275]: Extremely Tanky
                                - listitem [ref=e276]: Objectively Coolest Necromancer Build
                            - textbox [ref=e282]:
                              - list [ref=e283]:
                                - listitem [ref=e284]: Peak DPS Is a bit low
                                - listitem [ref=e285]: Takes Longer to reach end game
                        - generic [ref=e286]:
                          - generic [ref=e287]:
                            - heading "Build Variants" [level=2] [ref=e291]
                            - tablist [ref=e295]:
                              - tablist [ref=e297]:
                                - tab "Torment 4" [selected] [ref=e298] [cursor=pointer]
                                - tab "End Game" [ref=e301] [cursor=pointer]
                                - tab "Push" [ref=e303] [cursor=pointer]
                            - textbox [ref=e311]:
                              - paragraph [ref=e312]: The build still functions as normal without uber uniques, so we just need to replace them with good aspects.
                          - generic [ref=e315]:
                            - generic [ref=e316]:
                              - generic [ref=e318]:
                                - heading "Aspect & Uniques" [level=2] [ref=e320]
                                - button "Focus Mode New" [ref=e322] [cursor=pointer]:
                                  - text: Focus Mode
                                  - generic [ref=e324]: New
                              - tablist [ref=e328]:
                                - tablist [ref=e330]:
                                  - tab "Torment 4" [selected] [ref=e331] [cursor=pointer]
                                  - tab "End Game" [ref=e334] [cursor=pointer]
                                  - tab "Push" [ref=e336] [cursor=pointer]
                              - generic [ref=e341]:
                                - generic [ref=e343]:
                                  - generic [ref=e344]: "3"
                                  - generic [ref=e354]:
                                    - generic "Helm" [ref=e355]
                                    - generic "Juggernaut's Aspect" [ref=e357]
                                - generic [ref=e360]:
                                  - generic [ref=e361]: "4"
                                  - generic [ref=e371]:
                                    - generic "Chest armor" [ref=e372]
                                    - generic "Aspect of Hardened Bones" [ref=e374]
                                - generic [ref=e377]:
                                  - generic [ref=e378]: "5"
                                  - generic [ref=e383]:
                                    - generic "Gloves" [ref=e384]
                                    - generic "Cruor's Embrace" [ref=e386]
                                - generic [ref=e389]:
                                  - generic [ref=e390]: "1"
                                  - generic [ref=e398]:
                                    - generic "Pants" [ref=e399]
                                    - generic "Aspect of the Embalmer" [ref=e401]
                                - generic [ref=e404]:
                                  - generic [ref=e405]: "6"
                                  - generic [ref=e410]:
                                    - generic "Boots" [ref=e411]
                                    - generic "Aspect of the Cursed Aura" [ref=e413]
                                - generic [ref=e416]:
                                  - generic [ref=e417]: "8"
                                  - generic [ref=e425]:
                                    - generic "Amulet" [ref=e426]
                                    - generic "Sacrificial Aspect" [ref=e428]
                                - generic [ref=e431]:
                                  - generic [ref=e432]: "7"
                                  - generic [ref=e440]:
                                    - generic "Ring 1" [ref=e441]
                                    - generic "Aspect of Rathma's Chosen" [ref=e443]
                                - generic [ref=e446]:
                                  - generic [ref=e447]: "2"
                                  - generic [ref=e452]:
                                    - generic "Ring 2" [ref=e453]
                                    - generic "Aspect of Exposed Flesh" [ref=e455]
                                - generic [ref=e458]:
                                  - generic [ref=e459]: "10"
                                  - generic [ref=e467]:
                                    - generic "Weapon" [ref=e468]
                                    - generic "Cadaverous Aspect" [ref=e470]
                                - generic [ref=e473]:
                                  - generic [ref=e474]: "9"
                                  - generic [ref=e479]:
                                    - generic "Offhand" [ref=e480]
                                    - generic "Blood-bathed Aspect" [ref=e482]
                            - generic [ref=e485]:
                              - generic [ref=e486]: Equipment Priority
                              - button "Track Build" [ref=e487] [cursor=pointer]
                            - button "Show All" [ref=e541] [cursor=pointer]
                            - textbox [ref=e550]:
                              - paragraph [ref=e551]: This setup is designed to deal loads of damage while having the survivability to clear harder content.
                              - paragraph [ref=e552]:
                                - text: Your priority for
                                - strong [ref=e553]: Bloodied Affixes
                                - text: "are as follows:"
                              - list [ref=e554]:
                                - listitem [ref=e555]:
                                  - text: Every 25 kills, gain
                                  - strong [ref=e556]: Berserking
                                - listitem [ref=e557]:
                                  - strong [ref=e558]: Movement Speed
                                  - text: per Kill Streak tier
                                - listitem [ref=e559]:
                                  - strong [ref=e560]: Cooldown Reduction
                                  - text: per Kill Streak tier
                                - listitem [ref=e561]:
                                  - strong [ref=e562]: Increased Experience
                                  - text: per Killstreak tier
                          - generic [ref=e565]:
                            - heading "Skills & Rotation" [level=2] [ref=e569]
                            - tablist [ref=e572]:
                              - tablist [ref=e574]:
                                - tab "Torment 4" [selected] [ref=e575] [cursor=pointer]
                                - tab "End Game" [ref=e578] [cursor=pointer]
                                - tab "Push" [ref=e580] [cursor=pointer]
                            - generic [ref=e584]:
                              - generic [ref=e587]:
                                - generic [ref=e588]:
                                  - generic [ref=e589]: Primary
                                  - generic [ref=e590]:
                                    - generic [ref=e591]: "1"
                                    - generic [ref=e595]: "5"
                                - generic [ref=e599]:
                                  - generic [ref=e600]: Secondary
                                  - generic [ref=e601]:
                                    - generic [ref=e602]: "5"
                                    - generic [ref=e606]: "1"
                                    - generic [ref=e610]: "1"
                                    - generic [ref=e614]: "1"
                              - generic [ref=e619]:
                                - generic [ref=e620]: Book of the Dead
                                - generic [ref=e621]:
                                  - generic [ref=e622]:
                                    - generic [ref=e623]: Skeletal Warriors
                                    - generic [ref=e624]:
                                      - radio [ref=e627] [cursor=pointer]
                                      - radio [ref=e629] [cursor=pointer]
                                      - radio [ref=e631] [cursor=pointer]
                                    - generic [ref=e632]:
                                      - radio [ref=e635] [cursor=pointer]
                                      - radio [ref=e637] [cursor=pointer]
                                      - radio [checked] [ref=e639] [cursor=pointer]
                                    - generic [ref=e640]:
                                      - radio [ref=e643] [cursor=pointer]
                                      - radio [ref=e645] [cursor=pointer]
                                      - radio [ref=e647] [cursor=pointer]
                                  - generic [ref=e648]:
                                    - generic [ref=e649]: Skeletal Mages
                                    - generic [ref=e650]:
                                      - radio [ref=e653] [cursor=pointer]
                                      - radio [ref=e655] [cursor=pointer]
                                      - radio [ref=e657] [cursor=pointer]
                                    - generic [ref=e658]:
                                      - radio [ref=e661] [cursor=pointer]
                                      - radio [ref=e663] [cursor=pointer]
                                      - radio [ref=e665] [cursor=pointer]
                                    - generic [ref=e666]:
                                      - radio [ref=e669] [cursor=pointer]
                                      - radio [ref=e671] [cursor=pointer]
                                      - radio [checked] [ref=e673] [cursor=pointer]
                                  - generic [ref=e674]:
                                    - generic [ref=e675]: Skeletal Golems
                                    - generic [ref=e676]:
                                      - radio [ref=e679] [cursor=pointer]
                                      - radio [ref=e681] [cursor=pointer]
                                      - radio [ref=e683] [cursor=pointer]
                                    - generic [ref=e684]:
                                      - radio [ref=e687] [cursor=pointer]
                                      - radio [ref=e689] [cursor=pointer]
                                      - radio [ref=e691] [cursor=pointer]
                                    - generic [ref=e692]:
                                      - radio [ref=e695] [cursor=pointer]
                                      - radio [ref=e697] [cursor=pointer]
                                      - radio [checked] [ref=e699] [cursor=pointer]
                            - textbox [ref=e706]:
                              - paragraph [ref=e707]:
                                - text: Make sure you put the random darkness skills on your bar for procing
                                - strong [ref=e708]: Reaper's Pursuit
                          - generic [ref=e713]:
                            - generic [ref=e715]:
                              - heading "Skill Tree" [level=2] [ref=e717]
                              - button "Focus Mode New" [ref=e719] [cursor=pointer]:
                                - text: Focus Mode
                                - generic [ref=e721]: New
                            - tablist [ref=e725]:
                              - tablist [ref=e727]:
                                - tab "Torment 4" [selected] [ref=e728] [cursor=pointer]
                                - tab "End Game" [ref=e731] [cursor=pointer]
                                - tab "Push" [ref=e733] [cursor=pointer]
                            - generic [ref=e739]:
                              - generic [ref=e740]:
                                - generic [ref=e741]:
                                  - generic [ref=e742]: Available
                                  - generic [ref=e743]: 12 (0)
                                - generic [ref=e744]:
                                  - generic [ref=e745]: Spent
                                  - generic [ref=e746]: 69 (2)
                              - generic [ref=e750] [cursor=pointer]:
                                - generic [ref=e751]: Leveling Path
                                - switch "Leveling Path" [ref=e755]
                              - button "Track Build" [ref=e759] [cursor=pointer]
                          - generic [ref=e765]:
                            - generic [ref=e767]:
                              - generic [ref=e769]:
                                - heading "Paragon Board" [level=2] [ref=e771]
                                - button "Focus Mode New" [ref=e773] [cursor=pointer]:
                                  - text: Focus Mode
                                  - generic [ref=e775]: New
                              - tablist [ref=e779]:
                                - tablist [ref=e781]:
                                  - tab "Torment 4" [selected] [ref=e782] [cursor=pointer]
                                  - tab "End Game" [ref=e785] [cursor=pointer]
                                  - tab "Push" [ref=e787] [cursor=pointer]
                              - generic [ref=e790]:
                                - generic [ref=e792]:
                                  - generic [ref=e793]:
                                    - generic [ref=e794]: Spent
                                    - generic [ref=e795]: "0"
                                  - generic [ref=e796]:
                                    - listitem [ref=e797]:
                                      - generic [ref=e798]: Str
                                      - generic [ref=e799]: "66"
                                    - listitem [ref=e800]:
                                      - generic [ref=e801]: Int
                                      - generic [ref=e802]: "69"
                                    - listitem [ref=e803]:
                                      - generic [ref=e804]: Dex
                                      - generic [ref=e805]: "66"
                                    - listitem [ref=e806]:
                                      - generic [ref=e807]: Will
                                      - generic [ref=e808]: "67"
                                  - generic [ref=e809]:
                                    - generic [ref=e813] [cursor=pointer]:
                                      - generic [ref=e814]: Leveling Path
                                      - switch "Leveling Path" [disabled] [ref=e818]
                                    - button "Track Build" [ref=e821] [cursor=pointer]
                                - generic [ref=e826]:
                                  - generic [ref=e827]:
                                    - generic [ref=e828] [cursor=pointer]
                                    - generic [ref=e829] [cursor=pointer]
                                  - generic [ref=e830] [cursor=pointer]
                                  - generic [ref=e831] [cursor=pointer]
                            - textbox [ref=e842]:
                              - paragraph [ref=e843]: This Paragon Board has extra points just to show priority. With remaining points just grab extra Int nodes
                          - generic [ref=e848]:
                            - generic [ref=e850]:
                              - heading "Mercenaries" [level=2] [ref=e852]
                              - button "Focus Mode New" [ref=e854] [cursor=pointer]:
                                - text: Focus Mode
                                - generic [ref=e856]: New
                            - tablist [ref=e860]:
                              - tablist [ref=e862]:
                                - tab "Torment 4" [selected] [ref=e863] [cursor=pointer]
                                - tab "End Game" [ref=e866] [cursor=pointer]
                                - tab "Push" [ref=e868] [cursor=pointer]
                            - generic [ref=e873]:
                              - generic [ref=e874]:
                                - generic [ref=e875]: Hired Mercenary
                                - generic [ref=e876]: Subo
                              - generic [ref=e879]:
                                - generic [ref=e880]:
                                  - generic [ref=e881]: Reinforcement
                                  - generic [ref=e882]: Aldkin
                                - generic [ref=e885]:
                                  - generic [ref=e886]: Skill
                                  - generic [ref=e889]: Opportunity
                        - generic [ref=e894]:
                          - heading "Frequently Asked Questions" [level=2] [ref=e898]
                          - textbox [ref=e905]:
                            - paragraph [ref=e906]:
                              - generic [ref=e907]: Blood Surge
                              - text: was massively buffed going into season 11, and now the build is actually fairly strong again. Its my favorite Necromancer build and its super to play. It has great AOE farming potential, relatively decent single target damage, and a very fun progression through the torments that will be challenging but rewarding. Once you get it fully online, you'll be cruising through Torment 4 with one of Necromancer's fastest farming builds.
                              - generic [ref=e912]: Blood Surge
                              - text: also features one of the coolest engines in any build, relying on rapidly spawning and consuming corpses to massively increase its damage and essence generation.
                            - heading "Leveling and Early Game" [level=4] [ref=e917]
                            - paragraph [ref=e918]:
                              - text: For leveling and Early Game, check out [this build](
                              - link "https://mobalytics.gg/diablo-4/profile/294d6a05-33c1-4191-be52-75f1a5f2c639/builds/6c7833ba-fe5e-4bf3-b1c4-84398b3269ce" [ref=e919] [cursor=pointer]:
                                - /url: /diablo-4/profile/294d6a05-33c1-4191-be52-75f1a5f2c639/builds/6c7833ba-fe5e-4bf3-b1c4-84398b3269ce
                              - text: )
                            - heading "Move While Casting" [level=4] [ref=e920]
                            - paragraph [ref=e921]:
                              - text: There's currently a "feature" if you use keyboard movement where you can cast while moving. You need to lead your character spam click to cast, all while making sure your cursor doesn't hover over an enemy. If done correctly, you will be able to spam
                              - generic [ref=e922]: Blood Surge
                              - text: while running. For a full breakdown, check out this video guide.
                              - link "https://www.youtube.com/watch?v=XCDJyYXl2MM" [ref=e927] [cursor=pointer]:
                                - /url: https://www.youtube.com/watch?v=XCDJyYXl2MM
                            - heading "Resource issues" [level=4] [ref=e928]
                            - paragraph [ref=e929]:
                              - text: If you are having any resource issue you can add
                              - generic [ref=e930]: Iron Maiden
                              - text: to the build. This will allow your
                              - generic [ref=e935]: Aspect of the Cursed Aura
                              - text: to automatically apply
                              - generic [ref=e940]: Iron Maiden
                              - text: and proc the resource generation.
                            - heading "Corpse Loop" [level=4] [ref=e945]
                            - paragraph [ref=e946]:
                              - text: This build utilizes the synergy between
                              - generic [ref=e947]: Cruor's Embrace
                              - text: and
                              - generic [ref=e952]: Hewed Flesh
                              - text: to generate and consume an inane amount of corpses. Thanks to
                              - generic [ref=e957]: Aspect of the Embalmer
                              - text: when we consume corpses we also spawn
                              - strong [ref=e962]: Blood Orbs
                              - text: ", and by picking those up we both reset the cooldown on"
                              - generic [ref=e963]: Rathma's Vigor
                              - strong [ref=e968]
                              - text: and proc
                              - generic [ref=e969]: Blood Begets Blood
                              - text: .
                            - heading "Bossing" [level=4] [ref=e974]
                            - paragraph [ref=e975]:
                              - generic [ref=e976]: Blood Surge
                              - text: has become a very weak bossing skill with the new Season 11 changes, and there's not much you can do anymore to fix this. In general, I would just recommend using the armory and having another build setup that you can easily swap to for killing bosses.
                            - heading "Uniques" [level=4] [ref=e981]
                            - paragraph [ref=e982]:
                              - generic [ref=e983]: Cruor's Embrace
                              - strong [ref=e988]: ":"
                              - text: Though steeply nerfed with the masterwork changes in Season 11 they are still so much damage while also being a key piece of our Corpse Consumption Combo.
                            - paragraph [ref=e989]:
                              - generic [ref=e990]: Heir of Perdition
                              - strong [ref=e995]: ":"
                              - text: This Mythic Unique gives a 60% damage multiplier as well as some good stats in the form of Crit Chance, Movement Speed, and Lucky Hit Chance.
                              - generic [ref=e996]: Shroud of False Death
                              - text: 1 to all passives as well as a high HP and all stat roll makes this item give way too much tankiness and damage to pass up.
                              - generic [ref=e1001]: Ring of Starless Skies
                              - strong [ref=e1006]: ":"
                              - text: This Mythic gives more damage than any other available option while also giving 50% resource cost reduction and a nice lucky hit roll. Cannot pass this up.
                            - heading "Mythic Priority Order" [level=4] [ref=e1007]
                            - paragraph [ref=e1008]:
                              - generic [ref=e1009]: Ring of Starless Skies
                              - strong [ref=e1014]
                              - text: ">"
                              - generic [ref=e1015]: Heir of Perdition
                              - text: ">"
                              - generic [ref=e1020]: Shroud of False Death
                            - heading "Elixirs and Incenses" [level=4] [ref=e1025]
                            - paragraph [ref=e1026]: With the abundance of herbs now in the game it is now very easy to grab some consumables to either shore up big weakness with your character or to massively increase your strengths. I highly recommend you regularly keep Elixirs and Incenses running. Below I laid out the best consumables to use for every situation.
                            - heading "Elixirs" [level=4] [ref=e1027]
                            - paragraph [ref=e1028]:
                              - text: If you need more of any specific resistance or armor, use those elixirs first. Once your armor capped and resistance capped, look to use the
                              - strong [ref=e1029]: Elixir of Advantage
                              - text: for the extra attack speed. If you're having trouble staying alive and your armor capped and resistance capped, you can use the
                              - strong [ref=e1030]: Elixir of Fortitude
                              - text: to gain a 20% hp multiplier.
                            - heading "Incenses" [level=4] [ref=e1031]
                            - paragraph [ref=e1032]: For incense you have a couple of options, depending on what your character needs.
                            - heading "Core Stat" [level=4] [ref=e1033]
                            - list [ref=e1034]:
                              - listitem [ref=e1035]:
                                - strong [ref=e1036]: Sage's Whisper
                                - text: ": Generally the best option as it gives the most amount of damage."
                              - listitem [ref=e1037]:
                                - strong [ref=e1038]: Spiral Morning
                                - text: ": Not a bad alternative, as the all stat gives some armor and also helps hit breakpoints in paragon tree. Only use if there's specific paragon nodes you're trying to reach."
                            - heading "Resistance" [level=4] [ref=e1039]
                            - list [ref=e1040]:
                              - listitem [ref=e1041]:
                                - strong [ref=e1042]: Soothing Spices
                                - text: ": Best all around option as it gives +10% all resistances and +2% max resistance to everything. Only use another option if needed to hit resistance caps."
                            - heading "Defensive" [level=4] [ref=e1043]
                            - list [ref=e1044]:
                              - listitem [ref=e1045]:
                                - strong [ref=e1046]: Song of the Mountain
                                - text: ": Great early game option for the +300 Armor"
                              - listitem [ref=e1047]:
                                - strong [ref=e1048]: Reddamine Buzz
                                - text: ": Gives +750hp, best option if you are already armor capped."
                            - heading "Defensive Layers" [level=4] [ref=e1049]
                            - paragraph [ref=e1050]: Always make sure you have 1000 armor and 75% all resistances as your number one defensive priority!
                            - paragraph [ref=e1051]:
                              - text: Our defense is highly reliant on our skill tree and paragon board.
                              - generic [ref=e1052]: Stand Alone
                              - text: from our passive tree is the single strongest defensive passive in the entire game. We also generate lots of barrier from
                              - generic [ref=e1057]: Necrotic Fortitude
                              - text: due to dealing so many instances of damage, leading to high amounts of
                              - strong [ref=e1062]: Lucky Hit
                              - text: procs. In this vein, we are also able to generate all of our
                              - strong [ref=e1063]: Fortify
                              - text: from a combination of
                              - generic [ref=e1064]: Necrotic Carapace
                              - text: and
                              - generic [ref=e1069]: Hewed Flesh
                              - text: .
                            - paragraph [ref=e1074]:
                              - text: From the paragon board we get lots of maximum life percentage, making it very important to get
                              - strong [ref=e1075]: Maximum Life
                              - text: rolls on gear as these two things scale well together. We are also getting lots of damage reduction from
                              - generic [ref=e1076]: Scent of Death
                              - text: and the other damage reduction nodes on that board. Finally, we get access to
                              - strong [ref=e1081]: Damage Reduction While Fortified
                              - text: nodes from the
                              - generic [ref=e1082]: Bloodbath
                              - text: board.
                            - paragraph [ref=e1087]: All in all this build is wildy tanky, and can clear the hardest content with ease.
                            - heading "FAQ" [level=4] [ref=e1088]
                        - generic [ref=e1089]:
                          - heading "Changelog" [level=2] [ref=e1093]
                          - textbox [ref=e1100]:
                            - heading "2026-03-10" [level=4] [ref=e1101]
                            - list [ref=e1102]:
                              - listitem [ref=e1103]: Added socials to Introduction
                            - heading "2026-03-09" [level=4] [ref=e1104]
                            - list [ref=e1105]:
                              - listitem [ref=e1106]: Minor fixes to formatting
                            - heading "2026-03-08" [level=4] [ref=e1107]
                            - list [ref=e1108]:
                              - listitem [ref=e1109]: Updated for season 12
                            - heading "2026-03-05" [level=4] [ref=e1110]
                            - list [ref=e1111]:
                              - listitem [ref=e1112]: Guide ownership transferred from Ruse to kay
                        - generic [ref=e1114]:
                          - generic [ref=e1118]:
                            - heading "Comments" [level=2] [ref=e1119]
                            - generic [ref=e1120]: "0"
                          - generic [ref=e1122]:
                            - generic [ref=e1126]:
                              - generic [ref=e1128]:
                                - generic [ref=e1129]:
                                  - button [ref=e1131] [cursor=pointer]
                                  - button [ref=e1134] [cursor=pointer]
                                  - button [ref=e1137] [cursor=pointer]
                                  - button [ref=e1140] [cursor=pointer]
                                - button [ref=e1143] [cursor=pointer]
                                - generic [ref=e1146]:
                                  - button [ref=e1148] [cursor=pointer]
                                  - button [ref=e1151] [cursor=pointer]
                                - button [ref=e1154] [cursor=pointer]
                              - generic [ref=e1157]:
                                - textbox [ref=e1159]:
                                  - paragraph [ref=e1160]
                                - generic: Share your thoughts...Type @ to try game data
                              - generic [ref=e1161]:
                                - generic: 1000 characters remaining
                                - button "Comment" [ref=e1162] [cursor=pointer]
                            - generic "select" [ref=e1164]:
                              - combobox [ref=e1167]
                              - button "Newest" [ref=e1170] [cursor=pointer]
                      - generic [ref=e1176]:
                        - generic [ref=e1177]:
                          - heading "Table of Contents" [level=2] [ref=e1181]
                          - generic [ref=e1182]:
                            - generic [ref=e1183]:
                              - link "1. Build Overview" [ref=e1184] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#15-build-overview-0
                              - link "2. Strengths and Weaknesses" [ref=e1185] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#14-strengths-and-weaknesses-0
                              - link "3. Build Variants" [ref=e1186] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#1-build-variants-0
                              - link "4. Aspect & Uniques" [ref=e1187] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#ab718646-d18e-4ca9-93bb-8ea74d271d95-aspect-and-uniques-0
                              - link "5. Skills & Rotation" [ref=e1188] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#a2c30520-c418-4b67-8e26-abbc10d98679-skills-and-rotation-0
                              - link "6. Skill Tree" [ref=e1189] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#2c0cee3c-524e-4f49-b7be-97a657ee4aa6-skill-tree-0
                              - link "7. Paragon Board" [ref=e1190] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#efd4caba-ed32-4370-961e-1c50489d447b-paragon-board-0
                              - link "8. Mercenaries" [ref=e1191] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#c1004d73-b65e-4532-8ee0-f4dcda79a644-mercenaries-0
                              - link "9. Frequently Asked Questions" [ref=e1192] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#17-frequently-asked-questions-1
                              - link "10. Changelog" [ref=e1193] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#18-changelog-2
                              - link "11. Comments" [ref=e1194] [cursor=pointer]:
                                - /url: /diablo-4/builds/necromancer-blood-surge?beta-v2#ac4c21ea-f833-55a6-b457-35d3259874ea-comments-0
                            - button "Back to top" [ref=e1196] [cursor=pointer]
                        - generic [ref=e1198]:
                          - heading "Featured Builds" [level=2] [ref=e1202]
                          - generic [ref=e1204]:
                            - generic [ref=e1206] [cursor=pointer]:
                              - link [ref=e1207]:
                                - /url: /diablo-4/builds/test-01
                              - generic [ref=e1211]:
                                - generic [ref=e1212]: Test Stas int d4 apollo migration 1.750.2-rc.6
                                - generic [ref=e1213]: Updated on Oct 29, 2026
                            - generic [ref=e1216] [cursor=pointer]:
                              - link [ref=e1217]:
                                - /url: /diablo-4/builds/sorcerer-ball-lightning
                              - generic [ref=e1221]:
                                - generic [ref=e1222]: Ball Lightning - Mekuna's Ballkuna
                                - generic [ref=e1223]: Updated on Oct 29, 2026
                            - generic [ref=e1226] [cursor=pointer]:
                              - link [ref=e1227]:
                                - /url: /diablo-4/builds/druid-storm-lightning-wolf
                              - generic [ref=e1231]:
                                - generic [ref=e1232]: Stormslide
                                - generic [ref=e1233]: Updated on Oct 26, 2026
                            - generic [ref=e1236] [cursor=pointer]:
                              - link [ref=e1237]:
                                - /url: /diablo-4/builds/og-image-test-for-build
                              - generic [ref=e1241]:
                                - generic [ref=e1242]: Og image test build
                                - generic [ref=e1243]: Updated on Oct 20, 2026
                            - generic [ref=e1246] [cursor=pointer]:
                              - link [ref=e1247]:
                                - /url: /diablo-4/builds/ssrtesttest
                              - generic [ref=e1251]:
                                - generic [ref=e1252]: Equipment
                                - generic [ref=e1253]: Updated on Oct 12, 2026
                            - link "View All" [ref=e1255] [cursor=pointer]:
                              - /url: /diablo-4/builds
                        - link [ref=e1258] [cursor=pointer]:
                          - /url: https://form.typeform.com/to/iDJST6r5#email=xxxxx
                          - generic [ref=e1261]:
                            - generic [ref=e1262]:
                              - paragraph [ref=e1263]: Become a Creator
                              - paragraph [ref=e1264]: Want to earn rewards by sharing your builds with your community?
                            - button "Join Creator Program" [ref=e1266]
                  - status [ref=e1268]
              - generic [ref=e1270] [cursor=pointer]
            - complementary [ref=e1274]:
              - generic [ref=e1275]:
                - generic [ref=e1277]:
                  - generic [ref=e1279] [cursor=pointer]:
                    - generic [ref=e1280]: Advertisement
                    - generic [ref=e1281]: Remove Ads
                  - generic [ref=e1287] [cursor=pointer]:
                    - generic [ref=e1288]: Remove all ads
                    - generic [ref=e1289]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                    - button "Remove ads" [ref=e1290]
                - generic [ref=e1292]:
                  - generic [ref=e1294] [cursor=pointer]:
                    - generic [ref=e1295]: Advertisement
                    - generic [ref=e1296]: Remove Ads
                  - generic [ref=e1302] [cursor=pointer]:
                    - generic [ref=e1303]: Remove all ads
                    - generic [ref=e1304]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                    - button "Remove ads" [ref=e1305]
          - generic [ref=e1311]:
            - img [ref=e1312] [cursor=pointer]
            - generic [ref=e1313]:
              - banner [ref=e1314]:
                - generic [ref=e1315]: Know Exactly What Item Is Next - Track Your Build
                - generic [ref=e1316]:
                  - generic [ref=e1317]: Want to min/max your grind?
                  - generic [ref=e1318]: This feature lets you easily track your Build and know exactly what you need next.
              - generic [ref=e1324]:
                - generic [ref=e1325]:
                  - generic [ref=e1326]:
                    - generic [ref=e1328]: Equipment Autotracker
                    - generic [ref=e1329]: New
                  - generic [ref=e1331]: Hover an equipped item to automatically compare it to your tracked build when using our Desktop App.
                - generic [ref=e1332]:
                  - generic [ref=e1333]:
                    - img "check" [ref=e1334]
                    - generic [ref=e1335]: Track Your Build
                  - generic [ref=e1336]:
                    - img "check" [ref=e1337]
                    - generic [ref=e1338]: See Build completion as a % score
              - button "Activate Tracking" [ref=e1339] [cursor=pointer]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e1343]:
    - banner [ref=e1344]:
      - generic [ref=e1345] [cursor=pointer]:
        - generic [ref=e1346]: Advertisement
        - generic [ref=e1347]: Remove Ads
    - generic [ref=e1351] [cursor=pointer]:
      - generic [ref=e1352]: Remove all ads
      - generic [ref=e1353]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e1354]
  - button "Do Not Sell or Share My Personal Information" [ref=e1358] [cursor=pointer]:
    - paragraph [ref=e1360]: Do Not Sell or Share My Personal Information
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixture';
  2  | // import { Moba } from '../../app/page-object/moba';
  3  | // import { v4 as uuidv4 } from 'uuid';
  4  | 
  5  | test.use({
  6  |   storageState: {
  7  |     cookies: [],
  8  |     origins: [
  9  |       {
  10 |         origin: 'https://stg.mobalytics.gg',
  11 |         localStorage: [
  12 |           {
  13 |             name: 'battle-pass-should-open-sidebar-on-load',
  14 |             value: 'anonymous',
  15 |           },
  16 |         ],
  17 |       },
  18 |     ],
  19 |   },
  20 | });
  21 | 
  22 | test('Activate tracking build modal appears for unauthorized user', async ({ page }) => {
  23 |   await page.goto('https://stg.mobalytics.gg/diablo-4/builds/necromancer-blood-surge?beta-v2', {
  24 |     waitUntil: 'domcontentloaded',
  25 |   });
  26 | 
  27 |   await expect(async () => {
  28 |     await page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }).click();
  29 |     await expect(
  30 |       page.locator('.ModalBox').getByRole('button', { name: 'Activate Tracking' }),
  31 |       `Activate Tracking button is present`
  32 |     ).toBeVisible();
> 33 |   }).toPass({ intervals: [1_000, 2_000], timeout: 10_000 });
     |      ^ Error: Timeout 10000ms exceeded while waiting on the predicate
  34 | 
  35 |   await page.locator('.x10l6tqk.x8l1umf').click();
  36 | 
  37 |   await expect
  38 |     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }))
  39 |     .toBeVisible();
  40 |   await expect
  41 |     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Tracking' }))
  42 |     .not.toBeVisible();
  43 | });
  44 | 
  45 | test('Activate tracking build modal appears for regular user', async ({ page, apiRegisterAccount }) => {
  46 |   await page.goto('https://stg.mobalytics.gg/diablo-4/builds/necromancer-blood-surge');
  47 |   await page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }).click();
  48 | 
  49 |   await expect
  50 |     .soft(
  51 |       page.locator('.ModalBox').getByRole('button', { name: 'Activate Tracking' }),
  52 |       `Activate Tracking button is present`
  53 |     )
  54 |     .toBeVisible();
  55 |   await page.locator('.x10l6tqk.x8l1umf').click();
  56 |   await expect
  57 |     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }))
  58 |     .toBeVisible();
  59 |   await expect
  60 |     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Tracking' }))
  61 |     .not.toBeVisible();
  62 | });
  63 | 
  64 | // test('Activate tracking build feature  for plus user', async ({ page, apiPlusUser }) => {
  65 | //   await page.goto('https://stg.mobalytics.gg/diablo-4/builds/sorcerer-mekuna-lightning-spear');
  66 | //   await page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }).click();
  67 | 
  68 | //   await expect
  69 | //     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Track Build' }))
  70 | //     .not.toBeVisible();
  71 | //   await expect
  72 | //     .soft(page.getByTestId('document-ug-widget-header').getByRole('button', { name: 'Tracking' }))
  73 | //     .toBeVisible();
  74 | // });
  75 | 
```