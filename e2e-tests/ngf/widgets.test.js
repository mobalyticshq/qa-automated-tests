import { test, expect } from '../fixtures/fixture';

test.use({ storageState: { cookies: [], origins: [] } });

test('Widgets test', async ({ page }) => {
    await page.goto('https://stg.mobalytics.gg/tft');
});