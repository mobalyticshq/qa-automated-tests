# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-adFree-user.test.js >> Verify ad blocks for ad-free user >> Check video block, footer banner, L vertical banner for ad free user - LoL in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement/ad-adFree-user.test.js:2722:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#lol-video-all-pages').or(locator('#lol-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#lol-video-all-pages').or(locator('#lol-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273a3c909a4eb34
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

Locator: locator('#lol-display-all-pages').or(locator('#lol-nitro-l')).or(locator('#lol-nitro-3')).first()
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#lol-display-all-pages').or(locator('#lol-nitro-l')).or(locator('#lol-nitro-3')).first()

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273a3c909a4eb34
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

Locator: locator('#web-lol-display-footer-d').or(locator('#lol-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-lol-display-footer-d').or(locator('#lol-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273a3c909a4eb34
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
  2703 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  2704 |               await expect
  2705 |                 .soft(
  2706 |                   page
  2707 |                     .locator('#web-overwatch-display-footer-d')
  2708 |                     .locator('xpath=..')
  2709 |                     .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
  2710 |                 )
  2711 |                 .not.toBeVisible();
  2712 |             });
  2713 |             break;
  2714 |         }
  2715 |       } finally {
  2716 |         await adFreeUserContext.close();
  2717 |       }
  2718 |     });
  2719 |   });
  2720 | 
  2721 |   filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  2722 |     test(`Check video block, footer banner, L vertical banner for ad free user - ${game} in desktop at 1280x800 viewport size`, async ({
  2723 |       browser,
  2724 |     }) => {
  2725 |       const adFreeUserContext = await browser.newContext({ storageState: '.auth/adFreeUserAuth.json' });
  2726 |       const page = await adFreeUserContext.newPage();
  2727 |       await page.setViewportSize({ width: 1280, height: 800 });
  2728 | 
  2729 |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  2730 |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  2731 |           waitUntil: 'domcontentloaded',
  2732 |         });
  2733 |       });
  2734 | 
  2735 |       try {
  2736 |         switch (game) {
  2737 |           case 'STS 2':
  2738 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  2739 |               await expect
  2740 |                 .soft(
  2741 |                   page
  2742 |                     .locator('#slay-the-spire-2-video-all-pages')
  2743 |                     .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
  2744 |                 )
  2745 |                 .not.toBeVisible();
  2746 |             });
  2747 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  2748 |               await expect
  2749 |                 .soft(
  2750 |                   page
  2751 |                     .locator('#slay-the-spire-2-display-all-pages')
  2752 |                     .or(page.locator('#slay-the-spire-2-nitro-l').locator('xpath=..'))
  2753 |                     .or(page.locator('#slay-the-spire-2-nitro-3').locator('xpath=..'))
  2754 |                     .first()
  2755 |                 )
  2756 |                 .not.toBeVisible();
  2757 |             });
  2758 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  2759 |               await expect
  2760 |                 .soft(
  2761 |                   page
  2762 |                     .locator('#slay-the-spire-2-display-small-all-pages')
  2763 |                     .or(page.locator('#slay-the-spire-2-nitro-m'))
  2764 |                 )
  2765 |                 .not.toBeVisible();
  2766 |             });
  2767 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  2768 |               await expect
  2769 |                 .soft(
  2770 |                   page
  2771 |                     .locator('#web-slay-the-spire-2-display-footer-d')
  2772 |                     .locator('xpath=..')
  2773 |                     .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
  2774 |                 )
  2775 |                 .not.toBeVisible();
  2776 |             });
  2777 |             break;
  2778 |           case 'LoL':
  2779 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  2780 |               await expect
  2781 |                 .soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video')))
  2782 |                 .toBeAttached();
  2783 |             });
  2784 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  2785 |               await expect
  2786 |                 .soft(
  2787 |                   page
  2788 |                     .locator('#lol-display-all-pages')
  2789 |                     .or(page.locator('#lol-nitro-l'))
  2790 |                     .or(page.locator('#lol-nitro-3'))
  2791 |                     .first()
  2792 |                 )
  2793 |                 .toBeAttached();
  2794 |             });
  2795 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  2796 |               await expect
  2797 |                 .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  2798 |                 .not.toBeVisible();
  2799 |             });
  2800 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  2801 |               await expect
  2802 |                 .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
> 2803 |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  2804 |             });
  2805 |             break;
  2806 |           case 'ZZZ':
  2807 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  2808 |               await expect
  2809 |                 .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video').locator('xpath=..')))
  2810 |                 .not.toBeVisible();
  2811 |             });
  2812 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  2813 |               await expect
  2814 |                 .soft(
  2815 |                   page
  2816 |                     .locator('#zzz-display-all-pages')
  2817 |                     .or(page.locator('#zzz-nitro-l').locator('xpath=..'))
  2818 |                     .or(page.locator('#zzz-nitro-3').locator('xpath=..'))
  2819 |                     .first()
  2820 |                 )
  2821 |                 .not.toBeVisible();
  2822 |             });
  2823 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  2824 |               await expect
  2825 |                 .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m').locator('xpath=..')))
  2826 |                 .not.toBeVisible();
  2827 |             });
  2828 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  2829 |               await expect
  2830 |                 .soft(
  2831 |                   page
  2832 |                     .locator('#web-zzz-display-footer-d')
  2833 |                     .locator('xpath=..')
  2834 |                     .or(page.locator('#zzz-nitro-anchor').locator('xpath=..'))
  2835 |                 )
  2836 |                 .not.toBeVisible();
  2837 |             });
  2838 |             break;
  2839 |           case 'Val':
  2840 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  2841 |               await expect
  2842 |                 .soft(
  2843 |                   page
  2844 |                     .locator('#valorant-video-all-pages')
  2845 |                     .or(page.locator('#valorant-nitro-video').locator('xpath=..'))
  2846 |                 )
  2847 |                 .not.toBeVisible();
  2848 |             });
  2849 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  2850 |               await expect
  2851 |                 .soft(
  2852 |                   page
  2853 |                     .locator('#valorant-display-all-pages')
  2854 |                     .or(page.locator('#valorant-nitro-l').locator('xpath=..'))
  2855 |                     .or(page.locator('#valorant-nitro-3').locator('xpath=..'))
  2856 |                     .first()
  2857 |                 )
  2858 |                 .not.toBeVisible();
  2859 |             });
  2860 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  2861 |               await expect
  2862 |                 .soft(
  2863 |                   page
  2864 |                     .locator('#valorant-display-small-all-pages')
  2865 |                     .or(page.locator('#valorant-nitro-m').locator('xpath=..'))
  2866 |                 )
  2867 |                 .not.toBeVisible();
  2868 |             });
  2869 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  2870 |               await expect
  2871 |                 .soft(
  2872 |                   page
  2873 |                     .locator('#web-valorant-display-footer-d')
  2874 |                     .locator('xpath=..')
  2875 |                     .or(page.locator('#valorant-nitro-anchor').locator('xpath=..'))
  2876 |                 )
  2877 |                 .not.toBeVisible();
  2878 |             });
  2879 |             break;
  2880 |           case 'TFT':
  2881 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  2882 |               await expect
  2883 |                 .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video').locator('xpath=..')))
  2884 |                 .toBeVisible();
  2885 |             });
  2886 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  2887 |               await expect
  2888 |                 .soft(
  2889 |                   page
  2890 |                     .locator('#tft-display-all-pages')
  2891 |                     .or(page.locator('#tft-nitro-l').locator('xpath=..'))
  2892 |                     .or(page.locator('#tft-nitro-3').locator('xpath=..'))
  2893 |                     .first()
  2894 |                 )
  2895 |                 .toBeVisible();
  2896 |             });
  2897 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  2898 |               await expect
  2899 |                 .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m').locator('xpath=..')))
  2900 |                 .not.toBeVisible();
  2901 |             });
  2902 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  2903 |               await expect
```