import { v4 as uuidv4 } from 'uuid';
import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';

test(`Checking "New Games" in the navbar on ${process.env.BASE_URL}`, async ({ page }) => {
  let newGame1 = 'Marathon';
  let newGame2 = 'Overwatch';
  const moba = new Moba(page);
  await moba.mainURLs.openPoe2Page();

  if (process.env.BASE_URL === 'https://mobalytics.gg') {
    // await test.step(`Expected Result: ${newGame1} game is missing in the navbar on PROD`, async () => {
    //   await expect(moba.navbar.gameList).not.toContainText(newGame1);
    // });
    // await test.step(`Expected Result: ${newGame2} game is missing in the navbar on PROD`, async () => {
    //   await expect(moba.navbar.gameList).not.toContainText(newGame2);
    // });
  } else {
    await test.step(`Expected Result: ${newGame1} game is present in the navbar on STG`, async () => {
      await expect(moba.navbar.gameList).toContainText(newGame1);
    });
    await test.step(`Expected Result: ${newGame2} game is present in the navbar on STG`, async () => {
      await expect(moba.navbar.gameList).toContainText(newGame2);
    });
  }
});
