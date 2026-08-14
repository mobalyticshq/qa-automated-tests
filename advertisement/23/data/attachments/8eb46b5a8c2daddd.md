# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check video block, footer banner, L vertical banner for regular user - Nightreign in desktop at 1280x800 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:2723:5

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
  - code: a2ad706d18694a0b
  - text: Performance and Security by
  - link "Cloudflare, opens in a new tab":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
    - text: Cloudflare
  - link "Privacy, opens in a new tab":
    - /url: https://www.cloudflare.com/privacypolicy/
    - text: Privacy
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#elden-ring-nightreign-display-all-pages').or(locator('#elden-ring-nightreign-nitro-l').locator('..')).or(locator('#elden-ring-nightreign-nitro-3').locator('..')).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#elden-ring-nightreign-display-all-pages').or(locator('#elden-ring-nightreign-nitro-l').locator('..')).or(locator('#elden-ring-nightreign-nitro-3').locator('..')).first()

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad706d18694a0b
  - text: Performance and Security by
  - link "Cloudflare, opens in a new tab":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
    - text: Cloudflare
  - link "Privacy, opens in a new tab":
    - /url: https://www.cloudflare.com/privacypolicy/
    - text: Privacy
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#web-elden-ring-nightreign-display-footer-d').locator('..').or(locator('#elden-ring-nightreign-nitro-anchor').locator('..'))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 15000ms
  - waiting for locator('#web-elden-ring-nightreign-display-footer-d').locator('..').or(locator('#elden-ring-nightreign-nitro-anchor').locator('..'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad706d18694a0b
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
  2994 |                 .soft(
  2995 |                   page
  2996 |                     .locator('#the-bazaar-display-all-pages')
  2997 |                     .or(page.locator('#the-bazaar-nitro-l').locator('xpath=..'))
  2998 |                     .or(page.locator('#the-bazaar-nitro-3').locator('xpath=..'))
  2999 |                     .first()
  3000 |                 )
  3001 |                 .toBeVisible();
  3002 |             });
  3003 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3004 |               await expect
  3005 |                 .soft(
  3006 |                   page
  3007 |                     .locator('#the-bazaar-display-small-all-pages')
  3008 |                     .or(page.locator('#the-bazaar-nitro-m').locator('xpath=..'))
  3009 |                 )
  3010 |                 .not.toBeVisible();
  3011 |             });
  3012 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3013 |               await expect
  3014 |                 .soft(
  3015 |                   page
  3016 |                     .locator('#web-the-bazaar-display-footer-d')
  3017 |                     .locator('xpath=..')
  3018 |                     .or(page.locator('#the-bazaar-nitro-anchor').locator('xpath=..'))
  3019 |                 )
  3020 |                 .toBeVisible();
  3021 |             });
  3022 |             break;
  3023 |           case 'Monster Hunter Wilds':
  3024 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3025 |               await expect
  3026 |                 .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').locator('xpath=..')))
  3027 |                 .toBeVisible();
  3028 |             });
  3029 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3030 |               await expect
  3031 |                 .soft(
  3032 |                   page
  3033 |                     .locator('#mhw-display-all-pages')
  3034 |                     .or(page.locator('#mhw-nitro-l').locator('xpath=..'))
  3035 |                     .or(page.locator('#mhw-nitro-3').locator('xpath=..'))
  3036 |                     .first()
  3037 |                 )
  3038 |                 .toBeVisible();
  3039 |             });
  3040 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3041 |               await expect
  3042 |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m').locator('xpath=..')))
  3043 |                 .not.toBeVisible();
  3044 |             });
  3045 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3046 |               await expect
  3047 |                 .soft(
  3048 |                   page
  3049 |                     .locator('#web-mhw-display-footer-d')
  3050 |                     .locator('xpath=..')
  3051 |                     .or(page.locator('#mhw-nitro-anchor').locator('xpath=..'))
  3052 |                 )
  3053 |                 .toBeVisible();
  3054 |             });
  3055 |             break;
  3056 |           case 'Nightreign':
  3057 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3058 |               await expect
  3059 |                 .soft(
  3060 |                   page
  3061 |                     .locator('#elden-ring-nightreign-video-all-pages')
  3062 |                     .or(page.locator('#elden-ring-nightreign-nitro-video').locator('xpath=..'))
  3063 |                 )
  3064 |                 .toBeVisible();
  3065 |             });
  3066 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3067 |               await expect
  3068 |                 .soft(
  3069 |                   page
  3070 |                     .locator('#elden-ring-nightreign-display-all-pages')
  3071 |                     .or(page.locator('#elden-ring-nightreign-nitro-l').locator('xpath=..'))
  3072 |                     .or(page.locator('#elden-ring-nightreign-nitro-3').locator('xpath=..'))
  3073 |                     .first()
  3074 |                 )
  3075 |                 .toBeVisible();
  3076 |             });
  3077 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3078 |               await expect
  3079 |                 .soft(
  3080 |                   page
  3081 |                     .locator('#elden-ring-nightreign-display-small-all-pages')
  3082 |                     .or(page.locator('#elden-ring-nightreign-nitro-m').locator('xpath=..'))
  3083 |                 )
  3084 |                 .not.toBeVisible();
  3085 |             });
  3086 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3087 |               await expect
  3088 |                 .soft(
  3089 |                   page
  3090 |                     .locator('#web-elden-ring-nightreign-display-footer-d')
  3091 |                     .locator('xpath=..')
  3092 |                     .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
  3093 |                 )
> 3094 |                 .toBeVisible();
       |                  ^ Error: expect(locator).toBeVisible() failed
  3095 |             });
  3096 |             break;
  3097 |           case 'Riftbound':
  3098 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3099 |               await expect
  3100 |                 .soft(
  3101 |                   page
  3102 |                     .locator('#riftbound-video-all-pages')
  3103 |                     .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  3104 |                 )
  3105 |                 .toBeVisible();
  3106 |             });
  3107 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3108 |               await expect
  3109 |                 .soft(
  3110 |                   page
  3111 |                     .locator('#riftbound-display-all-pages')
  3112 |                     .or(page.locator('#riftbound-nitro-l').locator('xpath=..'))
  3113 |                     .or(page.locator('#riftbound-nitro-3').locator('xpath=..'))
  3114 |                     .first()
  3115 |                 )
  3116 |                 .toBeVisible();
  3117 |             });
  3118 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3119 |               await expect
  3120 |                 .soft(
  3121 |                   page
  3122 |                     .locator('#riftbound-display-small-all-pages')
  3123 |                     .or(page.locator('#riftbound-nitro-m').locator('xpath=..'))
  3124 |                 )
  3125 |                 .not.toBeVisible();
  3126 |             });
  3127 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3128 |               await expect
  3129 |                 .soft(
  3130 |                   page
  3131 |                     .locator('#web-riftbound-display-footer-d')
  3132 |                     .locator('xpath=..')
  3133 |                     .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
  3134 |                 )
  3135 |                 .toBeVisible();
  3136 |             });
  3137 |             break;
  3138 |           case '2XKO':
  3139 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3140 |               await expect
  3141 |                 .soft(
  3142 |                   page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..'))
  3143 |                 )
  3144 |                 .toBeVisible();
  3145 |             });
  3146 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3147 |               await expect
  3148 |                 .soft(
  3149 |                   page
  3150 |                     .locator('#xko-display-all-pages')
  3151 |                     .or(page.locator('#\\32 xko-nitro-l').locator('xpath=..'))
  3152 |                     .or(page.locator('#\\32 xko-nitro-3').locator('xpath=..'))
  3153 |                     .first()
  3154 |                 )
  3155 |                 .toBeVisible();
  3156 |             });
  3157 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3158 |               await expect
  3159 |                 .soft(
  3160 |                   page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m').locator('xpath=..'))
  3161 |                 )
  3162 |                 .not.toBeVisible();
  3163 |             });
  3164 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3165 |               await expect
  3166 |                 .soft(
  3167 |                   page
  3168 |                     .locator('#web-2xko-display-footer-d')
  3169 |                     .locator('xpath=..')
  3170 |                     .or(page.locator('#\\32 xko-nitro-anchor').locator('xpath=..'))
  3171 |                 )
  3172 |                 .toBeVisible();
  3173 |             });
  3174 |             break;
  3175 |           case 'Marvel Rivals':
  3176 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3177 |               await expect
  3178 |                 .soft(
  3179 |                   page
  3180 |                     .locator('#marvel-rivals-video-all-pages')
  3181 |                     .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  3182 |                 )
  3183 |                 .toBeVisible();
  3184 |             });
  3185 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3186 |               await expect
  3187 |                 .soft(
  3188 |                   page
  3189 |                     .locator('#marvel-rivals-display-all-pages')
  3190 |                     .or(page.locator('#marvel-rivals-nitro-l').locator('xpath=..'))
  3191 |                     .or(page.locator('#marvel-rivals-nitro-3').locator('xpath=..'))
  3192 |                     .first()
  3193 |                 )
  3194 |                 .toBeVisible();
```