import { test, expect } from "@playwright/test";

const PROD_SITEMAP = "https://mobalytics.gg/sitemap.xml";
const NEW_GAME = "https://mobalytics.gg/zzz/sitemap.xml";

test(`There is no a new game on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: There is no ${NEW_GAME} in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).not.toContainText(NEW_GAME);
  });
});

const SITEMAP_INDEX = "https://mobalytics.gg/sitemap_index.xml";

test(`Sitemap_index link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${SITEMAP_INDEX} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SITEMAP_INDEX);
  });
});

const PRODUCT_SITEMAP = "https://mobalytics.gg/product-sitemap.xml";

test(`Product-sitemap link is present on the prod sitemap`, async ({
  page,
}) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${PRODUCT_SITEMAP} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(PRODUCT_SITEMAP);
  });
});

const VALORANT = "https://mobalytics.gg/valorant/sitemap.xml";

test(`Valorant link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${VALORANT} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(VALORANT);
  });
});

const TFT = "https://mobalytics.gg/tft/sitemap.xml";

test(`TFT link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${TFT} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(TFT);
  });
});

const SET14 = "https://mobalytics.gg/tft/set14/sitemap.xml";

test(`Set 14 link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${SET14} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SET14);
  });
});

const SET10 = "https://mobalytics.gg/tft/set10/sitemap.xml";

test(`Set 10 link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${SET10} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SET10);
  });
});

const LOST_ARK = "https://mobalytics.gg/lost-ark/sitemap.xml";

test(`Lost Ark link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${LOST_ARK} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(LOST_ARK);
  });
});

const DESTINY_2 = "https://mobalytics.gg/destiny-2/sitemap.xml";

test(`Destiny 2 link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${DESTINY_2} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DESTINY_2);
  });
});

const DIABLO_4 = "https://mobalytics.gg/diablo-4/sitemap.xml";

test(`Diablo 4 link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${DIABLO_4} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DIABLO_4);
  });
});

const ELDEN_RING = "https://mobalytics.gg/elden-ring-nightreign/sitemap.xml";

test(`Elden Ring link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${ELDEN_RING} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(ELDEN_RING);
  });
});

const MARVEL_RIVALS = "https://mobalytics.gg/marvel-rivals/sitemap.xml";

test(`Marvel Rivals link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${MARVEL_RIVALS} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(MARVEL_RIVALS);
  });
});

const MHV = "https://mobalytics.gg/mhw/sitemap.xml";

test(`MHW link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${MHV} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(MHV);
  });
});

const DEADLOCK = "https://mobalytics.gg/deadlock/sitemap.xml";

test(`Deadlock link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${DEADLOCK} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DEADLOCK);
  });
});

const POE_2 = "https://mobalytics.gg/poe-2/sitemap.xml";

test(`PoE link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${POE_2} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(POE_2);
  });
});

const BAZAAR = "https://mobalytics.gg/the-bazaar/sitemap.xml";

test(`Bazaar link is present on the prod sitemap`, async ({ page }) => {
  await test.step(`Open url: ${PROD_SITEMAP}`, async () => {
    await page.goto(PROD_SITEMAP);
  });

  await test.step(`Expected Result: ${BAZAAR} is present in the ${PROD_SITEMAP}`, async () => {
    await expect(page.locator("#folder0")).toContainText(BAZAAR);
  });
});
