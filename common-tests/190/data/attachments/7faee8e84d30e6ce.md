# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/widget.test.js >> Comments Widget >> Guest Profile Required Modal appears to authorized user
- Location: e2e-tests/ngf/widget.test.js:8:5

# Error details

```
TypeError: moba.ugBuildPage.postEmptyComment is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets! → Get Started Close":
        - /url: https://mobalytics.gg/reward-pass/01a15f39-e0e7-77d8-947f-951a912807e5
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e11]: Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets!
            - button "→ Get Started" [ref=e12]
          - img "Close" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e16]:
          - link [ref=e18] [cursor=pointer]:
            - /url: /borderlands-4
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
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-borderlands-4&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=e114]
          - button "Play & Get Free Rewards" [ref=e117] [cursor=pointer]
          - generic [ref=e120]:
            - button "Sign In" [ref=e122] [cursor=pointer]
            - button "Settings" [ref=e124] [cursor=pointer]
        - generic [ref=e127]:
          - link [ref=e130] [cursor=pointer]:
            - /url: /borderlands-4
            - img "Home" [ref=e131]
            - generic: Home
          - link [ref=e134] [cursor=pointer]:
            - /url: /borderlands-4/profile
            - img "Profile" [ref=e135]
            - generic: Profile
          - link [ref=e138] [cursor=pointer]:
            - /url: /borderlands-4/planner/builds
            - img "Build Planner" [ref=e139]
            - generic: Build Planner
          - link [ref=e142] [cursor=pointer]:
            - /url: /borderlands-4/guides/legendary-weapons-and-gear
            - img "Legendaries" [ref=e143]
            - generic: Legendaries
          - link [ref=e146] [cursor=pointer]:
            - /url: /borderlands-4/builds
            - img "Builds" [ref=e147]
            - generic: Builds
          - link [ref=e150] [cursor=pointer]:
            - /url: /borderlands-4/vault-hunters
            - img "Vault Hunters" [ref=e151]
            - generic: Vault Hunters
          - link [ref=e154] [cursor=pointer]:
            - /url: /borderlands-4/guides
            - img "Guides" [ref=e155]
            - generic: Guides
          - link [ref=e158] [cursor=pointer]:
            - /url: /borderlands-4/shift-codes-borderlands-4
            - img "SHiFT Codes" [ref=e159]
            - generic: SHiFT Codes
          - link [ref=e162] [cursor=pointer]:
            - /url: /borderlands-4/wiki
            - img "Wiki" [ref=e163]
            - generic: Wiki
          - link [ref=e166] [cursor=pointer]:
            - /url: /borderlands-4/creators
            - img "Creators" [ref=e167]
            - generic: Creators
        - generic [ref=e169]:
          - main [ref=e170]:
            - generic [ref=e171]:
              - img "bl4 logitech free refresh takeover version a" [ref=e172] [cursor=pointer]
              - generic [ref=e175]:
                - navigation [ref=e176]:
                  - list [ref=e177]:
                    - listitem [ref=e178]:
                      - link "Borderlands 4" [ref=e179] [cursor=pointer]:
                        - /url: /borderlands-4
                    - listitem [aria-hidden] [ref=e180]
                    - listitem [ref=e182]:
                      - link "admin_auto_tests+stg+ns@mobalyticshq.com" [ref=e183] [cursor=pointer]:
                        - /url: /borderlands-4/profile/spy-man/builds
                    - listitem [aria-hidden] [ref=e184]
                    - listitem [ref=e186]: qa-test-comments-widget
                - generic [ref=e187]:
                  - generic [ref=e188]:
                    - button "Borderlands 4 qa-test-comments-widget presentation Vex By admin_auto_tests+stg+ns@mobalyticshq.com Follow Updated on Oct 7, 2026 Add to Favorites 60 Share" [ref=e191]:
                      - generic [ref=e192]:
                        - generic [ref=e194]:
                          - heading "Borderlands 4 qa-test-comments-widget" [level=1] [ref=e195]:
                            - generic [ref=e196]: Borderlands 4
                            - generic [ref=e197]: qa-test-comments-widget
                          - generic [ref=e199]:
                            - img "presentation" [ref=e200]
                            - text: Vex
                          - generic [ref=e201]:
                            - generic [ref=e203]:
                              - generic [ref=e204]:
                                - text: By
                                - link "admin_auto_tests+stg+ns@mobalyticshq.com" [ref=e205] [cursor=pointer]:
                                  - /url: /borderlands-4/profile/spy-man/builds
                              - button "Follow" [ref=e207] [cursor=pointer]
                            - generic [ref=e211]:
                              - text: Updated on
                              - generic [ref=e212]: Oct 7, 2026
                        - generic [ref=e214]:
                          - button "Add to Favorites" [ref=e216] [cursor=pointer]
                          - button "60" [ref=e218] [cursor=pointer]
                          - button "Share" [ref=e221] [cursor=pointer]
                    - generic [ref=e227]:
                      - generic [ref=e231]:
                        - heading "Comments" [level=2] [ref=e232]
                        - generic [ref=e233]: "60"
                      - generic [ref=e235]:
                        - generic [ref=e239]:
                          - generic [ref=e241]:
                            - generic [ref=e242]:
                              - button [ref=e244] [cursor=pointer]
                              - button [ref=e247] [cursor=pointer]
                              - button [ref=e250] [cursor=pointer]
                              - button [ref=e253] [cursor=pointer]
                            - button [ref=e256] [cursor=pointer]
                            - generic [ref=e259]:
                              - button [ref=e261] [cursor=pointer]
                              - button [ref=e264] [cursor=pointer]
                            - button [ref=e267] [cursor=pointer]
                          - generic [ref=e270]:
                            - textbox [ref=e272]:
                              - paragraph [ref=e273]
                            - generic: Share your thoughts...Type @ to try game data
                          - generic [ref=e274]:
                            - generic: 1000 characters remaining
                            - button "Comment" [ref=e275] [cursor=pointer]
                        - generic "select" [ref=e277]:
                          - combobox [ref=e280]
                          - button "Newest" [ref=e283] [cursor=pointer]
                        - generic [ref=e288]:
                          - generic [ref=e290]:
                            - generic [ref=e291]: A
                            - generic [ref=e294]:
                              - generic [ref=e296] [cursor=pointer]:
                                - generic [ref=e297]: admin_auto_tests+stg+ns@mobalyticshq.com
                                - generic [ref=e298]: Author
                                - generic [ref=e300]: •
                                - generic [ref=e301]: 12min ago
                              - paragraph [ref=e307]: Hello Katia 2a228ba2-953e-4a50-a5f6-282e223d4d36
                              - generic [ref=e308]:
                                - generic [ref=e309]:
                                  - button [ref=e310] [cursor=pointer]
                                  - generic [ref=e312]: "1"
                                  - button [ref=e313] [cursor=pointer]
                                - button "Reply" [ref=e315] [cursor=pointer]
                                - button "Share" [ref=e317] [cursor=pointer]
                          - generic [ref=e320]:
                            - generic [ref=e321]: A
                            - generic [ref=e324]:
                              - generic [ref=e326] [cursor=pointer]:
                                - generic [ref=e327]: admin_auto_tests+stg+ns@mobalyticshq.com
                                - generic [ref=e328]: Author
                                - generic [ref=e330]: •
                                - generic [ref=e331]: 27min ago
                              - paragraph [ref=e337]: Hello Katia 831e3e1d-f080-4b78-8bf0-69b552cb2c1b
                              - generic [ref=e338]:
                                - generic [ref=e339]:
                                  - button [ref=e340] [cursor=pointer]
                                  - generic [ref=e342]: "1"
                                  - button [ref=e343] [cursor=pointer]
                                - button "Reply" [ref=e345] [cursor=pointer]
                                - button "Share" [ref=e347] [cursor=pointer]
                          - generic [ref=e350]:
                            - generic [ref=e351]: A
                            - generic [ref=e354]:
                              - generic [ref=e356] [cursor=pointer]:
                                - generic [ref=e357]: admin_auto_tests+stg+ns@mobalyticshq.com
                                - generic [ref=e358]: Author
                                - generic [ref=e360]: •
                                - generic [ref=e361]: 28min ago
                              - paragraph [ref=e367]: Hello Katia newer 275bc527-ffb5-429c-9ca2-cb66d19b0c23
                              - generic [ref=e368]:
                                - generic [ref=e369]:
                                  - button [ref=e370] [cursor=pointer]
                                  - generic [ref=e372]: "0"
                                  - button [ref=e373] [cursor=pointer]
                                - button "Reply" [ref=e375] [cursor=pointer]
                                - button "Share" [ref=e377] [cursor=pointer]
                          - generic [ref=e380]:
                            - generic [ref=e381]: A
                            - generic [ref=e384]:
                              - generic [ref=e386] [cursor=pointer]:
                                - generic [ref=e387]: admin_auto_tests+stg+ns@mobalyticshq.com
                                - generic [ref=e388]: Author
                                - generic [ref=e390]: •
                                - generic [ref=e391]: 28min ago
                              - paragraph [ref=e397]: Hello Katia 75f4abab-8ef7-4ef7-9aaf-333c1a3f698c
                              - generic [ref=e398]:
                                - generic [ref=e399]:
                                  - button [ref=e400] [cursor=pointer]
                                  - generic [ref=e402]: "1"
                                  - button [ref=e403] [cursor=pointer]
                                - button "Reply" [ref=e405] [cursor=pointer]
                                - button "Share" [ref=e407] [cursor=pointer]
                          - generic [ref=e410]:
                            - generic [ref=e411]: A
                            - generic [ref=e414]:
                              - generic [ref=e416] [cursor=pointer]:
                                - generic [ref=e417]: admin_auto_tests+stg+ns@mobalyticshq.com
                                - generic [ref=e418]: Author
                                - generic [ref=e420]: •
                                - generic [ref=e421]: 28min ago
                              - paragraph [ref=e427]: Hello Katia 94a68db2-2654-494e-821a-978e32184205
                              - generic [ref=e428]:
                                - generic [ref=e429]:
                                  - button [ref=e430] [cursor=pointer]
                                  - generic [ref=e432]: "1"
                                  - button [ref=e433] [cursor=pointer]
                                - button "Reply" [ref=e435] [cursor=pointer]
                                - button "Share" [ref=e437] [cursor=pointer]
                          - button "Show more comments" [ref=e440] [cursor=pointer]
                  - status [ref=e441]
          - complementary [ref=e442]:
            - generic [ref=e445]:
              - generic [ref=e447] [cursor=pointer]:
                - generic [ref=e448]: Advertisement
                - generic [ref=e449]: Remove Ads
              - generic [ref=e453] [cursor=pointer]:
                - generic [ref=e454]: Remove all ads
                - generic [ref=e455]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e456]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e459]:
    - banner [ref=e460]:
      - generic [ref=e461] [cursor=pointer]:
        - generic [ref=e462]: Advertisement
        - generic [ref=e463]: Remove Ads
    - generic [ref=e467] [cursor=pointer]:
      - generic [ref=e468]: Remove all ads
      - generic [ref=e469]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e470]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixture';
  2  | import { Moba } from '../../app/page-object/moba';
  3  | import { v4 as uuidv4 } from 'uuid';
  4  | 
  5  | test.describe('Comments Widget', () => {
  6  |     test.use({ storageState: { cookies: [], origins: [] } });
  7  | 
  8  |     test('Guest Profile Required Modal appears to authorized user', async ({ page }) => {
  9  |         const moba = new Moba(page);
  10 | 
  11 |         await moba.mainURLs.openUgCommentsWidget();
> 12 |         await moba.ugBuildPage.postEmptyComment();
     |                                ^ TypeError: moba.ugBuildPage.postEmptyComment is not a function
  13 | 
  14 |         await expect(moba.profileRequiredModal.profileRequiredModal).toBeVisible();
  15 |     });
  16 |         
  17 |    test('Delete Own Comment', async ({ postComment }) => {
  18 |         const { moba, textComment } = postComment;
  19 |         await moba.ugBuildPage.deleteComment(textComment);
  20 | 
  21 |         await expect(moba.commentsWidget.textComment(textComment)).toHaveCount(0);
  22 |     })
  23 | });
  24 | 
  25 | test ('Up Comment Rate', async ({ postComment }) =>{
  26 |     const { moba, textComment } = postComment;
  27 |     
  28 |     await moba.ugBuildPage.commentUp(textComment);
  29 | 
  30 |     await expect(moba.ugBuildPage.countCommentText(textComment)).toContainText('1');
  31 | } )
  32 | 
  33 | // test ('Sorting comments', async ({ postComment }) => {
  34 | //     const { moba, textComment } = postComment;
  35 | 
  36 | //     const newerComment = `Hello Katia newer ${uuidv4()}`;
  37 | //     const commentPosition = async (text) =>
  38 | //         (await moba.ugBuildPage.commentItems.allInnerTexts()).findIndex((item) => item.includes(text));
  39 | 
  40 | //     await moba.ugBuildPage.commentUp(textComment);
  41 | //     await expect(moba.ugBuildPage.countCommentText(textComment)).toHaveText('1');
  42 |   
  43 | //     // a newer comment with 0 rating is above the upvoted one in "Newest", only "Top" can move it down
  44 | //     await moba.commentsWidget.postComments(newerComment);
  45 | //     try {
  46 | //         expect(await commentPosition(newerComment)).toBeLessThan(await commentPosition(textComment));
  47 |         
  48 | //         await moba.ugBuildPage.sortComments('Top');
  49 | //         await moba.ugBuildPage.loadAllComments();
  50 | 
  51 | //         await expect
  52 | //             .poll(async () => {
  53 | //                 const upvotedPosition = await commentPosition(textComment);
  54 | //                 const newerPosition = await commentPosition(newerComment);
  55 | //                 return upvotedPosition !== -1 && newerPosition !== -1 && upvotedPosition < newerPosition;
  56 | //             })
  57 | //             .toBe(true);
  58 | //         await expect
  59 | //             .poll(async () => {
  60 | //                 const ratings = await moba.ugBuildPage.getCommentRatings();
  61 | //                 return ratings.every((rating, i) => i === 0 || ratings[i - 1] >= rating);
  62 | //             })
  63 | //             .toBe(true);
  64 | //     } finally {
  65 | //         // the newest comment is always on the first page in "Newest" order
  66 | //         await moba.ugBuildPage.sortComments('Newest');
  67 | //         await moba.ugBuildPage.deleteComment(newerComment);
  68 | //     }
  69 | // });
  70 | 
  71 | //     test.describe('Delete Comment as Admin', () => {
  72 |     
  73 | //     test('Delete comment of another user', async ({ page, apiAuthAdmin }) => {
  74 | //         await page.goto(BUILD_URL);
  75 | //         const comment = page.getByText('Num 5-5', { exact: true });
  76 | //         await expect(comment).toBeVisible();
  77 | 
  78 | //         const commentContainer = comment.locator(
  79 | //             'xpath=ancestor::*[.//button[@aria-label="More actions"]][1]',
  80 | //         );
  81 | //         await commentContainer.getByRole('button', { name: 'More actions' }).click();
  82 | //         await page.getByRole('menuitem', { name: 'Admin Delete' }).click();
  83 | 
  84 | //         const deleteDialog = page.getByRole('dialog');
  85 | //         await expect(deleteDialog).toBeVisible();
  86 | //         await expect(deleteDialog.getByRole('button', { name: 'Delete' })).toBeEnabled();
  87 | //         await deleteDialog.getByRole('button', { name: 'Delete' }).click();
  88 | 
  89 | //         await expect(comment).toHaveCount(0);
  90 | //     });
  91 | // });
```