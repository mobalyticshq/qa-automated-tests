# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement/ad-regular-user.test.js >> Verify ad blocks for regular user >> Check advertisement blocks for regular user - Marathon in desktop at 640x1024 viewport size
- Location: e2e-tests/advertisement/ad-regular-user.test.js:639:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#marathon-video-all-pages').or(locator('#marathon-nitro-video').first())
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#marathon-video-all-pages').or(locator('#marathon-nitro-video').first())

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273b5240ac842ae
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

Locator: locator('#web-marathon-display-footer-d').or(locator('#marathon-nitro-anchor'))
Expected: attached
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeAttached" with timeout 15000ms
  - waiting for locator('#web-marathon-display-footer-d').or(locator('#marathon-nitro-anchor'))

```

```yaml
- main:
  - img "Icon for mobalytics.gg"
  - heading "mobalytics.gg" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a273b5240ac842ae
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
  1079 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1080 |               await expect
  1081 |                 .soft(page.locator('#bl4-display-small-all-pages').or(page.locator('#borderlands-4-nitro-m')))
  1082 |                 .not.toBeVisible();
  1083 |             });
  1084 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1085 |               await expect
  1086 |                 .soft(
  1087 |                   page.locator('#web-borderlands-4-display-footer-d').or(page.locator('#borderlands-4-nitro-anchor'))
  1088 |                 )
  1089 |                 .toBeAttached();
  1090 |             });
  1091 |             break;
  1092 |           case 'Hades 2':
  1093 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1094 |               await expect
  1095 |                 .soft(page.locator('#hades-2-video-all-pages').or(page.locator('#hades-2-nitro-video').first()))
  1096 |                 .toBeAttached();
  1097 |             });
  1098 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1099 |               await expect
  1100 |                 .soft(
  1101 |                   page
  1102 |                     .locator('#hades-2-display-all-pages')
  1103 |                     .or(page.locator('#hades-2-nitro-l'))
  1104 |                     .or(page.locator('#hades-2-nitro-3'))
  1105 |                     .first()
  1106 |                 )
  1107 |                 .not.toBeVisible();
  1108 |             });
  1109 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1110 |               await expect
  1111 |                 .soft(page.locator('#hades-2-display-small-all-pages').or(page.locator('#hades-2-nitro-m')))
  1112 |                 .not.toBeVisible();
  1113 |             });
  1114 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1115 |               await expect
  1116 |                 .soft(page.locator('#web-hades-2-display-footer-d').or(page.locator('#hades-2-nitro-anchor')))
  1117 |                 .toBeAttached();
  1118 |             });
  1119 |             break;
  1120 |           case 'Endfield':
  1121 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1122 |               await expect
  1123 |                 .soft(
  1124 |                   page.locator('#endfield-video-all-pages').or(page.locator('#arknights-endfield-nitro-video').first())
  1125 |                 )
  1126 |                 .toBeAttached();
  1127 |             });
  1128 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1129 |               await expect
  1130 |                 .soft(
  1131 |                   page
  1132 |                     .locator('#endfield-display-all-pages')
  1133 |                     .or(page.locator('#arknights-endfield-nitro-l'))
  1134 |                     .or(page.locator('#arknights-endfield-nitro-3'))
  1135 |                     .first()
  1136 |                 )
  1137 |                 .not.toBeVisible();
  1138 |             });
  1139 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1140 |               await expect
  1141 |                 .soft(page.locator('#endfield-display-small-all-pages').or(page.locator('#arknights-endfield-nitro-m')))
  1142 |                 .not.toBeVisible();
  1143 |             });
  1144 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1145 |               await expect
  1146 |                 .soft(
  1147 |                   page
  1148 |                     .locator('#web-arknights-endfield-display-footer-d')
  1149 |                     .or(page.locator('#arknights-endfield-nitro-anchor'))
  1150 |                 )
  1151 |                 .toBeAttached();
  1152 |             });
  1153 |             break;
  1154 |           case 'Marathon':
  1155 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1156 |               await expect
  1157 |                 .soft(page.locator('#marathon-video-all-pages').or(page.locator('#marathon-nitro-video').first()))
  1158 |                 .toBeAttached();
  1159 |             });
  1160 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1161 |               await expect
  1162 |                 .soft(
  1163 |                   page
  1164 |                     .locator('#marathon-display-all-pages')
  1165 |                     .or(page.locator('#marathon-nitro-l'))
  1166 |                     .or(page.locator('#marathon-nitro-3'))
  1167 |                     .first()
  1168 |                 )
  1169 |                 .not.toBeVisible();
  1170 |             });
  1171 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1172 |               await expect
  1173 |                 .soft(page.locator('#marathon-display-small-all-pages').or(page.locator('#marathon-nitro-m')))
  1174 |                 .not.toBeVisible();
  1175 |             });
  1176 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1177 |               await expect
  1178 |                 .soft(page.locator('#web-marathon-display-footer-d').or(page.locator('#marathon-nitro-anchor')))
> 1179 |                 .toBeAttached();
       |                  ^ Error: expect(locator).toBeAttached() failed
  1180 |             });
  1181 |             break;
  1182 |           case 'Overwatch':
  1183 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1184 |               await expect
  1185 |                 .soft(page.locator('#overwatch-video-all-pages').or(page.locator('#overwatch-nitro-video').first()))
  1186 |                 .toBeAttached();
  1187 |             });
  1188 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1189 |               await expect
  1190 |                 .soft(
  1191 |                   page
  1192 |                     .locator('#overwatch-display-all-pages')
  1193 |                     .or(page.locator('#overwatch-nitro-l'))
  1194 |                     .or(page.locator('#overwatch-nitro-3'))
  1195 |                     .first()
  1196 |                 )
  1197 |                 .not.toBeVisible();
  1198 |             });
  1199 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1200 |               await expect
  1201 |                 .soft(page.locator('#overwatch-display-small-all-pages').or(page.locator('#overwatch-nitro-m')))
  1202 |                 .not.toBeVisible();
  1203 |             });
  1204 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1205 |               await expect
  1206 |                 .soft(page.locator('#web-overwatch-display-footer-d').or(page.locator('#overwatch-nitro-anchor')))
  1207 |                 .toBeAttached();
  1208 |             });
  1209 |             break;
  1210 |           // case 'Nightreign':
  1211 |           //   await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1212 |           //     await expect
  1213 |           //       .soft(
  1214 |           //         page
  1215 |           //           .locator('#elden-ring-nightreign-video-all-pages')
  1216 |           //           .or(page.locator('#elden-ring-nightreign-nitro-video'))
  1217 |           //       )
  1218 |           //       .toBeAttached();
  1219 |           //   });
  1220 |           //   await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  1221 |           //     await expect
  1222 |           //       .soft(
  1223 |           //         page
  1224 |           //           .locator('#elden-ring-nightreign-display-all-pages')
  1225 |           //           .or(page.locator('#elden-ring-nightreign-nitro-l'))
  1226 |           //           .or(page.locator('#elden-ring-nightreign-nitro-3'))
  1227 |           //           .first()
  1228 |           //       )
  1229 |           //       .not.toBeVisible();
  1230 |           //   });
  1231 |           //   await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  1232 |           //     await expect
  1233 |           //       .soft(
  1234 |           //         page
  1235 |           //           .locator('#elden-ring-nightreign-display-small-all-pages')
  1236 |           //           .or(page.locator('#elden-ring-nightreign-nitro-m'))
  1237 |           //       )
  1238 |           //       .not.toBeVisible();
  1239 |           //   });
  1240 |           //   await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  1241 |           //     await expect
  1242 |           //       .soft(
  1243 |           //         page
  1244 |           //           .locator('#web-elden-ring-nightreign-display-footer-d')
  1245 |           //           .or(page.locator('#elden-ring-nightreign-nitro-anchor'))
  1246 |           //       )
  1247 |           //       .toBeAttached();
  1248 |           //   });
  1249 |           //   break;
  1250 |         }
  1251 |       } finally {
  1252 |         await regularUserContext.close();
  1253 |       }
  1254 |     });
  1255 |   });
  1256 | 
  1257 |   filterProjectsByAdvertisement('advertisement').forEach(({ game, projectPath }) => {
  1258 |     test(`Check video block & footer banner for regular user - ${game} in desktop at 800x800 viewport size`, async ({
  1259 |       browser,
  1260 |     }) => {
  1261 |       const regularUserContext = await browser.newContext({ storageState: '.auth/regularUserAuth.json' });
  1262 |       const page = await regularUserContext.newPage();
  1263 |       await page.setViewportSize({ width: 800, height: 800 });
  1264 | 
  1265 |       await test.step(`Open project url: "${process.env.BASE_URL}${projectPath}"`, async () => {
  1266 |         await page.goto(`${process.env.BASE_URL}${projectPath}`, {
  1267 |           waitUntil: 'domcontentloaded',
  1268 |         });
  1269 |       });
  1270 |       try {
  1271 |         switch (game) {
  1272 |           case 'STS 2':
  1273 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  1274 |               await expect
  1275 |                 .soft(
  1276 |                   page
  1277 |                     .locator('#slay-the-spire-2-video-all-pages')
  1278 |                     .or(page.locator('#slay-the-spire-2-nitro-video').locator('xpath=..'))
  1279 |                 )
```