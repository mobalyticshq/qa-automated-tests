# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/role-permissions.test.js >> Game Manager permission >> Game Manager role can can upload an image to CDN on the ug page
- Location: e2e-tests/ngf/role-permissions.test.js:348:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "aqa-telegram07fe0bfc-5efd-4c9f-a372-3f1e02f84213.svg"
Received string:    "--xs-background: url('https://cdn.mobalytics.gg/cdn-cgi/image/format=auto,width=1000/uploads/images/zzz/aqa-telegram07fe0bfc-5efd-4c9f-a372-3f1e02f84213-d5178d2b-6e6d-4679-aeb7-1d01507b6c9c.svg'); --sm-background: url('https://cdn.mobalytics.gg/cdn-cgi/image/format=auto,width=1456/uploads/images/zzz/aqa-telegram07fe0bfc-5efd-4c9f-a372-3f1e02f84213-d5178d2b-6e6d-4679-aeb7-1d01507b6c9c.svg'); --md-background: url('https://cdn.mobalytics.gg/cdn-cgi/image/format=auto,width=2000/uploads/images/zzz/aqa-telegram07fe0bfc-5efd-4c9f-a372-3f1e02f84213-d5178d2b-6e6d-4679-aeb7-1d01507b6c9c.svg'); --lg-background: url('https://cdn.mobalytics.gg/cdn-cgi/image/format=auto,width=2400/uploads/images/zzz/aqa-telegram07fe0bfc-5efd-4c9f-a372-3f1e02f84213-d5178d2b-6e6d-4679-aeb7-1d01507b6c9c.svg'); mask-image: radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 100%);"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=e51] [cursor=pointer]':
              - /url: https://stg.mobalytics.gg/wow-forever
              - generic [ref=e53]:
                - 'img "World of Warcraft: Forever" [ref=e54]'
                - generic [ref=e55]: WoW Forever
                - generic [ref=e57]: New
            - link "Destiny 2 Destiny 2" [ref=e59] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/destiny-2
              - generic [ref=e61]:
                - img "Destiny 2" [ref=e62]
                - generic [ref=e63]: Destiny 2
            - link "Marathon Marathon" [ref=e65] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/marathon
              - generic [ref=e67]:
                - img "Marathon" [ref=e68]
                - generic [ref=e69]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e71] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/slay-the-spire-2
              - generic [ref=e73]:
                - img "Slay the Spire 2" [ref=e74]
                - generic [ref=e75]: STS 2
            - link "Deadlock Deadlock" [ref=e77] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e79]:
                - img "Deadlock" [ref=e80]
                - generic [ref=e81]: Deadlock
            - link "Overwatch Overwatch" [ref=e83] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/overwatch
              - generic [ref=e85]:
                - img "Overwatch" [ref=e86]
                - generic [ref=e87]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e89] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/borderlands-4
              - generic [ref=e91]:
                - img "Borderlands 4" [ref=e92]
                - generic [ref=e93]: Borderlands 4
            - link "Valorant VAL" [ref=e95] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/valorant
              - generic [ref=e97]:
                - img "Valorant" [ref=e98]
                - generic [ref=e99]: VAL
            - link "Neverness to Everness NTE" [ref=e101] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/neverness-to-everness
              - generic [ref=e103]:
                - img "Neverness to Everness" [ref=e104]
                - generic [ref=e105]: NTE
            - button [ref=e106] [cursor=pointer]:
              - img [ref=e107]
            - generic:
              - 'link "Arknights: Endfield Endfield"':
                - /url: https://stg.mobalytics.gg/arknights-endfield
                - generic:
                  - generic:
                    - 'img "Arknights: Endfield"'
                    - generic: Endfield
            - generic:
              - link "Elden Ring Nightreign Nightreign":
                - /url: https://stg.mobalytics.gg/elden-ring-nightreign
                - generic:
                  - generic:
                    - img "Elden Ring Nightreign"
                    - generic: Nightreign
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
              - link "Genshin Impact Genshin New":
                - /url: https://stg.mobalytics.gg/genshin-impact
                - generic:
                  - generic:
                    - img "Genshin Impact"
                    - generic: Genshin
                    - generic:
                      - generic: New
        - generic [ref=e108]:
          - generic [ref=e109]:
            - generic [ref=e111]:
              - generic [ref=e114] [cursor=pointer]:
                - button "plus Rewards" [ref=e115]:
                  - img "plus" [ref=e117]
                  - generic [ref=e118]: Rewards
                - generic [ref=e120]: New
              - generic [ref=e122] [cursor=pointer]:
                - img [ref=e123]:
                  - generic [ref=e146]: ✓
                - generic [ref=e147]: New challenge available
            - link "DOWNLOAD APP" [ref=e148] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-zzz&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e150]:
                - img [ref=e151]
                - text: DOWNLOAD APP
            - link "Gamebase" [ref=e153] [cursor=pointer]:
              - /url: /gamebase
              - generic [ref=e154]: Gamebase
          - generic [ref=e155]:
            - button "Remove Ads" [ref=e156] [cursor=pointer]
            - generic [ref=e157]:
              - link "G game_manager_auto_tests+stg+ns@mobalyticshq.com" [ref=e158] [cursor=pointer]:
                - /url: /zzz/profile/bold-flame-c2mepg
                - generic [ref=e160]:
                  - generic [ref=e162]: G
                  - generic [ref=e164]: game_manager_auto_tests+stg+ns@mobalyticshq.com
              - button "Notifications" [ref=e166] [cursor=pointer]:
                - img [ref=e167]
              - button [ref=e169] [cursor=pointer]:
                - img [ref=e171]
              - button "Theme" [ref=e173] [cursor=pointer]:
                - img "Theme" [ref=e175]
        - generic [ref=e177]:
          - link "Home" [ref=e180] [cursor=pointer]:
            - /url: /zzz
            - img "Home" [ref=e182]
          - link "Profile" [ref=e185] [cursor=pointer]:
            - /url: /zzz/profile
            - img "Profile" [ref=e187]
          - link "Characters" [ref=e190] [cursor=pointer]:
            - /url: /zzz/characters
            - img "Characters" [ref=e192]
          - link "Builds" [ref=e195] [cursor=pointer]:
            - /url: /zzz/builds
            - img "Builds" [ref=e197]
          - link "Teams" [ref=e200] [cursor=pointer]:
            - /url: /zzz/teams
            - img "Teams" [ref=e202]
          - link "Tier List" [ref=e205] [cursor=pointer]:
            - /url: /zzz/tier-list
            - img "Tier List" [ref=e207]
          - link "W-Engines" [ref=e210] [cursor=pointer]:
            - /url: /zzz/w-engines
            - img "W-Engines" [ref=e212]
          - link "Drive Discs" [ref=e215] [cursor=pointer]:
            - /url: /zzz/drive-discs
            - img "Drive Discs" [ref=e217]
          - link "Bangboos" [ref=e220] [cursor=pointer]:
            - /url: /zzz/bangboos
            - img "Bangboos" [ref=e222]
          - link "Guides" [ref=e225] [cursor=pointer]:
            - /url: /zzz/guides
            - img "Guides" [ref=e227]
        - generic [ref=e229]:
          - main [ref=e230]:
            - generic [ref=e231]:
              - navigation [ref=e232]:
                - list [ref=e233]:
                  - listitem [ref=e234]:
                    - link "Zenless Zone Zero" [ref=e235] [cursor=pointer]:
                      - /url: /zzz
                  - listitem [ref=e236]:
                    - img [ref=e237]
                  - listitem [ref=e238]:
                    - link "game_manager_auto_tests+stg+ns@mobalyticshq.com" [ref=e239] [cursor=pointer]:
                      - /url: /zzz/profile/bold-flame-c2mepg/builds
                  - listitem [ref=e240]:
                    - img [ref=e241]
                  - listitem [ref=e242]: /qa-automation-build-page-07fe0bfc-5efd-4c9f-a372-3f1e02f84213
              - generic [ref=e243]:
                - generic [ref=e244]:
                  - generic [ref=e246]:
                    - generic "/qa-automation-build-page-07fe0bfc-5efd-4c9f-a372-3f1e02f84213" [ref=e247]
                    - generic [ref=e249]: Draft
                  - generic [ref=e250]:
                    - button "Publish" [ref=e251] [cursor=pointer]
                    - button "Edit" [ref=e252] [cursor=pointer]
                    - button "SEO" [ref=e254] [cursor=pointer]:
                      - img [ref=e255]
                      - text: SEO
                    - button [ref=e257] [cursor=pointer]:
                      - img [ref=e259]
                - generic [ref=e261]:
                  - generic [ref=e262]:
                    - generic [ref=e263]: "Verified:"
                    - generic "select" [ref=e264]:
                      - combobox [ref=e267]
                      - button "Verified" [ref=e270] [cursor=pointer]:
                        - generic [ref=e271]: Verified
                        - img [ref=e273]
                  - generic "select" [ref=e276]:
                    - button "Featured" [ref=e278] [cursor=pointer]:
                      - generic [ref=e279]: Featured
                      - img [ref=e281]
              - generic [ref=e283]:
                - generic [ref=e284]:
                  - button "ZZZ Build /qa-automation-build-page-07fe0bfc-5efd-4c9f-a372-3f1e02f84213 By game_manager_auto_tests+stg+ns@mobalyticshq.com Updated on Sep 22, 2026" [ref=e287]:
                    - generic [ref=e290]:
                      - generic [ref=e291]: ZZZ Build
                      - heading "/qa-automation-build-page-07fe0bfc-5efd-4c9f-a372-3f1e02f84213" [level=1] [ref=e292]
                      - generic [ref=e293]:
                        - generic [ref=e296]:
                          - text: By
                          - link "game_manager_auto_tests+stg+ns@mobalyticshq.com" [ref=e297] [cursor=pointer]:
                            - /url: /zzz/profile/bold-flame-c2mepg/builds
                        - generic [ref=e300]:
                          - text: Updated on
                          - generic [ref=e301]: Sep 22, 2026
                  - generic [ref=e303]:
                    - generic [ref=e304]:
                      - generic [ref=e306]:
                        - heading "Build Overview" [level=2] [ref=e311]
                        - generic [ref=e319]:
                          - heading "Drive Disc Stats" [level=4] [ref=e320]
                          - list [ref=e321]:
                            - listitem [ref=e322]:
                              - strong [ref=e323]: "Partition 4:"
                            - listitem [ref=e324]:
                              - strong [ref=e325]: "Partition 5:"
                            - listitem [ref=e326]:
                              - strong [ref=e327]: "Partition 6:"
                          - heading "Substats" [level=4] [ref=e328]:
                            - strong [ref=e329]: Substats
                          - list [ref=e330]:
                            - listitem [ref=e331]
                            - listitem [ref=e332]
                            - listitem [ref=e333]
                      - generic [ref=e334]:
                        - heading "Skill Priority" [level=2] [ref=e338]
                        - list [ref=e344]:
                          - listitem [ref=e345]:
                            - img "zzz core skill" [ref=e349] [cursor=pointer]
                            - text: Core Passive
                          - listitem [ref=e350]:
                            - img "zzz basic attack" [ref=e354] [cursor=pointer]
                            - text: Basic Attack
                          - listitem [ref=e355]:
                            - img "zzz dodge" [ref=e359] [cursor=pointer]
                            - text: Dodge
                          - listitem [ref=e360]:
                            - img "zzz assist" [ref=e364] [cursor=pointer]
                            - text: Assist
                          - listitem [ref=e365]:
                            - img "zzz ex special attack" [ref=e369] [cursor=pointer]
                            - text: EX Special
                          - listitem [ref=e370]:
                            - img "zzz ultimate" [ref=e374] [cursor=pointer]
                            - text: Ultimate
                    - generic [ref=e376]:
                      - generic [ref=e377]:
                        - heading "Table of Contents" [level=2] [ref=e381]
                        - generic [ref=e382]:
                          - generic [ref=e383]:
                            - link "1. Build Overview" [ref=e384] [cursor=pointer]:
                              - /url: /zzz/profile/bold-flame-c2mepg/builds/4c0acdd3-f6ba-49b1-8f2c-a914cca40369#1-build-overview-0
                            - link "2. Skill Priority" [ref=e385] [cursor=pointer]:
                              - /url: /zzz/profile/bold-flame-c2mepg/builds/4c0acdd3-f6ba-49b1-8f2c-a914cca40369#e59aa3e0-8f1f-418a-a2f6-a876e09bbc8e-skill-priority-1
                          - button "Back to top" [ref=e387] [cursor=pointer]
                      - generic [ref=e389]:
                        - heading "Latest Builds" [level=2] [ref=e393]
                        - generic [ref=e395]:
                          - generic [ref=e398] [cursor=pointer]:
                            - link [ref=e399]:
                              - /url: /zzz/builds/ug-content-v2-stas-zzz-int
                            - generic [ref=e401]:
                              - generic [ref=e402]: Featured UG Content v2 Stas zzz int
                              - generic [ref=e403]:
                                - text: By
                                - link "Gattino#Nero" [ref=e404]:
                                  - /url: /zzz/profile/iron-robot/builds
                                - text: ∙
                                - generic [ref=e405]: Jul 28, 2026
                            - generic [ref=e406]:
                              - generic [ref=e407]: Verified
                              - generic [ref=e408]: Featured
                            - generic [ref=e411]:
                              - button "Add to Favorites" [ref=e412]:
                                - img [ref=e413]
                                - text: Add to Favorites
                              - button "Share" [ref=e414]:
                                - img [ref=e415]
                                - text: Share
                              - button [ref=e417]:
                                - img [ref=e419]
                          - generic [ref=e422] [cursor=pointer]:
                            - link [ref=e423]:
                              - /url: /zzz/builds/test-el-split
                            - generic [ref=e425]:
                              - generic [ref=e426]: Test el split
                              - generic [ref=e427]:
                                - text: By
                                - link "Gattino#Nero" [ref=e428]:
                                  - /url: /zzz/profile/iron-robot/builds
                                - text: ∙
                                - generic [ref=e429]: May 7, 2026
                            - generic [ref=e430]:
                              - generic [ref=e431]: Verified
                              - generic [ref=e432]: Featured
                            - generic [ref=e435]:
                              - button "Add to Favorites" [ref=e436]:
                                - img [ref=e437]
                                - text: Add to Favorites
                              - button "Share" [ref=e438]:
                                - img [ref=e439]
                                - text: Share
                              - button [ref=e441]:
                                - img [ref=e443]
                - status [ref=e444]
          - complementary [ref=e449]:
            - generic [ref=e450]:
              - generic [ref=e452]:
                - generic [ref=e454] [cursor=pointer]:
                  - generic [ref=e455]: Advertisement
                  - generic [ref=e456]: Remove Ads
                - generic [ref=e459] [cursor=pointer]:
                  - generic [ref=e460]: Remove all ads
                  - generic [ref=e461]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e462]
              - generic [ref=e464]:
                - generic [ref=e466] [cursor=pointer]:
                  - generic [ref=e467]: Advertisement
                  - generic [ref=e468]: Remove Ads
                - generic [ref=e471] [cursor=pointer]:
                  - generic [ref=e472]: Remove all ads
                  - generic [ref=e473]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e474]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e477]:
    - banner [ref=e478]:
      - generic [ref=e479] [cursor=pointer]:
        - generic [ref=e480]: Advertisement
        - generic [ref=e481]: Remove Ads
    - generic [ref=e484] [cursor=pointer]:
      - generic [ref=e485]: Remove all ads
      - generic [ref=e486]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e487]
```

# Test source

```ts
  261 |   });
  262 | 
  263 |   test('St Widget contains only "Edit" button & "Create Page" button is missing on ST page for Game Manager role', async ({
  264 |     page,
  265 |   }) => {
  266 |     const moba = new Moba(page);
  267 |     let stWidgetName = '/qa-not-delete-st-page';
  268 | 
  269 |     await moba.mainURLs.openAdminNightreignPage();
  270 | 
  271 |     await test.step('Expected Result: St Widget contains "Edit" button', async () => {
  272 |       await expect(moba.stAdminPage.editButton(stWidgetName)).toBeVisible();
  273 |     });
  274 |     await test.step('Expected Result: St Widget contains "Delete" button', async () => {
  275 |       await expect(moba.stAdminPage.deleteButton(stWidgetName)).not.toBeVisible();
  276 |     });
  277 |     await test.step('Expected Result: "Create Page" button is missing on ST page for Game Manager role', async () => {
  278 |       await expect(moba.stAdminPage.createStPageButton).not.toBeVisible();
  279 |     });
  280 |   });
  281 | 
  282 |   test(`View mode of the "/qa-not-delete-st-page" structure page is available for the Game Manager role`, async ({
  283 |     page,
  284 |   }) => {
  285 |     let stWidgetName = '/qa-not-delete-st-page';
  286 | 
  287 |     const moba = new Moba(page);
  288 | 
  289 |     await moba.mainURLs.openAdminNightreignPage();
  290 |     await moba.stAdminPage.clickStCardWidget(stWidgetName);
  291 |     await test.step(`Expected Result: View mode the "/qa-not-delete-st-page" structure page is opened`, async () => {
  292 |       await expect(moba.stPage.controlPanel).toContainText(stWidgetName);
  293 |     });
  294 |   });
  295 | 
  296 |   test(`Game Manager role can't publish ST pages`, async ({ page }) => {
  297 |     const moba = new Moba(page);
  298 |     let stWidgetName = '/qa-not-delete-st-page';
  299 | 
  300 |     await moba.mainURLs.openAdminZzzPage();
  301 |     await moba.stAdminPage.clickStCardWidget(stWidgetName);
  302 | 
  303 |     await test.step(`Expected Result: "Publish" button is missing in the control panel on the ST page`, async () => {
  304 |       await expect(moba.stPage.controlPanel).not.toContainText('Published');
  305 |       await expect(moba.stPage.publishButton).not.toBeVisible();
  306 |     });
  307 |   });
  308 | 
  309 |   test(`Game Manager role can't archive, duplicate ST pages`, async ({ page }) => {
  310 |     const moba = new Moba(page);
  311 |     let stWidgetName = '/qa-not-delete-st-page';
  312 | 
  313 |     await moba.mainURLs.openAdminZzzPage();
  314 |     await moba.stAdminPage.clickStCardWidget(stWidgetName);
  315 | 
  316 |     await test.step(`Expected Result: "Dots" button is missing in the control panel on the ST page`, async () => {
  317 |       await expect(moba.stPage.dotsButton).not.toBeVisible();
  318 |     });
  319 |   });
  320 | 
  321 |   test(`Game Manager has access to SEO modal on the structure pages`, async ({ page }) => {
  322 |     const moba = new Moba(page);
  323 |     let stWidgetName = '/qa-not-delete-st-page';
  324 | 
  325 |     await moba.mainURLs.openAdminZzzPage();
  326 |     await moba.stAdminPage.clickStCardWidget(stWidgetName);
  327 |     await moba.stPage.openSeoModal();
  328 | 
  329 |     await test.step(`Expected Result: SEO modal is available for Game Manager role`, async () => {
  330 |       await expect(moba.stPage.seoModal).toBeVisible();
  331 |     });
  332 |   });
  333 | 
  334 |   test(`Game Manager can upload a video to CDN on the structure pages`, async ({ page }) => {
  335 |     const uniqueId = uuidv4();
  336 |     const pageName = `/qa-automation-st-page-${uniqueId}`;
  337 |     const moba = new Moba(page);
  338 | 
  339 |     await moba.mainURLs.openMhwBuildPlanner();
  340 |     await moba.ugBuildPlanner.uploadVideo(`aqa-video${uniqueId}.mp4`);
  341 |     await moba.ugBuildPlanner.createUgDraftPage(pageName);
  342 | 
  343 |     await test.step(`Expected Result: Video widget is present in the ST page`, async () => {
  344 |       await expect(moba.ugBuildPage.videoGuideWidget).toBeVisible();
  345 |     });
  346 |   });
  347 | 
  348 |   test(`Game Manager role can can upload an image to CDN on the ug page`, async ({ page }) => {
  349 |     const uniqueId = uuidv4();
  350 |     const pageName = `/qa-automation-build-page-${uniqueId}`;
  351 |     const moba = new Moba(page);
  352 | 
  353 |     await moba.mainURLs.openUgZzzPage();
  354 |     await moba.ugProfilePage.gotoBuildPlannerPage();
  355 |     await moba.ugBuildPlanner.uploadCoverImage(`aqa-telegram${uniqueId}.svg`);
  356 |     await moba.ugBuildPlanner.createUgDraftPage(pageName);
  357 | 
  358 |     await test.step(`Expected Result: Cover image is uploaded and visible on the build page`, async () => {
  359 |       await expect(moba.ugBuildPage.coverImage).toBeVisible();
  360 |       expect(await moba.ugBuildPage.coverImage.getAttribute('style')).toContain('cdn.mobalytics.gg');
> 361 |       expect(await moba.ugBuildPage.coverImage.getAttribute('style')).toContain(`aqa-telegram${uniqueId}.svg`);
      |                                                                       ^ Error: expect(received).toContain(expected) // indexOf
  362 |     });
  363 |   });
  364 | 
  365 |   test('Check API Game Manager permission', async ({ request }) => {
  366 |     const gameManagerRoleResponse = await request.post(`${process.env.BASE_URL}/api/poe-2/v1/graphql/query`, {
  367 |       data: {
  368 |         query: `
  369 |             query Poe2 {
  370 |                 poe2 {
  371 |                     id
  372 |                     permissions {
  373 |                         user {
  374 |                             id
  375 |                             role
  376 |                         }
  377 |                     }
  378 |                 }
  379 |             }
  380 |         `,
  381 |       },
  382 |       headers: {
  383 |         'Content-Type': 'application/json',
  384 |       },
  385 |     });
  386 |     expect(gameManagerRoleResponse.ok()).toBeTruthy();
  387 |     const json = await gameManagerRoleResponse.json();
  388 |     const role = json.data.poe2.permissions.user.role;
  389 |     expect(role).toBe('GAME_MANAGER');
  390 |   });
  391 | });
  392 | 
```