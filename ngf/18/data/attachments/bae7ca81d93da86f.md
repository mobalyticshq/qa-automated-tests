# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sitemap.test.js >> Each project sitemap.xml returns the expected status code
- Location: e2e-tests/sitemap.test.js:5:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { projectListFromSitemap } from '../app/helpers/index';
  3   | // import XMLParser from '@nodable/flexible-xml-parser';
  4   | 
  5   | test(`Each project sitemap.xml returns the expected status code`, async ({ request }) => {
  6   |   const isProd = process.env.BASE_URL === 'https://mobalytics.gg';
  7   | 
  8   |   for (const { project, isPresentInProdSitemap, pathUrl } of projectListFromSitemap) {
  9   |     let response;
  10  |     if (isProd && isPresentInProdSitemap === true) {
  11  |       await test.step(`Request link: ${process.env.BASE_URL}${pathUrl}`, async () => {
  12  |         response = await request.get(`${process.env.BASE_URL}${pathUrl}`);
  13  |       });
  14  |       await test.step(`Expected Result: ${process.env.BASE_URL}${pathUrl} returns a successful status code ${response.status()}`, async () => {
  15  |         expect.soft(response.ok()).toBeTruthy();
  16  |       });
  17  |     } else if (isProd && isPresentInProdSitemap === false) {
  18  |       await test.step(`Request link: ${process.env.BASE_URL}${pathUrl}`, async () => {
  19  |         response = await request.get(`${process.env.BASE_URL}${pathUrl}`);
  20  |       });
  21  |       await test.step(`Expected Result: ${process.env.BASE_URL}${pathUrl} returns a unsuccessful status code ${response.status()} due this project is missing in sitemap`, async () => {
  22  |         expect.soft(response.ok()).toBeFalsy();
  23  |       });
  24  |     } else {
  25  |       await test.step(`Request link: ${process.env.BASE_URL}${project}`, async () => {
  26  |         response = await request.get(`${process.env.BASE_URL}${pathUrl}`);
  27  |       });
  28  |       await test.step(`Expected Result: ${process.env.BASE_URL}${project} returns a successful status code`, async () => {
> 29  |         expect.soft(response.ok()).toBeTruthy();
      |                                    ^ Error: expect(received).toBeTruthy()
  30  |       });
  31  |     }
  32  |   }
  33  | });
  34  | 
  35  | test(`Sitemap index lists the expected project sitemaps`, async ({ page }) => {
  36  |   const isProd = process.env.BASE_URL === 'https://mobalytics.gg';
  37  | 
  38  |   await test.step(`Open sitemap.xml: ${process.env.URL_SITEMAP}`, async () => {
  39  |     const response = await page.goto(process.env.URL_SITEMAP);
  40  |     expect(response.ok()).toBeTruthy();
  41  |   });
  42  | 
  43  |   for (const { project, isPresentInProdSitemap, pathUrl } of projectListFromSitemap) {
  44  |     if (isProd && isPresentInProdSitemap === true) {
  45  |       await test.step(`Expected Result: ${project} is present in ${process.env.URL_SITEMAP}`, async () => {
  46  |         await expect.soft(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${pathUrl}`);
  47  |       });
  48  |     } else if (isProd && isPresentInProdSitemap === false) {
  49  |       await test.step(`Expected Result: ${project} is not present in ${process.env.URL_SITEMAP}`, async () => {
  50  |         await expect.soft(page.locator('#folder0')).not.toContainText(`${process.env.BASE_URL}${pathUrl}`);
  51  |       });
  52  |     } else {
  53  |       await test.step(`Expected Result: ${project} is present in ${process.env.URL_SITEMAP}`, async () => {
  54  |         await expect.soft(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${pathUrl}`);
  55  |       });
  56  |     }
  57  |   }
  58  | });
  59  | 
  60  | // test(`Check project links in the main sitemap list ${process.env.URL_SITEMAP}`, async ({ request }) => {
  61  | //   const isProd = process.env.BASE_URL === 'https://mobalytics.gg';
  62  | //   const parser = new XMLParser();
  63  | //   let sitemapUrls;
  64  | 
  65  | //   await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
  66  | //     const response = await request.get(process.env.URL_SITEMAP);
  67  | //     expect(response.ok()).toBeTruthy();
  68  | //     const parsed = parser.parse(await response.text());
  69  | //     sitemapUrls = [].concat(parsed.urlset?.url ?? parsed.sitemapindex?.sitemap ?? []).map((n) => n.loc);
  70  | //   });
  71  | 
  72  | //   await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${sitemapUrls.length}`, async () => {
  73  | //     expect(sitemapUrls.length).toBeGreaterThan(0);
  74  | //   });
  75  | 
  76  | //   for (const { project, isPresentInProdSitemap, pathUrl } of projectListFromSitemap) {
  77  | //     const expectedUrl = `${process.env.BASE_URL}${pathUrl}`;
  78  | //     const shouldBePresent = !(isProd && isPresentInProdSitemap === false);
  79  | 
  80  | //     await test.step(`Expected Result: ${project} is ${shouldBePresent ? 'present' : 'not present'} in ${process.env.URL_SITEMAP}`, async () => {
  81  | //       if (shouldBePresent) {
  82  | //         expect.soft(sitemapUrls).toContain(expectedUrl);
  83  | //       } else {
  84  | //         expect.soft(sitemapUrls).not.toContain(expectedUrl);
  85  | //       }
  86  | //     });
  87  | //   }
  88  | // });
  89  | 
  90  | // test.describe('Sitemap links return a successful status code for each project', async () => {
  91  | //   test.describe.configure({ timeout: 500_000 });
  92  | //   const quantityLinks = 100;
  93  | 
  94  | //   projectSectionLinks.forEach((element) => {
  95  | //     test(`Verify main pages for each project: ${process.env.BASE_URL}${element} return a successful status code`, async ({
  96  | //       request,
  97  | //     }) => {
  98  | //       let response;
  99  | //       await test.step(`Send a GET request to ${process.env.BASE_URL}${element}`, async () => {
  100 | //         response = await request.get(`${process.env.BASE_URL}${element}`);
  101 | //       });
  102 | //       await test.step(`Response returns with status code: ${response.status()}`, async () => {
  103 | //         expect(response.ok()).toBeTruthy();
  104 | //       });
  105 | //     });
  106 | //   });
  107 | 
  108 | //   test(`Verify that all ${quantityLinks} links in the diablo-4-sitemap return a successful status code`, async ({
  109 | //     request,
  110 | //   }) => {
  111 | //     let filteredLinks;
  112 | 
  113 | //     await test.step(`Parse ${quantityLinks} links from diablo-4-sitemap: ${process.env.BASE_URL}/diablo-4/sitemap.xml`, async () => {
  114 | //       const response = await request.get(`${process.env.BASE_URL}/diablo-4/sitemap.xml`);
  115 | //       await test.step(`Expected Result: Response diablo-4-sitemap returns with ${response.status()}`, async () => {
  116 | //         expect(response.ok()).toBeTruthy();
  117 | //       });
  118 | //       const xmlData = await response.text();
  119 | //       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  120 | //       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  121 | //       // console.log(arrayLinks);
  122 | 
  123 | //       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  124 | //       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  125 | 
  126 | //       filteredLinks = arrayLinks
  127 | //         .filter((match) => {
  128 | //           const filterPattern = /mobalytics\.gg\/diablo-4\/builds/;
  129 | //           return filterPattern.test(match.groups.link);
```