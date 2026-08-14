# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-unauthorized-user.test.js >> Verify ad blocks for guest user >> Check advertisement blocks for unauthorized user - 2XKO in desktop at 640x1024 viewport size
- Location: e2e-tests/advertisement/ad-unauthorized-user.test.js:625:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#xko-video-all-pages').or(locator('#\\32 xko-nitro-video').first())
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#xko-video-all-pages').or(locator('#\\32 xko-nitro-video').first())

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad90a0cb564a0b
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

Locator: locator('#web-2xko-display-footer-d').or(locator('#\\32 xko-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-2xko-display-footer-d').or(locator('#\\32 xko-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad90a0cb564a0b
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
  826  |                 page
  827  |                   .locator('#the-bazaar-display-all-pages')
  828  |                   .or(page.locator('#the-bazaar-nitro-l'))
  829  |                   .or(page.locator('#the-bazaar-nitro-3'))
  830  |                   .first()
  831  |               )
  832  |               .not.toBeVisible();
  833  |           });
  834  |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  835  |             await expect
  836  |               .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  837  |               .not.toBeVisible();
  838  |           });
  839  |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  840  |             await expect
  841  |               .soft(page.locator('#web-the-bazaar-display-footer-d').or(page.locator('#the-bazaar-nitro-anchor')))
  842  |               .toBeAttached();
  843  |           });
  844  |           break;
  845  |         case 'Monster Hunter Wilds':
  846  |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  847  |             await expect
  848  |               .soft(page.locator('#mhw-video-all-pages').or(page.locator('#mhw-nitro-video').first()))
  849  |               .toBeAttached();
  850  |           });
  851  |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  852  |             await expect
  853  |               .soft(
  854  |                 page
  855  |                   .locator('#mhw-display-all-pages')
  856  |                   .or(page.locator('#mhw-nitro-l'))
  857  |                   .or(page.locator('#mhw-nitro-3'))
  858  |                   .first()
  859  |               )
  860  |               .not.toBeVisible();
  861  |           });
  862  |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  863  |             await expect
  864  |               .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
  865  |               .not.toBeVisible();
  866  |           });
  867  |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  868  |             await expect
  869  |               .soft(page.locator('#web-mhw-display-footer-d').or(page.locator('#mhw-nitro-anchor')))
  870  |               .toBeAttached();
  871  |           });
  872  |           break;
  873  |         case 'Riftbound':
  874  |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  875  |             await expect
  876  |               .soft(page.locator('#riftbound-video-all-pages').or(page.locator('#riftbound-nitro-video').first()))
  877  |               .toBeAttached();
  878  |           });
  879  |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  880  |             await expect
  881  |               .soft(
  882  |                 page
  883  |                   .locator('#riftbound-display-all-pages')
  884  |                   .or(page.locator('#riftbound-nitro-l'))
  885  |                   .or(page.locator('#riftbound-nitro-3'))
  886  |                   .first()
  887  |               )
  888  |               .not.toBeVisible();
  889  |           });
  890  |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  891  |             await expect
  892  |               .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  893  |               .not.toBeVisible();
  894  |           });
  895  |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  896  |             await expect
  897  |               .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
  898  |               .toBeAttached();
  899  |           });
  900  |           break;
  901  |         case '2XKO':
  902  |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  903  |             await expect
  904  |               .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').first()))
  905  |               .toBeAttached();
  906  |           });
  907  |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  908  |             await expect
  909  |               .soft(
  910  |                 page
  911  |                   .locator('#xko-display-all-pages')
  912  |                   .or(page.locator('#\\32 xko-nitro-l'))
  913  |                   .or(page.locator('#\\32 xko-nitro-3'))
  914  |                   .first()
  915  |               )
  916  |               .not.toBeVisible();
  917  |           });
  918  |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  919  |             await expect
  920  |               .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  921  |               .not.toBeVisible();
  922  |           });
  923  |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  924  |             await expect
  925  |               .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
> 926  |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  927  |           });
  928  |           break;
  929  |         case 'Marvel Rivals':
  930  |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  931  |             await expect
  932  |               .soft(
  933  |                 page.locator('#marvel-rivals-video-all-pages').or(page.locator('#marvel-rivals-nitro-video').first())
  934  |               )
  935  |               .toBeAttached();
  936  |           });
  937  |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  938  |             await expect
  939  |               .soft(
  940  |                 page
  941  |                   .locator('#marvel-rivals-display-all-pages')
  942  |                   .or(page.locator('#marvel-rivals-nitro-l'))
  943  |                   .or(page.locator('#marvel-rivals-nitro-3'))
  944  |                   .first()
  945  |               )
  946  |               .not.toBeVisible();
  947  |           });
  948  |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  949  |             await expect
  950  |               .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  951  |               .not.toBeVisible();
  952  |           });
  953  |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  954  |             await expect
  955  |               .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
  956  |               .toBeAttached();
  957  |           });
  958  |           break;
  959  |         case 'Deadlock':
  960  |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  961  |             await expect
  962  |               .soft(page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video').first()))
  963  |               .toBeAttached();
  964  |           });
  965  |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  966  |             await expect
  967  |               .soft(
  968  |                 page
  969  |                   .locator('#deadlock-display-all-pages')
  970  |                   .or(page.locator('#deadlock-nitro-l'))
  971  |                   .or(page.locator('#deadlock-nitro-3'))
  972  |                   .first()
  973  |               )
  974  |               .not.toBeVisible();
  975  |           });
  976  |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  977  |             await expect
  978  |               .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  979  |               .not.toBeVisible();
  980  |           });
  981  |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  982  |             await expect
  983  |               .soft(page.locator('#web-deadlock-display-footer-d').or(page.locator('#deadlock-nitro-anchor')))
  984  |               .toBeAttached();
  985  |           });
  986  |           break;
  987  |         case 'Diablo 4':
  988  |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  989  |             await expect
  990  |               .soft(page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video').first()))
  991  |               .toBeAttached();
  992  |           });
  993  |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  994  |             await expect
  995  |               .soft(
  996  |                 page
  997  |                   .locator('#diablo-4-display-all-pages')
  998  |                   .or(page.locator('#diablo-4-nitro-l'))
  999  |                   .or(page.locator('#diablo-4-nitro-3'))
  1000 |                   .first()
  1001 |               )
  1002 |               .not.toBeVisible();
  1003 |           });
  1004 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1005 |             await expect
  1006 |               .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
  1007 |               .not.toBeVisible();
  1008 |           });
  1009 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1010 |             await expect
  1011 |               .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
  1012 |               .toBeAttached();
  1013 |           });
  1014 |           break;
  1015 |         case 'Destiny 2':
  1016 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1017 |             await expect
  1018 |               .soft(page.locator('#destiny-2-video-all-pages').or(page.locator('#destiny-2-nitro-video').first()))
  1019 |               .toBeAttached();
  1020 |           });
  1021 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1022 |             await expect
  1023 |               .soft(
  1024 |                 page
  1025 |                   .locator('#destiny-2-display-all-pages')
  1026 |                   .or(page.locator('#destiny-2-nitro-l'))
```