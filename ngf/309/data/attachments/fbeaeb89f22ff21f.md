# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: account.test.js >> Delete mobalytics account
- Location: e2e-tests/account.test.js:6:1

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
            - link "Destiny 2 Destiny 2" [ref=e51] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/destiny-2
              - generic [ref=e53]:
                - img "Destiny 2" [ref=e54]
                - generic [ref=e55]: Destiny 2
            - link "Marathon Marathon" [ref=e57] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/marathon
              - generic [ref=e59]:
                - img "Marathon" [ref=e60]
                - generic [ref=e61]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e63] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/slay-the-spire-2
              - generic [ref=e65]:
                - img "Slay the Spire 2" [ref=e66]
                - generic [ref=e67]: STS 2
            - link "Deadlock Deadlock" [ref=e69] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e71]:
                - img "Deadlock" [ref=e72]
                - generic [ref=e73]: Deadlock
            - link "Overwatch Overwatch" [ref=e75] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/overwatch
              - generic [ref=e77]:
                - img "Overwatch" [ref=e78]
                - generic [ref=e79]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e81] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/borderlands-4
              - generic [ref=e83]:
                - img "Borderlands 4" [ref=e84]
                - generic [ref=e85]: Borderlands 4
            - link "Valorant VAL" [ref=e87] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/valorant
              - generic [ref=e89]:
                - img "Valorant" [ref=e90]
                - generic [ref=e91]: VAL
            - link "Neverness to Everness NTE New" [ref=e93] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/neverness-to-everness
              - generic [ref=e95]:
                - img "Neverness to Everness" [ref=e96]
                - generic [ref=e97]: NTE
                - generic [ref=e99]: New
            - 'link "Arknights: Endfield Endfield" [ref=e101] [cursor=pointer]':
              - /url: https://stg.mobalytics.gg/arknights-endfield
              - generic [ref=e103]:
                - 'img "Arknights: Endfield" [ref=e104]'
                - generic [ref=e105]: Endfield
            - link "Elden Ring Nightreign Nightreign" [ref=e107] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/elden-ring-nightreign
              - generic [ref=e109]:
                - img "Elden Ring Nightreign" [ref=e110]
                - generic [ref=e111]: Nightreign
            - button [ref=e112] [cursor=pointer]:
              - img [ref=e113]
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
              - link "Example game ExG":
                - /url: https://stg.mobalytics.gg/example-game
                - generic:
                  - generic:
                    - img "Example game"
                    - generic: ExG
            - generic:
              - link "Genshin Impact Genshin New":
                - /url: https://stg.mobalytics.gg/genshin-impact
                - generic:
                  - generic:
                    - img "Genshin Impact"
                    - generic: Genshin
                    - generic:
                      - generic: New
        - generic [ref=e114]:
          - generic [ref=e115]:
            - generic [ref=e120] [cursor=pointer]:
              - button "plus Rewards" [ref=e121]:
                - img "plus" [ref=e123]
                - generic [ref=e124]: Rewards
              - generic [ref=e126]: New
            - link "DOWNLOAD APP" [ref=e127] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-mhw&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e129]:
                - img [ref=e130]
                - text: DOWNLOAD APP
            - link "Gamebase" [ref=e132] [cursor=pointer]:
              - /url: /gamebase
              - generic [ref=e133]: Gamebase
          - generic [ref=e134]:
            - button "Remove Ads" [ref=e135] [cursor=pointer]
            - generic [ref=e136]:
              - link "N ns+cb11@mobalyticshq.com" [ref=e137] [cursor=pointer]:
                - /url: /mhw/profile/grim-dagger-6n2aql
                - generic [ref=e139]:
                  - generic [ref=e141]: "N"
                  - generic [ref=e143]: ns+cb11@mobalyticshq.com
              - button [ref=e145] [cursor=pointer]:
                - img [ref=e147]
              - button "Theme" [ref=e149] [cursor=pointer]:
                - img "Theme" [ref=e151]
        - generic [ref=e153]:
          - link "Home" [ref=e156] [cursor=pointer]:
            - /url: /mhw
            - img "Home" [ref=e158]
          - link "Profile" [ref=e161] [cursor=pointer]:
            - /url: /mhw/profile
            - img "Profile" [ref=e163]
          - link "Build Planner" [ref=e166] [cursor=pointer]:
            - /url: /mhw/planner/builds
            - img "Build Planner" [ref=e168]
          - link "Builds" [ref=e171] [cursor=pointer]:
            - /url: /mhw/builds
            - img "Builds" [ref=e173]
          - link "Weapons" [ref=e176] [cursor=pointer]:
            - /url: /mhw/weapons
            - img "Weapons" [ref=e178]
          - link "Monster Guides" [ref=e181] [cursor=pointer]:
            - /url: /mhw/monster-guides
            - img "Monster Guides" [ref=e183]
          - link "Guides" [ref=e186] [cursor=pointer]:
            - /url: /mhw/guides
            - img "Guides" [ref=e188]
        - generic [ref=e190]:
          - main [ref=e191]:
            - generic [ref=e194]:
              - generic [ref=e195]:
                - heading "Settings" [level=1] [ref=e196]
                - link "Account Information" [ref=e197] [cursor=pointer]:
                  - /url: /mhw/account-settings/account-information
                  - paragraph [ref=e198]: Account Information
                - link "Connections" [ref=e199] [cursor=pointer]:
                  - /url: /mhw/account-settings/connections
                  - paragraph [ref=e200]: Connections
                - link "Profile" [ref=e201] [cursor=pointer]:
                  - /url: /mhw/account-settings/profile
                  - paragraph [ref=e202]: Profile
                - link "Appearance" [ref=e203] [cursor=pointer]:
                  - /url: /mhw/account-settings/appearance
                  - paragraph [ref=e204]: Appearance
                - link "Billing Info" [ref=e205] [cursor=pointer]:
                  - /url: /mhw/account-settings/billing-info
                  - paragraph [ref=e206]: Billing Info
              - generic [ref=e207]:
                - paragraph [ref=e208]: Account Information
                - generic [ref=e211]:
                  - generic [ref=e212]:
                    - generic [ref=e213]:
                      - generic [ref=e215]: Username
                      - generic [ref=e216]: grim-dagger-6n2aql
                    - button "Change Username" [ref=e217] [cursor=pointer]
                  - generic [ref=e218]:
                    - generic [ref=e219]:
                      - generic [ref=e221]: Email
                      - generic [ref=e222]: ns+cb11@mobalyticshq.com
                    - button "Change Email" [ref=e223] [cursor=pointer]
                  - generic [ref=e224]:
                    - generic [ref=e225]:
                      - generic [ref=e227]: Password
                      - generic [ref=e228]: "********"
                    - button "Change Password" [ref=e229] [cursor=pointer]
                - button "Delete Account" [ref=e233] [cursor=pointer]
          - complementary [ref=e238]:
            - generic [ref=e239]:
              - generic [ref=e241]:
                - generic [ref=e243] [cursor=pointer]:
                  - generic [ref=e244]: Advertisement
                  - generic [ref=e245]: Remove Ads
                - generic [ref=e248] [cursor=pointer]:
                  - generic [ref=e249]: Remove all ads
                  - generic [ref=e250]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e251]
              - generic [ref=e253]:
                - generic [ref=e255] [cursor=pointer]:
                  - generic [ref=e256]: Advertisement
                  - generic [ref=e257]: Remove Ads
                - generic [ref=e260] [cursor=pointer]:
                  - generic [ref=e261]: Remove all ads
                  - generic [ref=e262]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e263]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e267]:
    - banner [ref=e268]:
      - generic [ref=e269] [cursor=pointer]:
        - generic [ref=e270]: Advertisement
        - generic [ref=e271]: Remove Ads
    - generic [ref=e274] [cursor=pointer]:
      - generic [ref=e275]: Remove all ads
      - generic [ref=e276]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e277]
  - button "Do Not Sell or Share My Personal Information" [ref=e281] [cursor=pointer]:
    - paragraph [ref=e283]: Do Not Sell or Share My Personal Information
```

# Test source

```ts
  1  | import { test } from '../src/fixtures/fixture';
  2  | import { expect } from '@playwright/test';
  3  | import { Moba } from '../src/page-object/moba';
  4  | import { v4 as uuidv4 } from 'uuid';
  5  | 
  6  | test('Delete mobalytics account', async ({ page, registerAccount }) => {
  7  |   const moba = registerAccount;
  8  | 
  9  |   await expect(moba.navbar.mgpProfileButton).toBeVisible();
> 10 |   await page.goto(`${process.env.BASE_URL}/mhw/account-settings/account-information`);
     |              ^ Error: page.goto: Test timeout of 90000ms exceeded.
  11 |   //! await moba.navbar.gotoAccountSettingsPage();
  12 |   await moba.accountInformationTab.deleteAccount();
  13 | 
  14 |   await test.step('Account is deleted', async () => {
  15 |     await expect(moba.byeBye.header).toBeVisible();
  16 |     await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
  17 |   });
  18 | });
  19 | 
  20 | test('Change display name', async ({ page }) => {
  21 |   const moba = new Moba(page);
  22 |   const uniqueId = uuidv4().substring(0, 4);
  23 |   const displayName = `displayName-${uniqueId}`;
  24 |   const credentials =
  25 |     process.env.BASE_URL === 'https://mobalytics.gg'
  26 |       ? 'rewad+prod-aqa-change-name@mobalyticshq.com' // prod account
  27 |       : 'rewad+stg-aqa-change-name@mobalyticshq.com'; // stg account
  28 | 
  29 |   await moba.mainURLs.openBorderlands4Page();
  30 |   await moba.navbar.gotoSignInPage();
  31 |   await moba.signInPage.loginUser(credentials, credentials);
  32 |   await expect(moba.navbar.mgpProfileButton).toBeVisible();
  33 |   await page.goto(`${process.env.BASE_URL}/mhw/account-settings/account-information`);
  34 |   //! await moba.navbar.gotoAccountSettingsPage();
  35 |   await moba.accountSettingsPage.selectProfileTab();
  36 |   await moba.profileTab.changeDisplayName(displayName);
  37 | 
  38 |   await test.step(`Account name is changed to a new account name: ${displayName}`, async () => {
  39 |     await expect(moba.profileTab.previewProfileDisplayName(displayName)).toBeVisible();
  40 |     await expect(moba.profileTab.widgetDisplayName(displayName)).toBeVisible();
  41 |   });
  42 | 
  43 |   await moba.navbar.profileNameMenu(displayName).click();
  44 | 
  45 |   await test.step(`Account name isd changed to a new account name: ${displayName}`, async () => {
  46 |     await expect(moba.mgpProfile.displayNameHeader(displayName)).toBeVisible();
  47 |   });
  48 | });
  49 | 
```