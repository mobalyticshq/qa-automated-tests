# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1233-1411px) for different user roles >> Check video block, footer banner, L vertical banner for ad free user - The Bazaar in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement.test.js:12377:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-the-bazaar-display-footer-d').locator('..').or(locator('#the-bazaar-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-the-bazaar-display-footer-d').locator('..').or(locator('#the-bazaar-nitro-anchor').locator('..'))
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
          - /url: /the-bazaar
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
          - link "News" [ref=e92] [cursor=pointer]:
            - /url: /news
            - generic [ref=e93]: News
        - generic [ref=e95]:
          - button "Sign In" [ref=e97] [cursor=pointer]
          - button [ref=e99] [cursor=pointer]:
            - img [ref=e101]
          - button "Theme" [ref=e103] [cursor=pointer]:
            - img "Theme" [ref=e105]
      - generic [ref=e107]:
        - link "Home" [ref=e110] [cursor=pointer]:
          - /url: /the-bazaar
          - img "Home" [ref=e112]
        - link "Profile" [ref=e115] [cursor=pointer]:
          - /url: /the-bazaar/profile
          - img "Profile" [ref=e117]
        - link "Build Planner" [ref=e120] [cursor=pointer]:
          - /url: /the-bazaar/planner/builds
          - img "Build Planner" [ref=e122]
        - link "Builds" [ref=e125] [cursor=pointer]:
          - /url: /the-bazaar/builds
          - img "Builds" [ref=e127]
        - link "Meta Builds" [ref=e130] [cursor=pointer]:
          - /url: /the-bazaar/guides/meta-builds
          - img "Meta Builds" [ref=e132]
        - link "Heroes" [ref=e135] [cursor=pointer]:
          - /url: /the-bazaar/heroes
          - img "Heroes" [ref=e137]
        - link "Items | Skills" [ref=e140] [cursor=pointer]:
          - /url: /the-bazaar/database/items-and-enchantments
          - img "Items | Skills" [ref=e142]
        - link "Guides" [ref=e145] [cursor=pointer]:
          - /url: /the-bazaar/guides
          - img "Guides" [ref=e147]
        - link "PvE Monsters" [ref=e150] [cursor=pointer]:
          - /url: /the-bazaar/guides/pve-encounters-and-drops
          - img "PvE Monsters" [ref=e152]
      - generic [ref=e154]:
        - main [ref=e155]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - 'button "The Bazaar Builds, Guides, and More Mobalytics is your #1 source of The Bazaar builds, guides, and everything else you need to learn and master the game." [ref=e161]':
                - generic [ref=e165]:
                  - generic [ref=e166]:
                    - img [ref=e168]
                    - heading "The Bazaar Builds, Guides, and More" [level=1] [ref=e169]
                  - paragraph [ref=e172]: "Mobalytics is your #1 source of The Bazaar builds, guides, and everything else you need to learn and master the game."
              - link "The Bazaar Meta Builds Tier List A showcase of the strongest and most consistent builds, updated for every season. Explore the Tier List" [ref=e177] [cursor=pointer]:
                - /url: /the-bazaar/guides/meta-builds
                - generic [ref=e179]:
                  - paragraph [ref=e181]: The Bazaar Meta Builds Tier List
                  - paragraph [ref=e182]: A showcase of the strongest and most consistent builds, updated for every season.
                  - button "Explore the Tier List" [ref=e184]: Explore the Tier List
              - generic [ref=e186]:
                - generic [ref=e188]:
                  - heading "Featured Builds" [level=2] [ref=e192]
                  - generic [ref=e195]:
                    - generic [ref=e200] [cursor=pointer]:
                      - link [ref=e201]:
                        - /url: /the-bazaar/builds/calcinator-mak-kripp
                      - generic [ref=e203]:
                        - generic [ref=e204]: Kripp's Calcinator Mak Build
                        - generic [ref=e205]:
                          - text: By
                          - link "Mobalytics" [ref=e206]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e207]: Jul 5, 2026
                      - generic [ref=e208]:
                        - generic [ref=e209]: Kripparrian
                        - generic [ref=e210]: Mak
                    - generic [ref=e215] [cursor=pointer]:
                      - link [ref=e216]:
                        - /url: /the-bazaar/builds/hydraulic-press-dooley-kripp
                      - generic [ref=e218]:
                        - generic [ref=e219]: Kripp's Hydraulic Press Dooley Build
                        - generic [ref=e220]:
                          - text: By
                          - link "Mobalytics" [ref=e221]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e222]: Jul 4, 2026
                      - generic [ref=e223]:
                        - generic [ref=e224]: Kripparrian
                        - generic [ref=e225]: Dooley
                    - generic [ref=e230] [cursor=pointer]:
                      - link [ref=e231]:
                        - /url: /the-bazaar/builds/boulder-vanessa-kripp
                      - generic [ref=e233]:
                        - generic [ref=e234]: Kripp's Boulder Vanessa Build
                        - generic [ref=e235]:
                          - text: By
                          - link "Mobalytics" [ref=e236]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e237]: Jun 30, 2026
                      - generic [ref=e238]:
                        - generic [ref=e239]: Kripparrian
                        - generic [ref=e240]: Vanessa
                    - generic [ref=e245] [cursor=pointer]:
                      - link [ref=e246]:
                        - /url: /the-bazaar/builds/burn-jules-kripp
                      - generic [ref=e248]:
                        - generic [ref=e249]: Kripp's Burn Jules Build
                        - generic [ref=e250]:
                          - text: By
                          - link "Mobalytics" [ref=e251]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e252]: Jun 29, 2026
                      - generic [ref=e253]:
                        - generic [ref=e254]: Kripparrian
                        - generic [ref=e255]: Jules
                - generic [ref=e257]:
                  - heading "Latest Guides and News" [level=2] [ref=e261]
                  - generic [ref=e264]:
                    - generic [ref=e269] [cursor=pointer]:
                      - link [ref=e270]:
                        - /url: /the-bazaar/guides/meta-builds
                      - generic [ref=e272]:
                        - generic [ref=e273]: The Bazaar Meta Builds (Season 16)
                        - generic [ref=e274]:
                          - text: By
                          - link "Mobalytics" [ref=e275]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e276]: Jul 7, 2026
                      - generic [ref=e277]:
                        - generic [ref=e278]: Meta
                        - generic [ref=e279]: Heroes
                    - generic [ref=e284] [cursor=pointer]:
                      - link [ref=e285]:
                        - /url: /the-bazaar/guides/patch-notes
                      - generic [ref=e287]:
                        - generic [ref=e288]: The Bazaar Patch Notes Tracker
                        - generic [ref=e289]:
                          - text: By
                          - link "Mobalytics" [ref=e290]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e291]: Jul 7, 2026
                      - generic [ref=e293]: News
                    - generic [ref=e298] [cursor=pointer]:
                      - link [ref=e299]:
                        - /url: /the-bazaar/guides/pve-encounters-and-drops
                      - generic [ref=e301]:
                        - generic [ref=e302]: The Bazaar PvE Encounters and Drops (Loot, Skills, and Items)
                        - generic [ref=e303]:
                          - text: By
                          - link "Mobalytics" [ref=e304]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e305]: Jul 7, 2026
                      - generic [ref=e307]: Mechanics
                    - generic [ref=e312] [cursor=pointer]:
                      - link [ref=e313]:
                        - /url: /the-bazaar/guides/level-up-rewards
                      - generic [ref=e315]:
                        - generic [ref=e316]: The Bazaar Level-Up Rewards Explained
                        - generic [ref=e317]:
                          - text: By
                          - link "Mobalytics" [ref=e318]:
                            - /url: /the-bazaar/profile/mobalytics
                          - text: ∙
                          - generic [ref=e319]: Jun 2, 2026
                      - generic [ref=e320]:
                        - generic [ref=e321]: Beginner
                        - generic [ref=e322]: Mechanics
              - link "The Bazaar Items, Skills, and Enchantments Discover every Item, Skill, and Enchantment in the game. Explore Items" [ref=e326] [cursor=pointer]:
                - /url: /the-bazaar/database/items-and-enchantments
                - generic [ref=e329]:
                  - generic [ref=e330]:
                    - paragraph [ref=e331]: The Bazaar Items, Skills, and Enchantments
                    - paragraph [ref=e332]: Discover every Item, Skill, and Enchantment in the game.
                  - button "Explore Items" [ref=e334]: Explore Items
            - status [ref=e336]
        - complementary [ref=e341]:
          - generic [ref=e344]:
            - generic [ref=e347] [cursor=pointer]: Remove Ads
            - generic [ref=e350] [cursor=pointer]:
              - generic [ref=e351]: Remove all ads
              - generic [ref=e352]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
              - button "Remove ads" [ref=e353]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e356]:
    - banner [ref=e357]:
      - generic [ref=e358] [cursor=pointer]:
        - generic [ref=e359]: Advertisement
        - generic [ref=e360]: Remove Ads
    - generic [ref=e363] [cursor=pointer]:
      - generic [ref=e364]: Remove all ads
      - generic [ref=e365]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e366]
```

# Test source

```ts
  12574 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12575 |               await expect
  12576 |                 .soft(
  12577 |                   page
  12578 |                     .locator('#poe-display-all-pages')
  12579 |                     .or(page.locator('#poe-nitro-l').locator('xpath=..'))
  12580 |                     .or(page.locator('#poe-nitro-3').locator('xpath=..'))
  12581 |                     .first()
  12582 |                 )
  12583 |                 .not.toBeVisible();
  12584 |             });
  12585 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12586 |               await expect
  12587 |                 .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m').locator('xpath=..')))
  12588 |                 .not.toBeVisible();
  12589 |             });
  12590 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12591 |               await expect
  12592 |                 .soft(
  12593 |                   page
  12594 |                     .locator('#web-poe-display-footer-d')
  12595 |                     .locator('xpath=..')
  12596 |                     .or(page.locator('#poe-nitro-anchor').locator('xpath=..'))
  12597 |                 )
  12598 |                 .not.toBeVisible();
  12599 |             });
  12600 |             break;
  12601 |           case 'PoE 2':
  12602 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12603 |               await expect
  12604 |                 .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
  12605 |                 .not.toBeVisible();
  12606 |             });
  12607 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12608 |               await expect
  12609 |                 .soft(
  12610 |                   page
  12611 |                     .locator('#poe-2-display-all-pages')
  12612 |                     .or(page.locator('#poe-2-nitro-l').locator('xpath=..'))
  12613 |                     .or(page.locator('#poe-2-nitro-3').locator('xpath=..'))
  12614 |                     .first()
  12615 |                 )
  12616 |                 .not.toBeVisible();
  12617 |             });
  12618 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12619 |               await expect
  12620 |                 .soft(
  12621 |                   page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m').locator('xpath=..'))
  12622 |                 )
  12623 |                 .not.toBeVisible();
  12624 |             });
  12625 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12626 |               await expect
  12627 |                 .soft(
  12628 |                   page
  12629 |                     .locator('#web-poe-2-display-footer-d')
  12630 |                     .locator('xpath=..')
  12631 |                     .or(page.locator('#poe-2-nitro-anchor').locator('xpath=..'))
  12632 |                 )
  12633 |                 .not.toBeVisible();
  12634 |             });
  12635 |             break;
  12636 |           case 'The Bazaar':
  12637 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12638 |               await expect
  12639 |                 .soft(
  12640 |                   page
  12641 |                     .locator('#the-bazaar-video-all-pages')
  12642 |                     .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
  12643 |                 )
  12644 |                 .not.toBeVisible();
  12645 |             });
  12646 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12647 |               await expect
  12648 |                 .soft(
  12649 |                   page
  12650 |                     .locator('#the-bazaar-display-all-pages')
  12651 |                     .or(page.locator('#the-bazaar-nitro-l').locator('xpath=..'))
  12652 |                     .or(page.locator('#the-bazaar-nitro-3').locator('xpath=..'))
  12653 |                     .first()
  12654 |                 )
  12655 |                 .not.toBeVisible();
  12656 |             });
  12657 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12658 |               await expect
  12659 |                 .soft(
  12660 |                   page
  12661 |                     .locator('#the-bazaar-display-small-all-pages')
  12662 |                     .or(page.locator('#the-bazaar-nitro-m').locator('xpath=..'))
  12663 |                 )
  12664 |                 .not.toBeVisible();
  12665 |             });
  12666 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12667 |               await expect
  12668 |                 .soft(
  12669 |                   page
  12670 |                     .locator('#web-the-bazaar-display-footer-d')
  12671 |                     .locator('xpath=..')
  12672 |                     .or(page.locator('#the-bazaar-nitro-anchor').locator('xpath=..'))
  12673 |                 )
> 12674 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
  12675 |             });
  12676 |             break;
  12677 |           case 'Monster Hunter Wilds':
  12678 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12679 |               await expect
  12680 |                 .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
  12681 |                 .not.toBeVisible();
  12682 |             });
  12683 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12684 |               await expect
  12685 |                 .soft(
  12686 |                   page
  12687 |                     .locator('#mhw-display-all-pages')
  12688 |                     .or(page.locator('#mhw-nitro-l').locator('xpath=..'))
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
```