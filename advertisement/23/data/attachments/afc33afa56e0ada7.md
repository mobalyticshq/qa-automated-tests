# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check video block, footer banner, L vertical banner, S vertical banner for regular user - ZZZ in desktop at 1680x1050 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:3550:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#zzz-video-all-pages').or(locator('#zzz-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#zzz-video-all-pages').or(locator('#zzz-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad7c5f9ad8289a
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

Locator: locator('#zzz-display-all-pages').or(locator('#zzz-nitro-l')).or(locator('#zzz-nitro-3')).first()
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#zzz-display-all-pages').or(locator('#zzz-nitro-l')).or(locator('#zzz-nitro-3')).first()

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad7c5f9ad8289a
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

Locator: locator('#zzz-display-small-all-pages').or(locator('#zzz-nitro-m'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#zzz-display-small-all-pages').or(locator('#zzz-nitro-m'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad7c5f9ad8289a
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

Locator: locator('#web-zzz-display-footer-d').or(locator('#zzz-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-zzz-display-footer-d').or(locator('#zzz-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a2ad7c5f9ad8289a
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
  3554 |       const page = await regularUserContext.newPage();
  3555 |       await page.setViewportSize({ width: 1600, height: 1050 });
  3556 | 
  3557 |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  3558 |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  3559 |           waitUntil: 'domcontentloaded',
  3560 |         });
  3561 |       });
  3562 | 
  3563 |       switch (game) {
  3564 |         case 'STS 2':
  3565 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3566 |             await expect
  3567 |               .soft(
  3568 |                 page
  3569 |                   .locator('#slay-the-spire-2-video-all-pages')
  3570 |                   .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
  3571 |               )
  3572 |               .toBeVisible();
  3573 |           });
  3574 |           await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  3575 |             await expect
  3576 |               .soft(
  3577 |                 page
  3578 |                   .locator('#slay-the-spire-2-display-all-pages')
  3579 |                   .or(page.locator('#slay-the-spire-2-nitro-l').locator('xpath=..'))
  3580 |                   .or(page.locator('#slay-the-spire-2-nitro-3').locator('xpath=..'))
  3581 |                   .first()
  3582 |               )
  3583 |               .toBeVisible();
  3584 |           });
  3585 |           await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  3586 |             await expect
  3587 |               .soft(
  3588 |                 page
  3589 |                   .locator('#slay-the-spire-2-display-all-pages')
  3590 |                   .or(page.locator('#slay-the-spire-2-nitro-m').locator('xpath=..'))
  3591 |               )
  3592 |               .toBeVisible();
  3593 |           });
  3594 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3595 |             await expect
  3596 |               .soft(
  3597 |                 page
  3598 |                   .locator('#web-slay-the-spire-2-display-footer-d')
  3599 |                   .locator('xpath=..')
  3600 |                   .or(page.locator('#slay-the-spire-2-nitro-anchor').locator('xpath=..'))
  3601 |               )
  3602 |               .toBeVisible();
  3603 |           });
  3604 |           break;
  3605 |         case 'LoL':
  3606 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3607 |             await expect.soft(page.locator('#lol-video-all-pages').or(page.locator('#lol-nitro-video'))).toBeAttached();
  3608 |           });
  3609 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3610 |             await expect
  3611 |               .soft(
  3612 |                 page
  3613 |                   .locator('#lol-display-all-pages')
  3614 |                   .or(page.locator('#lol-nitro-l'))
  3615 |                   .or(page.locator('#lol-nitro-3'))
  3616 |                   .first()
  3617 |               )
  3618 |               .toBeAttached();
  3619 |           });
  3620 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3621 |             await expect
  3622 |               .soft(page.locator('#lol-display-small-all-pages').or(page.locator('#lol-nitro-m')))
  3623 |               .toBeAttached();
  3624 |           });
  3625 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3626 |             await expect
  3627 |               .soft(page.locator('#web-lol-display-footer-d').or(page.locator('#lol-nitro-anchor')))
  3628 |               .toBeAttached();
  3629 |           });
  3630 |           break;
  3631 |         case 'ZZZ':
  3632 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3633 |             await expect.soft(page.locator('#zzz-video-all-pages').or(page.locator('#zzz-nitro-video'))).toBeAttached();
  3634 |           });
  3635 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3636 |             await expect
  3637 |               .soft(
  3638 |                 page
  3639 |                   .locator('#zzz-display-all-pages')
  3640 |                   .or(page.locator('#zzz-nitro-l'))
  3641 |                   .or(page.locator('#zzz-nitro-3'))
  3642 |                   .first()
  3643 |               )
  3644 |               .toBeAttached();
  3645 |           });
  3646 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3647 |             await expect
  3648 |               .soft(page.locator('#zzz-display-small-all-pages').or(page.locator('#zzz-nitro-m')))
  3649 |               .toBeAttached();
  3650 |           });
  3651 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3652 |             await expect
  3653 |               .soft(page.locator('#web-zzz-display-footer-d').or(page.locator('#zzz-nitro-anchor')))
> 3654 |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  3655 |           });
  3656 |           break;
  3657 |         case 'Val':
  3658 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3659 |             await expect
  3660 |               .soft(page.locator('#valorant-video-all-pages').or(page.locator('#valorant-nitro-video')))
  3661 |               .toBeAttached();
  3662 |           });
  3663 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3664 |             await expect
  3665 |               .soft(
  3666 |                 page
  3667 |                   .locator('#valorant-display-all-pages')
  3668 |                   .or(page.locator('#valorant-nitro-l'))
  3669 |                   .or(page.locator('#valorant-nitro-3'))
  3670 |                   .first()
  3671 |               )
  3672 |               .toBeAttached();
  3673 |           });
  3674 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3675 |             await expect
  3676 |               .soft(page.locator('#valorant-display-small-all-pages').or(page.locator('#valorant-nitro-m')))
  3677 |               .toBeAttached();
  3678 |           });
  3679 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3680 |             await expect
  3681 |               .soft(page.locator('#web-valorant-display-footer-d').or(page.locator('#valorant-nitro-anchor')))
  3682 |               .toBeAttached();
  3683 |           });
  3684 |           break;
  3685 |         case 'TFT':
  3686 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3687 |             await expect.soft(page.locator('#tft-video-all-pages').or(page.locator('#tft-nitro-video'))).toBeAttached();
  3688 |           });
  3689 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3690 |             await expect
  3691 |               .soft(
  3692 |                 page
  3693 |                   .locator('#tft-display-all-pages')
  3694 |                   .or(page.locator('#tft-nitro-l'))
  3695 |                   .or(page.locator('#tft-nitro-3'))
  3696 |                   .first()
  3697 |               )
  3698 |               .toBeAttached();
  3699 |           });
  3700 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3701 |             await expect
  3702 |               .soft(page.locator('#tft-display-small-all-pages').or(page.locator('#tft-nitro-m')))
  3703 |               .toBeAttached();
  3704 |           });
  3705 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3706 |             await expect
  3707 |               .soft(page.locator('#web-tft-display-footer-d').or(page.locator('#tft-nitro-anchor')))
  3708 |               .toBeAttached();
  3709 |           });
  3710 |           break;
  3711 |         case 'PoE':
  3712 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3713 |             await expect.soft(page.locator('#poe-video-all-pages').or(page.locator('#poe-nitro-video'))).toBeAttached();
  3714 |           });
  3715 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3716 |             await expect
  3717 |               .soft(
  3718 |                 page
  3719 |                   .locator('#poe-display-all-pages')
  3720 |                   .or(page.locator('#poe-nitro-l'))
  3721 |                   .or(page.locator('#poe-nitro-3'))
  3722 |                   .first()
  3723 |               )
  3724 |               .toBeAttached();
  3725 |           });
  3726 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3727 |             await expect
  3728 |               .soft(page.locator('#poe-display-small-all-pages').or(page.locator('#poe-nitro-m')))
  3729 |               .toBeAttached();
  3730 |           });
  3731 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3732 |             await expect
  3733 |               .soft(page.locator('#web-poe-display-footer-d').or(page.locator('#poe-nitro-anchor')))
  3734 |               .toBeAttached();
  3735 |           });
  3736 |           break;
  3737 |         case 'PoE 2':
  3738 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3739 |             await expect
  3740 |               .soft(page.locator('#poe-2-video-all-pages').or(page.locator('#poe-2-nitro-video')))
  3741 |               .toBeAttached();
  3742 |           });
  3743 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3744 |             await expect
  3745 |               .soft(
  3746 |                 page
  3747 |                   .locator('#poe-2-display-all-pages')
  3748 |                   .or(page.locator('#poe-2-nitro-l'))
  3749 |                   .or(page.locator('#poe-2-nitro-3'))
  3750 |                   .first()
  3751 |               )
  3752 |               .toBeAttached();
  3753 |           });
  3754 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
```