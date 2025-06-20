import { test, expect } from "@playwright/test";

let env_sitemap;
test.beforeEach(async ({ baseURL }) => {
  env_sitemap = `${baseURL}/sitemap.xml`;
});

test(`New game is present on stg sitemap`, async ({ page, baseURL }) => {
  const NEW_GAME = `ZZZ`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: There is no ${NEW_GAME} in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).not.toContainText(NEW_GAME);
  });
});

test(`New game is missing on prod sitemap`, async ({ page, baseURL }) => {
  const NEW_GAME = `ZZZ`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: There is no ${NEW_GAME} in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).not.toContainText(NEW_GAME);
  });
});

test(`Sitemap_index link is present on sitemap`, async ({ page, baseURL }) => {
  const SITEMAP_INDEX = `${baseURL}/sitemap_index.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${SITEMAP_INDEX} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SITEMAP_INDEX);
  });
});

test(`Product-sitemap link is present on sitemap`, async ({
  page,
  baseURL,
}) => {
  const PRODUCT_SITEMAP = `${baseURL}/product-sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${PRODUCT_SITEMAP} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(PRODUCT_SITEMAP);
  });
});

test(`Valorant link is present on sitemap`, async ({ page, baseURL }) => {
  const VALORANT = `${baseURL}/valorant/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${VALORANT} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(VALORANT);
  });
});

test(`TFT link is present on sitemap`, async ({ page, baseURL }) => {
  const TFT = `${baseURL}/tft/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${TFT} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(TFT);
  });
});

test(`Set 14 link is present on sitemap`, async ({ page, baseURL }) => {
  const SET14 = `${baseURL}/tft/set14/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${SET14} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SET14);
  });
});

test(`Set 10 link is present on sitemap`, async ({ page, baseURL }) => {
  const SET10 = `${baseURL}/tft/set10/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${SET10} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(SET10);
  });
});

test(`Lost Ark link is present on sitemap`, async ({ page, baseURL }) => {
  const LOST_ARK = `${baseURL}/lost-ark/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${LOST_ARK} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(LOST_ARK);
  });
});

test(`Destiny 2 link is present on sitemap`, async ({ page, baseURL }) => {
  const DESTINY_2 = `${baseURL}/destiny-2/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${DESTINY_2} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DESTINY_2);
  });
});

test(`Diablo 4 link is present on sitemap`, async ({ page, baseURL }) => {
  const DIABLO_4 = `${baseURL}/diablo-4/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${DIABLO_4} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DIABLO_4);
  });
});

test(`Elden Ring link is present on sitemap`, async ({ page, baseURL }) => {
  const ELDEN_RING = `${baseURL}/elden-ring-nightreign/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${ELDEN_RING} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(ELDEN_RING);
  });
});

test(`Marvel Rivals link is present on sitemap`, async ({ page, baseURL }) => {
  const MARVEL_RIVALS = `${baseURL}/marvel-rivals/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${MARVEL_RIVALS} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(MARVEL_RIVALS);
  });
});

test(`MHW link is present on sitemap`, async ({ page, baseURL }) => {
  const MHV = `${baseURL}/mhw/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${MHV} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(MHV);
  });
});

test(`Deadlock link is present on sitemap`, async ({ page, baseURL }) => {
  const DEADLOCK = `${baseURL}/deadlock/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${DEADLOCK} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(DEADLOCK);
  });
});

test(`PoE link is present on sitemap`, async ({ page, baseURL }) => {
  const POE_2 = `${baseURL}/poe-2/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${POE_2} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(POE_2);
  });
});

test(`Bazaar link is present on sitemap`, async ({ page, baseURL }) => {
  const BAZAAR = `${baseURL}/the-bazaar/sitemap.xml`;

  await test.step(`Open url: ${env_sitemap}`, async () => {
    await page.goto(env_sitemap);
  });

  await test.step(`Expected Result: ${BAZAAR} is present in ${env_sitemap}`, async () => {
    await expect(page.locator("#folder0")).toContainText(BAZAAR);
  });
});
