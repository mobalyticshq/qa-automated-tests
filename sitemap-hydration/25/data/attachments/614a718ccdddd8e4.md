# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sitemap.test.js >> Sitemap links return a successful status code for each project >> Verify that all 100 links in the riftbound-sitemap return a successful status code
- Location: e2e-tests/sitemap.test.js:541:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  477 |         })
  478 |         .slice(0, quantityLinks);
  479 | 
  480 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  481 |         expect(filteredLinks.length).toBeGreaterThan(0);
  482 |       });
  483 |     });
  484 | 
  485 |     for (const takeLink of filteredLinks) {
  486 |       const { link } = takeLink.groups; // extract group name for convenient usage
  487 |       let response;
  488 | 
  489 |       await test.step(`Send a GET request to ${link}`, async () => {
  490 |         response = await request.get(link);
  491 |       });
  492 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  493 |         expect.soft(response.ok()).toBeTruthy();
  494 |       });
  495 |     }
  496 |   });
  497 | 
  498 |   test(`Verify that all ${quantityLinks} links in the example-game-sitemap return a successful status code`, async ({
  499 |     request,
  500 |   }) => {
  501 |     test.skip(process.env.BASE_URL === 'https://mobalytics.gg', 'Skip example-game project on production');
  502 | 
  503 |     let filteredLinks;
  504 | 
  505 |     await test.step(`Parse ${quantityLinks} links from example-game-sitemap: ${process.env.BASE_URL}/example-game/sitemap.xml`, async () => {
  506 |       const response = await request.get(`${process.env.BASE_URL}/example-game/sitemap.xml`);
  507 |       await test.step(`Expected Result: Response example-game-sitemap returns with ${response.status()}`, async () => {
  508 |         expect(response.ok()).toBeTruthy();
  509 |       });
  510 |       const xmlData = await response.text();
  511 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  512 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  513 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  514 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  515 | 
  516 |       filteredLinks = arrayLinks
  517 |         .filter((match) => {
  518 |           const filterPattern = /mobalytics\.gg\/example-game/;
  519 |           return filterPattern.test(match.groups.link);
  520 |         })
  521 |         .slice(0, quantityLinks);
  522 | 
  523 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  524 |         expect(filteredLinks.length).toBeGreaterThan(0);
  525 |       });
  526 |     });
  527 | 
  528 |     for (const takeLink of filteredLinks) {
  529 |       const { link } = takeLink.groups; // extract group name for convenient usage
  530 |       let response;
  531 | 
  532 |       await test.step(`Send a GET request to ${link}`, async () => {
  533 |         response = await request.get(link);
  534 |       });
  535 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  536 |         expect.soft(response.ok()).toBeTruthy();
  537 |       });
  538 |     }
  539 |   });
  540 | 
  541 |   test(`Verify that all ${quantityLinks} links in the riftbound-sitemap return a successful status code`, async ({
  542 |     request,
  543 |   }) => {
  544 |     let filteredLinks;
  545 | 
  546 |     await test.step(`Parse ${quantityLinks} links from riftbound-sitemap: ${process.env.BASE_URL}/riftbound/sitemap.xml`, async () => {
  547 |       const response = await request.get(`${process.env.BASE_URL}/riftbound/sitemap.xml`);
  548 |       await test.step(`Expected Result: Response riftbound-sitemap returns with ${response.status()}`, async () => {
  549 |         expect(response.ok()).toBeTruthy();
  550 |       });
  551 |       const xmlData = await response.text();
  552 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  553 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  554 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  555 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  556 | 
  557 |       filteredLinks = arrayLinks
  558 |         .filter((match) => {
  559 |           const filterPattern = /mobalytics\.gg\/riftbound/;
  560 |           return filterPattern.test(match.groups.link);
  561 |         })
  562 |         .slice(0, quantityLinks);
  563 | 
  564 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  565 |         expect(filteredLinks.length).toBeGreaterThan(0);
  566 |       });
  567 |     });
  568 | 
  569 |     for (const takeLink of filteredLinks) {
  570 |       const { link } = takeLink.groups; // extract group name for convenient usage
  571 |       let response;
  572 | 
  573 |       await test.step(`Send a GET request to ${link}`, async () => {
  574 |         response = await request.get(link);
  575 |       });
  576 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
> 577 |         expect.soft(response.ok()).toBeTruthy();
      |                                    ^ Error: expect(received).toBeTruthy()
  578 |       });
  579 |     }
  580 |   });
  581 | 
  582 |   test(`Verify that all ${quantityLinks} links in the poe-sitemap return a successful status code`, async ({
  583 |     request,
  584 |   }) => {
  585 |     let filteredLinks;
  586 | 
  587 |     await test.step(`Parse ${quantityLinks} links from poe-sitemap: ${process.env.BASE_URL}/poe/sitemap.xml`, async () => {
  588 |       const response = await request.get(`${process.env.BASE_URL}/poe/sitemap.xml`);
  589 |       await test.step(`Expected Result: Response poe-sitemap returns with ${response.status()}`, async () => {
  590 |         expect(response.ok()).toBeTruthy();
  591 |       });
  592 |       const xmlData = await response.text();
  593 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  594 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  595 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  596 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  597 | 
  598 |       filteredLinks = arrayLinks
  599 |         .filter((match) => {
  600 |           const filterPattern = /mobalytics\.gg\/poe(\/builds)?/;
  601 |           return filterPattern.test(match.groups.link);
  602 |         })
  603 |         .slice(0, quantityLinks);
  604 | 
  605 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  606 |         expect(filteredLinks.length).toBeGreaterThan(0);
  607 |       });
  608 |     });
  609 | 
  610 |     for (const takeLink of filteredLinks) {
  611 |       const { link } = takeLink.groups; // extract group name for convenient usage
  612 |       let response;
  613 | 
  614 |       await test.step(`Send a GET request to ${link}`, async () => {
  615 |         response = await request.get(link);
  616 |       });
  617 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  618 |         expect.soft(response.ok()).toBeTruthy();
  619 |       });
  620 |     }
  621 |   });
  622 | 
  623 |   test(`Verify that all ${quantityLinks} links in the hades-2-sitemap return a successful status code`, async ({
  624 |     request,
  625 |   }) => {
  626 |     let filteredLinks;
  627 | 
  628 |     await test.step(`Parse ${quantityLinks} links from hades-2-sitemap: ${process.env.BASE_URL}/hades-2/sitemap.xml`, async () => {
  629 |       const response = await request.get(`${process.env.BASE_URL}/hades-2/sitemap.xml`);
  630 |       await test.step(`Expected Result: Response hades-2-sitemap returns with ${response.status()}`, async () => {
  631 |         expect(response.ok()).toBeTruthy();
  632 |       });
  633 |       const xmlData = await response.text();
  634 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  635 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  636 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  637 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  638 | 
  639 |       filteredLinks = arrayLinks
  640 |         .filter((match) => {
  641 |           const filterPattern = /mobalytics\.gg\/hades-2(\/builds)?/;
  642 |           return filterPattern.test(match.groups.link);
  643 |         })
  644 |         .slice(0, quantityLinks);
  645 | 
  646 |       await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
  647 |         expect(filteredLinks.length).toBeGreaterThan(0);
  648 |       });
  649 |     });
  650 | 
  651 |     for (const takeLink of filteredLinks) {
  652 |       const { link } = takeLink.groups; // extract group name for convenient usage
  653 |       let response;
  654 | 
  655 |       await test.step(`Send a GET request to ${link}`, async () => {
  656 |         response = await request.get(link);
  657 |       });
  658 |       await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
  659 |         expect.soft(response.ok()).toBeTruthy();
  660 |       });
  661 |     }
  662 |   });
  663 | 
  664 |   test(`Verify that all ${quantityLinks} links in the news-sitemap return a successful status code`, async ({
  665 |     request,
  666 |   }) => {
  667 |     let filteredLinks;
  668 | 
  669 |     await test.step(`Parse ${quantityLinks} links from news-sitemap: ${process.env.BASE_URL}/news/sitemap.xml`, async () => {
  670 |       const response = await request.get(`${process.env.BASE_URL}/news/sitemap.xml`);
  671 |       await test.step(`Expected Result: Response news-sitemap returns with ${response.status()}`, async () => {
  672 |         expect(response.ok()).toBeTruthy();
  673 |       });
  674 |       const xmlData = await response.text();
  675 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  676 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  677 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
```