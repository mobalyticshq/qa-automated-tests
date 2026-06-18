# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf.test.js >> Creating ST Pages >> Create a structure page on Destiny 2 project
- Location: e2e-tests/ngf.test.js:221:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
Call log:
  - waiting for getByTestId('admin-page-st-document-item-card').filter({ hasText: '/qa-automation-st-page-8c969aa0-d81f-4660-8cb5-aaf89f6cf900' }) to be hidden

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /destiny-2
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
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-destiny-2&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e108]:
              - img [ref=e109]
              - text: DOWNLOAD APP
          - link "News" [ref=e111] [cursor=pointer]:
            - /url: /news
            - generic [ref=e112]: News
        - generic [ref=e113]:
          - button "Remove Ads" [ref=e114] [cursor=pointer]:
            - generic [ref=e115]: Remove Ads
          - generic [ref=e116]:
            - link "A admin_auto_tests+ns@mobalyticshq.com" [ref=e117] [cursor=pointer]:
              - /url: /destiny-2/profile/rich-flame-e3lwjq
              - generic [ref=e119]:
                - generic [ref=e121]: A
                - generic [ref=e123]: admin_auto_tests+ns@mobalyticshq.com
            - button [ref=e125] [cursor=pointer]:
              - img [ref=e127]
      - generic [ref=e129]:
        - link "Home" [ref=e132] [cursor=pointer]:
          - /url: /destiny-2
          - img "Home" [ref=e134]
        - link "Profile" [ref=e137] [cursor=pointer]:
          - /url: /destiny-2/profile
          - img "Profile" [ref=e139]
        - link "Build Planner" [ref=e142] [cursor=pointer]:
          - /url: /destiny-2/build-planner
          - img "Build Planner" [ref=e144]
        - link "Tier List" [ref=e148] [cursor=pointer]:
          - /url: /destiny-2/tier-list
          - img "Tier List" [ref=e150]
        - link "Weapons" [ref=e154] [cursor=pointer]:
          - /url: /destiny-2/weapons
          - img "Weapons" [ref=e156]
        - link "Builds" [ref=e160] [cursor=pointer]:
          - /url: /destiny-2/builds
          - img "Builds" [ref=e162]
      - generic [ref=e164]:
        - main [ref=e165]:
          - generic [ref=e166]:
            - generic [ref=e167]:
              - heading "Structure Pages" [level=1] [ref=e168]
              - link "Create Page" [ref=e170] [cursor=pointer]:
                - /url: /destiny-2/planner/st
                - img [ref=e171]
                - generic [ref=e172]: Create Page
            - generic [ref=e174] [cursor=pointer]:
              - generic [ref=e176]: /z-qa-test
              - generic [ref=e177]:
                - link "Edit" [ref=e178]:
                  - /url: /destiny-2/z-qa-test
                  - generic [ref=e179]: Edit
                - button [ref=e180]:
                  - img [ref=e181]
          - iframe [ref=e189]:
            - generic [active]:
              - generic [ref=f74e2]:
                - link "Advertisement" [ref=f74e4] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssyqZpqrMu8Vps_qszawkUGhPKtIu4QMyMPZEtCyvugT-mcfTuG1Fj_2gkxRbBfiE1NQL-UCAaYxxnUaIdp5eokEsz24vKIfhvuLWJJ3cZh5CCDiL2-v1MIVQiNd9ouEhcp8FL6pPcq4aX4qtnV-lAXv9yh47qPSPy4d7ffPFviJpTTOEHz7HLvO6kSSgm_DjDGbRnKJrlh9D2uRuo40unTthub5eJhISys53pjYuFDPoMhEqj5brnGXH8wbNFvRO2e0aePZ2lS-o6li4odQIslbUHxWyRGc8K48Dt8xalFxVtL2U_QT-9JTXfK__eYAnDZZ-WudjlYqdkD5GtQsFWaqpL9D6Hsf6Wg7zEF4Wg98_nMcAZxMEA4B5BqdXDw2_m_5dmcy-ycLOzBjKDt8TKd2H4qW8NtZJbDHLuVUb3MR5raFWm38vtifv7Er1nvNavPNozr0ayQf_-M4DNwyuI6Sz0JTh0WdrfGUSco1Yt6v8OD4um-eg5jEz-T290c2pjMI7HNd2Z0lDU5d0Fvp71RbJdlENBUCMr2Ddb4nzawi8-j3XRVuDMxCTVwR1uikQq11UU6T7zLRKLBf_SGkye941kangzjg3WGXx1dKm_tBqPXQTt00Fi6kk4OtTkh7e_ZFaQw4StneAbGwfwwXApMzck3504NK4VG-NwfTUIXODOX_p9s2Cs4LJXVWjTp-Wm386uWERCL-RhNtzPRb-Th20Jl_EEX7rzgfW2b3rpigVQYl455rxx6ZAR0qTnneKHETk9rfYmscgb0NhUEtsxZVM5_hKOBTzypWSdj6jylOaQSPpD32pGXpTJuOCEIvLlpZladQLmW1T4NN1qPwpx4FwDABep5H9tKpazBNhFqh4YOpwfw7PIqasZBfFIrw5fLimdU8dtmVZBdMWEA1hgI_DB97p0iwlappMbEnfn4Lx3A_hO0eQL3W_fXv2UFa5qAbdmeda4BnUZmyCes59-546WyyWP8o-Q-b0dTUioUzEDVwKzUX7h2cbvLHYt2snqUQ6l-R22NJTLzMxvylv88tqKGzgAyLS7CplBadl_JUuRmS6QaO6B5_XzixPPPSGljM42Z5GzPnznJKK5WJhYGlvmEBKnTeZT4UwxpLP6vk1bdZBlFubXkSLDcjaVqcMMnPj2QdcfeHDndo_ysFGwCERiMYJHSRZ3F_FulNyL4Bant19zyaQ5vrgD2ey5QHpYBtvpkFmtGa3NwumrxlfuePcTNF9OXOaW5cg9RpUsViyl_df3TVX0xLCUzY1ZKGpwu0M71a1kw1uOZhSXybMSPQaxUsewJtoutrrNQVvt95HK_rg_ExX60CgGyLQdg7Puny5VRt8m0VAirV-EBzOkcWjZyt47IGUal3857MKTOwJkGGTgxTPIZpbq0XGrynN4qZOpiuTnu9t039hG3XBD3_Sm25XuBxZ8SsGNb08QfAMXOdH2VQjvJF-D6ovYvYa2vWPm6tGLawN2oKen8cORUQy3Uwwq67lSe7EmZd0_45dxpRr13kpeE-cHgY48cX1Z1Rnez59DKssa4zbTBrvpDvWavUAdzUYyYd7QCwXezd_qyk6dEmJMNgJVapYqv7o0Mj9S7z1ovCoIDKdbX0l9fx_D_AENsuTVNwcNBQvLZ-Syf-7Wp6Td0SoivTArXUkGjGr5mjbmAIkvPenLQ-OyosSwTBCo1xq0bDT63oaw12Cwi_eI7nu1v5HD3RTGzcPohsFP7S2WZbw2Tc7y2PYfaAvv3g8grF5aJWtFmvE_RzaSmu6NfhFof_BCa7z_VmAgLyqSaM_-jO3uIwxbUtPNGsKM9HVN8aLmcq2eigA7rBXXt0quKJHw3s3YEScc2-1zsGOhlWGLvZ1GbPgOdtZcC9UQkHbA2pHigLuY392EVu7whwEPhXrm4Mf0OVNwDMhYWzg1cbzPsAeQ0WQcrR0O7xaT4Int6h60arxD_gU-Q31KIpHVoL_bZe2ey_25_TOj9cLET1VcFl5YV3etjjizH70oxQlwZ_dxlyQXYy1yI-86iZZHjcwfr8ba3iDGNfAXSdt0dA-9dkFKcO3JsbXNrnPl18G6SqgkPy20kuX4KSRfRXeQUAtODpVJ2s9XwuFGruMKsE9zoA6SXn_g24rbhMFilknPOc_LGKAPLZbWfirwi-Yrb5TBTc1jISmig6hqF8AZE_7i0ykKMb5MFscvggck&sai=AMfl-YRno_NWMB9S2xd-8gKdhTu8G_hNdt9A3p7O2UnqiE6TzH0O8hEcRXR4evbp2OW2SpE9baFDTzbIBNytmrjWx7bKqRgHf-pWLIszHYWL6J-oNFZO_xb38J2GDKaPEGCWJl4a58YgRgueMOyiYZkXWqiUWl1ot_z-aMz2I0Z5Fm1pgKIaW39CNOlawCdxLXi6C9lVpQ0b5dtqSnF1ilfqaFV-UuUPIzl9D3n3dlHZ1PYjKbucTGrbBIy8PZHy1T19KpII9_kd4BiuUyd3YozhmKjewPjYg-xMI1KDjjh5-frE_8qceX3iOeC-aqDb5FQkV55IOuojOl3gtPqADbY7BK1rC1tDoro5mvtVFvBhwRdAgdVlDg8f7BjaNn5WL0reCdggAWrD8vmGVQ_Z8zjm74bioFRfB3YJ_M7RJ3eeX0Y8IOC9m7Z7pRHlwqXgMi-30uma_hlYaeCPlAWjLfiNFuITt7YCfni9rGHEonjYuQ1xC-gV-hjd_iwNme8gSTBmfu4sU1UwUao-PPz7S6s3GdCa1o-CEF2b8XtfnpNG7z3EVFPK4Khj8MFp29cQ8P52HKevLJO-C0JeG4zilNeNG4mgC3D4pq8W5kzCcNQZKIl5T8BIEygHW1tD21Djlbsx7UqsTFpg6VtvZxBBfIMaUJ7BHOyqJ9MD3lckxE3kGCsVGZOEm-V2BM6NHN6XUftfof-DiaDV5gGTDjxm8Vjpih3HOenofmQ4ylnG6T7dDjbZVZp8VsrL-wVcIT3viZhklPvW_JFdwAzvibN4K3jAzmgl1caaUqgcjbyvH2aIQdOnfh1xMqo5wH0113W9FLR-fDCUBIHBSr3M97iqzrg5hg6kOKNiHLQIpPWeJlloY-fmQ4lM&sig=Cg0ArKJSzFMt1lMmh6_p&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.fairmont.com/en/offers/endless-summer-memories.html%3Fmerchantid%3Ddis-dv%26sourceid%3Dfai-2605-fairmont-summer-2026-us-en%26utm_source%3Ddv-paid%26utm_medium%3Dpaid_display%26utm_campaign%3Dfairmont-summer-2026%26utm_content%3Dus-en-all-all%26utm_term%3Dpro-HTML5-conversion%26wiz_source%3Ddv360%26wiz_medium%3Dpaid_display%26wiz_campaign%3D724827218%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23848686397
                  - img "Advertisement" [ref=f74e5]
                - generic [ref=f74e6]:
                  - generic:
                    - generic:
                      - link:
                        - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo9kjfwVxU_N-woqyFmSV4fRqru8stqV0Bk2_a-m-LGPR9_fO0dUCOZTwYXCRZj_8LxWzzGwQAfZAXm02u8k_RlyEJoLzGGavWn-TReZol7L8rBui0x196p1MkLHGMZVsupbMgYJudLUSF_DdZDbhUsGTD0DLBR7-kwum7t1WECpjE_rOc_RDAtKL1nwo_H7nGNCBjbn4l17g_AwSl2arhyCheUwkzan2hCPdPkX4NS9ASG9ldY13uJ1byiBKXD_NjWXJIBZwE_zuP3UXiacj-AghRsPCKAT8_5QIeNvRDOSFgC1IzQMxtl52MUNbP25eX2HIQm3SjpbKps_6k1KuHO7kSZmdnCDU7zctubwDrilWh2Xv7TRlhnAkggsa84eOu23tWzdI33NCDEo7iZw422Yec9-r8K4iBIjxJ4aWAikhz45bwcoQN7aLVjskX7tOiaItGZeDlznA6UOoxV30yxFrENIJUKS9t_dOCtwsaVrfbDrm5IHkzcNxz2eIxl5qPFqFSnrkdv-CnO0pbQ3lxeR9sgyUmcbFEjJB2aVuIOZRldTpIzG4mIDJzRdyxZ_8hBgDIDby_W_Qn_VSq6RfSVB_b8E80wkmrvHaZvNzgGkvfTgg6kiaAaty896QVYZjAJECpmPkT_3RXWsuX7Y5TPOuQMFOgxjTc453iN-o93bLalAscQHTSeIkA6ZZs5valaKttVSdkZYZjP6F9FKwjSavMlsJRp23CrwUH1a_DKyHDVdo0eKu180kbtI76C9hukyes3gMaRFvgOxAV1uSbP15gUteDHAvaA7dyCCgZ18ty1uw3Cp3u1HBnTBweM_rwSRP-4dX9KqfCu7RtABtfoFgvZ8hW1XcdbHiRfxvRQpUdnGE5TqfpxViiWIDsGCGz8AJpZATGuvseJM6-9HcJBsBX4Rw7ZS0EA314Spshm76zrTHqfjQmrNeWfdaYr4MP5XoTyFkJKsb9ap_SbKCjLKJtFUFqNrKo9Yzj-y79B8-SHcgyHfwykW5xygCArn59D0etZNc-UT3cn9cNroEJrHqfxpQp3IHHyNM08sgYK4gQgTM1F672MMTZeYgL45lMB7CKLIzzahsB1Lndz5wdmCtsJvT_aVcXth753s_40ZQsZ1NMK3f4ozFD47L3jNzkEY22B7gyieEfeQ2cBgJ2AcC-eGOrVdOKislP4SX3rpojy92zn5X59xbqq3tbSjf_HncAMsE-IIh0wqZEGmlKBKjtgtQsX1R9EKgwrmC7N1iBMxFoCiRWZbCYBkO98TY9B6bgdK9XlAHtr6hNxMPgksqba2aNzYRUy4h7wodf4GS75lIiG3AVGEhTU3gYt8piQyxfLkzEu_RYj6Y5e1ESf4k-pbttgB2oGLHI6HWvZjlgOyXRGq6WkuOzGpANuEvHzz9R1sHRaQuTDIX3ljonqo9FWNAPbDj_hvBYs1pT9fIacAEA6tf1HcDcGVU1-FV-IUqMgaiblnqRR6IYLUSQT7wEj9LZbZGR0NV2oPIb1qQIvZGKYQ3uJU5RSOEiDNItTebxALkRiPnZWaN-M3aOw6Pb4T6i4y_LKX5eIrnMPkkCZAqsGc9lVhEpJwewioEMjId1BtbvgQ1AUQxbaPcq0YYHisrhBm_63fXF8C329i9SQF1nzdo9SThOTKh6qvP0IdiuiVUhjusNusidIo7PFYtOdaj86W58tfMRsIwR9c-7kpO3w7IG1ckg-ZpNxe5Q-GJr4J7VinXj49lPBjOTBBV_MkSlmFDRSZ_tCpAVutDPw6C_ACD8JzXEA_-NyHd0pwFWBZj7c22wFdFc15Tyu5kqAs34IaWBC8HECZTla03FWNc9q9haK8qLQ-bhTrGB0CxGF7VxgCJUrHH4r6BNyzhU55jxcwssxbUPPjECK12h45v6Jof6_3EXChetQnJErXNwLVBTiM5y26uNF4ty21sxMlwCRkAXO1JO99p-NriV6V5Flx60tuF-Wgg_XP9B9k--SEbu-actjt9tbZAkEDDnxkSCtBbISNZrSMTgO6atriIGl1qTcgXcogM_xZN1s4-CSpXlk_QSHtBS1jwM8CDNdu0oudSBsZ8OrqU7kVyWqobgJ2jK3xozbk5G5pytD4SvkOMtnMoSav1qoow15sCf0a5TvJCqRVtEgpUgNrGCNDA3n0EhiAYSBxZk-tidexvAi_oQX67M4vYWfzbQgPYclm6dlL4l5IueFgOKRxEdd5rj4HC0RWOvqhZrao1hlr9QqBFjHNH0XkmvrwOvdJhADvKBwtq1oR9YMQECWv_A9iqn3_OJMw4dqiDK__PozqrhNrpc4GL0uFLLoEllCgcm5jSRu7TtrbxIvgcxzoYDgYwyZlWCPba0a6jfrFhIgxt0hKPsCRMaeYnrp6xUgDc_NsyH826j-Dj9HZ4MbM6v4YuBl-A9QeZ2J1hcQi3galDzlaXhwwmTfB4qu08Q1aDWNgwVqYQajbKVEABozKARX3W83zgYSbMPxmB0-T1jHGvO8r42ETcBpsc-UGGLiBlB4nCSA6rQ
              - iframe
        - complementary [ref=e190]:
          - generic [ref=e191]:
            - generic [ref=e193]:
              - generic [ref=e195] [cursor=pointer]:
                - generic [ref=e196]: Advertisement
                - generic [ref=e197]: Remove Ads
              - iframe [ref=e203]:
                - generic [ref=f75e2]:
                  - link "Advertisement" [ref=f75e4] [cursor=pointer]:
                    - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjstBvkgSOXgzuzToQh2CXUZWBerHzEPgnFhVO_VXIlXihKBa_u5CutAWkdyEgzkj8zilur73WN2E14xCiyFTrnNT-YkmYI2eaQ3ff0JBlhxS59E4zBoNdTj2SwcsBOcqOqh7P7ml2qBmOh1X2teYkGPJYGSFFWRJgvHAF8YK4TzR4HOK6yh0NvgRh4Z-4tpImk7GmTaxBEim4D6EjXXcQcNO4bvouaD9uJWqmP4Is_eoluO7EKDPUKhh4ZwgDzltntxuMaO1IX2OAdpXDudlLSaBVj_DBUdG_ghwOrTYhM0FqUfrB_VNHe9yDKyMwoWhXY_NGF3Qu3NkQAm-ve4AlVU_AZpr8lnWjD20zQIJo7wAGw0JGr5RBugZdpqyS3dayB8ba55zOkxyRnWfGie0ChPDieYtFbNPBe1dNp1kzG-Rb6yCF6ge6S9X7Pj_eG_UNVjRsFVft7nzP887x003ZTP5BDerGiElkUFOoQYZH3Ng11LvBrQm90wJkfWSQdi8ha_VdtlfRCH29PP3l8VovPJHj_kGF9RCiRZxoTbCvb2At6Y24T1OtnA8P1TIU1mrli8PKH6DSkLLVezgKo3jQj5XRNNluwbzXV871j8fgvP3ZNT_rZwORWM7coR6KTUjUPzfbjTpZKZ-XH3EuE0Y-eyNi6O30Afsk2t-LSLxU8tv0M7akTFgHBheFl47Ej7ih63vDRgtIcGl3QWqfMO2C4YZdBMgT3Ts6SdhEAq0EAet8qYZ-ZGq3yYz_a1k63XJ9nVX5V3olQeA7MBbTvmrI_yB2s-MS5t46DQ62zPHFhdUrVspAaIZJkDVFYNF9zj3gpTkPIyjHaRb2d_zpG0XIA8Qt51QEiPyD4uz2hLszzglOWzqc4kuhbIqt_BigFDcKcfPaElkvDRMHNXcyB3tuI-qYl9SxSiqpmgq3iMJxZjK0rQW-7FLHn76OmB8uVqwFvhPi06lInS3GEgVuXCRQcDOAEn5Fjzfgjwcn3xsHVV_qzdpcpgTKJcuz-JMXjgyrBNlbzqfaaVQsKaZB0FCfW7cLMSxjZq-Rn_Q6i1nnLdof9jh4DGCtmDsvcytwB4tVXTQTTVCWIJod1JD_pQD1D02YtH9xGho6a9qbWE9NiSasBct20XH3GjIyGrx_DN-bfsG-K1seP1rJzTsY7ypMfoKtqMzSCZyCpRmKb0COyu0iXB5F4pdIdXzdPIFgDCoDmQZATN9nbe1NnLLA1CcrxLJn1Njs43w07-urAMB7KbjVUbqn0oKTSt5LFd-sNogbTPSQgOcfizkvw-a7jb4ZI75i_Kzr7xu-y4rZeuHRaGfJNrJWFnWYXvd32zVFtM1rvInJZuJiNDWcdJDodfhxyrFbNfk1Ft3ysjNs635RZO1tw-RJMf8yy7jtfPkFgEN77pP_C4YGbw-4U-1TTwx5AqwrlaSPgJCID1Yjf8Q_0GfqoQqEyTLZOYGf2vcp7u3CfJdbCINIoAcpOmLfYEpAZiSdChi3AbYafXI4Ciyz_tdZb2M0fNhHXvuf9lPfJ_u8jMncAnCZRGUitOdhwiVaZOZUJXkci8qV8WoEBW-bBaZMrYGTpqFbrJw_nDhIx0FKWK1mQ9LGvKaI_6Bnrjsswd697ugWXSZXzsgJVmn0CmoddQaTHCEJB5p0s1qabNHr9EuB1E_66W553icy4xYsVS5U2E0A3ewjpv4I1J1r4FvPbp2snQMu9L6qYq3Ex4tSOidnQf0QGgrEwE2vzpkV9u4N8-rY6qCJUOBukTPzKOpUPqVNqXzKAjPcO5lgysHHA-7q8B8FJkXNZJ25gYQyIHxJucQ5a8Z_e6K54uG4b4zsOXZ7WDb9mr3F_lJoly8j_RQqe9PEYlHhNtjTQxZEQjA_ZO8EABR9OOU9QaLE2lR2SYlzmjVQp21HED1fwz-IpyU0MrtxXAQRc4JRnGKPUH1taacA3urlDMWcHfECbiM7jS7CopQ0Ti3fjAZ4IuVNOEiBeCrfMkbsC47VwNu7lZm3BgcwcrjlZsbc_FayRLXpSeFgruISEtsKgiq9dSIjV06eTnRBfw&sai=AMfl-YQr3hAa7k8lIhmXr8mLUWBa3wq-GahpIe7vxupfyeG9ekuPHyr3TrPNjNrC9auRZxxqqyZPq-5H9eIAq6Cclcqp2l4UZrtlaorZP58Y3H08596kdPUMh33ulbr3uWFNSSeDjFbvLayoQTpZuF41_TKQ7Dxq1SnteAoLJliqS9MUDovp3fmch70mTiKzy1ileb6GtYv0TEHysakHT-Q9Zy5DpbkFjqSzELQfX4Z0QJmtaVQaFo-s1OemDpYsR4NmCXDVyBpBL0fiYKTbHRpZtTDTrsnp8A9jyVxzsDRrmRuWW0LtiUN4WPLkVA7Y5jaDdHwkkqwBRmxPfTIUk7rtT_7sHri-KjCb_a1NY719qZIGjP9-yLq0XIW2xO9caq0vLbxKWY2ArKEBYqj3IiTKCls37BK1dMwZZhqk3SA8tMDnLpunbj3ST_mrW-4Gt84X3_N_z5kU8LlcOSx_F_KndCdxCkkNTnYQCoQ0gBuym-KpBsFjyzEKC9sHeJUACVRpXS3W1m2de3YFbP-XmplbJT0YNuJ_aKJXyaZxlRyk5ezdOg2nZklGkpwYjKohW2djHHQfn-8O01kFbC42EJkO2A363Wh9WXf16PQixCIv76oSqRyl2RlVDoUcQ3MGppvoEGAEy5wBdtLikHFmBYFhiZEHO7Mv-yJHibdkkTBFvckjjcQfDhsQhgVTXHxLHHzy2q-UPPYqZC8zn9YlzOiqlKX5NulpgdfxRHu3wLERGQ56OZ1lRzuq5i0b7yfmTpkxnBOU6P0y07AzFl_kBoG8coQ2OwpbXTMuZriAaISwAfcePXlCb_agUhIRirjr5y6Spr9FjmRxNbztb6WMMWsBTw&sig=Cg0ArKJSzMayYd1ewc0x&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.amd.com/en/products/processors/laptop/ryzen.html%3Futm_medium%3Dprogrammatic%26utm_source%3Ddv360%26utm_campaign%3D26q2_glob_cons_ryz_gorgon-point_awa_no_1008171_havas_086jk%26utm_content%3D253995004-n_gorgon%2520point%2520launch%2520campaign_retail%2520banner_creator_300x250.jpg%26utm_term%3Dus%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23880644846
                    - img "Advertisement" [ref=f75e5]
                  - generic [ref=f75e6]:
                    - generic:
                      - generic:
                        - link:
                          - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo9iTnNOCwobD0AyF84FqXmoQzlXbeqfpIyDZ8izrs9cMx4cN92-f6pBPUeUJ0T8DskPfEeiKkhTBR2UYpLGY3dlw8oIXSaSuLTVucAqKggQyoMPUqRnIErGtyqysH1uLj2FjxVFukE5xygXBIPH1U3nNR7xfzW5Vv1VpeVJC3PqpPVXU-bJRiG1V3nvWC7m2vXPZaz37KM2BPEHQklIPi0HIq5oB1YDQJzcKdLEHCgjvjz6ThFHN6OEumE3aQTUcTtDskX2Ehm_mavi_0uVX011MLKp46wuB6J4rdFSVQXM3I9a3DowQwrO9D4aD1cRNOW8T1k3GYQoVWM4gWRRRuLp6mvwYaa5XkHUPtWiRzmwgL_75WKOcWkhkUQ-GTe8zY6gwDVcizC2-cvxtRPHE_fs75AL7PuTlEqt36SznU6x99nF_WsnpUgeWZv1uz8teaAo0F_rz1stLRLGfAtQeg0cHjo3Ef9JWg_YorsN_gY9fd4f8Q9XlEzANlyH5mKq4zcYxvTmJoXBHpXhA5URKko5TWLJ4t_sVlTlzWtrikFRdxBZUf2HZ_g7KjQnMCtZGBA-Th13xc7LrBAus3kXv17XCabjlbWrjfdGgDMhXXJOJlcWb0eq-rWm3pgWjMZRLF4ViesQBI35iSLurOYhOtrOKnubgwjt4OM2oNiD0Ou6y62lvyUQ8CpujBMxHYc7Nvg-YYPYL7W-i8E7rt4nY0NXMrtAAZP9lDBv4cBcIAE3fwmqBLCR_EYtNKwUw3fWyiRxRh0FBWWu36kMTy8j7DGb6QQTcORLIMI00aldoUsVzvm-Me8nNMlnbSpY3_fXiMeipbi-pEVesx5FXs5bVcraOLmdjy3LZu_vfgEik0oLTKB6nfXWXyJoUuYK6Gs26Q3D5PjDUeaHroH5rUOrpwNCXAO_GB374RKKyGIm72kunAew3VvoAGaMoHY1Vz8WG1Vk-smR_2qQsgkjk3NQ-rnvHjGmyOjbPWoeY4YXlm-mueo-fMWvzHT9jZb_9tPeV7D4opO7ZW-mJgkDJh1t41N7JI6s3FR9hK4XA0IBSQbeILvsidJfpO9EwiecMUWYaJK-J3uZvmWG9ruc0ccXz7trT7nYPDKmqKz36ZXe_6kC1d8x0cpgG0YbIGajLx6vnoaPuLISFMH_tN2L6xEGfiaKWjszG6yru9ZEw9l8tvAMLxxlZmmr1C4sfKEeZjY1E149Vq7XyJkzViNXmG4cdC0zhNQYIhR_o4-x6SgoRXecms_43yEJPgou3QYZ_6OngR8RognGTWsHWg8IVhG_86xCXHIMn3KgTi_7VsX92tTD98V-LSS2-OHFnI_cxmGXj8f2jOCf5XGO8JFaW1AmOqIs6-grhyq1T_5FggK7D2lwFNkutT8UyEbU2l4nlsiZtB27PfPAw8IVQuqKGPXeCWD7Lgh3-l_tBfK-oRkngToqZ2zwR_I3nms3J8X88y3mhDXMgD4K55ryePVeNj_4rsAlhjvhyQckWVHgm5asqlBRYxaxr0EkSFKansnQZsN2Nw1WJCazH2R887vZjKpcTY8YHBg6TvWlXl5d4ez30LP8dZ0Kkqu776-caSjQCDMpVjguqO92M_r5EIRA-z2BQGN_e4O2xUGDqCxpZhArg4NFlIIejSRQwREDYIIdZzg1U4eDMU3c8TyYu38wW9GoEHBYgTmUAT9zT-LBqtLwFIRTHoDsUYTBwKvmIq4OO1kqpaax8imgoYUGtBOe3w-d_p1mgr23EmZrc1h0PmUiZFwNlOsHIJYQuUIELTVVH76--nuX525ptP608OnlnctMYrkPG-hfK8EGMj8IYgiZp-Qap_TtjlgYwFOtr6wg21_EylBvr1lSKySvi9mPkD3sPiCwQHDwUl-X8FRwGy9qQGMXn1VwxWuVXTTYu6DzOWVcs6hkI3pTrJAIC4YfEGKG_LwqkTHCRlILvQMYbh9EP7Nm25RcC09-3rhStb2BP0YjYLDbAxAk_IGEx8eqtuTOvNOZ_qA-ekfddDNUJWzUEu0PxDHRg8KIqmnYiQqbjrfgFWVYTIp2UV6CQUz79ESyfgNFvxtqt116g-hVxkmDrLH5OrJt8vACSWXujcgyqxUSYOZ0cSRfx2qKehirwSmg8y6VyZg2PD0rcO_wp31BlSIoJt3fQPuGiP9Vbt3kvhjq_6R8Fs5aYgaoXAu7ejQWgyTVSRn7BCxdypgt5uZNFfy6M_qrF41BkyQZzqFLF56GweXHeZwZs3xrArhZ1REWAv6Y3QBpjLx12FD_Fyj2kYM4nNW7YYuSba5NhArPhr44r3lYtDEc3u4kBRif85astZN8EAPTzl0wbBgkW2IJNVkn2fAMxf8PAdrYJkevIPhOyV0o31B6rRydVQm6McnKz6Cu0_dGSvgRi09m0OW0Wq8fERjrds8VLFKyh43TimVQckmPPOz63e0O8UQMQalnkGnfuO3z-I68TRU-Tzks0glQ3wyfWdoQYeXqCYTOCT8oRe33Pl8CTBYbmkjFaSaj
            - generic [ref=e205]:
              - generic [ref=e207] [cursor=pointer]:
                - generic [ref=e208]: Advertisement
                - generic [ref=e209]: Remove Ads
              - generic [ref=e212]:
                - iframe [ref=e215]:
                  - generic [ref=f76e2]:
                    - link "Advertisement" [ref=f76e4] [cursor=pointer]:
                      - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuIhVWgTInUX0ZB30oIjDDqKE6_bol6XiWwZmJI9rnZ4g_DaY3wDkOd-ORL9GxS6BOwr9P4QCk1qp-SnG8lQdVjFmSI9pB3qWPAzXQyD6cU2-lZMP8XqGDqY_7XBn9tguYTT1Va5OxHh7WYaXE40K42PJGfwDR107SuBUhF1SGAe0QkTCDZmjiukmqCjlHZDoPSPYu3X6g8rElLaRusaCAnmXiJA99wGBo-NEn6xciy4oAtWFEvn8th99s3dClADyLN5hFEwcxUnGLk9wKqHR-4Knj-KEKOo4yYcwF_8R2_AcKaJhq4E9Pz-9Q2NJ6DEN0E129UiGJb2fPUztC4qLeteoQJ5zEWQz1wa5akV8MIP1rycdUTTUFm5eB1n-aoats1c5I-Dcl3hMv6PbZehXx79LXFctCN0UXogeZGAVFFPy0kFCoJ1-Z4jjIGprBw3FYoY_ptmjzjL_0KljsZg1okOP6GDzaR9dLMBt5RSKNYKnj23-gMAPD5U4WSl_vo2pMvSPzGM0Tu21_SoUUVBCnnrZL8YGc_vx4kqzZ6tpcoAnGRkMil1BCq_Rm9T0RDrZ9R4bqYHFn-44y0y9RylXfmGwZgPuEB70w_rkzgnpeNhEKv4YgfRVTb0mfDI3BQlqh9nUK13A92QQ5glEH52Sarln2VgYTyhTPS4o3sAfcd_EBS0tIbh15bitL0UCJ1B2KcjAalV8_EspoaNAOaK6RQMW_ZxjUIfgQ0NqR2ZPgft8P9YmiPac1noO9Xp64_CaTZTd9dxO2wGObvOvPFRxTmFC7YkllGadPbvQIoCaGURMvQN52ZjXF0GEkzjNUoCsw2faUJPLQy_ws-wSuaeBhWA__s2B_P45BN-4TvS44cC0NpdwFy01laEaG2lJpG96I7j-HufPNpt5odO8I2OSRWl0m3JrXtqKF3XPrzkH_1zje0s-aLsr0QNAxh_2aUmlMEstISDOPWt4rMVUr1U4YV9424BtwtdFEQ_0wmLe-067Wh4T-i-wFP8vTimsyayxCIwyU3A5b6B-utohi7Vj6y6_gj1vE6bq_WS_mVK7rppluR5BeTKezlyFNHPtX6kpkVN9tC3v7f1vxpdGM8Q0GhML9Pqmx-EBFTbwF3hP0djoz3aI0guv07Pr67FyEhMxMVzdMRHx5QfWGRbbGfGZPtbYL5fWM5rDPULGiDkZET4ENStWvfSsfsYl3MP5hNK7cAzFoJSU2kFV8-J7Mq8jVI0uOyoYsEPCBhF9rh1x7FySNILp1IkaApcow5BGURC3lJ-XgTI5bZ802ae6yvq7VelfBqBzuBhOC1aJOJvGRtDKk8a42lJGM2AMSn-B4iyrannCvXC7h8Ll9dnlN56PuFs--Y05XwnZ2MW29keEmMF53zUUtWu68yzUeV5weoeU8aTh4Bxs2muxB6FOLyAVyU8aOtxbexShvHRMFPJzReD8cQxCks1GOnMcmOKc5_mvYmRLaNa1T1GMyZMcceGwb2OipaWhcPmoT9fcBSK9bv8uzqKWX7jXaPTlWch2Y044-JmZrLQPzImztb9_5W24D-Z2I18ZrFwBYW10KHDDGuUfQRcVYhi27nAOvzZ8vIFKC69vQgoFE8Wh5rso-Qd1uQzWwdOIsL4Z8OobyMZ65F-KvMu15B9PTcs5-hgw4kwDpVOJkwWBDV8K5nOabP8W9CnYno9g0g3VP1QbAW5ZZwHi9HUAIvu9CwPqyiTd3G2QHwoY46V0LJy3fjEMiM02lqDhXekPPIZkmLVsHkqTxT75tax2YKgZ1jJzDGEkj5-zP3ASQ_IxqoISyn-tUVnJSoSlC7T4IgafKXPg4pqeAUMNgE5TgpEQ1OGnE8e9aNhkhNJjRsdy5sFJVt9pp-fjLhLbxeqnOVGL2uVOQs7Om8vQN1pzmFT4G5PPIo0SO2lVekNuOjqCrpuY7iDYkuRAgBWJ9obzDPCzbjfuyqn_0Rs_oqYMvKHR0uLCnghBtJDJy19EjlVieVpBNEYlK_Y9i_KGsc0xGV64VE2UBY4gqzDETxqSqrg5_xGHxASvdpZC-I7TJeQjM&sai=AMfl-YRtXqyx-f7GnZc-gellZRB1DHEjo3fS5agwvKgjip_Iy3SUNXK5nPLQU4QKTUY1AGvhGL9-RtrzLGu7vs3BQqcNNV297tU-mia-c4Gh0PY9RbaeMPGC2elux38l8NYeARMI24La2wuR7Kt_OkcIVgx9ESLESgFsQuEp8pANHkAD70SFCni5Fbt92ClRGCNsDciTOkHgrwVPJc3ClRoocYYw1Dl4Lglp-h4WPfWxFgTpnabeOeq2UxxDD0zplK2XLxV2uOeAHqFbhfe8oaIycOqy3AjUWivIio6auqXE3Y-RWZyH17Q9Zu7Laktpas61ODZdTdSwxHUPO1m1cJ2uF-Hdf-D1iWXxqrpW1JYaWuidEu0uNj8xPn65H3XkXMC8VhYecRvne0yB8QRDpuWuW-x0JQ11Pn7ANZnAADpen-diGYJlRTuyNg1y6dvqxBuvJjkgKGkBbdaECTmg51tu9ihOV2c46ruOQgvhRlV7iMA9DKM6Uc9z7x-JUclMKJnNwUAkdkRBcw6B8hA9pszcy45zDoAvwy6kYi7J8amf-P8hJnCVEWNU9E7AhQeOcadX0u4hUIxvZi5PdibQburccVFyWAy3_g9mFioJck5MGGPhgs0PK25KWqWoJiyXT3uwmGFd-kDj7FXBpCluBOFYkRLJxWtxpqreCekv_-dnEBkbPyOnJJC0gueMuS4uS16zh1cfqsFvX1dkf5av6YSZD_11L_XjBD--AFV4X9mRZheSrvnTbFYYFA32ufonxJxKtRPl86DJyRhU9rP4abMHsjiQIk5na5Sao2NLhhuAmprrAfm9oe3abyWo1XQos9Q6VKb5cUx_vi9soaqWuYzIwg&sig=Cg0ArKJSzJJNLX_v43Da&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.amd.com/en/products/processors/laptop/ryzen.html%3Futm_medium%3Dprogrammatic%26utm_source%3Ddv360%26utm_campaign%3D26q2_glob_cons_ryz_gorgon-point_awa_no_1008171_havas_086jk%26utm_content%3D253995004-n_gorgon%2520point%2520launch%2520campaign_retail%2520banner_creator_300x250.jpg%26utm_term%3Dus%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23880644846
                      - img "Advertisement" [ref=f76e5]
                    - generic [ref=f76e6]:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo_d15RIBjOSsDtZwuZUfuzKaUMHE5DW-A86cuGUnF6X0zBvNGFGScEukX2quEhoX7OMLnkCzVRZFtxBg7ygUcyL7MEi1f-L202mpn29xSM-_oCWlRj55gzkHdHSmtdp0sHy0hlaGuthKk3p-6Hbcku6jtfWbXT3s71DAat3vEoUw7gH6NzayYTYP3G7SlzSxB43VSxk2hTqBZVA48l5asOLV1dP_rG5HLrMMFAkFv6a72bJvdsbaDfivc2JjbKEEYMsEKkCzBv8vP3OWLc-mHS1NviB4-UDT78jFGHoPThz0sQvIAAdQzFtj4iA6MALojX1IDH4uZkSCsH1Gj6YluTQO2msg46_98DM6UKGS56WC99-Nf34tty44TaC_gomWQGeEWAwTPkMSVamF9uf75eXlUSopF1qV27uL95d3LEGJk8cTCwreH879_MQugaoPhqFAeelO7uDpCuxQcYzLKXE3UKI_Jtn9majt3z0XkgptA3M5mVJZtxNi_DdbdOGmbx3A-O6suJ91juf51t1JzH-8fCVQ5jOZgSGqAaNooR17Lus7wJWCBk9Y91Rw3TXCqs3X3tcUdCyRQg6SBca9GOWoAFR_3ohsuRlsEPAwXemwpy94cqz9lpDFWpow6e_a9niIotlF7IJyuRQahSW3Gg4cAf6sPnGXDr-nnhWULK81_KZk5q_7qbOZp1KIKra4TQtZpDzp2zvIR0wDKoQvhsneA_b5_qBMIGDoct3qLYVSENEBfC7N0ZnTwL8vbZDsnWgF-s55Eup6ej5U12Qv8IRwqioLZW0uOVzwbmhFWltOv1UmVqu-t2yW7zI63CHZMJzEosl43u-HyMRPT3UoMlnYnXlxJFmLxBB4BODP1BAjHNmvbmntCVIECit-vG7auf-0drH7jVFbNEcnXYJHEPs_4lIatijdQEnDzoRyCq2PzaDZ8QRo90hGwRj1AdYmCqn76oc-78me8TXVgvL1LrvV6hvEnjQsOMqwwPkqRQMLFMY4mjGk1D_1ohjNqg4LbYLtOqWXe3C4GgG7KV833yg3u-kp6viyWJdQthlAwOEp9-TEbAA9U3nHcwbqs5d09pvGoVqwPQgh0Nndd3_SlrXEm_GMeGKGD-h_vMaui1bYcowjs99DUkhNmwYS0aL3zsCILYNS1mxIWS6Bd8DY-w1L3ToCF_jFQ0DPcLDURmdyZQRtmWnwpyXBX8SHVgBv8ULnM2iC1sX9u3HZoyh1Ab5f-XqIAChuLs4W4GgesqJImc04N5uktGVDvxp-YrUPV2xv2QDXBLdN6wz1WdNAcgysG4ZHixxtPwJYBXjYRm93C5RhQ6gKUwlfV7SzV9ZhG6BLkYRJsG8HsC0xNAB0apW4EWVktnIDEXysYmp3UQYTNh3aThFWgERbJUgQHmUx6I6L7d4ZWdBOC9Et2hYzCpuiQiwo1EZ9jDghBgIGfIfKTCOXi6VqxcKFyYXGxF5_Mti4WPUl06i2dzi6K8xdE3qJD6vWta7jfH0nEv4JPr1OOvbk1dinPxCbRM0Wqjgz2oeQ6yPhKmZfmw3tmBeUVHS6WU5yQtgUiot6xRIgql17P1ugyaEHuCnMA4E1j4GQHCWdVtsVZNtgjbrW8btIx0T4WAG79lXlWThu5sALRAy_53wZjsePq_FO4UMQUDp5evfJDo0kddt9yXfZ_K058DDL4LHCeTtiuKVcmg-Sq1DA7YQS720b6sv6xYRrNOjilyVzjwVQV8sZYHrH1k35nP5ZkSc6Z4dcQnalnhkViSGSQjq_SQYdxQjgL8ZmbfcC0GLgsyimNXZizAt7dB-QUoyx4d_IQbgG2p_isPECgFWnKW2Zm7q7reU_pv5koudz1Qjauan14sv8XeIVMD0Rj_Fbq30dXNxEiv20GKf_EAEk1NGlo6XwSE1Ytb4bThJ6BiEB0pQ_eSZSCORYChRLqHRxhvU0zgqZbmHti9_It90x5u0LDrhvRGiYEwwJfewF2OyWsFb9FAJH3d4-VhOx3SrsvSgFY5yJRhCDfW_QcAnnVA0eArkkXpf0v8roipkQJ7nv0W0LPmaiUxHvgFI6qQFgioDkCu3EAiTYlFEvBAz_-1hvLS2FZ4Z8G8IZ-I2l-vHUNXhIrBPP2caRARr6lB2J0Sn7kBhSWMCkgueDBAgU1U1S9nD414GkkOJE0G4LX23GcHkav5M9gvW8Vyfeze7SsBeQyi7dqFq2kCVE3Qok-KXji5ybArgylxUn3dK12axvZ6JYa9HY9EK9gWURTKh8I0Ln2yeonetvtfZPp2HUY6l3EeCL3GusYBTE_exADXoJi0LXqsPG2sengJi9x9CKwH48e_sn5ay9zKg0Xy1SxUNtHdgNjlV_suKXUa4KP50ONUbxpgqqn63EgbsW9IEVQq9Wgly6HbhrliwcKlUTr_fV1q7r0k59KNPKIdN2abpqdp1EFFgMURQypT-qQLtc_egYoTEsDawbfCb-v2-TA1A0Aj4yQVvZtB-fxPVjQ1go8Q6Uc7L3FBgrPLJ
                - iframe [ref=e218]:
                  - generic [ref=f77e2]:
                    - link "Advertisement" [ref=f77e4] [cursor=pointer]:
                      - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssuK89w_vqyuHEwuqKeVBH3LiFO88154kRnGuVPVnxs9wwWZHvJclIOoClf8oHE0ezrGiBAkV8lnaMPZEZs9WI_o_cUkoBYfXkYqzy2McXB1GB1zteXKYyoMWPMiBDSyKKJtvzIqX9BGjKw_AHsN7q19u2MRxoYRkRuVo3BQS2oayJ06uBoo9loFp40dQJh-x4c1AGrPwEPqaKEdm_PnSTP8GM3dYCfzkww6e-sZwAlyOPoCoXNCtxX0ha4GkuMRey2OielGGg86n2djQ1dChgkYNTv7ZHDtdqXlx_XFiEbum6s3dYKuV9XE4AXpWjRmx2wYfJZWklWg-dvfz0DmB-AchbiOJa8UH-0j11HLU3sdUKtl_s4yYzdrz50Pxk40Jvykg-gaBqlhoEqyOajkrg1DTSrjzHBSBqd99wDEB_f82MQFITOeopbCD_qj526nDyKJNVuiXvOFTtwU5ofWRLONyWh8IXN9mWNBlWhigZMyYl1Xo1Fc__ADHZ6JFk0txhC4SJZerkdH23-f70tGSMEG8q893KXbVM9K5rVaJXVR2plpQRX0v3XxvCtNjpKgrBOxHMaGjHHLEv1mJquiTPhW_AnTLOSaSdxaN3FJIuPHyr2rLa6Xa3XtEN66kxDQJ4jF43qUuIoqggZDU_2ueFDMQo56G2WuC2_qIbfWiYrYrfhTOYFNhNbuZxQIHgLpIZev6HHuqkg4BG9mdMef3p2hVhFtUpSZJi9HBJJUwLh5hYZ_rwxIIz_TyjyfBRbrF1KkmzO-hpZ_-JsZAslYi65JXHpdcYrewnAul0W5lhmszVMFGB1aOtGz-KsR0zPLKaGW7CilJXNQ1GHe5z0R3s98Q7RH17vA8UNxhDaNwU-X92f1VIzcaTRgClRiuf7d1I5fqHXL8HZ2NjQ1h0pzH-iTf0uGLn7ry6Qr2R4b9UP2ufeJ-ST9hebZvcaMXV51Jtww_4xt0WQuM1XVG0yCjoQ__67lElTVAv1v0ZczOfXqETa7eSQg3QTkmQqKHLzEUUXbkJaReLWZsytOxuuUb17-99VFK8B_I0wSLOZFPzPqrzB5bK7ivb-kxNl_CMq9-h4LUoX68CrOnGj6bmeezG-zmn3X9oWG7LF17fHIzxCAhqXBwYJfyUkkTgC_KnnGj9gX34wESFm3a2j7BBvAWoKG8L36oe7-aQPs8wXAAFudKEeJSEliUAf61XJoIFKWOdfPDGROPlH4z6ih2ns0IYT3C0G8OytlWesMhin1rHiyifhfL9CahvR5kQAKuPzyOc2dyqDNvJlION1FbzuHzYTGGKNPvTMzIczL2rPD374hOK7XcdKre8KyfsvvVThaiTn8wdeVrWFAF6iSn5SbDkWhj4n3ZwoB0Fvc6w4cedMp1QbpWKmUuttXEJ3z6QqxfPKigVfwWwuHl3phiBjRAVguAqy3GTIwkrK2KZX_csCzoNsc1lpMTSangazMdScSdDmu7FQNlYCAAfO4-wHXUAL86KnCw3T9O9ZnIukIpskQO78Uc33Wr8lymmByqCK6NsZrc3v0U5EZDtfxRt6sVsjSQwrDtFkvCjtZyUi7wAzY1xiwnBLEtQMC-xgv8QC5PQcuY_FD8uqeykGSkDvdpFQdU0QG2wdS7Xkx-JJ-XN8Ih7xkSRSeE8_-zejaode38gpYYVKyCK6AxjNKxYKxcZ8M6pRM8CQBM3PFrJgzJHQ9dW3bin6ctmcoYSxFwl0L-agK1hW2BXo8hYxp_XqmNU9z7L8EcTzFyE2uST_G0RiOwGV393VgKjzpF30zORF6EGRqtddTypplvExY2rsmpY-2ZQUsKnL-MQ69PzhSy0TA4kPoIKlr8iXqdzZT6NMl5QEMBxfKB3nrIItUipbn9uzPwYl4kqwKmNjxo0_ou5uxS1xjLdyUokCrJV1mvGwCsUGWKgZ98lwHZvGpwFPHWEpmgS-smQWivs9HZZo1EgUUG8vP5O3j3iWKH4lOxH5qS8ns2LLryPITYC_RSRecOgrDE-BsJ5B7my6ulu8IyxW6lIQ1YG3VjxXNZYZknyIWrNNe_eq0Zs&sai=AMfl-YTxSO7f2FHvT70VmOnpAS00i6fI4s51Jb20NIH0clSq0WHNhmgL_aXqnIpzd50-jrOLAtjFNMJDrkOvpF6V_kkbOOF9crWUh75v5wnK2AyXF8HSnGeITDO8wftPTvqa_3k47LXV1rK_GCxhhBPdUDHfBw3jNc-nOBlAUbntMvTiavHFSE4spj_Y3vqUfraoxNlMaNYL2s9MgWk3ZU_y0ewQ7cb-4gTBrsbiFurvr5IyrybvoXuBzVO1PsoqGggTznkrApbJ_Cx50fJPxPU8KDlycgKzW4NPvjaZqhY_3FGO9wLL-CsUDx6uo8Xtry2ALENYzsHJ8xBqGxKxkR7jcBXqJ-fuwsRo2oYejhTyAC0gw1P1LxWiJfAPLxjH-tikL8BQcM7qKetQhp50J-_-HyI8tf15IUV5YFWaTPIoN-6aoE3dLZa78pajAV3kkmESCwV-9s8PN6XRtAWmn8YgSM7G88be2ckIOMGjhqHDvGouC8Fg3PSKvCxTzR3-El7ZvfgdlpuGEThUM8k3DerhjAuNc5YQaJJ3Oxnr75V-jMXXb4AKneEajLe5vP--algUZFppgQohUEnsZ6CR468hFnQQTkvq5KRqabASMy7fICeiYFWXTdSxr32WOyLSY3unQZsZ9RyBzabbLVNViYDgXIqAY7aXU2ud5jvO1azn_h5dMuvo185qPvJ_uBd5iB0WjK-2xFF1t3ytje_hv4NDh9ID9xPhOHJk1lsA_Q7sK5C5Z1XIWgGN3ih4Ze0PJp5g40wpbQEGZKfJWO_jWZevCsyzG4pTUtQipVmNp78j-j1XNw9dG1k2Q07kxym0Al_kSF9FPxb65Ai3Bf_4gmGNXw&sig=Cg0ArKJSzDWpnLm085BE&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.amd.com/en/products/processors/laptop/ryzen.html%3Futm_medium%3Dprogrammatic%26utm_source%3Ddv360%26utm_campaign%3D26q2_glob_cons_ryz_gorgon-point_awa_no_1008171_havas_086jk%26utm_content%3D253995004-n_gorgon%2520point%2520launch%2520campaign_retail%2520banner_creator_300x250.jpg%26utm_term%3Dus%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23880644846
                      - img "Advertisement" [ref=f77e5]
                    - generic [ref=f77e6]:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo8G1pu8Mua2kWdfhcLQ4jN6V6LDoSHryMrSIKTtwMd6djYr64RESwFvI7Vth8xs9XuJ4z6fmruQ4GUmyYK8vRFebblq0i9uTLJAe0wf485aQliSLts6K5y1LegNLa_J1mgvp8RUP_a0MQKqMiUXhKe0msX7YDkhpR-PPEbSxeahFOWBRudapxOFPwfF_pmaL_S1dEp_IsgVxT7pbVsicIFmZB6eoyt1MkpwJUkXhyNiK9F675wBFdMsJodoB97ICLw2kz_rmNOnjzzsWxfwHk4apLI8EoL5hmgxFxj8pVOekABNfsGc2cQ133LtPIl43HDOF9Aq_vjnXZtmZoQ_aBsZ3_h9XLhVYy_Aepl3gOdKeuapQBewFhXo5P8KFMDWdUFASUjzi5cTikqm8gklVHzu7WxEV6XA-cFKySBTho2Kfyarv344SAZTksJQr1FzAACxDPVOr6CjtLInUoYf0GVr1tCCVFIWhRFxYEfR7z5nCVu65Qo8434ah4uBHty64_GBHEQhPDYRFMnqWBHVlYGHFEiXBmNB1CPVKb6WEt8KQcVFjE8cqie_uTk-XWswuQJH-AQhD0XyPwFsi59jM8HRpULtTJhgOKnMRzjV8CQ6mHv3_tCy-AU0POSib_AfphVb1adQl42CQWsOl8PveTsJfZ-psdiFrvLdVmmsr0frb7zkQU0Qdl2YOL6rMPlwGKja3H8pPCnU-eImeuOM6fDxnYyXsT7UiDKiSOa4PD7_PuTCgfC4dlvh9gBlnuj5AR4tbitMe684OS5qcgZMmBWm8n5H6t7eUD8ByToqx5VRNYiyPbeGep51iptkqltPncmHO0v6ypzuVzezynH1QESRmMsZyI1OabrvxQaXvOQ7-sHXaj3y3CaQpwUSa6ro5f4_KHcq2ullPPCFcqWuOQCXa8qLrZ-er0z6vjoPSCpz_yjE-y-QQPBX-6236KWSe4XMvoZkzg0kY9xEDtauFWBH8_GF_y9mkfgKtUfU_GYVcq5n1-mbk5zWCio8ur39UTIn4zQGv3vJiMIuB1f1mcLrDI40uS5CU61IyOViHbYZWWtYBMvXnGGj_ozzXYgS4WOaI7y4etZcx7ASyahF6zT79rxgKszXCdOAf788_sN3uD4T7dSr7DkoBGHqOyjMHaq556tXEvaXh1110Rr6_XTsqQahNMnmUy7aukOi31V8JK7l37cgs_wpuVo55vk1bhPyOA_hwQ7M4NburQhRAR_K37hv5y7ymjww5YFaEi43gRtepFtYrwNaRI2zfEaWM6keb4M1AGGhSSLJ5oDscZIdZW1XUCLCgMSUEZv9TVoBID2to4ztQVFLdgyj4n6nPEw73Kkxf7t25aALcfETEN3AvBda41JEEd3GYufI5m28BbnTqhT1FBrXd_WA2NGU_DgcmpYaiFna-G8Bfdxi8OWRIL54LR8uYNXr35YwHJNsdNRbaBzVHj1f-DMTG_22uaRVFyAkusuKUTf8O4Jsyr-2Mjby3Dk5dtWXrTChT2Fb1o3OgEEd12jmtJSwfif9f6IkQIL6awVnh7SoQuJPT1htlCNWEsJtjYhkOi-lwJn9Ocyx9uNlC3ArxOhMpvoP4hN5nXtk1m06iTtQxCnIda4Lr3g5CZCf6ZKzjxN0NEzRleQAFLtWfMK30FY7667NXGsLO9zZcgqL8W3eq0suRj-6SPtBi6FBzy_6U05YPy2e_KoZ4tfe313WnFRukVIVXNIYNAG4hzPORCEgvx6doiP-bNI8I0HcUJrxVMigp3Ec2Fx5JjvUbu6IzZx-tdWCJx0Jc8I56iG1F56zLUNKSJWh5KOCaOfwDGIgwO1KJxs5kbJfZ3Mi3kukoKHAYPBcBrA-GU3isQKTlg_L_WkMG-3PVOqJOLjDNjt-B1IknxXSLTM1X-9LvTWMwam_HBQ0vTXk79eZ-1vHjSDhJRP6VxLFVuFZSQyPYBdMNcqzMSO4W5mcKlBiq98AR5BG3rKcyLxgSiVJyy1oj-IIcRe21rUZR8VZ3gjg9Pcr9Or6341U7uhOZzEiWzfzcbDm4DY3Gf06ika5HNOMIE6nIbpbgTloMmrYG3nwdm29_yFjW0auIr3XVFvqYGlEd-dAKITSTKE9zVWu3XDEVojFejbINIwFOi2C2e7naHgBh8qnpdrxUOcCYRTFimlWJE9krjraHIgGf2_gRaWo0sh7ibmSS7Natt8QQmL7uCTN-miCqhYJnYhbouZh_C9TcSDFDV31jdEe8JWqf3Moe5TkQV-U4BeEqwpiXrGwmbw56FyMlHDDMU5oeoeYr6FLBVL9WH0kSOlGLlgqY2q1PSG4Aib-VmsaYcGrMi_dnqb9TE7SKzCmKHpL9YyVNZxdnEtpqMxeixF_O2PDQxyLB4f778w3wWVPyHlE5pOaS2kAJACycsV9DnyGc59SWJrwXx1fKxiDBEyuzp7bisG4jc14ZZTwmC2k_0gkehDN5SGn1giaXmWECZqAoU-6mFI70xgUeXjItMq2BpjO81G28qrQGby3
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e222]:
    - banner [ref=e223]:
      - generic [ref=e224] [cursor=pointer]:
        - generic [ref=e225]: Advertisement
        - generic [ref=e226]: Remove Ads
    - generic [ref=e229] [cursor=pointer]:
      - generic [ref=e230]: Remove all ads
      - generic [ref=e231]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e232]:
        - generic [ref=e233]: Remove ads
```

# Test source

```ts
  289 |       await moba.mainURLs.openAdminPoePage();
  290 | 
  291 |       for (const pageName of pagesToCleanup) {
  292 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  293 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  294 | 
  295 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  296 |       }
  297 |     }
  298 |   },
  299 | 
  300 |   cleanupStLoLPages: async ({ page, apiAuthAdmin }, use) => {
  301 |     const moba = new Moba(page);
  302 |     await page.context().addCookies(apiAuthAdmin.cookies);
  303 |     const pagesToCleanup = [];
  304 | 
  305 |     const addPageForCleanup = (pageName) => {
  306 |       pagesToCleanup.push(pageName);
  307 |     };
  308 | 
  309 |     await use({ addPageForCleanup, moba });
  310 | 
  311 |     // Cleanup after test
  312 |     if (pagesToCleanup.length > 0) {
  313 |       await moba.mainURLs.openAdminLoLPage();
  314 | 
  315 |       for (const pageName of pagesToCleanup) {
  316 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  317 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  318 | 
  319 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  320 |       }
  321 |     }
  322 |   },
  323 | 
  324 |   cleanupStTFTPages: async ({ page, apiAuthAdmin }, use) => {
  325 |     const moba = new Moba(page);
  326 |     await page.context().addCookies(apiAuthAdmin.cookies);
  327 |     const pagesToCleanup = [];
  328 | 
  329 |     const addPageForCleanup = (pageName) => {
  330 |       pagesToCleanup.push(pageName);
  331 |     };
  332 | 
  333 |     await use({ moba, addPageForCleanup });
  334 | 
  335 |     // Cleanup after test
  336 |     if (pagesToCleanup.length > 0) {
  337 |       await moba.mainURLs.openAdminTFTPage();
  338 | 
  339 |       for (const pageName of pagesToCleanup) {
  340 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  341 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  342 | 
  343 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  344 |       }
  345 |     }
  346 |   },
  347 | 
  348 |   cleanupStValorantPages: async ({ page, apiAuthAdmin }, use) => {
  349 |     const moba = new Moba(page);
  350 |     await page.context().addCookies(apiAuthAdmin.cookies);
  351 |     const pagesToCleanup = [];
  352 | 
  353 |     const addPageForCleanup = (pageName) => {
  354 |       pagesToCleanup.push(pageName);
  355 |     };
  356 | 
  357 |     await use({ moba, addPageForCleanup });
  358 | 
  359 |     // Cleanup after test
  360 |     if (pagesToCleanup.length > 0) {
  361 |       await moba.mainURLs.openAdminValorantPage();
  362 | 
  363 |       for (const pageName of pagesToCleanup) {
  364 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  365 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  366 | 
  367 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  368 |       }
  369 |     }
  370 |   },
  371 | 
  372 |   cleanupStDestiny2Pages: async ({ page, apiAuthAdmin }, use) => {
  373 |     const moba = new Moba(page);
  374 |     await page.context().addCookies(apiAuthAdmin.cookies);
  375 |     const pagesToCleanup = [];
  376 | 
  377 |     const addPageForCleanup = (pageName) => {
  378 |       pagesToCleanup.push(pageName);
  379 |     };
  380 | 
  381 |     await use({ moba, addPageForCleanup });
  382 | 
  383 |     // Cleanup after test
  384 |     if (pagesToCleanup.length > 0) {
  385 |       await moba.mainURLs.openAdminDestiny2Page();
  386 | 
  387 |       for (const pageName of pagesToCleanup) {
  388 |         await moba.stAdminPage.deleteStCardWidget(pageName);
> 389 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
      |                                                       ^ TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
  390 | 
  391 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  392 |       }
  393 |     }
  394 |   },
  395 | 
  396 |   cleanupStDiablo4Pages: async ({ page, apiAuthAdmin }, use) => {
  397 |     const moba = new Moba(page);
  398 |     await page.context().addCookies(apiAuthAdmin.cookies);
  399 |     const pagesToCleanup = [];
  400 | 
  401 |     const addPageForCleanup = (pageName) => {
  402 |       pagesToCleanup.push(pageName);
  403 |     };
  404 | 
  405 |     await use({ addPageForCleanup, moba });
  406 | 
  407 |     // Cleanup после теста
  408 |     if (pagesToCleanup.length > 0) {
  409 |       await moba.mainURLs.openAdminDiablo4Page();
  410 | 
  411 |       for (const pageName of pagesToCleanup) {
  412 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  413 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  414 | 
  415 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  416 |       }
  417 |     }
  418 |   },
  419 | 
  420 |   cleanupSt2xkoPages: async ({ page, apiAuthAdmin }, use) => {
  421 |     const moba = new Moba(page);
  422 |     await page.context().addCookies(apiAuthAdmin.cookies);
  423 |     const pagesToCleanup = [];
  424 | 
  425 |     const addPageForCleanup = (pageName) => {
  426 |       pagesToCleanup.push(pageName);
  427 |     };
  428 | 
  429 |     await use({ addPageForCleanup, moba });
  430 | 
  431 |     // Cleanup после теста
  432 |     if (pagesToCleanup.length > 0) {
  433 |       await moba.mainURLs.openAdmin2xkoPage();
  434 | 
  435 |       for (const pageName of pagesToCleanup) {
  436 |         await moba.stAdminPage.deleteStCardWidget(pageName);
  437 |         await moba.stAdminPage.stCardWidget(pageName).waitFor({ state: 'hidden', timeout: 2000 }); // Wait for the widget to disappear from DOM
  438 | 
  439 |         await expect(moba.stAdminPage.stCardWidget(pageName)).not.toBeVisible();
  440 |       }
  441 |     }
  442 |   },
  443 | 
  444 |   cleanupStHades2Pages: async ({ page, apiAuthAdmin }, use) => {
  445 |     const moba = new Moba(page);
  446 |     await page.context().addCookies(apiAuthAdmin.cookies);
  447 |     const pagesToCleanup = [];
  448 | 
  449 |     const addPageForCleanup = (pageName) => {
  450 |       pagesToCleanup.push(pageName);
  451 |     };
  452 | 
  453 |     await use({ moba, addPageForCleanup });
  454 | 
  455 |     // Cleanup после теста
  456 |     if (pagesToCleanup.length > 0) {
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
```