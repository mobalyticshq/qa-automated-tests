# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sitemap.test.js >> Sitemap links return a successful status code for each project >> Verify that all 100 links in the tft-set16-sitemap return a successful status code
- Location: e2e-tests/sitemap.test.js:293:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  201 | 
  202 |       await test.step(`Send a GET request to ${link}`, async () => {
  203 |         response = await request.get(link);
  204 |       });
  205 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  206 |         expect.soft(response.ok()).toBeTruthy();
  207 |       });
  208 |     }
  209 |   });
  210 | 
  211 |   test(`Verify that all ${quantityLinks} links in the valorant-sitemap return a successful status code`, async ({
  212 |     request,
  213 |   }) => {
  214 |     let filteredLinks;
  215 | 
  216 |     await test.step(`Parse ${quantityLinks} links from valorant-sitemap: ${process.env.BASE_URL}/valorant/sitemap.xml`, async () => {
  217 |       const response = await request.get(`${process.env.BASE_URL}/valorant/sitemap.xml`);
  218 |       await test.step(`Expected Result: Response valorant-sitemap returns with ${response.status()}`, async () => {
  219 |         expect(response.ok()).toBeTruthy();
  220 |       });
  221 |       const xmlData = await response.text();
  222 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  223 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  224 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  225 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  226 | 
  227 |       filteredLinks = arrayLinks
  228 |         .filter((match) => {
  229 |           const filterPattern = /mobalytics\.gg\/valorant\/[a-z-]+/;
  230 |           return filterPattern.test(match.groups.link);
  231 |         })
  232 |         .slice(0, quantityLinks);
  233 | 
  234 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  235 |         expect(filteredLinks.length).toBeGreaterThan(0);
  236 |       });
  237 |     });
  238 | 
  239 |     for (const takeLink of filteredLinks) {
  240 |       const { link } = takeLink.groups; // extract group name for convenient usage
  241 |       let response;
  242 | 
  243 |       await test.step(`Send a GET request to ${link}`, async () => {
  244 |         response = await request.get(link);
  245 |       });
  246 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  247 |         expect.soft(response.ok()).toBeTruthy();
  248 |       });
  249 |     }
  250 |   });
  251 | 
  252 |   test(`Verify that all ${quantityLinks} links in the tft-sitemap return a successful status code`, async ({
  253 |     request,
  254 |   }) => {
  255 |     let filteredLinks;
  256 | 
  257 |     await test.step(`Parse ${quantityLinks} links from tft-sitemap: ${process.env.BASE_URL}/tft/sitemap.xml`, async () => {
  258 |       const response = await request.get(`${process.env.BASE_URL}/tft/sitemap.xml`);
  259 |       await test.step(`Expected Result: Response tft-sitemap returns with ${response.status()}`, async () => {
  260 |         expect(response.ok()).toBeTruthy();
  261 |       });
  262 |       const xmlData = await response.text();
  263 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  264 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  265 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  266 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  267 | 
  268 |       filteredLinks = arrayLinks
  269 |         .filter((match) => {
  270 |           const filterPattern = /mobalytics\.gg\/tft\/[a-z-]+/;
  271 |           return filterPattern.test(match.groups.link);
  272 |         })
  273 |         .slice(0, quantityLinks);
  274 | 
  275 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  276 |         expect(filteredLinks.length).toBeGreaterThan(0);
  277 |       });
  278 |     });
  279 | 
  280 |     for (const takeLink of filteredLinks) {
  281 |       const { link } = takeLink.groups; // extract group name for convenient usage
  282 |       let response;
  283 | 
  284 |       await test.step(`Send a GET request to ${link}`, async () => {
  285 |         response = await request.get(link);
  286 |       });
  287 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  288 |         expect.soft(response.ok()).toBeTruthy();
  289 |       });
  290 |     }
  291 |   });
  292 | 
  293 |   test(`Verify that all ${quantityLinks} links in the tft-set16-sitemap return a successful status code`, async ({
  294 |     request,
  295 |   }) => {
  296 |     let filteredLinks;
  297 | 
  298 |     await test.step(`Parse ${quantityLinks} links from tft-set16-sitemap: ${process.env.BASE_URL}/tft/set16/sitemap.xml`, async () => {
  299 |       const response = await request.get(`${process.env.BASE_URL}/tft/set16/sitemap.xml`);
  300 |       await test.step(`Expected Result: Response tft-set16-sitemap returns with ${response.status()}`, async () => {
> 301 |         expect(response.ok()).toBeTruthy();
      |                               ^ Error: expect(received).toBeTruthy()
  302 |       });
  303 |       const xmlData = await response.text();
  304 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  305 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  306 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  307 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  308 | 
  309 |       filteredLinks = arrayLinks
  310 |         .filter((match) => {
  311 |           const filterPattern = /mobalytics\.gg\/tft\/set16/;
  312 |           return filterPattern.test(match.groups.link);
  313 |         })
  314 |         .slice(0, quantityLinks);
  315 | 
  316 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  317 |         expect(filteredLinks.length).toBeGreaterThan(0);
  318 |       });
  319 |     });
  320 | 
  321 |     for (const takeLink of filteredLinks) {
  322 |       const { link } = takeLink.groups; // extract group name for convenient usage
  323 |       let response;
  324 | 
  325 |       await test.step(`Send a GET request to ${link}`, async () => {
  326 |         response = await request.get(link);
  327 |       });
  328 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  329 |         expect.soft(response.ok()).toBeTruthy();
  330 |       });
  331 |     }
  332 |   });
  333 | 
  334 |   test(`Verify that all ${quantityLinks} links in the tft-set4-5-sitemap return a successful status code`, async ({
  335 |     request,
  336 |   }) => {
  337 |     let filteredLinks;
  338 | 
  339 |     await test.step(`Parse ${quantityLinks} links from tft-set4-5-sitemap: ${process.env.BASE_URL}/tft/set4-5/sitemap.xml`, async () => {
  340 |       const response = await request.get(`${process.env.BASE_URL}/tft/set4-5/sitemap.xml`);
  341 |       await test.step(`Expected Result: Response tft-set4-5-sitemap returns with ${response.status()}`, async () => {
  342 |         expect(response.ok()).toBeTruthy();
  343 |       });
  344 |       const xmlData = await response.text();
  345 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  346 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  347 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  348 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  349 | 
  350 |       filteredLinks = arrayLinks
  351 |         .filter((match) => {
  352 |           const filterPattern = /mobalytics\.gg\/tft\/set4-5/;
  353 |           return filterPattern.test(match.groups.link);
  354 |         })
  355 |         .slice(0, quantityLinks);
  356 | 
  357 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  358 |         expect(filteredLinks.length).toBeGreaterThan(0);
  359 |       });
  360 |     });
  361 | 
  362 |     for (const takeLink of filteredLinks) {
  363 |       const { link } = takeLink.groups; // extract group name for convenient usage
  364 |       let response;
  365 | 
  366 |       await test.step(`Send a GET request to ${link}`, async () => {
  367 |         response = await request.get(link);
  368 |       });
  369 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  370 |         expect.soft(response.ok()).toBeTruthy();
  371 |       });
  372 |     }
  373 |   });
  374 | 
  375 |   test(`Verify that all ${quantityLinks} links in the destiny-2-sitemap return a successful status code`, async ({
  376 |     request,
  377 |   }) => {
  378 |     let filteredLinks;
  379 | 
  380 |     await test.step(`Parse ${quantityLinks} links from destiny-2-sitemap: ${process.env.BASE_URL}/destiny-2/sitemap.xml`, async () => {
  381 |       const response = await request.get(`${process.env.BASE_URL}/destiny-2/sitemap.xml`);
  382 |       await test.step(`Expected Result: Response destiny-2-sitemap returns with ${response.status()}`, async () => {
  383 |         expect(response.ok()).toBeTruthy();
  384 |       });
  385 |       const xmlData = await response.text();
  386 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  387 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  388 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  389 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  390 | 
  391 |       filteredLinks = arrayLinks
  392 |         .filter((match) => {
  393 |           const filterPattern = /mobalytics\.gg\/destiny-2\/builds\/[a-z-]+\/[a-z-]+\/[a-z-]+$/;
  394 |           return filterPattern.test(match.groups.link);
  395 |         })
  396 |         .slice(0, quantityLinks);
  397 | 
  398 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  399 |         expect(filteredLinks.length).toBeGreaterThan(0);
  400 |       });
  401 |     });
```