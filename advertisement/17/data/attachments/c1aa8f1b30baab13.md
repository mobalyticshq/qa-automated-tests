# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1233-1411px) for different user roles >> Check video block, footer banner, L vertical banner for plus user - Endfield in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement.test.js:13204:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-arknights-endfield-display-footer-d').locator('..').or(locator('#arknights-endfield-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-arknights-endfield-display-footer-d').locator('..').or(locator('#arknights-endfield-nitro-anchor').locator('..'))
    27 × locator resolved to <div class="m-114015r">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Check out Neverness to Everness, the latest gacha on the scene Explore NTE Close":
        - /url: https://mobalytics.gg/neverness-to-everness
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e7]: Check out Neverness to Everness, the latest gacha on the scene
            - button "Explore NTE" [ref=e8]
          - img "Close" [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e11]:
          - link "Mobalytics" [ref=e12] [cursor=pointer]:
            - /url: /arknights-endfield
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
            - link "Overwatch Overwatch" [ref=e71] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=e73]:
                - img "Overwatch" [ref=e74]
                - generic [ref=e75]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e77] [cursor=pointer]:
              - /url: https://mobalytics.gg/borderlands-4
              - generic [ref=e79]:
                - img "Borderlands 4" [ref=e80]
                - generic [ref=e81]: Borderlands 4
            - button [ref=e82] [cursor=pointer]:
              - img [ref=e83]
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
        - generic [ref=e84]:
          - generic [ref=e85]:
            - button "plus Activate Pass" [ref=e90] [cursor=pointer]:
              - img "plus" [ref=e92]
              - generic [ref=e93]: Activate Pass
            - link "DOWNLOAD APP" [ref=e94] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-arknights-endfield&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e96]:
                - img [ref=e97]
                - text: DOWNLOAD APP
            - link "News" [ref=e99] [cursor=pointer]:
              - /url: /news
              - generic [ref=e100]: News
          - generic [ref=e102]:
            - button "Sign In" [ref=e104] [cursor=pointer]
            - button [ref=e106] [cursor=pointer]:
              - img [ref=e108]
            - button "Theme" [ref=e110] [cursor=pointer]:
              - img "Theme" [ref=e112]
        - generic [ref=e114]:
          - link "Home" [ref=e117] [cursor=pointer]:
            - /url: /arknights-endfield
            - img "Home" [ref=e119]
          - link "Profile" [ref=e122] [cursor=pointer]:
            - /url: /arknights-endfield/profile
            - img "Profile" [ref=e124]
          - link "Characters" [ref=e127] [cursor=pointer]:
            - /url: /arknights-endfield/characters
            - img "Characters" [ref=e129]
          - link "Tier List" [ref=e132] [cursor=pointer]:
            - /url: /arknights-endfield/tier-list
            - img "Tier List" [ref=e134]
          - link "Bases" [ref=e137] [cursor=pointer]:
            - /url: /arknights-endfield/bases
            - img "Bases" [ref=e139]
          - link "Teams" [ref=e142] [cursor=pointer]:
            - /url: /arknights-endfield/teams
            - img "Teams" [ref=e144]
          - link "Weapons" [ref=e147] [cursor=pointer]:
            - /url: /arknights-endfield/weapons
            - img "Weapons" [ref=e149]
          - link "Gear" [ref=e152] [cursor=pointer]:
            - /url: /arknights-endfield/gear
            - img "Gear" [ref=e154]
          - link "Guides" [ref=e157] [cursor=pointer]:
            - /url: /arknights-endfield/guides
            - img "Guides" [ref=e159]
        - generic [ref=e161]:
          - main [ref=e162]:
            - generic [ref=e164]:
              - generic [ref=e165]:
                - 'button "Arknights: Endfield - Builds, Guides, Teams & More Mobalytics is the best source for Arknights: Endfield builds, team comps, guides, and more. Discover Endfield meta, and learn everything about the game!" [ref=e168]':
                  - generic [ref=e173]:
                    - generic [ref=e174]:
                      - img [ref=e176]
                      - 'heading "Arknights: Endfield - Builds, Guides, Teams & More" [level=1] [ref=e177]'
                    - paragraph [ref=e185]: "Mobalytics is the best source for Arknights: Endfield builds, team comps, guides, and more. Discover Endfield meta, and learn everything about the game!"
                - generic [ref=e187]:
                  - generic [ref=e188]:
                    - 'link "Arknights: Endfield Tier Lists Check out the Mobalytics Tier List or make your own. Create Tier List" [ref=e190] [cursor=pointer]':
                      - /url: /arknights-endfield/tier-list
                      - generic [ref=e193]:
                        - generic [ref=e194]:
                          - paragraph [ref=e195]: "Arknights: Endfield Tier Lists"
                          - paragraph [ref=e196]: Check out the Mobalytics Tier List or make your own.
                        - button "Create Tier List" [ref=e198]: Create Tier List
                    - generic [ref=e200]:
                      - generic [ref=e201]:
                        - heading "Characters by Rarity" [level=2] [ref=e205]
                        - tablist [ref=e209]:
                          - tablist [ref=e211]:
                            - tab "6⭐⭐⭐⭐⭐⭐" [selected] [ref=e212] [cursor=pointer]:
                              - generic [ref=e213]: 6⭐⭐⭐⭐⭐⭐
                            - tab "5⭐⭐⭐⭐⭐" [ref=e215] [cursor=pointer]:
                              - generic [ref=e216]: 5⭐⭐⭐⭐⭐
                            - tab "4⭐⭐⭐⭐" [ref=e217] [cursor=pointer]:
                              - generic [ref=e218]: 4⭐⭐⭐⭐
                      - generic [ref=e221]:
                        - heading "6-Star Operators" [level=2] [ref=e225]
                        - tablist [ref=e228]:
                          - tablist [ref=e230]:
                            - tab "6⭐⭐⭐⭐⭐⭐" [selected] [ref=e231] [cursor=pointer]:
                              - generic [ref=e232]: 6⭐⭐⭐⭐⭐⭐
                            - tab "5⭐⭐⭐⭐⭐" [ref=e234] [cursor=pointer]:
                              - generic [ref=e235]: 5⭐⭐⭐⭐⭐
                            - tab "4⭐⭐⭐⭐" [ref=e236] [cursor=pointer]:
                              - generic [ref=e237]: 4⭐⭐⭐⭐
                        - generic [ref=e239]:
                          - link "Camille" [ref=e240] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/camille-build-guide
                            - generic "Camille" [ref=e245]
                          - link "Mi Fu" [ref=e246] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/mi-fu-build-guide
                            - generic "Mi Fu" [ref=e251]
                          - link "Zhuang Fangyi" [ref=e252] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/zhuang-fangyi-build-guide
                            - generic "Zhuang Fangyi" [ref=e257]
                          - link "Rossi" [ref=e258] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/rossi-build-guide
                            - generic "Rossi" [ref=e263]
                          - link "Tangtang" [ref=e264] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/tangtang-build-guide
                            - generic "Tangtang" [ref=e269]
                          - link "Yvonne" [ref=e270] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/yvonne-build-guide
                            - generic "Yvonne" [ref=e275]
                          - link "Gilberta" [ref=e276] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/gilberta-build-guide
                            - generic "Gilberta" [ref=e281]
                          - link "Laevatain" [ref=e282] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/laevatain-build-guide
                            - generic "Laevatain" [ref=e287]
                          - link "Endministrator" [ref=e288] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/endministrator-build-guide
                            - generic "Endministrator" [ref=e293]
                          - link "Ardelia" [ref=e294] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/ardelia-build-guide
                            - generic "Ardelia" [ref=e299]
                          - link "Ember" [ref=e300] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/ember-build-guide
                            - generic "Ember" [ref=e305]
                          - link "Last Rite" [ref=e306] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/last-rite-build-guide
                            - generic "Last Rite" [ref=e311]
                          - link "Lifeng" [ref=e312] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/lifeng-build-guide
                            - generic "Lifeng" [ref=e317]
                          - link "Pogranichnik" [ref=e318] [cursor=pointer]:
                            - /url: /arknights-endfield/characters/pogranichnik-build-guide
                            - generic "Pogranichnik" [ref=e323]
                  - generic [ref=e324]:
                    - link "All Characters & Build Guides Explore the full roster of Operators in Endfield Explore the Roster" [ref=e326] [cursor=pointer]:
                      - /url: /arknights-endfield/characters
                      - generic [ref=e329]:
                        - generic [ref=e330]:
                          - paragraph [ref=e331]: All Characters & Build Guides
                          - paragraph [ref=e332]: Explore the full roster of Operators in Endfield
                        - button "Explore the Roster" [ref=e334]: Explore the Roster
                    - link "Redemption Codes Claim Free Rewards!" [ref=e337] [cursor=pointer]:
                      - /url: /arknights-endfield/guides/redemption-codes
                      - generic [ref=e340]:
                        - generic [ref=e341]:
                          - paragraph [ref=e342]: Redemption Codes
                          - paragraph
                        - button "Claim Free Rewards!" [ref=e344]: Claim Free Rewards!
                    - 'link "Beginner Guides Learn the Basics of Arknights: Endfield" [ref=e347] [cursor=pointer]':
                      - /url: /arknights-endfield/guides
                      - generic [ref=e350]:
                        - generic [ref=e351]:
                          - paragraph [ref=e352]: Beginner Guides
                          - paragraph
                        - 'button "Learn the Basics of Arknights: Endfield" [ref=e354]': "Learn the Basics of Arknights: Endfield"
                    - link "Best Teams Explore the best Teams in Endfield" [ref=e357] [cursor=pointer]:
                      - /url: /arknights-endfield/teams
                      - generic [ref=e360]:
                        - generic [ref=e361]:
                          - paragraph [ref=e362]: Best Teams
                          - paragraph
                        - button "Explore the best Teams in Endfield" [ref=e364]: Explore the best Teams in Endfield
                - generic [ref=e366]:
                  - link "Neverness to Everness NTE is the urban open world GTA-like of gachas by Hotta Studio, featuring the City Tycoon system where you run your own empire. Check out NTE" [ref=e369] [cursor=pointer]:
                    - /url: /neverness-to-everness
                    - generic [ref=e372]:
                      - generic [ref=e373]:
                        - paragraph [ref=e374]: Neverness to Everness
                        - paragraph [ref=e375]: NTE is the urban open world GTA-like of gachas by Hotta Studio, featuring the City Tycoon system where you run your own empire.
                      - button "Check out NTE" [ref=e377]: Check out NTE
                  - link "Zenless Zone Zero An urban fantasy action RPG from HoYoverse set in a post-apocalyptic, retro-futuristic world with a focus on combat gameplay Check out Zenless Zone Zero" [ref=e381] [cursor=pointer]:
                    - /url: /zzz
                    - generic [ref=e384]:
                      - generic [ref=e385]:
                        - paragraph [ref=e386]: Zenless Zone Zero
                        - paragraph [ref=e387]: An urban fantasy action RPG from HoYoverse set in a post-apocalyptic, retro-futuristic world with a focus on combat gameplay
                      - button "Check out Zenless Zone Zero" [ref=e389]: Check out Zenless Zone Zero
                  - link "Genshin Impact A massive open-world action RPG with a deep combat system and a large variety of game modes and content Coming Soon" [ref=e393] [cursor=pointer]:
                    - /url: /arknights-endfield
                    - generic [ref=e396]:
                      - generic [ref=e397]:
                        - paragraph [ref=e398]: Genshin Impact
                        - paragraph [ref=e399]: A massive open-world action RPG with a deep combat system and a large variety of game modes and content
                      - button "Coming Soon" [ref=e401]: Coming Soon
              - status [ref=e403]
          - complementary [ref=e409]:
            - generic [ref=e412]:
              - generic [ref=e415] [cursor=pointer]: Remove Ads
              - iframe [ref=e421]:
                - generic [ref=f22e2]:
                  - link "Advertisement" [ref=f22e4] [cursor=pointer]:
                    - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjstMSsrtuayz2oavDxEjmyfXzVz8kl6gD4QOca9Xd__2nYqeDZnn74FqsabXIBgV3L58f76htmc6lWnn_pV-YK24cgm720Pew5qFlvnWLhMbmstrzln0cB1ZPqbWQYCqMOtak9Xt3Uf7ay4AtX5TBmLAd_zgJbNemPohfGB4O36yd9YWElka0395U6UMueorbgUrTcv65m2StHr0Ffxyam1ICwXmRZXgEp7HH5ILvBNmPa17wmMHM9bX6rwgImpEle1d-sPOoo73AM6AwzYqSalVwe1XHavPW2btlVI64Yi2k4z4H0qdmAeXLfuzumdnG0Shrub0Esk4az0Rn3IG5GV92mllhosRYfJ8619x4Af0DlOaq_Wt4IAw6vtmfTcbhI_aEb1D26_9uL9M1PJwg0NLLE1bpUW2irbv2qpEeBi6d32Q8EIs8jjPa8D2gKPq2h0JFrO6lM5Cj9FfSwAIL8Ar6zFNBiP5KPC0demlSNvjmNZ531zRjfv67HITHOZ6-Gkl-mmZd8Hlyq5oH7rjXxKYEAsLP7WX0VrUTWZd2OPAgUxroE5YMVd8wLrAFeTl2guBgYSB041WM1l_jnSf_BoJvhh82i8vhEiv0wHOUjiIs9mYrzCRrp7ObRG3PKdmB9TaStzzstbo0yGCCQDjIG4GtlVsrwnNqnQ5_cT3tw6RViZw20jIKdjBgjeSr-_Yspyhe4qYA0cgrdgulNWrEY_dGDzZb22Ii5fz5txfUHjS7NCBDuLnfxvjeB_IDZ8k9VzOZpTlIdmyF_Yp_RcKcazMeY-O0Fxl3eyeHSMbT-hAfzS9NLpurDfsHkBm77sqINviuSI3E0Vm3f9Sls0Tn_zxRWx8s6fg5SfJv3bdfY_QgCPF-5XjKKs4S4brvWwrR4WiOMFpMBjWtEUknQFZLQm-N1M5B98GHe6WOQ9SeR1B7XjK0a9iysdwIMTuPbAWr7ZyjB3WETEIHrKtsk1Cy9YbgJ7D-Hu_qccblascsxfENn-C5a1j1YQsagnQFHoR3Rua4k3eUJxY0f339jYQhNnxHSI14viu1UpWd2XSXo9RAfxyk-WZU87HEO1xEsaLt392vTpsJK--uj6poDA8TUgRCBNyJpMVjvGVPfA92X2q1JWyDOWl7wml2AEyAaBLourouQiJ-qp0g1mm6Cz7pFUs1ny8PiaAmzbFaNUMfQdtkiOtdDbgD5TTrMW4ZYzLLPy3Sy9W7sDBULdX7JcLtr6h38CsSdosQr_LPXAOgZB-EVwc1WeLRP-77xgkbRIqtlzWYSwMQDysvEnXr5RLVrU3H5iG0e0d0JAapyesbzNP3zzcE0lCjV8uChXIIKhWG-TqYO_KEFh4WxzgtsjvHhp_ghHle2cnKSxyfH4eDhoju8aTyA40j_PopSdWarN3Xyv3RVQW12J2x3HQycO5oq6Jk581cvm9I52rAd2hYfAOMRrvzW0zIOHPbqHerRf-ebL3dOw6vfCx04z3yCAK8fo-dZUGxRlgWIEOYh7tjNrHdMBWfl9p8v6uOHwRjTOwixo5JQnT3sF4key8WBPZfW19XoGEa_iN4Bxugdk_GwbBrn-BI2QNH86M-rNQXVDa0OSabVhSQq2fBmLFecNBK8er7JVqDx13xfvxBqwm0hsLzk_iYF-p_lHwUbwi4VfpQYbZE5hgbZ_SEbYCcycQ0HfcDTfDu9pt3HtbyepJ5m-knVnTb5j6wI41efJnYdyxhMBoQZLnh0sH_LqgVR35ERxzDWl9a6gtIz9Cn9FmlwAUZO4EJs9HhVUwN4P2AkVJEkyYfl6Sw-00XfQm1fUAfR2BO95VusBd2xXTd1hHn8Wid0bXgowpgDk8AHqFJTwdNVpPVo_HC_vuVJHUt8Bv4Abf3Bj69aVvHITl23OI9IzSHXJhb0_fQGa8S3Egrc51YUJ81tCSJftOnBNaDLzhKAw0WGGqIepoPFd8O75DUA&sai=AMfl-YTBEf2QTVnSJvWo53kDlPOCIBQw4rfeUWdCBlwJyUQ_uxJLSTJrsYCOg1bYOyRdfl1OweB9ZAmRPtu0JNPKpgalF0EueRguw9__6XiFWmUnDsgYIqo1ikgxYBvOAXQX82BeihzgD0_RwnotYrvAsNFQsq21BdI78kNGhWiQonWTf9qseORADVosg6fdcx0gv006hVeNZHHLyeczDQlCtiV6n3CDq13m4a7cwNhD6oJeku-M7t_LEw_lzZuwAZwE67g-PAICgWsDY85seUy1F3QUHBncwFqxD3_RfO2y69W7iUy9vBoDyBkBSboLWx_yNE2-TbfmbA1B1mQOs55USgx8yNMkIyVJr5gMIEmu5yoxNSyvVm4DRBPZ3cBHhbmDXVu0YLWIWVe767vkvXsjavEuy0LXlwk9qEzXk2n0SN3oN6UqzRKMZyKUhJYBoQNOl7OoweOeIJwVsiof1fieIu6LT9AUrChivumwQ_gUsKVJ2TJ0C3SRqCOrKNKmlNfAp4_q5uAuryxqRomV0kchAE4mvBpWYlZ2dWAZQ87TyALPcJJUx-BOEAdm_JSm0xTmvUJx3DW93M5bbJi_vzqf7nrxK6PXG3OI_gJeYPcEaPnk9OnNdfa7UFz3qLko2VkV2yAppGfp7q-OL_McxwILZF1pcP0iaSHeyAzc46iBptFVclEkXJRzSDxJOlyEtVS6kBZYCn81LlxITcrzAucggywYFTjuiPCZ7KTHiwg09vq19zg1ZHLrwko1swPTy1gJ5LlN4l_TddB-RtqL04i6mJRvkmk9mS9tflicXST67MNxY6mQEMQdVabIm-s3d8F8ep-9_Mrzm2m6KecCLH4tTLqWZT9EhPDUel08T20aKmefS-HK7hz7lxJMUcO_sBTTX_0tTCqSb6XChdYx&sig=Cg0ArKJSzByaIFnyBmDq&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.amd.com/en/gaming/why-we-game.html%3Futm_medium%3Dprogrammatic%26utm_source%3Ddsp%26utm_campaign%3D26q3_glob_gam_mult_gamer-first-hero_awa_no_1009200_havas_149jk_oem_gamerfirst2.1%2520oem%26utm_content%3Ddisplaybanners-bo7%26utm_term%3Dus%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23981123659
                    - img "Advertisement" [ref=f22e5]
                  - generic [ref=f22e6]:
                    - generic:
                      - generic:
                        - link:
                          - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo_bMQqCo8lWrdb2fBQiXiJNNYqa5yh1wvw7i8-WXUY5x4w3g-xJfaMdJU1MUq4ugm3c9PsO2RS-FpsSZICTrTGCvtrNsSec9ScIPPDCekIMVpENc4etjrKGuaYLv24hKHtzHF-_NoCXD1FY0mGXfPNSrAt8nGfXkvLoX5n4X4h-GW05PckIlTrBQ7s0iNneJwQocAYVyWJNNDiJHoHuaJXEpqTFLU1wt-U1Ak_-AoddfvpEief3JTm6cKrbEC0AeXxEaXIWD3bzisjKUF9RILas2sjdUCXM4vEGLDgoZhojvrI2rAHpUU1Zt3J1GE_B_FHsRbA4HMbrmH2dVhZqpI5LkDSTi4hu1gqMaLcE7yrE68m0rd4aHh2G_YEvFFSVSsqOwONowG_D7Fo0rtOljDvOvqt3E5gcSOVLS7LdlmnKa2b7porw8O9JHjelLVDzdmCtoPDzv6WcWh3st4FF0D7OmOhfEwl6CmTp9MH4hu4RcTW6NVn7UVJVEWQI5jpDIAAwzIV96ajNCKKMkGqz2RVpTJx3wJLWefPBtrYoqr-KCWD7Gys1mn8G0Gg3ltH6fUAlwl9JFYHjZhTyTrfMtLtJYG6BU_0LqPjJJOi0RQOxsBY47h8MnJB-shmA5TASpkVkGZ5EC3YN1aUJC3ExFnTV3NIjYOznwzuBYzBVfzvcUeVjwVG0EtpmSrIFqKMkdfuCly8nJJDWAdobfXsf5V__Ded7s--_NudrED5he7q91jVE98IckhaF-rDnL3wXgk8XLvbgkRY8PH37ub91m0vBhJWr2Q69D__YxN9uRGD1F2phfEmxTuAY26LO1NlCsM-yWIULSW9kibePKcYmEhJiWPQvS6rBheg-wIUC3uh1IZoQ3hix7qQhxV05J3rMJj5ER-edNq7B0-OMGjdLHjI4OF1RV7w2EXRwjecZNqtZlm4iUco4mq59ICPC8XMs1DCLZgKxvMFtB86Xeb0WPMGZMekznF4B5f5gcBQ6ZXHf3YpoDow9eVg5dLI4HVPOAh4YfWGVEYHYJkE_g47-9gN29D6oW-icRkJ9tqDjzx9eUBDvWRlxZK5gS2dnnPvxtA9yJVOyyVZfNFjWg2aLEaBcyNgJgxpsZrpUVrUr50jVbF03FN_M5A6pJCTZfpXbSoureEkUyOGnNqTQ0uiWYUZ0A-v2lSpI_eD4Bv-pHBdhZBGZYZs4JlUVWNIE_rdDaElphDuYsUGUA9WnsFOrqqscs7_h7z3clbDzhSuid2DS9L-6H2AatKdAIDRLjd2FxFfX4wqMHH81YWBO7Cyi19McucU1r432i3QX6tFoh3zopSgmHet1rid_Y34XQSlUyfl9ORw79JToCMnkH7ZzAgpAXYn-KL9MwaEndzBdfPJQraNlcmnwm-5bwJGBYnCCWz6kimfKWQlvq3jS4r37dOijGqM6I0JuVqGhTM1lnay-eDQ5WZ-XIyqzXAitTX8N0TEcHzSO4x7J7Rcfp-t1GdqMmZehr7zOfBdq-HZ4KFvzuZI4r153uGfsh7kHRhSKIW4J5wo96CH57ruNyszo3q0UW_dgPo3DLE4c_PV5RdcwcH2Td2DzLBLAgWnx2HXEV8mjqxhwhXGvTrZJWUYOuKJLUmXsQRgpbdurMA0DqKGOVNxTqnYFIR0xa5l-s3c9YmKfopRJ6aACes70UEwyVE6A6bKObs8Fuzs7NI75gSwCMcVLAs9u2FxS0ZzTdbOrQA3z_QfMyA5LLXEyDVbzjSfyRiIqTWBAZI2DKkrHNWKd8H7nABX4uEY2jdO9B9MlMGeYLEC0-LSRJtsvuT7aXeMJHZ-3Cm9qqzTAD8FXkxHMxM4dXQEV0IxXNUl69DBQoL0BLEoX5y0_OcwAv11hrClncY5UD12kx3a3qRTuBzhrK1ctKwG4BoP_szpWd7XMuORuDTq-nthFeJMQ7AVrRZxf9tP5qeJd8U2j-0AMQS1zrWkTI6qbznSn60-hhrvJ4Kfiek6hd-YCRTOfNwXRCRDNbEpMiyu4ONCyepDJ1C1NDHfcstj6Zkx24jSTkc1omqYHLzWlhym33Jh4xa3tEzrH3xe48i-F4Okj-xDg11VNJpJMGjSv_2LXX2Q4XodmIxUtCQHVgTX6PC3iziQK7gcQMkJ8O2moOfuHhHSH-P0EoxDzmlu5G9pxKSpJPA9B9-Bj__aKJeBXIntoUEzaJZpePI19SPl9NfdpSEmU0yfcFNoAP0GYKbsFnhk7gI5ugfD8v3kWqAscHxhCggaPkKefE5wr4lFEqyQ3971Wv4yqF6w6Rc5krQ5VcPHeT4CjBSYPZhTQ2kJuuHPKPVw5vWnHdk9czFheG86I-Cn56c9xHlZAWcEOqTliuDF7oIuWuwExssGnjrRHy_Sq82KiZd-_uM7tUrBOLV5MLwxZCpKgeZieCGo_E5wMyVZPWA-apWVJuWzjhhuwJD05rt4BQ7m5JB6MJPe_ePc6WKgfDKq00DT0kjkvHwDdOKgQLNR1NGr2QXoPy9ZYnfpdDuXrC1HGhiDdMbc5NPRBGzE
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e424]:
    - banner [ref=e425]:
      - generic [ref=e426] [cursor=pointer]:
        - generic [ref=e427]: Advertisement
        - generic [ref=e428]: Remove Ads
    - generic [ref=e431] [cursor=pointer]:
      - generic [ref=e432]: Remove all ads
      - generic [ref=e433]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e434]:
        - generic [ref=e435]: Remove ads
```

# Test source

```ts
  13838 |                 )
  13839 |                 .not.toBeVisible();
  13840 |             });
  13841 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  13842 |               await expect
  13843 |                 .soft(
  13844 |                   page
  13845 |                     .locator('#bl4-display-small-all-pages')
  13846 |                     .or(page.locator('#borderlands-4-nitro-m').locator('xpath=..'))
  13847 |                 )
  13848 |                 .not.toBeVisible();
  13849 |             });
  13850 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  13851 |               await expect
  13852 |                 .soft(
  13853 |                   page
  13854 |                     .locator('#web-borderlands-4-display-footer-d')
  13855 |                     .locator('xpath=..')
  13856 |                     .or(page.locator('#borderlands-4-nitro-anchor').locator('xpath=..'))
  13857 |                 )
  13858 |                 .not.toBeVisible();
  13859 |             });
  13860 |             break;
  13861 |           case 'Hades 2':
  13862 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  13863 |               await expect
  13864 |                 .soft(
  13865 |                   page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
  13866 |                 )
  13867 |                 .not.toBeVisible();
  13868 |             });
  13869 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  13870 |               await expect
  13871 |                 .soft(
  13872 |                   page
  13873 |                     .locator('#hades-2-display-all-pages')
  13874 |                     .or(page.locator('#hades-2-nitro-l').locator('xpath=..'))
  13875 |                     .or(page.locator('#hades-2-nitro-3').locator('xpath=..'))
  13876 |                     .first()
  13877 |                 )
  13878 |                 .not.toBeVisible();
  13879 |             });
  13880 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  13881 |               await expect
  13882 |                 .soft(
  13883 |                   page
  13884 |                     .locator('#hades-2-display-small-all-pages')
  13885 |                     .or(page.locator('#hades-2-nitro-m').locator('xpath=..'))
  13886 |                 )
  13887 |                 .not.toBeVisible();
  13888 |             });
  13889 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  13890 |               await expect
  13891 |                 .soft(
  13892 |                   page
  13893 |                     .locator('#web-hades-2-display-footer-d')
  13894 |                     .locator('xpath=..')
  13895 |                     .or(page.locator('#hades-2-nitro-anchor').locator('xpath=..'))
  13896 |                 )
  13897 |                 .not.toBeVisible();
  13898 |             });
  13899 |             break;
  13900 |           case 'Endfield':
  13901 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  13902 |               await expect
  13903 |                 .soft(
  13904 |                   page
  13905 |                     .locator('#endfield-video-all-pages')
  13906 |                     .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
  13907 |                 )
  13908 |                 .not.toBeVisible();
  13909 |             });
  13910 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  13911 |               await expect
  13912 |                 .soft(
  13913 |                   page
  13914 |                     .locator('#endfield-display-all-pages')
  13915 |                     .or(page.locator('#arknights-endfield-nitro-l').locator('xpath=..'))
  13916 |                     .or(page.locator('#arknights-endfield-nitro-3').locator('xpath=..'))
  13917 |                     .first()
  13918 |                 )
  13919 |                 .not.toBeVisible();
  13920 |             });
  13921 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  13922 |               await expect
  13923 |                 .soft(
  13924 |                   page
  13925 |                     .locator('#endfield-display-small-all-pages')
  13926 |                     .or(page.locator('#arknights-endfield-nitro-m').locator('xpath=..'))
  13927 |                 )
  13928 |                 .not.toBeVisible();
  13929 |             });
  13930 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  13931 |               await expect
  13932 |                 .soft(
  13933 |                   page
  13934 |                     .locator('#web-arknights-endfield-display-footer-d')
  13935 |                     .locator('xpath=..')
  13936 |                     .or(page.locator('#arknights-endfield-nitro-anchor').locator('xpath=..'))
  13937 |                 )
> 13938 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
  13939 |             });
  13940 |             break;
  13941 |           case 'Marathon':
  13942 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  13943 |               await expect
  13944 |                 .soft(
  13945 |                   page
  13946 |                     .locator('#marathon-video-all-pages')
  13947 |                     .or(page.locator('#marathon-nitro-video').locator('xpath=..'))
  13948 |                 )
  13949 |                 .not.toBeVisible();
  13950 |             });
  13951 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  13952 |               await expect
  13953 |                 .soft(
  13954 |                   page
  13955 |                     .locator('#marathon-display-all-pages')
  13956 |                     .or(page.locator('#marathon-nitro-l').locator('xpath=..'))
  13957 |                     .or(page.locator('#marathon-nitro-3').locator('xpath=..'))
  13958 |                     .first()
  13959 |                 )
  13960 |                 .not.toBeVisible();
  13961 |             });
  13962 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  13963 |               await expect
  13964 |                 .soft(
  13965 |                   page
  13966 |                     .locator('#marathon-display-small-all-pages')
  13967 |                     .or(page.locator('#marathon-nitro-m').locator('xpath=..'))
  13968 |                 )
  13969 |                 .not.toBeVisible();
  13970 |             });
  13971 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  13972 |               await expect
  13973 |                 .soft(
  13974 |                   page
  13975 |                     .locator('#web-marathon-display-footer-d')
  13976 |                     .locator('xpath=..')
  13977 |                     .or(page.locator('#marathon-nitro-anchor').locator('xpath=..'))
  13978 |                 )
  13979 |                 .not.toBeVisible();
  13980 |             });
  13981 |             break;
  13982 |           case 'Overwatch':
  13983 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  13984 |               await expect
  13985 |                 .soft(
  13986 |                   page
  13987 |                     .locator('#overwatch-video-all-pages')
  13988 |                     .or(page.locator('#overwatch-nitro-video').locator('xpath=..'))
  13989 |                 )
  13990 |                 .not.toBeVisible();
  13991 |             });
  13992 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  13993 |               await expect
  13994 |                 .soft(
  13995 |                   page
  13996 |                     .locator('#overwatch-display-all-pages')
  13997 |                     .or(page.locator('#overwatch-nitro-l').locator('xpath=..'))
  13998 |                     .or(page.locator('#overwatch-nitro-3').locator('xpath=..'))
  13999 |                     .first()
  14000 |                 )
  14001 |                 .not.toBeVisible();
  14002 |             });
  14003 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  14004 |               await expect
  14005 |                 .soft(
  14006 |                   page
  14007 |                     .locator('#overwatch-display-small-all-pages')
  14008 |                     .or(page.locator('#overwatch-nitro-m').locator('xpath=..'))
  14009 |                 )
  14010 |                 .not.toBeVisible();
  14011 |             });
  14012 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  14013 |               await expect
  14014 |                 .soft(
  14015 |                   page
  14016 |                     .locator('#web-overwatch-display-footer-d')
  14017 |                     .locator('xpath=..')
  14018 |                     .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
  14019 |                 )
  14020 |                 .not.toBeVisible();
  14021 |             });
  14022 |             break;
  14023 |         }
  14024 |       } finally {
  14025 |         await plusUserContext.close();
  14026 |       }
  14027 |     });
  14028 |   });
  14029 | });
  14030 | //? this test suite WITHOUT .locator('xpath=..')
  14031 | test.describe('Verify ad blocks within the desktop viewport range (>1412px) for different user roles', async () => {
  14032 |   filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  14033 |     test(`Check video block, footer banner, L vertical banner, S vertical banner for unauthorized user - ${game} in desktop at 1680x1050 viewport size`, async ({
  14034 |       page,
  14035 |     }) => {
  14036 |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  14037 |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  14038 |           waitUntil: 'domcontentloaded',
```