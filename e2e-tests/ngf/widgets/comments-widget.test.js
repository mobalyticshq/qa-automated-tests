import { test, expect } from '../../fixtures/fixture';
import { Moba } from '../../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

const COMMENT_NOT_FOUND = -1;

async function getCommentPosition(moba, commentText) {
    const allCommentTexts = await moba.ugBuildPage.commentItems.allInnerTexts();
    return allCommentTexts.findIndex((commentContent) => commentContent.includes(commentText));
}

async function isCommentAbove(moba, upperCommentText, lowerCommentText) {
    const upperCommentPosition = await getCommentPosition(moba, upperCommentText);
    const lowerCommentPosition = await getCommentPosition(moba, lowerCommentText);

    const areBothCommentsLoaded =
        upperCommentPosition !== COMMENT_NOT_FOUND && lowerCommentPosition !== COMMENT_NOT_FOUND;
    if (!areBothCommentsLoaded) {
        return false;
    }

    return upperCommentPosition < lowerCommentPosition;
}

async function areRatingsInDescendingOrder(moba) {
    const ratings = await moba.ugBuildPage.getCommentRatings();

    for (let position = 1; position < ratings.length; position++) {
        const previousRating = ratings[position - 1];
        const currentRating = ratings[position];
        if (previousRating < currentRating) {
            return false;
        }
    }

    return true;
}

test.describe('Comments Widget', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('shows the profile-required modal when an empty comment is posted without a session', async ({ page }) => {
        const moba = new Moba(page);
        await moba.mainURLs.openUgCommentsWidget();

        await moba.ugBuildPage.postEmptyComment();

        await expect(moba.profileRequiredModal.profileRequiredModal).toBeVisible();
    });

    test('removes the comment from the list when its author deletes it', async ({ postComment, page }) => {
        const { moba, textComment } = postComment;

        await moba.ugBuildPage.deleteComment(textComment);
        await page.waitForTimeout(2000);

        await expect(moba.commentsWidget.textComment(textComment)).not.toBeVisible();
    });
});

test('notifies the build author when another user comments on the build', async ({ page, commentFromGameManager }) => {
    const buildAuthor = new Moba(page);
    await buildAuthor.mainURLs.openUgCommentsWidget();

    await buildAuthor.navbar.openNotifications();

    await expect(buildAuthor.navbar.commentNotification(commentFromGameManager)).toBeVisible();
});

test('sets the comment rating to 1 when its author upvotes it', async ({ postComment }) => {
    const { moba, textComment } = postComment;

    await moba.ugBuildPage.commentUp(textComment);

    await expect(moba.ugBuildPage.countCommentText(textComment)).toContainText('1');
});

test('moves the upvoted comment above a newer zero-rated comment when sorted by Top', async ({ postComment }) => {
    const { moba, textComment } = postComment;
    const newerCommentText = `Hello Katia newer ${uuidv4()}`;
    await moba.ugBuildPage.commentUp(textComment);
    await expect(moba.ugBuildPage.countCommentText(textComment)).toHaveText('1');

    // a newer comment with 0 rating is above the upvoted one in "Newest", only "Top" can move it down
    await moba.commentsWidget.postComments(newerCommentText);
    try {
        const newerCommentPosition = await getCommentPosition(moba, newerCommentText);
        const upvotedCommentPosition = await getCommentPosition(moba, textComment);
        expect(newerCommentPosition).toBeLessThan(upvotedCommentPosition);

        await moba.ugBuildPage.sortComments('Top');
        await moba.ugBuildPage.loadAllComments();

        await expect.poll(() => isCommentAbove(moba, textComment, newerCommentText)).toBe(true);
        await expect.poll(() => areRatingsInDescendingOrder(moba)).toBe(true);
    } finally {
        // the newest comment is always on the first page in "Newest" order
        await moba.ugBuildPage.sortComments('Newest');
        await moba.ugBuildPage.deleteComment(newerCommentText);
    }
});

// test.describe('Delete Comment as Admin', () => {
// test('Delete comment of another user', async ({ page, apiAuthAdmin }) => {
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
