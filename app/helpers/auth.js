import { expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';
import { Moba } from '../../app/page-object/moba';
import fs from 'node:fs/promises';
import path from 'node:path';

export const apiEndpointV1 =
  process.env.BASE_URL === 'https://mobalytics.gg'
    ? 'https://mobalytics.gg/api/account/gql/v1/query'
    : 'https://stg.mobalytics.gg/api/account/gql/v1/query';
export const apiEndpointV2 =
  process.env.BASE_URL === 'https://mobalytics.gg'
    ? 'https://mobalytics.gg/api/accounts/v2/graphql/query'
    : 'https://stg.mobalytics.gg/api/accounts/v2/graphql/query';

export async function saveAuthState(request, { email, password, statePath }) {
  const loginResponse = await request.post(apiEndpointV2, {
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
      variables: { input: { email, password } },
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  expect(loginResponse.ok(), `Status Code: ${loginResponse.status()}`).toBeTruthy();
  const json = await loginResponse.json();
  expect(json.errors, `GraphQL errors is missing: ${JSON.stringify(json.errors)}`).toBeFalsy();
  expect(json.data?.accounts?.signIn?.error, `SignIn has no errors for ${email}`).toBeFalsy();

  const state = await request.storageState();
  expect(state.cookies.length, `Session cookie isn't empty`).toBeGreaterThan(0);

  const response = await request.post(apiEndpointV1, {
    data: {
      query: '{ account { uid } }',
    },
    headers: { 'Content-Type': 'application/json' },
  });
  expect(response.ok(), `AccountInfoQuery is passed with status: ${response.status()}`).toBeTruthy();
  const body = await response.json();
  expect(body.errors, `GraphQL errors is missing: ${JSON.stringify(body.errors)}`).toBeFalsy();
  const uid = body.data.account.uid;

  state.origins = [
    {
      origin: process.env.BASE_URL,
      localStorage: [{ name: 'battle-pass-should-open-sidebar-on-load', value: uid }],
    },
  ];

  await fs.mkdir(path.dirname(statePath), { recursive: true });
  await fs.writeFile(statePath, JSON.stringify(state, null, 2));
  return state;
}

export const authByRole =
  (email, password) =>
  async ({ request, context }, use) => {
    const loginResponse = await request.post(apiEndpointV2, {
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
        variables: { input: { email, password } },
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(loginResponse.ok(), `Status Code: ${loginResponse.status()}`).toBeTruthy();
    const json = await loginResponse.json();
    expect(json.errors, `GraphQL errors is missing: ${JSON.stringify(json.errors)}`).toBeFalsy();
    expect(json.data?.accounts?.signIn?.error, `SignIn has no errors for ${email}`).toBeFalsy();

    const state = await request.storageState();
    expect(state.cookies.length, `Session cookie isn't empty`).toBeGreaterThan(0);

    const response = await request.post(apiEndpointV1, {
      data: {
        query: '{ account { uid } }',
      },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.ok(), `AccountInfoQuery is passed with status: ${response.status()}`).toBeTruthy();
    const body = await response.json();
    expect(body.errors, `GraphQL errors is missing: ${JSON.stringify(body.errors)}`).toBeFalsy();
    const uid = body.data.account.uid;

    await context.addCookies(state.cookies);
    await context.addInitScript((value) => {
      window.localStorage.setItem('battle-pass-should-open-sidebar-on-load', value);
    }, uid);
    await use();
  };

export const registerAccount = (typeRegister) => {
  if (typeRegister === 'api') {
    return async ({ page, request, context }, use) => {
      const moba = new Moba(page);
      const uniqueId = uuidv4().substring(0, 4);
      const email = `ns+${uniqueId}@mobalyticshq.com`;
      const name = `ns+${uniqueId}@mobalyticshq.com`;
      const password = `ns+${uniqueId}@mobalyticshq.com`;

      const signUpResponse = await request.post(apiEndpointV2, {
        data: {
          query: `
          mutation SignUp {
            accounts {
              signUp(input: { email: "${email}", password: "${password}", name: "${name}" }) {
                error
                user {
                  id
                  email
                }
              }
            }
          }
        `,
        },
        headers: { 'Content-Type': 'application/json' },
      });
      expect(signUpResponse.ok(), `Status Code: ${signUpResponse.status()}`).toBeTruthy();
      const json = await signUpResponse.json();
      expect(json.errors, `GraphQL errors is missing: ${JSON.stringify(json.errors)}`).toBeFalsy();
      expect(json.data?.accounts?.signUp?.error, `SignUp has no errors fo ${email}`).toBeFalsy();

      const state = await request.storageState();
      expect(state.cookies.length, `no session cookie received for ${email}`).toBeGreaterThan(0);

      const response = await request.post(apiEndpointV1, {
        data: {
          query: '{ account { uid } }',
        },
        headers: { 'Content-Type': 'application/json' },
      });
      expect(response.ok(), `AccountInfoQuery is passed with status: ${response.status()}`).toBeTruthy();
      const body = await response.json();
      expect(body.errors, `GraphQL errors is missing: ${JSON.stringify(body.errors)}`).toBeFalsy();
      const uid = body.data.account.uid;

      await context.addCookies(state.cookies);
      await context.addInitScript((value) => {
        window.localStorage.setItem('battle-pass-should-open-sidebar-on-load', value);
      }, uid);

      await use(moba);
    };
  }

  if (typeRegister === 'ui') {
    return async ({ page }, use) => {
      const credentials = `ns+${uuidv4().substring(0, 4)}@mobalyticshq.com`;
      const moba = new Moba(page);

      await moba.mainURLs.openMhwPage();
      await moba.navbar.gotoSignInPage();
      await moba.authorizePage.registerAccount(credentials);

      await use(moba);
    };
  }

  throw new Error(`registerAccount: unknown typeRegister "${typeRegister}", expected 'api' or 'ui'`);
};
