import { test, expect } from '@playwright/test';
import { projectListFromSitemap, projectSectionLinks } from '../src/helpers/index';

test(`Check project links in the main sitemap list ${process.env.URL_SITEMAP}`, async ({ page }) => {
  const isProd = process.env.BASE_URL === 'https://mobalytics.gg';

  await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
    await page.goto(process.env.URL_SITEMAP);
  });

  for (const { project, isPresentInProdSitemap, pathUrl } of projectListFromSitemap) {
    if (isProd && isPresentInProdSitemap === true) {
      await test.step(`Expected Result: ${project} is present in ${process.env.URL_SITEMAP}`, async () => {
        await expect.soft(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${pathUrl}`);
      });
    } else if (isProd && isPresentInProdSitemap === false) {
      await test.step(`Expected Result: ${project} is not present in ${process.env.URL_SITEMAP}`, async () => {
        await expect.soft(page.locator('#folder0')).not.toContainText(`${process.env.BASE_URL}${pathUrl}`);
      });
    } else {
      await test.step(`Expected Result: ${project} is present in ${process.env.URL_SITEMAP}`, async () => {
        await expect.soft(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${pathUrl}`);
      });
    }
  }
});

test.describe('Sitemap links return a successful status code for each project', async () => {
  test.describe.configure({ timeout: 600_000 });
  const quantityLinks = 10;

  projectSectionLinks.forEach((element) => {
    test(`Verify main pages for each project: ${process.env.BASE_URL}${element} return a successful status code`, async ({
      request,
    }) => {
      let response;
      await test.step(`Send a GET request to ${process.env.BASE_URL}${element}`, async () => {
        response = await request.get(`${process.env.BASE_URL}${element}`);
      });
      await test.step(`Response returns with status code: ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
    });
  });

  test(`Verify that all ${quantityLinks} links in the diablo-4-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from diablo-4-sitemap: ${process.env.BASE_URL}/diablo-4/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/diablo-4/sitemap.xml`);
      await test.step(`Expected Result: Response diablo-4-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/diablo-4\/builds/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract groupName for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the borderlands-4-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from borderlands-4-sitemap: ${process.env.BASE_URL}/borderlands-4/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/borderlands-4/sitemap.xml`);
      await test.step(`Expected Result: Response borderlands-4-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/borderlands-4\/wiki\/[a-z-]+(\/[a-z-]+)?/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract groupName for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the sitemap_index-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from sitemap_index-sitemap: ${process.env.BASE_URL}/sitemap_index.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/sitemap_index.xml`);
      await test.step(`Expected Result: Response sitemap_index-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern =
            /mobalytics\.gg\/(?!post|the-bazaar|marvel-rivals|2xko|diablo-4|news_category|valorant_category|tft_game|overwatch-)[\w-]+\-sitemap\.xml$/; //* added some links to exceptions because they are bugged
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract groupName for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the champions-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from champions-sitemap: ${process.env.BASE_URL}/champions-sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/champions-sitemap.xml`);
      await test.step(`Expected Result: Response champions-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/lol\/champions/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the valorant-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from valorant-sitemap: ${process.env.BASE_URL}/valorant/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/valorant/sitemap.xml`);
      await test.step(`Expected Result: Response valorant-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/valorant\/[a-z-]+/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the tft-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from tft-sitemap: ${process.env.BASE_URL}/tft/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/tft/sitemap.xml`);
      await test.step(`Expected Result: Response tft-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/tft\/[a-z-]+/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the tft-set16-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from tft-set16-sitemap: ${process.env.BASE_URL}/tft/set16/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/tft/set16/sitemap.xml`);
      await test.step(`Expected Result: Response tft-set16-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/tft\/set16/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the tft-set4-5-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from tft-set4-5-sitemap: ${process.env.BASE_URL}/tft/set4-5/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/tft/set4-5/sitemap.xml`);
      await test.step(`Expected Result: Response tft-set4-5-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/tft\/set4-5/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the destiny-2-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from destiny-2-sitemap: ${process.env.BASE_URL}/destiny-2/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/destiny-2/sitemap.xml`);
      await test.step(`Expected Result: Response destiny-2-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/destiny-2\/builds\/[a-z-]+\/[a-z-]+\/[a-z-]+$/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the arknights-endfield-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from arknights-endfield-sitemap: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/arknights-endfield/sitemap.xml`);
      await test.step(`Expected Result: Response arknights-endfield-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/arknights-endfield\/(characters|guides)?/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the 2xko-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from 2xko-sitemap: ${process.env.BASE_URL}/2xko/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/2xko/sitemap.xml`);
      await test.step(`Expected Result: Response 2xko-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/2xko/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the example-game-sitemap return a successful status code`, async ({
    request,
  }) => {
    test.skip(process.env.BASE_URL === 'https://mobalytics.gg', 'Skip example-game project on production');

    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from example-game-sitemap: ${process.env.BASE_URL}/example-game/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/example-game/sitemap.xml`);
      await test.step(`Expected Result: Response example-game-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/example-game/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the riftbound-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from riftbound-sitemap: ${process.env.BASE_URL}/riftbound/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/riftbound/sitemap.xml`);
      await test.step(`Expected Result: Response riftbound-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/riftbound/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the poe-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from poe-sitemap: ${process.env.BASE_URL}/poe/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/poe/sitemap.xml`);
      await test.step(`Expected Result: Response poe-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/poe(\/builds)?/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the hades-2-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from hades-2-sitemap: ${process.env.BASE_URL}/hades-2/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/hades-2/sitemap.xml`);
      await test.step(`Expected Result: Response hades-2-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/hades-2(\/builds)?/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the news-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from news-sitemap: ${process.env.BASE_URL}/news/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/news/sitemap.xml`);
      await test.step(`Expected Result: Response news-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/news/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the zzz-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from zzz-sitemap: ${process.env.BASE_URL}/zzz/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/zzz/sitemap.xml`);
      await test.step(`Expected Result: Response zzz-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/zzz\/(characters)?/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the elden-ring-nightreign-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from elden-ring-nightreign-sitemap: ${process.env.BASE_URL}/elden-ring-nightreign/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/elden-ring-nightreign/sitemap.xml`);
      await test.step(`Expected Result: Response elden-ring-nightreign-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/elden-ring-nightreign\/wiki\/catalysts/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the mhw-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from mhw-sitemap: ${process.env.BASE_URL}/mhw/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/mhw/sitemap.xml`);
      await test.step(`Expected Result: Response mhw-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/mhw/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the marvel-rivals-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from marvel-rivals-sitemap: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/marvel-rivals/sitemap.xml`);
      await test.step(`Expected Result: Response marvel-rivals-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/marvel-rivals/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the deadlock-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from deadlock-sitemap: ${process.env.BASE_URL}/deadlock/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/deadlock/sitemap.xml`);
      await test.step(`Expected Result: Response deadlock-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/deadlock/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the poe-2-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from poe-2-sitemap: ${process.env.BASE_URL}/poe-2/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/poe-2/sitemap.xml`);
      await test.step(`Expected Result: Response poe-2-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/poe-2\/builds/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the the-bazaar-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from the-bazaar-sitemap: ${process.env.BASE_URL}/the-bazaar/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/the-bazaar/sitemap.xml`);
      await test.step(`Expected Result: Response the-bazaar-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/the-bazaar\/(builds|guides)/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the endfield-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from endfield-sitemap: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/arknights-endfield/sitemap.xml`);
      await test.step(`Expected Result: Response endfield-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/arknights-endfield/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the marathon-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from marathon-sitemap: ${process.env.BASE_URL}/marathon/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/marathon/sitemap.xml`);
      await test.step(`Expected Result: Response marathon-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/marathon/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the overwatch-sitemap return a successful status code`, async ({
    request,
  }) => {
    test.skip(process.env.BASE_URL === 'https://mobalytics.gg', 'Skip this test on prod sitemap');
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from overwatch-sitemap: ${process.env.BASE_URL}/overwatch/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/overwatch/sitemap.xml`);
      await test.step(`Expected Result: Response overwatch-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/overwatch/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });

  test(`Verify that all ${quantityLinks} links in the product-sitemap return a successful status code`, async ({
    request,
  }) => {
    let filteredLinks;

    await test.step(`Parse ${quantityLinks} links from product-sitemap: ${process.env.BASE_URL}/product-sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/product-sitemap.xml`);
      await test.step(`Expected Result: Response product-sitemap returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/lol/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);

      await test.step(`Expected Result: Total parsed links greater than 0 in sitemap: ${arrayLinks.length}`, async () => {
        expect(filteredLinks.length).toBeGreaterThan(0);
      });
    });

    for (const takeLink of filteredLinks) {
      const { link } = takeLink.groups; // extract group name for convenient usage
      let response;

      await test.step(`Send a GET request to ${link}`, async () => {
        response = await request.get(link);
      });
      await test.step(`Expected Result: Response ${link} returns with status: ${response.status()}`, async () => {
        expect.soft(response.ok()).toBeTruthy();
      });
    }
  });
});

// sitemapList.forEach(({ linkInList, isPresentInSitemap, pathUrl }) => {
//   test(`Sitemap: ${process.env.BASE_URL}${pathUrl} is opened successfully`, async ({ page }) => {
//     const isProd = process.env.BASE_URL === 'https://mobalytics.gg';
//     test.skip(isProd && isPresentInSitemap === false, `${linkInList} is not revealed on prod`);

//     await test.step(`Open sitemap url: ${process.env.BASE_URL}${pathUrl}`, async () => {
//       await page.goto(`${process.env.BASE_URL}${pathUrl}`, { waitUntil: 'domcontentloaded' });
//     });

//     if (isProd && isPresentInSitemap === true) {
//       await test.step(`Expected Result: ${process.env.URL_SITEMAP}${pathUrl} is opened successfully on prod`, async () => {
//         await expect(page).toHaveTitle('XML Sitemap');
//         await expect(page.locator('#sitemap')).toContainText(`${linkInList}`);
//       });
//     } else {
//       await test.step(`Expected Result: ${process.env.URL_SITEMAP}${pathUrl} is opened successfully on stg`, async () => {
//         await expect(page).toHaveTitle('XML Sitemap');
//         await expect(page.locator('#sitemap')).toContainText(`${linkInList}`);
//       });
//     }
//   });
// });

// test(`Array for in: Checking sitemap for all games in the list on ${process.env.URL_SITEMAP}`, async ({ page }) => {
//   const isProd = process.env.BASE_URL.includes('https://mobalytics.gg');

//   const gameList = [
//     { game: 'ZZZ', isPresentInSitemap: true, testUrl: '/zzz/sitemap.xml' },
//     { game: 'Valorant', isPresentInSitemap: true, testUrl: '/valorant/sitemap.xml' },
//     { game: 'Sitemap Index', isPresentInSitemap: true, testUrl: '/sitemap_index.xml' },
//     { game: 'Product Sitemap', isPresentInSitemap: true, testUrl: '/product-sitemap.xml' },
//     { game: 'Sitemap', isPresentInSitemap: true, testUrl: '/sitemap_index.xml' },
//     { game: 'Champions', isPresentInSitemap: true, testUrl: '/champions-sitemap.xml' },
//     { game: 'TFT', isPresentInSitemap: true, testUrl: '/tft/sitemap.xml' },
//     { game: 'Set15', isPresentInSitemap: true, testUrl: '/tft/set16/sitemap.xml' },
//     { game: 'Destiny 2', isPresentInSitemap: true, testUrl: '/destiny-2/sitemap.xml' },
//     { game: 'Diablo 4', isPresentInSitemap: true, testUrl: '/diablo-4/sitemap.xml' },
//     { game: 'Elden Ring', isPresentInSitemap: true, testUrl: '/elden-ring-nightreign/sitemap.xml' },
//     { game: 'Marvel Rivals', isPresentInSitemap: true, testUrl: '/marvel-rivals/sitemap.xml' },
//     { game: 'Monster Hunter Wilds', isPresentInSitemap: true, testUrl: '/mhw/sitemap.xml' },
//     { game: 'Hades 2', isPresentInSitemap: true, testUrl: '/hades-2/sitemap.xml' },
//     { game: 'News', isPresentInSitemap: true, testUrl: '/news/sitemap.xml' },
//     { game: 'Borderlands 4', isPresentInSitemap: true, testUrl: '/borderlands-4/sitemap.xml' },
//     { game: 'Deadlock', isPresentInSitemap: true, testUrl: '/deadlock/sitemap.xml' },
//     { game: 'PoE 2', isPresentInSitemap: true, testUrl: '/poe-2/sitemap.xml' },
//     { game: 'The Bazaar', isPresentInSitemap: true, testUrl: '/the-bazaar/sitemap.xml' },
//     { game: 'PoE', isPresentInSitemap: true, testUrl: '/poe/sitemap.xml' },
//     { game: 'Riftbound', isPresentInSitemap: false, testUrl: '/riftbound/sitemap.xml' },
//     { game: '2XKO', isPresentInSitemap: false, testUrl: '/2xko/sitemap.xml' },
//   ];

//   await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
//     await page.goto(process.env.URL_SITEMAP);
//   });

//   for (const index in gameList) {
//     if (isProd && gameList[index].isPresentInSitemap === true) {
//       await test.step(`Expected Result: ${gameList[index].game} is present in ${process.env.URL_SITEMAP}`, async () => {
//         await expect(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${gameList[index].testUrl}`);
//       });
//     } else if (isProd && gameList[index].isPresentInSitemap === false) {
//       await test.step(`Expected Result: ${gameList[index].game} is not present in ${process.env.URL_SITEMAP}`, async () => {
//         await expect(page.locator('#folder0')).not.toContainText(`${process.env.BASE_URL}${gameList[index].testUrl}`);
//       });
//     } else if (!isProd) {
//       await test.step(`Expected Result: ${gameList[index].game} is present in ${process.env.URL_SITEMAP}`, async () => {
//         await expect(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${gameList[index].testUrl}`);
//       });
//     }
//   }
// });

// test(`Array for of: Checking sitemap for games in the list on ${process.env.URL_SITEMAP}`, async ({ page }) => {
//   const isProd = process.env.BASE_URL.includes('https://mobalytics.gg');
//   const gamesList = {
//     ZZZ: { isPresentInSitemap: true, testUrl: '/zzz/sitemap.xml' },
//     VALORANT: { isPresentInSitemap: true, testUrl: '/valorant/sitemap.xml' },
//     SITEMAP_INDEX: { isPresentInSitemap: true, testUrl: '/sitemap_index.xml' },
//     PRODUCT_SITEMAP: { isPresentInSitemap: true, testUrl: '/product-sitemap.xml' },
//     SITEMAP: { isPresentInSitemap: true, testUrl: '/sitemap_index.xml' },
//     CHAMPIONS: { isPresentInSitemap: true, testUrl: '/champions-sitemap.xml' },
//     TFT: { isPresentInSitemap: true, testUrl: '/tft/sitemap.xml' },
//     SET15: { isPresentInSitemap: true, testUrl: '/tft/set16/sitemap.xml' },
//     DESTINY_2: { isPresentInSitemap: true, testUrl: '/destiny-2/sitemap.xml' },
//     DIABLO_4: { isPresentInSitemap: true, testUrl: '/diablo-4/sitemap.xml' },
//     ELDEN_RING: { isPresentInSitemap: true, testUrl: '/elden-ring-nightreign/sitemap.xml' },
//     MARVEL_RIVALS: { isPresentInSitemap: true, testUrl: '/marvel-rivals/sitemap.xml' },
//     MHV: { isPresentInSitemap: true, testUrl: '/mhw/sitemap.xml' },
//     HADES2: { isPresentInSitemap: true, testUrl: '/hades-2/sitemap.xml' },
//     NEWS: { isPresentInSitemap: true, testUrl: '/news/sitemap.xml' },
//     BORDERLANDS4: { isPresentInSitemap: true, testUrl: '/borderlands-4/sitemap.xml' },
//     DEADLOCK: { isPresentInSitemap: true, testUrl: '/deadlock/sitemap.xml' },
//     POE_2: { isPresentInSitemap: true, testUrl: '/poe-2/sitemap.xml' },
//     BAZAAR: { isPresentInSitemap: true, testUrl: '/the-bazaar/sitemap.xml' },
//     POE: { isPresentInSitemap: true, testUrl: '/poe/sitemap.xml' },
//     RIFTBOUND: { isPresentInSitemap: false, testUrl: '/riftbound/sitemap.xml' },
//     X2KO: { isPresentInSitemap: false, testUrl: '/2xko/sitemap.xml' },
//   };
//   const gameKeys = Object.keys(gamesList);

//   await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
//     await page.goto(process.env.URL_SITEMAP);
//   });

//   for (const game of gameKeys) {
//     if (isProd && gamesList[game].isPresentInSitemap === true) {
//       await test.step(`Expected Result: ${game} is present in ${process.env.URL_SITEMAP}`, async () => {
//         await expect(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${gamesList[game].testUrl}`);
//       });
//     } else if (isProd && gamesList[game].isPresentInSitemap === false) {
//       await test.step(`Expected Result: ${game} is not present in ${process.env.URL_SITEMAP}`, async () => {
//         await expect(page.locator('#folder0')).not.toContainText(`${process.env.BASE_URL}${gamesList[game].testUrl}`);
//       });
//     } else if (!isProd) {
//       await test.step(`Expected Result: ${game} is present in ${process.env.URL_SITEMAP}`, async () => {
//         await expect(page.locator('#folder0')).toContainText(`${process.env.BASE_URL}${gamesList[game].testUrl}`);
//       });
//     }
//   }
// });

// const GAMES = {
//   ZZZ: { isPresentInSitemap: true, testUrl: "/zzz/sitemap.xml" },
//   VALORANT: { isPresentInSitemap: true, testUrl: `/valorant/sitemap.xml` },
//   SITEMAP_INDEX: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
//   PRODUCT_SITEMAP: {
//     isPresentInSitemap: true,
//     testUrl: `/product-sitemap.xml`,
//   },
//   SITEMAP: { isPresentInSitemap: true, testUrl: `/sitemap_index.xml` },
//   CHAMPIONS: { isPresentInSitemap: true, testUrl: `/champions-sitemap.xml` },
//   TFT: { isPresentInSitemap: true, testUrl: `/tft/sitemap.xml` },
//   SET15: { isPresentInSitemap: true, testUrl: `/tft/set15/sitemap.xml` },
//   LOST_ARK: { isPresentInSitemap: true, testUrl: `/lost-ark/sitemap.xml` },
//   DESTINY_2: { isPresentInSitemap: true, testUrl: `/destiny-2/sitemap.xml` },
//   DIABLO_4: { isPresentInSitemap: true, testUrl: `/diablo-4/sitemap.xml` },
//   ELDEN_RING: {
//     isPresentInSitemap: true,
//     testUrl: `/elden-ring-nightreign/sitemap.xml`,
//   },
//   MARVEL_RIVALS: {
//     isPresentInSitemap: true,
//     testUrl: `/marvel-rivals/sitemap.xml`,
//   },
//   MHV: { isPresentInSitemap: true, testUrl: `/mhw/sitemap.xml` },
//   HADES2: {
//     isPresentInSitemap: true,
//     testUrl: `/hades-2/sitemap.xml`,
//   },
//   NEWS: { isPresentInSitemap: true, testUrl: `/news/sitemap.xml` },
//   BORDERLANDS4: {
//     isPresentInSitemap: true,
//     testUrl: `/borderlands-4/sitemap.xml`,
//   },
//   DEADLOCK: { isPresentInSitemap: true, testUrl: `/deadlock/sitemap.xml` },
//   POE_2: { isPresentInSitemap: true, testUrl: `/poe-2/sitemap.xml` },
//   BAZAAR: { isPresentInSitemap: true, testUrl: `/the-bazaar/sitemap.xml` },
// };
// const gamesList = Object.keys(GAMES);

// for (let gamekey of gamesList) {
//   test(`Checking sitemap for ${gamekey} game on ${process.env.URL_SITEMAP}`, async ({ page }) => {
//     const game = GAMES[gamekey];
//     await test.step(`Open sitemap url: ${process.env.URL_SITEMAP}`, async () => {
//       await page.goto(process.env.URL_SITEMAP);
//     });

//     await test.step(`Expected Result: ${gamekey} is present in ${process.env.URL_SITEMAP}`, async () => {
//       if (game.isPresentInSitemap === true) {
//         await expect(page.locator("#folder0")).toContainText(`${process.env.BASE_URL}${game.testUrl}`);
//       } else {
//         await expect(page.locator("#folder0")).not.toContainText(`${process.env.BASE_URL}${game.testUrl}`);
//       }
//     });
//   });
// }
