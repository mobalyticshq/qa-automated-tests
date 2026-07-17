# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1233-1411px) for different user roles >> Check video block, footer banner, L vertical banner for ad free user - Riftbound in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement.test.js:12377:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-riftbound-display-footer-d').locator('..').or(locator('#riftbound-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-riftbound-display-footer-d').locator('..').or(locator('#riftbound-nitro-anchor').locator('..'))
    27 × locator resolved to <div class="m-clr6n">…</div>
       - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /riftbound
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
          - generic [ref=e84] [cursor=pointer]:
            - button "plus Rewards" [ref=e85]:
              - img "plus" [ref=e87]
              - generic [ref=e88]: Rewards
            - generic [ref=e90]: New
          - link "DOWNLOAD APP" [ref=e91] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-riftbound&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e93]:
              - img [ref=e94]
              - text: DOWNLOAD APP
          - link "News" [ref=e96] [cursor=pointer]:
            - /url: /news
            - generic [ref=e97]: News
        - generic [ref=e99]:
          - button "Sign In" [ref=e101] [cursor=pointer]
          - button [ref=e103] [cursor=pointer]:
            - img [ref=e105]
          - button "Theme" [ref=e107] [cursor=pointer]:
            - img "Theme" [ref=e109]
      - generic [ref=e111]:
        - link "Home" [ref=e114] [cursor=pointer]:
          - /url: /riftbound
          - img "Home" [ref=e116]
        - link "Profile" [ref=e119] [cursor=pointer]:
          - /url: /riftbound/profile
          - img "Profile" [ref=e121]
        - link "Decks" [ref=e124] [cursor=pointer]:
          - /url: /riftbound/decks
          - img "Decks" [ref=e126]
        - link "Tournaments" [ref=e129] [cursor=pointer]:
          - /url: /riftbound/tournaments
          - img "Tournaments" [ref=e131]
        - link "Tier List" [ref=e134] [cursor=pointer]:
          - /url: /riftbound/tier-list
          - img "Tier List" [ref=e136]
        - link "Guides" [ref=e139] [cursor=pointer]:
          - /url: /riftbound/guides
          - img "Guides" [ref=e141]
        - link "Gallery" [ref=e144] [cursor=pointer]:
          - /url: /riftbound/gallery
          - img "Gallery" [ref=e146]
      - generic [ref=e148]:
        - main [ref=e149]:
          - generic [ref=e151]:
            - generic [ref=e152]:
              - button "Riftbound Decks, Guides, Tier List, & More Find the best resources for Riftbound with Mobalytics, including tournament winning decks, in-depth guides, an updated meta tier list, and much more." [ref=e155]:
                - generic [ref=e160]:
                  - generic [ref=e161]:
                    - img [ref=e163]
                    - heading "Riftbound Decks, Guides, Tier List, & More" [level=1] [ref=e164]
                  - paragraph [ref=e172]: Find the best resources for Riftbound with Mobalytics, including tournament winning decks, in-depth guides, an updated meta tier list, and much more.
              - generic [ref=e174]:
                - generic [ref=e176]:
                  - heading "Trending Decks" [level=2] [ref=e180]
                  - generic [ref=e183]:
                    - generic [ref=e188] [cursor=pointer]:
                      - link [ref=e189]:
                        - /url: /riftbound/decks/irelia-blade-dancer-hartford-regional-qualifier-best-of-guubums
                      - generic [ref=e191]:
                        - generic [ref=e192]: "Irelia, Blade Dancer: Hartford Regional Qualifier Best-Of (guubums)"
                        - generic [ref=e193]:
                          - text: By
                          - link "Mobalytics" [ref=e194]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e195]: Jun 29, 2026
                      - generic [ref=e196]:
                        - generic [ref=e197]:
                          - img "presentation" [ref=e198]
                          - text: Irelia, Blade Dancer
                        - generic [ref=e199]: Regional Qualifier
                        - generic [ref=e200]: NA
                        - generic [ref=e201]: "+1"
                    - generic [ref=e206] [cursor=pointer]:
                      - link [ref=e207]:
                        - /url: /riftbound/decks/azir-emperor-of-the-sands-hartford-regional-qualifier-best-of-hxn-strog
                      - generic [ref=e209]:
                        - generic [ref=e210]: "Azir, Emperor of the Sands: Hartford Regional Qualifier Best-Of (HXN Strog)"
                        - generic [ref=e211]:
                          - text: By
                          - link "Mobalytics" [ref=e212]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e213]: Jun 29, 2026
                      - generic [ref=e214]:
                        - generic [ref=e215]:
                          - img "presentation" [ref=e216]
                          - text: Azir, Emperor of the Sands
                        - generic [ref=e217]: Regional Qualifier
                        - generic [ref=e218]: NA
                        - generic [ref=e219]: "+1"
                    - generic [ref=e224] [cursor=pointer]:
                      - link [ref=e225]:
                        - /url: /riftbound/decks/reksai-void-burrower-hartford-regional-qualifier-best-of-zult
                      - generic [ref=e227]:
                        - generic [ref=e228]: "Rek'Sai, Void Burrower: Hartford Regional Qualifier Best-Of (Zult)"
                        - generic [ref=e229]:
                          - text: By
                          - link "Mobalytics" [ref=e230]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e231]: Jun 29, 2026
                      - generic [ref=e232]:
                        - generic [ref=e233]:
                          - img "presentation" [ref=e234]
                          - text: Rek'Sai, Void Burrower
                        - generic [ref=e235]: Regional Qualifier
                        - generic [ref=e236]: NA
                        - generic [ref=e237]: "+1"
                    - generic [ref=e242] [cursor=pointer]:
                      - link [ref=e243]:
                        - /url: /riftbound/decks/miss-fortune-bounty-hunter-hartford-regional-qualifier-best-of-doctor-snuffles
                      - generic [ref=e245]:
                        - generic [ref=e246]: "Miss Fortune, Bounty Hunter: Hartford Regional Qualifier Best-Of (Doctor Snuffles)"
                        - generic [ref=e247]:
                          - text: By
                          - link "Mobalytics" [ref=e248]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e249]: Jun 29, 2026
                      - generic [ref=e250]:
                        - generic [ref=e251]:
                          - img "presentation" [ref=e252]
                          - text: Miss Fortune, Bounty Hunter
                        - generic [ref=e253]: Regional Qualifier
                        - generic [ref=e254]: NA
                        - generic [ref=e255]: "+1"
                - generic [ref=e257]:
                  - heading "Latest Tournaments" [level=2] [ref=e261]
                  - generic [ref=e264]:
                    - generic [ref=e269] [cursor=pointer]:
                      - link [ref=e270]:
                        - /url: /riftbound/tournaments/hartford-regional-qualifier
                      - generic [ref=e272]:
                        - generic [ref=e273]: Hartford Regional Qualifier
                        - generic [ref=e274]:
                          - text: By
                          - link "Mobalytics" [ref=e275]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e276]: Jun 29, 2026
                      - generic [ref=e277]:
                        - generic [ref=e278]: NA
                        - generic [ref=e279]: Regional Qualifier
                        - generic [ref=e280]: Unleashed
                    - generic [ref=e285] [cursor=pointer]:
                      - link [ref=e286]:
                        - /url: /riftbound/tournaments/s3-regional-open-changsha
                      - generic [ref=e288]:
                        - generic [ref=e289]: "S3 Regional Open: Changsha"
                        - generic [ref=e290]:
                          - text: By
                          - link "Mobalytics" [ref=e291]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e292]: Jun 29, 2026
                      - generic [ref=e293]:
                        - generic [ref=e294]: CN
                        - generic [ref=e295]: Regional Open
                        - generic [ref=e296]: Unleashed
                    - generic [ref=e301] [cursor=pointer]:
                      - link [ref=e302]:
                        - /url: /riftbound/tournaments/utrecht-regional-qualifier
                      - generic [ref=e304]:
                        - generic [ref=e305]: Utrecht Regional Qualifier
                        - generic [ref=e306]:
                          - text: By
                          - link "Mobalytics" [ref=e307]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e308]: Jun 18, 2026
                      - generic [ref=e309]:
                        - generic [ref=e310]: EU
                        - generic [ref=e311]: Regional Qualifier
                        - generic [ref=e312]: Unleashed
                    - generic [ref=e317] [cursor=pointer]:
                      - link [ref=e318]:
                        - /url: /riftbound/tournaments/s3-regional-open-tianjin
                      - generic [ref=e320]:
                        - generic [ref=e321]: "S3 Regional Open: Tianjin"
                        - generic [ref=e322]:
                          - text: By
                          - link "Mobalytics" [ref=e323]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e324]: Jun 10, 2026
                      - generic [ref=e325]:
                        - generic [ref=e326]: CN
                        - generic [ref=e327]: Regional Open
                        - generic [ref=e328]: Unleashed
              - link "Mobalytics Riftbound Tier List Check out our latest Riftbound Tier List Update Tier List" [ref=e332] [cursor=pointer]:
                - /url: /riftbound/tier-list
                - generic [ref=e335]:
                  - generic [ref=e336]:
                    - paragraph [ref=e337]: Mobalytics Riftbound Tier List
                    - paragraph [ref=e338]: Check out our latest Riftbound Tier List Update
                  - button "Tier List" [ref=e340]: Tier List
            - status [ref=e342]
        - complementary [ref=e347]:
          - generic [ref=e350]:
            - generic [ref=e353] [cursor=pointer]: Remove Ads
            - generic [ref=e356] [cursor=pointer]:
              - generic [ref=e357]: Remove all ads
              - generic [ref=e358]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
              - button "Remove ads" [ref=e359]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e362]:
    - banner [ref=e363]:
      - generic [ref=e364] [cursor=pointer]:
        - generic [ref=e365]: Advertisement
        - generic [ref=e366]: Remove Ads
    - generic [ref=e369] [cursor=pointer]:
      - generic [ref=e370]: Remove all ads
      - generic [ref=e371]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e372]
```

# Test source

```ts
  12689 |                     .or(page.locator('#mhw-nitro-3').locator('xpath=..'))
  12690 |                     .first()
  12691 |                 )
  12692 |                 .not.toBeVisible();
  12693 |             });
  12694 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12695 |               await expect
  12696 |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m').locator('xpath=..')))
  12697 |                 .not.toBeVisible();
  12698 |             });
  12699 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12700 |               await expect
  12701 |                 .soft(
  12702 |                   page
  12703 |                     .locator('#web-mhw-display-footer-d')
  12704 |                     .locator('xpath=..')
  12705 |                     .or(page.locator('#mhw-nitro-anchor').locator('xpath=..'))
  12706 |                 )
  12707 |                 .not.toBeVisible();
  12708 |             });
  12709 |             break;
  12710 |           case 'Nightreign':
  12711 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12712 |               await expect
  12713 |                 .soft(
  12714 |                   page
  12715 |                     .locator('#elden-ring-nightreign-video-all-pages')
  12716 |                     .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
  12717 |                 )
  12718 |                 .not.toBeVisible();
  12719 |             });
  12720 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12721 |               await expect
  12722 |                 .soft(
  12723 |                   page
  12724 |                     .locator('#elden-ring-nightreign-display-all-pages')
  12725 |                     .or(page.locator('#elden-ring-nightreign-nitro-l').locator('xpath=..'))
  12726 |                     .or(page.locator('#elden-ring-nightreign-nitro-3').locator('xpath=..'))
  12727 |                     .first()
  12728 |                 )
  12729 |                 .not.toBeVisible();
  12730 |             });
  12731 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12732 |               await expect
  12733 |                 .soft(
  12734 |                   page
  12735 |                     .locator('#elden-ring-nightreign-display-small-all-pages')
  12736 |                     .or(page.locator('#elden-ring-nightreign-nitro-m').locator('xpath=..'))
  12737 |                 )
  12738 |                 .not.toBeVisible();
  12739 |             });
  12740 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12741 |               await expect
  12742 |                 .soft(
  12743 |                   page
  12744 |                     .locator('#web-elden-ring-nightreign-display-footer-d')
  12745 |                     .locator('xpath=..')
  12746 |                     .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
  12747 |                 )
  12748 |                 .not.toBeVisible();
  12749 |             });
  12750 |             break;
  12751 |           case 'Riftbound':
  12752 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12753 |               await expect
  12754 |                 .soft(
  12755 |                   page
  12756 |                     .locator('#riftbound-video-all-pages')
  12757 |                     .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  12758 |                 )
  12759 |                 .not.toBeVisible();
  12760 |             });
  12761 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12762 |               await expect
  12763 |                 .soft(
  12764 |                   page
  12765 |                     .locator('#riftbound-display-all-pages')
  12766 |                     .or(page.locator('#riftbound-nitro-l').locator('xpath=..'))
  12767 |                     .or(page.locator('#riftbound-nitro-3').locator('xpath=..'))
  12768 |                     .first()
  12769 |                 )
  12770 |                 .not.toBeVisible();
  12771 |             });
  12772 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12773 |               await expect
  12774 |                 .soft(
  12775 |                   page
  12776 |                     .locator('#riftbound-display-small-all-pages')
  12777 |                     .or(page.locator('#riftbound-nitro-m').locator('xpath=..'))
  12778 |                 )
  12779 |                 .not.toBeVisible();
  12780 |             });
  12781 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12782 |               await expect
  12783 |                 .soft(
  12784 |                   page
  12785 |                     .locator('#web-riftbound-display-footer-d')
  12786 |                     .locator('xpath=..')
  12787 |                     .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
  12788 |                 )
> 12789 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
  12790 |             });
  12791 |             break;
  12792 |           case '2XKO':
  12793 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12794 |               await expect
  12795 |                 .soft(
  12796 |                   page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..'))
  12797 |                 )
  12798 |                 .not.toBeVisible();
  12799 |             });
  12800 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12801 |               await expect
  12802 |                 .soft(
  12803 |                   page
  12804 |                     .locator('#xko-display-all-pages')
  12805 |                     .or(page.locator('#\\32 xko-nitro-l').locator('xpath=..'))
  12806 |                     .or(page.locator('#\\32 xko-nitro-3').locator('xpath=..'))
  12807 |                     .first()
  12808 |                 )
  12809 |                 .not.toBeVisible();
  12810 |             });
  12811 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12812 |               await expect
  12813 |                 .soft(
  12814 |                   page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m').locator('xpath=..'))
  12815 |                 )
  12816 |                 .not.toBeVisible();
  12817 |             });
  12818 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12819 |               await expect
  12820 |                 .soft(
  12821 |                   page
  12822 |                     .locator('#web-2xko-display-footer-d')
  12823 |                     .locator('xpath=..')
  12824 |                     .or(page.locator('#\\32 xko-nitro-anchor').locator('xpath=..'))
  12825 |                 )
  12826 |                 .not.toBeVisible();
  12827 |             });
  12828 |             break;
  12829 |           case 'Marvel Rivals':
  12830 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12831 |               await expect
  12832 |                 .soft(
  12833 |                   page
  12834 |                     .locator('#marvel-rivals-video-all-pages')
  12835 |                     .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  12836 |                 )
  12837 |                 .not.toBeVisible();
  12838 |             });
  12839 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12840 |               await expect
  12841 |                 .soft(
  12842 |                   page
  12843 |                     .locator('#marvel-rivals-display-all-pages')
  12844 |                     .or(page.locator('#marvel-rivals-nitro-l').locator('xpath=..'))
  12845 |                     .or(page.locator('#marvel-rivals-nitro-3').locator('xpath=..'))
  12846 |                     .first()
  12847 |                 )
  12848 |                 .not.toBeVisible();
  12849 |             });
  12850 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12851 |               await expect
  12852 |                 .soft(
  12853 |                   page
  12854 |                     .locator('#marvel-rivals-display-small-all-pages')
  12855 |                     .or(page.locator('#marvel-rivals-nitro-m').locator('xpath=..'))
  12856 |                 )
  12857 |                 .not.toBeVisible();
  12858 |             });
  12859 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12860 |               await expect
  12861 |                 .soft(
  12862 |                   page
  12863 |                     .locator('#web-marvel-rivals-display-footer-d')
  12864 |                     .locator('xpath=..')
  12865 |                     .or(page.locator('#marvel-rivals-nitro-anchor').locator('xpath=..'))
  12866 |                 )
  12867 |                 .not.toBeVisible();
  12868 |             });
  12869 |             break;
  12870 |           case 'Deadlock':
  12871 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12872 |               await expect
  12873 |                 .soft(
  12874 |                   page
  12875 |                     .locator('#deadlock-video-all-pages')
  12876 |                     .or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
  12877 |                 )
  12878 |                 .not.toBeVisible();
  12879 |             });
  12880 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12881 |               await expect
  12882 |                 .soft(
  12883 |                   page
  12884 |                     .locator('#deadlock-display-all-pages')
  12885 |                     .or(page.locator('#deadlock-nitro-l').locator('xpath=..'))
  12886 |                     .or(page.locator('#deadlock-nitro-3').locator('xpath=..'))
  12887 |                     .first()
  12888 |                 )
  12889 |                 .not.toBeVisible();
```