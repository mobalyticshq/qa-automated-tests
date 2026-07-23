# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Admin permission >> Admin role can duplicate the structure page
- Location: e2e-tests/ngf.test.js:597:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
Call log:
  - waiting for getByTestId('admin-page-st-document-item-card').filter({ hasText: '/qa-automation-st-page-79dd52a4-8170-4614-9878-3cab223ba9ba' }) to be hidden
    - locator resolved to visible <div data-testid="admin-page-st-document-item-card" class="xh8yej3 x78zum5 x1q0g3np x1w9t9sz x6s0dn4 x1slt461 x1nhvcw1 x1a02dak x1vctgw6 x17gf9bc x614542 x1hv8zah xe8ttls x139jznd x1ypdohk x9zwv14">…</div>

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /poe-2
          - img "Mobalytics" [ref=e7]
        - generic [ref=e9]:
          - link "League of Legends LoL" [ref=e11] [cursor=pointer]:
            - /url: https://mobalytics.gg/lol
            - generic [ref=e13]:
              - img "League of Legends" [ref=e14]
              - generic [ref=e15]: LoL
          - link "Teamfight Tactics TFT" [ref=e17] [cursor=pointer]:
            - /url: https://mobalytics.gg/tft
            - generic [ref=e19]:
              - img "Teamfight Tactics" [ref=e20]
              - generic [ref=e21]: TFT
          - link "Diablo 4 Diablo 4" [ref=e23] [cursor=pointer]:
            - /url: https://mobalytics.gg/diablo-4
            - generic [ref=e25]:
              - img "Diablo 4" [ref=e26]
              - generic [ref=e27]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e29] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe-2
            - generic [ref=e31]:
              - img "Path of Exile 2" [ref=e32]
              - generic [ref=e33]: PoE 2
          - link "Path of Exile PoE" [ref=e35] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe
            - generic [ref=e37]:
              - img "Path of Exile" [ref=e38]
              - generic [ref=e39]: PoE
          - link "Destiny 2 Destiny 2" [ref=e41] [cursor=pointer]:
            - /url: https://mobalytics.gg/destiny-2
            - generic [ref=e43]:
              - img "Destiny 2" [ref=e44]
              - generic [ref=e45]: Destiny 2
          - link "Marathon Marathon" [ref=e47] [cursor=pointer]:
            - /url: https://mobalytics.gg/marathon
            - generic [ref=e49]:
              - img "Marathon" [ref=e50]
              - generic [ref=e51]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
          - link "Deadlock Deadlock" [ref=e59] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e61]:
              - img "Deadlock" [ref=e62]
              - generic [ref=e63]: Deadlock
          - link "Overwatch Overwatch" [ref=e65] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e67]:
              - img "Overwatch" [ref=e68]
              - generic [ref=e69]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e71] [cursor=pointer]:
            - /url: https://mobalytics.gg/borderlands-4
            - generic [ref=e73]:
              - img "Borderlands 4" [ref=e74]
              - generic [ref=e75]: Borderlands 4
          - link "Valorant VAL" [ref=e77] [cursor=pointer]:
            - /url: https://mobalytics.gg/valorant
            - generic [ref=e79]:
              - img "Valorant" [ref=e80]
              - generic [ref=e81]: VAL
          - link "Neverness to Everness NTE New" [ref=e83] [cursor=pointer]:
            - /url: https://mobalytics.gg/neverness-to-everness
            - generic [ref=e85]:
              - img "Neverness to Everness" [ref=e86]
              - generic [ref=e87]: NTE
              - generic [ref=e89]: New
          - 'link "Arknights: Endfield Endfield" [ref=e91] [cursor=pointer]':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic [ref=e93]:
              - 'img "Arknights: Endfield" [ref=e94]'
              - generic [ref=e95]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e97] [cursor=pointer]:
            - /url: https://mobalytics.gg/elden-ring-nightreign
            - generic [ref=e99]:
              - img "Elden Ring Nightreign" [ref=e100]
              - generic [ref=e101]: Nightreign
          - button [ref=e102] [cursor=pointer]:
            - img [ref=e103]
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
      - generic [ref=e104]:
        - generic [ref=e105]:
          - link "DOWNLOAD APP" [ref=e106] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?utm_campaign=I5qu0ij&utm_medium=owaa&utm_source=app
            - button "DOWNLOAD APP" [ref=e108]:
              - img [ref=e109]
              - text: DOWNLOAD APP
          - generic [ref=e114]:
            - img [ref=e115]
            - textbox "global search input" [ref=e117]:
              - /placeholder: Ask me anything about PoE builds!
          - link "Gamebase" [ref=e119] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e120]: Gamebase
        - generic [ref=e121]:
          - button "Get Plus" [ref=e122] [cursor=pointer]
          - generic [ref=e123]:
            - link "A admin_auto_tests+ns@mobalyticshq.com" [ref=e124] [cursor=pointer]:
              - /url: /poe-2/profile/rich-flame-e3lwjq
              - generic [ref=e126]:
                - generic [ref=e128]: A
                - generic [ref=e130]: admin_auto_tests+ns@mobalyticshq.com
            - button [ref=e132] [cursor=pointer]:
              - img [ref=e134]
            - button "Theme" [ref=e136] [cursor=pointer]:
              - img "Theme" [ref=e138]
      - generic [ref=e140]:
        - link "Home" [ref=e143] [cursor=pointer]:
          - /url: /poe-2
          - img "Home" [ref=e145]
        - link "Profile" [ref=e148] [cursor=pointer]:
          - /url: /poe-2/profile
          - img "Profile" [ref=e150]
        - link "Build Planner" [ref=e153] [cursor=pointer]:
          - /url: /poe-2/planner/builds
          - img "Build Planner" [ref=e155]
        - link "Tier List" [ref=e158] [cursor=pointer]:
          - /url: /poe-2/tier-list
          - img "Tier List" [ref=e160]
        - link "Starter Builds" [ref=e163] [cursor=pointer]:
          - /url: /poe-2/starter-builds
          - img "Starter Builds" [ref=e165]
        - link "Builds" [ref=e168] [cursor=pointer]:
          - /url: /poe-2/builds
          - img "Builds" [ref=e170]
        - link "Guides" [ref=e173] [cursor=pointer]:
          - /url: /poe-2/guides
          - img "Guides" [ref=e175]
        - link "Creators" [ref=e178] [cursor=pointer]:
          - /url: /poe-2/creators
          - img "Creators" [ref=e180]
      - generic [ref=e182]:
        - main [ref=e183]:
          - generic [ref=e184]:
            - generic [ref=e185]:
              - heading "Structure Pages" [level=1] [ref=e186]
              - link "Create Page" [ref=e188] [cursor=pointer]:
                - /url: /poe-2/planner/st
                - img [ref=e189]
                - generic [ref=e190]: Create Page
            - generic [ref=e191]:
              - generic [ref=e192] [cursor=pointer]:
                - generic [ref=e194]: /abyssal-lich-builds
                - generic [ref=e195]:
                  - link "Edit" [ref=e196]:
                    - /url: /poe-2/abyssal-lich-builds
                    - generic [ref=e197]: Edit
                  - button [ref=e198]:
                    - img [ref=e199]
              - generic [ref=e200] [cursor=pointer]:
                - generic [ref=e202]: /abyssal-lich-starter-builds
                - generic [ref=e203]:
                  - link "Edit" [ref=e204]:
                    - /url: /poe-2/abyssal-lich-starter-builds
                    - generic [ref=e205]: Edit
                  - button [ref=e206]:
                    - img [ref=e207]
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e210]: /acolyte-of-chayula-builds
                - generic [ref=e211]:
                  - link "Edit" [ref=e212]:
                    - /url: /poe-2/acolyte-of-chayula-builds
                    - generic [ref=e213]: Edit
                  - button [ref=e214]:
                    - img [ref=e215]
              - generic [ref=e216] [cursor=pointer]:
                - generic [ref=e218]: /acolyte-starter-builds
                - generic [ref=e219]:
                  - link "Edit" [ref=e220]:
                    - /url: /poe-2/acolyte-starter-builds
                    - generic [ref=e221]: Edit
                  - button [ref=e222]:
                    - img [ref=e223]
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e226]: /alkaizer
                - generic [ref=e227]:
                  - link "Edit" [ref=e228]:
                    - /url: /poe-2/alkaizer
                    - generic [ref=e229]: Edit
                  - button [ref=e230]:
                    - img [ref=e231]
              - generic [ref=e232] [cursor=pointer]:
                - generic [ref=e234]: /amazon-builds
                - generic [ref=e235]:
                  - link "Edit" [ref=e236]:
                    - /url: /poe-2/amazon-builds
                    - generic [ref=e237]: Edit
                  - button [ref=e238]:
                    - img [ref=e239]
              - generic [ref=e240] [cursor=pointer]:
                - generic [ref=e242]: /amazon-starter-builds
                - generic [ref=e243]:
                  - link "Edit" [ref=e244]:
                    - /url: /poe-2/amazon-starter-builds
                    - generic [ref=e245]: Edit
                  - button [ref=e246]:
                    - img [ref=e247]
              - generic [ref=e248] [cursor=pointer]:
                - generic [ref=e250]: /atlas-trees
                - generic [ref=e251]:
                  - link "Edit" [ref=e252]:
                    - /url: /poe-2/atlas-trees
                    - generic [ref=e253]: Edit
                  - button [ref=e254]:
                    - img [ref=e255]
              - generic [ref=e256] [cursor=pointer]:
                - generic [ref=e258]: /beginner-guides
                - generic [ref=e259]:
                  - link "Edit" [ref=e260]:
                    - /url: /poe-2/beginner-guides
                    - generic [ref=e261]: Edit
                  - button [ref=e262]:
                    - img [ref=e263]
              - generic [ref=e264] [cursor=pointer]:
                - generic [ref=e266]: /ben
                - generic [ref=e267]:
                  - link "Edit" [ref=e268]:
                    - /url: /poe-2/ben
                    - generic [ref=e269]: Edit
                  - button [ref=e270]:
                    - img [ref=e271]
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e274]: /bigducks
                - generic [ref=e275]:
                  - link "Edit" [ref=e276]:
                    - /url: /poe-2/bigducks
                    - generic [ref=e277]: Edit
                  - button [ref=e278]:
                    - img [ref=e279]
              - generic [ref=e280] [cursor=pointer]:
                - generic [ref=e282]: /blink-bug-test
                - generic [ref=e283]:
                  - link "Edit" [ref=e284]:
                    - /url: /poe-2/blink-bug-test
                    - generic [ref=e285]: Edit
                  - button [ref=e286]:
                    - img [ref=e287]
              - generic [ref=e288] [cursor=pointer]:
                - generic [ref=e290]: /bloodmage-builds
                - generic [ref=e291]:
                  - link "Edit" [ref=e292]:
                    - /url: /poe-2/bloodmage-builds
                    - generic [ref=e293]: Edit
                  - button [ref=e294]:
                    - img [ref=e295]
              - generic [ref=e296] [cursor=pointer]:
                - generic [ref=e298]: /blood-mage-starter-builds
                - generic [ref=e299]:
                  - link "Edit" [ref=e300]:
                    - /url: /poe-2/blood-mage-starter-builds
                    - generic [ref=e301]: Edit
                  - button [ref=e302]:
                    - img [ref=e303]
              - generic [ref=e304] [cursor=pointer]:
                - generic [ref=e306]: /build-planner
                - generic [ref=e307]:
                  - link "Edit" [ref=e308]:
                    - /url: /poe-2/build-planner
                    - generic [ref=e309]: Edit
                  - button [ref=e310]:
                    - img [ref=e311]
              - generic [ref=e312] [cursor=pointer]:
                - generic [ref=e314]: /builds
                - generic [ref=e315]:
                  - link "Edit" [ref=e316]:
                    - /url: /poe-2/builds
                    - generic [ref=e317]: Edit
                  - button [ref=e318]:
                    - img [ref=e319]
              - generic [ref=e320] [cursor=pointer]:
                - generic [ref=e322]: /builds/ra-builds-2
                - generic [ref=e323]:
                  - link "Edit" [ref=e324]:
                    - /url: /poe-2/builds/ra-builds-2
                    - generic [ref=e325]: Edit
                  - button [ref=e326]:
                    - img [ref=e327]
              - generic [ref=e328] [cursor=pointer]:
                - generic [ref=e330]: /campaign-guides
                - generic [ref=e331]:
                  - link "Edit" [ref=e332]:
                    - /url: /poe-2/campaign-guides
                    - generic [ref=e333]: Edit
                  - button [ref=e334]:
                    - img [ref=e335]
              - generic [ref=e336] [cursor=pointer]:
                - generic [ref=e338]: /chronomancer-builds
                - generic [ref=e339]:
                  - link "Edit" [ref=e340]:
                    - /url: /poe-2/chronomancer-builds
                    - generic [ref=e341]: Edit
                  - button [ref=e342]:
                    - img [ref=e343]
              - generic [ref=e344] [cursor=pointer]:
                - generic [ref=e346]: /chronomancer-starter-builds
                - generic [ref=e347]:
                  - link "Edit" [ref=e348]:
                    - /url: /poe-2/chronomancer-starter-builds
                    - generic [ref=e349]: Edit
                  - button [ref=e350]:
                    - img [ref=e351]
              - generic [ref=e352] [cursor=pointer]:
                - generic [ref=e354]: /classes
                - generic [ref=e355]:
                  - link "Edit" [ref=e356]:
                    - /url: /poe-2/classes
                    - generic [ref=e357]: Edit
                  - button [ref=e358]:
                    - img [ref=e359]
              - generic [ref=e360] [cursor=pointer]:
                - generic [ref=e362]: /community-builds
                - generic [ref=e363]:
                  - link "Edit" [ref=e364]:
                    - /url: /poe-2/community-builds
                    - generic [ref=e365]: Edit
                  - button [ref=e366]:
                    - img [ref=e367]
              - generic [ref=e368] [cursor=pointer]:
                - generic [ref=e370]: /community-tier-lists
                - generic [ref=e371]:
                  - link "Edit" [ref=e372]:
                    - /url: /poe-2/community-tier-lists
                    - generic [ref=e373]: Edit
                  - button [ref=e374]:
                    - img [ref=e375]
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e378]: /connerconverse
                - generic [ref=e379]:
                  - link "Edit" [ref=e380]:
                    - /url: /poe-2/connerconverse
                    - generic [ref=e381]: Edit
                  - button [ref=e382]:
                    - img [ref=e383]
              - generic [ref=e384] [cursor=pointer]:
                - generic [ref=e386]: /crafting
                - generic [ref=e387]:
                  - link "Edit" [ref=e388]:
                    - /url: /poe-2/crafting
                    - generic [ref=e389]: Edit
                  - button [ref=e390]:
                    - img [ref=e391]
              - generic [ref=e392] [cursor=pointer]:
                - generic [ref=e394]: /creator-builds
                - generic [ref=e395]:
                  - link "Edit" [ref=e396]:
                    - /url: /poe-2/creator-builds
                    - generic [ref=e397]: Edit
                  - button [ref=e398]:
                    - img [ref=e399]
              - generic [ref=e400] [cursor=pointer]:
                - generic [ref=e402]: /creators
                - generic [ref=e403]:
                  - link "Edit" [ref=e404]:
                    - /url: /poe-2/creators
                    - generic [ref=e405]: Edit
                  - button [ref=e406]:
                    - img [ref=e407]
              - generic [ref=e408] [cursor=pointer]:
                - generic [ref=e410]: /creator-starter-builds
                - generic [ref=e411]:
                  - link "Edit" [ref=e412]:
                    - /url: /poe-2/creator-starter-builds
                    - generic [ref=e413]: Edit
                  - button [ref=e414]:
                    - img [ref=e415]
              - generic [ref=e416] [cursor=pointer]:
                - generic [ref=e418]: /deadeye-builds
                - generic [ref=e419]:
                  - link "Edit" [ref=e420]:
                    - /url: /poe-2/deadeye-builds
                    - generic [ref=e421]: Edit
                  - button [ref=e422]:
                    - img [ref=e423]
              - generic [ref=e424] [cursor=pointer]:
                - generic [ref=e426]: /deadeye-starter-builds
                - generic [ref=e427]:
                  - link "Edit" [ref=e428]:
                    - /url: /poe-2/deadeye-starter-builds
                    - generic [ref=e429]: Edit
                  - button [ref=e430]:
                    - img [ref=e431]
              - generic [ref=e432] [cursor=pointer]:
                - generic [ref=e434]: /disciple-of-varashta-builds
                - generic [ref=e435]:
                  - link "Edit" [ref=e436]:
                    - /url: /poe-2/disciple-of-varashta-builds
                    - generic [ref=e437]: Edit
                  - button [ref=e438]:
                    - img [ref=e439]
              - generic [ref=e440] [cursor=pointer]:
                - generic [ref=e442]: /disciple-of-varashta-starter-builds
                - generic [ref=e443]:
                  - link "Edit" [ref=e444]:
                    - /url: /poe-2/disciple-of-varashta-starter-builds
                    - generic [ref=e445]: Edit
                  - button [ref=e446]:
                    - img [ref=e447]
              - generic [ref=e448] [cursor=pointer]:
                - generic [ref=e450]: /dreamcore
                - generic [ref=e451]:
                  - link "Edit" [ref=e452]:
                    - /url: /poe-2/dreamcore
                    - generic [ref=e453]: Edit
                  - button [ref=e454]:
                    - img [ref=e455]
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e458]: /druid-builds
                - generic [ref=e459]:
                  - link "Edit" [ref=e460]:
                    - /url: /poe-2/druid-builds
                    - generic [ref=e461]: Edit
                  - button [ref=e462]:
                    - img [ref=e463]
              - generic [ref=e464] [cursor=pointer]:
                - generic [ref=e466]: /druid-starter-builds
                - generic [ref=e467]:
                  - link "Edit" [ref=e468]:
                    - /url: /poe-2/druid-starter-builds
                    - generic [ref=e469]: Edit
                  - button [ref=e470]:
                    - img [ref=e471]
              - generic [ref=e472] [cursor=pointer]:
                - generic [ref=e474]: /dslily
                - generic [ref=e475]:
                  - link "Edit" [ref=e476]:
                    - /url: /poe-2/dslily
                    - generic [ref=e477]: Edit
                  - button [ref=e478]:
                    - img [ref=e479]
              - generic [ref=e480] [cursor=pointer]:
                - generic [ref=e482]: /dummy-discovery
                - generic [ref=e483]:
                  - link "Edit" [ref=e484]:
                    - /url: /poe-2/dummy-discovery
                    - generic [ref=e485]: Edit
                  - button [ref=e486]:
                    - img [ref=e487]
              - generic [ref=e488] [cursor=pointer]:
                - generic [ref=e490]: /dummy-tier-list
                - generic [ref=e491]:
                  - link "Edit" [ref=e492]:
                    - /url: /poe-2/dummy-tier-list
                    - generic [ref=e493]: Edit
                  - button [ref=e494]:
                    - img [ref=e495]
              - generic [ref=e496] [cursor=pointer]:
                - generic [ref=e498]: /empyrian
                - generic [ref=e499]:
                  - link "Edit" [ref=e500]:
                    - /url: /poe-2/empyrian
                    - generic [ref=e501]: Edit
                  - button [ref=e502]:
                    - img [ref=e503]
              - generic [ref=e504] [cursor=pointer]:
                - generic [ref=e506]: /endgame-guides
                - generic [ref=e507]:
                  - link "Edit" [ref=e508]:
                    - /url: /poe-2/endgame-guides
                    - generic [ref=e509]: Edit
                  - button [ref=e510]:
                    - img [ref=e511]
              - generic [ref=e512] [cursor=pointer]:
                - generic [ref=e514]: /fearlessdumb0
                - generic [ref=e515]:
                  - link "Edit" [ref=e516]:
                    - /url: /poe-2/fearlessdumb0
                    - generic [ref=e517]: Edit
                  - button [ref=e518]:
                    - img [ref=e519]
              - generic [ref=e520] [cursor=pointer]:
                - generic [ref=e522]: /fubgun
                - generic [ref=e523]:
                  - link "Edit" [ref=e524]:
                    - /url: /poe-2/fubgun
                    - generic [ref=e525]: Edit
                  - button [ref=e526]:
                    - img [ref=e527]
              - generic [ref=e528] [cursor=pointer]:
                - generic [ref=e530]: /gemling-legionnaire-builds
                - generic [ref=e531]:
                  - link "Edit" [ref=e532]:
                    - /url: /poe-2/gemling-legionnaire-builds
                    - generic [ref=e533]: Edit
                  - button [ref=e534]:
                    - img [ref=e535]
              - generic [ref=e536] [cursor=pointer]:
                - generic [ref=e538]: /gemling-legionnaire-starter-builds
                - generic [ref=e539]:
                  - link "Edit" [ref=e540]:
                    - /url: /poe-2/gemling-legionnaire-starter-builds
                    - generic [ref=e541]: Edit
                  - button [ref=e542]:
                    - img [ref=e543]
              - generic [ref=e544] [cursor=pointer]:
                - generic [ref=e546]: /goblintest
                - generic [ref=e547]:
                  - link "Edit" [ref=e548]:
                    - /url: /poe-2/goblintest
                    - generic [ref=e549]: Edit
                  - button [ref=e550]:
                    - img [ref=e551]
              - generic [ref=e552] [cursor=pointer]:
                - generic [ref=e554]: /guides
                - generic [ref=e555]:
                  - link "Edit" [ref=e556]:
                    - /url: /poe-2/guides
                    - generic [ref=e557]: Edit
                  - button [ref=e558]:
                    - img [ref=e559]
              - generic [ref=e560] [cursor=pointer]:
                - generic [ref=e562]: /home
                - generic [ref=e563]:
                  - link "Edit" [ref=e564]:
                    - /url: /poe-2/home
                    - generic [ref=e565]: Edit
                  - button [ref=e566]:
                    - img [ref=e567]
              - generic [ref=e568] [cursor=pointer]:
                - generic [ref=e570]: /huntress-builds
                - generic [ref=e571]:
                  - link "Edit" [ref=e572]:
                    - /url: /poe-2/huntress-builds
                    - generic [ref=e573]: Edit
                  - button [ref=e574]:
                    - img [ref=e575]
              - generic [ref=e576] [cursor=pointer]:
                - generic [ref=e578]: /huntress-starter-builds
                - generic [ref=e579]:
                  - link "Edit" [ref=e580]:
                    - /url: /poe-2/huntress-starter-builds
                    - generic [ref=e581]: Edit
                  - button [ref=e582]:
                    - img [ref=e583]
              - generic [ref=e584] [cursor=pointer]:
                - generic [ref=e586]: /infernalist-builds
                - generic [ref=e587]:
                  - link "Edit" [ref=e588]:
                    - /url: /poe-2/infernalist-builds
                    - generic [ref=e589]: Edit
                  - button [ref=e590]:
                    - img [ref=e591]
              - generic [ref=e592] [cursor=pointer]:
                - generic [ref=e594]: /infernalist-starter-builds
                - generic [ref=e595]:
                  - link "Edit" [ref=e596]:
                    - /url: /poe-2/infernalist-starter-builds
                    - generic [ref=e597]: Edit
                  - button [ref=e598]:
                    - img [ref=e599]
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e602]: /invoker-builds
                - generic [ref=e603]:
                  - link "Edit" [ref=e604]:
                    - /url: /poe-2/invoker-builds
                    - generic [ref=e605]: Edit
                  - button [ref=e606]:
                    - img [ref=e607]
              - generic [ref=e608] [cursor=pointer]:
                - generic [ref=e610]: /invoker-starter-builds
                - generic [ref=e611]:
                  - link "Edit" [ref=e612]:
                    - /url: /poe-2/invoker-starter-builds
                    - generic [ref=e613]: Edit
                  - button [ref=e614]:
                    - img [ref=e615]
              - generic [ref=e616] [cursor=pointer]:
                - generic [ref=e618]: /jungroan
                - generic [ref=e619]:
                  - link "Edit" [ref=e620]:
                    - /url: /poe-2/jungroan
                    - generic [ref=e621]: Edit
                  - button [ref=e622]:
                    - img [ref=e623]
              - generic [ref=e624] [cursor=pointer]:
                - generic [ref=e626]: /kripp
                - generic [ref=e627]:
                  - link "Edit" [ref=e628]:
                    - /url: /poe-2/kripp
                    - generic [ref=e629]: Edit
                  - button [ref=e630]:
                    - img [ref=e631]
              - generic [ref=e632] [cursor=pointer]:
                - generic [ref=e634]: /lich-builds
                - generic [ref=e635]:
                  - link "Edit" [ref=e636]:
                    - /url: /poe-2/lich-builds
                    - generic [ref=e637]: Edit
                  - button [ref=e638]:
                    - img [ref=e639]
              - generic [ref=e640] [cursor=pointer]:
                - generic [ref=e642]: /lich-starter-builds
                - generic [ref=e643]:
                  - link "Edit" [ref=e644]:
                    - /url: /poe-2/lich-starter-builds
                    - generic [ref=e645]: Edit
                  - button [ref=e646]:
                    - img [ref=e647]
              - generic [ref=e648] [cursor=pointer]:
                - generic [ref=e650]: /lolcohol
                - generic [ref=e651]:
                  - link "Edit" [ref=e652]:
                    - /url: /poe-2/lolcohol
                    - generic [ref=e653]: Edit
                  - button [ref=e654]:
                    - img [ref=e655]
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e658]: /martial-artist-builds
                - generic [ref=e659]:
                  - link "Edit" [ref=e660]:
                    - /url: /poe-2/martial-artist-builds
                    - generic [ref=e661]: Edit
                  - button [ref=e662]:
                    - img [ref=e663]
              - generic [ref=e664] [cursor=pointer]:
                - generic [ref=e666]: /martial-artist-starter-builds
                - generic [ref=e667]:
                  - link "Edit" [ref=e668]:
                    - /url: /poe-2/martial-artist-starter-builds
                    - generic [ref=e669]: Edit
                  - button [ref=e670]:
                    - img [ref=e671]
              - generic [ref=e672] [cursor=pointer]:
                - generic [ref=e674]: /mattjestic
                - generic [ref=e675]:
                  - link "Edit" [ref=e676]:
                    - /url: /poe-2/mattjestic
                    - generic [ref=e677]: Edit
                  - button [ref=e678]:
                    - img [ref=e679]
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e682]: /mechanic-guides
                - generic [ref=e683]:
                  - link "Edit" [ref=e684]:
                    - /url: /poe-2/mechanic-guides
                    - generic [ref=e685]: Edit
                  - button [ref=e686]:
                    - img [ref=e687]
              - generic [ref=e688] [cursor=pointer]:
                - generic [ref=e690]: /mercenary-builds
                - generic [ref=e691]:
                  - link "Edit" [ref=e692]:
                    - /url: /poe-2/mercenary-builds
                    - generic [ref=e693]: Edit
                  - button [ref=e694]:
                    - img [ref=e695]
              - generic [ref=e696] [cursor=pointer]:
                - generic [ref=e698]: /mercenary-starter-builds
                - generic [ref=e699]:
                  - link "Edit" [ref=e700]:
                    - /url: /poe-2/mercenary-starter-builds
                    - generic [ref=e701]: Edit
                  - button [ref=e702]:
                    - img [ref=e703]
              - generic [ref=e704] [cursor=pointer]:
                - generic [ref=e706]: /mirror-tier
                - generic [ref=e707]:
                  - link "Edit" [ref=e708]:
                    - /url: /poe-2/mirror-tier
                    - generic [ref=e709]: Edit
                  - button [ref=e710]:
                    - img [ref=e711]
              - generic [ref=e712] [cursor=pointer]:
                - generic [ref=e714]: /monk-builds
                - generic [ref=e715]:
                  - link "Edit" [ref=e716]:
                    - /url: /poe-2/monk-builds
                    - generic [ref=e717]: Edit
                  - button [ref=e718]:
                    - img [ref=e719]
              - generic [ref=e720] [cursor=pointer]:
                - generic [ref=e722]: /monk-starter-builds
                - generic [ref=e723]:
                  - link "Edit" [ref=e724]:
                    - /url: /poe-2/monk-starter-builds
                    - generic [ref=e725]: Edit
                  - button [ref=e726]:
                    - img [ref=e727]
              - generic [ref=e728] [cursor=pointer]:
                - generic [ref=e730]: /oracle-builds
                - generic [ref=e731]:
                  - link "Edit" [ref=e732]:
                    - /url: /poe-2/oracle-builds
                    - generic [ref=e733]: Edit
                  - button [ref=e734]:
                    - img [ref=e735]
              - generic [ref=e736] [cursor=pointer]:
                - generic [ref=e738]: /oracle-starter-builds
                - generic [ref=e739]:
                  - link "Edit" [ref=e740]:
                    - /url: /poe-2/oracle-starter-builds
                    - generic [ref=e741]: Edit
                  - button [ref=e742]:
                    - img [ref=e743]
              - generic [ref=e744] [cursor=pointer]:
                - generic [ref=e746]: /pathfinder-builds
                - generic [ref=e747]:
                  - link "Edit" [ref=e748]:
                    - /url: /poe-2/pathfinder-builds
                    - generic [ref=e749]: Edit
                  - button [ref=e750]:
                    - img [ref=e751]
              - generic [ref=e752] [cursor=pointer]:
                - generic [ref=e754]: /pathfinder-starter-builds
                - generic [ref=e755]:
                  - link "Edit" [ref=e756]:
                    - /url: /poe-2/pathfinder-starter-builds
                    - generic [ref=e757]: Edit
                  - button [ref=e758]:
                    - img [ref=e759]
              - generic [ref=e760] [cursor=pointer]:
                - generic [ref=e762]: /podcast-episode-test
                - generic [ref=e763]:
                  - link "Edit" [ref=e764]:
                    - /url: /poe-2/podcast-episode-test
                    - generic [ref=e765]: Edit
                  - button [ref=e766]:
                    - img [ref=e767]
              - generic [ref=e768] [cursor=pointer]:
                - generic [ref=e770]: /podcast-test-2
                - generic [ref=e771]:
                  - link "Edit" [ref=e772]:
                    - /url: /poe-2/podcast-test-2
                    - generic [ref=e773]: Edit
                  - button [ref=e774]:
                    - img [ref=e775]
              - generic [ref=e776] [cursor=pointer]:
                - generic [ref=e778]: /podcast-test-3
                - generic [ref=e779]:
                  - link "Edit" [ref=e780]:
                    - /url: /poe-2/podcast-test-3
                    - generic [ref=e781]: Edit
                  - button [ref=e782]:
                    - img [ref=e783]
              - generic [ref=e784] [cursor=pointer]:
                - generic [ref=e786]: /podcast-test-4
                - generic [ref=e787]:
                  - link "Edit" [ref=e788]:
                    - /url: /poe-2/podcast-test-4
                    - generic [ref=e789]: Edit
                  - button [ref=e790]:
                    - img [ref=e791]
              - generic [ref=e792] [cursor=pointer]:
                - generic [ref=e794]: /pod-of-exile-podcast
                - generic [ref=e795]:
                  - link "Edit" [ref=e796]:
                    - /url: /poe-2/pod-of-exile-podcast
                    - generic [ref=e797]: Edit
                  - button [ref=e798]:
                    - img [ref=e799]
              - generic [ref=e800] [cursor=pointer]:
                - generic [ref=e802]: /qa-check-static-data-not-delete
                - generic [ref=e803]:
                  - link "Edit" [ref=e804]:
                    - /url: /poe-2/qa-check-static-data-not-delete
                    - generic [ref=e805]: Edit
                  - button [ref=e806]:
                    - img [ref=e807]
              - generic [ref=e808] [cursor=pointer]:
                - generic [ref=e810]: /qa-not-delete-st-page
                - generic [ref=e811]:
                  - link "Edit" [ref=e812]:
                    - /url: /poe-2/qa-not-delete-st-page
                    - generic [ref=e813]: Edit
                  - button [ref=e814]:
                    - img [ref=e815]
              - generic [ref=e816] [cursor=pointer]:
                - generic [ref=e818]: /qa-test-poe2-el
                - generic [ref=e819]:
                  - link "Edit" [ref=e820]:
                    - /url: /poe-2/qa-test-poe2-el
                    - generic [ref=e821]: Edit
                  - button [ref=e822]:
                    - img [ref=e823]
              - generic [ref=e824] [cursor=pointer]:
                - generic [ref=e826]: /ranger-builds
                - generic [ref=e827]:
                  - link "Edit" [ref=e828]:
                    - /url: /poe-2/ranger-builds
                    - generic [ref=e829]: Edit
                  - button [ref=e830]:
                    - img [ref=e831]
              - generic [ref=e832] [cursor=pointer]:
                - generic [ref=e834]: /ranger-starter-builds
                - generic [ref=e835]:
                  - link "Edit" [ref=e836]:
                    - /url: /poe-2/ranger-starter-builds
                    - generic [ref=e837]: Edit
                  - button [ref=e838]:
                    - img [ref=e839]
              - generic [ref=e840] [cursor=pointer]:
                - generic [ref=e842]: /ritualist-builds
                - generic [ref=e843]:
                  - link "Edit" [ref=e844]:
                    - /url: /poe-2/ritualist-builds
                    - generic [ref=e845]: Edit
                  - button [ref=e846]:
                    - img [ref=e847]
              - generic [ref=e848] [cursor=pointer]:
                - generic [ref=e850]: /ritualist-starter-builds
                - generic [ref=e851]:
                  - link "Edit" [ref=e852]:
                    - /url: /poe-2/ritualist-starter-builds
                    - generic [ref=e853]: Edit
                  - button [ref=e854]:
                    - img [ref=e855]
              - generic [ref=e856] [cursor=pointer]:
                - generic [ref=e858]: /rob2628
                - generic [ref=e859]:
                  - link "Edit" [ref=e860]:
                    - /url: /poe-2/rob2628
                    - generic [ref=e861]: Edit
                  - button [ref=e862]:
                    - img [ref=e863]
              - generic [ref=e864] [cursor=pointer]:
                - generic [ref=e866]: /ronarray
                - generic [ref=e867]:
                  - link "Edit" [ref=e868]:
                    - /url: /poe-2/ronarray
                    - generic [ref=e869]: Edit
                  - button [ref=e870]:
                    - img [ref=e871]
              - generic [ref=e872] [cursor=pointer]:
                - generic [ref=e874]: /ruetoo
                - generic [ref=e875]:
                  - link "Edit" [ref=e876]:
                    - /url: /poe-2/ruetoo
                    - generic [ref=e877]: Edit
                  - button [ref=e878]:
                    - img [ref=e879]
              - generic [ref=e880] [cursor=pointer]:
                - generic [ref=e882]: /shakcentral
                - generic [ref=e883]:
                  - link "Edit" [ref=e884]:
                    - /url: /poe-2/shakcentral
                    - generic [ref=e885]: Edit
                  - button [ref=e886]:
                    - img [ref=e887]
              - generic [ref=e888] [cursor=pointer]:
                - generic [ref=e890]: /shaman-builds
                - generic [ref=e891]:
                  - link "Edit" [ref=e892]:
                    - /url: /poe-2/shaman-builds
                    - generic [ref=e893]: Edit
                  - button [ref=e894]:
                    - img [ref=e895]
              - generic [ref=e896] [cursor=pointer]:
                - generic [ref=e898]: /shaman-starter-builds
                - generic [ref=e899]:
                  - link "Edit" [ref=e900]:
                    - /url: /poe-2/shaman-starter-builds
                    - generic [ref=e901]: Edit
                  - button [ref=e902]:
                    - img [ref=e903]
              - generic [ref=e904] [cursor=pointer]:
                - generic [ref=e906]: /sirgog
                - generic [ref=e907]:
                  - link "Edit" [ref=e908]:
                    - /url: /poe-2/sirgog
                    - generic [ref=e909]: Edit
                  - button [ref=e910]:
                    - img [ref=e911]
              - generic [ref=e912] [cursor=pointer]:
                - generic [ref=e914]: /smith-of-kitava-builds
                - generic [ref=e915]:
                  - link "Edit" [ref=e916]:
                    - /url: /poe-2/smith-of-kitava-builds
                    - generic [ref=e917]: Edit
                  - button [ref=e918]:
                    - img [ref=e919]
              - generic [ref=e920] [cursor=pointer]:
                - generic [ref=e922]: /smith-of-kitava-starter-builds
                - generic [ref=e923]:
                  - link "Edit" [ref=e924]:
                    - /url: /poe-2/smith-of-kitava-starter-builds
                    - generic [ref=e925]: Edit
                  - button [ref=e926]:
                    - img [ref=e927]
              - generic [ref=e928] [cursor=pointer]:
                - generic [ref=e930]: /snap
                - generic [ref=e931]:
                  - link "Edit" [ref=e932]:
                    - /url: /poe-2/snap
                    - generic [ref=e933]: Edit
                  - button [ref=e934]:
                    - img [ref=e935]
              - generic [ref=e936] [cursor=pointer]:
                - generic [ref=e938]: /sorceress-builds
                - generic [ref=e939]:
                  - link "Edit" [ref=e940]:
                    - /url: /poe-2/sorceress-builds
                    - generic [ref=e941]: Edit
                  - button [ref=e942]:
                    - img [ref=e943]
              - generic [ref=e944] [cursor=pointer]:
                - generic [ref=e946]: /sorceress-starter-builds
                - generic [ref=e947]:
                  - link "Edit" [ref=e948]:
                    - /url: /poe-2/sorceress-starter-builds
                    - generic [ref=e949]: Edit
                  - button [ref=e950]:
                    - img [ref=e951]
              - generic [ref=e952] [cursor=pointer]:
                - generic [ref=e954]: /spirit-walker-builds
                - generic [ref=e955]:
                  - link "Edit" [ref=e956]:
                    - /url: /poe-2/spirit-walker-builds
                    - generic [ref=e957]: Edit
                  - button [ref=e958]:
                    - img [ref=e959]
              - generic [ref=e960] [cursor=pointer]:
                - generic [ref=e962]: /spirit-walker-starter-builds
                - generic [ref=e963]:
                  - link "Edit" [ref=e964]:
                    - /url: /poe-2/spirit-walker-starter-builds
                    - generic [ref=e965]: Edit
                  - button [ref=e966]:
                    - img [ref=e967]
              - generic [ref=e968] [cursor=pointer]:
                - generic [ref=e970]: /ssf-builds
                - generic [ref=e971]:
                  - link "Edit" [ref=e972]:
                    - /url: /poe-2/ssf-builds
                    - generic [ref=e973]: Edit
                  - button [ref=e974]:
                    - img [ref=e975]
              - generic [ref=e976] [cursor=pointer]:
                - generic [ref=e978]: /starter-builds
                - generic [ref=e979]:
                  - link "Edit" [ref=e980]:
                    - /url: /poe-2/starter-builds
                    - generic [ref=e981]: Edit
                  - button [ref=e982]:
                    - img [ref=e983]
              - generic [ref=e984] [cursor=pointer]:
                - generic [ref=e986]: /still-sane-podcast
                - generic [ref=e987]:
                  - link "Edit" [ref=e988]:
                    - /url: /poe-2/still-sane-podcast
                    - generic [ref=e989]: Edit
                  - button [ref=e990]:
                    - img [ref=e991]
              - generic [ref=e992] [cursor=pointer]:
                - generic [ref=e994]: /still-sane-podcast-episode-1
                - generic [ref=e995]:
                  - link "Edit" [ref=e996]:
                    - /url: /poe-2/still-sane-podcast-episode-1
                    - generic [ref=e997]: Edit
                  - button [ref=e998]:
                    - img [ref=e999]
              - generic [ref=e1000] [cursor=pointer]:
                - generic [ref=e1002]: /still-sane-podcast-episode-2
                - generic [ref=e1003]:
                  - link "Edit" [ref=e1004]:
                    - /url: /poe-2/still-sane-podcast-episode-2
                    - generic [ref=e1005]: Edit
                  - button [ref=e1006]:
                    - img [ref=e1007]
              - generic [ref=e1008] [cursor=pointer]:
                - generic [ref=e1010]: /still-sane-podcast-episode-3
                - generic [ref=e1011]:
                  - link "Edit" [ref=e1012]:
                    - /url: /poe-2/still-sane-podcast-episode-3
                    - generic [ref=e1013]: Edit
                  - button [ref=e1014]:
                    - img [ref=e1015]
              - generic [ref=e1016] [cursor=pointer]:
                - generic [ref=e1018]: /still-sane-podcast-episode-4
                - generic [ref=e1019]:
                  - link "Edit" [ref=e1020]:
                    - /url: /poe-2/still-sane-podcast-episode-4
                    - generic [ref=e1021]: Edit
                  - button [ref=e1022]:
                    - img [ref=e1023]
              - generic [ref=e1024] [cursor=pointer]:
                - generic [ref=e1026]: /still-sane-podcast-episode-5
                - generic [ref=e1027]:
                  - link "Edit" [ref=e1028]:
                    - /url: /poe-2/still-sane-podcast-episode-5
                    - generic [ref=e1029]: Edit
                  - button [ref=e1030]:
                    - img [ref=e1031]
              - generic [ref=e1032] [cursor=pointer]:
                - generic [ref=e1034]: /still-sane-podcast-episode-6
                - generic [ref=e1035]:
                  - link "Edit" [ref=e1036]:
                    - /url: /poe-2/still-sane-podcast-episode-6
                    - generic [ref=e1037]: Edit
                  - button [ref=e1038]:
                    - img [ref=e1039]
              - generic [ref=e1040] [cursor=pointer]:
                - generic [ref=e1042]: /still-sane-podcast-episode-7
                - generic [ref=e1043]:
                  - link "Edit" [ref=e1044]:
                    - /url: /poe-2/still-sane-podcast-episode-7
                    - generic [ref=e1045]: Edit
                  - button [ref=e1046]:
                    - img [ref=e1047]
              - generic [ref=e1048] [cursor=pointer]:
                - generic [ref=e1050]: /still-sane-podcast-hub
                - generic [ref=e1051]:
                  - link "Edit" [ref=e1052]:
                    - /url: /poe-2/still-sane-podcast-hub
                    - generic [ref=e1053]: Edit
                  - button [ref=e1054]:
                    - img [ref=e1055]
              - generic [ref=e1056] [cursor=pointer]:
                - generic [ref=e1058]: /stormweaver-builds
                - generic [ref=e1059]:
                  - link "Edit" [ref=e1060]:
                    - /url: /poe-2/stormweaver-builds
                    - generic [ref=e1061]: Edit
                  - button [ref=e1062]:
                    - img [ref=e1063]
              - generic [ref=e1064] [cursor=pointer]:
                - generic [ref=e1066]: /stormweaver-starter-builds
                - generic [ref=e1067]:
                  - link "Edit" [ref=e1068]:
                    - /url: /poe-2/stormweaver-starter-builds
                    - generic [ref=e1069]: Edit
                  - button [ref=e1070]:
                    - img [ref=e1071]
              - generic [ref=e1072] [cursor=pointer]:
                - generic [ref=e1074]: /tactician-builds
                - generic [ref=e1075]:
                  - link "Edit" [ref=e1076]:
                    - /url: /poe-2/tactician-builds
                    - generic [ref=e1077]: Edit
                  - button [ref=e1078]:
                    - img [ref=e1079]
              - generic [ref=e1080] [cursor=pointer]:
                - generic [ref=e1082]: /tactician-starter-builds
                - generic [ref=e1083]:
                  - link "Edit" [ref=e1084]:
                    - /url: /poe-2/tactician-starter-builds
                    - generic [ref=e1085]: Edit
                  - button [ref=e1086]:
                    - img [ref=e1087]
              - generic [ref=e1088] [cursor=pointer]:
                - generic [ref=e1090]: /talkative-tri
                - generic [ref=e1091]:
                  - link "Edit" [ref=e1092]:
                    - /url: /poe-2/talkative-tri
                    - generic [ref=e1093]: Edit
                  - button [ref=e1094]:
                    - img [ref=e1095]
              - generic [ref=e1096] [cursor=pointer]:
                - generic [ref=e1098]: /test1
                - generic [ref=e1099]:
                  - link "Edit" [ref=e1100]:
                    - /url: /poe-2/test1
                    - generic [ref=e1101]: Edit
                  - button [ref=e1102]:
                    - img [ref=e1103]
              - generic [ref=e1104] [cursor=pointer]:
                - generic [ref=e1106]: /test13
                - generic [ref=e1107]:
                  - link "Edit" [ref=e1108]:
                    - /url: /poe-2/test13
                    - generic [ref=e1109]: Edit
                  - button [ref=e1110]:
                    - img [ref=e1111]
              - generic [ref=e1112] [cursor=pointer]:
                - generic [ref=e1114]: /test-doc
                - generic [ref=e1115]:
                  - link "Edit" [ref=e1116]:
                    - /url: /poe-2/test-doc
                    - generic [ref=e1117]: Edit
                  - button [ref=e1118]:
                    - img [ref=e1119]
              - generic [ref=e1120] [cursor=pointer]:
                - generic [ref=e1122]: /test-featured-builds-tier-list
                - generic [ref=e1123]:
                  - link "Edit" [ref=e1124]:
                    - /url: /poe-2/test-featured-builds-tier-list
                    - generic [ref=e1125]: Edit
                  - button [ref=e1126]:
                    - img [ref=e1127]
              - generic [ref=e1128] [cursor=pointer]:
                - generic [ref=e1130]: /test-st-poe
                - generic [ref=e1131]:
                  - link "Edit" [ref=e1132]:
                    - /url: /poe-2/test-st-poe
                    - generic [ref=e1133]: Edit
                  - button [ref=e1134]:
                    - img [ref=e1135]
              - generic [ref=e1136] [cursor=pointer]:
                - generic [ref=e1138]: /the-pathalytics-podcast
                - generic [ref=e1139]:
                  - link "Edit" [ref=e1140]:
                    - /url: /poe-2/the-pathalytics-podcast
                    - generic [ref=e1141]: Edit
                  - button [ref=e1142]:
                    - img [ref=e1143]
              - generic [ref=e1144] [cursor=pointer]:
                - generic [ref=e1146]: /tier-list
                - generic [ref=e1147]:
                  - link "Edit" [ref=e1148]:
                    - /url: /poe-2/tier-list
                    - generic [ref=e1149]: Edit
                  - button [ref=e1150]:
                    - img [ref=e1151]
              - generic [ref=e1152] [cursor=pointer]:
                - generic [ref=e1154]: /tier-list-test
                - generic [ref=e1155]:
                  - link "Edit" [ref=e1156]:
                    - /url: /poe-2/tier-list-test
                    - generic [ref=e1157]: Edit
                  - button [ref=e1158]:
                    - img [ref=e1159]
              - generic [ref=e1160] [cursor=pointer]:
                - generic [ref=e1162]: /titan-builds
                - generic [ref=e1163]:
                  - link "Edit" [ref=e1164]:
                    - /url: /poe-2/titan-builds
                    - generic [ref=e1165]: Edit
                  - button [ref=e1166]:
                    - img [ref=e1167]
              - generic [ref=e1168] [cursor=pointer]:
                - generic [ref=e1170]: /titan-starter-builds
                - generic [ref=e1171]:
                  - link "Edit" [ref=e1172]:
                    - /url: /poe-2/titan-starter-builds
                    - generic [ref=e1173]: Edit
                  - button [ref=e1174]:
                    - img [ref=e1175]
              - generic [ref=e1176] [cursor=pointer]:
                - generic [ref=e1178]: /unique-amulets
                - generic [ref=e1179]:
                  - link "Edit" [ref=e1180]:
                    - /url: /poe-2/unique-amulets
                    - generic [ref=e1181]: Edit
                  - button [ref=e1182]:
                    - img [ref=e1183]
              - generic [ref=e1184] [cursor=pointer]:
                - generic [ref=e1186]: /unique-armor
                - generic [ref=e1187]:
                  - link "Edit" [ref=e1188]:
                    - /url: /poe-2/unique-armor
                    - generic [ref=e1189]: Edit
                  - button [ref=e1190]:
                    - img [ref=e1191]
              - generic [ref=e1192] [cursor=pointer]:
                - generic [ref=e1194]: /unique-belts
                - generic [ref=e1195]:
                  - link "Edit" [ref=e1196]:
                    - /url: /poe-2/unique-belts
                    - generic [ref=e1197]: Edit
                  - button [ref=e1198]:
                    - img [ref=e1199]
              - generic [ref=e1200] [cursor=pointer]:
                - generic [ref=e1202]: /unique-body-armor
                - generic [ref=e1203]:
                  - link "Edit" [ref=e1204]:
                    - /url: /poe-2/unique-body-armor
                    - generic [ref=e1205]: Edit
                  - button [ref=e1206]:
                    - img [ref=e1207]
              - generic [ref=e1208] [cursor=pointer]:
                - generic [ref=e1210]: /unique-boots
                - generic [ref=e1211]:
                  - link "Edit" [ref=e1212]:
                    - /url: /poe-2/unique-boots
                    - generic [ref=e1213]: Edit
                  - button [ref=e1214]:
                    - img [ref=e1215]
              - generic [ref=e1216] [cursor=pointer]:
                - generic [ref=e1218]: /unique-bows
                - generic [ref=e1219]:
                  - link "Edit" [ref=e1220]:
                    - /url: /poe-2/unique-bows
                    - generic [ref=e1221]: Edit
                  - button [ref=e1222]:
                    - img [ref=e1223]
              - generic [ref=e1224] [cursor=pointer]:
                - generic [ref=e1226]: /unique-crossbows
                - generic [ref=e1227]:
                  - link "Edit" [ref=e1228]:
                    - /url: /poe-2/unique-crossbows
                    - generic [ref=e1229]: Edit
                  - button [ref=e1230]:
                    - img [ref=e1231]
              - generic [ref=e1232] [cursor=pointer]:
                - generic [ref=e1234]: /unique-flasks-and-charms
                - generic [ref=e1235]:
                  - link "Edit" [ref=e1236]:
                    - /url: /poe-2/unique-flasks-and-charms
                    - generic [ref=e1237]: Edit
                  - button [ref=e1238]:
                    - img [ref=e1239]
              - generic [ref=e1240] [cursor=pointer]:
                - generic [ref=e1242]: /unique-focuses
                - generic [ref=e1243]:
                  - link "Edit" [ref=e1244]:
                    - /url: /poe-2/unique-focuses
                    - generic [ref=e1245]: Edit
                  - button [ref=e1246]:
                    - img [ref=e1247]
              - generic [ref=e1248] [cursor=pointer]:
                - generic [ref=e1250]: /unique-gloves
                - generic [ref=e1251]:
                  - link "Edit" [ref=e1252]:
                    - /url: /poe-2/unique-gloves
                    - generic [ref=e1253]: Edit
                  - button [ref=e1254]:
                    - img [ref=e1255]
              - generic [ref=e1256] [cursor=pointer]:
                - generic [ref=e1258]: /unique-helmets
                - generic [ref=e1259]:
                  - link "Edit" [ref=e1260]:
                    - /url: /poe-2/unique-helmets
                    - generic [ref=e1261]: Edit
                  - button [ref=e1262]:
                    - img [ref=e1263]
              - generic [ref=e1264] [cursor=pointer]:
                - generic [ref=e1266]: /unique-items
                - generic [ref=e1267]:
                  - link "Edit" [ref=e1268]:
                    - /url: /poe-2/unique-items
                    - generic [ref=e1269]: Edit
                  - button [ref=e1270]:
                    - img [ref=e1271]
              - generic [ref=e1272] [cursor=pointer]:
                - generic [ref=e1274]: /unique-jewels
                - generic [ref=e1275]:
                  - link "Edit" [ref=e1276]:
                    - /url: /poe-2/unique-jewels
                    - generic [ref=e1277]: Edit
                  - button [ref=e1278]:
                    - img [ref=e1279]
              - generic [ref=e1280] [cursor=pointer]:
                - generic [ref=e1282]: /unique-one-handed-maces
                - generic [ref=e1283]:
                  - link "Edit" [ref=e1284]:
                    - /url: /poe-2/unique-one-handed-maces
                    - generic [ref=e1285]: Edit
                  - button [ref=e1286]:
                    - img [ref=e1287]
              - generic [ref=e1288] [cursor=pointer]:
                - generic [ref=e1290]: /unique-quarterstaves
                - generic [ref=e1291]:
                  - link "Edit" [ref=e1292]:
                    - /url: /poe-2/unique-quarterstaves
                    - generic [ref=e1293]: Edit
                  - button [ref=e1294]:
                    - img [ref=e1295]
              - generic [ref=e1296] [cursor=pointer]:
                - generic [ref=e1298]: /unique-quivers
                - generic [ref=e1299]:
                  - link "Edit" [ref=e1300]:
                    - /url: /poe-2/unique-quivers
                    - generic [ref=e1301]: Edit
                  - button [ref=e1302]:
                    - img [ref=e1303]
              - generic [ref=e1304] [cursor=pointer]:
                - generic [ref=e1306]: /unique-rings
                - generic [ref=e1307]:
                  - link "Edit" [ref=e1308]:
                    - /url: /poe-2/unique-rings
                    - generic [ref=e1309]: Edit
                  - button [ref=e1310]:
                    - img [ref=e1311]
              - generic [ref=e1312] [cursor=pointer]:
                - generic [ref=e1314]: /unique-sceptres
                - generic [ref=e1315]:
                  - link "Edit" [ref=e1316]:
                    - /url: /poe-2/unique-sceptres
                    - generic [ref=e1317]: Edit
                  - button [ref=e1318]:
                    - img [ref=e1319]
              - generic [ref=e1320] [cursor=pointer]:
                - generic [ref=e1322]: /unique-shields
                - generic [ref=e1323]:
                  - link "Edit" [ref=e1324]:
                    - /url: /poe-2/unique-shields
                    - generic [ref=e1325]: Edit
                  - button [ref=e1326]:
                    - img [ref=e1327]
              - generic [ref=e1328] [cursor=pointer]:
                - generic [ref=e1330]: /unique-spears
                - generic [ref=e1331]:
                  - link "Edit" [ref=e1332]:
                    - /url: /poe-2/unique-spears
                    - generic [ref=e1333]: Edit
                  - button [ref=e1334]:
                    - img [ref=e1335]
              - generic [ref=e1336] [cursor=pointer]:
                - generic [ref=e1338]: /unique-staves
                - generic [ref=e1339]:
                  - link "Edit" [ref=e1340]:
                    - /url: /poe-2/unique-staves
                    - generic [ref=e1341]: Edit
                  - button [ref=e1342]:
                    - img [ref=e1343]
              - generic [ref=e1344] [cursor=pointer]:
                - generic [ref=e1346]: /unique-talismans
                - generic [ref=e1347]:
                  - link "Edit" [ref=e1348]:
                    - /url: /poe-2/unique-talismans
                    - generic [ref=e1349]: Edit
                  - button [ref=e1350]:
                    - img [ref=e1351]
              - generic [ref=e1352] [cursor=pointer]:
                - generic [ref=e1354]: /unique-two-handed-maces
                - generic [ref=e1355]:
                  - link "Edit" [ref=e1356]:
                    - /url: /poe-2/unique-two-handed-maces
                    - generic [ref=e1357]: Edit
                  - button [ref=e1358]:
                    - img [ref=e1359]
              - generic [ref=e1360] [cursor=pointer]:
                - generic [ref=e1362]: /unique-wands
                - generic [ref=e1363]:
                  - link "Edit" [ref=e1364]:
                    - /url: /poe-2/unique-wands
                    - generic [ref=e1365]: Edit
                  - button [ref=e1366]:
                    - img [ref=e1367]
              - generic [ref=e1368] [cursor=pointer]:
                - generic [ref=e1370]: /unique-weapons
                - generic [ref=e1371]:
                  - link "Edit" [ref=e1372]:
                    - /url: /poe-2/unique-weapons
                    - generic [ref=e1373]: Edit
                  - button [ref=e1374]:
                    - img [ref=e1375]
              - generic [ref=e1376] [cursor=pointer]:
                - generic [ref=e1378]: /warbringer-builds
                - generic [ref=e1379]:
                  - link "Edit" [ref=e1380]:
                    - /url: /poe-2/warbringer-builds
                    - generic [ref=e1381]: Edit
                  - button [ref=e1382]:
                    - img [ref=e1383]
              - generic [ref=e1384] [cursor=pointer]:
                - generic [ref=e1386]: /warbringer-starter-builds
                - generic [ref=e1387]:
                  - link "Edit" [ref=e1388]:
                    - /url: /poe-2/warbringer-starter-builds
                    - generic [ref=e1389]: Edit
                  - button [ref=e1390]:
                    - img [ref=e1391]
              - generic [ref=e1392] [cursor=pointer]:
                - generic [ref=e1394]: /warrior-builds
                - generic [ref=e1395]:
                  - link "Edit" [ref=e1396]:
                    - /url: /poe-2/warrior-builds
                    - generic [ref=e1397]: Edit
                  - button [ref=e1398]:
                    - img [ref=e1399]
              - generic [ref=e1400] [cursor=pointer]:
                - generic [ref=e1402]: /warrior-starter-builds
                - generic [ref=e1403]:
                  - link "Edit" [ref=e1404]:
                    - /url: /poe-2/warrior-starter-builds
                    - generic [ref=e1405]: Edit
                  - button [ref=e1406]:
                    - img [ref=e1407]
              - generic [ref=e1408] [cursor=pointer]:
                - generic [ref=e1410]: /witch-builds
                - generic [ref=e1411]:
                  - link "Edit" [ref=e1412]:
                    - /url: /poe-2/witch-builds
                    - generic [ref=e1413]: Edit
                  - button [ref=e1414]:
                    - img [ref=e1415]
              - generic [ref=e1416] [cursor=pointer]:
                - generic [ref=e1418]: /witch-hunter-builds
                - generic [ref=e1419]:
                  - link "Edit" [ref=e1420]:
                    - /url: /poe-2/witch-hunter-builds
                    - generic [ref=e1421]: Edit
                  - button [ref=e1422]:
                    - img [ref=e1423]
              - generic [ref=e1424] [cursor=pointer]:
                - generic [ref=e1426]: /witch-hunter-starter-builds
                - generic [ref=e1427]:
                  - link "Edit" [ref=e1428]:
                    - /url: /poe-2/witch-hunter-starter-builds
                    - generic [ref=e1429]: Edit
                  - button [ref=e1430]:
                    - img [ref=e1431]
              - generic [ref=e1432] [cursor=pointer]:
                - generic [ref=e1434]: /witch-starter-builds
                - generic [ref=e1435]:
                  - link "Edit" [ref=e1436]:
                    - /url: /poe-2/witch-starter-builds
                    - generic [ref=e1437]: Edit
                  - button [ref=e1438]:
                    - img [ref=e1439]
              - generic [ref=e1440] [cursor=pointer]:
                - generic [ref=e1442]: /z-qa-test-poe-rtv2-toc-1
                - generic [ref=e1443]:
                  - link "Edit" [ref=e1444]:
                    - /url: /poe-2/z-qa-test-poe-rtv2-toc-1
                    - generic [ref=e1445]: Edit
                  - button [ref=e1446]:
                    - img [ref=e1447]
              - generic [ref=e1448] [cursor=pointer]:
                - generic [ref=e1450]: /z-qa-test-prod-permission-mapping-poe
                - generic [ref=e1451]:
                  - link "Edit" [ref=e1452]:
                    - /url: /poe-2/z-qa-test-prod-permission-mapping-poe
                    - generic [ref=e1453]: Edit
                  - button [ref=e1454]:
                    - img [ref=e1455]
              - generic [ref=e1456] [cursor=pointer]:
                - generic [ref=e1458]: /z-qa-test-prod-poe2-doc-discovery-andrey
                - generic [ref=e1459]:
                  - link "Edit" [ref=e1460]:
                    - /url: /poe-2/z-qa-test-prod-poe2-doc-discovery-andrey
                    - generic [ref=e1461]: Edit
                  - button [ref=e1462]:
                    - img [ref=e1463]
              - generic [ref=e1464] [cursor=pointer]:
                - generic [ref=e1466]: /z-qa-test-prod-poe-tier-list-1
                - generic [ref=e1467]:
                  - link "Edit" [ref=e1468]:
                    - /url: /poe-2/z-qa-test-prod-poe-tier-list-1
                    - generic [ref=e1469]: Edit
                  - button [ref=e1470]:
                    - img [ref=e1471]
              - generic [ref=e1472] [cursor=pointer]:
                - generic [ref=e1474]: /z-qa-test-refactoring-stas
                - generic [ref=e1475]:
                  - link "Edit" [ref=e1476]:
                    - /url: /poe-2/z-qa-test-refactoring-stas
                    - generic [ref=e1477]: Edit
                  - button [ref=e1478]:
                    - img [ref=e1479]
              - generic [ref=e1480] [cursor=pointer]:
                - generic [ref=e1482]: /z-qa-test-st-creating
                - generic [ref=e1483]:
                  - link "Edit" [ref=e1484]:
                    - /url: /poe-2/z-qa-test-st-creating
                    - generic [ref=e1485]: Edit
                  - button [ref=e1486]:
                    - img [ref=e1487]
              - generic [ref=e1488] [cursor=pointer]:
                - generic [ref=e1490]: /z-test-copy-pasting-images
                - generic [ref=e1491]:
                  - link "Edit" [ref=e1492]:
                    - /url: /poe-2/z-test-copy-pasting-images
                    - generic [ref=e1493]: Edit
                  - button [ref=e1494]:
                    - img [ref=e1495]
          - iframe [ref=e1503]:
            - generic [ref=f78e2]:
              - link "Advertisement" [ref=f78e4] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjst5wc9HicOOT3w-G4RRklawS7sNy9bsEdEJPivECh3UtiSCUs1p8n9wdtwhjPdpxrQmcT3sxurpyM0ZMZKhMfXtNhaw4X18aYU1XpPdyiOxCSwMNzbogzBADyZ0PinN2u2QNsbTSItmOTDM6HUDJRg5R4lCNwYONn8pj3bw1zGgIAZPFBnR6FrYhDfQX0aeYSr9o7FAGByzBy6swqEb6S0LFZuaoZ-kQVrP2YFT83R2jH4D6pX7kGHa7RVJgTD_zHd96_T4_UKnyJwpPdee_n4jCQPmKJuJ3PiliYHoyRPhJTETwH3SQI1mzykf1FEpeE3cxDP_GjuXfn6qx9dKB3vO1xhoXZgnKhfsDuf_7BTyLDkUP2IflUXqLHACJMxAfNPYHPOpkm8OqOtcub7GpmjiwQ9v2lV6afoxav0TZ5sWXA00AyOm1Rc--jeK1VNlsoy2HS9uSCLJZ3vig9WKTlO6GsHDLwyTyMs0BxyZFIid1Jd8Klag2R82uTqnk24aNU2S8ZEJ0TL8lmKtql5-0abmWSjcUrAnyxM848RyRQ_xiXgNFlpKF0v3yG2ODD8FDvqg2FaYPAX9v_g2v7flLUgqO7m0T3qydTpsp3akN0UmaspprCCbtDRDhIWPXJ4fR0Fi7CUE2C5JpYEbbkIh2MTguOySVKVaGYZDhC2BsQorQsv9QUHr_lofleBxDiG6wvjAHNNAjbAaOpqsmHrGF0AZBgKXI8_PF2bL8DL3yISX5JVV1I_UhlfpwAKN94yjhdaiKlEeYiLxh-yy-AyyYzSbXrMZtwl99l4oaUV86CI5CtD1KAuTMO69nHz82ekQkkYGKTcm-XR-zNXD-5hdOuRC4hRMEf6sPZ3EVbnHIv_pGByqwdzBDRsVafdOE9PG8vsb8Kx1Nis22ph89WjI4E5IrGLPZwuBVC2mk1_46ZtK16_fMXVumgz-n6Rq-V9vfIqL7KMu6O6rn_0RGPoWX-Gku-ygfU2R1ZLdFzaS5RqbpwLhX4C_d906ioZ1OBVebkdZ4Iomlt2GafTL4tMlREGXv69QFJQAk9mP0GvBFTVSLWFt1bnR0v9uf28E2U6hQGIyyqyht71VchJATfT-baSccw6QOAhOke6VJCuMaTDLZkuVg71BrLARQTcCyyErE2Nt7Dv2yU9REDJ5_yqwRwraPGklot7sTU2xLFv3Sqota-wJQ4U2l0wFkeXTKjnRVPVg-Ui0vMEdKTLOASdVqtaoi1U6fOzdxDNjfr7kT3DIqxB5cGPtxxH1wwR8wXFIxTvrfP7EJZrN2gphAQT5fDnGGVgMNIHltvINz9o9ex9JgwCAzmI5iCIzOoT84SdNQlzHvTp-ds8P8zaNSJvriGPJOivXCtt2_ulqvOZU2SMUoga0j8XITDIUPyWO4BwNEPqQu3jj9Srg9gV7mcL051gX7z2MP9LMi0v7oW5qaWllJlrNjFXYIFgepOG_HiZe-1bk5oOBRZfcf5G_lYdlJUeo2lqOHM4qTat48L-fMu5kukU5ZJL4NBkhq_n3EIf2naTFYPc8FSEn-t0NPVwAKGuU5pJ9H6yk3H3P-GiwnyfT6eMwRA3t62Spyg3hia8NsVdTLsexI-12gaXiJhTB9HuJD2EUe0cgF1uX0K31WEth15zjHxMZPkz5ZhejkxFh6VD9GIBot-2DMq7rEoI5SQ7CqPMApnfNi1k3U65usO5PJ4FFJUMcT93kU2xpCUypdjBok9xewHxoHy5M5ty1I_Nl5j7QNSWPbcoj1gKw028jU7q5-Kp2HPCWenug0NpFsxKB20aZGjrX4-EgStvDUtz6ADteHzJKVi2mX5wpIy_aj6kzQjPtpC-ABJ-91EOV2FKFEq0ZRZC6YqHHpVBYnn3U9idO579E36jK-f32u5GO7QOZxmTHMBE9CPQ86as0Ht8f5hv0lzeVQOLr4uYy2Z_pWYLQV2V4DedrOs91zeEgDGxDe51D7dtLRvnD00cGOzDKdn2mAq1TbqK0XiIU16mz_eoZuHMgCgQPp3EgaKsyy3_8oRP_gh2X&sai=AMfl-YST1hE058iCdlRTNiMmIIanYy5QqHPKJZ32fd-l7bGsQszUrb1mJmK0q__CnIuBu5dRB_UOjadahn5fbY1XtDd9QsSL4VZf0sgxVgiOElQY1oqpzGTkxke5c1zJJ2JbcMu9IO_RB6CuwggWE_GsgJTII3ksf4tb8vgCPYStXNsyqEj4Lktu7TIGTjFrvhowdfLohhpLilKRxxkJN6EvDy3ZkUXrJzkEXTZJBHeqznEGYn-7a85ukwIlSwJZg_JU0fR3Ne4Bu5gS8qUb5NnjraNGZf8UPoOEFCOjNvt8h2_FXsz92TGwnuwjX1ntjfYHEMBCTo41CIoGwjpBJqiuEXNwHmiEu69vVs4fBF_g1nB5BKfPzbEFEdykznL3TrrPVcdW99yfzCjJqMXWnIKnyMjA0kc8mzoC3nzem_nK4yujeSKVg4zGy85fnS1OnjOrs59D1-nxpuSBkmy6Z0upKwYJ3bplTwnNPzfBMUhfOYk1AB-lEmqvoKZOlUWCr-4Ufp6WMFNzK53QcjrHkMoUQHRR7mu7FhfbdF--Qv3fsqoMptrHbW8oXmZjaXewM5HKbmNINqvyu1uqsKiwBXEEntERGw5ngzmTK4nNiI7Nr7pk8tAyzi49xp1KL9WPMXxhhopE36lk56pd0nAiTQDYSzvpflusdT3uJANojqbl-Gj2HEaeokq0tku6cN83I3Nuixf64PyiIrZQdOjESFvcr11tFbGR0UeUIKV53PpRMYvaklt11mhHKvzoY515VIjL2mcu7rfXA1PumFXdCzQIrWF680qZC9zpcCkfMSyVdl2RDF1dofTKaWGG8aaZx3jfyv34tCFZR92pxlcXRjb0hB2q&sig=Cg0ArKJSzHQ0UI69y3Kb&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.amd.com/en/gaming/why-we-game-hp.html%3Futm_medium%3Dprogrammatic%26utm_source%3Ddsp%26utm_campaign%3D26q3_glob_gam_mult_gamer-first-hero_awa_no_1009200_havas_149jk_oem_gamerfirst2.2%2520oem%26utm_content%3D4957200-e_26q3_gf2.2_hp_displaybanners%26utm_term%3Dus%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23976541088
                - img "Advertisement" [ref=f78e5]
              - generic [ref=f78e6]:
                - generic:
                  - generic:
                    - link:
                      - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo-_Yur6SbyLMtKt1HYC1CNI99z0alP4dbT32cfqCTU2qlCPp5xlZzvV73CuPU3NQD5LOe11TRfpbMc87l0wupOJMk9qYy2CXXbCLGJu0RTK0Y4noQWhpBP-QwzRozQZOtntwm8HuzdcuL11TgB_UWFjMI2JIVwa7pLX2MVeJ1pvjCs10ObMwlGA-NxUGPJSru67ZAZGhD9hYy_7vtSeGFyroRlI0upafTpZ85TIcrUo0MXufCocvmXmeIuETrTxHtgCm7oQHGIP9pcp8VWbP2yCnu5mSdWSxznY9ucVKC8XYYP6L-8IAAunV5VH_TxAVhtp2uGwLr_gYhlTRxDL_rLtooiiq2LpkpE6NdzMKOAX30_5I5T4E4GVwbNisDkjetPI7tB7gKBj_CPrSOSjcYEXSgsLmbmrFPHDERKPYGxMP-nCe8J6NEaJogI0yLS2JfQKDJjutj5ebid9Cln4jqN8AYswHRMt1XtwokD_LlcUX0-tRmNwxTERCy9MtApOk5Fq1XFQfjqAOV0oAI6BJ4w22GCbGsAcYK6I0trg6MHvGkm6JrDGHKsqQW8QBRJT4ob5qlRTa7kgRKRlwt7Cbr_5eYfT-63eLZFtuBW8sydjNxmSch0YkTbbAJYA98HQ_GAjdOnRrjDtrlY-bFvAv4UFcFSZg0cqdGqi8BrGdEdgW-K7FySmv-e_C0cxN8SVvOvA-SXPDRzgpHVslai6lkArbcRNnD7HgKgT6-LrMVDMObEjJjqQLb_OKCnrksb0zXg5Mlj0BiuTWqpR--OCuMgeQDLT6bDQlVdEU4vUhylhOdKv6xrCfi0W99_nDsIQkq9hAq7aJPAuvrisD2hew7GqALa7oZOkF4gQIE7ELMsPuaae9QZXuixlUjibK8CxWx2Pi_FhCdik524M1ANiJAx9a4CwpgqPF8GstE1GN5qItDy9cgi89CBPvcyjzaUKPnHLNaxd8O1hV7t2rdDarAUuCqsVaCGioNXwfoRx8UULcLC5g52pQl9FHbTdUTmo26xq8Jj98ewaPckAD1_gaAdc3KNQ5Mzawj8p1dGNpFXUaJfj92jtWy_N1uF52AYOezCtkhlPTY6Bu-bw66ZMegSHPLQVNKbgxOCf_Z_2jWKD_RNbpnuZKgFPSTFePiD250NwRPicyvXnOx852ytjMfo8b72zyNsuiEG8peUXw56xTKpVdS3yTWf0ZCNNJB0PI1_P9Py95Yzjx_pOSM0p3jxApttJyRiOw9JnhKnVLWhGCGu7xq3bNtn4aO2AquaFcLuEygBT0CFjpmV02NTj5VTrGjoP9nie-48pR5AqN6s7XGTXi8E7C0kJ8WSGf0Eihcoa57r9REEJvKPaz1IWbTLA4pjpKhTpjnrbC-wmXQWwcOBIs2CO4bmkTMj3rYGql4x2P07m3EiRWdTavsxBGZl9lqih1dU_CWVlvZz12MvggMJg3xhPOzzb6pYO7djlEr_UY2IaNhEAp-pkF_KU8o5FDUxxlP1wuGIs0xHeuLpIFygPXgXEPnywqcg1YPXctF9MKV95UdVNoHHbTiQMTZoAkCTyQNO5Xisv3hqi_bEEQzdWMFWFTwYfzs8ZFgdMbvslfzMBmP3cE867zmYsJ0SDDw8X0oD-0m6q4ChOZCr5o5A_DBNYbipI_CuDRDGBMwVqsq9Pkecv8i7RpTB8ghP-c7S4HVhIF6ZI4mNUL1llCJT-jkwaWdMVyPgDawSbMqXY1xur9F0y8-7b68YAX3C24fLCIrv9wxG1gjHJ1gKjuRJVQEGCqejou1cXsoGGam6X5_B8Wq_3ShM3LICvaCZ3WsgNVKwLS0GlMl2OAqyWQsSTC-2BgEmcG2gKQAYkzaIPY5CUYwBxtwdZ-IO6l9ArF4_v4mALyx6W-riHLbMUs2wROaTYGa_xh6P7Rkzb774gLbSPJLMQlzOeAA8kYl3MLDZSj2PKDWxq8LwysbUZqZGWjsdia2MIxYtkQbwUXB1x4f7NUuixmskgNQQhVYi_7sdu-yNOOsz5vED8nyoTftv76qdQnc13bOdcbKzIWGD0eDYazA9QdGrgu1wApbga6liZNBaBP4yBsJDpq473jI1Egq-I6reAi2ZKrFweCajQi8hVKg5AIujrTYPAIChzRTBkPebOwUroW7CCTUOLuXe5Uk3IimYyqLsP4KmJu9kSJMaIVGk5m34FNOmWST_beZYSpn7qz8iFRvH2_u2zSZRLrfpwxrI3LoJVA4dkHsFmUatAPEXCPVc0_FcUTE07L2qv3WzzMImxjZE5mbFSc8F8TaBNeEpr7Xoqna71MzRUJjJWTMH4s0XNNBycTI71xMG6JkrRT8rx39YWj-5XC3kFUIpGt02sDeh662hUgRH0VjkPgql3WRH3JK8snniYVsblAdRXotppl-hJCdO9ZR6I_MQesrvGs1WilLNB1vkGkrEnwW-9HR2cvFw9CJ1eym53J1h2_4gvSNXYNlCDBoBC_ELhChors9MphKkz8oUUeZyRBr0M6umxwwJdgf7ZyJOJS8I3taL-M4BAQebhOoa4NJNpekEKJiac2OA
        - complementary [ref=e1504]:
          - generic [ref=e1505]:
            - generic [ref=e1507]:
              - generic [ref=e1509] [cursor=pointer]:
                - generic [ref=e1510]: Advertisement
                - generic [ref=e1511]: Remove Ads
              - generic [ref=e1515] [cursor=pointer]:
                - generic [ref=e1516]: Remove all ads
                - generic [ref=e1517]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e1518]
            - generic [ref=e1520]:
              - generic [ref=e1522] [cursor=pointer]:
                - generic [ref=e1523]: Advertisement
                - generic [ref=e1524]: Remove Ads
              - generic [ref=e1528] [cursor=pointer]:
                - generic [ref=e1529]: Remove all ads
                - generic [ref=e1530]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e1531]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e1535]:
    - banner [ref=e1536]:
      - generic [ref=e1537] [cursor=pointer]:
        - generic [ref=e1538]: Advertisement
        - generic [ref=e1539]: Remove Ads
    - generic [ref=e1542] [cursor=pointer]:
      - generic [ref=e1543]: Remove all ads
      - generic [ref=e1544]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e1545]
```

# Test source

```ts
  97  |           value: value.trim(),
  98  |           domain: '.mobalytics.gg',
  99  |           path: '/',
  100 |         };
  101 |       });
  102 |     // 4. Pass cookie into test
  103 |     await use({ cookies });
  104 |   },
  105 | 
  106 |   apiAuthGameManager: async ({ request }, use) => {
  107 |     // Clarify a correct endpoint depending on environment
  108 |     let apiEndpoint;
  109 |     if (process.env.BASE_URL === 'https://mobalytics.gg') {
  110 |       apiEndpoint = 'https://account.mobalytics.gg/api/graphql/v1/query';
  111 |     } else {
  112 |       apiEndpoint = 'https://stg.mobalytics.gg/api/account/gql/v1/query';
  113 |     }
  114 |     // 1. Perform login-request
  115 |     const loginResponse = await request.post(apiEndpoint, {
  116 |       data: {
  117 |         query: `
  118 |         mutation SignIn {
  119 |           signIn(
  120 |             email: "${process.env.GAME_MANAGER_EMAIL}"
  121 |             password: "${process.env.GAME_MANAGER_PASSWORD}"
  122 |           )
  123 |         }
  124 |       `,
  125 |       },
  126 |       headers: {
  127 |         'Content-Type': 'application/json',
  128 |       },
  129 |     });
  130 |     expect(loginResponse.ok()).toBeTruthy();
  131 |     // console.log(loginResponse.headers());
  132 | 
  133 |     // 2. Get set-cookie from response
  134 |     const setCookieHeader = loginResponse.headers()['set-cookie'];
  135 |     if (!setCookieHeader) throw new Error('No set-cookie header in login response');
  136 | 
  137 |     // 3. Transform cookie for Playwright
  138 |     const cookies = setCookieHeader
  139 |       .split(/,(?=[^ ]+\=)/) // разбиваем по кукам, а не по запятым внутри значений
  140 |       .map((cookieStr) => {
  141 |         const [cookiePair, ...attributes] = cookieStr.split(';');
  142 |         const index = cookiePair.indexOf('=');
  143 |         const name = cookiePair.slice(0, index).trim();
  144 |         const value = cookiePair.slice(index + 1).trim();
  145 |         return {
  146 |           name: name.trim(),
  147 |           value: value.trim(),
  148 |           domain: '.mobalytics.gg',
  149 |           path: '/',
  150 |         };
  151 |       });
  152 |     // 4. Pass cookie into test
  153 |     await use({ cookies });
  154 |   },
  155 | 
  156 |   cleanupStSts2Pages: async ({ page, apiAuthAdmin }, use) => {
  157 |     const moba = new Moba(page);
  158 |     await page.context().addCookies(apiAuthAdmin.cookies);
  159 |     const pagesToCleanup = [];
  160 | 
  161 |     const addPageForCleanup = (pageName) => {
  162 |       pagesToCleanup.push(pageName);
  163 |     };
  164 | 
  165 |     await use({ moba, addPageForCleanup });
  166 | 
  167 |     // Cleanup после теста
  168 |     if (pagesToCleanup.length > 0) {
  169 |       await moba.mainURLs.openAdminSts2Page();
  170 | 
  171 |       for (const pageName of pagesToCleanup) {
  172 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  173 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  174 | 
  175 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  176 |       }
  177 |     }
  178 |   },
  179 | 
  180 |   cleanupStPoE2Pages: async ({ page, apiAuthAdmin }, use) => {
  181 |     const moba = new Moba(page);
  182 |     await page.context().addCookies(apiAuthAdmin.cookies);
  183 |     const pagesToCleanup = [];
  184 | 
  185 |     const addPageForCleanup = (pageName) => {
  186 |       pagesToCleanup.push(pageName);
  187 |     };
  188 | 
  189 |     await use({ moba, addPageForCleanup });
  190 | 
  191 |     // Cleanup после теста
  192 |     if (pagesToCleanup.length > 0) {
  193 |       await moba.mainURLs.openAdminPoe2Page();
  194 | 
  195 |       for (const pageName of pagesToCleanup) {
  196 |         await moba.stAdminPage.deleteStCardWidget(pageName);
> 197 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
      |                                                       ^ TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
  198 | 
  199 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  200 |       }
  201 |     }
  202 |   },
  203 | 
  204 |   cleanupStOverwatchPages: async ({ page, apiAuthAdmin }, use) => {
  205 |     const moba = new Moba(page);
  206 |     await page.context().addCookies(apiAuthAdmin.cookies);
  207 |     const pagesToCleanup = [];
  208 | 
  209 |     const addPageForCleanup = (pageName) => {
  210 |       pagesToCleanup.push(pageName);
  211 |     };
  212 | 
  213 |     await use({ moba, addPageForCleanup });
  214 | 
  215 |     // Cleanup после теста
  216 |     if (pagesToCleanup.length > 0) {
  217 |       await moba.mainURLs.openAdminOverwatchPage();
  218 | 
  219 |       for (const pageName of pagesToCleanup) {
  220 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  221 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  222 | 
  223 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  224 |       }
  225 |     }
  226 |   },
  227 | 
  228 |   cleanupStMarathonPages: async ({ page, apiAuthAdmin }, use) => {
  229 |     const moba = new Moba(page);
  230 |     await page.context().addCookies(apiAuthAdmin.cookies);
  231 |     const pagesToCleanup = [];
  232 | 
  233 |     const addPageForCleanup = (pageName) => {
  234 |       pagesToCleanup.push(pageName);
  235 |     };
  236 | 
  237 |     await use({ moba, addPageForCleanup });
  238 | 
  239 |     // Cleanup после теста
  240 |     if (pagesToCleanup.length > 0) {
  241 |       await moba.mainURLs.openAdminMarathonPage();
  242 | 
  243 |       for (const pageName of pagesToCleanup) {
  244 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  245 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  246 | 
  247 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  248 |       }
  249 |     }
  250 |   },
  251 | 
  252 |   cleanupStEndfieldPages: async ({ page, apiAuthAdmin }, use) => {
  253 |     const moba = new Moba(page);
  254 |     await page.context().addCookies(apiAuthAdmin.cookies);
  255 |     const pagesToCleanup = [];
  256 | 
  257 |     const addPageForCleanup = (pageName) => {
  258 |       pagesToCleanup.push(pageName);
  259 |     };
  260 | 
  261 |     await use({ moba, addPageForCleanup });
  262 | 
  263 |     // Cleanup после теста
  264 |     if (pagesToCleanup.length > 0) {
  265 |       await moba.mainURLs.openAdminEndfieldPage();
  266 | 
  267 |       for (const pageName of pagesToCleanup) {
  268 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  269 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  270 | 
  271 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  272 |       }
  273 |     }
  274 |   },
  275 | 
  276 |   cleanupStPoEPages: async ({ page, apiAuthAdmin }, use) => {
  277 |     const moba = new Moba(page);
  278 |     await page.context().addCookies(apiAuthAdmin.cookies);
  279 |     const pagesToCleanup = [];
  280 | 
  281 |     const addPageForCleanup = (pageName) => {
  282 |       pagesToCleanup.push(pageName);
  283 |     };
  284 | 
  285 |     await use({ moba, addPageForCleanup });
  286 | 
  287 |     // Cleanup после теста
  288 |     if (pagesToCleanup.length > 0) {
  289 |       await moba.mainURLs.openAdminPoePage();
  290 | 
  291 |       for (const pageName of pagesToCleanup) {
  292 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  293 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  294 | 
  295 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  296 |       }
  297 |     }
```