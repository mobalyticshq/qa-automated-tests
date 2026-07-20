# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Admin permission >> Admin role can upload a video to CDN on the structure pages
- Location: e2e-tests/ngf.test.js:681:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
Call log:
  - waiting for getByTestId('admin-page-st-document-item-card').filter({ hasText: '/qa-automation-st-page-6ec22ee6-114b-4760-a282-25b72ebfcdf8' }) to be hidden
    21 × locator resolved to visible <div data-testid="admin-page-st-document-item-card" class="xh8yej3 x78zum5 x1q0g3np x1w9t9sz x6s0dn4 x1slt461 x1nhvcw1 x1a02dak x1vctgw6 x17gf9bc x614542 x1hv8zah xe8ttls x139jznd x1ypdohk x9zwv14">…</div>

```

# Page snapshot

```yaml
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
      - generic [ref=e114]:
        - generic [ref=e115]:
          - generic [ref=e117]:
            - generic [ref=e120] [cursor=pointer]:
              - button "plus Rewards" [ref=e121]:
                - img "plus" [ref=e123]
                - generic [ref=e124]: Rewards
              - generic [ref=e126]: New
            - generic [ref=e128] [cursor=pointer]:
              - img [ref=e129]:
                - generic [ref=e152]: ✓
              - generic [ref=e153]: New challenge available
          - link "DOWNLOAD APP" [ref=e154] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-mhw&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e156]:
              - img [ref=e157]
              - text: DOWNLOAD APP
          - link "News" [ref=e159] [cursor=pointer]:
            - /url: /news
            - generic [ref=e160]: News
        - generic [ref=e162]:
          - link "A admin+stg+ns@mobalyticshq.com" [ref=e163] [cursor=pointer]:
            - /url: /mhw/profile/new-pika4-2-439blm
            - generic [ref=e165]:
              - generic [ref=e167]: A
              - generic [ref=e169]: admin+stg+ns@mobalyticshq.com
          - button [ref=e171] [cursor=pointer]:
            - img [ref=e173]
          - button "Theme" [ref=e175] [cursor=pointer]:
            - img "Theme" [ref=e177]
      - generic [ref=e179]:
        - link "Home" [ref=e182] [cursor=pointer]:
          - /url: /mhw
          - img "Home" [ref=e184]
        - link "Profile" [ref=e187] [cursor=pointer]:
          - /url: /mhw/profile
          - img "Profile" [ref=e189]
        - link "Build Planner" [ref=e192] [cursor=pointer]:
          - /url: /mhw/planner/builds
          - img "Build Planner" [ref=e194]
        - link "Builds" [ref=e197] [cursor=pointer]:
          - /url: /mhw/builds
          - img "Builds" [ref=e199]
        - link "Weapons" [ref=e202] [cursor=pointer]:
          - /url: /mhw/weapons
          - img "Weapons" [ref=e204]
        - link "Monster Guides" [ref=e207] [cursor=pointer]:
          - /url: /mhw/monster-guides
          - img "Monster Guides" [ref=e209]
        - link "Guides" [ref=e212] [cursor=pointer]:
          - /url: /mhw/guides
          - img "Guides" [ref=e214]
      - main [ref=e217]:
        - generic [ref=e218]:
          - generic [ref=e219]:
            - heading "Structure Pages" [level=1] [ref=e220]
            - link "Create Page" [ref=e222] [cursor=pointer]:
              - /url: /mhw/planner/st
              - img [ref=e223]
              - generic [ref=e224]: Create Page
          - generic [ref=e225]:
            - generic [ref=e226] [cursor=pointer]:
              - generic [ref=e228]: /2032-upload
              - generic [ref=e229]:
                - link "Edit" [ref=e230]:
                  - /url: /mhw/2032-upload
                  - generic [ref=e231]: Edit
                - button [ref=e232]:
                  - img [ref=e233]
            - generic [ref=e234] [cursor=pointer]:
              - generic [ref=e236]: /autolock-show-in-new-tab-testing
              - generic [ref=e237]:
                - link "Edit" [ref=e238]:
                  - /url: /mhw/autolock-show-in-new-tab-testing
                  - generic [ref=e239]: Edit
                - button [ref=e240]:
                  - img [ref=e241]
            - generic [ref=e242] [cursor=pointer]:
              - generic [ref=e244]: /builds
              - generic [ref=e245]:
                - link "Edit" [ref=e246]:
                  - /url: /mhw/builds
                  - generic [ref=e247]: Edit
                - button [ref=e248]:
                  - img [ref=e249]
            - generic [ref=e250] [cursor=pointer]:
              - generic [ref=e252]: /checl
              - generic [ref=e253]:
                - link "Edit" [ref=e254]:
                  - /url: /mhw/checl
                  - generic [ref=e255]: Edit
                - button [ref=e256]:
                  - img [ref=e257]
            - generic [ref=e258] [cursor=pointer]:
              - generic [ref=e260]: /chto2
              - generic [ref=e261]:
                - link "Edit" [ref=e262]:
                  - /url: /mhw/chto2
                  - generic [ref=e263]: Edit
                - button [ref=e264]:
                  - img [ref=e265]
            - generic [ref=e266] [cursor=pointer]:
              - generic [ref=e268]: /chto3
              - generic [ref=e269]:
                - link "Edit" [ref=e270]:
                  - /url: /mhw/chto3
                  - generic [ref=e271]: Edit
                - button [ref=e272]:
                  - img [ref=e273]
            - generic [ref=e274] [cursor=pointer]:
              - generic [ref=e276]: /copy-paste
              - generic [ref=e277]:
                - link "Edit" [ref=e278]:
                  - /url: /mhw/copy-paste
                  - generic [ref=e279]: Edit
                - button [ref=e280]:
                  - img [ref=e281]
            - generic [ref=e282] [cursor=pointer]:
              - generic [ref=e284]: /dnd
              - generic [ref=e285]:
                - link "Edit" [ref=e286]:
                  - /url: /mhw/dnd
                  - generic [ref=e287]: Edit
                - button [ref=e288]:
                  - img [ref=e289]
            - generic [ref=e290] [cursor=pointer]:
              - generic [ref=e292]: /guides
              - generic [ref=e293]:
                - link "Edit" [ref=e294]:
                  - /url: /mhw/guides
                  - generic [ref=e295]: Edit
                - button [ref=e296]:
                  - img [ref=e297]
            - generic [ref=e298] [cursor=pointer]:
              - generic [ref=e300]: /home
              - generic [ref=e301]:
                - link "Edit" [ref=e302]:
                  - /url: /mhw/home
                  - generic [ref=e303]: Edit
                - button [ref=e304]:
                  - img [ref=e305]
            - generic [ref=e306] [cursor=pointer]:
              - generic [ref=e308]: /ionov
              - generic [ref=e309]:
                - link "Edit" [ref=e310]:
                  - /url: /mhw/ionov
                  - generic [ref=e311]: Edit
                - button [ref=e312]:
                  - img [ref=e313]
            - generic [ref=e314] [cursor=pointer]:
              - generic [ref=e316]: /long-sword-guide
              - generic [ref=e317]:
                - link "Edit" [ref=e318]:
                  - /url: /mhw/long-sword-guide
                  - generic [ref=e319]: Edit
                - button [ref=e320]:
                  - img [ref=e321]
            - generic [ref=e322] [cursor=pointer]:
              - generic [ref=e324]: /mhw-discovery
              - generic [ref=e325]:
                - link "Edit" [ref=e326]:
                  - /url: /mhw/mhw-discovery
                  - generic [ref=e327]: Edit
                - button [ref=e328]:
                  - img [ref=e329]
            - generic [ref=e330] [cursor=pointer]:
              - generic [ref=e332]: /monster-guides
              - generic [ref=e333]:
                - link "Edit" [ref=e334]:
                  - /url: /mhw/monster-guides
                  - generic [ref=e335]: Edit
                - button [ref=e336]:
                  - img [ref=e337]
            - generic [ref=e338] [cursor=pointer]:
              - generic [ref=e340]: /planner
              - generic [ref=e341]:
                - link "Edit" [ref=e342]:
                  - /url: /mhw/planner
                  - generic [ref=e343]: Edit
                - button [ref=e344]:
                  - img [ref=e345]
            - generic [ref=e346] [cursor=pointer]:
              - generic [ref=e348]: /qa-automation-game-manager
              - generic [ref=e349]:
                - link "Edit" [ref=e350]:
                  - /url: /mhw/qa-automation-game-manager
                  - generic [ref=e351]: Edit
                - button [ref=e352]:
                  - img [ref=e353]
            - generic [ref=e354] [cursor=pointer]:
              - generic [ref=e356]: /qa-automation-st-page-6ec22ee6-114b-4760-a282-25b72ebfcdf8
              - generic [ref=e357]:
                - link "Edit" [ref=e358]:
                  - /url: /mhw/qa-automation-st-page-6ec22ee6-114b-4760-a282-25b72ebfcdf8
                  - generic [ref=e359]: Edit
                - button [ref=e360]:
                  - img [ref=e361]
            - generic [ref=e362] [cursor=pointer]:
              - generic [ref=e364]: /qa-check-static-data-not-delete
              - generic [ref=e365]:
                - link "Edit" [ref=e366]:
                  - /url: /mhw/qa-check-static-data-not-delete
                  - generic [ref=e367]: Edit
                - button [ref=e368]:
                  - img [ref=e369]
            - generic [ref=e370] [cursor=pointer]:
              - generic [ref=e372]: /qa-not-delete-st-page
              - generic [ref=e373]:
                - link "Edit" [ref=e374]:
                  - /url: /mhw/qa-not-delete-st-page
                  - generic [ref=e375]: Edit
                - button [ref=e376]:
                  - img [ref=e377]
            - generic [ref=e378] [cursor=pointer]:
              - generic [ref=e380]: /qq
              - generic [ref=e381]:
                - link "Edit" [ref=e382]:
                  - /url: /mhw/qq
                  - generic [ref=e383]: Edit
                - button [ref=e384]:
                  - img [ref=e385]
            - generic [ref=e386] [cursor=pointer]:
              - generic [ref=e388]: /sol
              - generic [ref=e389]:
                - link "Edit" [ref=e390]:
                  - /url: /mhw/sol
                  - generic [ref=e391]: Edit
                - button [ref=e392]:
                  - img [ref=e393]
            - generic [ref=e394] [cursor=pointer]:
              - generic [ref=e396]: /st-contentv2-stas-mhw-int
              - generic [ref=e397]:
                - link "Edit" [ref=e398]:
                  - /url: /mhw/st-contentv2-stas-mhw-int
                  - generic [ref=e399]: Edit
                - button [ref=e400]:
                  - img [ref=e401]
            - generic [ref=e402] [cursor=pointer]:
              - generic [ref=e404]: /swwidget
              - generic [ref=e405]:
                - link "Edit" [ref=e406]:
                  - /url: /mhw/swwidget
                  - generic [ref=e407]: Edit
                - button [ref=e408]:
                  - img [ref=e409]
            - generic [ref=e410] [cursor=pointer]:
              - generic [ref=e412]: /test123
              - generic [ref=e413]:
                - link "Edit" [ref=e414]:
                  - /url: /mhw/test123
                  - generic [ref=e415]: Edit
                - button [ref=e416]:
                  - img [ref=e417]
            - generic [ref=e418] [cursor=pointer]:
              - generic [ref=e420]: /test-headers
              - generic [ref=e421]:
                - link "Edit" [ref=e422]:
                  - /url: /mhw/test-headers
                  - generic [ref=e423]: Edit
                - button [ref=e424]:
                  - img [ref=e425]
            - generic [ref=e426] [cursor=pointer]:
              - generic [ref=e428]: /test-image-links
              - generic [ref=e429]:
                - link "Edit" [ref=e430]:
                  - /url: /mhw/test-image-links
                  - generic [ref=e431]: Edit
                - button [ref=e432]:
                  - img [ref=e433]
            - generic [ref=e434] [cursor=pointer]:
              - generic [ref=e436]: /test-int-mhw-discovery-el
              - generic [ref=e437]:
                - link "Edit" [ref=e438]:
                  - /url: /mhw/test-int-mhw-discovery-el
                  - generic [ref=e439]: Edit
                - button [ref=e440]:
                  - img [ref=e441]
            - generic [ref=e442] [cursor=pointer]:
              - generic [ref=e444]: /test-int-mhw-new-api-stas
              - generic [ref=e445]:
                - link "Edit" [ref=e446]:
                  - /url: /mhw/test-int-mhw-new-api-stas
                  - generic [ref=e447]: Edit
                - button [ref=e448]:
                  - img [ref=e449]
            - generic [ref=e450] [cursor=pointer]:
              - generic [ref=e452]: /test-int-mhw-refactoring-stas
              - generic [ref=e453]:
                - link "Edit" [ref=e454]:
                  - /url: /mhw/test-int-mhw-refactoring-stas
                  - generic [ref=e455]: Edit
                - button [ref=e456]:
                  - img [ref=e457]
            - generic [ref=e458] [cursor=pointer]:
              - generic [ref=e460]: /test-int-mhw-split
              - generic [ref=e461]:
                - link "Edit" [ref=e462]:
                  - /url: /mhw/test-int-mhw-split
                  - generic [ref=e463]: Edit
                - button [ref=e464]:
                  - img [ref=e465]
            - generic [ref=e466] [cursor=pointer]:
              - generic [ref=e468]: /test-int-mhw-widgets-rendering-el
              - generic [ref=e469]:
                - link "Edit" [ref=e470]:
                  - /url: /mhw/test-int-mhw-widgets-rendering-el
                  - generic [ref=e471]: Edit
                - button [ref=e472]:
                  - img [ref=e473]
            - generic [ref=e474] [cursor=pointer]:
              - generic [ref=e476]: /test-mhw-int-gql-el
              - generic [ref=e477]:
                - link "Edit" [ref=e478]:
                  - /url: /mhw/test-mhw-int-gql-el
                  - generic [ref=e479]: Edit
                - button [ref=e480]:
                  - img [ref=e481]
            - generic [ref=e482] [cursor=pointer]:
              - generic [ref=e484]: /test-mhw-int-titles
              - generic [ref=e485]:
                - link "Edit" [ref=e486]:
                  - /url: /mhw/test-mhw-int-titles
                  - generic [ref=e487]: Edit
                - button [ref=e488]:
                  - img [ref=e489]
            - generic [ref=e490] [cursor=pointer]:
              - generic [ref=e492]: /test-mhw-int-widgets-refactoring-el
              - generic [ref=e493]:
                - link "Edit" [ref=e494]:
                  - /url: /mhw/test-mhw-int-widgets-refactoring-el
                  - generic [ref=e495]: Edit
                - button [ref=e496]:
                  - img [ref=e497]
            - generic [ref=e498] [cursor=pointer]:
              - generic [ref=e500]: /test-mhw-stg-widgets-refactoring-el
              - generic [ref=e501]:
                - link "Edit" [ref=e502]:
                  - /url: /mhw/test-mhw-stg-widgets-refactoring-el
                  - generic [ref=e503]: Edit
                - button [ref=e504]:
                  - img [ref=e505]
            - generic [ref=e506] [cursor=pointer]:
              - generic [ref=e508]: /test-rerender
              - generic [ref=e509]:
                - link "Edit" [ref=e510]:
                  - /url: /mhw/test-rerender
                  - generic [ref=e511]: Edit
                - button [ref=e512]:
                  - img [ref=e513]
            - generic [ref=e514] [cursor=pointer]:
              - generic [ref=e516]: /test-stas-int-mhw-apollo-1-750-2-rc-6
              - generic [ref=e517]:
                - link "Edit" [ref=e518]:
                  - /url: /mhw/test-stas-int-mhw-apollo-1-750-2-rc-6
                  - generic [ref=e519]: Edit
                - button [ref=e520]:
                  - img [ref=e521]
            - generic [ref=e522] [cursor=pointer]:
              - generic [ref=e524]: /test-stas-stg-mhw-1-733-0
              - generic [ref=e525]:
                - link "Edit" [ref=e526]:
                  - /url: /mhw/test-stas-stg-mhw-1-733-0
                  - generic [ref=e527]: Edit
                - button [ref=e528]:
                  - img [ref=e529]
            - generic [ref=e530] [cursor=pointer]:
              - generic [ref=e532]: /test-stg-mhw-el
              - generic [ref=e533]:
                - link "Edit" [ref=e534]:
                  - /url: /mhw/test-stg-mhw-el
                  - generic [ref=e535]: Edit
                - button [ref=e536]:
                  - img [ref=e537]
            - generic [ref=e538] [cursor=pointer]:
              - generic [ref=e540]: /test-stg-mhw-new-api-stas
              - generic [ref=e541]:
                - link "Edit" [ref=e542]:
                  - /url: /mhw/test-stg-mhw-new-api-stas
                  - generic [ref=e543]: Edit
                - button [ref=e544]:
                  - img [ref=e545]
            - generic [ref=e546] [cursor=pointer]:
              - generic [ref=e548]: /test-stg-mhw-split-el
              - generic [ref=e549]:
                - link "Edit" [ref=e550]:
                  - /url: /mhw/test-stg-mhw-split-el
                  - generic [ref=e551]: Edit
                - button [ref=e552]:
                  - img [ref=e553]
            - generic [ref=e554] [cursor=pointer]:
              - generic [ref=e556]: /test-stg-mhw-sticky
              - generic [ref=e557]:
                - link "Edit" [ref=e558]:
                  - /url: /mhw/test-stg-mhw-sticky
                  - generic [ref=e559]: Edit
                - button [ref=e560]:
                  - img [ref=e561]
            - generic [ref=e562] [cursor=pointer]:
              - generic [ref=e564]: /test-stg-mhw-sw
              - generic [ref=e565]:
                - link "Edit" [ref=e566]:
                  - /url: /mhw/test-stg-mhw-sw
                  - generic [ref=e567]: Edit
                - button [ref=e568]:
                  - img [ref=e569]
            - generic [ref=e570] [cursor=pointer]:
              - generic [ref=e572]: /text-table
              - generic [ref=e573]:
                - link "Edit" [ref=e574]:
                  - /url: /mhw/text-table
                  - generic [ref=e575]: Edit
                - button [ref=e576]:
                  - img [ref=e577]
            - generic [ref=e578] [cursor=pointer]:
              - generic [ref=e580]: /tier-list-st-test
              - generic [ref=e581]:
                - link "Edit" [ref=e582]:
                  - /url: /mhw/tier-list-st-test
                  - generic [ref=e583]: Edit
                - button [ref=e584]:
                  - img [ref=e585]
            - generic [ref=e586] [cursor=pointer]:
              - generic [ref=e588]: /weapons
              - generic [ref=e589]:
                - link "Edit" [ref=e590]:
                  - /url: /mhw/weapons
                  - generic [ref=e591]: Edit
                - button [ref=e592]:
                  - img [ref=e593]
            - generic [ref=e594] [cursor=pointer]:
              - generic [ref=e596]: /x-moba-ssr-cache
              - generic [ref=e597]:
                - link "Edit" [ref=e598]:
                  - /url: /mhw/x-moba-ssr-cache
                  - generic [ref=e599]: Edit
                - button [ref=e600]:
                  - img [ref=e601]
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  457 |       await moba.mainURLs.openAdminHades2Page();
  458 | 
  459 |       for (const pageName of pagesToCleanup) {
  460 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  461 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  462 | 
  463 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  464 |       }
  465 |     }
  466 |   },
  467 | 
  468 |   cleanupStBorderlands4Pages: async ({ page, apiAuthAdmin }, use) => {
  469 |     const moba = new Moba(page);
  470 |     await page.context().addCookies(apiAuthAdmin.cookies);
  471 |     const pagesToCleanup = [];
  472 | 
  473 |     const addPageForCleanup = (pageName) => {
  474 |       pagesToCleanup.push(pageName);
  475 |     };
  476 | 
  477 |     await use({ moba, addPageForCleanup });
  478 | 
  479 |     // Cleanup после теста
  480 |     if (pagesToCleanup.length > 0) {
  481 |       await moba.mainURLs.openAdminBorderlands4Page();
  482 | 
  483 |       for (const pageName of pagesToCleanup) {
  484 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  485 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  486 | 
  487 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  488 |       }
  489 |     }
  490 |   },
  491 | 
  492 |   cleanupStNightreignPages: async ({ page, apiAuthAdmin }, use) => {
  493 |     const moba = new Moba(page);
  494 |     await page.context().addCookies(apiAuthAdmin.cookies);
  495 |     const pagesToCleanup = [];
  496 | 
  497 |     const addPageForCleanup = (pageName) => {
  498 |       pagesToCleanup.push(pageName);
  499 |     };
  500 | 
  501 |     await use({ moba, addPageForCleanup });
  502 | 
  503 |     // Cleanup после теста
  504 |     if (pagesToCleanup.length > 0) {
  505 |       await moba.mainURLs.openAdminNightreignPage();
  506 | 
  507 |       for (const pageName of pagesToCleanup) {
  508 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  509 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  510 | 
  511 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  512 |       }
  513 |     }
  514 |   },
  515 | 
  516 |   cleanupStDeadlockPages: async ({ page, apiAuthAdmin }, use) => {
  517 |     const moba = new Moba(page);
  518 |     await page.context().addCookies(apiAuthAdmin.cookies);
  519 |     const pagesToCleanup = [];
  520 | 
  521 |     const addPageForCleanup = (pageName) => {
  522 |       pagesToCleanup.push(pageName);
  523 |     };
  524 | 
  525 |     await use({ moba, addPageForCleanup });
  526 | 
  527 |     // Cleanup после теста
  528 |     if (pagesToCleanup.length > 0) {
  529 |       await moba.mainURLs.openAdminDeadlockPage();
  530 | 
  531 |       for (const pageName of pagesToCleanup) {
  532 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  533 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  534 | 
  535 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  536 |       }
  537 |     }
  538 |   },
  539 | 
  540 |   cleanupStMhwPages: async ({ page, apiAuthAdmin }, use) => {
  541 |     const moba = new Moba(page);
  542 |     await page.context().addCookies(apiAuthAdmin.cookies);
  543 |     const pagesToCleanup = [];
  544 | 
  545 |     const addPageForCleanup = (pageName) => {
  546 |       pagesToCleanup.push(pageName);
  547 |     };
  548 | 
  549 |     await use({ moba, addPageForCleanup });
  550 | 
  551 |     // Cleanup после теста
  552 |     if (pagesToCleanup.length > 0) {
  553 |       await moba.mainURLs.openAdminMhwPage();
  554 | 
  555 |       for (const pageName of pagesToCleanup) {
  556 |         await moba.stAdminPage.deleteStCardWidget(pageName);
> 557 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
      |                                                       ^ TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
  558 | 
  559 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  560 |       }
  561 |     }
  562 |   },
  563 | 
  564 |   cleanupStMarvelRivalsPages: async ({ page, apiAuthAdmin }, use) => {
  565 |     const moba = new Moba(page);
  566 |     await page.context().addCookies(apiAuthAdmin.cookies);
  567 |     const pagesToCleanup = [];
  568 | 
  569 |     const addPageForCleanup = (pageName) => {
  570 |       pagesToCleanup.push(pageName);
  571 |     };
  572 | 
  573 |     await use({ moba, addPageForCleanup });
  574 | 
  575 |     // Cleanup после теста
  576 |     if (pagesToCleanup.length > 0) {
  577 |       await moba.mainURLs.openAdminMarvelRivalsPage();
  578 | 
  579 |       for (const pageName of pagesToCleanup) {
  580 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  581 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  582 | 
  583 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  584 |       }
  585 |     }
  586 |   },
  587 | 
  588 |   cleanupStBazaarPages: async ({ page, apiAuthAdmin }, use) => {
  589 |     const moba = new Moba(page);
  590 |     await page.context().addCookies(apiAuthAdmin.cookies);
  591 |     const pagesToCleanup = [];
  592 | 
  593 |     const addPageForCleanup = (pageName) => {
  594 |       pagesToCleanup.push(pageName);
  595 |     };
  596 | 
  597 |     await use({ moba, addPageForCleanup });
  598 | 
  599 |     // Cleanup после теста
  600 |     if (pagesToCleanup.length > 0) {
  601 |       await moba.mainURLs.openAdminBazaarPage();
  602 | 
  603 |       for (const pageName of pagesToCleanup) {
  604 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  605 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  606 | 
  607 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  608 |       }
  609 |     }
  610 |   },
  611 | 
  612 |   cleanupStZzzPages: async ({ page, apiAuthAdmin }, use) => {
  613 |     const moba = new Moba(page);
  614 |     await page.context().addCookies(apiAuthAdmin.cookies);
  615 |     const pagesToCleanup = [];
  616 | 
  617 |     const addPageForCleanup = (pageName) => {
  618 |       pagesToCleanup.push(pageName);
  619 |     };
  620 | 
  621 |     await use({ moba, addPageForCleanup });
  622 | 
  623 |     // Cleanup после теста
  624 |     if (pagesToCleanup.length > 0) {
  625 |       await moba.mainURLs.openAdminZzzPage();
  626 | 
  627 |       for (const pageName of pagesToCleanup) {
  628 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  629 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  630 | 
  631 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  632 |       }
  633 |     }
  634 |   },
  635 | 
  636 |   cleanupStRiftboundPages: async ({ page, apiAuthAdmin }, use) => {
  637 |     const moba = new Moba(page);
  638 |     await page.context().addCookies(apiAuthAdmin.cookies);
  639 |     const pagesToCleanup = [];
  640 | 
  641 |     const addPageForCleanup = (pageName) => {
  642 |       pagesToCleanup.push(pageName);
  643 |     };
  644 | 
  645 |     await use({ addPageForCleanup, moba });
  646 | 
  647 |     // Cleanup после теста
  648 |     if (pagesToCleanup.length > 0) {
  649 |       await moba.mainURLs.openAdminRiftboundPage();
  650 | 
  651 |       for (const pageName of pagesToCleanup) {
  652 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  653 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  654 | 
  655 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  656 |       }
  657 |     }
```