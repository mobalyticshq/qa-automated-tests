# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1233-1411px) for different user roles >> Check video block, footer banner, L vertical banner for ad free user - Marvel Rivals in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement.test.js:12377:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-marvel-rivals-display-footer-d').locator('..').or(locator('#marvel-rivals-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-marvel-rivals-display-footer-d').locator('..').or(locator('#marvel-rivals-nitro-anchor').locator('..'))
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
          - /url: /marvel-rivals
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
          - link "Slay the Spire 2 STS 2 New" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
              - generic [ref=e59]: New
          - link "Deadlock Deadlock" [ref=e61] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e63]:
              - img "Deadlock" [ref=e64]
              - generic [ref=e65]: Deadlock
          - link "Overwatch Overwatch" [ref=e67] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e69]:
              - img "Overwatch" [ref=e70]
              - generic [ref=e71]: Overwatch
          - button [ref=e72] [cursor=pointer]:
            - img [ref=e73]
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
      - generic [ref=e74]:
        - generic [ref=e75]:
          - link "DOWNLOAD APP" [ref=e76] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-marvel-rivals&utm_medium=homepage&utm_source=web
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
          - /url: /marvel-rivals
          - img "Home" [ref=e101]
        - link "Tier List" [ref=e104] [cursor=pointer]:
          - /url: /marvel-rivals/tier-list
          - img "Tier List" [ref=e106]
        - link "Heroes" [ref=e109] [cursor=pointer]:
          - /url: /marvel-rivals/heroes
          - img "Heroes" [ref=e111]
        - link "Team-Ups" [ref=e114] [cursor=pointer]:
          - /url: /marvel-rivals/guides/best-team-ups
          - img "Team-Ups" [ref=e116]
        - link "Guides" [ref=e119] [cursor=pointer]:
          - /url: /marvel-rivals/guides
          - img "Guides" [ref=e121]
        - link "Battle Matrix" [ref=e124] [cursor=pointer]:
          - /url: /marvel-rivals/battle-matrix/home
          - img "Battle Matrix" [ref=e126]
      - generic [ref=e128]:
        - main [ref=e129]:
          - generic [ref=e131]:
            - generic [ref=e132]:
              - button "Marvel Rivals Tier Lists, Heroes, and Guides NetEase Games launched Marvel Rivals, the \"Super Hero Team-based PVP Shooter\", on December 6, 2024. Mobalytics helps players of all skill levels stay on top of the meta, master their heroes, and learn the core fundamentals of the game." [ref=e135]:
                - generic [ref=e140]:
                  - generic [ref=e141]:
                    - img [ref=e143]
                    - heading "Marvel Rivals Tier Lists, Heroes, and Guides" [level=1] [ref=e144]
                  - paragraph [ref=e152]: NetEase Games launched Marvel Rivals, the "Super Hero Team-based PVP Shooter", on December 6, 2024. Mobalytics helps players of all skill levels stay on top of the meta, master their heroes, and learn the core fundamentals of the game.
              - generic [ref=e155]:
                - link "Meta Tier Lists (Diamond+ and Below Diamond) Find the best heroes for your role and rank, updated constantly Explore Tier Lists" [ref=e157] [cursor=pointer]:
                  - /url: /marvel-rivals/tier-list
                  - generic [ref=e159]:
                    - paragraph [ref=e161]: Meta Tier Lists (Diamond+ and Below Diamond)
                    - paragraph [ref=e162]: Find the best heroes for your role and rank, updated constantly
                    - button "Explore Tier Lists" [ref=e164]: Explore Tier Lists
                - link "Hero Guides Learn every hero's strengths/weaknesses, ability tips, and much more! See Guides" [ref=e167] [cursor=pointer]:
                  - /url: /marvel-rivals/heroes
                  - generic [ref=e169]:
                    - paragraph [ref=e171]: Hero Guides
                    - paragraph [ref=e172]: Learn every hero's strengths/weaknesses, ability tips, and much more!
                    - button "See Guides" [ref=e174]: See Guides
                - generic [ref=e177]:
                  - heading "Latest Guides and News" [level=2] [ref=e181]
                  - generic [ref=e183]:
                    - generic [ref=e186] [cursor=pointer]:
                      - link [ref=e187]:
                        - /url: /marvel-rivals/guides/best-team-ups
                      - generic [ref=e189]:
                        - generic [ref=e190]: The Best Marvel Rivals Team-Ups Ranked
                        - generic [ref=e191]:
                          - text: By
                          - link "Mobalytics" [ref=e192]:
                            - /url: /marvel-rivals/profile/mobalytics
                          - text: ∙
                          - generic [ref=e193]: Updated on
                          - generic [ref=e194]: May 4, 2026
                      - generic [ref=e195]:
                        - button "Share" [ref=e198]:
                          - img [ref=e199]
                          - text: Share
                        - generic [ref=e201]: Guides
                    - generic [ref=e204] [cursor=pointer]:
                      - link [ref=e205]:
                        - /url: /marvel-rivals/guides/team-comp-examples
                      - generic [ref=e207]:
                        - generic [ref=e208]: Marvel Rivals Team Comp Examples
                        - generic [ref=e209]:
                          - text: By
                          - link "Mobalytics" [ref=e210]:
                            - /url: /marvel-rivals/profile/mobalytics
                          - text: ∙
                          - generic [ref=e211]: Updated on
                          - generic [ref=e212]: Mar 24, 2026
                      - generic [ref=e213]:
                        - button "Share" [ref=e216]:
                          - img [ref=e217]
                          - text: Share
                        - generic [ref=e219]: Guides
                    - generic [ref=e222] [cursor=pointer]:
                      - link [ref=e223]:
                        - /url: /marvel-rivals/guides/compared-to-overwatch-2
                      - generic [ref=e225]:
                        - generic [ref=e226]: Marvel Rivals Compared to Overwatch (Hero Similiarities)
                        - generic [ref=e227]:
                          - text: By
                          - link "Mobalytics" [ref=e228]:
                            - /url: /marvel-rivals/profile/mobalytics
                          - text: ∙
                          - generic [ref=e229]: Updated on
                          - generic [ref=e230]: Mar 13, 2026
                      - generic [ref=e231]:
                        - button "Share" [ref=e234]:
                          - img [ref=e235]
                          - text: Share
                        - generic [ref=e237]: Guides
                    - generic [ref=e240] [cursor=pointer]:
                      - link [ref=e241]:
                        - /url: /marvel-rivals/guides/marvel-zombies
                      - generic [ref=e243]:
                        - generic [ref=e244]: "Marvel Rivals Zombies: Full Guide"
                        - generic [ref=e245]:
                          - text: By
                          - link "Mobalytics" [ref=e246]:
                            - /url: /marvel-rivals/profile/mobalytics
                          - text: ∙
                          - generic [ref=e247]: Updated on
                          - generic [ref=e248]: Oct 25, 2025
                      - generic [ref=e249]:
                        - button "Share" [ref=e252]:
                          - img [ref=e253]
                          - text: Share
                        - generic [ref=e255]: News
                    - generic [ref=e258] [cursor=pointer]:
                      - link [ref=e259]:
                        - /url: /marvel-rivals/guides/roles-explained
                      - generic [ref=e261]:
                        - generic [ref=e262]: Marvel Rivals Roles Explained
                        - generic [ref=e263]:
                          - text: By
                          - link "Mobalytics" [ref=e264]:
                            - /url: /marvel-rivals/profile/mobalytics
                          - text: ∙
                          - generic [ref=e265]: Updated on
                          - generic [ref=e266]: Jul 18, 2025
                      - generic [ref=e267]:
                        - button "Share" [ref=e270]:
                          - img [ref=e271]
                          - text: Share
                        - generic [ref=e272]:
                          - generic [ref=e273]: Roles
                          - generic [ref=e274]: Guides
                  - button "Show more" [ref=e275] [cursor=pointer]
            - status [ref=e276]
        - complementary [ref=e281]:
          - generic [ref=e284]:
            - generic [ref=e287] [cursor=pointer]: Remove Ads
            - generic [ref=e290] [cursor=pointer]:
              - generic [ref=e291]: Remove all ads
              - generic [ref=e292]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
              - button "Remove ads" [ref=e293]:
                - generic [ref=e294]: Remove ads
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e297]:
    - banner [ref=e298]:
      - generic [ref=e299] [cursor=pointer]:
        - generic [ref=e300]: Advertisement
        - generic [ref=e301]: Remove Ads
    - generic [ref=e304] [cursor=pointer]:
      - generic [ref=e305]: Remove all ads
      - generic [ref=e306]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e307]:
        - generic [ref=e308]: Remove ads
```

# Test source

```ts
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
  12789 |                 .not.toBeVisible();
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
> 12867 |                 .not.toBeVisible();
        |                      ^ Error: expect(locator).not.toBeVisible() failed
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
  12890 |             });
  12891 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12892 |               await expect
  12893 |                 .soft(
  12894 |                   page
  12895 |                     .locator('#deadlock-display-small-all-pages')
  12896 |                     .or(page.locator('#deadlock-nitro-m').locator('xpath=..'))
  12897 |                 )
  12898 |                 .not.toBeVisible();
  12899 |             });
  12900 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12901 |               await expect
  12902 |                 .soft(
  12903 |                   page
  12904 |                     .locator('#web-deadlock-display-footer-d')
  12905 |                     .locator('xpath=..')
  12906 |                     .or(page.locator('#deadlock-nitro-anchor').locator('xpath=..'))
  12907 |                 )
  12908 |                 .not.toBeVisible();
  12909 |             });
  12910 |             break;
  12911 |           case 'Diablo 4':
  12912 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12913 |               await expect
  12914 |                 .soft(
  12915 |                   page
  12916 |                     .locator('#diablo-4-video-all-pages')
  12917 |                     .or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
  12918 |                 )
  12919 |                 .not.toBeVisible();
  12920 |             });
  12921 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12922 |               await expect
  12923 |                 .soft(
  12924 |                   page
  12925 |                     .locator('#diablo-4-display-all-pages')
  12926 |                     .or(page.locator('#diablo-4-nitro-l').locator('xpath=..'))
  12927 |                     .or(page.locator('#diablo-4-nitro-3').locator('xpath=..'))
  12928 |                     .first()
  12929 |                 )
  12930 |                 .not.toBeVisible();
  12931 |             });
  12932 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  12933 |               await expect
  12934 |                 .soft(
  12935 |                   page
  12936 |                     .locator('#diablo-4-display-small-all-pages')
  12937 |                     .or(page.locator('#diablo-4-nitro-m').locator('xpath=..'))
  12938 |                 )
  12939 |                 .not.toBeVisible();
  12940 |             });
  12941 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  12942 |               await expect
  12943 |                 .soft(
  12944 |                   page
  12945 |                     .locator('#web-diablo-4-display-footer-d')
  12946 |                     .locator('xpath=..')
  12947 |                     .or(page.locator('#diablo-4-nitro-anchor').locator('xpath=..'))
  12948 |                 )
  12949 |                 .not.toBeVisible();
  12950 |             });
  12951 |             break;
  12952 |           case 'Destiny 2':
  12953 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  12954 |               await expect
  12955 |                 .soft(
  12956 |                   page
  12957 |                     .locator('#destiny-2-video-all-pages')
  12958 |                     .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
  12959 |                 )
  12960 |                 .not.toBeVisible();
  12961 |             });
  12962 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  12963 |               await expect
  12964 |                 .soft(
  12965 |                   page
  12966 |                     .locator('#destiny-2-display-all-pages')
  12967 |                     .or(page.locator('#destiny-2-nitro-l').locator('xpath=..'))
```