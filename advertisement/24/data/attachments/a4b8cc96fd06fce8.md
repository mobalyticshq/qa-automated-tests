# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-unauthorized-user.test.js >> Verify ad blocks for guest user >> Check video block & footer banner for unauthorized user - Destiny 2 in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-unauthorized-user.test.js:1235:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#destiny-2-video-all-pages').or(locator('#destiny-2-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#destiny-2-video-all-pages').or(locator('#destiny-2-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2e72bd1fd977ab0
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

Locator: locator('#web-destiny-2-display-footer-d').or(locator('#destiny-2-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-destiny-2-display-footer-d').or(locator('#destiny-2-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2e72bd1fd977ab0
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
  1633 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1634 |             await expect
  1635 |               .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  1636 |               .not.toBeVisible();
  1637 |           });
  1638 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1639 |             await expect
  1640 |               .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
  1641 |               .toBeAttached();
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
> 1733 |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  1734 |           });
  1735 |           break;
  1736 |         case 'Borderlands 4':
  1737 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1738 |             await expect
  1739 |               .soft(
  1740 |                 page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
  1741 |               )
  1742 |               .toBeVisible();
  1743 |           });
  1744 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1745 |             await expect
  1746 |               .soft(
  1747 |                 page
  1748 |                   .locator('#bl4-display-all-pages')
  1749 |                   .or(page.locator('#borderlands-4-nitro-l'))
  1750 |                   .or(page.locator('#borderlands-4-nitro-3'))
  1751 |                   .first()
  1752 |               )
  1753 |               .not.toBeVisible();
  1754 |           });
  1755 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1756 |             await expect
  1757 |               .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
  1758 |               .not.toBeVisible();
  1759 |           });
  1760 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1761 |             await expect
  1762 |               .soft(page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor')))
  1763 |               .toBeAttached();
  1764 |           });
  1765 |           break;
  1766 |         case 'Hades 2':
  1767 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1768 |             await expect
  1769 |               .soft(
  1770 |                 page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
  1771 |               )
  1772 |               .toBeVisible();
  1773 |           });
  1774 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1775 |             await expect
  1776 |               .soft(
  1777 |                 page
  1778 |                   .locator('#hades-2-display-all-pages')
  1779 |                   .or(page.locator('#hades-2-nitro-l'))
  1780 |                   .or(page.locator('#hades-2-nitro-3'))
  1781 |                   .first()
  1782 |               )
  1783 |               .not.toBeVisible();
  1784 |           });
  1785 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1786 |             await expect
  1787 |               .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  1788 |               .not.toBeVisible();
  1789 |           });
  1790 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1791 |             await expect
  1792 |               .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
  1793 |               .toBeAttached();
  1794 |           });
  1795 |           break;
  1796 |         case 'Endfield':
  1797 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1798 |             await expect
  1799 |               .soft(
  1800 |                 page
  1801 |                   .locator('#endfield-video-all-pages')
  1802 |                   .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
  1803 |               )
  1804 |               .toBeVisible();
  1805 |           });
  1806 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1807 |             await expect
  1808 |               .soft(
  1809 |                 page
  1810 |                   .locator('#endfield-display-all-pages')
  1811 |                   .or(page.locator('#arknights-endfield-nitro-l'))
  1812 |                   .or(page.locator('#arknights-endfield-nitro-3'))
  1813 |                   .first()
  1814 |               )
  1815 |               .not.toBeVisible();
  1816 |           });
  1817 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1818 |             await expect
  1819 |               .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
  1820 |               .not.toBeVisible();
  1821 |           });
  1822 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1823 |             await expect
  1824 |               .soft(
  1825 |                 page
  1826 |                   .locator('#web-arknights-endfield-display-footer-d')
  1827 |                   .or(page.locator('#arknights-endfield-nitro-anchor'))
  1828 |               )
  1829 |               .toBeAttached();
  1830 |           });
  1831 |           break;
  1832 |         case 'Marathon':
  1833 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
```