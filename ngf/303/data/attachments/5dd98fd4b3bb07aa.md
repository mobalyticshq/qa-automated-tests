# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating UG Pages >> Create a tier-list page on Borderlands 4 project
- Location: e2e-tests/ngf.test.js:474:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Create' })
    - locator resolved to <button tabindex="0" type="button" aria-haspopup="true" aria-expanded="false" data-react-aria-pressable="true" id="react-aria4576192604-_r_17_" class="xh8yej3 x1hv8zah x1h7s0lp x78zum5 x6s0dn4 xl56j7k x167g77z xlkovuz x1ypdohk x1deyofa x1kylzug x1vlpaxp x154mpj6 x10w6t97 xxepmn2">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="x16a3m0r x13o0s5z x10r8btm x1n2onr6">…</div> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <h4 class="x1i97zcw xks650j x1ghz6dp x1yztbdb">Challenges</h4> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="x1iyjqo2 x78zum5 x6s0dn4 xl56j7k xecetu6 x2b8uid xb3r6kr xzuq3rl">…</div> from <a target="_blank" data-google-interstitial="false" class="x1hl2dhg x1heor9g x1ypdohk " href="https://mobalytics.gg/borderlands-4/planner/builds">…</a> subtree intercepts pointer events
  39 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="x16a3m0r x13o0s5z x10r8btm x1n2onr6">…</div> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <h4 class="x1i97zcw xks650j x1ghz6dp x1yztbdb">Challenges</h4> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="x1iyjqo2 x78zum5 x6s0dn4 xl56j7k xecetu6 x2b8uid xb3r6kr xzuq3rl">…</div> from <a target="_blank" data-google-interstitial="false" class="x1hl2dhg x1heor9g x1ypdohk " href="https://mobalytics.gg/borderlands-4/planner/builds">…</a> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="x1iyjqo2 x78zum5 x6s0dn4 xl56j7k xecetu6 x2b8uid xb3r6kr xzuq3rl">…</div> from <a target="_blank" data-google-interstitial="false" class="x1hl2dhg x1heor9g x1ypdohk " href="https://mobalytics.gg/borderlands-4/planner/builds">…</a> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="x16a3m0r x13o0s5z x10r8btm x1n2onr6">…</div> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <h4 class="x1i97zcw xks650j x1ghz6dp x1yztbdb">Challenges</h4> from <div class="xixxii4 x1u0gcj4 x1ey2m1c xwc4wy4 x6y048q xysyzu8 x1w7x5ab x40n6ch xbryuvx appear-done enter-done">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="x1iyjqo2 x78zum5 x6s0dn4 xl56j7k xecetu6 x2b8uid xb3r6kr xzuq3rl">…</div> from <a target="_blank" data-google-interstitial="false" class="x1hl2dhg x1heor9g x1ypdohk " href="https://mobalytics.gg/borderlands-4/planner/builds">…</a> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Time to make some C4SH 💰 The new Vault Hunter and Skill Tree Planner is live! → View Skill Tree Close":
      - /url: https://mobalytics.gg/borderlands-4/planner/builds
      - generic [ref=e4] [cursor=pointer]:
        - generic [ref=e5]:
          - paragraph [ref=e11]: Time to make some C4SH 💰 The new Vault Hunter and Skill Tree Planner is live!
          - button "→ View Skill Tree" [ref=e12]
        - img "Close" [ref=e13]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - link "Mobalytics" [ref=e16] [cursor=pointer]:
          - /url: /borderlands-4
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
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-borderlands-4&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e129]:
              - img [ref=e130]
              - text: DOWNLOAD APP
          - link "Gamebase" [ref=e132] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e133]: Gamebase
        - generic [ref=e135]:
          - link "A admin+stg+ns@mobalyticshq.com" [ref=e136] [cursor=pointer]:
            - /url: /borderlands-4/profile/asd-das-8to5p0
            - generic [ref=e138]:
              - generic [ref=e140]: A
              - generic [ref=e142]: admin+stg+ns@mobalyticshq.com
          - button [ref=e144] [cursor=pointer]:
            - img [ref=e146]
          - button "Theme" [ref=e148] [cursor=pointer]:
            - img "Theme" [ref=e150]
      - generic [ref=e152]:
        - link "Home" [ref=e155] [cursor=pointer]:
          - /url: /borderlands-4
          - img "Home" [ref=e157]
        - link "Profile" [ref=e160] [cursor=pointer]:
          - /url: /borderlands-4/profile
          - img "Profile" [ref=e162]
        - link "Build Planner" [ref=e165] [cursor=pointer]:
          - /url: /borderlands-4/planner/builds
          - img "Build Planner" [ref=e167]
        - link "Legendaries" [ref=e170] [cursor=pointer]:
          - /url: /borderlands-4/guides/legendary-weapons-and-gear
          - img "Legendaries" [ref=e172]
        - link "Builds" [ref=e175] [cursor=pointer]:
          - /url: /borderlands-4/builds
          - img "Builds" [ref=e177]
        - link "Vault Hunters" [ref=e180] [cursor=pointer]:
          - /url: /borderlands-4/vault-hunters
          - img "Vault Hunters" [ref=e182]
        - link "Guides" [ref=e185] [cursor=pointer]:
          - /url: /borderlands-4/guides
          - img "Guides" [ref=e187]
        - link "SHiFT Codes" [ref=e190] [cursor=pointer]:
          - /url: /borderlands-4/shift-codes-borderlands-4
          - img "SHiFT Codes" [ref=e192]
        - link "Wiki" [ref=e195] [cursor=pointer]:
          - /url: /borderlands-4/wiki
          - img "Wiki" [ref=e197]
        - link "Creators" [ref=e200] [cursor=pointer]:
          - /url: /borderlands-4/creators
          - img "Creators" [ref=e202]
      - main [ref=e205]:
        - generic [ref=e208]:
          - generic [ref=e210]:
            - generic [ref=e212]: A
            - generic [ref=e214]: admin+stg+ns@mobalyticshq.com
            - link "Edit profile" [ref=e215] [cursor=pointer]:
              - /url: /borderlands-4/account-settings/profile
              - generic [ref=e216]: Edit profile
            - generic [ref=e217]:
              - generic [ref=e218]:
                - generic [ref=e219]: asd-das-8to5p0
                - generic [ref=e220]: ∙
                - generic [ref=e221]: Member Since May 15, 2025
              - generic [ref=e222]: ∙
              - generic [ref=e223]:
                - link "12" [ref=e224] [cursor=pointer]:
                  - /url: https://discord.gg/12
                  - img [ref=e226]
                  - generic [ref=e227]: "12"
                - generic [ref=e228]: ∙
                - link "elonmusksu" [ref=e229] [cursor=pointer]:
                  - /url: https://x.com/elonmusksu?lang=en44
                  - img [ref=e231]
                  - generic [ref=e232]: elonmusksu
                - generic [ref=e233]: ∙
                - link "YouTube" [ref=e234] [cursor=pointer]:
                  - /url: https://www.youtube.com/f11
                  - img [ref=e236]
                  - generic [ref=e237]: YouTube
            - list [ref=e245]:
              - listitem [ref=e246]: asdasdasd ad sadas das das d22
              - listitem [ref=e247]: asdasdasd ad sadas das das d22
              - listitem [ref=e248]: asdasdasd ad sadas das das d22
              - listitem [ref=e249]: asdasdasd ad sadas das das d22
              - listitem [ref=e250]: asdasdasd ad sadas das das d22
              - listitem [ref=e251]: asdasdasd ad sadas das das d22
              - listitem [ref=e252]: asdasdasd ad sadas das das d22
              - listitem [ref=e253]: asdasdasd ad sadas das das d22
              - listitem [ref=e254]: asdasdasd ad sadas das das d22
              - listitem [ref=e255]
          - tablist [ref=e258]:
            - tab "Overview" [ref=e259] [cursor=pointer]:
              - link "Overview" [ref=e261]:
                - /url: https://stg.mobalytics.gg/profile/asd-das-8to5p0
            - tab "PoE" [ref=e262] [cursor=pointer]:
              - link "PoE" [ref=e264]:
                - /url: https://stg.mobalytics.gg/poe/profile/asd-das-8to5p0
                - img [ref=e266]
                - text: PoE
            - tab "PoE 2" [ref=e267] [cursor=pointer]:
              - link "PoE 2" [ref=e269]:
                - /url: https://stg.mobalytics.gg/poe-2/profile/asd-das-8to5p0
                - img [ref=e271]
                - text: PoE 2
            - tab "LoL" [ref=e272] [cursor=pointer]:
              - link "LoL" [ref=e274]:
                - /url: https://stg.mobalytics.gg/lol/profile/asd-das-8to5p0
                - img [ref=e276]
                - text: LoL
            - tab "TFT" [ref=e277] [cursor=pointer]:
              - link "TFT" [ref=e279]:
                - /url: https://stg.mobalytics.gg/tft/profile/asd-das-8to5p0
                - img [ref=e281]
                - text: TFT
            - tab "Val" [ref=e282] [cursor=pointer]:
              - link "Val" [ref=e284]:
                - /url: https://stg.mobalytics.gg/valorant/profile/asd-das-8to5p0
                - img [ref=e286]
                - text: Val
            - tab "Diablo 4" [ref=e287] [cursor=pointer]:
              - link "Diablo 4" [ref=e289]:
                - /url: https://stg.mobalytics.gg/diablo-4/profile/asd-das-8to5p0
                - img [ref=e291]
                - text: Diablo 4
            - tab "The Bazaar" [ref=e292] [cursor=pointer]:
              - link "The Bazaar" [ref=e294]:
                - /url: https://stg.mobalytics.gg/the-bazaar/profile/asd-das-8to5p0
                - img [ref=e296]
                - text: The Bazaar
            - tab "Monster Hunter Wilds" [ref=e297] [cursor=pointer]:
              - link "Monster Hunter Wilds" [ref=e299]:
                - /url: https://stg.mobalytics.gg/mhw/profile/asd-das-8to5p0
                - img [ref=e301]
                - text: Monster Hunter Wilds
            - tab "ZZZ" [ref=e302] [cursor=pointer]:
              - link "ZZZ" [ref=e304]:
                - /url: https://stg.mobalytics.gg/zzz/profile/asd-das-8to5p0
                - img [ref=e306]
                - text: ZZZ
            - tab "STS 2" [ref=e307] [cursor=pointer]:
              - link "STS 2" [ref=e309]:
                - /url: https://stg.mobalytics.gg/slay-the-spire-2/profile/asd-das-8to5p0
                - img [ref=e311]
                - text: STS 2
            - tab "Riftbound" [ref=e312] [cursor=pointer]:
              - link "Riftbound" [ref=e314]:
                - /url: https://stg.mobalytics.gg/riftbound/profile/asd-das-8to5p0
                - img [ref=e316]
                - text: Riftbound
            - tab "Endfield" [ref=e317] [cursor=pointer]:
              - link "Endfield" [ref=e319]:
                - /url: https://stg.mobalytics.gg/arknights-endfield/profile/asd-das-8to5p0
                - img [ref=e321]
                - text: Endfield
            - tab "Nightreign" [ref=e322] [cursor=pointer]:
              - link "Nightreign" [ref=e324]:
                - /url: https://stg.mobalytics.gg/elden-ring-nightreign/profile/asd-das-8to5p0
                - img [ref=e326]
                - text: Nightreign
            - tab "NTE" [ref=e327] [cursor=pointer]:
              - link "NTE" [ref=e329]:
                - /url: https://stg.mobalytics.gg/neverness-to-everness/profile/asd-das-8to5p0
                - img [ref=e331]
                - text: NTE
            - tab "Marvel Rivals" [ref=e332] [cursor=pointer]:
              - link "Marvel Rivals" [ref=e334]:
                - /url: https://stg.mobalytics.gg/marvel-rivals/profile/asd-das-8to5p0
                - img [ref=e336]
                - text: Marvel Rivals
            - tab "Hades 2" [ref=e337] [cursor=pointer]:
              - link "Hades 2" [ref=e339]:
                - /url: https://stg.mobalytics.gg/hades-2/profile/asd-das-8to5p0
                - img [ref=e341]
                - text: Hades 2
            - tab "2XKO" [ref=e342] [cursor=pointer]:
              - link "2XKO" [ref=e344]:
                - /url: https://stg.mobalytics.gg/2xko/profile/asd-das-8to5p0
                - img [ref=e346]
                - text: 2XKO
            - tab "Marathon" [ref=e347] [cursor=pointer]:
              - link "Marathon" [ref=e349]:
                - /url: https://stg.mobalytics.gg/marathon/profile/asd-das-8to5p0
                - img [ref=e351]
                - text: Marathon
            - tab "Overwatch" [ref=e352] [cursor=pointer]:
              - link "Overwatch" [ref=e354]:
                - /url: https://stg.mobalytics.gg/overwatch/profile/asd-das-8to5p0
                - img [ref=e356]
                - text: Overwatch
            - tab "Borderlands 4" [selected] [ref=e357] [cursor=pointer]:
              - link "Borderlands 4" [ref=e359]:
                - /url: https://stg.mobalytics.gg/borderlands-4/profile/asd-das-8to5p0
                - img [ref=e361]
                - text: Borderlands 4
            - tab "Deadlock" [ref=e363] [cursor=pointer]:
              - link "Deadlock" [ref=e365]:
                - /url: https://stg.mobalytics.gg/deadlock/profile/asd-das-8to5p0
                - img [ref=e367]
                - text: Deadlock
            - tab "Destiny 2" [ref=e368] [cursor=pointer]:
              - link "Destiny 2" [ref=e370]:
                - /url: https://stg.mobalytics.gg/destiny-2/profile/asd-das-8to5p0
                - img [ref=e372]
                - text: Destiny 2
        - generic [ref=e373]:
          - generic [ref=e374]:
            - generic [ref=e375]:
              - button "Create" [ref=e380] [cursor=pointer]:
                - img [ref=e382]
                - generic [ref=e383]: Create
                - img [ref=e385]
              - tablist [ref=e389]:
                - tab "Builds" [selected] [ref=e390] [cursor=pointer]:
                  - generic [ref=e391]: Builds
                - tab "Guides" [ref=e393] [cursor=pointer]:
                  - generic [ref=e394]: Guides
                - tab "Tier Lists" [ref=e395] [cursor=pointer]:
                  - generic [ref=e396]: Tier Lists
                - tab "Discussions" [ref=e397] [cursor=pointer]:
                  - generic [ref=e398]: Discussions
            - generic [ref=e404]:
              - radiogroup [ref=e406]:
                - generic [ref=e410] [cursor=pointer]:
                  - radio "My Builds" [checked] [ref=e412]
                  - generic [ref=e413]:
                    - img [ref=e414]
                    - generic [ref=e415]: My Builds
                - generic [ref=e417] [cursor=pointer]:
                  - radio "Favorite Builds" [ref=e419]
                  - generic [ref=e420]:
                    - img [ref=e421]
                    - generic [ref=e422]: Favorite Builds
              - radiogroup [ref=e424]:
                - generic [ref=e428] [cursor=pointer]:
                  - radio "All" [checked] [ref=e430]
                  - generic [ref=e432]: All
                - generic [ref=e435] [cursor=pointer]:
                  - radio "Published" [ref=e437]
                  - generic [ref=e439]: Published
                - generic [ref=e441] [cursor=pointer]:
                  - radio "Drafts" [ref=e443]
                  - generic [ref=e445]: Drafts
              - generic "select" [ref=e448]:
                - combobox [ref=e451]
                - button "Character" [ref=e454] [cursor=pointer]:
                  - generic [ref=e455]: Character
                  - img [ref=e457]
              - generic "select" [ref=e460]:
                - combobox [ref=e463]
                - button "Action Skill" [ref=e466] [cursor=pointer]:
                  - generic [ref=e467]: Action Skill
                  - img [ref=e469]
              - generic "select" [ref=e472]:
                - combobox [ref=e475]
                - button "Verified" [ref=e478] [cursor=pointer]:
                  - generic [ref=e479]: Verified
                  - img [ref=e481]
              - generic "select" [ref=e484]:
                - combobox [ref=e487]
                - button "Featured" [ref=e490] [cursor=pointer]:
                  - generic [ref=e491]: Featured
                  - img [ref=e493]
          - generic [ref=e499]:
            - generic [ref=e502] [cursor=pointer]:
              - link [ref=e503]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/b9c2e05a-90bb-4ee0-995f-0573d9805717
              - generic [ref=e505]:
                - generic [ref=e506]: qa-automation-build-page-92144ced-882e-4948-9677-f8375aef763f
                - generic [ref=e507]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e508]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e509]: Updated on
                  - generic [ref=e510]: Jul 27, 2026
              - generic [ref=e511]:
                - generic [ref=e513]:
                  - button "Publish" [ref=e514]
                  - link "Edit" [ref=e516]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/b9c2e05a-90bb-4ee0-995f-0573d9805717
                    - generic [ref=e517]: Edit
                  - button [ref=e519]:
                    - img [ref=e521]
                - generic [ref=e523]:
                  - img "presentation" [ref=e524]
                  - text: Vex
            - generic [ref=e527] [cursor=pointer]:
              - link [ref=e528]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/35d23615-87b3-485e-8bfa-3429df4f9faf
              - generic [ref=e530]:
                - generic [ref=e531]: qa-automation-build-page-3e05606a-0f49-4cb0-8f54-96c2ed7333c5
                - generic [ref=e532]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e533]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e534]: Updated on
                  - generic [ref=e535]: Jul 26, 2026
              - generic [ref=e536]:
                - generic [ref=e538]:
                  - button "Publish" [ref=e539]
                  - link "Edit" [ref=e541]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/35d23615-87b3-485e-8bfa-3429df4f9faf
                    - generic [ref=e542]: Edit
                  - button [ref=e544]:
                    - img [ref=e546]
                - generic [ref=e548]:
                  - img "presentation" [ref=e549]
                  - text: Vex
            - generic [ref=e552] [cursor=pointer]:
              - link [ref=e553]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/f74dd93f-0b13-4050-a19d-4a5b6cb5d0ba
              - generic [ref=e555]:
                - generic [ref=e556]: qa-automation-build-page-22af4ff6-364a-441e-acde-2af2e86b807c
                - generic [ref=e557]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e558]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e559]: Updated on
                  - generic [ref=e560]: Jul 25, 2026
              - generic [ref=e561]:
                - generic [ref=e563]:
                  - button "Publish" [ref=e564]
                  - link "Edit" [ref=e566]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/f74dd93f-0b13-4050-a19d-4a5b6cb5d0ba
                    - generic [ref=e567]: Edit
                  - button [ref=e569]:
                    - img [ref=e571]
                - generic [ref=e573]:
                  - img "presentation" [ref=e574]
                  - text: Vex
            - generic [ref=e577] [cursor=pointer]:
              - link [ref=e578]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/c4b5d671-626a-47e0-8422-9a8758602bb2
              - generic [ref=e580]:
                - generic [ref=e581]: qa-automation-build-page-0fd21d15-d192-434d-b16c-d8fa4fdc94cd
                - generic [ref=e582]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e583]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e584]: Updated on
                  - generic [ref=e585]: Jul 24, 2026
              - generic [ref=e586]:
                - generic [ref=e588]:
                  - button "Publish" [ref=e589]
                  - link "Edit" [ref=e591]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/c4b5d671-626a-47e0-8422-9a8758602bb2
                    - generic [ref=e592]: Edit
                  - button [ref=e594]:
                    - img [ref=e596]
                - generic [ref=e598]:
                  - img "presentation" [ref=e599]
                  - text: Vex
            - generic [ref=e602] [cursor=pointer]:
              - link [ref=e603]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/06b174d7-e367-4de6-a68b-aed9b51f1d5b
              - generic [ref=e605]:
                - generic [ref=e606]: qa-automation-build-page-fb708ac7-4cb9-41e7-9025-15dfed23ce94
                - generic [ref=e607]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e608]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e609]: Updated on
                  - generic [ref=e610]: Jul 24, 2026
              - generic [ref=e611]:
                - generic [ref=e613]:
                  - button "Publish" [ref=e614]
                  - link "Edit" [ref=e616]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/06b174d7-e367-4de6-a68b-aed9b51f1d5b
                    - generic [ref=e617]: Edit
                  - button [ref=e619]:
                    - img [ref=e621]
                - generic [ref=e623]:
                  - img "presentation" [ref=e624]
                  - text: Vex
            - generic [ref=e627] [cursor=pointer]:
              - link [ref=e628]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/5fa86ce0-4f69-4d51-9a80-2715cda3673f
              - generic [ref=e630]:
                - generic [ref=e631]: qa-automation-build-page-6caf570a-4d10-43c2-9002-4b5c1e9fcb27
                - generic [ref=e632]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e633]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e634]: Updated on
                  - generic [ref=e635]: Jul 24, 2026
              - generic [ref=e636]:
                - generic [ref=e638]:
                  - button "Publish" [ref=e639]
                  - link "Edit" [ref=e641]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/5fa86ce0-4f69-4d51-9a80-2715cda3673f
                    - generic [ref=e642]: Edit
                  - button [ref=e644]:
                    - img [ref=e646]
                - generic [ref=e648]:
                  - img "presentation" [ref=e649]
                  - text: Vex
            - generic [ref=e652] [cursor=pointer]:
              - link [ref=e653]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/e2ca6fe4-2a40-49f1-9f6d-d467d4f29502
              - generic [ref=e655]:
                - generic [ref=e656]: qa-automation-build-page-f442fc7f-deda-43d9-b56c-2200d7ed6e27
                - generic [ref=e657]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e658]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e659]: Updated on
                  - generic [ref=e660]: Jul 24, 2026
              - generic [ref=e661]:
                - generic [ref=e663]:
                  - button "Publish" [ref=e664]
                  - link "Edit" [ref=e666]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/e2ca6fe4-2a40-49f1-9f6d-d467d4f29502
                    - generic [ref=e667]: Edit
                  - button [ref=e669]:
                    - img [ref=e671]
                - generic [ref=e673]:
                  - img "presentation" [ref=e674]
                  - text: Vex
            - generic [ref=e677] [cursor=pointer]:
              - link [ref=e678]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/b18265c8-2056-482d-9130-7d31d5412a8d
              - generic [ref=e680]:
                - generic [ref=e681]: qa-automation-build-page-df63c878-ae97-4c8b-8954-5bd7dc57147f
                - generic [ref=e682]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e683]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e684]: Updated on
                  - generic [ref=e685]: Jul 23, 2026
              - generic [ref=e686]:
                - generic [ref=e688]:
                  - button "Publish" [ref=e689]
                  - link "Edit" [ref=e691]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/b18265c8-2056-482d-9130-7d31d5412a8d
                    - generic [ref=e692]: Edit
                  - button [ref=e694]:
                    - img [ref=e696]
                - generic [ref=e698]:
                  - img "presentation" [ref=e699]
                  - text: Vex
            - generic [ref=e702] [cursor=pointer]:
              - link [ref=e703]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/d979232e-8112-46c7-b0af-eacd5d2869a4
              - generic [ref=e705]:
                - generic [ref=e706]: qa-automation-build-page-59ded944-d2ff-4c12-8c59-bb089547e940
                - generic [ref=e707]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e708]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e709]: Updated on
                  - generic [ref=e710]: Jul 23, 2026
              - generic [ref=e711]:
                - generic [ref=e713]:
                  - button [ref=e714]:
                    - img [ref=e715]
                  - button "Share" [ref=e716]:
                    - img [ref=e717]
                    - text: Share
                  - link "0" [ref=e718]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/d979232e-8112-46c7-b0af-eacd5d2869a4#comments
                    - img [ref=e719]
                    - generic [ref=e720]: "0"
                  - link "Edit" [ref=e722]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/d979232e-8112-46c7-b0af-eacd5d2869a4
                    - generic [ref=e723]: Edit
                  - button [ref=e725]:
                    - img [ref=e727]
                - generic [ref=e729]:
                  - img "presentation" [ref=e730]
                  - text: Vex
            - generic [ref=e733] [cursor=pointer]:
              - link [ref=e734]:
                - /url: /borderlands-4/profile/asd-das-8to5p0/builds/1b032174-5799-4d5c-9a0c-45b9e8aa5d8e
              - generic [ref=e736]:
                - generic [ref=e737]: qa-automation-build-page-a4f8f63b-3304-49e1-8337-aa6f60ebbc4a
                - generic [ref=e738]:
                  - text: By
                  - link "admin+stg+ns@mobalyticshq.com" [ref=e739]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0
                  - text: ∙
                  - generic [ref=e740]: Updated on
                  - generic [ref=e741]: Jul 22, 2026
              - generic [ref=e742]:
                - generic [ref=e744]:
                  - button "Publish" [ref=e745]
                  - link "Edit" [ref=e747]:
                    - /url: /borderlands-4/profile/asd-das-8to5p0/builds/1b032174-5799-4d5c-9a0c-45b9e8aa5d8e
                    - generic [ref=e748]: Edit
                  - button [ref=e750]:
                    - img [ref=e752]
                - generic [ref=e754]:
                  - img "presentation" [ref=e755]
                  - text: Vex
    - generic [ref=e761]:
      - banner [ref=e762]:
        - heading "Reward Pass & Challenges" [level=4] [ref=e763]
        - button [ref=e764] [cursor=pointer]
      - generic [ref=e765]:
        - button [ref=e768] [cursor=pointer]:
          - img [ref=e769]
        - generic [ref=e770]:
          - generic [ref=e771]:
            - 'link "Unlock 6 Rewards +1 Ends in: 2 days Activate" [ref=e772] [cursor=pointer]':
              - /url: /reward-pass/019f1794-62ba-77f0-be17-8a02f133ed5e
              - generic [ref=e773]:
                - generic [ref=e774]:
                  - generic:
                    - img
                    - img
                  - generic [ref=e776]:
                    - banner [ref=e777]:
                      - generic [ref=e779]: title test
                    - generic [ref=e780]:
                      - paragraph [ref=e781]: Unlock 6 Rewards
                      - generic [ref=e793]: "+1"
                - contentinfo [ref=e794]:
                  - generic "July 30, 2026 07:00 PM GMT+00:00" [ref=e795]:
                    - img [ref=e796]
                    - generic [ref=e797]: "Ends in: 2 days"
                  - button "Activate" [ref=e798]
            - link "Explore Reward Passes" [ref=e799] [cursor=pointer]:
              - /url: /reward-pass
              - generic [ref=e800]: Explore Reward Passes
          - separator [ref=e801]
          - generic [ref=e802]:
            - heading "Challenges" [level=4] [ref=e803]
            - generic [ref=e804]:
              - generic [ref=e805]: No challenges at the moment
              - generic [ref=e806]: We are working on something special
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | export class UgProfilePage {
  4  |   constructor(page) {
  5  |     this.createButton = page.getByRole('button', { name: 'Create' });
  6  |     this.deleteButton = page.getByRole('menuitem', { name: 'Delete' });
  7  |     this.buttonDeleteInModal = page.getByRole('button', { name: 'Delete' });
  8  |     this.dotesButton = page.locator('section').getByRole('button').filter({ hasText: /^$/ });
  9  |     this.buildButton = page.getByRole('menuitem', {
  10 |       name: 'Build Create a Build',
  11 |     });
  12 |     this.teamButton = page.getByRole('menuitem', {
  13 |       name: 'Team Create a Team',
  14 |     });
  15 |     this.classicButton = page.getByRole('menuitem', {
  16 |       name: 'Classic Create a Build',
  17 |     });
  18 |     this.guideButton = page.getByRole('menuitem', {
  19 |       name: 'Guide Create a Guide',
  20 |     });
  21 |     this.tierListButton = page.getByRole('menuitem', {
  22 |       name: 'Tier List Create a Tier List',
  23 |     });
  24 |     this.characterButton = page.getByRole('menuitem', {
  25 |       name: 'Character Create a Character',
  26 |     });
  27 |     this.deckButton = page.getByRole('menuitem', { name: 'Create a Deck' });
  28 |     this.buildWidget = (pageName) => page.getByRole('main').filter({ hasText: `${pageName}` });
  29 |   }
  30 | 
  31 |   async gotoBuildPlannerPage() {
  32 |     await test.step('Go to Build Planner Page', async () => {
  33 |       await this.createButton.click();
  34 |       await this.buildButton.click();
  35 |     });
  36 |   }
  37 | 
  38 |   async gotoDeckPlannerPage() {
  39 |     await test.step('Go to Deck Planner Page', async () => {
  40 |       await this.createButton.click();
  41 |       await this.deckButton.click();
  42 |     });
  43 |   }
  44 | 
  45 |   async gotoCharacterPlannerPage() {
  46 |     await test.step('Go to Character Planner Page', async () => {
  47 |       await this.createButton.click();
  48 |       await this.characterButton.click();
  49 |     });
  50 |   }
  51 | 
  52 |   async gotoTeamPlannerPage() {
  53 |     await test.step('Go to Team Planner Page', async () => {
  54 |       await this.createButton.click();
  55 |       await this.teamButton.click();
  56 |     });
  57 |   }
  58 | 
  59 |   async gotoClassicPlannerPage() {
  60 |     await test.step('Go to Classic Planner Page', async () => {
  61 |       await this.createButton.click();
  62 |       await this.classicButton.click();
  63 |     });
  64 |   }
  65 | 
  66 |   async gotoTierListPlannerPage() {
  67 |     await test.step('Go to Tier List Planner Page', async () => {
> 68 |       await this.createButton.click();
     |                               ^ Error: locator.click: Test timeout of 90000ms exceeded.
  69 |       await this.tierListButton.click();
  70 |     });
  71 |   }
  72 | 
  73 |   async gotoGuidePlannerPage() {
  74 |     await test.step('Go to Guide Planner Page', async () => {
  75 |       await this.createButton.click();
  76 |       await this.guideButton.click();
  77 |     });
  78 |   }
  79 | 
  80 |   async deleteBuild(pageName) {
  81 |     await test.step(`Delete ${pageName} build page`, async () => {
  82 |       await this.dotesButton.click();
  83 |       await this.deleteButton.click();
  84 |       await this.buttonDeleteInModal.click();
  85 |     });
  86 |   }
  87 | }
  88 | 
```