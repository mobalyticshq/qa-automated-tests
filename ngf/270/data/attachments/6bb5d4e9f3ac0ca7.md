# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Game Manager permission >> Game Manager role can can upload an image to CDN on the ug page
- Location: e2e-tests/ngf.test.js:892:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByText('Build Cover ImageCover Image(').getByRole('button', { name: 'Apply' })
    - locator resolved to <button disabled type="submit" class="x1n2onr6 x1hv8zah x1h7s0lp x78zum5 x6s0dn4 x167g77z xlkovuz xuxw1ft x10w6t97 x84vhe8 xl56j7k x1kylzug x1h6gzvc x1deyofa x1kv6p4p xxowsx">Apply</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    168 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Zenless Zone Zero banner text Learn more Close":
      - /url: https://www.google.com
      - generic [ref=e4] [cursor=pointer]:
        - generic [ref=e5]:
          - paragraph [ref=e11]: Zenless Zone Zero banner text
          - button "Learn more" [ref=e12]
        - img "Close" [ref=e13]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - link "Mobalytics" [ref=e16] [cursor=pointer]:
          - /url: /zzz
          - img "Mobalytics" [ref=e17]
        - generic [ref=e19]:
          - link "League of Legends LoL" [ref=e21] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/lol
            - generic [ref=e23]:
              - img "League of Legends" [ref=e24]
              - generic [ref=e25]: LoL
          - link "Teamfight Tactics TFT" [ref=e27] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/tft
            - generic [ref=e29]:
              - img "Teamfight Tactics" [ref=e30]
              - generic [ref=e31]: TFT
          - link "Diablo 4 Diablo 4" [ref=e33] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/diablo-4
            - generic [ref=e35]:
              - img "Diablo 4" [ref=e36]
              - generic [ref=e37]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e39] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe-2
            - generic [ref=e41]:
              - img "Path of Exile 2" [ref=e42]
              - generic [ref=e43]: PoE 2
          - link "Path of Exile PoE" [ref=e45] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/poe
            - generic [ref=e47]:
              - img "Path of Exile" [ref=e48]
              - generic [ref=e49]: PoE
          - link "Destiny 2 Destiny 2" [ref=e51] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/destiny-2
            - generic [ref=e53]:
              - img "Destiny 2" [ref=e54]
              - generic [ref=e55]: Destiny 2
          - link "Marathon Marathon" [ref=e57] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/marathon
            - generic [ref=e59]:
              - img "Marathon" [ref=e60]
              - generic [ref=e61]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e63] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/slay-the-spire-2
            - generic [ref=e65]:
              - img "Slay the Spire 2" [ref=e66]
              - generic [ref=e67]: STS 2
          - link "Deadlock Deadlock" [ref=e69] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/deadlock
            - generic [ref=e71]:
              - img "Deadlock" [ref=e72]
              - generic [ref=e73]: Deadlock
          - link "Overwatch Overwatch" [ref=e75] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/overwatch
            - generic [ref=e77]:
              - img "Overwatch" [ref=e78]
              - generic [ref=e79]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e81] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/borderlands-4
            - generic [ref=e83]:
              - img "Borderlands 4" [ref=e84]
              - generic [ref=e85]: Borderlands 4
          - link "Valorant VAL" [ref=e87] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/valorant
            - generic [ref=e89]:
              - img "Valorant" [ref=e90]
              - generic [ref=e91]: VAL
          - link "Neverness to Everness NTE New" [ref=e93] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/neverness-to-everness
            - generic [ref=e95]:
              - img "Neverness to Everness" [ref=e96]
              - generic [ref=e97]: NTE
              - generic [ref=e99]: New
          - 'link "Arknights: Endfield Endfield" [ref=e101] [cursor=pointer]':
            - /url: https://stg.mobalytics.gg/arknights-endfield
            - generic [ref=e103]:
              - 'img "Arknights: Endfield" [ref=e104]'
              - generic [ref=e105]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e107] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/elden-ring-nightreign
            - generic [ref=e109]:
              - img "Elden Ring Nightreign" [ref=e110]
              - generic [ref=e111]: Nightreign
          - button [ref=e112] [cursor=pointer]:
            - img [ref=e113]
          - generic:
            - link "Monster Hunter Wilds Monster Hunter Wilds":
              - /url: https://stg.mobalytics.gg/mhw
              - generic:
                - generic:
                  - img "Monster Hunter Wilds"
                  - generic: Monster Hunter Wilds
          - generic:
            - link "Hades 2 Hades 2":
              - /url: https://stg.mobalytics.gg/hades-2
              - generic:
                - generic:
                  - img "Hades 2"
                  - generic: Hades 2
          - generic:
            - link "The Bazaar The Bazaar":
              - /url: https://stg.mobalytics.gg/the-bazaar
              - generic:
                - generic:
                  - img "The Bazaar"
                  - generic: The Bazaar
          - generic:
            - link "Marvel Rivals Marvel Rivals":
              - /url: https://stg.mobalytics.gg/marvel-rivals
              - generic:
                - generic:
                  - img "Marvel Rivals"
                  - generic: Marvel Rivals
          - generic:
            - link "Zenless Zone Zero ZZZ":
              - /url: https://stg.mobalytics.gg/zzz
              - generic:
                - generic:
                  - img "Zenless Zone Zero"
                  - generic: ZZZ
          - generic:
            - link "2XKO 2XKO":
              - /url: https://stg.mobalytics.gg/2xko
              - generic:
                - generic:
                  - img "2XKO"
                  - generic: 2XKO
          - generic:
            - link "Riftbound Riftbound":
              - /url: https://stg.mobalytics.gg/riftbound
              - generic:
                - generic:
                  - img "Riftbound"
                  - generic: Riftbound
          - generic:
            - link "Example game ExG":
              - /url: https://stg.mobalytics.gg/example-game
              - generic:
                - generic:
                  - img "Example game"
                  - generic: ExG
      - generic [ref=e114]:
        - generic [ref=e115]:
          - link "DOWNLOAD APP" [ref=e116] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-zzz&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e118]:
              - img [ref=e119]
              - text: DOWNLOAD APP
          - link "News" [ref=e121] [cursor=pointer]:
            - /url: /news
            - generic [ref=e122]: News
        - generic [ref=e123]:
          - button "Remove Ads" [ref=e124] [cursor=pointer]
          - generic [ref=e125]:
            - link "G game_manager_auto_tests+stg+ns@mobalyticshq.com" [ref=e126] [cursor=pointer]:
              - /url: /zzz/profile/bold-flame-c2mepg
              - generic [ref=e128]:
                - generic [ref=e130]: G
                - generic [ref=e132]: game_manager_auto_tests+stg+ns@mobalyticshq.com
            - button [ref=e134] [cursor=pointer]:
              - img [ref=e136]
            - button "Theme" [ref=e138] [cursor=pointer]:
              - img "Theme" [ref=e140]
      - generic [ref=e142]:
        - link "Home" [ref=e145] [cursor=pointer]:
          - /url: /zzz
          - img "Home" [ref=e147]
        - link "Profile" [ref=e150] [cursor=pointer]:
          - /url: /zzz/profile
          - img "Profile" [ref=e152]
        - link "Characters" [ref=e155] [cursor=pointer]:
          - /url: /zzz/characters
          - img "Characters" [ref=e157]
        - link "Builds" [ref=e160] [cursor=pointer]:
          - /url: /zzz/builds
          - img "Builds" [ref=e162]
        - link "Teams" [ref=e165] [cursor=pointer]:
          - /url: /zzz/teams
          - img "Teams" [ref=e167]
        - link "Tier List" [ref=e170] [cursor=pointer]:
          - /url: /zzz/tier-list
          - img "Tier List" [ref=e172]
        - link "W-Engines" [ref=e175] [cursor=pointer]:
          - /url: /zzz/w-engines
          - img "W-Engines" [ref=e177]
        - link "Drive Discs" [ref=e180] [cursor=pointer]:
          - /url: /zzz/drive-discs
          - img "Drive Discs" [ref=e182]
        - link "Bangboos" [ref=e185] [cursor=pointer]:
          - /url: /zzz/bangboos
          - img "Bangboos" [ref=e187]
        - link "Guides" [ref=e190] [cursor=pointer]:
          - /url: /zzz/guides
          - img "Guides" [ref=e192]
      - generic [ref=e193]:
        - generic [ref=e194]:
          - main [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]:
                - generic [ref=e198]:
                  - generic [ref=e203]:
                    - generic [ref=e204]: My Build
                    - textbox [ref=e205]: My Build
                  - generic [ref=e206]:
                    - button "Save Draft" [ref=e207] [cursor=pointer]
                    - button "Reset Build" [disabled] [ref=e208]:
                      - img [ref=e209]
                      - text: Reset Build
                    - button "Cover Image" [ref=e211] [cursor=pointer]:
                      - img [ref=e212]
                      - text: Cover Image
                - generic [ref=e214]:
                  - generic [ref=e215]:
                    - generic [ref=e216]: "Verified:"
                    - generic "select" [ref=e217]:
                      - combobox [ref=e220]
                      - button "Verified" [ref=e223] [cursor=pointer]:
                        - generic [ref=e224]: Verified
                        - img [ref=e226]
                  - generic "select" [ref=e229]:
                    - button "Featured" [ref=e231] [cursor=pointer]:
                      - generic [ref=e232]: Featured
                      - img [ref=e234]
              - generic [ref=e236]:
                - generic [ref=e237]:
                  - button "ZZZ Build My Build By Author Updated on Jul 13, 2026 Ad Placeholder" [ref=e240]:
                    - generic [ref=e241]:
                      - button "ZZZ Build My Build By Author Updated on Jul 13, 2026" [ref=e243]:
                        - generic [ref=e244]:
                          - button [ref=e250] [cursor=pointer]:
                            - img [ref=e252]
                          - generic [ref=e254]:
                            - generic [ref=e255]: ZZZ Build
                            - heading "My Build" [level=1] [ref=e256]
                            - generic [ref=e257]:
                              - generic [ref=e260]:
                                - text: By
                                - generic [ref=e261]: Author
                              - generic [ref=e264]:
                                - text: Updated on
                                - generic [ref=e265]: Jul 13, 2026
                      - generic [ref=e269]: Ad Placeholder
                  - button [ref=e272]:
                    - generic [ref=e273]:
                      - generic [ref=e275]:
                        - button "Build Overview Edit Groups and Slots W-Engines Best in Slot Empty Alternative Empty Alternative Empty Alternative Empty F2P Empty F2P Empty 4-Pc Drive Disc Recommended Empty Alternative Empty Alternative Empty 2-Pc Drive Disc Recommended Empty Alternative Empty Alternative Empty Alternative Empty Alternative Empty Alternative Empty select Drive Disc StatsPartition 4:Partition 5:Partition 6:Substats 926 characters remaining" [ref=e278]:
                          - generic [ref=e280]:
                            - generic [ref=e281]:
                              - generic [ref=e283]:
                                - heading "Build Overview" [level=2] [ref=e286]
                                - generic [ref=e287]:
                                  - button "Edit" [ref=e288] [cursor=pointer]
                                  - button [ref=e290] [cursor=pointer]:
                                    - img [ref=e292]
                              - generic [ref=e293]:
                                - button "Groups and Slots" [ref=e296] [cursor=pointer]:
                                  - generic [ref=e297]:
                                    - img [ref=e298]
                                    - generic "Groups and Slots" [ref=e299]
                                - generic [ref=e300]:
                                  - generic [ref=e301]:
                                    - generic [ref=e302]: W-Engines
                                    - generic [ref=e303]:
                                      - generic [ref=e305]:
                                        - img [ref=e308]
                                        - generic [ref=e309]:
                                          - generic [ref=e310]: Best in Slot
                                          - generic [ref=e311]: Empty
                                      - generic [ref=e313]:
                                        - img [ref=e316]
                                        - generic [ref=e317]:
                                          - generic [ref=e318]: Alternative
                                          - generic [ref=e319]: Empty
                                      - generic [ref=e321]:
                                        - img [ref=e324]
                                        - generic [ref=e325]:
                                          - generic [ref=e326]: Alternative
                                          - generic [ref=e327]: Empty
                                      - generic [ref=e329]:
                                        - img [ref=e332]
                                        - generic [ref=e333]:
                                          - generic [ref=e334]: Alternative
                                          - generic [ref=e335]: Empty
                                      - generic [ref=e337]:
                                        - img [ref=e340]
                                        - generic [ref=e341]:
                                          - generic [ref=e342]: F2P
                                          - generic [ref=e343]: Empty
                                      - generic [ref=e345]:
                                        - img [ref=e348]
                                        - generic [ref=e349]:
                                          - generic [ref=e350]: F2P
                                          - generic [ref=e351]: Empty
                                  - generic [ref=e352]:
                                    - generic [ref=e353]: 4-Pc Drive Disc
                                    - generic [ref=e354]:
                                      - generic [ref=e356]:
                                        - img [ref=e359]
                                        - generic [ref=e360]:
                                          - generic [ref=e361]: Recommended
                                          - generic [ref=e362]: Empty
                                      - generic [ref=e364]:
                                        - img [ref=e367]
                                        - generic [ref=e368]:
                                          - generic [ref=e369]: Alternative
                                          - generic [ref=e370]: Empty
                                      - generic [ref=e372]:
                                        - img [ref=e375]
                                        - generic [ref=e376]:
                                          - generic [ref=e377]: Alternative
                                          - generic [ref=e378]: Empty
                                  - generic [ref=e379]:
                                    - generic [ref=e380]: 2-Pc Drive Disc
                                    - generic [ref=e381]:
                                      - generic [ref=e383]:
                                        - img [ref=e386]
                                        - generic [ref=e387]:
                                          - generic [ref=e388]: Recommended
                                          - generic [ref=e389]: Empty
                                      - generic [ref=e391]:
                                        - img [ref=e394]
                                        - generic [ref=e395]:
                                          - generic [ref=e396]: Alternative
                                          - generic [ref=e397]: Empty
                                      - generic [ref=e399]:
                                        - img [ref=e402]
                                        - generic [ref=e403]:
                                          - generic [ref=e404]: Alternative
                                          - generic [ref=e405]: Empty
                                      - generic [ref=e407]:
                                        - img [ref=e410]
                                        - generic [ref=e411]:
                                          - generic [ref=e412]: Alternative
                                          - generic [ref=e413]: Empty
                                      - generic [ref=e415]:
                                        - img [ref=e418]
                                        - generic [ref=e419]:
                                          - generic [ref=e420]: Alternative
                                          - generic [ref=e421]: Empty
                                      - generic [ref=e423]:
                                        - img [ref=e426]
                                        - generic [ref=e427]:
                                          - generic [ref=e428]: Alternative
                                          - generic [ref=e429]: Empty
                            - generic [ref=e433]:
                              - generic [ref=e435]:
                                - generic "select" [ref=e436]:
                                  - combobox [ref=e439]
                                  - button "Normal text" [ref=e442] [cursor=pointer]:
                                    - generic [ref=e443]: Normal text
                                    - img [ref=e445]
                                - generic [ref=e448]:
                                  - button [ref=e450] [cursor=pointer]:
                                    - img [ref=e451]
                                  - button [ref=e453] [cursor=pointer]:
                                    - img [ref=e454]
                                  - button [ref=e456] [cursor=pointer]:
                                    - img [ref=e457]
                                  - button [ref=e459] [cursor=pointer]:
                                    - img [ref=e460]
                                - button [ref=e462] [cursor=pointer]:
                                  - img [ref=e463]
                                - button [ref=e466] [cursor=pointer]:
                                  - img [ref=e467]
                                - button [ref=e469] [cursor=pointer]:
                                  - img [ref=e470]
                              - textbox [ref=e474]:
                                - heading "Drive Disc Stats" [level=4] [ref=e475]
                                - list [ref=e476]:
                                  - listitem [ref=e477]:
                                    - strong [ref=e478]: "Partition 4:"
                                  - listitem [ref=e479]:
                                    - strong [ref=e480]: "Partition 5:"
                                  - listitem [ref=e481]:
                                    - strong [ref=e482]: "Partition 6:"
                                - heading "Substats" [level=4] [ref=e483]:
                                  - strong [ref=e484]: Substats
                                - list [ref=e485]:
                                  - listitem [ref=e486]
                                  - listitem [ref=e487]
                                  - listitem [ref=e488]
                              - generic: 926 characters remaining
                        - button "Kit Overview Edit select Write something, or press ‘/’ for commands, ‘@’ for game data" [ref=e492]:
                          - generic [ref=e493]:
                            - generic [ref=e495]:
                              - heading "Kit Overview" [level=2] [ref=e498]
                              - generic [ref=e499]:
                                - button "Edit" [ref=e500] [cursor=pointer]
                                - button [ref=e502] [cursor=pointer]:
                                  - img [ref=e504]
                            - generic [ref=e506]:
                              - generic [ref=e508]:
                                - generic "select" [ref=e509]:
                                  - combobox [ref=e512]
                                  - button "Normal text" [ref=e515] [cursor=pointer]:
                                    - generic [ref=e516]: Normal text
                                    - img [ref=e518]
                                - generic [ref=e521]:
                                  - button [ref=e523] [cursor=pointer]:
                                    - img [ref=e524]
                                  - button [ref=e526] [cursor=pointer]:
                                    - img [ref=e527]
                                  - button [ref=e529] [cursor=pointer]:
                                    - img [ref=e530]
                                  - button [ref=e532] [cursor=pointer]:
                                    - img [ref=e533]
                                - button [ref=e535] [cursor=pointer]:
                                  - img [ref=e536]
                                - button [ref=e539] [cursor=pointer]:
                                  - img [ref=e540]
                                - generic [ref=e542]:
                                  - button [ref=e544] [cursor=pointer]:
                                    - img [ref=e545]
                                  - button [ref=e547] [cursor=pointer]:
                                    - img [ref=e548]
                                  - button [ref=e550] [cursor=pointer]:
                                    - img [ref=e551]
                                - button [ref=e555] [cursor=pointer]:
                                  - img [ref=e557]
                              - generic [ref=e559]:
                                - generic [ref=e560]:
                                  - textbox [ref=e561]:
                                    - paragraph [ref=e562]
                                  - button [ref=e564] [cursor=pointer]
                                  - button [ref=e565] [cursor=pointer]
                                - generic: Write something, or press ‘/’ for commands, ‘@’ for game data
                        - button "Skill Priority Edit select Core Passive Basic Attack Dodge Assist EX Special Ultimate" [ref=e568]:
                          - generic [ref=e569]:
                            - generic [ref=e571]:
                              - heading "Skill Priority" [level=2] [ref=e574]
                              - generic [ref=e575]:
                                - button "Edit" [ref=e576] [cursor=pointer]
                                - button [ref=e578] [cursor=pointer]:
                                  - img [ref=e580]
                            - generic [ref=e582]:
                              - generic [ref=e584]:
                                - generic "select" [ref=e585]:
                                  - combobox [ref=e588]
                                  - button "Normal text" [ref=e591] [cursor=pointer]:
                                    - generic [ref=e592]: Normal text
                                    - img [ref=e594]
                                - generic [ref=e597]:
                                  - button [ref=e599] [cursor=pointer]:
                                    - img [ref=e600]
                                  - button [ref=e602] [cursor=pointer]:
                                    - img [ref=e603]
                                  - button [ref=e605] [cursor=pointer]:
                                    - img [ref=e606]
                                  - button [ref=e608] [cursor=pointer]:
                                    - img [ref=e609]
                                - button [ref=e611] [cursor=pointer]:
                                  - img [ref=e612]
                                - button [ref=e615] [cursor=pointer]:
                                  - img [ref=e616]
                                - generic [ref=e618]:
                                  - button [ref=e620] [cursor=pointer]:
                                    - img [ref=e621]
                                  - button [ref=e623] [cursor=pointer]:
                                    - img [ref=e624]
                                  - button [ref=e626] [cursor=pointer]:
                                    - img [ref=e627]
                                - button [ref=e631] [cursor=pointer]:
                                  - img [ref=e633]
                              - generic [ref=e636]:
                                - textbox [ref=e637]:
                                  - list [ref=e638]:
                                    - listitem [ref=e639]:
                                      - img "zzz core skill" [ref=e643] [cursor=pointer]
                                      - text: Core Passive
                                    - listitem [ref=e644]:
                                      - img "zzz basic attack" [ref=e648] [cursor=pointer]
                                      - text: Basic Attack
                                    - listitem [ref=e649]:
                                      - img "zzz dodge" [ref=e653] [cursor=pointer]
                                      - text: Dodge
                                    - listitem [ref=e654]:
                                      - img "zzz assist" [ref=e658] [cursor=pointer]
                                      - text: Assist
                                    - listitem [ref=e659]:
                                      - img "zzz ex special attack" [ref=e663] [cursor=pointer]
                                      - text: EX Special
                                    - listitem [ref=e664]:
                                      - img "zzz ultimate" [ref=e668] [cursor=pointer]
                                      - text: Ultimate
                                - button [ref=e670] [cursor=pointer]
                                - button [ref=e671] [cursor=pointer]
                        - button "W-Engines Edit select Write something, or press ‘/’ for commands, ‘@’ for game data" [ref=e674]:
                          - generic [ref=e675]:
                            - generic [ref=e677]:
                              - heading "W-Engines" [level=2] [ref=e680]
                              - generic [ref=e681]:
                                - button "Edit" [ref=e682] [cursor=pointer]
                                - button [ref=e684] [cursor=pointer]:
                                  - img [ref=e686]
                            - generic [ref=e688]:
                              - generic [ref=e690]:
                                - generic "select" [ref=e691]:
                                  - combobox [ref=e694]
                                  - button "Normal text" [ref=e697] [cursor=pointer]:
                                    - generic [ref=e698]: Normal text
                                    - img [ref=e700]
                                - generic [ref=e703]:
                                  - button [ref=e705] [cursor=pointer]:
                                    - img [ref=e706]
                                  - button [ref=e708] [cursor=pointer]:
                                    - img [ref=e709]
                                  - button [ref=e711] [cursor=pointer]:
                                    - img [ref=e712]
                                  - button [ref=e714] [cursor=pointer]:
                                    - img [ref=e715]
                                - button [ref=e717] [cursor=pointer]:
                                  - img [ref=e718]
                                - button [ref=e721] [cursor=pointer]:
                                  - img [ref=e722]
                                - generic [ref=e724]:
                                  - button [ref=e726] [cursor=pointer]:
                                    - img [ref=e727]
                                  - button [ref=e729] [cursor=pointer]:
                                    - img [ref=e730]
                                  - button [ref=e732] [cursor=pointer]:
                                    - img [ref=e733]
                                - button [ref=e737] [cursor=pointer]:
                                  - img [ref=e739]
                              - generic [ref=e741]:
                                - generic [ref=e742]:
                                  - textbox [ref=e743]:
                                    - paragraph [ref=e744]
                                  - button [ref=e746] [cursor=pointer]
                                  - button [ref=e747] [cursor=pointer]
                                - generic: Write something, or press ‘/’ for commands, ‘@’ for game data
                        - button "Drive Discs & Stats Edit select Write something, or press ‘/’ for commands, ‘@’ for game data" [ref=e750]:
                          - generic [ref=e751]:
                            - generic [ref=e753]:
                              - heading "Drive Discs & Stats" [level=2] [ref=e756]
                              - generic [ref=e757]:
                                - button "Edit" [ref=e758] [cursor=pointer]
                                - button [ref=e760] [cursor=pointer]:
                                  - img [ref=e762]
                            - generic [ref=e764]:
                              - generic [ref=e766]:
                                - generic "select" [ref=e767]:
                                  - combobox [ref=e770]
                                  - button "Normal text" [ref=e773] [cursor=pointer]:
                                    - generic [ref=e774]: Normal text
                                    - img [ref=e776]
                                - generic [ref=e779]:
                                  - button [ref=e781] [cursor=pointer]:
                                    - img [ref=e782]
                                  - button [ref=e784] [cursor=pointer]:
                                    - img [ref=e785]
                                  - button [ref=e787] [cursor=pointer]:
                                    - img [ref=e788]
                                  - button [ref=e790] [cursor=pointer]:
                                    - img [ref=e791]
                                - button [ref=e793] [cursor=pointer]:
                                  - img [ref=e794]
                                - button [ref=e797] [cursor=pointer]:
                                  - img [ref=e798]
                                - generic [ref=e800]:
                                  - button [ref=e802] [cursor=pointer]:
                                    - img [ref=e803]
                                  - button [ref=e805] [cursor=pointer]:
                                    - img [ref=e806]
                                  - button [ref=e808] [cursor=pointer]:
                                    - img [ref=e809]
                                - button [ref=e813] [cursor=pointer]:
                                  - img [ref=e815]
                              - generic [ref=e817]:
                                - generic [ref=e818]:
                                  - textbox [ref=e819]:
                                    - paragraph [ref=e820]
                                  - button [ref=e822] [cursor=pointer]
                                  - button [ref=e823] [cursor=pointer]
                                - generic: Write something, or press ‘/’ for commands, ‘@’ for game data
                        - button "Mindscapes Edit select Write something, or press ‘/’ for commands, ‘@’ for game data" [ref=e826]:
                          - generic [ref=e827]:
                            - generic [ref=e829]:
                              - heading "Mindscapes" [level=2] [ref=e832]
                              - generic [ref=e833]:
                                - button "Edit" [ref=e834] [cursor=pointer]
                                - button [ref=e836] [cursor=pointer]:
                                  - img [ref=e838]
                            - generic [ref=e840]:
                              - generic [ref=e842]:
                                - generic "select" [ref=e843]:
                                  - combobox [ref=e846]
                                  - button "Normal text" [ref=e849] [cursor=pointer]:
                                    - generic [ref=e850]: Normal text
                                    - img [ref=e852]
                                - generic [ref=e855]:
                                  - button [ref=e857] [cursor=pointer]:
                                    - img [ref=e858]
                                  - button [ref=e860] [cursor=pointer]:
                                    - img [ref=e861]
                                  - button [ref=e863] [cursor=pointer]:
                                    - img [ref=e864]
                                  - button [ref=e866] [cursor=pointer]:
                                    - img [ref=e867]
                                - button [ref=e869] [cursor=pointer]:
                                  - img [ref=e870]
                                - button [ref=e873] [cursor=pointer]:
                                  - img [ref=e874]
                                - generic [ref=e876]:
                                  - button [ref=e878] [cursor=pointer]:
                                    - img [ref=e879]
                                  - button [ref=e881] [cursor=pointer]:
                                    - img [ref=e882]
                                  - button [ref=e884] [cursor=pointer]:
                                    - img [ref=e885]
                                - button [ref=e889] [cursor=pointer]:
                                  - img [ref=e891]
                              - generic [ref=e893]:
                                - generic [ref=e894]:
                                  - textbox [ref=e895]:
                                    - paragraph [ref=e896]
                                  - button [ref=e898] [cursor=pointer]
                                  - button [ref=e899] [cursor=pointer]
                                - generic: Write something, or press ‘/’ for commands, ‘@’ for game data
                        - button "Additional Tips Edit select Write something, or press ‘/’ for commands, ‘@’ for game data" [ref=e902]:
                          - generic [ref=e903]:
                            - generic [ref=e905]:
                              - heading "Additional Tips" [level=2] [ref=e908]
                              - generic [ref=e909]:
                                - button "Edit" [ref=e910] [cursor=pointer]
                                - button [ref=e912] [cursor=pointer]:
                                  - img [ref=e914]
                            - generic [ref=e916]:
                              - generic [ref=e918]:
                                - generic "select" [ref=e919]:
                                  - combobox [ref=e922]
                                  - button "Normal text" [ref=e925] [cursor=pointer]:
                                    - generic [ref=e926]: Normal text
                                    - img [ref=e928]
                                - generic [ref=e931]:
                                  - button [ref=e933] [cursor=pointer]:
                                    - img [ref=e934]
                                  - button [ref=e936] [cursor=pointer]:
                                    - img [ref=e937]
                                  - button [ref=e939] [cursor=pointer]:
                                    - img [ref=e940]
                                  - button [ref=e942] [cursor=pointer]:
                                    - img [ref=e943]
                                - button [ref=e945] [cursor=pointer]:
                                  - img [ref=e946]
                                - button [ref=e949] [cursor=pointer]:
                                  - img [ref=e950]
                                - generic [ref=e952]:
                                  - button [ref=e954] [cursor=pointer]:
                                    - img [ref=e955]
                                  - button [ref=e957] [cursor=pointer]:
                                    - img [ref=e958]
                                  - button [ref=e960] [cursor=pointer]:
                                    - img [ref=e961]
                                - button [ref=e965] [cursor=pointer]:
                                  - img [ref=e967]
                              - generic [ref=e969]:
                                - generic [ref=e970]:
                                  - textbox [ref=e971]:
                                    - paragraph [ref=e972]
                                  - button [ref=e974] [cursor=pointer]
                                  - button [ref=e975] [cursor=pointer]
                                - generic: Write something, or press ‘/’ for commands, ‘@’ for game data
                        - button [ref=e979] [cursor=pointer]:
                          - img [ref=e981]
                      - generic [ref=e982]:
                        - 'button "Video Edit Video (Optional) Upload Video Supported formats: WebM, MP4 Choose file" [ref=e985]':
                          - generic [ref=e986]:
                            - generic [ref=e988]:
                              - heading "Video" [level=2] [ref=e991]
                              - generic [ref=e992]:
                                - button "Edit" [ref=e993] [cursor=pointer]
                                - button [ref=e995] [cursor=pointer]:
                                  - img [ref=e997]
                            - generic [ref=e999]:
                              - generic [ref=e1000]:
                                - generic [ref=e1003]:
                                  - generic [ref=e1004]: Video
                                  - generic [ref=e1005]: (Optional)
                                - radiogroup [ref=e1007]:
                                  - generic [ref=e1011] [cursor=pointer]:
                                    - radio "Upload" [checked] [ref=e1013]
                                    - generic [ref=e1015]: Upload
                                  - generic [ref=e1017] [cursor=pointer]:
                                    - radio "Link" [ref=e1019]
                                    - generic [ref=e1021]: Link
                              - generic [ref=e1024] [cursor=pointer]:
                                - generic [ref=e1025]:
                                  - paragraph [ref=e1026]: Upload Video
                                  - paragraph [ref=e1027]: "Supported formats: WebM, MP4"
                                - button "Choose file" [ref=e1028]
                        - generic [ref=e1029]:
                          - button "Table of Contents 1. Build Overview 2. Kit Overview 3. Skill Priority 4. W-Engines 5. Drive Discs & Stats 6. Mindscapes 7. Additional Tips Back to top" [ref=e1032]:
                            - generic [ref=e1033]:
                              - generic [ref=e1035]:
                                - heading "Table of Contents" [level=2] [ref=e1038]
                                - button [ref=e1041] [cursor=pointer]:
                                  - img [ref=e1043]
                              - generic [ref=e1044]:
                                - generic [ref=e1045]:
                                  - link "1. Build Overview" [ref=e1046] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#1-build-overview-0
                                  - link "2. Kit Overview" [ref=e1047] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#1dc6cdd3-7058-4c31-bbe0-28cea47626de-kit-overview-0
                                  - link "3. Skill Priority" [ref=e1048] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#e59aa3e0-8f1f-418a-a2f6-a876e09bbc8e-skill-priority-1
                                  - link "4. W-Engines" [ref=e1049] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#2-w-engines-2
                                  - link "5. Drive Discs & Stats" [ref=e1050] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#3-drive-discs-and-stats-3
                                  - link "6. Mindscapes" [ref=e1051] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#936eb25c-8e76-41e3-94f3-8a469f4db7e3-mindscapes-4
                                  - link "7. Additional Tips" [ref=e1052] [cursor=pointer]:
                                    - /url: /zzz/planner/builds#eb86eaae-7762-495c-8156-2b82f76abd6b-additional-tips-5
                                - button "Back to top" [ref=e1054] [cursor=pointer]
                          - button "Latest Builds Edit Test el split By Gattino#Nero ∙ May 7, 2026 Verified Featured Add to Favorites Share" [ref=e1057]:
                            - generic [ref=e1059]:
                              - generic [ref=e1061]:
                                - heading "Latest Builds" [level=2] [ref=e1064]
                                - generic [ref=e1065]:
                                  - button "Edit" [ref=e1066] [cursor=pointer]
                                  - button [ref=e1068] [cursor=pointer]:
                                    - img [ref=e1070]
                              - generic [ref=e1072]:
                                - generic:
                                  - generic:
                                    - link:
                                      - /url: /zzz/builds/test-el-split
                                    - generic:
                                      - generic:
                                        - generic: Test el split
                                        - generic:
                                          - text: By
                                          - link "Gattino#Nero":
                                            - /url: /zzz/profile/iron-robot-bg6id8
                                          - text: ∙
                                          - generic: May 7, 2026
                                    - generic:
                                      - generic: Verified
                                      - generic: Featured
                                    - generic:
                                      - generic:
                                        - generic:
                                          - button "Add to Favorites":
                                            - img
                                            - text: Add to Favorites
                                          - button "Share":
                                            - img
                                            - text: Share
                                          - generic:
                                            - button:
                                              - generic:
                                                - img
                          - button [ref=e1076] [cursor=pointer]:
                            - img [ref=e1078]
                - button "Add section" [ref=e1080] [cursor=pointer]:
                  - img [ref=e1081]
                  - text: Add section
                - status [ref=e1082]
          - complementary [ref=e1087]:
            - generic [ref=e1088]:
              - generic [ref=e1090]:
                - generic [ref=e1092] [cursor=pointer]:
                  - generic [ref=e1093]: Advertisement
                  - generic [ref=e1094]: Remove Ads
                - generic [ref=e1097] [cursor=pointer]:
                  - generic [ref=e1098]: Remove all ads
                  - generic [ref=e1099]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e1100]
              - generic [ref=e1102]:
                - generic [ref=e1104] [cursor=pointer]:
                  - generic [ref=e1105]: Advertisement
                  - generic [ref=e1106]: Remove Ads
                - generic [ref=e1109] [cursor=pointer]:
                  - generic [ref=e1110]: Remove all ads
                  - generic [ref=e1111]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e1112]
        - generic [ref=e1119]:
          - generic [ref=e1121]:
            - generic [ref=e1123]: Build Cover Image
            - button [ref=e1124] [cursor=pointer]:
              - img [ref=e1125]
          - generic [ref=e1127]:
            - generic [ref=e1128]:
              - generic [ref=e1131]:
                - generic [ref=e1132]: Cover Image
                - img [ref=e1133]
                - generic [ref=e1134]: (Optional)
              - radiogroup [ref=e1136]:
                - generic [ref=e1140] [cursor=pointer]:
                  - radio "Upload" [checked] [ref=e1142]
                  - generic [ref=e1144]: Upload
                - generic [ref=e1146] [cursor=pointer]:
                  - radio "Link" [ref=e1148]
                  - generic [ref=e1150]: Link
            - generic [ref=e1153] [cursor=pointer]:
              - paragraph [ref=e1154]: target is unknown
              - button "Choose file" [ref=e1155]
          - generic [ref=e1157]:
            - button "Cancel" [ref=e1158] [cursor=pointer]
            - button "Apply" [disabled] [ref=e1159]
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1   | import { test } from '@playwright/test';
  2   | import path from 'path';
  3   | import { fileURLToPath } from 'url';
  4   | import fs from 'fs';
  5   | 
  6   | const __filename = fileURLToPath(import.meta.url);
  7   | const __dirname = path.dirname(__filename);
  8   | 
  9   | export class UgBuildPlanner {
  10  |   constructor(page) {
  11  |     this.page = page;
  12  |     this.inputBuildName = page.locator('#title-id');
  13  |     this.buttonSaveDraft = page.getByTestId('ug-document-save-draft-button');
  14  |     this.buttonResetBuild = page.getByRole('button', { name: 'Reset Build' });
  15  |     this.buttonCancelInModal = page.getByRole('button', { name: 'Cancel' });
  16  |     this.buttonSaveDraftInModal = page.getByRole('button', {
  17  |       name: 'Save as Draft',
  18  |     });
  19  |     this.buttonSavePublishInModal = page.getByRole('button', {
  20  |       name: 'Save and Publish',
  21  |     });
  22  |     this.coverImageButton = page.getByTestId('ug-document-edit-cover-image-button');
  23  |     this.controlPanel = page.getByTestId('document-controls-panel');
  24  |     this.mainPage = page.getByRole('main');
  25  |     this.coverImage = page.locator('div[style*="cdn.mobalytics.gg"]').first();
  26  |     // this.header = page.locator("#ngfdocumentugwidgetheaderv1");
  27  |     this.videoChooseFileButton = page
  28  |       .getByRole('button', {
  29  |         name: 'Video Guide Edit Video (Optional) Upload Video Supported formats: WebM, MP4 Choose file',
  30  |         exact: true,
  31  |       })
  32  |       .getByRole('button', { name: 'Choose file' });
  33  |     this.imgChooseFileButton = page
  34  |       .getByText('Build Cover ImageCover Image(')
  35  |       .getByRole('button', { name: 'Choose file' });
  36  |     this.applyButtonInCoverImageModal = page
  37  |       .getByText('Build Cover ImageCover Image(')
  38  |       .getByRole('button', { name: 'Apply' });
  39  |   }
  40  | 
  41  |   async uploadCoverImage(fileName) {
  42  |     await test.step(`Upload file: ${fileName} to CDN in the Cover Image widget`, async () => {
  43  |       let actualFilePath;
  44  | 
  45  |       // If a file contains unique ID then create temporary copy of this file
  46  |       if (fileName.includes('aqa-telegram') && fileName.endsWith('.svg')) {
  47  |         // Use base file telegram.svg
  48  |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-telegram.svg');
  49  |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  50  | 
  51  |         try {
  52  |           // Copy file with a new name
  53  |           fs.copyFileSync(baseFilePath, tempFilePath);
  54  |           actualFilePath = tempFilePath;
  55  | 
  56  |           // Deleting file after test
  57  |           process.on('exit', () => {
  58  |             try {
  59  |               if (fs.existsSync(tempFilePath)) {
  60  |                 fs.unlinkSync(tempFilePath);
  61  |               }
  62  |             } catch (error) {
  63  |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  64  |             }
  65  |           });
  66  |         } catch (error) {
  67  |           console.log(`Warning: Could not create temp file, using base file`);
  68  |           actualFilePath = baseFilePath;
  69  |         }
  70  |       } else {
  71  |         // Use as is
  72  |         actualFilePath = path.join(__dirname, '../images/', fileName);
  73  |       }
  74  | 
  75  |       await this.coverImageButton.click();
  76  |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  77  |       await this.imgChooseFileButton.click();
  78  |       const fileChooser = await fileChooserPromise;
  79  |       await fileChooser.setFiles(actualFilePath);
> 80  |       await this.applyButtonInCoverImageModal.click();
      |                                               ^ Error: locator.click: Test timeout of 90000ms exceeded.
  81  |     });
  82  |   }
  83  |   async createUgDraftPage(pageName) {
  84  |     await test.step('Create a draft page', async () => {
  85  |       await this.inputBuildName.click();
  86  |       await this.inputBuildName.fill(pageName);
  87  |       await this.buttonSaveDraft.click();
  88  |       await this.buttonSaveDraftInModal.click();
  89  |     });
  90  |   }
  91  | 
  92  |   async uploadVideo(fileName) {
  93  |     await test.step(`Upload file: ${fileName} to CDN in the VideoV2 widget`, async () => {
  94  |       let actualFilePath;
  95  | 
  96  |       // If a file contains unique ID then create temporary copy of this file
  97  |       if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
  98  |         // Copy file with unique ID
  99  |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
  100 |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  101 | 
  102 |         try {
  103 |           // Copy file with a new name
  104 |           fs.copyFileSync(baseFilePath, tempFilePath);
  105 |           actualFilePath = tempFilePath;
  106 | 
  107 |           // Deleting file after test
  108 |           process.on('exit', () => {
  109 |             try {
  110 |               if (fs.existsSync(tempFilePath)) {
  111 |                 fs.unlinkSync(tempFilePath);
  112 |               }
  113 |             } catch (error) {
  114 |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  115 |             }
  116 |           });
  117 |         } catch (error) {
  118 |           console.log(`Warning: Could not create temp file, using base file`);
  119 |           actualFilePath = baseFilePath;
  120 |         }
  121 |       } else {
  122 |         // Use as is
  123 |         actualFilePath = path.join(__dirname, '../images/', fileName);
  124 |       }
  125 | 
  126 |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  127 |       await this.videoChooseFileButton.click();
  128 |       const fileChooser = await fileChooserPromise;
  129 |       await fileChooser.setFiles(actualFilePath);
  130 |     });
  131 |   }
  132 | }
  133 | 
```