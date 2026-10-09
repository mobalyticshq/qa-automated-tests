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
        const { moba, textComment } = postComment;
        await moba.ugBuildPage.deleteComment(textComment);

        await expect(moba.commentsWidget.textComment(textComment)).toHaveCount(0);
    })
});

test ('Up Comment Rate', async ({ postComment }) =>{
    const { moba, textComment } = postComment;
    
    await moba.ugBuildPage.commentUp(textComment);

    await expect(moba.ugBuildPage.countCommentText(textComment)).toContainText('1');
} )

// test ('Sorting comments', async ({ postComment }) => {
//     const { moba, textComment } = postComment;

//     const newerComment = `Hello Katia newer ${uuidv4()}`;
//     const commentPosition = async (text) =>
//         (await moba.ugBuildPage.commentItems.allInnerTexts()).findIndex((item) => item.includes(text));

//     await moba.ugBuildPage.commentUp(textComment);
//     await expect(moba.ugBuildPage.countCommentText(textComment)).toHaveText('1');
  
//     // a newer comment with 0 rating is above the upvoted one in "Newest", only "Top" can move it down
//     await moba.commentsWidget.postComments(newerComment);
//     try {
//         expect(await commentPosition(newerComment)).toBeLessThan(await commentPosition(textComment));
        
//         await moba.ugBuildPage.sortComments('Top');
//         await moba.ugBuildPage.loadAllComments();

//         await expect
//             .poll(async () => {
//                 const upvotedPosition = await commentPosition(textComment);
//                 const newerPosition = await commentPosition(newerComment);
//                 return upvotedPosition !== -1 && newerPosition !== -1 && upvotedPosition < newerPosition;
//             })
//             .toBe(true);
//         await expect
//             .poll(async () => {
//                 const ratings = await moba.ugBuildPage.getCommentRatings();
//                 return ratings.every((rating, i) => i === 0 || ratings[i - 1] >= rating);
//             })
//             .toBe(true);
//     } finally {
//         // the newest comment is always on the first page in "Newest" order
//         await moba.ugBuildPage.sortComments('Newest');
//         await moba.ugBuildPage.deleteComment(newerComment);
//     }
// });

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