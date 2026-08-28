# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check video block, footer banner, L vertical banner, S vertical banner for regular user - 2XKO in desktop at 1680x1050 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:3551:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#xko-video-all-pages').or(locator('#\\32 xko-nitro-video'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#xko-video-all-pages').or(locator('#\\32 xko-nitro-video'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3218ad7deb5ed3c
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

Locator: locator('#xko-display-all-pages').or(locator('#\\32 xko-nitro-l')).or(locator('#\\32 xko-nitro-3')).first()
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#xko-display-all-pages').or(locator('#\\32 xko-nitro-l')).or(locator('#\\32 xko-nitro-3')).first()

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3218ad7deb5ed3c
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

Locator: locator('#xko-display-small-all-pages').or(locator('#\\32 xko-nitro-m'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#xko-display-small-all-pages').or(locator('#\\32 xko-nitro-m'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a3218ad7deb5ed3c
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
  - code: a3218ad7deb5ed3c
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
  3818 |                   .locator('#web-mhw-display-footer-d')
  3819 | 
  3820 |                   .or(page.locator('#mhw-nitro-anchor'))
  3821 |               )
  3822 |               .toBeAttached();
  3823 |           });
  3824 |           break;
  3825 |         case 'Nightreign':
  3826 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3827 |             await expect
  3828 |               .soft(
  3829 |                 page
  3830 |                   .locator('#elden-ring-nightreign-video-all-pages')
  3831 |                   .or(page.locator('#elden-ring-nightreign-nitro-video'))
  3832 |               )
  3833 |               .toBeAttached();
  3834 |           });
  3835 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3836 |             await expect
  3837 |               .soft(
  3838 |                 page
  3839 |                   .locator('#elden-ring-nightreign-display-all-pages')
  3840 |                   .or(page.locator('#elden-ring-nightreign-nitro-l'))
  3841 |                   .or(page.locator('#elden-ring-nightreign-nitro-3'))
  3842 |                   .first()
  3843 |               )
  3844 |               .toBeAttached();
  3845 |           });
  3846 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3847 |             await expect
  3848 |               .soft(
  3849 |                 page
  3850 |                   .locator('#elden-ring-nightreign-display-small-all-pages')
  3851 |                   .or(page.locator('#elden-ring-nightreign-nitro-m'))
  3852 |               )
  3853 |               .toBeAttached();
  3854 |           });
  3855 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3856 |             await expect
  3857 |               .soft(
  3858 |                 page
  3859 |                   .locator('#web-elden-ring-nightreign-display-footer-d')
  3860 |                   .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
  3861 |               )
  3862 |               .toBeAttached();
  3863 |           });
  3864 |           break;
  3865 |         case 'Riftbound':
  3866 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3867 |             await expect
  3868 |               .soft(page.locator('#riftbound-video-all-pages').or(page.locator('#riftbound-nitro-video')))
  3869 |               .toBeAttached();
  3870 |           });
  3871 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3872 |             await expect
  3873 |               .soft(
  3874 |                 page
  3875 |                   .locator('#riftbound-display-all-pages')
  3876 |                   .or(page.locator('#riftbound-nitro-l'))
  3877 |                   .or(page.locator('#riftbound-nitro-3'))
  3878 |                   .first()
  3879 |               )
  3880 |               .toBeAttached();
  3881 |           });
  3882 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3883 |             await expect
  3884 |               .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  3885 |               .toBeAttached();
  3886 |           });
  3887 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3888 |             await expect
  3889 |               .soft(page.locator('#web-riftbound-display-footer-d').or(page.locator('#riftbound-nitro-anchor')))
  3890 |               .toBeAttached();
  3891 |           });
  3892 |           break;
  3893 |         case '2XKO':
  3894 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3895 |             await expect
  3896 |               .soft(page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video')))
  3897 |               .toBeAttached();
  3898 |           });
  3899 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3900 |             await expect
  3901 |               .soft(
  3902 |                 page
  3903 |                   .locator('#xko-display-all-pages')
  3904 |                   .or(page.locator('#\\32 xko-nitro-l'))
  3905 |                   .or(page.locator('#\\32 xko-nitro-3'))
  3906 |                   .first()
  3907 |               )
  3908 |               .toBeAttached();
  3909 |           });
  3910 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3911 |             await expect
  3912 |               .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  3913 |               .toBeAttached();
  3914 |           });
  3915 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3916 |             await expect
  3917 |               .soft(page.locator('#web-2xko-display-footer-d').or(page.locator('#\\32 xko-nitro-anchor')))
> 3918 |               .toBeAttached();
       |                ^ Error: expect(locator).toBeAttached() failed
  3919 |           });
  3920 |           break;
  3921 |         case 'Marvel Rivals':
  3922 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3923 |             await expect
  3924 |               .soft(page.locator('#marvel-rivals-video-all-pages').or(page.locator('#marvel-rivals-nitro-video')))
  3925 |               .toBeAttached();
  3926 |           });
  3927 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3928 |             await expect
  3929 |               .soft(
  3930 |                 page
  3931 |                   .locator('#marvel-rivals-display-all-pages')
  3932 |                   .or(page.locator('#marvel-rivals-nitro-l'))
  3933 |                   .or(page.locator('#marvel-rivals-nitro-3'))
  3934 |                   .first()
  3935 |               )
  3936 |               .toBeAttached();
  3937 |           });
  3938 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3939 |             await expect
  3940 |               .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  3941 |               .toBeAttached();
  3942 |           });
  3943 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3944 |             await expect
  3945 |               .soft(page.locator('#web-marvel-rivals-display-footer-d').or(page.locator('#marvel-rivals-nitro-anchor')))
  3946 |               .toBeAttached();
  3947 |           });
  3948 |           break;
  3949 |         case 'Deadlock':
  3950 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3951 |             await expect
  3952 |               .soft(page.locator('#deadlock-video-all-pages').or(page.locator('#deadlock-nitro-video')))
  3953 |               .toBeAttached();
  3954 |           });
  3955 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3956 |             await expect
  3957 |               .soft(
  3958 |                 page
  3959 |                   .locator('#deadlock-display-all-pages')
  3960 |                   .or(page.locator('#deadlock-nitro-l'))
  3961 |                   .or(page.locator('#deadlock-nitro-3'))
  3962 |                   .first()
  3963 |               )
  3964 |               .toBeAttached();
  3965 |           });
  3966 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  3967 |             await expect
  3968 |               .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  3969 |               .toBeAttached();
  3970 |           });
  3971 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  3972 |             await expect
  3973 |               .soft(
  3974 |                 page
  3975 |                   .locator('#web-deadlock-display-footer-d')
  3976 |                   .locator('xpath=..')
  3977 |                   .or(page.locator('#deadlock-nitro-anchor'))
  3978 |               )
  3979 |               .toBeAttached();
  3980 |           });
  3981 |           break;
  3982 |         case 'Diablo 4':
  3983 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  3984 |             await expect
  3985 |               .soft(page.locator('#diablo-4-video-all-pages').or(page.locator('#diablo-4-nitro-video')))
  3986 |               .toBeAttached();
  3987 |           });
  3988 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  3989 |             await expect
  3990 |               .soft(
  3991 |                 page
  3992 |                   .locator('#diablo-4-display-all-pages')
  3993 |                   .or(page.locator('#diablo-4-nitro-l'))
  3994 |                   .or(page.locator('#diablo-4-nitro-3'))
  3995 |                   .first()
  3996 |               )
  3997 |               .toBeAttached();
  3998 |           });
  3999 |           await test.step(`Expected Result: Small vertical banner is present on the page`, async () => {
  4000 |             await expect
  4001 |               .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
  4002 |               .toBeAttached();
  4003 |           });
  4004 |           await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  4005 |             await expect
  4006 |               .soft(page.locator('#web-diablo-4-display-footer-d').or(page.locator('#diablo-4-nitro-anchor')))
  4007 |               .toBeAttached();
  4008 |           });
  4009 |           break;
  4010 |         case 'Destiny 2':
  4011 |           await test.step(`Expected Result: Video banner is present on the page`, async () => {
  4012 |             await expect
  4013 |               .soft(page.locator('#destiny-2-video-all-pages').or(page.locator('#destiny-2-nitro-video')))
  4014 |               .toBeAttached();
  4015 |           });
  4016 |           await test.step(`Expected Result: Big vertical banner is present on the page`, async () => {
  4017 |             await expect
  4018 |               .soft(
```