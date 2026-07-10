# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1233-1411px) for different user roles >> Check video block, footer banner, L vertical banner for plus user - Borderlands 4 in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement.test.js:13204:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-borderlands-4-display-footer-d').locator('..').or(locator('#borderlands-4-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-borderlands-4-display-footer-d').locator('..').or(locator('#borderlands-4-nitro-anchor').locator('..'))
    28 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /borderlands-4
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
          - link "Overwatch Overwatch" [ref=e65] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e67]:
              - img "Overwatch" [ref=e68]
              - generic [ref=e69]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e71] [cursor=pointer]:
            - /url: https://mobalytics.gg/borderlands-4
            - generic [ref=e73]:
              - img "Borderlands 4" [ref=e74]
              - generic [ref=e75]: Borderlands 4
          - button [ref=e76] [cursor=pointer]:
            - img [ref=e77]
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
      - generic [ref=e78]:
        - generic [ref=e79]:
          - link "DOWNLOAD APP" [ref=e80] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-borderlands-4&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e82]:
              - img [ref=e83]
              - text: DOWNLOAD APP
          - link "News" [ref=e85] [cursor=pointer]:
            - /url: /news
            - generic [ref=e86]: News
        - generic [ref=e88]:
          - button "Sign In" [ref=e90] [cursor=pointer]
          - button [ref=e92] [cursor=pointer]:
            - img [ref=e94]
          - button "Theme" [ref=e96] [cursor=pointer]:
            - img "Theme" [ref=e98]
      - generic [ref=e100]:
        - link "Home" [ref=e103] [cursor=pointer]:
          - /url: /borderlands-4
          - img "Home" [ref=e105]
        - link "Profile" [ref=e108] [cursor=pointer]:
          - /url: /borderlands-4/profile
          - img "Profile" [ref=e110]
        - link "Build Planner" [ref=e113] [cursor=pointer]:
          - /url: /borderlands-4/planner/builds
          - img "Build Planner" [ref=e115]
        - link "Legendaries" [ref=e118] [cursor=pointer]:
          - /url: /borderlands-4/guides/legendary-weapons-and-gear
          - img "Legendaries" [ref=e120]
        - link "Builds" [ref=e123] [cursor=pointer]:
          - /url: /borderlands-4/builds
          - img "Builds" [ref=e125]
        - link "Vault Hunters" [ref=e128] [cursor=pointer]:
          - /url: /borderlands-4/vault-hunters
          - img "Vault Hunters" [ref=e130]
        - link "Guides" [ref=e133] [cursor=pointer]:
          - /url: /borderlands-4/guides
          - img "Guides" [ref=e135]
        - link "SHiFT Codes" [ref=e138] [cursor=pointer]:
          - /url: /borderlands-4/shift-codes-borderlands-4
          - img "SHiFT Codes" [ref=e140]
        - link "Wiki" [ref=e143] [cursor=pointer]:
          - /url: /borderlands-4/wiki
          - img "Wiki" [ref=e145]
        - link "Creators" [ref=e148] [cursor=pointer]:
          - /url: /borderlands-4/creators
          - img "Creators" [ref=e150]
      - generic [ref=e152]:
        - main [ref=e153]:
          - generic [ref=e155]:
            - generic [ref=e156]:
              - 'button "Borderlands 4 Builds, Guides & More Mobalytics is your #1 source for trusted Borderlands 4 builds, guides and the latest meta rankings." [ref=e159]':
                - generic [ref=e164]:
                  - generic [ref=e165]:
                    - img [ref=e167]
                    - heading "Borderlands 4 Builds, Guides & More" [level=1] [ref=e168]
                  - paragraph [ref=e176]: "Mobalytics is your #1 source for trusted Borderlands 4 builds, guides and the latest meta rankings."
              - generic [ref=e178]:
                - link "Builds Discover the best end game builds for all Vault Hunters See Builds" [ref=e181] [cursor=pointer]:
                  - /url: /borderlands-4/builds
                  - generic [ref=e184]:
                    - generic [ref=e185]:
                      - paragraph [ref=e186]: Builds
                      - paragraph [ref=e187]: Discover the best end game builds for all Vault Hunters
                    - button "See Builds" [ref=e189]: See Builds
                - link "Build Planner Theorycraft your own builds and share them with other Hunters. Create Builds" [ref=e193] [cursor=pointer]:
                  - /url: /borderlands-4/planner/builds
                  - generic [ref=e196]:
                    - generic [ref=e197]:
                      - paragraph [ref=e198]: Build Planner
                      - paragraph [ref=e199]: Theorycraft your own builds and share them with other Hunters.
                    - button "Create Builds" [ref=e201]: Create Builds
                - link "Leveling Builds The Best builds to start your leveling journey on Kairos! See Builds" [ref=e205] [cursor=pointer]:
                  - /url: /borderlands-4/leveling-builds
                  - generic [ref=e208]:
                    - generic [ref=e209]:
                      - paragraph [ref=e210]: Leveling Builds
                      - paragraph [ref=e211]: The Best builds to start your leveling journey on Kairos!
                    - button "See Builds" [ref=e213]: See Builds
              - generic [ref=e216]:
                - generic [ref=e218]:
                  - heading "Latest Builds" [level=2] [ref=e222]
                  - generic [ref=e224]:
                    - generic [ref=e227] [cursor=pointer]:
                      - link [ref=e228]:
                        - /url: /borderlands-4/builds/no-reload-gun-c4sh
                      - generic [ref=e229]:
                        - generic [ref=e230]:
                          - generic [ref=e231]: CR4SH | No-Reload Gun/HOrd C4SH (LVL 60 TUVH7)
                          - generic [ref=e232]:
                            - text: By
                            - link "Ratore" [ref=e233]:
                              - /url: /borderlands-4/profile/ratore
                            - text: ∙
                            - generic [ref=e234]: Updated on
                            - generic [ref=e235]: Jul 8, 2026
                        - generic [ref=e237]:
                          - generic [ref=e239]:
                            - img "Cleromancy" [ref=e240]
                            - img [ref=e241]
                          - generic [ref=e251]:
                            - img "Dirty Dozen" [ref=e252]
                            - img [ref=e253]
                      - generic [ref=e262]:
                        - generic [ref=e264]:
                          - button "75 Favorites" [ref=e265]:
                            - img [ref=e266]
                            - text: 75 Favorites
                          - button "Share" [ref=e267]:
                            - img [ref=e268]
                            - text: Share
                        - generic [ref=e269]:
                          - generic [ref=e270]:
                            - img "presentation" [ref=e271]
                            - text: C4SH
                          - generic [ref=e272]:
                            - img "presentation" [ref=e273]
                            - text: Cleromancy
                          - generic [ref=e274]: End Game
                          - generic [ref=e275]: Verified
                          - generic [ref=e276]: Trending
                          - generic [ref=e277]: "+1"
                    - generic [ref=e280] [cursor=pointer]:
                      - link [ref=e281]:
                        - /url: /borderlands-4/builds/standard-gun-harlowe
                      - generic [ref=e282]:
                        - generic [ref=e283]:
                          - generic [ref=e284]: LVL 60 TUVH7 - Use ANY GUN - TRAUNTastic Harlowe 3.0
                          - generic [ref=e285]:
                            - text: By
                            - link "AncientRune" [ref=e286]:
                              - /url: /borderlands-4/profile/ancientrune
                            - text: ∙
                            - generic [ref=e287]: Updated on
                            - generic [ref=e288]: Jul 5, 2026
                        - generic [ref=e290]:
                          - generic [ref=e292]:
                            - img "Flux Generator" [ref=e293]
                            - img [ref=e294]
                          - generic [ref=e302]:
                            - generic [ref=e304]:
                              - img "Nuclear Winter" [ref=e305]
                              - img [ref=e306]
                            - generic [ref=e316]:
                              - img "Group Study" [ref=e317]
                              - img [ref=e318]
                      - generic [ref=e326]:
                        - generic [ref=e328]:
                          - button "142 Favorites" [ref=e329]:
                            - img [ref=e330]
                            - text: 142 Favorites
                          - button "Share" [ref=e331]:
                            - img [ref=e332]
                            - text: Share
                        - generic [ref=e333]:
                          - generic [ref=e334]:
                            - img "presentation" [ref=e335]
                            - text: Harlowe
                          - generic [ref=e336]:
                            - img "presentation" [ref=e337]
                            - text: Flux Generator
                          - generic [ref=e338]: End Game
                          - generic [ref=e339]: Verified
                          - generic [ref=e340]: Trending
                          - generic [ref=e341]: "+1"
                    - generic [ref=e344] [cursor=pointer]:
                      - link [ref=e345]:
                        - /url: /borderlands-4/builds/gun-gal-bleed-vex-ratore
                      - generic [ref=e346]:
                        - generic [ref=e347]:
                          - generic [ref=e348]: GUN GAL | Takedown Builds Inside! (Level 60 TUVH7)
                          - generic [ref=e349]:
                            - text: By
                            - link "Ratore" [ref=e350]:
                              - /url: /borderlands-4/profile/ratore
                            - text: ∙
                            - generic [ref=e351]: Updated on
                            - generic [ref=e352]: Jul 3, 2026
                        - generic [ref=e354]:
                          - generic [ref=e356]:
                            - img "Incarnate" [ref=e357]
                            - img [ref=e358]
                          - generic [ref=e366]:
                            - generic [ref=e368]:
                              - img "Witchy Trigger Finger" [ref=e369]
                              - img [ref=e370]
                            - generic [ref=e380]:
                              - img "Desecration" [ref=e381]
                              - img [ref=e382]
                      - generic [ref=e390]:
                        - generic [ref=e392]:
                          - button "173 Favorites" [ref=e393]:
                            - img [ref=e394]
                            - text: 173 Favorites
                          - button "Share" [ref=e395]:
                            - img [ref=e396]
                            - text: Share
                        - generic [ref=e397]:
                          - generic [ref=e398]:
                            - img "presentation" [ref=e399]
                            - text: Vex
                          - generic [ref=e400]:
                            - img "presentation" [ref=e401]
                            - text: Incarnate
                          - generic [ref=e402]: End Game
                          - generic [ref=e403]: Verified
                          - generic [ref=e404]: Trending
                          - generic [ref=e405]: "+1"
                    - generic [ref=e408] [cursor=pointer]:
                      - link [ref=e409]:
                        - /url: /borderlands-4/builds/heavy-ordnance-ricochet-amon-ancientrune
                      - generic [ref=e410]:
                        - generic [ref=e411]:
                          - generic [ref=e412]: TAKEDOWN READY HORBA 6.0 - Heavy Ordnance Amon - LVL 60 TUVH7
                          - generic [ref=e413]:
                            - text: By
                            - link "AncientRune" [ref=e414]:
                              - /url: /borderlands-4/profile/ancientrune
                            - text: ∙
                            - generic [ref=e415]: Updated on
                            - generic [ref=e416]: Jul 1, 2026
                        - generic [ref=e420]:
                          - img "Crucible" [ref=e421]
                          - img [ref=e422]
                      - generic [ref=e430]:
                        - generic [ref=e432]:
                          - button "86 Favorites" [ref=e433]:
                            - img [ref=e434]
                            - text: 86 Favorites
                          - button "Share" [ref=e435]:
                            - img [ref=e436]
                            - text: Share
                        - generic [ref=e437]:
                          - generic [ref=e438]:
                            - img "presentation" [ref=e439]
                            - text: Amon
                          - generic [ref=e440]:
                            - img "presentation" [ref=e441]
                            - text: Scourge
                          - generic [ref=e442]: End Game
                          - generic [ref=e443]: Verified
                          - generic [ref=e444]: Trending
                          - generic [ref=e445]: "+1"
                    - generic [ref=e448] [cursor=pointer]:
                      - link [ref=e449]:
                        - /url: /borderlands-4/builds/overdrive-soltado-tediore-primo-rafa-joeforlong
                      - generic [ref=e450]:
                        - generic [ref=e451]:
                          - generic [ref=e452]: Tediore Primo Rafa 2.0 | Destroys UVH7 | BEST All Purpose Tediore Build
                          - generic [ref=e453]:
                            - text: By
                            - link "JoeForLong" [ref=e454]:
                              - /url: /borderlands-4/profile/joeforlong
                            - text: ∙
                            - generic [ref=e455]: Updated on
                            - generic [ref=e456]: Jul 2, 2026
                        - generic [ref=e458]:
                          - generic [ref=e460]:
                            - img "APOPHIS Lance" [ref=e461]
                            - img [ref=e462]
                          - generic [ref=e470]:
                            - generic [ref=e472]:
                              - img "Battery Subscription Service" [ref=e473]
                              - img [ref=e474]
                            - generic [ref=e484]:
                              - 'img "PROJECT: Gorgon" [ref=e485]'
                              - img [ref=e486]
                      - generic [ref=e494]:
                        - generic [ref=e496]:
                          - button "67 Favorites" [ref=e497]:
                            - img [ref=e498]
                            - text: 67 Favorites
                          - button "Share" [ref=e499]:
                            - img [ref=e500]
                            - text: Share
                        - generic [ref=e501]:
                          - generic [ref=e502]:
                            - img "presentation" [ref=e503]
                            - text: Rafa
                          - generic [ref=e504]:
                            - img "presentation" [ref=e505]
                            - text: APOPHIS Lance
                          - generic [ref=e506]: End Game
                          - generic [ref=e507]: Verified
                          - generic [ref=e508]: Trending
                          - generic [ref=e509]: "+1"
                    - link "View all" [ref=e510] [cursor=pointer]:
                      - /url: /borderlands-4/builds
                      - generic [ref=e511]: View all
                - link "Have a 2nd monitor? Download our Free App Get easy access to all your Builds and more! Download App" [ref=e513] [cursor=pointer]:
                  - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=homepage-bl-4&utm_medium=banner&utm_source=web
                  - generic [ref=e516]:
                    - generic [ref=e517]:
                      - paragraph [ref=e518]: Have a 2nd monitor? Download our Free App
                      - paragraph [ref=e519]: Get easy access to all your Builds and more!
                    - button "Download App" [ref=e521]: Download App
            - status [ref=e523]
        - complementary [ref=e528]:
          - generic [ref=e531]:
            - generic [ref=e534] [cursor=pointer]: Remove Ads
            - generic [ref=e537] [cursor=pointer]:
              - generic [ref=e538]: Remove all ads
              - generic [ref=e539]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
              - button "Remove ads" [ref=e540]:
                - generic [ref=e541]: Remove ads
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e544]:
    - banner [ref=e545]:
      - generic [ref=e546] [cursor=pointer]:
        - generic [ref=e547]: Advertisement
        - generic [ref=e548]: Remove Ads
    - generic [ref=e551] [cursor=pointer]:
      - generic [ref=e552]: Remove all ads
      - generic [ref=e553]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e554]:
        - generic [ref=e555]: Remove ads
  - button "Do Not Sell or Share My Personal Information" [ref=e559] [cursor=pointer]:
    - paragraph [ref=e561]: Do Not Sell or Share My Personal Information
```

# Test source

```ts
  13758 |             });
  13759 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  13760 |               await expect
  13761 |                 .soft(
  13762 |                   page
  13763 |                     .locator('#diablo-4-display-small-all-pages')
  13764 |                     .or(page.locator('#diablo-4-nitro-m').locator('xpath=..'))
  13765 |                 )
  13766 |                 .not.toBeVisible();
  13767 |             });
  13768 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  13769 |               await expect
  13770 |                 .soft(
  13771 |                   page
  13772 |                     .locator('#web-diablo-4-display-footer-d')
  13773 |                     .locator('xpath=..')
  13774 |                     .or(page.locator('#diablo-4-nitro-anchor').locator('xpath=..'))
  13775 |                 )
  13776 |                 .not.toBeVisible();
  13777 |             });
  13778 |             break;
  13779 |           case 'Destiny 2':
  13780 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  13781 |               await expect
  13782 |                 .soft(
  13783 |                   page
  13784 |                     .locator('#destiny-2-video-all-pages')
  13785 |                     .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
  13786 |                 )
  13787 |                 .not.toBeVisible();
  13788 |             });
  13789 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  13790 |               await expect
  13791 |                 .soft(
  13792 |                   page
  13793 |                     .locator('#destiny-2-display-all-pages')
  13794 |                     .or(page.locator('#destiny-2-nitro-l').locator('xpath=..'))
  13795 |                     .or(page.locator('#destiny-2-nitro-3').locator('xpath=..'))
  13796 |                     .first()
  13797 |                 )
  13798 |                 .not.toBeVisible();
  13799 |             });
  13800 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  13801 |               await expect
  13802 |                 .soft(
  13803 |                   page
  13804 |                     .locator('#destiny-2-display-small-all-pages')
  13805 |                     .or(page.locator('#destiny-2-nitro-m').locator('xpath=..'))
  13806 |                 )
  13807 |                 .not.toBeVisible();
  13808 |             });
  13809 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  13810 |               await expect
  13811 |                 .soft(
  13812 |                   page
  13813 |                     .locator('#web-destiny-2-display-footer-d')
  13814 |                     .locator('xpath=..')
  13815 |                     .or(page.locator('#destiny-2-nitro-anchor').locator('xpath=..'))
  13816 |                 )
  13817 |                 .not.toBeVisible();
  13818 |             });
  13819 |             break;
  13820 |           case 'Borderlands 4':
  13821 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  13822 |               await expect
  13823 |                 .soft(
  13824 |                   page
  13825 |                     .locator('#bl4-video-all-pages')
  13826 |                     .or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
  13827 |                 )
  13828 |                 .not.toBeVisible();
  13829 |             });
  13830 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  13831 |               await expect
  13832 |                 .soft(
  13833 |                   page
  13834 |                     .locator('#bl4-display-all-pages')
  13835 |                     .or(page.locator('#borderlands-4-nitro-l').locator('xpath=..'))
  13836 |                     .or(page.locator('#borderlands-4-nitro-3').locator('xpath=..'))
  13837 |                     .first()
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
> 13858 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
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
  13938 |                 .not.toBeVisible();
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
```