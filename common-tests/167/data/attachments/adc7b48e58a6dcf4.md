# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/widgets/focus-mode-widgets.test.js >> User can open and close the perimeter map modal
- Location: e2e-tests/ngf/widgets/focus-mode-widgets.test.js:6:1

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByAltText('Perimeter Map').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets! → Get Started Close":
        - /url: /reward-pass/01a15f39-e0e7-77d8-947f-951a912807e5
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - textbox [ref=e10]:
              - paragraph [ref=e11]: Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets!
            - button "→ Get Started" [ref=e12]
          - img "Close" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e16]:
          - link [ref=e18] [cursor=pointer]:
            - /url: /marathon
            - img "Mobalytics" [ref=e19]
          - generic [ref=e21]:
            - link "League of Legends LoL" [ref=e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=e25]:
                - img "League of Legends" [ref=e27]
                - generic [ref=e28]: LoL
            - link "Teamfight Tactics TFT" [ref=e30] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=e32]:
                - img "Teamfight Tactics" [ref=e34]
                - generic [ref=e35]: TFT
            - link "Diablo 4 Diablo 4" [ref=e37] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=e39]:
                - img "Diablo 4" [ref=e41]
                - generic [ref=e42]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e44] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=e46]:
                - img "Path of Exile 2" [ref=e48]
                - generic [ref=e49]: PoE 2
            - link "Path of Exile PoE" [ref=e51] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=e53]:
                - img "Path of Exile" [ref=e55]
                - generic [ref=e56]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=e58] [cursor=pointer]':
              - /url: https://mobalytics.gg/wow-forever
              - generic [ref=e60]:
                - 'img "World of Warcraft: Forever" [ref=e62]'
                - generic [ref=e63]: WoW Forever
                - generic [ref=e64]: New
            - link "Destiny 2 Destiny 2" [ref=e67] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=e69]:
                - img "Destiny 2" [ref=e71]
                - generic [ref=e72]: Destiny 2
            - link "Marathon Marathon" [ref=e74] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=e76]:
                - img "Marathon" [ref=e78]
                - generic [ref=e79]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e81] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=e83]:
                - img "Slay the Spire 2" [ref=e85]
                - generic [ref=e86]: STS 2
            - link "Deadlock Deadlock" [ref=e88] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=e90]:
                - img "Deadlock" [ref=e92]
                - generic [ref=e93]: Deadlock
            - link "Overwatch Overwatch" [ref=e95] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=e97]:
                - img "Overwatch" [ref=e99]
                - generic [ref=e100]: Overwatch
            - button [ref=e102] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=e105] [cursor=pointer]:
            - /url: https://mobalytics.gg/gamebase
            - generic [ref=e106]:
              - img "Gamebase" [ref=e108]
              - generic [ref=e109]: Gamebase
              - generic [ref=e110]: Reviews, Previews, & More
        - generic [ref=e111]:
          - link [ref=e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-marathon&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=e114]
          - button "Play & Get Free Rewards" [ref=e117] [cursor=pointer]
          - generic [ref=e120]:
            - button "Sign In" [ref=e122] [cursor=pointer]
            - button "Settings" [ref=e124] [cursor=pointer]
        - generic [ref=e127]:
          - link [ref=e130] [cursor=pointer]:
            - /url: /marathon
            - img "Home" [ref=e131]
            - generic: Home
          - link [ref=e134] [cursor=pointer]:
            - /url: /marathon/profile
            - img "Profile" [ref=e135]
            - generic: Profile
          - link [ref=e138] [cursor=pointer]:
            - /url: /marathon/planner/builds
            - img "Build Planner" [ref=e139]
            - generic: Build Planner
          - link [ref=e142] [cursor=pointer]:
            - /url: /marathon/tier-lists
            - img "Tier Lists" [ref=e143]
            - generic: Tier Lists
          - link [ref=e146] [cursor=pointer]:
            - /url: /marathon/builds
            - img "Builds" [ref=e147]
            - generic: Builds
          - link [ref=e150] [cursor=pointer]:
            - /url: /marathon/runners
            - img "Runners" [ref=e151]
            - generic: Runners
          - link [ref=e154] [cursor=pointer]:
            - /url: /marathon/weapons
            - img "Weapons" [ref=e155]
            - generic: Weapons
          - link [ref=e158] [cursor=pointer]:
            - /url: /marathon/factions
            - img "Factions" [ref=e159]
            - generic: Factions
          - link [ref=e162] [cursor=pointer]:
            - /url: /marathon/maps
            - img "Maps" [ref=e163]
            - generic: Maps
          - link [ref=e166] [cursor=pointer]:
            - /url: /marathon/guides
            - img "Guides" [ref=e167]
            - generic: Guides
        - generic [ref=e169]:
          - main [ref=e170]:
            - generic [ref=e175]:
              - generic [ref=e176]:
                - button [ref=e179]:
                  - generic [ref=e184]:
                    - heading "Marathon Perimeter" [level=1] [ref=e185]:
                      - generic [ref=e186]: Marathon
                      - generic [ref=e187]: Perimeter
                    - textbox [ref=e194]:
                      - paragraph [ref=e195]: Perimeter, the starting zone, on the outskirts of the colony (5 teams of 3).
                      - paragraph [ref=e196]:
                        - emphasis [ref=e197]: Updated on June 2nd 2026
                - generic [ref=e206]:
                  - link "Perimeter" [ref=e208] [cursor=pointer]:
                    - /url: /marathon/maps/perimeter
                  - link "Dire Marsh" [ref=e212] [cursor=pointer]:
                    - /url: /marathon/maps/dire-marsh
                  - link "Outpost" [ref=e215] [cursor=pointer]:
                    - /url: /marathon/maps/outpost
                  - link "Cryo Archive" [ref=e218] [cursor=pointer]:
                    - /url: /marathon/maps/cryo-archive
                - generic [ref=e220]:
                  - generic [ref=e221]:
                    - generic [ref=e222]:
                      - heading "Overview" [level=2] [ref=e226]
                      - textbox [ref=e231]:
                        - paragraph [ref=e232]: Perimeter is the starting zone on Tau Ceti IV, situated on the outskirts of the UESC colony and originally designated as an expansion and terraforming site.
                        - paragraph [ref=e233]: The map features wide exterior terrain and industrial infrastructure tied to early settlement efforts, including Points of Interest such as the Data Wall, the Hauler, and the Twin Relays, which indicate large-scale data collection and transmission systems—many of which now appear dormant, though still guarded by UESC forces.
                        - paragraph [ref=e234]:
                          - emphasis [ref=e235]: "\"You're going to start with Perimeter, where you're on the outskirts of the colony. It's a little more spread out with more areas to be safe and to sneak around. But it's also a little more straightforward. It really brings the sense of scale. It sits in our fantasy as an expansion site for the colony on the very edges where they had settled on Tau Ceti. UESC are also there trying to understand what has happened and secure the area.\""
                        - table [ref=e237]:
                          - row [ref=e242]:
                            - columnheader [ref=e243]:
                              - paragraph [ref=e244]: Players
                            - columnheader [ref=e245]:
                              - paragraph [ref=e246]: Teams
                            - columnheader [ref=e247]:
                              - paragraph [ref=e248]: Threat
                          - row [ref=e249]:
                            - cell [ref=e250]:
                              - paragraph [ref=e251]: "15"
                            - cell [ref=e252]:
                              - paragraph [ref=e253]: 5 teams of 3
                            - cell [ref=e254]:
                              - paragraph [ref=e255]: Low
                    - generic [ref=e256]:
                      - heading "Interactive Map" [level=2] [ref=e260]
                      - generic [ref=e263]:
                        - region "Interactive Map markers" [ref=e264]:
                          - region "Marker search" [ref=e265]:
                            - textbox "Search markers" [ref=e271]:
                              - /placeholder: Search markers…
                          - region "Category controls" [ref=e272]:
                            - generic [ref=e273]:
                              - button "Show All" [ref=e274] [cursor=pointer]
                              - button "Hide All" [ref=e275] [cursor=pointer]
                          - generic [ref=e276]:
                            - region "Labels" [ref=e277]:
                              - checkbox "Labels" [checked] [ref=e279] [cursor=pointer]:
                                - generic [ref=e280]:
                                  - generic [ref=e281]: Labels
                                  - generic [ref=e282]: "10"
                              - list [ref=e283]:
                                - listitem [ref=e284]:
                                  - checkbox "Landmark" [checked] [ref=e286] [cursor=pointer]:
                                    - generic [ref=e287]:
                                      - generic [ref=e289]: Landmark
                                      - generic [ref=e290]: "5"
                                - listitem [ref=e291]:
                                  - checkbox "Region" [checked] [ref=e293] [cursor=pointer]:
                                    - generic [ref=e294]:
                                      - generic [ref=e296]: Region
                                      - generic [ref=e297]: "5"
                            - region "Locations" [ref=e298]:
                              - checkbox "Locations" [checked] [ref=e300] [cursor=pointer]:
                                - generic [ref=e301]:
                                  - generic [ref=e302]: Locations
                                  - generic [ref=e303]: "22"
                              - list [ref=e304]:
                                - listitem [ref=e305]:
                                  - checkbox "Spawn Point" [checked] [ref=e307] [cursor=pointer]:
                                    - generic [ref=e308]:
                                      - generic [ref=e309]: Spawn Point
                                      - generic [ref=e310]: "11"
                                - listitem [ref=e311]:
                                  - checkbox "Crew Exfill" [checked] [ref=e313] [cursor=pointer]:
                                    - generic [ref=e314]:
                                      - generic [ref=e315]: Crew Exfill
                                      - generic [ref=e316]: "8"
                                - listitem [ref=e317]:
                                  - checkbox "Guarded Exfil" [checked] [ref=e319] [cursor=pointer]:
                                    - generic [ref=e320]:
                                      - generic [ref=e321]: Guarded Exfil
                                      - generic [ref=e322]: "3"
                            - region "Activities" [ref=e323]:
                              - checkbox "Activities" [checked=mixed] [ref=e325] [cursor=pointer]:
                                - generic [ref=e326]:
                                  - generic [ref=e327]: Activities
                                  - generic [ref=e328]: "21"
                              - list [ref=e329]:
                                - listitem [ref=e330]:
                                  - checkbox "TAD" [ref=e332] [cursor=pointer]:
                                    - generic [ref=e333]:
                                      - generic [ref=e334]: TAD
                                      - generic [ref=e335]: "6"
                                - listitem [ref=e336]:
                                  - checkbox "DCON" [checked] [ref=e338] [cursor=pointer]:
                                    - generic [ref=e339]:
                                      - generic [ref=e340]: DCON
                                      - generic [ref=e341]: "4"
                                - listitem [ref=e342]:
                                  - checkbox "Supply Drop" [checked] [ref=e344] [cursor=pointer]:
                                    - generic [ref=e345]:
                                      - generic [ref=e346]: Supply Drop
                                      - generic [ref=e347]: "4"
                                - listitem [ref=e348]:
                                  - checkbox "Hazard Room" [checked] [ref=e350] [cursor=pointer]:
                                    - generic [ref=e351]:
                                      - generic [ref=e352]: Hazard Room
                                      - generic [ref=e353]: "3"
                                - listitem [ref=e354]:
                                  - checkbox "Intercept" [checked] [ref=e356] [cursor=pointer]:
                                    - generic [ref=e357]:
                                      - generic [ref=e358]: Intercept
                                      - generic [ref=e359]: "4"
                            - region "Dangers" [ref=e360]:
                              - checkbox "Dangers" [checked=mixed] [ref=e362] [cursor=pointer]:
                                - generic [ref=e363]:
                                  - generic [ref=e364]: Dangers
                                  - generic [ref=e365]: "14"
                              - list [ref=e366]:
                                - listitem [ref=e367]:
                                  - checkbox "Ticks" [checked] [ref=e369] [cursor=pointer]:
                                    - generic [ref=e370]:
                                      - generic [ref=e371]: Ticks
                                      - generic [ref=e372]: "8"
                                - listitem [ref=e373]:
                                  - checkbox "Flock" [ref=e375] [cursor=pointer]:
                                    - generic [ref=e376]:
                                      - generic [ref=e377]: Flock
                                      - generic [ref=e378]: "6"
                        - generic [ref=e379]:
                          - generic [ref=e380]:
                            - generic:
                              - generic:
                                - generic:
                                  - button "North Relay"
                                  - button "Hauler"
                                  - button "Overflow"
                                  - button "South Relay"
                                  - button "Station"
                                - generic:
                                  - button "Data Wall"
                                  - button "Tunnels"
                                  - button "Columns"
                                  - button "Ravine"
                                  - button "East Wall"
                                - generic:
                                  - button "Spawn Point" [ref=e391] [cursor=pointer]
                                  - button "Spawn Point" [ref=e393] [cursor=pointer]
                                  - button "Spawn Point" [ref=e395] [cursor=pointer]
                                  - button "Spawn Point" [ref=e397] [cursor=pointer]
                                  - button "Spawn Point" [ref=e399] [cursor=pointer]
                                  - button "Spawn Point" [ref=e401] [cursor=pointer]
                                  - button "Spawn Point" [ref=e403] [cursor=pointer]
                                  - button "Spawn Point" [ref=e405] [cursor=pointer]
                                  - button "Spawn Point" [ref=e407] [cursor=pointer]
                                  - button "Spawn Point" [ref=e409] [cursor=pointer]
                                  - button "Spawn Point" [ref=e411] [cursor=pointer]
                                - generic:
                                  - button "Crew Exfill" [ref=e413] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e415] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e417] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e419] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e421] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e423] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e425] [cursor=pointer]
                                  - button "Crew Exfill" [ref=e427] [cursor=pointer]
                                - generic:
                                  - button "Guarded Exfil" [ref=e429] [cursor=pointer]
                                  - button "Guarded Exfil" [ref=e431] [cursor=pointer]
                                  - button "Guarded Exfil" [ref=e433] [cursor=pointer]
                                - generic:
                                  - button "DCON" [ref=e435] [cursor=pointer]
                                  - button "DCON" [ref=e437] [cursor=pointer]
                                  - button "DCON" [ref=e439] [cursor=pointer]
                                  - button "DCON" [ref=e441] [cursor=pointer]
                                - generic:
                                  - button "Supply Drop" [ref=e443] [cursor=pointer]
                                  - button "Supply Drop" [ref=e445] [cursor=pointer]
                                  - button "Supply Drop" [ref=e447] [cursor=pointer]
                                  - button "Supply Drop" [ref=e449] [cursor=pointer]
                                - generic:
                                  - button "Hazard Room" [ref=e451] [cursor=pointer]
                                  - button "Hazard Room" [ref=e453] [cursor=pointer]
                                  - button "Hazard Room" [ref=e455] [cursor=pointer]
                                - generic:
                                  - button "Intercept" [ref=e457] [cursor=pointer]
                                  - button "Intercept" [ref=e459] [cursor=pointer]
                                  - button "Intercept" [ref=e461] [cursor=pointer]
                                  - button "Intercept" [ref=e463] [cursor=pointer]
                                - generic:
                                  - button "Ticks" [ref=e465] [cursor=pointer]
                                  - button "Ticks" [ref=e467] [cursor=pointer]
                                  - button "Ticks" [ref=e469] [cursor=pointer]
                                  - button "Ticks" [ref=e471] [cursor=pointer]
                                  - button "Ticks" [ref=e473] [cursor=pointer]
                                  - button "Ticks" [ref=e475] [cursor=pointer]
                                  - button "Ticks" [ref=e477] [cursor=pointer]
                                  - button "Ticks" [ref=e479] [cursor=pointer]
                          - button "Hide the marker list" [ref=e482] [cursor=pointer]
                          - generic [ref=e484]:
                            - button "Copy a link to this view" [ref=e485] [cursor=pointer]
                            - button "How this map works" [ref=e487] [cursor=pointer]
                            - button "Full screen" [ref=e489] [cursor=pointer]
                            - button "Zoom in" [ref=e491] [cursor=pointer]
                            - button "Zoom out" [ref=e493] [cursor=pointer]
                            - button "Reset view" [ref=e495] [cursor=pointer]
                    - generic [ref=e497]:
                      - heading "General Tips" [level=2] [ref=e501]
                      - textbox [ref=e506]:
                        - list [ref=e507]:
                          - listitem [ref=e508]:
                            - strong [ref=e509]: Stick to the outer ring.
                            - text: You'll find all the main exfils out there with way less player traffic. The center just pulls everyone into pointless fights.
                          - listitem [ref=e510]:
                            - strong [ref=e511]: Hit North Relay first.
                            - text: Drop there for good loot right away, then get out quickly. It turns into a hot zone if you hang around too long.
                          - listitem [ref=e512]:
                            - strong [ref=e513]: Commit fully to Station.
                            - text: Don't just peek it and leave; clear it properly or skip it. It's one of the best spots but needs your full attention.
                          - listitem [ref=e514]:
                            - strong [ref=e515]: Use Ravine and Tunnels to rotate.
                            - text: They let you move between areas without being seen. Perfect for getting to exfils safely.
                          - listitem [ref=e516]:
                            - strong [ref=e517]: Skip Overflow unless you're loaded.
                            - text: The enemies there can overwhelm you fast. Only go if you have strong weapons and plenty of ammo.
                    - generic [ref=e518]:
                      - heading "How to do the Intercept Event (Profit Opportunity)" [level=2] [ref=e522]
                      - textbox [ref=e527]:
                        - paragraph [ref=e528]:
                          - text: For more explanation on how to complete Perimeter's map events, check out this in-depth video by our expert,
                          - link "Wallzer" [ref=e529] [cursor=pointer]:
                            - /url: https://youtu.be/tnph2mWZv-U?si=YGhkfm_1vstLjBiW&t=75
                          - text: .
                        - paragraph [ref=e530]:
                          - generic [ref=e538] [cursor=pointer]
                        - paragraph [ref=e541]: The Intercept requires you to find a panel with a three number code and activate it.
                        - paragraph [ref=e542]:
                          - img "interecept panel perimeter" [ref=e548] [cursor=pointer]
                        - paragraph [ref=e549]: From there, you'll see multiple highlighted pings for other panels on the map, and you must find the one that matches the number on the original panel.
                        - paragraph [ref=e550]:
                          - img "other panels perimeter" [ref=e556] [cursor=pointer]
                        - paragraph [ref=e557]: You can see the original number at all times at the top right where your contract is listed.
                        - paragraph [ref=e558]: Once you find it, activate it and then wait for a keycard to pop out of it and reveal a ping for the last location.
                        - paragraph [ref=e559]:
                          - img "key card objective updated" [ref=e565] [cursor=pointer]
                        - paragraph [ref=e566]: At the last location, enter the keycard into the terminal to spawn three UESC dropships. These will have high-tier enemies and one ship will have a bright yellow supply crate.
                        - paragraph [ref=e567]:
                          - img "shoot yellow supply crate" [ref=e573] [cursor=pointer]
                        - paragraph [ref=e574]: You must shoot it down before it leaves or you will miss out on its rewards.
                  - generic [ref=e576]:
                    - generic [ref=e577]:
                      - heading "Table of Contents" [level=2] [ref=e581]
                      - generic [ref=e582]:
                        - generic [ref=e583]:
                          - link "1. Overview" [ref=e584] [cursor=pointer]:
                            - /url: /marathon/maps/perimeter#2-overview-0
                          - link "2. Interactive Map" [ref=e585] [cursor=pointer]:
                            - /url: /marathon/maps/perimeter#14-interactive-map-0
                          - link "3. General Tips" [ref=e586] [cursor=pointer]:
                            - /url: /marathon/maps/perimeter#13-general-tips-1
                          - link "4. How to do the Intercept Event (Profit Opportunity)" [ref=e587] [cursor=pointer]:
                            - /url: /marathon/maps/perimeter#12-how-to-do-the-intercept-event-profit-opportunity-2
                        - button "Back to top" [ref=e589] [cursor=pointer]
                    - link [ref=e591] [cursor=pointer]:
                      - /url: /marathon/maps
                      - generic [ref=e594]:
                        - generic [ref=e595]:
                          - paragraph [ref=e596]: Explore Other Maps
                          - paragraph
                        - button "See Maps" [ref=e598]
              - status [ref=e600]
            - generic [ref=e602] [cursor=pointer]
          - complementary [ref=e606]:
            - generic [ref=e607]:
              - generic [ref=e609]:
                - generic [ref=e611] [cursor=pointer]:
                  - generic [ref=e612]: Advertisement
                  - generic [ref=e613]: Remove Ads
                - generic [ref=e619] [cursor=pointer]:
                  - generic [ref=e620]: Remove all ads
                  - generic [ref=e621]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e622]
              - generic [ref=e624]:
                - generic [ref=e626] [cursor=pointer]:
                  - generic [ref=e627]: Advertisement
                  - generic [ref=e628]: Remove Ads
                - generic [ref=e634] [cursor=pointer]:
                  - generic [ref=e635]: Remove all ads
                  - generic [ref=e636]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e637]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e640]:
    - banner [ref=e641]:
      - generic [ref=e642] [cursor=pointer]:
        - generic [ref=e643]: Advertisement
        - generic [ref=e644]: Remove Ads
    - generic [ref=e648] [cursor=pointer]:
      - generic [ref=e649]: Remove all ads
      - generic [ref=e650]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e651]
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/fixture';
  2  | import { Moba } from '../../../app/page-object/moba';
  3  | 
  4  | test.use({ storageState: { cookies: [], origins: [] } });
  5  | 
  6  | test('User can open and close the perimeter map modal', async ({ page }) => {
  7  |     const moba = new Moba(page);
  8  | 
  9  |     await moba.mainURLs.openMarathonPerimeterMapPage();
> 10 |     await moba.stPage.perimeterMapButton.first().click();
     |                                                  ^ Error: locator.click: Test timeout of 90000ms exceeded.
  11 |     await expect(moba.stPage.closeMapModalButton).toBeVisible();
  12 |     await moba.stPage.closeMapModalButton.click();
  13 |     await expect(moba.stPage.closeMapModalButton).not.toBeVisible();
  14 | });
  15 | 
  16 | test.describe('For published UG documents', () => {
  17 |     test('Admin can open and exit Focus Mode for published PoE 2 build', async ({ page, apiAuthAdmin }) => {
  18 |         const moba = new Moba(page);
  19 | 
  20 |         await moba.mainURLs.openUgPoe2PublishedBuildPage();
  21 |         await expect(moba.ugBuildPage.getStatusBadge('Published')).toBeVisible();
  22 |         await moba.ugBuildPage.openFocusMode();
  23 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
  24 |         await moba.ugBuildPage.exitFocusMode();
  25 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
  26 |         await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
  27 |     })
  28 | 
  29 |     test('Unlogged-in user can open and exit Focus Mode for published WoW build', async ({ page }) => {
  30 |         const moba = new Moba(page);
  31 | 
  32 |         await moba.mainURLs.openUgPoe2PublishedBuildPage();
  33 |         await moba.ugBuildPage.openFocusMode();
  34 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeVisible();
  35 |         await moba.ugBuildPage.exitFocusMode();
  36 |         await expect(moba.ugBuildPage.exitFocusModeButton).toBeHidden();
  37 |         await expect(moba.ugBuildPage.focusModeButton).toBeVisible();
  38 |     })
  39 | });
  40 | 
  41 | test.describe('For draft UG documents', () => {
  42 |     test('User cant open Focus Mode for draft PoE 2 build', async ({ page, apiAuthAdmin }) => {
  43 |         const moba = new Moba(page);
  44 | 
  45 |         await moba.mainURLs.openUgPoe2DraftBuildPage();
  46 |         await expect(moba.ugBuildPage.getStatusBadge('Draft')).toBeVisible();
  47 |         await expect(moba.ugBuildPage.focusModeButton).toBeHidden();
  48 |     })
  49 | });
```