# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Admin permission >> Admin role can edit the structure page
- Location: e2e-tests/ngf.test.js:614:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
Call log:
  - waiting for getByTestId('admin-page-st-document-item-card').filter({ hasText: '/qa-automation-st-page-388a1c44-d449-4557-8a3e-e708c109a9e1' }) to be hidden
    - locator resolved to visible <div data-testid="admin-page-st-document-item-card" class="xh8yej3 x78zum5 x1q0g3np x1w9t9sz x6s0dn4 x1slt461 x1nhvcw1 x1a02dak x1vctgw6 x17gf9bc x614542 x1hv8zah xe8ttls x139jznd x1ypdohk x9zwv14">…</div>

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Check out Neverness to Everness, the latest gacha on the scene Explore NTE Close":
        - /url: https://mobalytics.gg/neverness-to-everness
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e7]: Check out Neverness to Everness, the latest gacha on the scene
            - button "Explore NTE" [ref=e8]
          - img "Close" [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e11]:
          - link "Mobalytics" [ref=e12] [cursor=pointer]:
            - /url: /zzz
            - img "Mobalytics" [ref=e13]
          - generic [ref=e15]:
            - link "League of Legends LoL" [ref=e17] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=e19]:
                - img "League of Legends" [ref=e20]
                - generic [ref=e21]: LoL
            - link "Teamfight Tactics TFT" [ref=e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=e25]:
                - img "Teamfight Tactics" [ref=e26]
                - generic [ref=e27]: TFT
            - link "Diablo 4 Diablo 4" [ref=e29] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=e31]:
                - img "Diablo 4" [ref=e32]
                - generic [ref=e33]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e35] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=e37]:
                - img "Path of Exile 2" [ref=e38]
                - generic [ref=e39]: PoE 2
            - link "Path of Exile PoE" [ref=e41] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=e43]:
                - img "Path of Exile" [ref=e44]
                - generic [ref=e45]: PoE
            - link "Destiny 2 Destiny 2" [ref=e47] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=e49]:
                - img "Destiny 2" [ref=e50]
                - generic [ref=e51]: Destiny 2
            - link "Marathon Marathon" [ref=e53] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=e55]:
                - img "Marathon" [ref=e56]
                - generic [ref=e57]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e59] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=e61]:
                - img "Slay the Spire 2" [ref=e62]
                - generic [ref=e63]: STS 2
            - link "Deadlock Deadlock" [ref=e65] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=e67]:
                - img "Deadlock" [ref=e68]
                - generic [ref=e69]: Deadlock
            - link "Overwatch Overwatch" [ref=e71] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=e73]:
                - img "Overwatch" [ref=e74]
                - generic [ref=e75]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e77] [cursor=pointer]:
              - /url: https://mobalytics.gg/borderlands-4
              - generic [ref=e79]:
                - img "Borderlands 4" [ref=e80]
                - generic [ref=e81]: Borderlands 4
            - link "Valorant VAL" [ref=e83] [cursor=pointer]:
              - /url: https://mobalytics.gg/valorant
              - generic [ref=e85]:
                - img "Valorant" [ref=e86]
                - generic [ref=e87]: VAL
            - link "Neverness to Everness NTE New" [ref=e89] [cursor=pointer]:
              - /url: https://mobalytics.gg/neverness-to-everness
              - generic [ref=e91]:
                - img "Neverness to Everness" [ref=e92]
                - generic [ref=e93]: NTE
                - generic [ref=e95]: New
            - 'link "Arknights: Endfield Endfield" [ref=e97] [cursor=pointer]':
              - /url: https://mobalytics.gg/arknights-endfield
              - generic [ref=e99]:
                - 'img "Arknights: Endfield" [ref=e100]'
                - generic [ref=e101]: Endfield
            - link "Elden Ring Nightreign Nightreign" [ref=e103] [cursor=pointer]:
              - /url: https://mobalytics.gg/elden-ring-nightreign
              - generic [ref=e105]:
                - img "Elden Ring Nightreign" [ref=e106]
                - generic [ref=e107]: Nightreign
            - button [ref=e108] [cursor=pointer]:
              - img [ref=e109]
            - generic:
              - link "Monster Hunter Wilds Monster Hunter Wilds":
                - /url: https://mobalytics.gg/mhw
                - generic:
                  - generic:
                    - img "Monster Hunter Wilds"
                    - generic: Monster Hunter Wilds
            - generic:
              - link "Hades 2 Hades 2":
                - /url: https://mobalytics.gg/hades-2
                - generic:
                  - generic:
                    - img "Hades 2"
                    - generic: Hades 2
            - generic:
              - link "The Bazaar The Bazaar":
                - /url: https://mobalytics.gg/the-bazaar
                - generic:
                  - generic:
                    - img "The Bazaar"
                    - generic: The Bazaar
            - generic:
              - link "Marvel Rivals Marvel Rivals":
                - /url: https://mobalytics.gg/marvel-rivals
                - generic:
                  - generic:
                    - img "Marvel Rivals"
                    - generic: Marvel Rivals
            - generic:
              - link "Zenless Zone Zero ZZZ":
                - /url: https://mobalytics.gg/zzz
                - generic:
                  - generic:
                    - img "Zenless Zone Zero"
                    - generic: ZZZ
            - generic:
              - link "2XKO 2XKO":
                - /url: https://mobalytics.gg/2xko
                - generic:
                  - generic:
                    - img "2XKO"
                    - generic: 2XKO
            - generic:
              - link "Riftbound Riftbound":
                - /url: https://mobalytics.gg/riftbound
                - generic:
                  - generic:
                    - img "Riftbound"
                    - generic: Riftbound
        - generic [ref=e110]:
          - generic [ref=e111]:
            - link "DOWNLOAD APP" [ref=e112] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-zzz&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e114]:
                - img [ref=e115]
                - text: DOWNLOAD APP
            - link "News" [ref=e117] [cursor=pointer]:
              - /url: /news
              - generic [ref=e118]: News
          - generic [ref=e119]:
            - button "Remove Ads" [ref=e120] [cursor=pointer]:
              - generic [ref=e121]: Remove Ads
            - generic [ref=e122]:
              - link "A admin_auto_tests+ns@mobalyticshq.com" [ref=e123] [cursor=pointer]:
                - /url: /zzz/profile/rich-flame-e3lwjq
                - generic [ref=e125]:
                  - generic [ref=e127]: A
                  - generic [ref=e129]: admin_auto_tests+ns@mobalyticshq.com
              - button [ref=e131] [cursor=pointer]:
                - img [ref=e133]
              - button "Theme" [ref=e135] [cursor=pointer]:
                - img "Theme" [ref=e137]
        - generic [ref=e139]:
          - link "Home" [ref=e142] [cursor=pointer]:
            - /url: /zzz
            - img "Home" [ref=e144]
          - link "Profile" [ref=e147] [cursor=pointer]:
            - /url: /zzz/profile
            - img "Profile" [ref=e149]
          - link "Characters" [ref=e152] [cursor=pointer]:
            - /url: /zzz/characters
            - img "Characters" [ref=e154]
          - link "Builds" [ref=e157] [cursor=pointer]:
            - /url: /zzz/builds
            - img "Builds" [ref=e159]
          - link "Teams" [ref=e162] [cursor=pointer]:
            - /url: /zzz/teams
            - img "Teams" [ref=e164]
          - link "Tier List" [ref=e167] [cursor=pointer]:
            - /url: /zzz/tier-list
            - img "Tier List" [ref=e169]
          - link "W-Engines" [ref=e172] [cursor=pointer]:
            - /url: /zzz/w-engines
            - img "W-Engines" [ref=e174]
          - link "Drive Discs" [ref=e177] [cursor=pointer]:
            - /url: /zzz/drive-discs
            - img "Drive Discs" [ref=e179]
          - link "Bangboos" [ref=e182] [cursor=pointer]:
            - /url: /zzz/bangboos
            - img "Bangboos" [ref=e184]
          - link "Guides" [ref=e187] [cursor=pointer]:
            - /url: /zzz/guides
            - img "Guides" [ref=e189]
        - generic [ref=e191]:
          - main [ref=e192]:
            - generic [ref=e193]:
              - generic [ref=e194]:
                - heading "Structure Pages" [level=1] [ref=e195]
                - link "Create Page" [ref=e197] [cursor=pointer]:
                  - /url: /zzz/planner/st
                  - img [ref=e198]
                  - generic [ref=e199]: Create Page
              - generic [ref=e200]:
                - generic [ref=e201] [cursor=pointer]:
                  - generic [ref=e203]: /bangboos
                  - generic [ref=e204]:
                    - link "Edit" [ref=e205]:
                      - /url: /zzz/bangboos
                      - generic [ref=e206]: Edit
                    - button [ref=e207]:
                      - img [ref=e208]
                - generic [ref=e209] [cursor=pointer]:
                  - generic [ref=e211]: /builds
                  - generic [ref=e212]:
                    - link "Edit" [ref=e213]:
                      - /url: /zzz/builds
                      - generic [ref=e214]: Edit
                    - button [ref=e215]:
                      - img [ref=e216]
                - generic [ref=e217] [cursor=pointer]:
                  - generic [ref=e219]: /characters
                  - generic [ref=e220]:
                    - link "Edit" [ref=e221]:
                      - /url: /zzz/characters
                      - generic [ref=e222]: Edit
                    - button [ref=e223]:
                      - img [ref=e224]
                - generic [ref=e225] [cursor=pointer]:
                  - generic [ref=e227]: /characters/alice
                  - generic [ref=e228]:
                    - link "Edit" [ref=e229]:
                      - /url: /zzz/characters/alice
                      - generic [ref=e230]: Edit
                    - button [ref=e231]:
                      - img [ref=e232]
                - generic [ref=e233] [cursor=pointer]:
                  - generic [ref=e235]: /characters/anby
                  - generic [ref=e236]:
                    - link "Edit" [ref=e237]:
                      - /url: /zzz/characters/anby
                      - generic [ref=e238]: Edit
                    - button [ref=e239]:
                      - img [ref=e240]
                - generic [ref=e241] [cursor=pointer]:
                  - generic [ref=e243]: /characters/anton
                  - generic [ref=e244]:
                    - link "Edit" [ref=e245]:
                      - /url: /zzz/characters/anton
                      - generic [ref=e246]: Edit
                    - button [ref=e247]:
                      - img [ref=e248]
                - generic [ref=e249] [cursor=pointer]:
                  - generic [ref=e251]: /characters/aria
                  - generic [ref=e252]:
                    - link "Edit" [ref=e253]:
                      - /url: /zzz/characters/aria
                      - generic [ref=e254]: Edit
                    - button [ref=e255]:
                      - img [ref=e256]
                - generic [ref=e257] [cursor=pointer]:
                  - generic [ref=e259]: /characters/astra
                  - generic [ref=e260]:
                    - link "Edit" [ref=e261]:
                      - /url: /zzz/characters/astra
                      - generic [ref=e262]: Edit
                    - button [ref=e263]:
                      - img [ref=e264]
                - generic [ref=e265] [cursor=pointer]:
                  - generic [ref=e267]: /characters/banyue
                  - generic [ref=e268]:
                    - link "Edit" [ref=e269]:
                      - /url: /zzz/characters/banyue
                      - generic [ref=e270]: Edit
                    - button [ref=e271]:
                      - img [ref=e272]
                - generic [ref=e273] [cursor=pointer]:
                  - generic [ref=e275]: /characters/ben
                  - generic [ref=e276]:
                    - link "Edit" [ref=e277]:
                      - /url: /zzz/characters/ben
                      - generic [ref=e278]: Edit
                    - button [ref=e279]:
                      - img [ref=e280]
                - generic [ref=e281] [cursor=pointer]:
                  - generic [ref=e283]: /characters/billy
                  - generic [ref=e284]:
                    - link "Edit" [ref=e285]:
                      - /url: /zzz/characters/billy
                      - generic [ref=e286]: Edit
                    - button [ref=e287]:
                      - img [ref=e288]
                - generic [ref=e289] [cursor=pointer]:
                  - generic [ref=e291]: /characters/burnice
                  - generic [ref=e292]:
                    - link "Edit" [ref=e293]:
                      - /url: /zzz/characters/burnice
                      - generic [ref=e294]: Edit
                    - button [ref=e295]:
                      - img [ref=e296]
                - generic [ref=e297] [cursor=pointer]:
                  - generic [ref=e299]: /characters/caesar
                  - generic [ref=e300]:
                    - link "Edit" [ref=e301]:
                      - /url: /zzz/characters/caesar
                      - generic [ref=e302]: Edit
                    - button [ref=e303]:
                      - img [ref=e304]
                - generic [ref=e305] [cursor=pointer]:
                  - generic [ref=e307]: /characters/corin
                  - generic [ref=e308]:
                    - link "Edit" [ref=e309]:
                      - /url: /zzz/characters/corin
                      - generic [ref=e310]: Edit
                    - button [ref=e311]:
                      - img [ref=e312]
                - generic [ref=e313] [cursor=pointer]:
                  - generic [ref=e315]: /characters/dialyn
                  - generic [ref=e316]:
                    - link "Edit" [ref=e317]:
                      - /url: /zzz/characters/dialyn
                      - generic [ref=e318]: Edit
                    - button [ref=e319]:
                      - img [ref=e320]
                - generic [ref=e321] [cursor=pointer]:
                  - generic [ref=e323]: /characters/ellen
                  - generic [ref=e324]:
                    - link "Edit" [ref=e325]:
                      - /url: /zzz/characters/ellen
                      - generic [ref=e326]: Edit
                    - button [ref=e327]:
                      - img [ref=e328]
                - generic [ref=e329] [cursor=pointer]:
                  - generic [ref=e331]: /characters/evelyn
                  - generic [ref=e332]:
                    - link "Edit" [ref=e333]:
                      - /url: /zzz/characters/evelyn
                      - generic [ref=e334]: Edit
                    - button [ref=e335]:
                      - img [ref=e336]
                - generic [ref=e337] [cursor=pointer]:
                  - generic [ref=e339]: /characters/grace
                  - generic [ref=e340]:
                    - link "Edit" [ref=e341]:
                      - /url: /zzz/characters/grace
                      - generic [ref=e342]: Edit
                    - button [ref=e343]:
                      - img [ref=e344]
                - generic [ref=e345] [cursor=pointer]:
                  - generic [ref=e347]: /characters/harumasa
                  - generic [ref=e348]:
                    - link "Edit" [ref=e349]:
                      - /url: /zzz/characters/harumasa
                      - generic [ref=e350]: Edit
                    - button [ref=e351]:
                      - img [ref=e352]
                - generic [ref=e353] [cursor=pointer]:
                  - generic [ref=e355]: /characters/hugo
                  - generic [ref=e356]:
                    - link "Edit" [ref=e357]:
                      - /url: /zzz/characters/hugo
                      - generic [ref=e358]: Edit
                    - button [ref=e359]:
                      - img [ref=e360]
                - generic [ref=e361] [cursor=pointer]:
                  - generic [ref=e363]: /characters/jane
                  - generic [ref=e364]:
                    - link "Edit" [ref=e365]:
                      - /url: /zzz/characters/jane
                      - generic [ref=e366]: Edit
                    - button [ref=e367]:
                      - img [ref=e368]
                - generic [ref=e369] [cursor=pointer]:
                  - generic [ref=e371]: /characters/ju-fufu
                  - generic [ref=e372]:
                    - link "Edit" [ref=e373]:
                      - /url: /zzz/characters/ju-fufu
                      - generic [ref=e374]: Edit
                    - button [ref=e375]:
                      - img [ref=e376]
                - generic [ref=e377] [cursor=pointer]:
                  - generic [ref=e379]: /characters/koleda
                  - generic [ref=e380]:
                    - link "Edit" [ref=e381]:
                      - /url: /zzz/characters/koleda
                      - generic [ref=e382]: Edit
                    - button [ref=e383]:
                      - img [ref=e384]
                - generic [ref=e385] [cursor=pointer]:
                  - generic [ref=e387]: /characters/komano
                  - generic [ref=e388]:
                    - link "Edit" [ref=e389]:
                      - /url: /zzz/characters/komano
                      - generic [ref=e390]: Edit
                    - button [ref=e391]:
                      - img [ref=e392]
                - generic [ref=e393] [cursor=pointer]:
                  - generic [ref=e395]: /characters/lighter
                  - generic [ref=e396]:
                    - link "Edit" [ref=e397]:
                      - /url: /zzz/characters/lighter
                      - generic [ref=e398]: Edit
                    - button [ref=e399]:
                      - img [ref=e400]
                - generic [ref=e401] [cursor=pointer]:
                  - generic [ref=e403]: /characters/lucia
                  - generic [ref=e404]:
                    - link "Edit" [ref=e405]:
                      - /url: /zzz/characters/lucia
                      - generic [ref=e406]: Edit
                    - button [ref=e407]:
                      - img [ref=e408]
                - generic [ref=e409] [cursor=pointer]:
                  - generic [ref=e411]: /characters/lucy
                  - generic [ref=e412]:
                    - link "Edit" [ref=e413]:
                      - /url: /zzz/characters/lucy
                      - generic [ref=e414]: Edit
                    - button [ref=e415]:
                      - img [ref=e416]
                - generic [ref=e417] [cursor=pointer]:
                  - generic [ref=e419]: /characters/lycaon
                  - generic [ref=e420]:
                    - link "Edit" [ref=e421]:
                      - /url: /zzz/characters/lycaon
                      - generic [ref=e422]: Edit
                    - button [ref=e423]:
                      - img [ref=e424]
                - generic [ref=e425] [cursor=pointer]:
                  - generic [ref=e427]: /characters/manato
                  - generic [ref=e428]:
                    - link "Edit" [ref=e429]:
                      - /url: /zzz/characters/manato
                      - generic [ref=e430]: Edit
                    - button [ref=e431]:
                      - img [ref=e432]
                - generic [ref=e433] [cursor=pointer]:
                  - generic [ref=e435]: /characters/miyabi
                  - generic [ref=e436]:
                    - link "Edit" [ref=e437]:
                      - /url: /zzz/characters/miyabi
                      - generic [ref=e438]: Edit
                    - button [ref=e439]:
                      - img [ref=e440]
                - generic [ref=e441] [cursor=pointer]:
                  - generic [ref=e443]: /characters/nekomata
                  - generic [ref=e444]:
                    - link "Edit" [ref=e445]:
                      - /url: /zzz/characters/nekomata
                      - generic [ref=e446]: Edit
                    - button [ref=e447]:
                      - img [ref=e448]
                - generic [ref=e449] [cursor=pointer]:
                  - generic [ref=e451]: /characters/nicole
                  - generic [ref=e452]:
                    - link "Edit" [ref=e453]:
                      - /url: /zzz/characters/nicole
                      - generic [ref=e454]: Edit
                    - button [ref=e455]:
                      - img [ref=e456]
                - generic [ref=e457] [cursor=pointer]:
                  - generic [ref=e459]: /characters/orphie
                  - generic [ref=e460]:
                    - link "Edit" [ref=e461]:
                      - /url: /zzz/characters/orphie
                      - generic [ref=e462]: Edit
                    - button [ref=e463]:
                      - img [ref=e464]
                - generic [ref=e465] [cursor=pointer]:
                  - generic [ref=e467]: /characters/pan-yinhu
                  - generic [ref=e468]:
                    - link "Edit" [ref=e469]:
                      - /url: /zzz/characters/pan-yinhu
                      - generic [ref=e470]: Edit
                    - button [ref=e471]:
                      - img [ref=e472]
                - generic [ref=e473] [cursor=pointer]:
                  - generic [ref=e475]: /characters/piper
                  - generic [ref=e476]:
                    - link "Edit" [ref=e477]:
                      - /url: /zzz/characters/piper
                      - generic [ref=e478]: Edit
                    - button [ref=e479]:
                      - img [ref=e480]
                - generic [ref=e481] [cursor=pointer]:
                  - generic [ref=e483]: /characters/pulchra
                  - generic [ref=e484]:
                    - link "Edit" [ref=e485]:
                      - /url: /zzz/characters/pulchra
                      - generic [ref=e486]: Edit
                    - button [ref=e487]:
                      - img [ref=e488]
                - generic [ref=e489] [cursor=pointer]:
                  - generic [ref=e491]: /characters/qingyi
                  - generic [ref=e492]:
                    - link "Edit" [ref=e493]:
                      - /url: /zzz/characters/qingyi
                      - generic [ref=e494]: Edit
                    - button [ref=e495]:
                      - img [ref=e496]
                - generic [ref=e497] [cursor=pointer]:
                  - generic [ref=e499]: /characters/rina
                  - generic [ref=e500]:
                    - link "Edit" [ref=e501]:
                      - /url: /zzz/characters/rina
                      - generic [ref=e502]: Edit
                    - button [ref=e503]:
                      - img [ref=e504]
                - generic [ref=e505] [cursor=pointer]:
                  - generic [ref=e507]: /characters/seed
                  - generic [ref=e508]:
                    - link "Edit" [ref=e509]:
                      - /url: /zzz/characters/seed
                      - generic [ref=e510]: Edit
                    - button [ref=e511]:
                      - img [ref=e512]
                - generic [ref=e513] [cursor=pointer]:
                  - generic [ref=e515]: /characters/seth
                  - generic [ref=e516]:
                    - link "Edit" [ref=e517]:
                      - /url: /zzz/characters/seth
                      - generic [ref=e518]: Edit
                    - button [ref=e519]:
                      - img [ref=e520]
                - generic [ref=e521] [cursor=pointer]:
                  - generic [ref=e523]: /characters/soldier-0-anby
                  - generic [ref=e524]:
                    - link "Edit" [ref=e525]:
                      - /url: /zzz/characters/soldier-0-anby
                      - generic [ref=e526]: Edit
                    - button [ref=e527]:
                      - img [ref=e528]
                - generic [ref=e529] [cursor=pointer]:
                  - generic [ref=e531]: /characters/soldier-11
                  - generic [ref=e532]:
                    - link "Edit" [ref=e533]:
                      - /url: /zzz/characters/soldier-11
                      - generic [ref=e534]: Edit
                    - button [ref=e535]:
                      - img [ref=e536]
                - generic [ref=e537] [cursor=pointer]:
                  - generic [ref=e539]: /characters/soukaku
                  - generic [ref=e540]:
                    - link "Edit" [ref=e541]:
                      - /url: /zzz/characters/soukaku
                      - generic [ref=e542]: Edit
                    - button [ref=e543]:
                      - img [ref=e544]
                - generic [ref=e545] [cursor=pointer]:
                  - generic [ref=e547]: /characters/sunna
                  - generic [ref=e548]:
                    - link "Edit" [ref=e549]:
                      - /url: /zzz/characters/sunna
                      - generic [ref=e550]: Edit
                    - button [ref=e551]:
                      - img [ref=e552]
                - generic [ref=e553] [cursor=pointer]:
                  - generic [ref=e555]: /characters/trigger
                  - generic [ref=e556]:
                    - link "Edit" [ref=e557]:
                      - /url: /zzz/characters/trigger
                      - generic [ref=e558]: Edit
                    - button [ref=e559]:
                      - img [ref=e560]
                - generic [ref=e561] [cursor=pointer]:
                  - generic [ref=e563]: /character-st-template
                  - generic [ref=e564]:
                    - link "Edit" [ref=e565]:
                      - /url: /zzz/character-st-template
                      - generic [ref=e566]: Edit
                    - button [ref=e567]:
                      - img [ref=e568]
                - generic [ref=e569] [cursor=pointer]:
                  - generic [ref=e571]: /characters/vivian
                  - generic [ref=e572]:
                    - link "Edit" [ref=e573]:
                      - /url: /zzz/characters/vivian
                      - generic [ref=e574]: Edit
                    - button [ref=e575]:
                      - img [ref=e576]
                - generic [ref=e577] [cursor=pointer]:
                  - generic [ref=e579]: /characters/yanagi
                  - generic [ref=e580]:
                    - link "Edit" [ref=e581]:
                      - /url: /zzz/characters/yanagi
                      - generic [ref=e582]: Edit
                    - button [ref=e583]:
                      - img [ref=e584]
                - generic [ref=e585] [cursor=pointer]:
                  - generic [ref=e587]: /characters/ye-shunguang
                  - generic [ref=e588]:
                    - link "Edit" [ref=e589]:
                      - /url: /zzz/characters/ye-shunguang
                      - generic [ref=e590]: Edit
                    - button [ref=e591]:
                      - img [ref=e592]
                - generic [ref=e593] [cursor=pointer]:
                  - generic [ref=e595]: /characters/yidhari
                  - generic [ref=e596]:
                    - link "Edit" [ref=e597]:
                      - /url: /zzz/characters/yidhari
                      - generic [ref=e598]: Edit
                    - button [ref=e599]:
                      - img [ref=e600]
                - generic [ref=e601] [cursor=pointer]:
                  - generic [ref=e603]: /characters/yixuan
                  - generic [ref=e604]:
                    - link "Edit" [ref=e605]:
                      - /url: /zzz/characters/yixuan
                      - generic [ref=e606]: Edit
                    - button [ref=e607]:
                      - img [ref=e608]
                - generic [ref=e609] [cursor=pointer]:
                  - generic [ref=e611]: /characters/yuzuha
                  - generic [ref=e612]:
                    - link "Edit" [ref=e613]:
                      - /url: /zzz/characters/yuzuha
                      - generic [ref=e614]: Edit
                    - button [ref=e615]:
                      - img [ref=e616]
                - generic [ref=e617] [cursor=pointer]:
                  - generic [ref=e619]: /characters/zhao
                  - generic [ref=e620]:
                    - link "Edit" [ref=e621]:
                      - /url: /zzz/characters/zhao
                      - generic [ref=e622]: Edit
                    - button [ref=e623]:
                      - img [ref=e624]
                - generic [ref=e625] [cursor=pointer]:
                  - generic [ref=e627]: /characters/zhu-yuan
                  - generic [ref=e628]:
                    - link "Edit" [ref=e629]:
                      - /url: /zzz/characters/zhu-yuan
                      - generic [ref=e630]: Edit
                    - button [ref=e631]:
                      - img [ref=e632]
                - generic [ref=e633] [cursor=pointer]:
                  - generic [ref=e635]: /community-teams
                  - generic [ref=e636]:
                    - link "Edit" [ref=e637]:
                      - /url: /zzz/community-teams
                      - generic [ref=e638]: Edit
                    - button [ref=e639]:
                      - img [ref=e640]
                - generic [ref=e641] [cursor=pointer]:
                  - generic [ref=e643]: /drive-discs
                  - generic [ref=e644]:
                    - link "Edit" [ref=e645]:
                      - /url: /zzz/drive-discs
                      - generic [ref=e646]: Edit
                    - button [ref=e647]:
                      - img [ref=e648]
                - generic [ref=e649] [cursor=pointer]:
                  - generic [ref=e651]: /guides
                  - generic [ref=e652]:
                    - link "Edit" [ref=e653]:
                      - /url: /zzz/guides
                      - generic [ref=e654]: Edit
                    - button [ref=e655]:
                      - img [ref=e656]
                - generic [ref=e657] [cursor=pointer]:
                  - generic [ref=e659]: /home
                  - generic [ref=e660]:
                    - link "Edit" [ref=e661]:
                      - /url: /zzz/home
                      - generic [ref=e662]: Edit
                    - button [ref=e663]:
                      - img [ref=e664]
                - generic [ref=e665] [cursor=pointer]:
                  - generic [ref=e667]: /qa-automation-st-page-764c9f59-cd5e-4394-90d9-279a416260f3
                  - generic [ref=e668]:
                    - link "Edit" [ref=e669]:
                      - /url: /zzz/qa-automation-st-page-764c9f59-cd5e-4394-90d9-279a416260f3
                      - generic [ref=e670]: Edit
                    - button [ref=e671]:
                      - img [ref=e672]
                - generic [ref=e673] [cursor=pointer]:
                  - generic [ref=e675]: /qa-check-static-data-not-delete
                  - generic [ref=e676]:
                    - link "Edit" [ref=e677]:
                      - /url: /zzz/qa-check-static-data-not-delete
                      - generic [ref=e678]: Edit
                    - button [ref=e679]:
                      - img [ref=e680]
                - generic [ref=e681] [cursor=pointer]:
                  - generic [ref=e683]: /qa-not-delete-st-page
                  - generic [ref=e684]:
                    - link "Edit" [ref=e685]:
                      - /url: /zzz/qa-not-delete-st-page
                      - generic [ref=e686]: Edit
                    - button [ref=e687]:
                      - img [ref=e688]
                - generic [ref=e689] [cursor=pointer]:
                  - generic [ref=e691]: /teams
                  - generic [ref=e692]:
                    - link "Edit" [ref=e693]:
                      - /url: /zzz/teams
                      - generic [ref=e694]: Edit
                    - button [ref=e695]:
                      - img [ref=e696]
                - generic [ref=e697] [cursor=pointer]:
                  - generic [ref=e699]: /test-cache
                  - generic [ref=e700]:
                    - link "Edit" [ref=e701]:
                      - /url: /zzz/test-cache
                      - generic [ref=e702]: Edit
                    - button [ref=e703]:
                      - img [ref=e704]
                - generic [ref=e705] [cursor=pointer]:
                  - generic [ref=e707]: /tier-list
                  - generic [ref=e708]:
                    - link "Edit" [ref=e709]:
                      - /url: /zzz/tier-list
                      - generic [ref=e710]: Edit
                    - button [ref=e711]:
                      - img [ref=e712]
                - generic [ref=e713] [cursor=pointer]:
                  - generic [ref=e715]: /w-engines
                  - generic [ref=e716]:
                    - link "Edit" [ref=e717]:
                      - /url: /zzz/w-engines
                      - generic [ref=e718]: Edit
                    - button [ref=e719]:
                      - img [ref=e720]
                - generic [ref=e721] [cursor=pointer]:
                  - generic [ref=e723]: /z-test-zzz-wiki
                  - generic [ref=e724]:
                    - link "Edit" [ref=e725]:
                      - /url: /zzz/z-test-zzz-wiki
                      - generic [ref=e726]: Edit
                    - button [ref=e727]:
                      - img [ref=e728]
                - generic [ref=e729] [cursor=pointer]:
                  - generic [ref=e731]: /zzz1
                  - generic [ref=e732]:
                    - link "Edit" [ref=e733]:
                      - /url: /zzz/zzz1
                      - generic [ref=e734]: Edit
                    - button [ref=e735]:
                      - img [ref=e736]
                - generic [ref=e737] [cursor=pointer]:
                  - generic [ref=e739]: /zzz-char-template
                  - generic [ref=e740]:
                    - link "Edit" [ref=e741]:
                      - /url: /zzz/zzz-char-template
                      - generic [ref=e742]: Edit
                    - button [ref=e743]:
                      - img [ref=e744]
          - complementary [ref=e750]:
            - generic [ref=e751]:
              - generic [ref=e753]:
                - generic [ref=e755] [cursor=pointer]:
                  - generic [ref=e756]: Advertisement
                  - generic [ref=e757]: Remove Ads
                - generic [ref=e761] [cursor=pointer]:
                  - generic [ref=e762]: Remove all ads
                  - generic [ref=e763]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e764]:
                    - generic [ref=e765]: Remove ads
              - generic [ref=e767]:
                - generic [ref=e769] [cursor=pointer]:
                  - generic [ref=e770]: Advertisement
                  - generic [ref=e771]: Remove Ads
                - generic [ref=e775] [cursor=pointer]:
                  - generic [ref=e776]: Remove all ads
                  - generic [ref=e777]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e778]:
                    - generic [ref=e779]: Remove ads
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e783]:
    - banner [ref=e784]:
      - generic [ref=e785] [cursor=pointer]:
        - generic [ref=e786]: Advertisement
        - generic [ref=e787]: Remove Ads
    - generic [ref=e790] [cursor=pointer]:
      - generic [ref=e791]: Remove all ads
      - generic [ref=e792]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e793]:
        - generic [ref=e794]: Remove ads
```

# Test source

```ts
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
  557 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
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
> 629 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
      |                                                       ^ TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
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
  658 |   },
  659 | 
  660 |   // Register account
  661 |   registerAccount: async ({ page }, use) => {
  662 |     const moba = new Moba(page);
  663 |     const uniqueId = uuidv4().substring(0, 4);
  664 |     const credentials = `ns+${uniqueId}@mobalyticshq.com`;
  665 | 
  666 |     await moba.mainURLs.openMhwPage();
  667 |     await moba.navbar.gotoSignInPage();
  668 |     await moba.authorizePage.registerAccount(credentials);
  669 | 
  670 |     await use(moba);
  671 |   }
  672 | });
  673 | 
```