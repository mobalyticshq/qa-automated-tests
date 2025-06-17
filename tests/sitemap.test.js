import { test, expect } from "@playwright/test";

const PROD_SITEMAP = "https://mobalytics.gg/sitemap.xml";

test(`There is no a new game on prod sitemap`, async ({ page }) => {
  const NEW_GAME = "https://mobalytics.gg/zzz/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: There is no ${NEW_GAME} in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).not.toContainText(NEW_GAME);
  });
});

test(`Sitemap_index link is present on prod sitemap`, async ({ page }) => {
  const SITEMAP_INDEX = "https://mobalytics.gg/sitemap_index.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${SITEMAP_INDEX} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SITEMAP_INDEX);
  });
});

test(`Product-sitemap link is present on prod sitemap`, async ({
  page,
}) => {
  const PRODUCT_SITEMAP = "https://mobalytics.gg/product-sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${PRODUCT_SITEMAP} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(PRODUCT_SITEMAP);
  });
});

test(`Valorant link is present on prod sitemap`, async ({ page }) => {
  const VALORANT = "https://mobalytics.gg/valorant/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${VALORANT} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(VALORANT);
  });
});

test(`TFT link is present on prod sitemap`, async ({ page }) => {
  const TFT = "https://mobalytics.gg/tft/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${TFT} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(TFT);
  });
});

test(`Set 14 link is present on prod sitemap`, async ({ page }) => {
  const SET14 = "https://mobalytics.gg/tft/set14/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${SET14} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SET14);
  });
});

test(`Set 10 link is present on prod sitemap`, async ({ page }) => {
  const SET10 = "https://mobalytics.gg/tft/set10/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${SET10} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SET10);
  });
});

test(`Lost Ark link is present on prod sitemap`, async ({ page }) => {
  const LOST_ARK = "https://mobalytics.gg/lost-ark/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${LOST_ARK} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(LOST_ARK);
  });
});

test(`Destiny 2 link is present on prod sitemap`, async ({ page }) => {
  const DESTINY_2 = "https://mobalytics.gg/destiny-2/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${DESTINY_2} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DESTINY_2);
  });
});

test(`Diablo 4 link is present on prod sitemap`, async ({ page }) => {
  const DIABLO_4 = "https://mobalytics.gg/diablo-4/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${DIABLO_4} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DIABLO_4);
  });
});

test(`Elden Ring link is present on prod sitemap`, async ({ page }) => {
  const ELDEN_RING = "https://mobalytics.gg/elden-ring-nightreign/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${ELDEN_RING} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(ELDEN_RING);
  });
});

test(`Marvel Rivals link is present on prod sitemap`, async ({ page }) => {
  const MARVEL_RIVALS = "https://mobalytics.gg/marvel-rivals/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${MARVEL_RIVALS} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(MARVEL_RIVALS);
  });
});

test(`MHW link is present on prod sitemap`, async ({ page }) => {
  const MHV = "https://mobalytics.gg/mhw/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${MHV} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(MHV);
  });
});

test(`Deadlock link is present on prod sitemap`, async ({ page }) => {
  const DEADLOCK = "https://mobalytics.gg/deadlock/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${DEADLOCK} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DEADLOCK);
  });
});

test(`PoE link is present on prod sitemap`, async ({ page }) => {
  const POE_2 = "https://mobalytics.gg/poe-2/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${POE_2} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(POE_2);
  });
});

test(`Bazaar link is present on prod sitemap`, async ({ page }) => {
  const BAZAAR = "https://mobalytics.gg/the-bazaar/sitemap.xml";

  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${BAZAAR} is present in ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(BAZAAR);
  });
});
