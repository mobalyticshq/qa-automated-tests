# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ngf/creating-ug-pages.test.js >> Creating UG Pages >> Create a character page on Endfield project
- Location: e2e-tests/ngf/creating-ug-pages.test.js:209:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('document-ug-widget-header')
Expected substring: "Endfield"
Received string:    "arknights-endfield qa-automation-character-page-7343eeea-cdcc-4552-befe-ebe28ea89c68BeginnerBy admin_auto_tests+stg+ns@mobalyticshq.comUpdated on Nov 5, 2026Nov 5, 2026"
Timeout: 15000ms

Call log:
  - Expect "toContainText" getByTestId('document-ug-widget-header') with timeout 15000ms
  - waiting for getByTestId('document-ug-widget-header')
    - locator resolved to <section data-allow-dnd="false" data-testid="document-ug-widget-header" id="fde0e09a-25da-4371-ae40-7d043b5843ea" data-widgetid="fde0e09a-25da-4371-ae40-7d043b5843ea" data-screenshot-id="fde0e09a-25da-4371-ae40-7d043b5843ea" class="x9uxgww x1cvue7f x17gf9bc x1hlpopu x1kaw35v x1refky5 x1ppuaug x10jcp2m x14ch9h9 x1hv8zah xvrka61 x1o7jumi x78zum5 xdt5ytf x12h1iku">…</section>
    - unexpected value "arknights-endfield qa-automation-character-page-7343eeea-cdcc-4552-befe-ebe28ea89c68BeginnerBy AuthorUpdated on Nov 5, 2026Nov 5, 2026"
    28 × locator resolved to <section data-allow-dnd="false" data-testid="document-ug-widget-header" id="fde0e09a-25da-4371-ae40-7d043b5843ea" data-widgetid="fde0e09a-25da-4371-ae40-7d043b5843ea" data-screenshot-id="fde0e09a-25da-4371-ae40-7d043b5843ea" class="x9uxgww x1cvue7f x17gf9bc x1hlpopu x1kaw35v x1refky5 x1ppuaug x10jcp2m x14ch9h9 x1hv8zah xvrka61 x1o7jumi x78zum5 xdt5ytf x12h1iku">…</section>
       - unexpected value "arknights-endfield qa-automation-character-page-7343eeea-cdcc-4552-befe-ebe28ea89c68BeginnerBy admin_auto_tests+stg+ns@mobalyticshq.comUpdated on Nov 5, 2026Nov 5, 2026"

```

```yaml
- heading "arknights-endfield qa-automation-character-page-7343eeea-cdcc-4552-befe-ebe28ea89c68" [level=1]
- text: Beginner By
- link "admin_auto_tests+stg+ns@mobalyticshq.com":
  - /url: /arknights-endfield/profile/spy-man/characters
- text: Updated on Nov 5, 2026
```

# Test source

```ts
  119 |         await expect(moba.ugBuildPage.widgetHeader).toContainText(`${game}`);
  120 |         await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  121 |       });
  122 |     });
  123 |   });
  124 | 
  125 |   filterProjectsByClass('classes').forEach(({ game, projectPath }) => {
  126 |     test(`Create a classes page on ${game} project`, async ({ page }) => {
  127 |       const uniqueId = uuidv4();
  128 |       const pageName = `qa-automation-class-page-${uniqueId}`;
  129 |       const moba = new Moba(page);
  130 | 
  131 |       if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'VAL') {
  132 |         await moba.mainURLs.openUgCreatorProfilePage(projectPath);
  133 |       } else {
  134 |         await moba.mainURLs.openUgProfilePage(projectPath);
  135 |       }
  136 |       await moba.ugProfilePage.gotoClassesPlannerPage();
  137 |       await moba.ugBuildPlanner.createUgDraftPage(pageName);
  138 | 
  139 |       await test.step(`Expected Result: Class page with the name: ${pageName} is created on ${game} project`, async () => {
  140 |         await expect(moba.ugBuildPage.widgetHeader).toContainText(`${game}`);
  141 |         await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  142 |       });
  143 |     });
  144 |   });
  145 | 
  146 |   filterProjectsByRaid('raids').forEach(({ game, projectPath }) => {
  147 |     test(`Create a raid page on ${game} project`, async ({ page }) => {
  148 |       const uniqueId = uuidv4();
  149 |       const pageName = `qa-automation-raid-page-${uniqueId}`;
  150 |       const moba = new Moba(page);
  151 | 
  152 |       if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'VAL') {
  153 |         await moba.mainURLs.openUgCreatorProfilePage(projectPath);
  154 |       } else {
  155 |         await moba.mainURLs.openUgProfilePage(projectPath);
  156 |       }
  157 |       await moba.ugProfilePage.gotoRaidsPlannerPage();
  158 |       await moba.ugBuildPlanner.createUgDraftPage(pageName);
  159 | 
  160 |       await test.step(`Expected Result: Class page with the name: ${pageName} is created on ${game} project`, async () => {
  161 |         await expect(moba.ugBuildPage.widgetHeader).toContainText(`${game}`);
  162 |         await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  163 |       });
  164 |     });
  165 |   });
  166 | 
  167 |   filterProjectsByDungeon('dungeons').forEach(({ game, projectPath }) => {
  168 |     test(`Create a dungeon page on ${game} project`, async ({ page }) => {
  169 |       const uniqueId = uuidv4();
  170 |       const pageName = `qa-automation-dungeon-page-${uniqueId}`;
  171 |       const moba = new Moba(page);
  172 | 
  173 |       if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'VAL') {
  174 |         await moba.mainURLs.openUgCreatorProfilePage(projectPath);
  175 |       } else {
  176 |         await moba.mainURLs.openUgProfilePage(projectPath);
  177 |       }
  178 |       await moba.ugProfilePage.gotoDungeonsPlannerPage();
  179 |       await moba.ugBuildPlanner.createUgDraftPage(pageName);
  180 | 
  181 |       await test.step(`Expected Result: Class page with the name: ${pageName} is created on ${game} project`, async () => {
  182 |         await expect(moba.ugBuildPage.widgetHeader).toContainText(`${game}`);
  183 |         await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  184 |       });
  185 |     });
  186 |   });
  187 | 
  188 |   filterProjectsByQuest('quests').forEach(({ game, projectPath }) => {
  189 |     test(`Create a quest page on ${game} project`, async ({ page }) => {
  190 |       const uniqueId = uuidv4();
  191 |       const pageName = `qa-automation-quest-page-${uniqueId}`;
  192 |       const moba = new Moba(page);
  193 | 
  194 |       if (game === 'LoL' || game === 'TFT' || game === 'Destiny 2' || game === 'VAL') {
  195 |         await moba.mainURLs.openUgCreatorProfilePage(projectPath);
  196 |       } else {
  197 |         await moba.mainURLs.openUgProfilePage(projectPath);
  198 |       }
  199 |       await moba.ugProfilePage.gotoQuestsPlannerPage();
  200 |       await moba.ugBuildPlanner.createUgDraftPage(pageName);
  201 | 
  202 |       await test.step(`Expected Result: Class page with the name: ${pageName} is created on ${game} project`, async () => {
  203 |         await expect(moba.ugBuildPage.widgetHeader).toContainText(`${game}`);
  204 |         await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  205 |       });
  206 |     });
  207 |   });
  208 | 
  209 |   test(`Create a character page on Endfield project`, async ({ page }) => {
  210 |     const uniqueId = uuidv4();
  211 |     const pageName = `qa-automation-character-page-${uniqueId}`;
  212 |     const moba = new Moba(page);
  213 | 
  214 |     await moba.mainURLs.openUgEndfieldPage();
  215 |     await moba.ugProfilePage.gotoCharacterPlannerPage();
  216 |     await moba.ugBuildPlanner.createUgDraftPage(pageName);
  217 | 
  218 |     await test.step(`Expected Result: Character page with the name: ${pageName} is created on Endfield project`, async () => {
> 219 |       await expect(moba.ugBuildPage.widgetHeader).toContainText('Endfield');
      |                                                   ^ Error: expect(locator).toContainText(expected) failed
  220 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  221 |     });
  222 |   });
  223 | 
  224 |   test(`Create a deck page on Riftbound project`, async ({ page }) => {
  225 |     const uniqueId = uuidv4();
  226 |     const pageName = `qa-automation-deck-page-${uniqueId}`;
  227 |     const moba = new Moba(page);
  228 | 
  229 |     await moba.mainURLs.openUgRiftboundPage();
  230 |     await moba.ugProfilePage.gotoDeckPlannerPage();
  231 |     await moba.ugBuildPlanner.createUgDraftPage(pageName);
  232 | 
  233 |     await test.step(`Expected Result: Deck page with the name: ${pageName} is created on Riftbound project`, async () => {
  234 |       await expect(moba.ugBuildPage.widgetHeader).toContainText('Riftbound');
  235 |       await expect(moba.ugBuildPage.controlPanel).toContainText(pageName);
  236 |     });
  237 |   });
  238 | });
  239 | 
```