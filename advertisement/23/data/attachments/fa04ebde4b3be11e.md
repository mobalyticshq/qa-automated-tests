# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-adFree-user.test.js >> Verify ad blocks for ad-free user >> Check video block, footer banner, L vertical banner, S vertical banner for ad free user - LoL in desktop at 1680x1050 viewport size
- Location: e2e-tests/advertisement/ad-adFree-user.test.js:3549:5

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
  - code: a2ad4b51fc9e289a
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
  - code: a2ad4b51fc9e289a
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

Locator: locator('#lol-display-small-all-pages').or(locator('#lol-nitro-m'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#lol-display-small-all-pages').or(locator('#lol-nitro-m'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad4b51fc9e289a
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
  - code: a2ad4b51fc9e289a
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
  3530 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3531 |               await expect
  3532 |                 .soft(
  3533 |                   page
  3534 |                     .locator('#web-overwatch-display-footer-d')
  3535 |                     .locator('xpath=..')
  3536 |                     .or(page.locator('#overwatch-nitro-anchor').locator('xpath=..'))
  3537 |                 )
  3538 |                 .not.toBeVisible();
  3539 |             });
  3540 |             break;
  3541 |         }
  3542 |       } finally {
  3543 |         await adFreeUserContext.close();
  3544 |       }
  3545 |     });
  3546 |   });
  3547 | 
  3548 |   filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  3549 |     test(`Check video block, footer banner, L vertical banner, S vertical banner for ad free user - ${game} in desktop at 1680x1050 viewport size`, async ({
  3550 |       browser,
  3551 |     }) => {
  3552 |       const adFreeUserContext = await browser.newContext({ storageState: '.auth/adFreeUserAuth.json' });
  3553 |       const page = await adFreeUserContext.newPage();
  3554 |       await page.setViewportSize({ width: 1600, height: 1050 });
  3555 | 
  3556 |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  3557 |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  3558 |           waitUntil: 'domcontentloaded',
  3559 |         });
  3560 |       });
  3561 | 
  3562 |       try {
  3563 |         switch (game) {
  3564 |           case 'STS 2':
  3565 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3566 |               await expect
  3567 |                 .soft(
  3568 |                   page
  3569 |                     .locator('#slay-the-spire-2-video-all-pages')
  3570 |                     .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
  3571 |                 )
  3572 |                 .not.toBeVisible();
  3573 |             });
  3574 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  3575 |               await expect
  3576 |                 .soft(
  3577 |                   page
  3578 |                     .locator('#slay-the-spire-2-display-all-pages')
  3579 |                     .or(page.locator('#slay-the-spire-2-nitro-l').locator('xpath=..'))
  3580 |                     .or(page.locator('#slay-the-spire-2-nitro-3').locator('xpath=..'))
  3581 |                     .first()
  3582 |                 )
  3583 |                 .not.toBeVisible();
  3584 |             });
  3585 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3586 |               await expect
  3587 |                 .soft(
  3588 |                   page
  3589 |                     .locator('#slay-the-spire-2-display-small-all-pages')
  3590 |                     .or(page.locator('#slay-the-spire-2-nitro-m').locator('xpath=..'))
  3591 |                 )
  3592 |                 .not.toBeVisible();
  3593 |             });
  3594 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3595 |               await expect
  3596 |                 .soft(
  3597 |                   page
  3598 |                     .locator('#web-slay-the-spire-2-display-footer-d')
  3599 |                     .locator('xpath=..')
  3600 |                     .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
  3601 |                 )
  3602 |                 .not.toBeVisible();
  3603 |             });
  3604 |             break;
  3605 |           case 'LoL':
  3606 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3607 |               await expect
  3608 |                 .soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video')))
  3609 |                 .toBeAttached();
  3610 |             });
  3611 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3612 |               await expect
  3613 |                 .soft(
  3614 |                   page
  3615 |                     .locator('#lol-display-all-pages')
  3616 |                     .or(page.locator('#lol-nitro-l'))
  3617 |                     .or(page.locator('#lol-nitro-3'))
  3618 |                     .first()
  3619 |                 )
  3620 |                 .toBeAttached();
  3621 |             });
  3622 |             await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3623 |               await expect
  3624 |                 .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  3625 |                 .toBeAttached();
  3626 |             });
  3627 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3628 |               await expect
  3629 |                 .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
> 3630 |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  3631 |             });
  3632 |             break;
  3633 |           case 'ZZZ':
  3634 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3635 |               await expect
  3636 |                 .soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video')))
  3637 |                 .not.toBeVisible();
  3638 |             });
  3639 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3640 |               await expect
  3641 |                 .soft(
  3642 |                   page
  3643 |                     .locator('#zzz-display-all-pages')
  3644 |                     .or(page.locator('#zzz-nitro-l'))
  3645 |                     .or(page.locator('#zzz-nitro-3'))
  3646 |                     .first()
  3647 |                 )
  3648 |                 .not.toBeVisible();
  3649 |             });
  3650 |             await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3651 |               await expect
  3652 |                 .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
  3653 |                 .not.toBeVisible();
  3654 |             });
  3655 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3656 |               await expect
  3657 |                 .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
  3658 |                 .not.toBeVisible();
  3659 |             });
  3660 |             break;
  3661 |           case 'Val':
  3662 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3663 |               await expect
  3664 |                 .soft(page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video')))
  3665 |                 .not.toBeVisible();
  3666 |             });
  3667 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3668 |               await expect
  3669 |                 .soft(
  3670 |                   page
  3671 |                     .locator('#valorant-display-all-pages')
  3672 |                     .or(page.locator('#valorant-nitro-l'))
  3673 |                     .or(page.locator('#valorant-nitro-3'))
  3674 |                     .first()
  3675 |                 )
  3676 |                 .not.toBeVisible();
  3677 |             });
  3678 |             await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3679 |               await expect
  3680 |                 .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
  3681 |                 .not.toBeVisible();
  3682 |             });
  3683 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3684 |               await expect
  3685 |                 .soft(page.locator('#web-valorant-display-footer-d').or(page.locator('#valorant-nitro-anchor')))
  3686 |                 .not.toBeVisible();
  3687 |             });
  3688 |             break;
  3689 |           case 'TFT':
  3690 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3691 |               await expect
  3692 |                 .soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video')))
  3693 |                 .toBeAttached();
  3694 |             });
  3695 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3696 |               await expect
  3697 |                 .soft(
  3698 |                   page
  3699 |                     .locator('#tft-display-all-pages')
  3700 |                     .or(page.locator('#tft-nitro-l'))
  3701 |                     .or(page.locator('#tft-nitro-3'))
  3702 |                     .first()
  3703 |                 )
  3704 |                 .toBeAttached();
  3705 |             });
  3706 |             await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3707 |               await expect
  3708 |                 .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
  3709 |                 .toBeAttached();
  3710 |             });
  3711 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3712 |               await expect
  3713 |                 .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
  3714 |                 .toBeAttached();
  3715 |             });
  3716 |             break;
  3717 |           case 'PoE':
  3718 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3719 |               await expect
  3720 |                 .soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video')))
  3721 |                 .not.toBeVisible();
  3722 |             });
  3723 |             await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3724 |               await expect
  3725 |                 .soft(
  3726 |                   page
  3727 |                     .locator('#poe-display-all-pages')
  3728 |                     .or(page.locator('#poe-nitro-l'))
  3729 |                     .or(page.locator('#poe-nitro-3'))
  3730 |                     .first()
```