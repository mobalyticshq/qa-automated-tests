# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check ad blocks for regular user - Destiny 2 in mobile at 360x780 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:9:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#destiny-2-video-all-pages-mobile').or(locator('#destiny-2-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#destiny-2-video-all-pages-mobile').or(locator('#destiny-2-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273ab094967fb2c
  - text: Performance and Security by
  - link "Cloudflare, opens in a new tab":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
    - text: Cloudflare
  - link "Privacy, opens in a new tab":
    - /url: https://www.cloudflare.com/privacypolicy/
    - text: Privacy
```

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#web-destiny-2-display-footer-m').or(locator('#destiny-2-nitro-anchor-mobile'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-destiny-2-display-footer-m').or(locator('#destiny-2-nitro-anchor-mobile'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273ab094967fb2c
  - text: Performance and Security by
  - link "Cloudflare, opens in a new tab":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
    - text: Cloudflare
  - link "Privacy, opens in a new tab":
    - /url: https://www.cloudflare.com/privacypolicy/
    - text: Privacy
```

# Test source

```ts
  336 |                 .not.toBeVisible();
  337 |             });
  338 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  339 |               await expect
  340 |                 .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  341 |                 .not.toBeVisible();
  342 |             });
  343 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  344 |               await expect
  345 |                 .soft(
  346 |                   page
  347 |                     .locator('#web-marvel-rivals-display-footer-m')
  348 |                     .or(page.locator('#marvel-rivals-nitro-anchor-mobile'))
  349 |                 )
  350 |                 .toBeAttached();
  351 |             });
  352 |             break;
  353 |           case 'Deadlock':
  354 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  355 |               await expect
  356 |                 .soft(page.locator('#deadlock-video-all-pages-mobile').or(page.locator('#deadlock-nitro-video')))
  357 |                 .toBeAttached();
  358 |             });
  359 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  360 |               await expect
  361 |                 .soft(
  362 |                   page
  363 |                     .locator('#deadlock-display-all-pages')
  364 |                     .or(page.locator('#deadlock-nitro-l'))
  365 |                     .or(page.locator('#deadlock-nitro-3'))
  366 |                     .first()
  367 |                 )
  368 |                 .not.toBeVisible();
  369 |             });
  370 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  371 |               await expect
  372 |                 .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  373 |                 .not.toBeVisible();
  374 |             });
  375 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  376 |               await expect
  377 |                 .soft(page.locator('#web-deadlock-display-footer-m').or(page.locator('#deadlock-nitro-anchor-mobile')))
  378 |                 .toBeAttached();
  379 |             });
  380 |             break;
  381 |           case 'Diablo 4':
  382 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  383 |               await expect
  384 |                 .soft(page.locator('#diablo-4-video-all-pages-mobile').or(page.locator('#diablo-4-nitro-video')))
  385 |                 .toBeAttached();
  386 |             });
  387 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  388 |               await expect
  389 |                 .soft(
  390 |                   page
  391 |                     .locator('#diablo-4-display-all-pages')
  392 |                     .or(page.locator('#diablo-4-nitro-l'))
  393 |                     .or(page.locator('#diablo-4-nitro-3'))
  394 |                     .first()
  395 |                 )
  396 |                 .not.toBeVisible();
  397 |             });
  398 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  399 |               await expect
  400 |                 .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
  401 |                 .not.toBeVisible();
  402 |             });
  403 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  404 |               await expect
  405 |                 .soft(page.locator('#web-diablo-4-display-footer-m').or(page.locator('#diablo-4-nitro-anchor-mobile')))
  406 |                 .toBeAttached();
  407 |             });
  408 |             break;
  409 |           case 'Destiny 2':
  410 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  411 |               await expect
  412 |                 .soft(page.locator('#destiny-2-video-all-pages-mobile').or(page.locator('#destiny-2-nitro-video')))
  413 |                 .toBeAttached();
  414 |             });
  415 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  416 |               await expect
  417 |                 .soft(
  418 |                   page
  419 |                     .locator('#destiny-2-display-all-pages')
  420 |                     .or(page.locator('#destiny-2-nitro-l'))
  421 |                     .or(page.locator('#destiny-2-nitro-3'))
  422 |                     .first()
  423 |                 )
  424 |                 .not.toBeVisible();
  425 |             });
  426 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  427 |               await expect
  428 |                 .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
  429 |                 .not.toBeVisible();
  430 |             });
  431 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  432 |               await expect
  433 |                 .soft(
  434 |                   page.locator('#web-destiny-2-display-footer-m').or(page.locator('#destiny-2-nitro-anchor-mobile'))
  435 |                 )
> 436 |                 .toBeAttached();
      |                  ^ Error: expect(locator).toBeAttached() failed
  437 |             });
  438 |             break;
  439 |           case 'Borderlands 4':
  440 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  441 |               await expect
  442 |                 .soft(page.locator('#bl4-video-all-pages-mobile').or(page.locator('#borderlands-4-nitro-video')))
  443 |                 .toBeAttached();
  444 |             });
  445 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  446 |               await expect
  447 |                 .soft(
  448 |                   page
  449 |                     .locator('#bl4-display-all-pages')
  450 |                     .or(page.locator('#borderlands-4-nitro-l'))
  451 |                     .or(page.locator('#borderlands-4-nitro-3'))
  452 |                     .first()
  453 |                 )
  454 |                 .not.toBeVisible();
  455 |             });
  456 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  457 |               await expect
  458 |                 .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
  459 |                 .not.toBeVisible();
  460 |             });
  461 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  462 |               await expect
  463 |                 .soft(
  464 |                   page
  465 |                     .locator('#web-borderlands-4-display-footer-m')
  466 |                     .or(page.locator('#borderlands-4-nitro-anchor-mobile'))
  467 |                 )
  468 |                 .toBeAttached();
  469 |             });
  470 |             break;
  471 |           case 'Hades 2':
  472 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  473 |               await expect
  474 |                 .soft(page.locator('#hades-2-video-all-pages-mobile').or(page.locator('#hades-2-nitro-video')))
  475 |                 .toBeAttached();
  476 |             });
  477 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  478 |               await expect
  479 |                 .soft(
  480 |                   page
  481 |                     .locator('#hades-2-display-all-pages')
  482 |                     .or(page.locator('#hades-2-nitro-l'))
  483 |                     .or(page.locator('#hades-2-nitro-3'))
  484 |                     .first()
  485 |                 )
  486 |                 .not.toBeVisible();
  487 |             });
  488 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  489 |               await expect
  490 |                 .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  491 |                 .not.toBeVisible();
  492 |             });
  493 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  494 |               await expect
  495 |                 .soft(page.locator('#web-hades-2-display-footer-m').or(page.locator('#hades-2-nitro-anchor-mobile')))
  496 |                 .toBeAttached();
  497 |             });
  498 |             break;
  499 |           case 'Endfield':
  500 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  501 |               await expect
  502 |                 .soft(
  503 |                   page.locator('#endfield-video-all-pages-mobile').or(page.locator('#arknights-endfield-nitro-video'))
  504 |                 )
  505 |                 .toBeAttached();
  506 |             });
  507 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  508 |               await expect
  509 |                 .soft(
  510 |                   page
  511 |                     .locator('#endfield-display-all-pages')
  512 |                     .or(page.locator('#arknights-endfield-nitro-l'))
  513 |                     .or(page.locator('#arknights-endfield-nitro-3'))
  514 |                     .first()
  515 |                 )
  516 |                 .not.toBeVisible();
  517 |             });
  518 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  519 |               await expect
  520 |                 .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
  521 |                 .not.toBeVisible();
  522 |             });
  523 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  524 |               await expect
  525 |                 .soft(
  526 |                   page
  527 |                     .locator('#web-arknights-endfield-display-footer-m')
  528 |                     .or(page.locator('#arknights-endfield-nitro-anchor-mobile'))
  529 |                 )
  530 |                 .toBeAttached();
  531 |             });
  532 |             break;
  533 |           case 'Marathon':
  534 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  535 |               await expect
  536 |                 .soft(page.locator('#marathon-video-all-pages-mobile').or(page.locator('#marathon-nitro-video')))
```