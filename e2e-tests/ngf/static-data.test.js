import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';
import { filterProjectsByFeatureStatus as filterProjectsByAvailableStaticData } from '../../app/helpers/index';

test.use({ storageState: '.auth/adminAuth.json' }); // add admin auth

filterProjectsByAvailableStaticData('staticData').forEach(({ game, staticData }) => {
  const { staticDataStPage, gameSpecificItem, exactMatch } = staticData;

  test(`Check static data on NGF ${game}`, async ({ page }) => {
    const moba = new Moba(page);

    await test.step(`Open the ST page with static data for ${game}`, async () => {
      await page.goto(`${process.env.BASE_URL}${staticDataStPage}`);
      await moba.stPage.editButton.click();
      await moba.stPage.staticDataButton.click();
    });

    await test.step(`Expected Result: "${gameSpecificItem}" is present in the static data dropdown`, async () => {
      await expect(moba.stPage.dropdownStaticData).toContainText(gameSpecificItem);
    });

    await test.step(`Expected Result: "${gameSpecificItem}" is visible on the page`, async () => {
      await expect(page.getByText(gameSpecificItem, { exact: Boolean(exactMatch) })).toBeVisible();
    });
  });
});
