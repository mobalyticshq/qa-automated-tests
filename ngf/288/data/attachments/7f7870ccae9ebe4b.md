# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating ST Pages >> Create a structure page on 2xko project
- Location: e2e-tests/ngf.test.js:77:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
Call log:
  - waiting for getByTestId('admin-page-st-document-item-card').filter({ hasText: '/qa-automation-st-page-12ec806f-5230-43a2-a484-1bd91bf75584' }) to be hidden
    - locator resolved to visible <div data-testid="admin-page-st-document-item-card" class="xh8yej3 x78zum5 x1q0g3np x1w9t9sz x6s0dn4 x1slt461 x1nhvcw1 x1a02dak x1vctgw6 x17gf9bc x614542 x1hv8zah xe8ttls x139jznd x1ypdohk x9zwv14">…</div>

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /2xko
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
          - link "Valorant VAL" [ref=e77] [cursor=pointer]:
            - /url: https://mobalytics.gg/valorant
            - generic [ref=e79]:
              - img "Valorant" [ref=e80]
              - generic [ref=e81]: VAL
          - link "Neverness to Everness NTE New" [ref=e83] [cursor=pointer]:
            - /url: https://mobalytics.gg/neverness-to-everness
            - generic [ref=e85]:
              - img "Neverness to Everness" [ref=e86]
              - generic [ref=e87]: NTE
              - generic [ref=e89]: New
          - 'link "Arknights: Endfield Endfield" [ref=e91] [cursor=pointer]':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic [ref=e93]:
              - 'img "Arknights: Endfield" [ref=e94]'
              - generic [ref=e95]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e97] [cursor=pointer]:
            - /url: https://mobalytics.gg/elden-ring-nightreign
            - generic [ref=e99]:
              - img "Elden Ring Nightreign" [ref=e100]
              - generic [ref=e101]: Nightreign
          - button [ref=e102] [cursor=pointer]:
            - img [ref=e103]
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
      - generic [ref=e104]:
        - generic [ref=e105]:
          - link "DOWNLOAD APP" [ref=e106] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-2xko&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e108]:
              - img [ref=e109]
              - text: DOWNLOAD APP
          - link "News" [ref=e111] [cursor=pointer]:
            - /url: /news
            - generic [ref=e112]: News
        - generic [ref=e113]:
          - button "Remove Ads" [ref=e114] [cursor=pointer]
          - generic [ref=e115]:
            - link "A admin_auto_tests+ns@mobalyticshq.com" [ref=e116] [cursor=pointer]:
              - /url: /2xko/profile/rich-flame-e3lwjq
              - generic [ref=e118]:
                - generic [ref=e120]: A
                - generic [ref=e122]: admin_auto_tests+ns@mobalyticshq.com
            - button [ref=e124] [cursor=pointer]:
              - img [ref=e126]
            - button "Theme" [ref=e128] [cursor=pointer]:
              - img "Theme" [ref=e130]
      - generic [ref=e132]:
        - link "Home" [ref=e135] [cursor=pointer]:
          - /url: /2xko
          - img "Home" [ref=e137]
        - link "Champions" [ref=e140] [cursor=pointer]:
          - /url: /2xko/champions
          - img "Champions" [ref=e142]
        - link "Tier List" [ref=e145] [cursor=pointer]:
          - /url: /2xko/tier-lists
          - img "Tier List" [ref=e147]
        - link "Guides" [ref=e150] [cursor=pointer]:
          - /url: /2xko/guides
          - img "Guides" [ref=e152]
      - generic [ref=e154]:
        - main [ref=e155]:
          - generic [ref=e156]:
            - generic [ref=e157]:
              - heading "Structure Pages" [level=1] [ref=e158]
              - link "Create Page" [ref=e160] [cursor=pointer]:
                - /url: /2xko/planner/st
                - img [ref=e161]
                - generic [ref=e162]: Create Page
            - generic [ref=e163]:
              - generic [ref=e164] [cursor=pointer]:
                - generic [ref=e166]: /champions
                - generic [ref=e167]:
                  - link "Edit" [ref=e168]:
                    - /url: /2xko/champions
                    - generic [ref=e169]: Edit
                  - button [ref=e170]:
                    - img [ref=e171]
              - generic [ref=e172] [cursor=pointer]:
                - generic [ref=e174]: /champions/ahri
                - generic [ref=e175]:
                  - link "Edit" [ref=e176]:
                    - /url: /2xko/champions/ahri
                    - generic [ref=e177]: Edit
                  - button [ref=e178]:
                    - img [ref=e179]
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e182]: /champions/akali
                - generic [ref=e183]:
                  - link "Edit" [ref=e184]:
                    - /url: /2xko/champions/akali
                    - generic [ref=e185]: Edit
                  - button [ref=e186]:
                    - img [ref=e187]
              - generic [ref=e188] [cursor=pointer]:
                - generic [ref=e190]: /champions/blitzcrank
                - generic [ref=e191]:
                  - link "Edit" [ref=e192]:
                    - /url: /2xko/champions/blitzcrank
                    - generic [ref=e193]: Edit
                  - button [ref=e194]:
                    - img [ref=e195]
              - generic [ref=e196] [cursor=pointer]:
                - generic [ref=e198]: /champions/braum
                - generic [ref=e199]:
                  - link "Edit" [ref=e200]:
                    - /url: /2xko/champions/braum
                    - generic [ref=e201]: Edit
                  - button [ref=e202]:
                    - img [ref=e203]
              - generic [ref=e204] [cursor=pointer]:
                - generic [ref=e206]: /champions/caitlyn
                - generic [ref=e207]:
                  - link "Edit" [ref=e208]:
                    - /url: /2xko/champions/caitlyn
                    - generic [ref=e209]: Edit
                  - button [ref=e210]:
                    - img [ref=e211]
              - generic [ref=e212] [cursor=pointer]:
                - generic [ref=e214]: /champions/darius
                - generic [ref=e215]:
                  - link "Edit" [ref=e216]:
                    - /url: /2xko/champions/darius
                    - generic [ref=e217]: Edit
                  - button [ref=e218]:
                    - img [ref=e219]
              - generic [ref=e220] [cursor=pointer]:
                - generic [ref=e222]: /champions/ekko
                - generic [ref=e223]:
                  - link "Edit" [ref=e224]:
                    - /url: /2xko/champions/ekko
                    - generic [ref=e225]: Edit
                  - button [ref=e226]:
                    - img [ref=e227]
              - generic [ref=e228] [cursor=pointer]:
                - generic [ref=e230]: /champions/illaoi
                - generic [ref=e231]:
                  - link "Edit" [ref=e232]:
                    - /url: /2xko/champions/illaoi
                    - generic [ref=e233]: Edit
                  - button [ref=e234]:
                    - img [ref=e235]
              - generic [ref=e236] [cursor=pointer]:
                - generic [ref=e238]: /champions/jinx
                - generic [ref=e239]:
                  - link "Edit" [ref=e240]:
                    - /url: /2xko/champions/jinx
                    - generic [ref=e241]: Edit
                  - button [ref=e242]:
                    - img [ref=e243]
              - generic [ref=e244] [cursor=pointer]:
                - generic [ref=e246]: /champions/senna
                - generic [ref=e247]:
                  - link "Edit" [ref=e248]:
                    - /url: /2xko/champions/senna
                    - generic [ref=e249]: Edit
                  - button [ref=e250]:
                    - img [ref=e251]
              - generic [ref=e252] [cursor=pointer]:
                - generic [ref=e254]: /champions/teemo
                - generic [ref=e255]:
                  - link "Edit" [ref=e256]:
                    - /url: /2xko/champions/teemo
                    - generic [ref=e257]: Edit
                  - button [ref=e258]:
                    - img [ref=e259]
              - generic [ref=e260] [cursor=pointer]:
                - generic [ref=e262]: /champions/thresh
                - generic [ref=e263]:
                  - link "Edit" [ref=e264]:
                    - /url: /2xko/champions/thresh
                    - generic [ref=e265]: Edit
                  - button [ref=e266]:
                    - img [ref=e267]
              - generic [ref=e268] [cursor=pointer]:
                - generic [ref=e270]: /champions/vi
                - generic [ref=e271]:
                  - link "Edit" [ref=e272]:
                    - /url: /2xko/champions/vi
                    - generic [ref=e273]: Edit
                  - button [ref=e274]:
                    - img [ref=e275]
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e278]: /champions/warwick
                - generic [ref=e279]:
                  - link "Edit" [ref=e280]:
                    - /url: /2xko/champions/warwick
                    - generic [ref=e281]: Edit
                  - button [ref=e282]:
                    - img [ref=e283]
              - generic [ref=e284] [cursor=pointer]:
                - generic [ref=e286]: /champions/yasuo
                - generic [ref=e287]:
                  - link "Edit" [ref=e288]:
                    - /url: /2xko/champions/yasuo
                    - generic [ref=e289]: Edit
                  - button [ref=e290]:
                    - img [ref=e291]
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e294]: /guides
                - generic [ref=e295]:
                  - link "Edit" [ref=e296]:
                    - /url: /2xko/guides
                    - generic [ref=e297]: Edit
                  - button [ref=e298]:
                    - img [ref=e299]
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e302]: /home
                - generic [ref=e303]:
                  - link "Edit" [ref=e304]:
                    - /url: /2xko/home
                    - generic [ref=e305]: Edit
                  - button [ref=e306]:
                    - img [ref=e307]
              - generic [ref=e308] [cursor=pointer]:
                - generic [ref=e310]: /qa-check-static-data-not-delete
                - generic [ref=e311]:
                  - link "Edit" [ref=e312]:
                    - /url: /2xko/qa-check-static-data-not-delete
                    - generic [ref=e313]: Edit
                  - button [ref=e314]:
                    - img [ref=e315]
              - generic [ref=e316] [cursor=pointer]:
                - generic [ref=e318]: /tier-lists
                - generic [ref=e319]:
                  - link "Edit" [ref=e320]:
                    - /url: /2xko/tier-lists
                    - generic [ref=e321]: Edit
                  - button [ref=e322]:
                    - img [ref=e323]
        - complementary [ref=e329]:
          - generic [ref=e330]:
            - generic [ref=e332]:
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: Advertisement
                - generic [ref=e336]: Remove Ads
              - generic [ref=e340] [cursor=pointer]:
                - generic [ref=e341]: Remove all ads
                - generic [ref=e342]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e343]
            - generic [ref=e345]:
              - generic [ref=e347] [cursor=pointer]:
                - generic [ref=e348]: Advertisement
                - generic [ref=e349]: Remove Ads
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: Remove all ads
                - generic [ref=e355]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e356]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e360]:
    - banner [ref=e361]:
      - generic [ref=e362] [cursor=pointer]:
        - generic [ref=e363]: Advertisement
        - generic [ref=e364]: Remove Ads
    - generic [ref=e367] [cursor=pointer]:
      - generic [ref=e368]: Remove all ads
      - generic [ref=e369]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e370]
```

# Test source

```ts
  337 |       await moba.mainURLs.openAdminTFTPage();
  338 | 
  339 |       for (const pageName of pagesToCleanup) {
  340 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  341 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  342 | 
  343 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  344 |       }
  345 |     }
  346 |   },
  347 | 
  348 |   cleanupStValorantPages: async ({ page, apiAuthAdmin }, use) => {
  349 |     const moba = new Moba(page);
  350 |     await page.context().addCookies(apiAuthAdmin.cookies);
  351 |     const pagesToCleanup = [];
  352 | 
  353 |     const addPageForCleanup = (pageName) => {
  354 |       pagesToCleanup.push(pageName);
  355 |     };
  356 | 
  357 |     await use({ moba, addPageForCleanup });
  358 | 
  359 |     // Cleanup after test
  360 |     if (pagesToCleanup.length > 0) {
  361 |       await moba.mainURLs.openAdminValorantPage();
  362 | 
  363 |       for (const pageName of pagesToCleanup) {
  364 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  365 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  366 | 
  367 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  368 |       }
  369 |     }
  370 |   },
  371 | 
  372 |   cleanupStDestiny2Pages: async ({ page, apiAuthAdmin }, use) => {
  373 |     const moba = new Moba(page);
  374 |     await page.context().addCookies(apiAuthAdmin.cookies);
  375 |     const pagesToCleanup = [];
  376 | 
  377 |     const addPageForCleanup = (pageName) => {
  378 |       pagesToCleanup.push(pageName);
  379 |     };
  380 | 
  381 |     await use({ moba, addPageForCleanup });
  382 | 
  383 |     // Cleanup after test
  384 |     if (pagesToCleanup.length > 0) {
  385 |       await moba.mainURLs.openAdminDestiny2Page();
  386 | 
  387 |       for (const pageName of pagesToCleanup) {
  388 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  389 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  390 | 
  391 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  392 |       }
  393 |     }
  394 |   },
  395 | 
  396 |   cleanupStDiablo4Pages: async ({ page, apiAuthAdmin }, use) => {
  397 |     const moba = new Moba(page);
  398 |     await page.context().addCookies(apiAuthAdmin.cookies);
  399 |     const pagesToCleanup = [];
  400 | 
  401 |     const addPageForCleanup = (pageName) => {
  402 |       pagesToCleanup.push(pageName);
  403 |     };
  404 | 
  405 |     await use({ addPageForCleanup, moba });
  406 | 
  407 |     // Cleanup после теста
  408 |     if (pagesToCleanup.length > 0) {
  409 |       await moba.mainURLs.openAdminDiablo4Page();
  410 | 
  411 |       for (const pageName of pagesToCleanup) {
  412 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  413 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  414 | 
  415 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  416 |       }
  417 |     }
  418 |   },
  419 | 
  420 |   cleanupSt2xkoPages: async ({ page, apiAuthAdmin }, use) => {
  421 |     const moba = new Moba(page);
  422 |     await page.context().addCookies(apiAuthAdmin.cookies);
  423 |     const pagesToCleanup = [];
  424 | 
  425 |     const addPageForCleanup = (pageName) => {
  426 |       pagesToCleanup.push(pageName);
  427 |     };
  428 | 
  429 |     await use({ addPageForCleanup, moba });
  430 | 
  431 |     // Cleanup после теста
  432 |     if (pagesToCleanup.length > 0) {
  433 |       await moba.mainURLs.openAdmin2xkoPage();
  434 | 
  435 |       for (const pageName of pagesToCleanup) {
  436 |         await moba.stAdminPage.deleteStCardWidget(pageName);
> 437 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
      |                                                       ^ TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
  438 | 
  439 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  440 |       }
  441 |     }
  442 |   },
  443 | 
  444 |   cleanupStHades2Pages: async ({ page, apiAuthAdmin }, use) => {
  445 |     const moba = new Moba(page);
  446 |     await page.context().addCookies(apiAuthAdmin.cookies);
  447 |     const pagesToCleanup = [];
  448 | 
  449 |     const addPageForCleanup = (pageName) => {
  450 |       pagesToCleanup.push(pageName);
  451 |     };
  452 | 
  453 |     await use({ moba, addPageForCleanup });
  454 | 
  455 |     // Cleanup после теста
  456 |     if (pagesToCleanup.length > 0) {
  457 |       await moba.mainURLs.openAdminHades2Page();
  458 | 
  459 |       for (const pageName of pagesToCleanup) {
  460 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  461 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  462 | 
  463 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  464 |       }
  465 |     }
  466 |   },
  467 | 
  468 |   cleanupStBorderlands4Pages: async ({ page, apiAuthAdmin }, use) => {
  469 |     const moba = new Moba(page);
  470 |     await page.context().addCookies(apiAuthAdmin.cookies);
  471 |     const pagesToCleanup = [];
  472 | 
  473 |     const addPageForCleanup = (pageName) => {
  474 |       pagesToCleanup.push(pageName);
  475 |     };
  476 | 
  477 |     await use({ moba, addPageForCleanup });
  478 | 
  479 |     // Cleanup после теста
  480 |     if (pagesToCleanup.length > 0) {
  481 |       await moba.mainURLs.openAdminBorderlands4Page();
  482 | 
  483 |       for (const pageName of pagesToCleanup) {
  484 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  485 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  486 | 
  487 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  488 |       }
  489 |     }
  490 |   },
  491 | 
  492 |   cleanupStNightreignPages: async ({ page, apiAuthAdmin }, use) => {
  493 |     const moba = new Moba(page);
  494 |     await page.context().addCookies(apiAuthAdmin.cookies);
  495 |     const pagesToCleanup = [];
  496 | 
  497 |     const addPageForCleanup = (pageName) => {
  498 |       pagesToCleanup.push(pageName);
  499 |     };
  500 | 
  501 |     await use({ moba, addPageForCleanup });
  502 | 
  503 |     // Cleanup после теста
  504 |     if (pagesToCleanup.length > 0) {
  505 |       await moba.mainURLs.openAdminNightreignPage();
  506 | 
  507 |       for (const pageName of pagesToCleanup) {
  508 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  509 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  510 | 
  511 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  512 |       }
  513 |     }
  514 |   },
  515 | 
  516 |   cleanupStDeadlockPages: async ({ page, apiAuthAdmin }, use) => {
  517 |     const moba = new Moba(page);
  518 |     await page.context().addCookies(apiAuthAdmin.cookies);
  519 |     const pagesToCleanup = [];
  520 | 
  521 |     const addPageForCleanup = (pageName) => {
  522 |       pagesToCleanup.push(pageName);
  523 |     };
  524 | 
  525 |     await use({ moba, addPageForCleanup });
  526 | 
  527 |     // Cleanup после теста
  528 |     if (pagesToCleanup.length > 0) {
  529 |       await moba.mainURLs.openAdminDeadlockPage();
  530 | 
  531 |       for (const pageName of pagesToCleanup) {
  532 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  533 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  534 | 
  535 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  536 |       }
  537 |     }
```