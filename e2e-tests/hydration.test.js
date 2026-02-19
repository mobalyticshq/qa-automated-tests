import { expect } from '@playwright/test';
import { test } from '../src/fixtures/fixture';
import { hydrationLinks } from '../src/helpers/hydrationLinks';

test.describe('Check hydration is successfully for each project', () => {
  test.describe.configure({ timeout: 600_000 });
  const quantityLinks = 50;

  // test(`Check that hydration is ok on Diablo-4`, async ({ page, request }) => {
  //   let filteredLinks;

  //   await test.step(`Parse up to ${quantityLinks} links from diablo-4 sitemap: ${process.env.BASE_URL}/diablo-4/sitemap.xml`, async () => {
  //     const response = await request.get(`${process.env.BASE_URL}/diablo-4/sitemap.xml`);
  //     await test.step(`Expected Result: ${process.env.BASE_URL}/diablo-4/sitemap.xml returns with ${response.status()}`, async () => {
  //       expect(response.ok()).toBeTruthy();
  //     });
  //     const xmlData = await response.text();
  //     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  //     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  //     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  //     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

  //     filteredLinks = arrayLinks
  //       .filter((match) => {
  //         const filterPattern = /mobalytics\.gg\/diablo-4\/(builds|guides)\/[-a-z]+$/;
  //         return filterPattern.test(match.groups.link);
  //       })
  //       .slice(0, quantityLinks);
  //   });

  //   for (const takeLink of filteredLinks) {
  //     const consoleMessages = [];
  //     const pageErrors = [];
  //     page.on('console', (msg) => {
  //       if (msg.type() === 'error') {
  //         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  //         // console.log(consoleInfo);
  //         consoleMessages.push(consoleInfo);
  //       }
  //     });
  //     page.on('pageerror', (error) => {
  //       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  //       // if (error.message.match(/Minified React error #(418|423)/i)) {
  //       //   console.log(errorInfo);
  //       // }
  //       pageErrors.push(errorInfo);
  //     });
  //     const { link } = takeLink.groups; // extract groupName for convenient usage

  //     await test.step(`Open parsed page: ${link}`, async () => {
  //       await page.goto(link);
  //       await page.waitForTimeout(1000);
  //     });

  //     const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

  //     await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  //       expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  //       expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  //       expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  //       expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  //     });
  //   }
  // });

  test(`Check that hydration is ok on Valorant`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from valorant sitemap: ${process.env.BASE_URL}/valorant/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/valorant/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/valorant/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/valorant/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Destiny-2`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Destiny-2 sitemap: ${process.env.BASE_URL}/destiny-2/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/destiny-2/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/destiny-2/sitemap.xml returns with ${response.status()}`, async () => {
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
            /mobalytics\.gg\/destiny-2\/builds\/(titan|warlock|hunter)\/(void|strand|prismatic|arc|solar|stasis)\/[-a-z]+/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Marathon`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Marathon sitemap: ${process.env.BASE_URL}/marathon/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/marathon/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/marathon/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Endfield`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Endfield sitemap: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/arknights-endfield/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on 2xko`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from 2xko sitemap: ${process.env.BASE_URL}/2xko/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/2xko/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/2xko/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Riftbound`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Riftbound sitemap: ${process.env.BASE_URL}/riftbound/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/riftbound/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/riftbound/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on PoE`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from PoE sitemap: ${process.env.BASE_URL}/poe/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/poe/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/poe/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/poe\/(builds|guides)\/[-a-z]+$/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Hades-2`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Hades-2 sitemap: ${process.env.BASE_URL}/hades-2/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/hades-2/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/hades-2/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/hades-2/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on PoE-2`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from PoE-2 sitemap: ${process.env.BASE_URL}/poe-2/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/poe-2/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/poe-2/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/poe-2\/(builds|guides|tier-lists)\/[-a-z]+$/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Borderlands-4`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Borderlands-4 sitemap: ${process.env.BASE_URL}/borderlands-4/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/borderlands-4/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/borderlands-4/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/borderlands-4/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on News`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from News sitemap: ${process.env.BASE_URL}/news/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/news/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/news/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on ZZZ`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from ZZZ sitemap: ${process.env.BASE_URL}/zzz/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/zzz/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/zzz/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/zzz/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Marvel-Rivals`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Marvel-Rivals sitemap: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/marvel-rivals/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on MHW`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from MHW sitemap: ${process.env.BASE_URL}/mhw/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/mhw/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/mhw/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Deadlock`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Deadlock sitemap: ${process.env.BASE_URL}/deadlock/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/deadlock/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/deadlock/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Bazaar`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Bazaar sitemap: ${process.env.BASE_URL}/the-bazaar/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/the-bazaar/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/the-bazaar/sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/the-bazaar/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  // test(`Check that hydration is ok on TFT`, async ({ page, request }) => {
  //   let filteredLinks;

  //   await test.step(`Parse up to ${quantityLinks} links from TFT sitemap: ${process.env.BASE_URL}/tft/sitemap.xml`, async () => {
  //     const response = await request.get(`${process.env.BASE_URL}/tft/sitemap.xml`);
  //     await test.step(`Expected Result: ${process.env.BASE_URL}/tft/sitemap.xml returns with ${response.status()}`, async () => {
  //       expect(response.ok()).toBeTruthy();
  //     });
  //     const xmlData = await response.text();
  //     const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  //     const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  //     // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  //     // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

  //     filteredLinks = arrayLinks
  //       .filter((match) => {
  //         const filterPattern = /mobalytics\.gg\/tft/;
  //         return filterPattern.test(match.groups.link);
  //       })
  //       .slice(0, quantityLinks);
  //   });

  //   for (const takeLink of filteredLinks) {
  //     const consoleMessages = [];
  //     const pageErrors = [];
  //     page.on('console', (msg) => {
  //       if (msg.type() === 'error') {
  //         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  //         // console.log(consoleInfo);
  //         consoleMessages.push(consoleInfo);
  //       }
  //     });
  //     page.on('pageerror', (error) => {
  //       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  //       // if (error.message.match(/Minified React error #(418|423)/i)) {
  //       //   console.log(errorInfo);
  //       // }
  //       pageErrors.push(errorInfo);
  //     });
  //     const { link } = takeLink.groups; // extract groupName for convenient usage

  //     await test.step(`Open parsed page: ${link}`, async () => {
  //       await page.goto(link);
  //       await page.waitForTimeout(1000);
  //     });

  //     const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

  //     await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  //       expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  //       expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  //       expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  //       expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  //     });
  //   }
  // });

  test(`Check that hydration is ok on TFT-Set16`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from TFT-Set16 sitemap: ${process.env.BASE_URL}/tft/set16/sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/tft/set16/sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/tft/set16/sitemap.xml returns with ${response.status()}`, async () => {
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
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });

  test(`Check that hydration is ok on Champions-Sitemap`, async ({ page, request }) => {
    let filteredLinks;

    await test.step(`Parse up to ${quantityLinks} links from Champions-sitemap sitemap: ${process.env.BASE_URL}/champions-sitemap.xml`, async () => {
      const response = await request.get(`${process.env.BASE_URL}/champions-sitemap.xml`);
      await test.step(`Expected Result: ${process.env.BASE_URL}/champions-sitemap.xml returns with ${response.status()}`, async () => {
        expect(response.ok()).toBeTruthy();
      });
      const xmlData = await response.text();
      const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
      const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
      // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
      // Second step: Transform Object [RegExp String Iterator] {} into array with object matches

      filteredLinks = arrayLinks
        .filter((match) => {
          const filterPattern = /mobalytics\.gg\/lol\/champions\/[a-z]+\/build$/;
          return filterPattern.test(match.groups.link);
        })
        .slice(0, quantityLinks);
    });

    for (const takeLink of filteredLinks) {
      const consoleMessages = [];
      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
          // console.log(consoleInfo);
          consoleMessages.push(consoleInfo);
        }
      });
      page.on('pageerror', (error) => {
        const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
        // if (error.message.match(/Minified React error #(418|423)/i)) {
        //   console.log(errorInfo);
        // }
        pageErrors.push(errorInfo);
      });
      const { link } = takeLink.groups; // extract groupName for convenient usage

      await test.step(`Open parsed page: ${link}`, async () => {
        await page.goto(link);
        await page.waitForTimeout(1000);
      });

      const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();

      await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
        expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
        expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
        expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      });
    }
  });
});
