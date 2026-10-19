# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-st-pages.test.js >> Creating ST Pages >> Create a structure page on PoE 2 project
- Location: e2e-tests/ngf/creating-st-pages.test.js:225:3

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.click: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add section', exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - textbox [ref=e10]:
          - paragraph [ref=e11]: PoE2 API was updated, causing problems
        - img "Close" [ref=e12] [cursor=pointer]
      - generic [ref=e13]:
        - generic [ref=e15]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /poe-2
            - img "Mobalytics" [ref=e18]
          - generic [ref=e20]:
            - link "League of Legends LoL" [ref=e22] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/lol
              - generic [ref=e24]:
                - img "League of Legends" [ref=e26]
                - generic [ref=e27]: LoL
            - link "Teamfight Tactics TFT" [ref=e29] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/tft
              - generic [ref=e31]:
                - img "Teamfight Tactics" [ref=e33]
                - generic [ref=e34]: TFT
            - link "Diablo 4 Diablo 4" [ref=e36] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/diablo-4
              - generic [ref=e38]:
                - img "Diablo 4" [ref=e40]
                - generic [ref=e41]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e43] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe-2
              - generic [ref=e45]:
                - img "Path of Exile 2" [ref=e47]
                - generic [ref=e48]: PoE 2
            - link "Path of Exile PoE" [ref=e50] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/poe
              - generic [ref=e52]:
                - img "Path of Exile" [ref=e54]
                - generic [ref=e55]: PoE
            - link "Destiny 2 Destiny 2" [ref=e57] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/destiny-2
              - generic [ref=e59]:
                - img "Destiny 2" [ref=e61]
                - generic [ref=e62]: Destiny 2
            - link "Deadlock Deadlock" [ref=e64] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/deadlock
              - generic [ref=e66]:
                - img "Deadlock" [ref=e68]
                - generic [ref=e69]: Deadlock
            - link "Valorant VAL" [ref=e71] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/valorant
              - generic [ref=e73]:
                - img "Valorant" [ref=e75]
                - generic [ref=e76]: VAL
            - link "The Bazaar The Bazaar" [ref=e78] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/the-bazaar
              - generic [ref=e80]:
                - img "The Bazaar" [ref=e82]
                - generic [ref=e83]: The Bazaar
            - link "Monster Hunter Wilds Monster Hunter Wilds" [ref=e85] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/mhw
              - generic [ref=e87]:
                - img "Monster Hunter Wilds" [ref=e89]
                - generic [ref=e90]: Monster Hunter Wilds
            - link "Zenless Zone Zero ZZZ" [ref=e92] [cursor=pointer]:
              - /url: https://stg.mobalytics.gg/zzz
              - generic [ref=e94]:
                - img "Zenless Zone Zero" [ref=e96]
                - generic [ref=e97]: ZZZ
            - button [ref=e99] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=e102] [cursor=pointer]:
            - /url: https://stg.mobalytics.gg/gamebase
            - generic [ref=e103]:
              - img "Gamebase" [ref=e105]
              - generic [ref=e106]: Gamebase
              - generic [ref=e107]: Reviews, Previews, & More
        - generic [ref=e108]:
          - link [ref=e109] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?utm_campaign=I5qu0ij&utm_medium=owaa&utm_source=app
            - button "Download App" [ref=e111]
          - button "Play & Get Free Rewards" [ref=e114] [cursor=pointer]
          - textbox "global search input" [ref=e125]:
            - /placeholder: Ask me anything about PoE builds!
          - generic [ref=e126]:
            - button "Get Plus" [ref=e127] [cursor=pointer]
            - link "nikiheartj#6924" [ref=e128] [cursor=pointer]:
              - /url: /poe-2/profile/pyp3emli
            - button "admin+stg+ns@mobalyticshq.com" [ref=e132] [cursor=pointer]:
              - generic [ref=e134]:
                - generic [ref=e135]: A
                - generic [ref=e137]: admin+stg+ns@mobalyticshq.com
            - button "Notifications" [ref=e140] [cursor=pointer]
        - generic [ref=e143]:
          - link [ref=e146] [cursor=pointer]:
            - /url: /poe-2
            - img "Home" [ref=e147]
            - generic: Home
          - link [ref=e150] [cursor=pointer]:
            - /url: /poe-2/profile
            - img "Profile" [ref=e151]
            - generic: Profile
          - link [ref=e154] [cursor=pointer]:
            - /url: /poe-2/planner/builds
            - img "Build Planner" [ref=e155]
            - generic: Build Planner
          - link [ref=e158] [cursor=pointer]:
            - /url: /poe-2/tier-list
            - img "Tier List" [ref=e159]
            - generic: Tier List
          - link [ref=e162] [cursor=pointer]:
            - /url: /poe-2/starter-builds
            - img "Starter Builds" [ref=e163]
            - generic: Starter Builds
          - link [ref=e166] [cursor=pointer]:
            - /url: /poe-2/builds
            - img "Builds" [ref=e167]
            - generic: Builds
          - link [ref=e170] [cursor=pointer]:
            - /url: /poe-2/guides
            - img "Guides" [ref=e171]
            - generic: Guides
          - link [ref=e174] [cursor=pointer]:
            - /url: /poe-2/creators
            - img "Creators" [ref=e175]
            - generic: Creators
        - generic [ref=e176]:
          - generic [ref=e177]:
            - main [ref=e178]:
              - generic [ref=e182]:
                - generic [ref=e184]:
                  - generic [ref=e185]: New Page
                  - generic [ref=e187]:
                    - button "Create and Save" [ref=e188] [cursor=pointer]
                    - button "Reset" [disabled] [ref=e189]
                    - button "Cancel" [ref=e191] [cursor=pointer]
                - generic [ref=e192]:
                  - button "Add Section" [ref=e196] [cursor=pointer]
                  - status [ref=e198]
              - generic [ref=e199]:
                - generic [ref=e200] [cursor=pointer]
                - iframe [ref=e205]:
                  - generic [ref=f32e2]:
                    - link [ref=f32e3] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstZOAZlCoFANHjJRJx-oZQR5Z6hpTjlqx63Dq6Y1x_tKWkqA7Do1Zhe9tzBn1lUX9m2JHwJkdRwJP3MEM42l8j0Wuauw2GImb0mmHp8_oSSB8RyC_17gqfcC91T47nHQhx5-0knN6dVOYBgDI9rxqV8zWdTvWpYsBEs3t2Rm1IWO5A-RMl51FCh9ljNvFwDZ5QYT6zOW5F-iSwv8ADns9ETJ3yJ55S3O4sx5L5Oie1BAicM0txtr0mW8zLZ-oq9JJETokvfz_ZVqhpZOYsfc_3XTDkRNG3EYpzTr1y8vaFxfQT1MlbRoQAUKZ1K3ZQVAm76FrHNl1UISaJ4-w2R3IRx8d2Qr0hFO824krLl6QkS1UfhQjz8tizmqFmCncFxOp3eqE5qnGq8Ji1lOIDxTeL8gz512EU&sai=AMfl-YSkiBoL-sCj1C-TVZ9M4bexstuAN-zIewIen7Xpj7ICjAV0ZuyKUX2Y6WvmkJ6D2ihS76VKegb4Ag1LIJwy2spA2lvQw0FnlvVEjopLSPsgRg07Xejg703dwhs9SmmLQs1BN8yQX5TpD-Y4B-G6x11Ji0LdFTLlRCmoBU6RBp7XBVwt3ThzgqGMJZ93qS9_DYbUy-SpQ-RwVLqVawsvpe4BLtCnoQESTkJWxIbesfKVTcUxEYptdMjHbTvbfJIuSyNCP17Mkkpu9sJwi_YAxqiJ1APIAZ060DBB0XydDyORAqLyosbDyOx2kJ4zcVdDrEiRInTuHaL-RNY7Is70f597NpUVCGIh2QshEG1Po8S0oW4VVf79QXY&sig=Cg0ArKJSzBeWLmw-G7_I&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://ad.doubleclick.net/ddm/trackclk/N720476.3919870FACEIT/B36811459.457367443%3Bdc_trk_aid%3D652001812%3Bdc_trk_cid%3D264856046%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D0%3Bgdpr_consent%3D%3Bltd%3D%3Bdc_tdv%3D1
                    - generic:
                      - generic:
                        - link:
                          - /url: https://adssettings.google.com/whythisad?source=display&reasons=AQSQ1KPMeJCf9rrcJqwkw9MNTvbyyCNA3tOEUR1ggcX_X27E0C6nb-XqDpUWAUlSNOgip1M_qlZ_gxCoiJu-JmvgtidYL9pAEQlo3wMApnA2lzUm8qQ9eTS_JLR-N-baOC1gghuI-gkhsyIvlSOTRJoufoI4jNoptdDo8b8TYDxtvSa3FQ7QhX6ghdqVwqhwYohh0o8-TcqVO8mp5UbmJ4H6gECIbjjFw_XyM_tUPz-y0CTZWNvot7ZQn3hkEvcjlBMmE6MO_RFx7ma5U_asptrf9vKvQ9w4neG-Wl9cw_b3-z33peh_fob9K6SmEdSnaLGW9xcEKEhpuTz3yrPeoMSRjLe7gawZO2eErZ85X8iCG7N3pUEMKLcsLjQAvYkrk8CQ1lH6U7A5SMpkz_-LJ9gbmIlcRSwx9rcCsJID6a7YJhR6hJIvos0au2E1VyAD1LmGXWLcH1_fXYlK0m6JxZNS8gEzwbVioJ5U0Ov3SVqiMaAtuLWoaA9nAUPkX5oZUFlqOX4vDdSb8KMVKedC4Z0jcTXt_m-pMKePiAuotlNmd7GzWV0i-29IaXKuQPHBqyHW0HIKQ3oY5FMh_zn1HZJbpemdD75CkUVUsZ_Yrjgkm7r4_-wLs5lnlpHHY8woynWcSY9_hixmPJrXE54MtKS92-Be5xEJoxU_zax4-kzLbyc8D0BZ5OSnFN5PAScTJSJcII8uRLobU70_MmchIdHa6gEca1RNJxyV11Hd5B9lpfBNopX5fMHv0EDg3hKRIulDTjTZbrK9qLcO0LQxLfEl2cmD4-6RB9sPXB4sxOuo6h1Fo6SeHzeFsEnqqxVsq0OXmLlu8ZLm8bv5SPbyO6sj3l2YAWZIuZCpOcLedPNGYY0WCvXPR5i4RMa9r3o_fq00mqELYlyRFrGiwOoM-rfrZWvNg5R-6CRZxca61cXUiuVXAittAxyBZpljc5R-ZWc2Kz4hkG4ZIf7OIb22S8lRRupqJu6piuJDCZYyV_w-T1WmMxQc1QAM5iuXS7xq39jUVh-fXZ0_b5v5saanSGuZYuGMNjgjCADxMk3chZ0QGGBjdWqYYI7eu7LSVHoeLV8fOhONDd2iAy4iFekcSyANKCCBVuAbfXx8CnuJwLTrIDUGgWJRYev6O8uGTLmiWL-UMmn8bgVzYaGJ28R6F80-ktxr4hQom5cw7BvZMrrjHeZ2AMKeOkeKTf23ixcv6ojyW8hGH2YcCUYk9aIqg8zkgRveUkP-7IPhRSseC5KB_TbCMF893xel-_PTfZcybrtV5SMiu3gvJe9VeXV3u4HMn6j1h1SKnxEs1_yA3_m_UU9a_ro6sgi7vGV5tVMwjoic3JrYoJf8wiDGGO_1K2u5Wab8e2xNE-O4PAmSDjm313_uO7NEG4qCkIG6CjOLvmb_TUqhpAP735iPaxp3CNrjMgnv957YgGEouTHqATZDAlIXPTXyGLRE-88WDzfITzDqUXqn4bBNKmqQdx74H4-lL2i-YiQngM0JvJSmDcd9JN1wTYr8Pyon5kDewPY5x1Cd0CnbtCXLWk-BytBvoni1S-ZrKnwWFMYSZvd5bABVwlluRibyeZ6DrE1zbpAY23gIy7n0ySTrPoKYgM4_elqAKwSAWl1nSLroDIfjyWCjBcwhynhgtY4WmW9p-H-4d9JSQZEL1FAdXd1jRF_L7FVH9ufTG1UZR_hBDs2ES4bGfWOMQ7OYZ9gwWBwOCmkhRICG6iKnrsUZ9gJ1Q5sktzJkrIOKWHB7veTa089s40vqizlPp08PB1QExa0xLiUy3RF5nmcFsz7LQVWhBZ0GfU87DRL-5vKKmexLCs3Kn5RkKW-YqlIT0JYjYwbnQg&opi=122715837
            - complementary [ref=e206]:
              - generic [ref=e209]:
                - generic [ref=e211] [cursor=pointer]:
                  - generic [ref=e212]: Advertisement
                  - generic [ref=e213]: Remove Ads
                - iframe [ref=e218]:
                  - generic [ref=f33e2]:
                    - link [ref=f33e3] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsvLYwhNARB_dfvQpDJ5qE8CmGsL9OX2Os_64stSqvxW1kHhmc1Yneed2gN9jVTFvm4G-OBtAiFo8z5ZjnHJ4sqAyypNuEGhfxfJme9dcXV9VeAzzkbzDpgsjplhYz63lun_LBk07m6lmWCq9JIhnyPfj6fj6fD43_MYzzvFfXgvi2yRBpRdI4W9Ffalr6lf8W1cZKs4WjErKd9EwJSDWwsoA20Jnw14luZ6kKemttbQMV61s8kcmA3lSq1ofKmeJzQNnN4w5fU3uoTtCvaAchZXNFIXNX01P5ifCrcoxVX1deGwHEoJF8LTh75cX2hwMB8iupREwaS5cSmZCgoaK9dECkD81a7JHIPKm5sNTmrYUl18h3jsr1RhRlk2stGkspz8O7yKxnQLu4F4FAsTUFXQmbYHMXfAEW9MJtE&sai=AMfl-YRx145jCIDhthzCNVodWh4qmNgzg8N5MYPeRmAYxTmKbpZdzoviSmQns_swqwEk5xeYyxm6bUrKmKc1sNjqMvm66BBx0ynjLUA4qjtF2WYPOLx6sqtGGp1xzOcn_4QFb3a4eyAHrIAH0gGK66K6MyHvnI5_nyevUWFpbwETT3dqTl50otOzosLHNYs8qYVb6JG6iWUHHP7vNFI4WoXo2kc0lc-ux0z0ARyd-B8D7xZFzcDGbiCdovPZkdjjuaSxJC7kUeqfR7qVF8-4njVQGNGGQmsVOQLnclOYq7YU4_xqF7fiSSlUlbOUWC6skMOy7qx6TGMdM-w5zx2M1SDiJ3RmzuSI_Nfli4KDl5aGq3UZ3b1JFqJpZJs&sig=Cg0ArKJSzI3KmrP2ZVTl&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://ad.doubleclick.net/ddm/trackclk/N720476.3919870FACEIT/B36811459.457367446%3Bdc_trk_aid%3D651753596%3Bdc_trk_cid%3D264856046%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D0%3Bgdpr_consent%3D%3Bltd%3D%3Bdc_tdv%3D1
                    - generic:
                      - generic:
                        - link:
                          - /url: https://adssettings.google.com/whythisad?source=display&reasons=AQSQ1KNJ5T15kn-N3iBgEVhC-RQ18mlcbU1p4kCEkhrjTKIGynjVffl_5IM6Z0P9mT360OpGtDSKV4myS4-w9s6oZ46v0AGJH3c5HMf9Ch0yobEmWc-UlO5UMzQkqf1Q0Vcp3mb3RU9lJxp1bYM84SSKjoyvyxaNlLoCwqhTmJHwzcvIvyV-JJxzsaucNbRs9-qs1yvA8wIOcrQISEMtDc8m3HQISj-1gCs69jvCf5lg5338AEevawdgsQAyf_NbleJce-4t-rFeh0l7_FJZlWadLZfIuDNqGT-BgMwe2M0RhwlzOKfW01b_fQz7TbYEG191UOkeCeSmuaIfpG8D1LCbvNCXCLL9qAu7JErK3auoNcY00NF6UWjLi5OeDBaP58QsxMvXtP3IcAGIVEaDsAty2joF5osMPHeKUAaraW3fDQXaFEeFqWJ-bc9BpRugtSmCJ4_K9WQ5IagNoXn6Lnaf6VAQMiyaTeVmZhliL8dQFqbVBm_z29zN37MRXZAhJ2CWvJn-Ow5r6dq8XMfF1ATdPbHC3SOv_-qPSA5tlQtFTFvp9cTWIbxgzdtAPuo3u_gIRkq5yaoJv66xZX-AUFnuWr1cCPeeCZ-QzAT4HeN_DXiq9JxQGg0J_GXq87sVX3pC5jUwAtI5seFouIRszkZt994l3Pa1QjP7Qw-vDCQ3S3lWSrsR6ebTNk3TBiTINArzEwWfZmPBT5m-YlWBRZIwgA--QL6m7lLePnswtNNdZGmCkaTr4ksT5CdtDOIPTlerdQsYmcoHClKtyiinfJBKhoGOpL_dMTWDYFmh5DvIQ4o2akdiU1JKCIKNbS8gzF2Eg9uL5R4yPxXPvdd9oVH0KA7B-QmPBeUy4YENuyu1s1h_dDr1Vw--JzHj6RNovTrUwKjfVs_kij4J7c9GG6luUOmg8Jtn33wAdhYbfFPrNMGq1p6Oa22u4MJNSRKnkpr0YdOEuGYffIINg7U_FN_H2N17qaK95y26pBcVffe0UfinU4wSDU5IbzoSRoWP9Oh4Z98MPMRQ3bwLL53aT9-uvmx5gmzw1iD-MHhKkN8MudPOlNofzEK-5mheXVFuge2XU6BfyZwnm_MKRH2-bsXGZNPPxcJCtobrt81AI-lZUrXfPpWraUkugM1oLWsSNSCghpMD12EH5dNMEnBkPTzIjfAYVsk0aM1dplp-4vWsuFiNfCBYA0m5_iMgoulhk9fU1NP21OyGNH5yAMOlZdB-vMaBBADagaCFUnzDGD4Fn0bmuHKWG2HJom-z0A-Wofm2wme7O8eDyv5B9qto1qOed4WI5lC89oCvRpyjAX1tReY-RJIprg5H_JnuJozAvFtyeVr-u5nkgTrk_tEvaBsSBjLcoGqH9kJKBxl3x1ReVDasZXO6m99j6YmKBiiaJmGSyTAU2LoT1lHg-XZoOb2mlpuyPncvQCY8LpwkCu8x3PLzeRe_5GryYlFqi6fSv0pf3M4ED3DqA_a1y3hpPukBQEf_gpTnw_SDVy9v8O8wCxP70HBfjzik3T7WRsf78NBz7qa9odo8mxZBK0YnMnsbmmT6p5fL86pwY1w15Hsg7fsQKENIHHPa7xUElZyWXpZpTVb39fCUEw1AiuTajerF0pZmkdf0KPcVGjawKk7U5L-HcgrbmoCrYRUk70XQ-AfxLOQgy14X4aOsL5cr7kKA8ogwDNXl07hktu1Iy9C10sMQOoO4zZmZpY6TSTZN0z_Yso5CpVBvyguNszDohyQsHyqa0WLIeJXnSVGCnzlUgC1j60VZltj6_ES40rJI4x1tZxOny2odjSOoPHxjKiEuyaS2vKGvQ-x60L6XJadOZCY2dHi6AN7BS3kWpntdO-spz0Ja&opi=122715837
          - generic [ref=e224]:
            - img [ref=e226] [cursor=pointer]
            - img "moba plus icon" [ref=e228]
            - generic [ref=e229]:
              - banner [ref=e230]:
                - generic [ref=e231]: Your 3 Free Days Have Ended
                - generic [ref=e232]: Want to keep the convenience of tracking Builds easily? Hit the button below to unlock Mobalytics+
              - generic [ref=e238]:
                - generic [ref=e239]:
                  - img "check" [ref=e241]
                  - generic [ref=e242]: Ad-free experience
                - generic [ref=e244]:
                  - img "check" [ref=e246]
                  - generic [ref=e247]: All current and future Mobalytics+ features
              - button "Get Plus" [ref=e248] [cursor=pointer]
    - generic:
      - region "Notifications Alt+T"
  - text:                
  - button "Do Not Sell or Share My Personal Information" [ref=e253] [cursor=pointer]:
    - paragraph [ref=e255]: Do Not Sell or Share My Personal Information
```

# Test source

```ts
  17  |         exact: true,
  18  |       })
  19  |       .getByRole('button', { name: 'Choose file' });
  20  |     this.addSectionButtonInModal = page.getByRole('button', {
  21  |       name: 'Add Section',
  22  |       exact: true,
  23  |     });
  24  |     this.addSectionButton = page.getByRole('button', { name: 'Add section', exact: true });
  25  |     this.editButton = page.getByTestId('ngf-st-edit-button');
  26  |     this.publishButton = page.getByTestId('ngf-st-publish-button');
  27  |     this.buttonPublishInModal = page
  28  |       .getByText('Publish pageIt will be visible to everyone via the assigned URL.CancelPublish')
  29  |       .getByRole('button', { name: 'Publish' });
  30  |     this.dotsButton = page.getByTestId('ngf-st-draft-actions-menu');
  31  |     this.dotsButtonInWidget = page.getByTestId('widget-actions-list').getByRole('button');
  32  |     this.deleteStPageButton = page.getByRole('menuitem', { name: 'Delete' });
  33  |     this.duplicateStPageButton = page.getByRole('menuitem', {
  34  |       name: 'Duplicate',
  35  |     });
  36  |     this.buttonDeleteInModal = page.getByRole('dialog').getByRole('button', { name: 'Delete' });
  37  |     this.saveDraftButton = page.getByTestId('ngf-st-update-button');
  38  |     this.updateButton = page.getByTestId('ngf-st-update-button');
  39  |     this.buttonCreateSave = page.getByTestId('ngf-st-create-button');
  40  |     this.seoButton = page.getByTestId('ngf-seo-settings-button');
  41  |     this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  42  |     this.resetButton = page.getByRole('button', { name: 'Reset' });
  43  |     this.controlPanel = page.getByTestId('document-controls-panel');
  44  |     this.headerWidget = page.getByRole('heading', { name: 'ZZZ Header' });
  45  |     this.documentDiscoveryWidget = page.locator('section').nth(4);
  46  |     this.cardGalleryV2Button = page.locator('[data-key="NgfDocumentStWidgetLinksGridManualV2"]');
  47  |     this.addWidgetButton = page.getByTestId('add-widget-button');
  48  |     this.dropdownMenuWidgets = page.getByText(
  49  |       'Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards'
  50  |     );
  51  |     this.headerButton = page.locator('[data-key="NgfDocumentStWidgetHeaderV2"]');
  52  |     this.inputCreateSaveModal = page.getByRole('textbox', {
  53  |       name: 'Page Path',
  54  |     });
  55  |     this.buttonCreateSaveInModal = page.getByRole('dialog').getByRole('button', {
  56  |       name: 'Create and Save',
  57  |     });
  58  |     this.documentDiscoveryButton = page.getByRole('menuitem', {
  59  |       name: 'Documents Discovery Discover',
  60  |     });
  61  |     this.seoModal = page.getByText('SEO settingsMeta titleMeta');
  62  |     this.videoButton = page.locator('[data-key="NgfDocumentCmWidgetVideoV2"]');
  63  |     this.listOfWidgets = page.getByText('Card Grid V2Cards displayed in a grid with title, subtitle, and image.Cards');
  64  |     this.videoWidget = page.getByRole('heading', { name: 'Video' });
  65  |     this.linkButtonVideo = page.getByTestId('video-widget-link-button');
  66  |     this.inputVideoWidget = page.getByRole('textbox', {
  67  |       name: 'YouTube, Twitch or Vimeo link',
  68  |     });
  69  |     this.headerDiablo4 = page.locator('#container').getByText('Diablo 4');
  70  |     this.header2xko = page.locator('#container').getByText('2xko');
  71  |     this.headerEndfield = page.locator('#container').getByText('Endfield');
  72  |     this.headerMarathon = page.locator('#container').getByText('Marathon');
  73  |     this.headerRiftbound = page.locator('#container').getByText('Riftbound');
  74  |     this.headerSts2 = page.locator('#ngfdocumentstwidgetheaderv2').locator('xpath=..');
  75  |     this.headerOverwatch = page.locator('#ngfdocumentstwidgetheaderv2').locator('xpath=..');
  76  |     this.headerLoL = page.locator('#container').getByText('LoL');
  77  |     this.headerValorant = page.locator('#container').getByText('Val');
  78  |     this.headerPoE2 = page.locator('#container').getByText('PoE 2');
  79  |     this.headerPoE = page.locator('#container').getByText('PoE');
  80  |     this.headerDestiny2 = page.locator('#container').getByText('Destiny 2');
  81  |     this.headerTFT = page.locator('#container').getByText('TFT');
  82  |     this.headerZzz = page.locator('#container').getByText('ZZZ');
  83  |     this.headerHades2 = page.locator('#container').getByText('Hades 2');
  84  |     this.headerBorderlands4 = page.locator('#container').getByText('Borderlands 4');
  85  |     this.headerNightreign = page.locator('#container').getByText('Nightreign');
  86  |     this.headerDeadlock = page.locator('#container').getByText('Deadlock');
  87  |     this.headerBazaar = page.locator('#container').getByText('The Bazaar');
  88  |     this.headerMarvelRivals = page.locator('#container').getByText('Marvel Rivals');
  89  |     this.headerMhw = page.locator('#container').getByText('Monster Hunter Wilds');
  90  |     this.inputRichTextWidget = page.getByRole('textbox');
  91  |     this.descriptionRichTextWidget = (text) => page.getByText(text);
  92  |     // this.descriptionRichTextWidget = page.locator('span[data-lexical-text="true"]');
  93  |     this.richTextButton = page.locator('[data-key="NgfDocumentCmWidgetRichTextV2"]');
  94  |     this.staticDataButton = page.getByTestId('toolbar-plugin-static-data');
  95  |     this.dropdownStaticData = page.getByTestId('suggestion-static-data-menu');
  96  |     this.perimeterMapButton = page.getByAltText('Perimeter Map');
  97  |     this.closeMapModalButton = page.getByTestId('image-preview-modal-icon-close');
  98  |   } 
  99  | 
  100 |   async updateDescriptionRichTextWidget(text) {
  101 |     await test.step(`Update description in the rich text widget on the ST page`, async () => {
  102 |       await this.editButton.click();
  103 |       await this.inputRichTextWidget.fill(text);
  104 |       await this.page.waitForTimeout(1_000); //* deBounce time 500ms
  105 |       await this.updateButton.click();
  106 |     });
  107 |   }
  108 | 
  109 |   async clickCancelButton() {
  110 |     await test.step(`Click Cancel button on the control panel`, async () => {
  111 |       await this.cancelButton.click();
  112 |     });
  113 |   }
  114 | 
  115 |   async addHeaderWidget() {
  116 |     await test.step(`Add Header widget on the structure page`, async () => {
> 117 |       await this.addSectionButton.click();
      |                                   ^ Error: locator.click: Test timeout of 90000ms exceeded.
  118 |       await this.addSectionButtonInModal.click();
  119 |       await this.addWidgetButton.click();
  120 |       await this.headerButton.click();
  121 |     });
  122 |   }
  123 | 
  124 |   async addRichTextWidget() {
  125 |     await test.step(`Add Rich Text widget on the structure page`, async () => {
  126 |       await this.addSectionButton.click();
  127 |       await this.addSectionButtonInModal.click();
  128 |       await this.addWidgetButton.click();
  129 |       await this.richTextButton.click();
  130 |     });
  131 |   }
  132 | 
  133 |   async addHeaderWidgetOldGames() {
  134 |     await test.step(`Add Header widget on the structure page`, async () => {
  135 |       await this.addSectionButton.click();
  136 |       await this.addSectionButtonInModal.click();
  137 |       await this.addWidgetButton.click();
  138 |       await this.headerButton.click();
  139 |     });
  140 |   }
  141 | 
  142 |   async addCardGalleryWidget() {
  143 |     await test.step(`Add Card Gallery widget on the structure page`, async () => {
  144 |       await this.addSectionButton.click();
  145 |       await this.addSectionButtonInModal.click();
  146 |       await this.addWidgetButton.click();
  147 |       await this.cardGalleryV2Button.click();
  148 |     });
  149 |   }
  150 | 
  151 |   async addVideoWidget() {
  152 |     await test.step(`Add Video widget on the structure page`, async () => {
  153 |       await this.page.keyboard.press('End');
  154 |       await this.addSectionButton.click();
  155 |       await this.addSectionButtonInModal.click();
  156 |       await this.addWidgetButton.click();
  157 |       await this.videoButton.click();
  158 |     });
  159 |   }
  160 | 
  161 |   async uploadVideo(fileName) {
  162 |     await test.step(`Upload file: ${fileName} to CDN in the Video widget`, async () => {
  163 |       let actualFilePath;
  164 | 
  165 |       // If a file contains unique ID then create temporary copy of this file
  166 |       if (fileName.includes('aqa-video') && fileName.endsWith('.mp4')) {
  167 |         // Copy file with unique ID
  168 |         const baseFilePath = path.join(__dirname, '../images/', 'aqa-video.mp4');
  169 |         const tempFilePath = path.join(__dirname, '../images/', fileName);
  170 | 
  171 |         try {
  172 |           // Copy file with a new name
  173 |           fs.copyFileSync(baseFilePath, tempFilePath);
  174 |           actualFilePath = tempFilePath;
  175 | 
  176 |           // Deleting file after test
  177 |           process.on('exit', () => {
  178 |             try {
  179 |               if (fs.existsSync(tempFilePath)) {
  180 |                 fs.unlinkSync(tempFilePath);
  181 |               }
  182 |             } catch (error) {
  183 |               console.log(`Warning: Could not delete temp file ${tempFilePath}`);
  184 |             }
  185 |           });
  186 |         } catch (error) {
  187 |           console.log(`Warning: Could not create temp file, using base file`);
  188 |           actualFilePath = baseFilePath;
  189 |         }
  190 |       } else {
  191 |         // Use as is
  192 |         actualFilePath = path.join(__dirname, '../images/', fileName);
  193 |       }
  194 | 
  195 |       const fileChooserPromise = this.page.waitForEvent('filechooser');
  196 |       await this.chooseFileButton.click();
  197 |       const fileChooser = await fileChooserPromise;
  198 |       await fileChooser.setFiles(actualFilePath);
  199 |     });
  200 |   }
  201 | 
  202 |   async createStPage(uuid) {
  203 |     await test.step(`Save the structure page`, async () => {
  204 |       await this.buttonCreateSave.click();
  205 |       await this.inputCreateSaveModal.click();
  206 |       await this.inputCreateSaveModal.fill(uuid);
  207 |       await this.buttonCreateSaveInModal.click();
  208 |     });
  209 |   }
  210 | 
  211 |   async publishStPage() {
  212 |     await test.step(`Publish the structure page`, async () => {
  213 |       await this.publishButton.click();
  214 |       await this.buttonPublishInModal.click();
  215 |     });
  216 |   }
  217 | 
```