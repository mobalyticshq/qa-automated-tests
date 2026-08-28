# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check ad blocks for regular user - STS 2 in mobile at 360x780 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:10:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#slay-the-spire-2-video-all-pages-mobile').or(locator('#slay-the-spire-2-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#slay-the-spire-2-video-all-pages-mobile').or(locator('#slay-the-spire-2-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a32163e939d391f0
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

Locator: locator('#web-slay-the-spire-2-display-footer-m').or(locator('#slay-the-spire-2-nitro-anchor-mobile'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-slay-the-spire-2-display-footer-m').or(locator('#slay-the-spire-2-nitro-anchor-mobile'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a32163e939d391f0
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
  1   | import { test, expect, devices } from '@playwright/test';
  2   | import { filterProjectsByFeatureStatus as filterProjectsByAdvertisement } from '../../app/helpers/index';
  3   | const { defaultBrowserType: _1, ...galaxyS24 } = devices['Galaxy S24']; // 360x780 viewport size
  4   | 
  5   | 
  6   | test.describe('Verify ad blocks for regular user', async () => {
  7   |   test.use({ ...galaxyS24 }); // set up the mobile device 360x780 viewport size
  8   | 
  9   |   filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  10  |     test(`Check ad blocks for regular user - ${game} in mobile at 360x780 viewport size`, async ({ browser }) => {
  11  |       test.skip(game === 'Val', "Valorant doesn't contain ad on mobile devices");
  12  | 
  13  |       const regularUserContext = await browser.newContext({ storageState: '.auth/regularUserAuth.json' });
  14  |       const page = await regularUserContext.newPage();
  15  | 
  16  |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  17  |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  18  |           waitUntil: 'domcontentloaded',
  19  |         });
  20  |       });
  21  | 
  22  |       try {
  23  |         switch (game) {
  24  |           case 'STS 2':
  25  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  26  |               await expect
  27  |                 .soft(
  28  |                   page
  29  |                     .locator('#slay-the-spire-2-video-all-pages-mobile')
  30  |                     .or(page.locator('#slay-the-spire-2-nitro-video'))
  31  |                 )
  32  |                 .toBeAttached();
  33  |             });
  34  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  35  |               await expect
  36  |                 .soft(
  37  |                   page
  38  |                     .locator('#slay-the-spire-2-display-all-pages')
  39  |                     .or(page.locator('#slay-the-spire-2-nitro-l'))
  40  |                     .or(page.locator('#slay-the-spire-2-nitro-3'))
  41  |                     .first()
  42  |                 )
  43  |                 .not.toBeVisible();
  44  |             });
  45  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  46  |               await expect
  47  |                 .soft(
  48  |                   page
  49  |                     .locator('#slay-the-spire-2-display-small-all-pages')
  50  |                     .or(page.locator('#slay-the-spire-2-nitro-m'))
  51  |                 )
  52  |                 .not.toBeVisible();
  53  |             });
  54  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  55  |               await expect
  56  |                 .soft(
  57  |                   page
  58  |                     .locator('#web-slay-the-spire-2-display-footer-m')
  59  |                     .or(page.locator('#slay-the-spire-2-nitro-anchor-mobile'))
  60  |                 )
> 61  |                 .toBeAttached();
      |                  ^ Error: expect(locator).toBeAttached() failed
  62  |             });
  63  |             break;
  64  |           case 'LoL':
  65  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  66  |               await expect
  67  |                 .soft(page.locator('#lol-video-all-pages-mobile').or(page.locator('#lol-nitro-video')))
  68  |                 .toBeAttached();
  69  |             });
  70  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  71  |               await expect
  72  |                 .soft(
  73  |                   page
  74  |                     .locator('#lol-display-all-pages')
  75  |                     .or(page.locator('#lol-nitro-l'))
  76  |                     .or(page.locator('#lol-nitro-3'))
  77  |                     .first()
  78  |                 )
  79  |                 .not.toBeVisible();
  80  |             });
  81  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  82  |               await expect
  83  |                 .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  84  |                 .not.toBeVisible();
  85  |             });
  86  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  87  |               await expect
  88  |                 .soft(page.locator('#web-lol-display-footer-m').or(page.locator('#lol-nitro-anchor-mobile')))
  89  |                 .toBeAttached();
  90  |             });
  91  |             break;
  92  |           case 'ZZZ':
  93  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  94  |               await expect
  95  |                 .soft(page.locator('#zzz-video-all-pages-mobile').or(page.locator('#zzz-nitro-video')))
  96  |                 .toBeAttached();
  97  |             });
  98  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  99  |               await expect
  100 |                 .soft(
  101 |                   page
  102 |                     .locator('#zzz-display-all-pages')
  103 |                     .or(page.locator('#zzz-nitro-l'))
  104 |                     .or(page.locator('#zzz-nitro-3'))
  105 |                     .first()
  106 |                 )
  107 |                 .not.toBeVisible();
  108 |             });
  109 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  110 |               await expect
  111 |                 .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
  112 |                 .not.toBeVisible();
  113 |             });
  114 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  115 |               await expect
  116 |                 .soft(page.locator('#web-zzz-display-footer-m').or(page.locator('#zzz-nitro-anchor-mobile')))
  117 |                 .toBeAttached();
  118 |             });
  119 |             break;
  120 |           case 'TFT':
  121 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  122 |               await expect
  123 |                 .soft(page.locator('#tft-video-all-pages-mobile').or(page.locator('#tft-nitro-video')))
  124 |                 .toBeAttached();
  125 |             });
  126 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  127 |               await expect
  128 |                 .soft(
  129 |                   page
  130 |                     .locator('#tft-display-all-pages')
  131 |                     .or(page.locator('#tft-nitro-l'))
  132 |                     .or(page.locator('#tft-nitro-3'))
  133 |                     .first()
  134 |                 )
  135 |                 .not.toBeVisible();
  136 |             });
  137 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  138 |               await expect
  139 |                 .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
  140 |                 .not.toBeVisible();
  141 |             });
  142 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  143 |               await expect
  144 |                 .soft(page.locator('#web-tft-display-footer-m').or(page.locator('#tft-nitro-anchor-mobile')))
  145 |                 .toBeAttached();
  146 |             });
  147 |             break;
  148 |           case 'PoE':
  149 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  150 |               await expect
  151 |                 .soft(page.locator('#poe-video-all-pages-mobile').or(page.locator('#poe-nitro-video')))
  152 |                 .toBeAttached();
  153 |             });
  154 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  155 |               await expect
  156 |                 .soft(
  157 |                   page
  158 |                     .locator('#poe-display-all-pages')
  159 |                     .or(page.locator('#poe-nitro-l'))
  160 |                     .or(page.locator('#poe-nitro-3'))
  161 |                     .first()
```