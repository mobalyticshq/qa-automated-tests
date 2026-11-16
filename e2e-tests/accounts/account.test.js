import { test, expect } from '../fixtures/fixture';
import { Moba } from '../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';

test('Delete mobalytics account', async ({ uiRegisterAccount }) => {
  const { moba, credentials } = uiRegisterAccount;

  await expect(moba.navbar.mgpProfileButton(credentials)).toBeVisible();
  await moba.navbar.gotoAccountSettingsPage(credentials);
  await moba.accountInformationTab.deleteAccount();

  await test.step('Account is deleted', async () => {
    await expect(moba.byeBye.header).toBeVisible();
    await expect(moba.byeBye.linkInsertCoinToContinue).toBeVisible();
  });
});

test('Change display name', async ({ page, request }) => {
  const moba = new Moba(page);
  const uniqueId = uuidv4().substring(0, 4);
  const displayName = `displayName-${uniqueId}`;
  const credentials =
    process.env.BASE_URL === 'https://mobalytics.gg'
      ? 'rewad+prod-aqa-change-name@mobalyticshq.com' // prod account
      : 'rewad+stg-aqa-change-name@mobalyticshq.com'; // stg account
  const apiEndpoint =
    process.env.BASE_URL === 'https://mobalytics.gg'
      ? 'https://account.mobalytics.gg/api/graphql/v1/query'
      : 'https://stg.mobalytics.gg/api/account/gql/v1/query';

  const signInResponse = await request.post(`${process.env.BASE_URL}/api/accounts/v2/graphql/query`, {
    data: {
      query: `
        mutation SignIn($input: AccountsSignInInput) {
          accounts {
            signIn(input: $input) {
              error
              __typename
            }
            __typename
          }
        }
      `,
      variables: { input: { email: credentials, password: credentials } },
    },
    headers: { 'Content-Type': 'application/json' },
  });
  expect(signInResponse.ok(), `Sign In status code: ${signInResponse.status()}`).toBeTruthy();
  const signInJson = await signInResponse.json();
  expect(signInJson.errors, `GraphQL errors is missing: ${JSON.stringify(signInJson.errors)}`).toBeFalsy();
  expect(signInJson.data?.accounts?.signIn?.error, `SignIn has no errors for ${credentials}`).toBeFalsy();

  const accountResponse = await request.post(apiEndpoint, {
    data: {
      query: `
        query AccountQuery {
          account {
            ...AccountFragment
            __typename
          }
        }
        fragment AccountFragment on Account {
          uid
          email
          login
          loginHash
          level
          __typename
        }
      `,
    },
    headers: { 'Content-Type': 'application/json' },
  });
  expect(accountResponse.ok(), `AccountQuery status code: ${accountResponse.status()}`).toBeTruthy();
  const accountJson = await accountResponse.json();
  expect(accountJson.errors, `GraphQL errors is missing: ${JSON.stringify(accountJson.errors)}`).toBeFalsy();
  const currentDisplayName = accountJson.data.account.login;

  await moba.mainURLs.openBorderlands4Page();
  await moba.navbar.gotoSignInPage();
  await moba.signInPage.loginUser(credentials, credentials);
  await moba.navbar.gotoAccountSettingsPage(currentDisplayName);
  await moba.accountSettingsPage.selectProfileTab();
  await moba.profileTab.changeDisplayName(displayName);

  await test.step(`Account name is changed to a new account name: ${displayName}`, async () => {
    await expect(moba.navbar.mgpProfileButton(displayName)).toContainText(displayName);
    await expect(moba.profileTab.previewProfileDisplayName(displayName)).toBeVisible();
    await expect(moba.profileTab.widgetDisplayName(displayName)).toBeVisible();
  });
});
