# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check ad blocks for regular user - PoE in mobile at 360x780 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:10:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#poe-video-all-pages-mobile').or(locator('#poe-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#poe-video-all-pages-mobile').or(locator('#poe-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3216132fb94ed3c
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

Locator: locator('#web-poe-display-footer-m').or(locator('#poe-nitro-anchor-mobile'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-poe-display-footer-m').or(locator('#poe-nitro-anchor-mobile'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3216132fb94ed3c
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
  162 |                 )
  163 |                 .not.toBeVisible();
  164 |             });
  165 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  166 |               await expect
  167 |                 .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
  168 |                 .not.toBeVisible();
  169 |             });
  170 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  171 |               await expect
  172 |                 .soft(page.locator('#web-poe-display-footer-m').or(page.locator('#poe-nitro-anchor-mobile')))
> 173 |                 .toBeAttached();
      |                  ^ Error: expect(locator).toBeAttached() failed
  174 |             });
  175 |             break;
  176 |           case 'PoE 2':
  177 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  178 |               await expect
  179 |                 .soft(page.locator('#poe-2-video-all-pages-mobile').or(page.locator('#poe-2-nitro-video')))
  180 |                 .toBeAttached();
  181 |             });
  182 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  183 |               await expect
  184 |                 .soft(
  185 |                   page
  186 |                     .locator('#poe-2-display-all-pages')
  187 |                     .or(page.locator('#poe-2-nitro-l'))
  188 |                     .or(page.locator('#poe-2-nitro-3'))
  189 |                     .first()
  190 |                 )
  191 |                 .not.toBeVisible();
  192 |             });
  193 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  194 |               await expect
  195 |                 .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
  196 |                 .not.toBeVisible();
  197 |             });
  198 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  199 |               await expect
  200 |                 .soft(page.locator('#web-poe-2-display-footer-m').or(page.locator('#poe-2-nitro-anchor-mobile')))
  201 |                 .toBeAttached();
  202 |             });
  203 |             break;
  204 |           case 'The Bazaar':
  205 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  206 |               await expect
  207 |                 .soft(page.locator('#the-bazaar-video-all-pages-mobile').or(page.locator('#the-bazaar-nitro-video')))
  208 |                 .toBeAttached();
  209 |             });
  210 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  211 |               await expect
  212 |                 .soft(
  213 |                   page
  214 |                     .locator('#the-bazaar-display-all-pages')
  215 |                     .or(page.locator('#the-bazaar-nitro-l'))
  216 |                     .or(page.locator('#the-bazaar-nitro-3'))
  217 |                     .first()
  218 |                 )
  219 |                 .not.toBeVisible();
  220 |             });
  221 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  222 |               await expect
  223 |                 .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  224 |                 .not.toBeVisible();
  225 |             });
  226 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  227 |               await expect
  228 |                 .soft(
  229 |                   page.locator('#web-the-bazaar-display-footer-m').or(page.locator('#the-bazaar-nitro-anchor-mobile'))
  230 |                 )
  231 |                 .toBeAttached();
  232 |             });
  233 |             break;
  234 |           case 'Monster Hunter Wilds':
  235 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  236 |               await expect
  237 |                 .soft(page.locator('#mhw-video-all-pages-mobile').or(page.locator('#mhw-nitro-video')))
  238 |                 .toBeAttached();
  239 |             });
  240 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  241 |               await expect
  242 |                 .soft(
  243 |                   page
  244 |                     .locator('#mhw-display-all-pages')
  245 |                     .or(page.locator('#mhw-nitro-l'))
  246 |                     .or(page.locator('#mhw-nitro-3'))
  247 |                     .first()
  248 |                 )
  249 |                 .not.toBeVisible();
  250 |             });
  251 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  252 |               await expect
  253 |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
  254 |                 .not.toBeVisible();
  255 |             });
  256 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  257 |               await expect
  258 |                 .soft(page.locator('#web-mhw-display-footer-m').or(page.locator('#mhw-nitro-anchor-mobile')))
  259 |                 .toBeAttached();
  260 |             });
  261 |             break;
  262 |           case 'Riftbound':
  263 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  264 |               await expect
  265 |                 .soft(page.locator('#riftbound-video-all-pages-mobile').or(page.locator('#riftbound-nitro-video')))
  266 |                 .toBeAttached();
  267 |             });
  268 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  269 |               await expect
  270 |                 .soft(
  271 |                   page
  272 |                     .locator('#riftbound-display-all-pages')
  273 |                     .or(page.locator('#riftbound-nitro-l'))
```