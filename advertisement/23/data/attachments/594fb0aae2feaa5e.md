# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-unauthorized-user.test.js >> Verify ad blocks for guest user >> Check video block & footer banner for unauthorized user - Val in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-unauthorized-user.test.js:1234:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#valorant-video-all-pages').or(locator('#valorant-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#valorant-video-all-pages').or(locator('#valorant-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad970c5ec5706a
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

Locator: locator('#web-valorant-display-footer-d').or(locator('#valorant-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-valorant-display-footer-d').or(locator('#valorant-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad970c5ec5706a
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
  1264 |               .not.toBeVisible();
  1265 |           });
  1266 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1267 |             await expect
  1268 |               .soft(
  1269 |                 page.locator('#slay-the-spire-2-display-small-all-pages').or(page.locator('#slay-the-spire-2-nitro-m'))
  1270 |               )
  1271 |               .not.toBeVisible();
  1272 |           });
  1273 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1274 |             await expect
  1275 |               .soft(
  1276 |                 page
  1277 |                   .locator('#web-slay-the-spire-2-display-footer-d')
  1278 |                   .or(page.locator('#slay-the-spire-2-nitro-anchor'))
  1279 |               )
  1280 |               .toBeAttached();
  1281 |           });
  1282 |           break;
  1283 |         case 'LoL':
  1284 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1285 |             await expect.soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeAttached();
  1286 |           });
  1287 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1288 |             await expect
  1289 |               .soft(
  1290 |                 page
  1291 |                   .locator('#lol-display-all-pages')
  1292 |                   .or(page.locator('#lol-nitro-l'))
  1293 |                   .or(page.locator('#lol-nitro-3'))
  1294 |                   .first()
  1295 |               )
  1296 |               .not.toBeVisible();
  1297 |           });
  1298 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1299 |             await expect
  1300 |               .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  1301 |               .not.toBeVisible();
  1302 |           });
  1303 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1304 |             await expect
  1305 |               .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
  1306 |               .toBeAttached();
  1307 |           });
  1308 |           break;
  1309 |         case 'ZZZ':
  1310 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1311 |             await expect
  1312 |               .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
  1313 |               .toBeVisible();
  1314 |           });
  1315 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1316 |             await expect
  1317 |               .soft(
  1318 |                 page
  1319 |                   .locator('#zzz-display-all-pages')
  1320 |                   .or(page.locator('#zzz-nitro-l'))
  1321 |                   .or(page.locator('#zzz-nitro-3'))
  1322 |                   .first()
  1323 |               )
  1324 |               .not.toBeVisible();
  1325 |           });
  1326 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1327 |             await expect
  1328 |               .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
  1329 |               .not.toBeVisible();
  1330 |           });
  1331 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1332 |             await expect
  1333 |               .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
  1334 |               .toBeAttached();
  1335 |           });
  1336 |           break;
  1337 |         case 'Val':
  1338 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1339 |             await expect
  1340 |               .soft(
  1341 |                 page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video').locator('xpath=..'))
  1342 |               )
  1343 |               .toBeVisible();
  1344 |           });
  1345 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1346 |             await expect
  1347 |               .soft(
  1348 |                 page
  1349 |                   .locator('#valorant-display-all-pages')
  1350 |                   .or(page.locator('#valorant-nitro-l'))
  1351 |                   .or(page.locator('#valorant-nitro-3'))
  1352 |                   .first()
  1353 |               )
  1354 |               .not.toBeVisible();
  1355 |           });
  1356 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1357 |             await expect
  1358 |               .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
  1359 |               .not.toBeVisible();
  1360 |           });
  1361 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1362 |             await expect
  1363 |               .soft(page.locator('#web-valorant-display-footer-d').or(page.locator('#valorant-nitro-anchor')))
> 1364 |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  1365 |           });
  1366 |           break;
  1367 |         case 'TFT':
  1368 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1369 |             await expect
  1370 |               .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
  1371 |               .toBeVisible();
  1372 |           });
  1373 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1374 |             await expect
  1375 |               .soft(
  1376 |                 page
  1377 |                   .locator('#tft-display-all-pages')
  1378 |                   .or(page.locator('#tft-nitro-l'))
  1379 |                   .or(page.locator('#tft-nitro-3'))
  1380 |                   .first()
  1381 |               )
  1382 |               .not.toBeVisible();
  1383 |           });
  1384 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1385 |             await expect
  1386 |               .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
  1387 |               .not.toBeVisible();
  1388 |           });
  1389 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1390 |             await expect
  1391 |               .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
  1392 |               .toBeAttached();
  1393 |           });
  1394 |           break;
  1395 |         case 'PoE':
  1396 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1397 |             await expect
  1398 |               .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video').locator('xpath=..')))
  1399 |               .toBeVisible();
  1400 |           });
  1401 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1402 |             await expect
  1403 |               .soft(
  1404 |                 page
  1405 |                   .locator('#poe-display-all-pages')
  1406 |                   .or(page.locator('#poe-nitro-l'))
  1407 |                   .or(page.locator('#poe-nitro-3'))
  1408 |                   .first()
  1409 |               )
  1410 |               .not.toBeVisible();
  1411 |           });
  1412 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1413 |             await expect
  1414 |               .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
  1415 |               .not.toBeVisible();
  1416 |           });
  1417 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1418 |             await expect
  1419 |               .soft(page.locator('#web-poe-display-footer-d').or(page.locator('#poe-nitro-anchor')))
  1420 |               .toBeAttached();
  1421 |           });
  1422 |           break;
  1423 |         case 'PoE 2':
  1424 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1425 |             await expect
  1426 |               .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video').locator('xpath=..')))
  1427 |               .toBeVisible();
  1428 |           });
  1429 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1430 |             await expect
  1431 |               .soft(
  1432 |                 page
  1433 |                   .locator('#poe-2-display-all-pages')
  1434 |                   .or(page.locator('#poe-2-nitro-l'))
  1435 |                   .or(page.locator('#poe-2-nitro-3'))
  1436 |                   .first()
  1437 |               )
  1438 |               .not.toBeVisible();
  1439 |           });
  1440 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1441 |             await expect
  1442 |               .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
  1443 |               .not.toBeVisible();
  1444 |           });
  1445 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1446 |             await expect
  1447 |               .soft(page.locator('#web-poe-2-display-footer-d').or(page.locator('#poe-2-nitro-anchor')))
  1448 |               .toBeAttached();
  1449 |           });
  1450 |           break;
  1451 |         case 'The Bazaar':
  1452 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1453 |             await expect
  1454 |               .soft(
  1455 |                 page
  1456 |                   .locator('#the-bazaar-video-all-pages')
  1457 |                   .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
  1458 |               )
  1459 |               .toBeVisible();
  1460 |           });
  1461 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1462 |             await expect
  1463 |               .soft(
  1464 |                 page
```