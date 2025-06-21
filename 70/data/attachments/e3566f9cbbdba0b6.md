# Test info

- Name: Set 10 link is present on sitemap
- Location: /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/sitemap.test.js:95:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "pushed code to the repo from the local machine/sitemap.xml", waiting until "load"

    at /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/sitemap.test.js:99:16
    at /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/sitemap.test.js:98:14
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | let env_sitemap;
   4 | test.beforeEach(async ({ baseURL }) => {
   5 |   env_sitemap = `${baseURL}/sitemap.xml`;
   6 | });
   7 |
   8 | test(`New game is present on stg sitemap`, async ({ page, baseURL }) => {
   9 |   const NEW_GAME = `ZZZ`;
   10 |
   11 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   12 |     await page.goto(env_sitemap);
   13 |   });
   14 |
   15 |   await test.step(`Expected Result: There is no ${NEW_GAME} in ${env_sitemap}`, async () => {
   16 |     await expect(page.locator("#folder0")).not.toContainText(NEW_GAME);
   17 |   });
   18 | });
   19 |
   20 | test(`New game is missing on prod sitemap`, async ({ page, baseURL }) => {
   21 |   const NEW_GAME = `ZZZ`;
   22 |
   23 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   24 |     await page.goto(env_sitemap);
   25 |   });
   26 |
   27 |   await test.step(`Expected Result: There is no ${NEW_GAME} in ${env_sitemap}`, async () => {
   28 |     await expect(page.locator("#folder0")).not.toContainText(NEW_GAME);
   29 |   });
   30 | });
   31 |
   32 | test(`Sitemap_index link is present on sitemap`, async ({ page, baseURL }) => {
   33 |   const SITEMAP_INDEX = `${baseURL}/sitemap_index.xml`;
   34 |
   35 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   36 |     await page.goto(env_sitemap);
   37 |   });
   38 |
   39 |   await test.step(`Expected Result: ${SITEMAP_INDEX} is present in ${env_sitemap}`, async () => {
   40 |     await expect(page.locator("#folder0")).toContainText(SITEMAP_INDEX);
   41 |   });
   42 | });
   43 |
   44 | test(`Product-sitemap link is present on sitemap`, async ({
   45 |   page,
   46 |   baseURL,
   47 | }) => {
   48 |   const PRODUCT_SITEMAP = `${baseURL}/product-sitemap.xml`;
   49 |
   50 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   51 |     await page.goto(env_sitemap);
   52 |   });
   53 |
   54 |   await test.step(`Expected Result: ${PRODUCT_SITEMAP} is present in ${env_sitemap}`, async () => {
   55 |     await expect(page.locator("#folder0")).toContainText(PRODUCT_SITEMAP);
   56 |   });
   57 | });
   58 |
   59 | test(`Valorant link is present on sitemap`, async ({ page, baseURL }) => {
   60 |   const VALORANT = `${baseURL}/valorant/sitemap.xml`;
   61 |
   62 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   63 |     await page.goto(env_sitemap);
   64 |   });
   65 |
   66 |   await test.step(`Expected Result: ${VALORANT} is present in ${env_sitemap}`, async () => {
   67 |     await expect(page.locator("#folder0")).toContainText(VALORANT);
   68 |   });
   69 | });
   70 |
   71 | test(`TFT link is present on sitemap`, async ({ page, baseURL }) => {
   72 |   const TFT = `${baseURL}/tft/sitemap.xml`;
   73 |
   74 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   75 |     await page.goto(env_sitemap);
   76 |   });
   77 |
   78 |   await test.step(`Expected Result: ${TFT} is present in ${env_sitemap}`, async () => {
   79 |     await expect(page.locator("#folder0")).toContainText(TFT);
   80 |   });
   81 | });
   82 |
   83 | test(`Set 14 link is present on sitemap`, async ({ page, baseURL }) => {
   84 |   const SET14 = `${baseURL}/tft/set14/sitemap.xml`;
   85 |
   86 |   await test.step(`Open url: ${env_sitemap}`, async () => {
   87 |     await page.goto(env_sitemap);
   88 |   });
   89 |
   90 |   await test.step(`Expected Result: ${SET14} is present in ${env_sitemap}`, async () => {
   91 |     await expect(page.locator("#folder0")).toContainText(SET14);
   92 |   });
   93 | });
   94 |
   95 | test(`Set 10 link is present on sitemap`, async ({ page, baseURL }) => {
   96 |   const SET10 = `${baseURL}/tft/set10/sitemap.xml`;
   97 |
   98 |   await test.step(`Open url: ${env_sitemap}`, async () => {
>  99 |     await page.goto(env_sitemap);
      |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  100 |   });
  101 |
  102 |   await test.step(`Expected Result: ${SET10} is present in ${env_sitemap}`, async () => {
  103 |     await expect(page.locator("#folder0")).toContainText(SET10);
  104 |   });
  105 | });
  106 |
  107 | test(`Lost Ark link is present on sitemap`, async ({ page, baseURL }) => {
  108 |   const LOST_ARK = `${baseURL}/lost-ark/sitemap.xml`;
  109 |
  110 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  111 |     await page.goto(env_sitemap);
  112 |   });
  113 |
  114 |   await test.step(`Expected Result: ${LOST_ARK} is present in ${env_sitemap}`, async () => {
  115 |     await expect(page.locator("#folder0")).toContainText(LOST_ARK);
  116 |   });
  117 | });
  118 |
  119 | test(`Destiny 2 link is present on sitemap`, async ({ page, baseURL }) => {
  120 |   const DESTINY_2 = `${baseURL}/destiny-2/sitemap.xml`;
  121 |
  122 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  123 |     await page.goto(env_sitemap);
  124 |   });
  125 |
  126 |   await test.step(`Expected Result: ${DESTINY_2} is present in ${env_sitemap}`, async () => {
  127 |     await expect(page.locator("#folder0")).toContainText(DESTINY_2);
  128 |   });
  129 | });
  130 |
  131 | test(`Diablo 4 link is present on sitemap`, async ({ page, baseURL }) => {
  132 |   const DIABLO_4 = `${baseURL}/diablo-4/sitemap.xml`;
  133 |
  134 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  135 |     await page.goto(env_sitemap);
  136 |   });
  137 |
  138 |   await test.step(`Expected Result: ${DIABLO_4} is present in ${env_sitemap}`, async () => {
  139 |     await expect(page.locator("#folder0")).toContainText(DIABLO_4);
  140 |   });
  141 | });
  142 |
  143 | test(`Elden Ring link is present on sitemap`, async ({ page, baseURL }) => {
  144 |   const ELDEN_RING = `${baseURL}/elden-ring-nightreign/sitemap.xml`;
  145 |
  146 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  147 |     await page.goto(env_sitemap);
  148 |   });
  149 |
  150 |   await test.step(`Expected Result: ${ELDEN_RING} is present in ${env_sitemap}`, async () => {
  151 |     await expect(page.locator("#folder0")).toContainText(ELDEN_RING);
  152 |   });
  153 | });
  154 |
  155 | test(`Marvel Rivals link is present on sitemap`, async ({ page, baseURL }) => {
  156 |   const MARVEL_RIVALS = `${baseURL}/marvel-rivals/sitemap.xml`;
  157 |
  158 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  159 |     await page.goto(env_sitemap);
  160 |   });
  161 |
  162 |   await test.step(`Expected Result: ${MARVEL_RIVALS} is present in ${env_sitemap}`, async () => {
  163 |     await expect(page.locator("#folder0")).toContainText(MARVEL_RIVALS);
  164 |   });
  165 | });
  166 |
  167 | test(`MHW link is present on sitemap`, async ({ page, baseURL }) => {
  168 |   const MHV = `${baseURL}/mhw/sitemap.xml`;
  169 |
  170 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  171 |     await page.goto(env_sitemap);
  172 |   });
  173 |
  174 |   await test.step(`Expected Result: ${MHV} is present in ${env_sitemap}`, async () => {
  175 |     await expect(page.locator("#folder0")).toContainText(MHV);
  176 |   });
  177 | });
  178 |
  179 | test(`Deadlock link is present on sitemap`, async ({ page, baseURL }) => {
  180 |   const DEADLOCK = `${baseURL}/deadlock/sitemap.xml`;
  181 |
  182 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  183 |     await page.goto(env_sitemap);
  184 |   });
  185 |
  186 |   await test.step(`Expected Result: ${DEADLOCK} is present in ${env_sitemap}`, async () => {
  187 |     await expect(page.locator("#folder0")).toContainText(DEADLOCK);
  188 |   });
  189 | });
  190 |
  191 | test(`PoE link is present on sitemap`, async ({ page, baseURL }) => {
  192 |   const POE_2 = `${baseURL}/poe-2/sitemap.xml`;
  193 |
  194 |   await test.step(`Open url: ${env_sitemap}`, async () => {
  195 |     await page.goto(env_sitemap);
  196 |   });
  197 |
  198 |   await test.step(`Expected Result: ${POE_2} is present in ${env_sitemap}`, async () => {
  199 |     await expect(page.locator("#folder0")).toContainText(POE_2);
```