import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';
import { filterProjectsByFeatureStatus as filterProjectsByAvailableStaticData } from '../../app/helpers/index';

filterProjectsByAvailableStaticData('staticData').forEach(({ game, staticData }) => {
  const { staticDataStPage, gameSpecificItem, exactMatch } = staticData;

  test(`Check static data on NGF ${game}`, async ({ page }) => {
    const moba = new Moba(page);

    await test.step(`Open the ST page with static data for ${game}`, async () => {
      await page.goto(`${process.env.BASE_URL}${staticDataStPage}`);
      await moba.stPage.editButton.click();
      await moba.stPage.staticDataButton.click();
    });

    // the dropdown shows only the first 3 items of each category, so the item has to be searched for
    await test.step(`Search for "${gameSpecificItem}" in the static data dropdown`, async () => {
      await page.keyboard.type(gameSpecificItem);
    });

    await test.step(`Expected Result: "${gameSpecificItem}" is present in the static data dropdown`, async () => {
      await expect(moba.stPage.dropdownStaticData).toContainText(gameSpecificItem);
    });

    // scoped to the dropdown, because the typed query is also rendered in the editor
    await test.step(`Expected Result: "${gameSpecificItem}" is visible in the static data dropdown`, async () => {
      await expect(
        moba.stPage.dropdownStaticData.getByText(gameSpecificItem, { exact: Boolean(exactMatch) }).first()
      ).toBeVisible();
    });
  });
});
