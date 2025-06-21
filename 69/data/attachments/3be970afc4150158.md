# Test info

- Name: New game is present on stg sitemap
- Location: /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/sitemap.test.js:8:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "pushed code from the local machine/sitemap.xml", waiting until "load"

    at /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/sitemap.test.js:12:16
    at /home/runner/work/qa-automated-tests/qa-automated-tests/e2e-tests/tests/sitemap.test.js:11:14
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
>  12 |     await page.goto(env_sitemap);
      |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
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
   99 |     await page.goto(env_sitemap);
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
```