# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check video block & footer banner for regular user - Diablo 4 in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:1259:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#diablo-4-video-all-pages').or(locator('#diablo-4-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#diablo-4-video-all-pages').or(locator('#diablo-4-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3216d47db74234f
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

Locator: locator('#web-diablo-4-display-footer-d').or(locator('#diablo-4-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-diablo-4-display-footer-d').or(locator('#diablo-4-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3216d47db74234f
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
  1642 |               await expect
  1643 |                 .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
  1644 |                 .toBeAttached();
  1645 |             });
  1646 |             break;
  1647 |           case 'Marvel Rivals':
  1648 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1649 |               await expect
  1650 |                 .soft(
  1651 |                   page
  1652 |                     .locator('#marvel-rivals-video-all-pages')
  1653 |                     .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  1654 |                 )
  1655 |                 .toBeVisible();
  1656 |             });
  1657 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1658 |               await expect
  1659 |                 .soft(
  1660 |                   page
  1661 |                     .locator('#marvel-rivals-display-all-pages')
  1662 |                     .or(page.locator('#marvel-rivals-nitro-l'))
  1663 |                     .or(page.locator('#marvel-rivals-nitro-3'))
  1664 |                     .first()
  1665 |                 )
  1666 |                 .not.toBeVisible();
  1667 |             });
  1668 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1669 |               await expect
  1670 |                 .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  1671 |                 .not.toBeVisible();
  1672 |             });
  1673 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1674 |               await expect
  1675 |                 .soft(
  1676 |                   page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor'))
  1677 |                 )
  1678 |                 .toBeAttached();
  1679 |             });
  1680 |             break;
  1681 |           case 'Deadlock':
  1682 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1683 |               await expect
  1684 |                 .soft(
  1685 |                   page
  1686 |                     .locator('#deadlock-video-all-pages')
  1687 |                     .or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
  1688 |                 )
  1689 |                 .toBeVisible();
  1690 |             });
  1691 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1692 |               await expect
  1693 |                 .soft(
  1694 |                   page
  1695 |                     .locator('#deadlock-display-all-pages')
  1696 |                     .or(page.locator('#deadlock-nitro-l'))
  1697 |                     .or(page.locator('#deadlock-nitro-3'))
  1698 |                     .first()
  1699 |                 )
  1700 |                 .not.toBeVisible();
  1701 |             });
  1702 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1703 |               await expect
  1704 |                 .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  1705 |                 .not.toBeVisible();
  1706 |             });
  1707 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1708 |               await expect
  1709 |                 .soft(page.locator('#web-deadlock-display-footer-d').or(page.locator('#deadlock-nitro-anchor')))
  1710 |                 .toBeAttached();
  1711 |             });
  1712 |             break;
  1713 |           case 'Diablo 4':
  1714 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1715 |               await expect
  1716 |                 .soft(
  1717 |                   page
  1718 |                     .locator('#diablo-4-video-all-pages')
  1719 |                     .or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
  1720 |                 )
  1721 |                 .toBeVisible();
  1722 |             });
  1723 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1724 |               await expect
  1725 |                 .soft(
  1726 |                   page
  1727 |                     .locator('#diablo-4-display-all-pages')
  1728 |                     .or(page.locator('#diablo-4-nitro-l'))
  1729 |                     .or(page.locator('#diablo-4-nitro-3'))
  1730 |                     .first()
  1731 |                 )
  1732 |                 .not.toBeVisible();
  1733 |             });
  1734 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1735 |               await expect
  1736 |                 .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
  1737 |                 .not.toBeVisible();
  1738 |             });
  1739 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1740 |               await expect
  1741 |                 .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
> 1742 |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  1743 |             });
  1744 |             break;
  1745 |           case 'Destiny 2':
  1746 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1747 |               await expect
  1748 |                 .soft(
  1749 |                   page
  1750 |                     .locator('#destiny-2-video-all-pages')
  1751 |                     .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
  1752 |                 )
  1753 |                 .toBeVisible();
  1754 |             });
  1755 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1756 |               await expect
  1757 |                 .soft(
  1758 |                   page
  1759 |                     .locator('#destiny-2-display-all-pages')
  1760 |                     .or(page.locator('#destiny-2-nitro-l'))
  1761 |                     .or(page.locator('#destiny-2-nitro-3'))
  1762 |                     .first()
  1763 |                 )
  1764 |                 .not.toBeVisible();
  1765 |             });
  1766 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1767 |               await expect
  1768 |                 .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
  1769 |                 .not.toBeVisible();
  1770 |             });
  1771 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1772 |               await expect
  1773 |                 .soft(page.locator('#web-destiny-2-display-footer-d').or(page.locator('#destiny-2-nitro-anchor')))
  1774 |                 .toBeAttached();
  1775 |             });
  1776 |             break;
  1777 |           case 'Borderlands 4':
  1778 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1779 |               await expect
  1780 |                 .soft(
  1781 |                   page
  1782 |                     .locator('#bl4-video-all-pages')
  1783 |                     .or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
  1784 |                 )
  1785 |                 .toBeVisible();
  1786 |             });
  1787 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1788 |               await expect
  1789 |                 .soft(
  1790 |                   page
  1791 |                     .locator('#bl4-display-all-pages')
  1792 |                     .or(page.locator('#borderlands-4-nitro-l'))
  1793 |                     .or(page.locator('#borderlands-4-nitro-3'))
  1794 |                     .first()
  1795 |                 )
  1796 |                 .not.toBeVisible();
  1797 |             });
  1798 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1799 |               await expect
  1800 |                 .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
  1801 |                 .not.toBeVisible();
  1802 |             });
  1803 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1804 |               await expect
  1805 |                 .soft(
  1806 |                   page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor'))
  1807 |                 )
  1808 |                 .toBeAttached();
  1809 |             });
  1810 |             break;
  1811 |           case 'Hades 2':
  1812 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1813 |               await expect
  1814 |                 .soft(
  1815 |                   page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
  1816 |                 )
  1817 |                 .toBeVisible();
  1818 |             });
  1819 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1820 |               await expect
  1821 |                 .soft(
  1822 |                   page
  1823 |                     .locator('#hades-2-display-all-pages')
  1824 |                     .or(page.locator('#hades-2-nitro-l'))
  1825 |                     .or(page.locator('#hades-2-nitro-3'))
  1826 |                     .first()
  1827 |                 )
  1828 |                 .not.toBeVisible();
  1829 |             });
  1830 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1831 |               await expect
  1832 |                 .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  1833 |                 .not.toBeVisible();
  1834 |             });
  1835 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1836 |               await expect
  1837 |                 .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
  1838 |                 .toBeAttached();
  1839 |             });
  1840 |             break;
  1841 |           case 'Endfield':
  1842 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
```