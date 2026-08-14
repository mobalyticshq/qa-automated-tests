# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check video block & footer banner for regular user - Nightreign in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:1258:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#elden-ring-nightreign-video-all-pages').or(locator('#elden-ring-nightreign-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#elden-ring-nightreign-video-all-pages').or(locator('#elden-ring-nightreign-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad5e79ba2d2432
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

Locator: locator('#web-elden-ring-nightreign-display-footer-d').or(locator('#elden-ring-nightreign-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-elden-ring-nightreign-display-footer-d').or(locator('#elden-ring-nightreign-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad5e79ba2d2432
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
  1481 |                 .toBeAttached();
  1482 |             });
  1483 |             break;
  1484 |           case 'The Bazaar':
  1485 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1486 |               await expect
  1487 |                 .soft(
  1488 |                   page
  1489 |                     .locator('#the-bazaar-video-all-pages')
  1490 |                     .or(page.locator('#the-bazaar-nitro-video').locator('xpath=..'))
  1491 |                 )
  1492 |                 .toBeVisible();
  1493 |             });
  1494 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1495 |               await expect
  1496 |                 .soft(
  1497 |                   page
  1498 |                     .locator('#the-bazaar-display-all-pages')
  1499 |                     .or(page.locator('#the-bazaar-nitro-l'))
  1500 |                     .or(page.locator('#the-bazaar-nitro-3'))
  1501 |                     .first()
  1502 |                 )
  1503 |                 .not.toBeVisible();
  1504 |             });
  1505 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1506 |               await expect
  1507 |                 .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  1508 |                 .not.toBeVisible();
  1509 |             });
  1510 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1511 |               await expect
  1512 |                 .soft(page.locator('#web-the-bazaar-display-footer-d').or(page.locator('#the-bazaar-nitro-anchor')))
  1513 |                 .toBeAttached();
  1514 |             });
  1515 |             break;
  1516 |           case 'Monster Hunter Wilds':
  1517 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1518 |               await expect
  1519 |                 .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
  1520 |                 .toBeVisible();
  1521 |             });
  1522 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1523 |               await expect
  1524 |                 .soft(
  1525 |                   page
  1526 |                     .locator('#mhw-display-all-pages')
  1527 |                     .or(page.locator('#mhw-nitro-l'))
  1528 |                     .or(page.locator('#mhw-nitro-3'))
  1529 |                     .first()
  1530 |                 )
  1531 |                 .not.toBeVisible();
  1532 |             });
  1533 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1534 |               await expect
  1535 |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
  1536 |                 .not.toBeVisible();
  1537 |             });
  1538 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1539 |               await expect
  1540 |                 .soft(page.locator('#web-mhw-display-footer-d').or(page.locator('#mhw-nitro-anchor')))
  1541 |                 .toBeAttached();
  1542 |             });
  1543 |             break;
  1544 |           case 'Nightreign':
  1545 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1546 |               await expect
  1547 |                 .soft(
  1548 |                   page
  1549 |                     .locator('#elden-ring-nightreign-video-all-pages')
  1550 |                     .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
  1551 |                 )
  1552 |                 .toBeVisible();
  1553 |             });
  1554 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1555 |               await expect
  1556 |                 .soft(
  1557 |                   page
  1558 |                     .locator('#elden-ring-nightreign-display-all-pages')
  1559 |                     .or(page.locator('#elden-ring-nightreign-nitro-l'))
  1560 |                     .or(page.locator('#elden-ring-nightreign-nitro-3'))
  1561 |                     .first()
  1562 |                 )
  1563 |                 .not.toBeVisible();
  1564 |             });
  1565 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1566 |               await expect
  1567 |                 .soft(
  1568 |                   page
  1569 |                     .locator('#elden-ring-nightreign-display-small-all-pages')
  1570 |                     .or(page.locator('#elden-ring-nightreign-nitro-m'))
  1571 |                 )
  1572 |                 .not.toBeVisible();
  1573 |             });
  1574 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1575 |               await expect
  1576 |                 .soft(
  1577 |                   page
  1578 |                     .locator('#web-elden-ring-nightreign-display-footer-d')
  1579 |                     .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
  1580 |                 )
> 1581 |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  1582 |             });
  1583 |             break;
  1584 |           case 'Riftbound':
  1585 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1586 |               await expect
  1587 |                 .soft(
  1588 |                   page
  1589 |                     .locator('#riftbound-video-all-pages')
  1590 |                     .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  1591 |                 )
  1592 |                 .toBeVisible();
  1593 |             });
  1594 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1595 |               await expect
  1596 |                 .soft(
  1597 |                   page
  1598 |                     .locator('#riftbound-display-all-pages')
  1599 |                     .or(page.locator('#riftbound-nitro-l'))
  1600 |                     .or(page.locator('#riftbound-nitro-3'))
  1601 |                     .first()
  1602 |                 )
  1603 |                 .not.toBeVisible();
  1604 |             });
  1605 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1606 |               await expect
  1607 |                 .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  1608 |                 .not.toBeVisible();
  1609 |             });
  1610 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1611 |               await expect
  1612 |                 .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
  1613 |                 .toBeAttached();
  1614 |             });
  1615 |             break;
  1616 |           case '2XKO':
  1617 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1618 |               await expect
  1619 |                 .soft(
  1620 |                   page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..'))
  1621 |                 )
  1622 |                 .toBeVisible();
  1623 |             });
  1624 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1625 |               await expect
  1626 |                 .soft(
  1627 |                   page
  1628 |                     .locator('#xko-display-all-pages')
  1629 |                     .or(page.locator('#\\32 xko-nitro-l'))
  1630 |                     .or(page.locator('#\\32 xko-nitro-3'))
  1631 |                     .first()
  1632 |                 )
  1633 |                 .not.toBeVisible();
  1634 |             });
  1635 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1636 |               await expect
  1637 |                 .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  1638 |                 .not.toBeVisible();
  1639 |             });
  1640 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1641 |               await expect
  1642 |                 .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
  1643 |                 .toBeAttached();
  1644 |             });
  1645 |             break;
  1646 |           case 'Marvel Rivals':
  1647 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1648 |               await expect
  1649 |                 .soft(
  1650 |                   page
  1651 |                     .locator('#marvel-rivals-video-all-pages')
  1652 |                     .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  1653 |                 )
  1654 |                 .toBeVisible();
  1655 |             });
  1656 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1657 |               await expect
  1658 |                 .soft(
  1659 |                   page
  1660 |                     .locator('#marvel-rivals-display-all-pages')
  1661 |                     .or(page.locator('#marvel-rivals-nitro-l'))
  1662 |                     .or(page.locator('#marvel-rivals-nitro-3'))
  1663 |                     .first()
  1664 |                 )
  1665 |                 .not.toBeVisible();
  1666 |             });
  1667 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1668 |               await expect
  1669 |                 .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  1670 |                 .not.toBeVisible();
  1671 |             });
  1672 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1673 |               await expect
  1674 |                 .soft(
  1675 |                   page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor'))
  1676 |                 )
  1677 |                 .toBeAttached();
  1678 |             });
  1679 |             break;
  1680 |           case 'Deadlock':
  1681 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
```