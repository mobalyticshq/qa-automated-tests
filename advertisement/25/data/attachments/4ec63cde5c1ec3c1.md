# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-adFree-user.test.js >> Verify ad blocks for ad-free user >> Check advertisement blocks for ad free user - TFT in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-adFree-user.test.js:1258:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#tft-video-all-pages').or(locator('#tft-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#tft-video-all-pages').or(locator('#tft-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a321575a7fd3ed3c
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

Locator: locator('#web-tft-display-footer-d').or(locator('#tft-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-tft-display-footer-d').or(locator('#tft-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a321575a7fd3ed3c
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
  1326 |                     .first()
  1327 |                 )
  1328 |                 .not.toBeVisible();
  1329 |             });
  1330 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1331 |               await expect
  1332 |                 .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  1333 |                 .not.toBeVisible();
  1334 |             });
  1335 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1336 |               await expect
  1337 |                 .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
  1338 |                 .toBeAttached();
  1339 |             });
  1340 |             break;
  1341 |           case 'ZZZ':
  1342 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1343 |               await expect
  1344 |                 .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
  1345 |                 .not.toBeVisible();
  1346 |             });
  1347 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1348 |               await expect
  1349 |                 .soft(
  1350 |                   page
  1351 |                     .locator('#zzz-display-all-pages')
  1352 |                     .or(page.locator('#zzz-nitro-l'))
  1353 |                     .or(page.locator('#zzz-nitro-3'))
  1354 |                     .first()
  1355 |                 )
  1356 |                 .not.toBeVisible();
  1357 |             });
  1358 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1359 |               await expect
  1360 |                 .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
  1361 |                 .not.toBeVisible();
  1362 |             });
  1363 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1364 |               await expect
  1365 |                 .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
  1366 |                 .not.toBeVisible();
  1367 |             });
  1368 |             break;
  1369 |           case 'Val':
  1370 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1371 |               await expect
  1372 |                 .soft(
  1373 |                   page
  1374 |                     .locator('#valorant-video-all-pages')
  1375 |                     .or(page.locator('#valorant-nitro-video').locator('xpath=..'))
  1376 |                 )
  1377 |                 .not.toBeVisible();
  1378 |             });
  1379 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1380 |               await expect
  1381 |                 .soft(
  1382 |                   page
  1383 |                     .locator('#valorant-display-all-pages')
  1384 |                     .or(page.locator('#valorant-nitro-l'))
  1385 |                     .or(page.locator('#valorant-nitro-3'))
  1386 |                     .first()
  1387 |                 )
  1388 |                 .not.toBeVisible();
  1389 |             });
  1390 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1391 |               await expect
  1392 |                 .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
  1393 |                 .not.toBeVisible();
  1394 |             });
  1395 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1396 |               await expect
  1397 |                 .soft(page.locator('#web-valorant-display-footer-d').or(page.locator('#valorant-nitro-anchor')))
  1398 |                 .not.toBeVisible();
  1399 |             });
  1400 |             break;
  1401 |           case 'TFT':
  1402 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1403 |               await expect
  1404 |                 .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
  1405 |                 .toBeVisible();
  1406 |             });
  1407 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1408 |               await expect
  1409 |                 .soft(
  1410 |                   page
  1411 |                     .locator('#tft-display-all-pages')
  1412 |                     .or(page.locator('#tft-nitro-l'))
  1413 |                     .or(page.locator('#tft-nitro-3'))
  1414 |                     .first()
  1415 |                 )
  1416 |                 .not.toBeVisible();
  1417 |             });
  1418 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1419 |               await expect
  1420 |                 .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
  1421 |                 .not.toBeVisible();
  1422 |             });
  1423 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1424 |               await expect
  1425 |                 .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
> 1426 |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  1427 |             });
  1428 |             break;
  1429 |           case 'PoE':
  1430 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1431 |               await expect
  1432 |                 .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
  1433 |                 .not.toBeVisible();
  1434 |             });
  1435 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1436 |               await expect
  1437 |                 .soft(
  1438 |                   page
  1439 |                     .locator('#poe-display-all-pages')
  1440 |                     .or(page.locator('#poe-nitro-l'))
  1441 |                     .or(page.locator('#poe-nitro-3'))
  1442 |                     .first()
  1443 |                 )
  1444 |                 .not.toBeVisible();
  1445 |             });
  1446 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1447 |               await expect
  1448 |                 .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
  1449 |                 .not.toBeVisible();
  1450 |             });
  1451 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1452 |               await expect
  1453 |                 .soft(page.locator('#web-poe-display-footer-d').or(page.locator('#poe-nitro-anchor')))
  1454 |                 .not.toBeVisible();
  1455 |             });
  1456 |             break;
  1457 |           case 'PoE 2':
  1458 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1459 |               await expect
  1460 |                 .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
  1461 |                 .not.toBeVisible();
  1462 |             });
  1463 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1464 |               await expect
  1465 |                 .soft(
  1466 |                   page
  1467 |                     .locator('#poe-2-display-all-pages')
  1468 |                     .or(page.locator('#poe-2-nitro-l'))
  1469 |                     .or(page.locator('#poe-2-nitro-3'))
  1470 |                     .first()
  1471 |                 )
  1472 |                 .not.toBeVisible();
  1473 |             });
  1474 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1475 |               await expect
  1476 |                 .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
  1477 |                 .not.toBeVisible();
  1478 |             });
  1479 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1480 |               await expect
  1481 |                 .soft(page.locator('#web-poe-2-display-footer-d').or(page.locator('#poe-2-nitro-anchor')))
  1482 |                 .not.toBeVisible();
  1483 |             });
  1484 |             break;
  1485 |           case 'The Bazaar':
  1486 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1487 |               await expect
  1488 |                 .soft(
  1489 |                   page
  1490 |                     .locator('#the-bazaar-video-all-pages')
  1491 |                     .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
  1492 |                 )
  1493 |                 .not.toBeVisible();
  1494 |             });
  1495 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1496 |               await expect
  1497 |                 .soft(
  1498 |                   page
  1499 |                     .locator('#the-bazaar-display-all-pages')
  1500 |                     .or(page.locator('#the-bazaar-nitro-l'))
  1501 |                     .or(page.locator('#the-bazaar-nitro-3'))
  1502 |                     .first()
  1503 |                 )
  1504 |                 .not.toBeVisible();
  1505 |             });
  1506 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1507 |               await expect
  1508 |                 .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  1509 |                 .not.toBeVisible();
  1510 |             });
  1511 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1512 |               await expect
  1513 |                 .soft(page.locator('#web-the-bazaar-display-footer-d').or(page.locator('#the-bazaar-nitro-anchor')))
  1514 |                 .not.toBeVisible();
  1515 |             });
  1516 |             break;
  1517 |           case 'Monster Hunter Wilds':
  1518 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1519 |               await expect
  1520 |                 .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
  1521 |                 .not.toBeVisible();
  1522 |             });
  1523 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1524 |               await expect
  1525 |                 .soft(
  1526 |                   page
```