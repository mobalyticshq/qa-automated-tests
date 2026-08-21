# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-unauthorized-user.test.js >> Verify ad blocks for guest user >> Check video block & footer banner for unauthorized user - Marvel Rivals in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-unauthorized-user.test.js:1235:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#marvel-rivals-video-all-pages').or(locator('#marvel-rivals-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#marvel-rivals-video-all-pages').or(locator('#marvel-rivals-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2e729826c9c6896
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

Locator: locator('#web-marvel-rivals-display-footer-d').or(locator('#marvel-rivals-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-marvel-rivals-display-footer-d').or(locator('#marvel-rivals-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2e729826c9c6896
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
  1541 |           });
  1542 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1543 |             await expect
  1544 |               .soft(
  1545 |                 page
  1546 |                   .locator('#web-elden-ring-nightreign-display-footer-d')
  1547 |                   .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
  1548 |               )
  1549 |               .toBeAttached();
  1550 |           });
  1551 |           break;
  1552 |         case 'Riftbound':
  1553 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1554 |             await expect
  1555 |               .soft(
  1556 |                 page
  1557 |                   .locator('#riftbound-video-all-pages')
  1558 |                   .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  1559 |               )
  1560 |               .toBeVisible();
  1561 |           });
  1562 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1563 |             await expect
  1564 |               .soft(
  1565 |                 page
  1566 |                   .locator('#riftbound-display-all-pages')
  1567 |                   .or(page.locator('#riftbound-nitro-l'))
  1568 |                   .or(page.locator('#riftbound-nitro-3'))
  1569 |                   .first()
  1570 |               )
  1571 |               .not.toBeVisible();
  1572 |           });
  1573 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1574 |             await expect
  1575 |               .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  1576 |               .not.toBeVisible();
  1577 |           });
  1578 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1579 |             await expect
  1580 |               .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
  1581 |               .toBeAttached();
  1582 |           });
  1583 |           break;
  1584 |         case '2XKO':
  1585 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1586 |             await expect
  1587 |               .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..')))
  1588 |               .toBeVisible();
  1589 |           });
  1590 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1591 |             await expect
  1592 |               .soft(
  1593 |                 page
  1594 |                   .locator('#xko-display-all-pages')
  1595 |                   .or(page.locator('#\\32 xko-nitro-l'))
  1596 |                   .or(page.locator('#\\32 xko-nitro-3'))
  1597 |                   .first()
  1598 |               )
  1599 |               .not.toBeVisible();
  1600 |           });
  1601 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1602 |             await expect
  1603 |               .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  1604 |               .not.toBeVisible();
  1605 |           });
  1606 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1607 |             await expect
  1608 |               .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
  1609 |               .toBeAttached();
  1610 |           });
  1611 |           break;
  1612 |         case 'Marvel Rivals':
  1613 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1614 |             await expect
  1615 |               .soft(
  1616 |                 page
  1617 |                   .locator('#marvel-rivals-video-all-pages')
  1618 |                   .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  1619 |               )
  1620 |               .toBeVisible();
  1621 |           });
  1622 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1623 |             await expect
  1624 |               .soft(
  1625 |                 page
  1626 |                   .locator('#marvel-rivals-display-all-pages')
  1627 |                   .or(page.locator('#marvel-rivals-nitro-l'))
  1628 |                   .or(page.locator('#marvel-rivals-nitro-3'))
  1629 |                   .first()
  1630 |               )
  1631 |               .not.toBeVisible();
  1632 |           });
  1633 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1634 |             await expect
  1635 |               .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  1636 |               .not.toBeVisible();
  1637 |           });
  1638 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1639 |             await expect
  1640 |               .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
> 1641 |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  1642 |           });
  1643 |           break;
  1644 |         case 'Deadlock':
  1645 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1646 |             await expect
  1647 |               .soft(
  1648 |                 page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
  1649 |               )
  1650 |               .toBeVisible();
  1651 |           });
  1652 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1653 |             await expect
  1654 |               .soft(
  1655 |                 page
  1656 |                   .locator('#deadlock-display-all-pages')
  1657 |                   .or(page.locator('#deadlock-nitro-l'))
  1658 |                   .or(page.locator('#deadlock-nitro-3'))
  1659 |                   .first()
  1660 |               )
  1661 |               .not.toBeVisible();
  1662 |           });
  1663 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1664 |             await expect
  1665 |               .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  1666 |               .not.toBeVisible();
  1667 |           });
  1668 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1669 |             await expect
  1670 |               .soft(page.locator('#web-deadlock-display-footer-d').or(page.locator('#deadlock-nitro-anchor')))
  1671 |               .toBeAttached();
  1672 |           });
  1673 |           break;
  1674 |         case 'Diablo 4':
  1675 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1676 |             await expect
  1677 |               .soft(
  1678 |                 page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
  1679 |               )
  1680 |               .toBeVisible();
  1681 |           });
  1682 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1683 |             await expect
  1684 |               .soft(
  1685 |                 page
  1686 |                   .locator('#diablo-4-display-all-pages')
  1687 |                   .or(page.locator('#diablo-4-nitro-l'))
  1688 |                   .or(page.locator('#diablo-4-nitro-3'))
  1689 |                   .first()
  1690 |               )
  1691 |               .not.toBeVisible();
  1692 |           });
  1693 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1694 |             await expect
  1695 |               .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
  1696 |               .not.toBeVisible();
  1697 |           });
  1698 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1699 |             await expect
  1700 |               .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
  1701 |               .toBeAttached();
  1702 |           });
  1703 |           break;
  1704 |         case 'Destiny 2':
  1705 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1706 |             await expect
  1707 |               .soft(
  1708 |                 page
  1709 |                   .locator('#destiny-2-video-all-pages')
  1710 |                   .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
  1711 |               )
  1712 |               .toBeVisible();
  1713 |           });
  1714 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1715 |             await expect
  1716 |               .soft(
  1717 |                 page
  1718 |                   .locator('#destiny-2-display-all-pages')
  1719 |                   .or(page.locator('#destiny-2-nitro-l'))
  1720 |                   .or(page.locator('#destiny-2-nitro-3'))
  1721 |                   .first()
  1722 |               )
  1723 |               .not.toBeVisible();
  1724 |           });
  1725 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1726 |             await expect
  1727 |               .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
  1728 |               .not.toBeVisible();
  1729 |           });
  1730 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1731 |             await expect
  1732 |               .soft(page.locator('#web-destiny-2-display-footer-d').or(page.locator('#destiny-2-nitro-anchor')))
  1733 |               .toBeAttached();
  1734 |           });
  1735 |           break;
  1736 |         case 'Borderlands 4':
  1737 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1738 |             await expect
  1739 |               .soft(
  1740 |                 page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
  1741 |               )
```