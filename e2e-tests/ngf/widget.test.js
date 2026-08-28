import { test, expect } from '@playwright/test';
import { Moba } from '../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

test.describe('Comments Widget', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('Guest Profile Required Modal appears to authorized user', async ({ page }) => {
        await page.goto('https://stg.mobalytics.gg/borderlands-4/profile/demo-creator/builds/my-build-with-comments#comments');
        await page.getByRole('button', { name: 'Comment', exact: true }).click();
        expect(page.getByRole('dialog').getByRole('button', { name: 'Create Profile' })).toBeVisible();
    });

    test('Regular User Profile', async ({ page }) => {
        await page.goto('https://stg.mobalytics.gg/borderlands-4');
        await page.getByRole('button', { name: 'Sign In' }).click();

        await page.getByRole('textbox', { name: 'Email' }).fill('dolgopolova.katia+8@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('Sulfurwarpten13');
        await page.getByRole('button', { name: 'Sign In' }).click();

        await expect(page.getByRole('link', { name: 'К Купи Купон' })).toBeVisible();

        await page.goto('https://stg.mobalytics.gg/borderlands-4/profile/demo-creator/builds/my-build-with-comments#comments');
        await page.getByRole('textbox').fill('Hello Kate Test');
        await page.getByRole('button', { name: 'Comment', exact: true }).click();

        await expect(page.getByText('Hello Kate Test')).toBeVisible();
    });

    test('Delete Own Comment', async ({ page }) => {

        await page.goto('https://stg.mobalytics.gg/borderlands-4');
        await page.getByRole('button', { name: 'Sign In' }).click();

        await page.getByRole('textbox', { name: 'Email' }).fill('dolgopolova.katia+8@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('Sulfurwarpten13');
        await page.getByRole('button', { name: 'Sign In' }).click();

        await expect(page.getByRole('link', { name: 'К Купи Купон' })).toBeVisible();
        await page.goto('https://stg.mobalytics.gg/borderlands-4/profile/demo-creator/builds/my-build-with-comments#comments');

        const comment = page.getByText('Hello Kate Test');
        await expect(comment).toBeVisible();

        await page.locator('button[aria-label="More actions"]').first().click();
        await page.getByRole('menuitem', { name: 'Remove' }).click();

        await expect(comment).toHaveCount(0);
    });
})

