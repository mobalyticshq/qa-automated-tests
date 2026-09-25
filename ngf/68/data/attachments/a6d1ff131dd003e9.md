# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accounts/account.test.js >> Change display name
- Location: e2e-tests/accounts/account.test.js:19:1

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: page.goto: Test timeout of 90000ms exceeded.
Call log:
  - navigating to "https://stg.mobalytics.gg/mhw/account-settings/account-information", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Monster Hunter World banner text Learn more Close":
        - /url: https://www.google.com
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e11]: Monster Hunter World banner text
            - button "Learn more" [ref=e12]
          - img "Close" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e15]:
          - link "Mobalytics" [ref=e16] [cursor=pointer]:
            - /url: /mhw
            - img "Mobalytics" [ref=e17]
          - generic [ref=e19]:
            - link "League of Legends LoL" [ref=e21] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/lol
              - generic [ref=e23]:
                - img "League of Legends" [ref=e24]
                - generic [ref=e25]: LoL
            - link "Teamfight Tactics TFT" [ref=e27] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/tft
              - generic [ref=e29]:
                - img "Teamfight Tactics" [ref=e30]
                - generic [ref=e31]: TFT
            - link "Diablo 4 Diablo 4" [ref=e33] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/diablo-4
              - generic [ref=e35]:
                - img "Diablo 4" [ref=e36]
                - generic [ref=e37]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e39] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe-2
              - generic [ref=e41]:
                - img "Path of Exile 2" [ref=e42]
                - generic [ref=e43]: PoE 2
            - link "Path of Exile PoE" [ref=e45] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe
              - generic [ref=e47]:
                - img "Path of Exile" [ref=e48]
                - generic [ref=e49]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=e51] [cursor=pointer]':
              - /url: https://stg.mobalytics.gg/wow-forever
              - generic [ref=e53]:
                - 'img "World of Warcraft: Forever" [ref=e54]'
                - generic [ref=e55]: WoW Forever
                - generic [ref=e57]: New
            - link "Destiny 2 Destiny 2" [ref=e59] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/destiny-2
              - generic [ref=e61]:
                - img "Destiny 2" [ref=e62]
                - generic [ref=e63]: Destiny 2
            - link "Marathon Marathon" [ref=e65] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/marathon
              - generic [ref=e67]:
                - img "Marathon" [ref=e68]
                - generic [ref=e69]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e71] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/slay-the-spire-2
              - generic [ref=e73]:
                - img "Slay the Spire 2" [ref=e74]
                - generic [ref=e75]: STS 2
            - link "Deadlock Deadlock" [ref=e77] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e79]:
                - img "Deadlock" [ref=e80]
                - generic [ref=e81]: Deadlock
            - link "Overwatch Overwatch" [ref=e83] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/overwatch
              - generic [ref=e85]:
                - img "Overwatch" [ref=e86]
                - generic [ref=e87]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e89] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/borderlands-4
              - generic [ref=e91]:
                - img "Borderlands 4" [ref=e92]
                - generic [ref=e93]: Borderlands 4
            - link "Valorant VAL" [ref=e95] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/valorant
              - generic [ref=e97]:
                - img "Valorant" [ref=e98]
                - generic [ref=e99]: VAL
            - link "Neverness to Everness NTE" [ref=e101] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/neverness-to-everness
              - generic [ref=e103]:
                - img "Neverness to Everness" [ref=e104]
                - generic [ref=e105]: NTE
            - button [ref=e106] [cursor=pointer]:
              - img [ref=e107]
            - generic:
              - 'link "Arknights: Endfield Endfield"':
                - /url: https://stg.mobalytics.gg/arknights-endfield
                - generic:
                  - generic:
                    - 'img "Arknights: Endfield"'
                    - generic: Endfield
            - generic:
              - link "Elden Ring Nightreign Nightreign":
                - /url: https://stg.mobalytics.gg/elden-ring-nightreign
                - generic:
                  - generic:
                    - img "Elden Ring Nightreign"
                    - generic: Nightreign
            - generic:
              - link "Monster Hunter Wilds Monster Hunter Wilds":
                - /url: https://stg.mobalytics.gg/mhw
                - generic:
                  - generic:
                    - img "Monster Hunter Wilds"
                    - generic: Monster Hunter Wilds
            - generic:
              - link "Hades 2 Hades 2":
                - /url: https://stg.mobalytics.gg/hades-2
                - generic:
                  - generic:
                    - img "Hades 2"
                    - generic: Hades 2
            - generic:
              - link "The Bazaar The Bazaar":
                - /url: https://stg.mobalytics.gg/the-bazaar
                - generic:
                  - generic:
                    - img "The Bazaar"
                    - generic: The Bazaar
            - generic:
              - link "Marvel Rivals Marvel Rivals":
                - /url: https://stg.mobalytics.gg/marvel-rivals
                - generic:
                  - generic:
                    - img "Marvel Rivals"
                    - generic: Marvel Rivals
            - generic:
              - link "Zenless Zone Zero ZZZ":
                - /url: https://stg.mobalytics.gg/zzz
                - generic:
                  - generic:
                    - img "Zenless Zone Zero"
                    - generic: ZZZ
            - generic:
              - link "2XKO 2XKO":
                - /url: https://stg.mobalytics.gg/2xko
                - generic:
                  - generic:
                    - img "2XKO"
                    - generic: 2XKO
            - generic:
              - link "Riftbound Riftbound":
                - /url: https://stg.mobalytics.gg/riftbound
                - generic:
                  - generic:
                    - img "Riftbound"
                    - generic: Riftbound
            - generic:
              - link "Genshin Impact Genshin New":
                - /url: https://stg.mobalytics.gg/genshin-impact
                - generic:
                  - generic:
                    - img "Genshin Impact"
                    - generic: Genshin
                    - generic:
                      - generic: New
        - generic [ref=e108]:
          - generic [ref=e109]:
            - generic [ref=e114] [cursor=pointer]:
              - button "plus Rewards" [ref=e115]:
                - img "plus" [ref=e117]
                - generic [ref=e118]: Rewards
              - generic [ref=e120]: New
            - link "DOWNLOAD APP" [ref=e121] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-mhw&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e123]:
                - img [ref=e124]
                - text: DOWNLOAD APP
            - link "Gamebase" [ref=e126] [cursor=pointer]:
              - /url: /gamebase
              - generic [ref=e127]: Gamebase
          - generic [ref=e128]:
            - button "Remove Ads" [ref=e129] [cursor=pointer]
            - generic [ref=e130]:
              - link "D displayName-a385" [ref=e131] [cursor=pointer]:
                - /url: /mhw/profile/dad-vtqcl5
                - generic [ref=e133]:
                  - generic [ref=e135]: D
                  - generic [ref=e137]: displayName-a385
              - button "Notifications" [ref=e139] [cursor=pointer]:
                - img [ref=e140]
              - button [ref=e142] [cursor=pointer]:
                - img [ref=e144]
              - button "Theme" [ref=e146] [cursor=pointer]:
                - img "Theme" [ref=e148]
        - generic [ref=e150]:
          - link "Home" [ref=e153] [cursor=pointer]:
            - /url: /mhw
            - img "Home" [ref=e155]
          - link "Profile" [ref=e158] [cursor=pointer]:
            - /url: /mhw/profile
            - img "Profile" [ref=e160]
          - link "Build Planner" [ref=e163] [cursor=pointer]:
            - /url: /mhw/planner/builds
            - img "Build Planner" [ref=e165]
          - link "Builds" [ref=e168] [cursor=pointer]:
            - /url: /mhw/builds
            - img "Builds" [ref=e170]
          - link "Weapons" [ref=e173] [cursor=pointer]:
            - /url: /mhw/weapons
            - img "Weapons" [ref=e175]
          - link "Monster Guides" [ref=e178] [cursor=pointer]:
            - /url: /mhw/monster-guides
            - img "Monster Guides" [ref=e180]
          - link "Guides" [ref=e183] [cursor=pointer]:
            - /url: /mhw/guides
            - img "Guides" [ref=e185]
        - generic [ref=e187]:
          - main [ref=e188]:
            - generic [ref=e191]:
              - generic [ref=e192]:
                - heading "Settings" [level=1] [ref=e193]
                - link "Account Information" [ref=e194] [cursor=pointer]:
                  - /url: /mhw/account-settings/account-information
                  - paragraph [ref=e195]: Account Information
                - link "Connections" [ref=e196] [cursor=pointer]:
                  - /url: /mhw/account-settings/connections
                  - paragraph [ref=e197]: Connections
                - link "Profile" [ref=e198] [cursor=pointer]:
                  - /url: /mhw/account-settings/profile
                  - paragraph [ref=e199]: Profile
                - link "Appearance" [ref=e200] [cursor=pointer]:
                  - /url: /mhw/account-settings/appearance
                  - paragraph [ref=e201]: Appearance
                - link "Notifications" [ref=e202] [cursor=pointer]:
                  - /url: /mhw/account-settings/notifications
                  - paragraph [ref=e203]: Notifications
                - link "Billing Info" [ref=e204] [cursor=pointer]:
                  - /url: /mhw/account-settings/billing-info
                  - paragraph [ref=e205]: Billing Info
              - generic [ref=e206]:
                - paragraph [ref=e207]: Account Information
                - generic [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]:
                      - generic [ref=e214]: Username
                      - generic [ref=e215]: dad-vtqcl5
                    - button "Change Username" [ref=e216] [cursor=pointer]
                  - generic [ref=e217]:
                    - generic [ref=e218]:
                      - generic [ref=e220]: Email
                      - generic [ref=e221]: rewad+stg-aqa-change-name@mobalyticshq.com
                    - button "Change Email" [ref=e222] [cursor=pointer]
                  - generic [ref=e223]:
                    - generic [ref=e224]:
                      - generic [ref=e226]: Password
                      - generic [ref=e227]: "********"
                    - button "Change Password" [ref=e228] [cursor=pointer]
                - button "Delete Account" [ref=e232] [cursor=pointer]
          - complementary [ref=e238]:
            - generic [ref=e239]:
              - generic [ref=e241]:
                - generic [ref=e243] [cursor=pointer]:
                  - generic [ref=e244]: Advertisement
                  - generic [ref=e245]: Remove Ads
                - generic [ref=e249] [cursor=pointer]:
                  - generic [ref=e250]: Remove all ads
                  - generic [ref=e251]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e252]
              - generic [ref=e254]:
                - generic [ref=e256] [cursor=pointer]:
                  - generic [ref=e257]: Advertisement
                  - generic [ref=e258]: Remove Ads
                - generic [ref=e262] [cursor=pointer]:
                  - generic [ref=e263]: Remove all ads
                  - generic [ref=e264]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e265]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e269]:
    - banner [ref=e270]:
      - generic [ref=e271] [cursor=pointer]:
        - generic [ref=e272]: Advertisement
        - generic [ref=e273]: Remove Ads
    - generic [ref=e276] [cursor=pointer]:
      - generic [ref=e277]: Remove all ads
      - generic [ref=e278]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e279]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixture';
  2  | import { Moba } from '../../app/page-object/moba';
  3  | import { v4 as uuidv4 } from 'uuid';
  4  | 
  5  | test('Delete mobalytics account', async ({ page, uiRegisterAccount }) => {
  6  |   const moba = uiRegisterAccount;
  7  | 
  8  |   await expect(moba.navbar.mgpProfileButton).toBeVisible();
  9  |   await page.goto(`${process.env.BASE_URL}/mhw/account-settings/account-information?beta-v2`);
  10 |   //! await moba.navbar.gotoAccountSettingsPage();
  11 |   await moba.accountInformationTab.deleteAccount();
  12 | 
  13 |   await test.step('Account is deleted', async () => {
  14 |     await expect(moba.byeBye.header).toBeVisible();
  15 |     await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
  16 |   });
  17 | });
  18 | 
  19 | test('Change display name', async ({ page }) => {
  20 |   const moba = new Moba(page);
  21 |   const uniqueId = uuidv4().substring(0, 4);
  22 |   const displayName = `displayName-${uniqueId}`;
  23 |   const credentials =
  24 |     process.env.BASE_URL === 'https://mobalytics.gg'
  25 |       ? 'rewad+prod-aqa-change-name@mobalyticshq.com' // prod account
  26 |       : 'rewad+stg-aqa-change-name@mobalyticshq.com'; // stg account
  27 | 
  28 |   await moba.mainURLs.openBorderlands4Page();
  29 |   await moba.navbar.gotoSignInPage();
  30 |   await moba.signInPage.loginUser(credentials, credentials);
  31 |   await expect(moba.navbar.mgpProfileButton).toBeVisible();
> 32 |   await page.goto(`${process.env.BASE_URL}/mhw/account-settings/account-information`);
     |              ^ Error: page.goto: Test timeout of 90000ms exceeded.
  33 |   //! await moba.navbar.gotoAccountSettingsPage();
  34 |   await moba.accountSettingsPage.selectProfileTab();
  35 |   await moba.profileTab.changeDisplayName(displayName);
  36 | 
  37 |   await test.step(`Account name is changed to a new account name: ${displayName}`, async () => {
  38 |     await expect(moba.profileTab.previewProfileDisplayName(displayName)).toBeVisible();
  39 |     await expect(moba.profileTab.widgetDisplayName(displayName)).toBeVisible();
  40 |   });
  41 | 
  42 |   await moba.navbar.profileNameMenu(displayName).click();
  43 | 
  44 |   await test.step(`Account name isd changed to a new account name: ${displayName}`, async () => {
  45 |     await expect(moba.mgpProfile.displayNameHeader(displayName)).toBeVisible();
  46 |   });
  47 | });
  48 | 
```