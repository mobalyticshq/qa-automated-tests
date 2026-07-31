# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the mobile viewport range (320–575px) for different user roles >> Check ad blocks for regular user - Riftbound in mobile at 360x780 viewport size
- Location: e2e-tests/advertisement.test.js:625:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#riftbound-video-all-pages-mobile').or(locator('#riftbound-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#riftbound-video-all-pages-mobile').or(locator('#riftbound-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a23a286d782456ce
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#web-riftbound-display-footer-m').or(locator('#riftbound-nitro-anchor-mobile'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-riftbound-display-footer-m').or(locator('#riftbound-nitro-anchor-mobile'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a23a286d782456ce
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  804  |                     .first()
  805  |                 )
  806  |                 .not.toBeVisible();
  807  |             });
  808  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  809  |               await expect
  810  |                 .soft(page.locator('#poe-2-display-small-all-pages').or(page.locator('#poe-2-nitro-m')))
  811  |                 .not.toBeVisible();
  812  |             });
  813  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  814  |               await expect
  815  |                 .soft(page.locator('#web-poe-2-display-footer-m').or(page.locator('#poe-2-nitro-anchor-mobile')))
  816  |                 .toBeAttached();
  817  |             });
  818  |             break;
  819  |           case 'The Bazaar':
  820  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  821  |               await expect
  822  |                 .soft(page.locator('#the-bazaar-video-all-pages-mobile').or(page.locator('#the-bazaar-nitro-video')))
  823  |                 .toBeAttached();
  824  |             });
  825  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  826  |               await expect
  827  |                 .soft(
  828  |                   page
  829  |                     .locator('#the-bazaar-display-all-pages')
  830  |                     .or(page.locator('#the-bazaar-nitro-l'))
  831  |                     .or(page.locator('#the-bazaar-nitro-3'))
  832  |                     .first()
  833  |                 )
  834  |                 .not.toBeVisible();
  835  |             });
  836  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  837  |               await expect
  838  |                 .soft(page.locator('#the-bazaar-display-small-all-pages').or(page.locator('#the-bazaar-nitro-m')))
  839  |                 .not.toBeVisible();
  840  |             });
  841  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  842  |               await expect
  843  |                 .soft(
  844  |                   page.locator('#web-the-bazaar-display-footer-m').or(page.locator('#the-bazaar-nitro-anchor-mobile'))
  845  |                 )
  846  |                 .toBeAttached();
  847  |             });
  848  |             break;
  849  |           case 'Monster Hunter Wilds':
  850  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  851  |               await expect
  852  |                 .soft(page.locator('#mhw-video-all-pages-mobile').or(page.locator('#mhw-nitro-video')))
  853  |                 .toBeAttached();
  854  |             });
  855  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  856  |               await expect
  857  |                 .soft(
  858  |                   page
  859  |                     .locator('#mhw-display-all-pages')
  860  |                     .or(page.locator('#mhw-nitro-l'))
  861  |                     .or(page.locator('#mhw-nitro-3'))
  862  |                     .first()
  863  |                 )
  864  |                 .not.toBeVisible();
  865  |             });
  866  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  867  |               await expect
  868  |                 .soft(page.locator('#mhw-display-small-all-pages').or(page.locator('#mhw-nitro-m')))
  869  |                 .not.toBeVisible();
  870  |             });
  871  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  872  |               await expect
  873  |                 .soft(page.locator('#web-mhw-display-footer-m').or(page.locator('#mhw-nitro-anchor-mobile')))
  874  |                 .toBeAttached();
  875  |             });
  876  |             break;
  877  |           case 'Riftbound':
  878  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  879  |               await expect
  880  |                 .soft(page.locator('#riftbound-video-all-pages-mobile').or(page.locator('#riftbound-nitro-video')))
  881  |                 .toBeAttached();
  882  |             });
  883  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  884  |               await expect
  885  |                 .soft(
  886  |                   page
  887  |                     .locator('#riftbound-display-all-pages')
  888  |                     .or(page.locator('#riftbound-nitro-l'))
  889  |                     .or(page.locator('#riftbound-nitro-3'))
  890  |                     .first()
  891  |                 )
  892  |                 .not.toBeVisible();
  893  |             });
  894  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  895  |               await expect
  896  |                 .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  897  |                 .not.toBeVisible();
  898  |             });
  899  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  900  |               await expect
  901  |                 .soft(
  902  |                   page.locator('#web-riftbound-display-footer-m').or(page.locator('#riftbound-nitro-anchor-mobile'))
  903  |                 )
> 904  |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  905  |             });
  906  |             break;
  907  |           case '2XKO':
  908  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  909  |               await expect
  910  |                 .soft(page.locator('#xko-video-all-pages-mobile').or(page.locator('#\\32 xko-nitro-video')))
  911  |                 .toBeAttached();
  912  |             });
  913  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  914  |               await expect
  915  |                 .soft(
  916  |                   page
  917  |                     .locator('#xko-display-all-pages')
  918  |                     .or(page.locator('#\\32 xko-nitro-l'))
  919  |                     .or(page.locator('#\\32 xko-nitro-3'))
  920  |                     .first()
  921  |                 )
  922  |                 .not.toBeVisible();
  923  |             });
  924  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  925  |               await expect
  926  |                 .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  927  |                 .not.toBeVisible();
  928  |             });
  929  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  930  |               await expect
  931  |                 .soft(page.locator('#web-2xko-display-footer-m').or(page.locator('#\\32 xko-nitro-anchor-mobile')))
  932  |                 .toBeAttached();
  933  |             });
  934  |             break;
  935  |           case 'Marvel Rivals':
  936  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  937  |               await expect
  938  |                 .soft(
  939  |                   page.locator('#marvel-rivals-video-all-pages-mobile').or(page.locator('#marvel-rivals-nitro-video'))
  940  |                 )
  941  |                 .toBeAttached();
  942  |             });
  943  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  944  |               await expect
  945  |                 .soft(
  946  |                   page
  947  |                     .locator('#marvel-rivals-display-all-pages')
  948  |                     .or(page.locator('#marvel-rivals-nitro-l'))
  949  |                     .or(page.locator('#marvel-rivals-nitro-3'))
  950  |                     .first()
  951  |                 )
  952  |                 .not.toBeVisible();
  953  |             });
  954  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  955  |               await expect
  956  |                 .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  957  |                 .not.toBeVisible();
  958  |             });
  959  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  960  |               await expect
  961  |                 .soft(
  962  |                   page
  963  |                     .locator('#web-marvel-rivals-display-footer-m')
  964  |                     .or(page.locator('#marvel-rivals-nitro-anchor-mobile'))
  965  |                 )
  966  |                 .toBeAttached();
  967  |             });
  968  |             break;
  969  |           case 'Deadlock':
  970  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  971  |               await expect
  972  |                 .soft(page.locator('#deadlock-video-all-pages-mobile').or(page.locator('#deadlock-nitro-video')))
  973  |                 .toBeAttached();
  974  |             });
  975  |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  976  |               await expect
  977  |                 .soft(
  978  |                   page
  979  |                     .locator('#deadlock-display-all-pages')
  980  |                     .or(page.locator('#deadlock-nitro-l'))
  981  |                     .or(page.locator('#deadlock-nitro-3'))
  982  |                     .first()
  983  |                 )
  984  |                 .not.toBeVisible();
  985  |             });
  986  |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  987  |               await expect
  988  |                 .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  989  |                 .not.toBeVisible();
  990  |             });
  991  |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  992  |               await expect
  993  |                 .soft(page.locator('#web-deadlock-display-footer-m').or(page.locator('#deadlock-nitro-anchor-mobile')))
  994  |                 .toBeAttached();
  995  |             });
  996  |             break;
  997  |           case 'Diablo 4':
  998  |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  999  |               await expect
  1000 |                 .soft(page.locator('#diablo-4-video-all-pages-mobile').or(page.locator('#diablo-4-nitro-video')))
  1001 |                 .toBeAttached();
  1002 |             });
  1003 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1004 |               await expect
```