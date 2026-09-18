import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

test.describe('Comments Widget', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('Guest Profile Required Modal appears to authorized user', async ({ page }) => {
        const moba = new Moba(page);

        await moba.mainURLs.openUgCommentsWidget();
        await moba.ugBuildPage.postEmptyComment();

        await expect(moba.profileRequiredModal.profileRequiredModal).toBeVisible();
    });
        
   test('Delete Own Comment', async ({ postComment }) => {
        const moba = postComment;
        const textComment = 'Hello Katia';
        
        await moba.mainURLs.openUgCommentsWidget()
        await expect(moba.commentsWidget.textComment(textComment).first()).toBeVisible();


        // await page.locator('button[aria-label="More actions"]').first().click();
        // await page.getByRole('menuitem', { name: 'Remove' }).click();

        // await expect(comment).toHaveCount(0);
    })
});

//     test.describe('Delete Comment as Admin', () => {
    
//     test('Delete comment of another user', async ({ page, apiAuthAdmin }) => {
//         await page.goto(BUILD_URL);
//         const comment = page.getByText('Num 5-5', { exact: true });
//         await expect(comment).toBeVisible();

//         const commentContainer = comment.locator(
//             'xpath=ancestor::*[.//button[@aria-label="More actions"]][1]',
//         );
//         await commentContainer.getByRole('button', { name: 'More actions' }).click();
//         await page.getByRole('menuitem', { name: 'Admin Delete' }).click();

//         const deleteDialog = page.getByRole('dialog');
//         await expect(deleteDialog).toBeVisible();
//         await expect(deleteDialog.getByRole('button', { name: 'Delete' })).toBeEnabled();
//         await deleteDialog.getByRole('button', { name: 'Delete' }).click();

//         await expect(comment).toHaveCount(0);
//     });
// });