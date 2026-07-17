# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for ad free user - Riftbound in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:9246:5

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
          - generic [ref=e72] [cursor=pointer]:
            - button "plus Rewards" [ref=e73]:
              - img "plus" [ref=e75]
              - generic [ref=e76]: Rewards
            - generic [ref=e78]: New
          - link "DOWNLOAD APP" [ref=e79] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-riftbound&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e81]:
              - img [ref=e82]
              - text: DOWNLOAD APP
          - link "News" [ref=e84] [cursor=pointer]:
            - /url: /news
            - generic [ref=e85]: News
        - generic [ref=e87]:
          - button "Sign In" [ref=e89] [cursor=pointer]
          - button [ref=e91] [cursor=pointer]:
            - img [ref=e93]
          - button "Theme" [ref=e95] [cursor=pointer]:
            - img "Theme" [ref=e97]
      - generic [ref=e99]:
        - link "Home" [ref=e102] [cursor=pointer]:
          - /url: /riftbound
          - img "Home" [ref=e104]
        - link "Profile" [ref=e107] [cursor=pointer]:
          - /url: /riftbound/profile
          - img "Profile" [ref=e109]
        - link "Decks" [ref=e112] [cursor=pointer]:
          - /url: /riftbound/decks
          - img "Decks" [ref=e114]
        - link "Tournaments" [ref=e117] [cursor=pointer]:
          - /url: /riftbound/tournaments
          - img "Tournaments" [ref=e119]
        - link "Tier List" [ref=e122] [cursor=pointer]:
          - /url: /riftbound/tier-list
          - img "Tier List" [ref=e124]
        - link "Guides" [ref=e127] [cursor=pointer]:
          - /url: /riftbound/guides
          - img "Guides" [ref=e129]
        - link "Gallery" [ref=e132] [cursor=pointer]:
          - /url: /riftbound/gallery
          - img "Gallery" [ref=e134]
      - generic [ref=e136]:
        - main [ref=e137]:
          - generic [ref=e139]:
            - generic [ref=e140]:
              - button "Riftbound Decks, Guides, Tier List, & More Find the best resources for Riftbound with Mobalytics, including tournament winning decks, in-depth guides, an updated meta tier list, and much more." [ref=e143]:
                - generic [ref=e148]:
                  - generic [ref=e149]:
                    - img [ref=e151]
                    - heading "Riftbound Decks, Guides, Tier List, & More" [level=1] [ref=e152]
                  - paragraph [ref=e160]: Find the best resources for Riftbound with Mobalytics, including tournament winning decks, in-depth guides, an updated meta tier list, and much more.
              - generic [ref=e162]:
                - generic [ref=e164]:
                  - heading "Trending Decks" [level=2] [ref=e168]
                  - generic [ref=e171]:
                    - generic [ref=e176] [cursor=pointer]:
                      - link [ref=e177]:
                        - /url: /riftbound/decks/irelia-blade-dancer-hartford-regional-qualifier-best-of-guubums
                      - generic [ref=e179]:
                        - generic [ref=e180]: "Irelia, Blade Dancer: Hartford Regional Qualifier Best-Of (guubums)"
                        - generic [ref=e181]:
                          - text: By
                          - link "Mobalytics" [ref=e182]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e183]: Jun 29, 2026
                      - generic [ref=e184]:
                        - generic [ref=e185]:
                          - img "presentation" [ref=e186]
                          - text: Irelia, Blade Dancer
                        - generic [ref=e187]: Regional Qualifier
                        - generic [ref=e188]: NA
                        - generic [ref=e189]: "+1"
                    - generic [ref=e194] [cursor=pointer]:
                      - link [ref=e195]:
                        - /url: /riftbound/decks/azir-emperor-of-the-sands-hartford-regional-qualifier-best-of-hxn-strog
                      - generic [ref=e197]:
                        - generic [ref=e198]: "Azir, Emperor of the Sands: Hartford Regional Qualifier Best-Of (HXN Strog)"
                        - generic [ref=e199]:
                          - text: By
                          - link "Mobalytics" [ref=e200]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e201]: Jun 29, 2026
                      - generic [ref=e202]:
                        - generic [ref=e203]:
                          - img "presentation" [ref=e204]
                          - text: Azir, Emperor of the Sands
                        - generic [ref=e205]: Regional Qualifier
                        - generic [ref=e206]: NA
                        - generic [ref=e207]: "+1"
                    - generic [ref=e212] [cursor=pointer]:
                      - link [ref=e213]:
                        - /url: /riftbound/decks/reksai-void-burrower-hartford-regional-qualifier-best-of-zult
                      - generic [ref=e215]:
                        - generic [ref=e216]: "Rek'Sai, Void Burrower: Hartford Regional Qualifier Best-Of (Zult)"
                        - generic [ref=e217]:
                          - text: By
                          - link "Mobalytics" [ref=e218]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e219]: Jun 29, 2026
                      - generic [ref=e220]:
                        - generic [ref=e221]:
                          - img "presentation" [ref=e222]
                          - text: Rek'Sai, Void Burrower
                        - generic [ref=e223]: Regional Qualifier
                        - generic [ref=e224]: NA
                        - generic [ref=e225]: "+1"
                    - generic [ref=e230] [cursor=pointer]:
                      - link [ref=e231]:
                        - /url: /riftbound/decks/miss-fortune-bounty-hunter-hartford-regional-qualifier-best-of-doctor-snuffles
                      - generic [ref=e233]:
                        - generic [ref=e234]: "Miss Fortune, Bounty Hunter: Hartford Regional Qualifier Best-Of (Doctor Snuffles)"
                        - generic [ref=e235]:
                          - text: By
                          - link "Mobalytics" [ref=e236]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e237]: Jun 29, 2026
                      - generic [ref=e238]:
                        - generic [ref=e239]:
                          - img "presentation" [ref=e240]
                          - text: Miss Fortune, Bounty Hunter
                        - generic [ref=e241]: Regional Qualifier
                        - generic [ref=e242]: NA
                        - generic [ref=e243]: "+1"
                - generic [ref=e245]:
                  - heading "Latest Tournaments" [level=2] [ref=e249]
                  - generic [ref=e252]:
                    - generic [ref=e257] [cursor=pointer]:
                      - link [ref=e258]:
                        - /url: /riftbound/tournaments/hartford-regional-qualifier
                      - generic [ref=e260]:
                        - generic [ref=e261]: Hartford Regional Qualifier
                        - generic [ref=e262]:
                          - text: By
                          - link "Mobalytics" [ref=e263]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e264]: Jun 29, 2026
                      - generic [ref=e265]:
                        - generic [ref=e266]: NA
                        - generic [ref=e267]: Regional Qualifier
                        - generic [ref=e268]: Unleashed
                    - generic [ref=e273] [cursor=pointer]:
                      - link [ref=e274]:
                        - /url: /riftbound/tournaments/s3-regional-open-changsha
                      - generic [ref=e276]:
                        - generic [ref=e277]: "S3 Regional Open: Changsha"
                        - generic [ref=e278]:
                          - text: By
                          - link "Mobalytics" [ref=e279]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e280]: Jun 29, 2026
                      - generic [ref=e281]:
                        - generic [ref=e282]: CN
                        - generic [ref=e283]: Regional Open
                        - generic [ref=e284]: Unleashed
                    - generic [ref=e289] [cursor=pointer]:
                      - link [ref=e290]:
                        - /url: /riftbound/tournaments/utrecht-regional-qualifier
                      - generic [ref=e292]:
                        - generic [ref=e293]: Utrecht Regional Qualifier
                        - generic [ref=e294]:
                          - text: By
                          - link "Mobalytics" [ref=e295]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e296]: Jun 18, 2026
                      - generic [ref=e297]:
                        - generic [ref=e298]: EU
                        - generic [ref=e299]: Regional Qualifier
                        - generic [ref=e300]: Unleashed
                    - generic [ref=e305] [cursor=pointer]:
                      - link [ref=e306]:
                        - /url: /riftbound/tournaments/s3-regional-open-tianjin
                      - generic [ref=e308]:
                        - generic [ref=e309]: "S3 Regional Open: Tianjin"
                        - generic [ref=e310]:
                          - text: By
                          - link "Mobalytics" [ref=e311]:
                            - /url: /riftbound/profile/mobalytics
                          - text: ∙
                          - generic [ref=e312]: Jun 10, 2026
                      - generic [ref=e313]:
                        - generic [ref=e314]: CN
                        - generic [ref=e315]: Regional Open
                        - generic [ref=e316]: Unleashed
              - link "Mobalytics Riftbound Tier List Check out our latest Riftbound Tier List Update Tier List" [ref=e320] [cursor=pointer]:
                - /url: /riftbound/tier-list
                - generic [ref=e323]:
                  - generic [ref=e324]:
                    - paragraph [ref=e325]: Mobalytics Riftbound Tier List
                    - paragraph [ref=e326]: Check out our latest Riftbound Tier List Update
                  - button "Tier List" [ref=e328]: Tier List
            - status [ref=e330]
        - complementary
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e337]:
    - banner [ref=e338]:
      - generic [ref=e339] [cursor=pointer]:
        - generic [ref=e340]: Advertisement
        - generic [ref=e341]: Remove Ads
    - generic [ref=e344] [cursor=pointer]:
      - generic [ref=e345]: Remove all ads
      - generic [ref=e346]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e347]
```

# Test source

```ts
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
  9596 |                 .not.toBeVisible();
  9597 |             });
  9598 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9599 |               await expect
  9600 |                 .soft(
  9601 |                   page
  9602 |                     .locator('#web-elden-ring-nightreign-display-footer-d')
  9603 |                     .locator('xpath=..')
  9604 |                     .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
  9605 |                 )
  9606 |                 .not.toBeVisible();
  9607 |             });
  9608 |             break;
  9609 |           case 'Riftbound':
  9610 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9611 |               await expect
  9612 |                 .soft(
  9613 |                   page
  9614 |                     .locator('#riftbound-video-all-pages')
  9615 |                     .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  9616 |                 )
  9617 |                 .not.toBeVisible();
  9618 |             });
  9619 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9620 |               await expect
  9621 |                 .soft(
  9622 |                   page
  9623 |                     .locator('#riftbound-display-all-pages')
  9624 |                     .or(page.locator('#riftbound-nitro-l'))
  9625 |                     .or(page.locator('#riftbound-nitro-3'))
  9626 |                     .first()
  9627 |                 )
  9628 |                 .not.toBeVisible();
  9629 |             });
  9630 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9631 |               await expect
  9632 |                 .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  9633 |                 .not.toBeVisible();
  9634 |             });
  9635 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9636 |               await expect
  9637 |                 .soft(
  9638 |                   page
  9639 |                     .locator('#web-riftbound-display-footer-d')
  9640 |                     .locator('xpath=..')
  9641 |                     .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
  9642 |                 )
> 9643 |                 .not.toBeVisible();
       |                      ^ Error: expect(locator).not.toBeVisible() failed
  9644 |             });
  9645 |             break;
  9646 |           case '2XKO':
  9647 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9648 |               await expect
  9649 |                 .soft(
  9650 |                   page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..'))
  9651 |                 )
  9652 |                 .not.toBeVisible();
  9653 |             });
  9654 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9655 |               await expect
  9656 |                 .soft(
  9657 |                   page
  9658 |                     .locator('#xko-display-all-pages')
  9659 |                     .or(page.locator('#\\32 xko-nitro-l'))
  9660 |                     .or(page.locator('#\\32 xko-nitro-3'))
  9661 |                     .first()
  9662 |                 )
  9663 |                 .not.toBeVisible();
  9664 |             });
  9665 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9666 |               await expect
  9667 |                 .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  9668 |                 .not.toBeVisible();
  9669 |             });
  9670 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9671 |               await expect
  9672 |                 .soft(
  9673 |                   page
  9674 |                     .locator('#web-2xko-display-footer-d')
  9675 |                     .locator('xpath=..')
  9676 |                     .or(page.locator('#\\32 xko-nitro-anchor').locator('xpath=..'))
  9677 |                 )
  9678 |                 .not.toBeVisible();
  9679 |             });
  9680 |             break;
  9681 |           case 'Marvel Rivals':
  9682 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9683 |               await expect
  9684 |                 .soft(
  9685 |                   page
  9686 |                     .locator('#marvel-rivals-video-all-pages')
  9687 |                     .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  9688 |                 )
  9689 |                 .not.toBeVisible();
  9690 |             });
  9691 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9692 |               await expect
  9693 |                 .soft(
  9694 |                   page
  9695 |                     .locator('#marvel-rivals-display-all-pages')
  9696 |                     .or(page.locator('#marvel-rivals-nitro-l'))
  9697 |                     .or(page.locator('#marvel-rivals-nitro-3'))
  9698 |                     .first()
  9699 |                 )
  9700 |                 .not.toBeVisible();
  9701 |             });
  9702 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9703 |               await expect
  9704 |                 .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  9705 |                 .not.toBeVisible();
  9706 |             });
  9707 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9708 |               await expect
  9709 |                 .soft(
  9710 |                   page
  9711 |                     .locator('#web-marvel-rivals-display-footer-d')
  9712 |                     .locator('xpath=..')
  9713 |                     .or(page.locator('#marvel-rivals-nitro-anchor').locator('xpath=..'))
  9714 |                 )
  9715 |                 .not.toBeVisible();
  9716 |             });
  9717 |             break;
  9718 |           case 'Deadlock':
  9719 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9720 |               await expect
  9721 |                 .soft(
  9722 |                   page
  9723 |                     .locator('#deadlock-video-all-pages')
  9724 |                     .or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
  9725 |                 )
  9726 |                 .not.toBeVisible();
  9727 |             });
  9728 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9729 |               await expect
  9730 |                 .soft(
  9731 |                   page
  9732 |                     .locator('#deadlock-display-all-pages')
  9733 |                     .or(page.locator('#deadlock-nitro-l'))
  9734 |                     .or(page.locator('#deadlock-nitro-3'))
  9735 |                     .first()
  9736 |                 )
  9737 |                 .not.toBeVisible();
  9738 |             });
  9739 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9740 |               await expect
  9741 |                 .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  9742 |                 .not.toBeVisible();
  9743 |             });
```