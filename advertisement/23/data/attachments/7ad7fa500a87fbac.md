# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-unauthorized-user.test.js >> Verify ad blocks for guest user >> Check video block & footer banner for unauthorized user - Borderlands 4 in desktop at 800x800 viewport size
- Location: e2e-tests/advertisement/ad-unauthorized-user.test.js:1234:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#bl4-video-all-pages').or(locator('#borderlands-4-nitro-video').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#bl4-video-all-pages').or(locator('#borderlands-4-nitro-video').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad9aa18af1d6a4
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

Locator: locator('#web-borderlands-4-display-footer-d').or(locator('#borderlands-4-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-borderlands-4-display-footer-d').or(locator('#borderlands-4-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad9aa18af1d6a4
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
  1662 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1663 |             await expect
  1664 |               .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  1665 |               .not.toBeVisible();
  1666 |           });
  1667 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1668 |             await expect
  1669 |               .soft(page.locator('#web-deadlock-display-footer-d').or(page.locator('#deadlock-nitro-anchor')))
  1670 |               .toBeAttached();
  1671 |           });
  1672 |           break;
  1673 |         case 'Diablo 4':
  1674 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1675 |             await expect
  1676 |               .soft(
  1677 |                 page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
  1678 |               )
  1679 |               .toBeVisible();
  1680 |           });
  1681 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1682 |             await expect
  1683 |               .soft(
  1684 |                 page
  1685 |                   .locator('#diablo-4-display-all-pages')
  1686 |                   .or(page.locator('#diablo-4-nitro-l'))
  1687 |                   .or(page.locator('#diablo-4-nitro-3'))
  1688 |                   .first()
  1689 |               )
  1690 |               .not.toBeVisible();
  1691 |           });
  1692 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1693 |             await expect
  1694 |               .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
  1695 |               .not.toBeVisible();
  1696 |           });
  1697 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1698 |             await expect
  1699 |               .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
  1700 |               .toBeAttached();
  1701 |           });
  1702 |           break;
  1703 |         case 'Destiny 2':
  1704 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1705 |             await expect
  1706 |               .soft(
  1707 |                 page
  1708 |                   .locator('#destiny-2-video-all-pages')
  1709 |                   .or(page.locator('#destiny-2-nitro-video').locator('xpath=..'))
  1710 |               )
  1711 |               .toBeVisible();
  1712 |           });
  1713 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1714 |             await expect
  1715 |               .soft(
  1716 |                 page
  1717 |                   .locator('#destiny-2-display-all-pages')
  1718 |                   .or(page.locator('#destiny-2-nitro-l'))
  1719 |                   .or(page.locator('#destiny-2-nitro-3'))
  1720 |                   .first()
  1721 |               )
  1722 |               .not.toBeVisible();
  1723 |           });
  1724 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1725 |             await expect
  1726 |               .soft(page.locator('#destiny-2-display-small-all-pages').or(page.locator('#destiny-2-nitro-m')))
  1727 |               .not.toBeVisible();
  1728 |           });
  1729 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1730 |             await expect
  1731 |               .soft(page.locator('#web-destiny-2-display-footer-d').or(page.locator('#destiny-2-nitro-anchor')))
  1732 |               .toBeAttached();
  1733 |           });
  1734 |           break;
  1735 |         case 'Borderlands 4':
  1736 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1737 |             await expect
  1738 |               .soft(
  1739 |                 page.locator('#bl4-video-all-pages').or(page.locator('#borderlands-4-nitro-video').locator('xpath=..'))
  1740 |               )
  1741 |               .toBeVisible();
  1742 |           });
  1743 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1744 |             await expect
  1745 |               .soft(
  1746 |                 page
  1747 |                   .locator('#bl4-display-all-pages')
  1748 |                   .or(page.locator('#borderlands-4-nitro-l'))
  1749 |                   .or(page.locator('#borderlands-4-nitro-3'))
  1750 |                   .first()
  1751 |               )
  1752 |               .not.toBeVisible();
  1753 |           });
  1754 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1755 |             await expect
  1756 |               .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
  1757 |               .not.toBeVisible();
  1758 |           });
  1759 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1760 |             await expect
  1761 |               .soft(page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor')))
> 1762 |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  1763 |           });
  1764 |           break;
  1765 |         case 'Hades 2':
  1766 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1767 |             await expect
  1768 |               .soft(
  1769 |                 page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').locator('xpath=..'))
  1770 |               )
  1771 |               .toBeVisible();
  1772 |           });
  1773 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1774 |             await expect
  1775 |               .soft(
  1776 |                 page
  1777 |                   .locator('#hades-2-display-all-pages')
  1778 |                   .or(page.locator('#hades-2-nitro-l'))
  1779 |                   .or(page.locator('#hades-2-nitro-3'))
  1780 |                   .first()
  1781 |               )
  1782 |               .not.toBeVisible();
  1783 |           });
  1784 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1785 |             await expect
  1786 |               .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  1787 |               .not.toBeVisible();
  1788 |           });
  1789 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1790 |             await expect
  1791 |               .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
  1792 |               .toBeAttached();
  1793 |           });
  1794 |           break;
  1795 |         case 'Endfield':
  1796 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1797 |             await expect
  1798 |               .soft(
  1799 |                 page
  1800 |                   .locator('#endfield-video-all-pages')
  1801 |                   .or(page.locator('#arknights-endfield-nitro-video').locator('xpath=..'))
  1802 |               )
  1803 |               .toBeVisible();
  1804 |           });
  1805 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1806 |             await expect
  1807 |               .soft(
  1808 |                 page
  1809 |                   .locator('#endfield-display-all-pages')
  1810 |                   .or(page.locator('#arknights-endfield-nitro-l'))
  1811 |                   .or(page.locator('#arknights-endfield-nitro-3'))
  1812 |                   .first()
  1813 |               )
  1814 |               .not.toBeVisible();
  1815 |           });
  1816 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1817 |             await expect
  1818 |               .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
  1819 |               .not.toBeVisible();
  1820 |           });
  1821 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1822 |             await expect
  1823 |               .soft(
  1824 |                 page
  1825 |                   .locator('#web-arknights-endfield-display-footer-d')
  1826 |                   .or(page.locator('#arknights-endfield-nitro-anchor'))
  1827 |               )
  1828 |               .toBeAttached();
  1829 |           });
  1830 |           break;
  1831 |         case 'Marathon':
  1832 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1833 |             await expect
  1834 |               .soft(
  1835 |                 page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video').locator('xpath=..'))
  1836 |               )
  1837 |               .toBeVisible();
  1838 |           });
  1839 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1840 |             await expect
  1841 |               .soft(
  1842 |                 page
  1843 |                   .locator('#marathon-display-all-pages')
  1844 |                   .or(page.locator('#marathon-nitro-l'))
  1845 |                   .or(page.locator('#marathon-nitro-3'))
  1846 |                   .first()
  1847 |               )
  1848 |               .not.toBeVisible();
  1849 |           });
  1850 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1851 |             await expect
  1852 |               .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
  1853 |               .not.toBeVisible();
  1854 |           });
  1855 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1856 |             await expect
  1857 |               .soft(page.locator('#web-marathon-display-footer-d').or(page.locator('#marathon-nitro-anchor')))
  1858 |               .toBeAttached();
  1859 |           });
  1860 |           break;
  1861 |         case 'Overwatch':
  1862 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
```