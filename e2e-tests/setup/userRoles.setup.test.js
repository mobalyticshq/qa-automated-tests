import { test as setup, expect } from '@playwright/test';
import fs from 'node:fs/promises';

const apiEndpoint =
  process.env.BASE_URL === 'https://mobalytics.gg'
    ? 'https://account.mobalytics.gg/api/graphql/v1/query'
    : 'https://stg.mobalytics.gg/api/account/gql/v1/query';

/**
 * Signs in via GraphQL and saves the resulting storageState to a file.
 * @param {import('@playwright/test').APIRequestContext} request
 * @param {{ email: string, password: string, statePath: string }} options
 */
async function saveAuthState(request, { email, password, statePath }) {
  const loginResponse = await request.post(apiEndpoint, {
    data: {
      query: `
          mutation SignIn {
            signIn(
              email: "${email}"
              password: "${password}"
            )
          }
        `,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  expect(loginResponse.ok()).toBeTruthy();

  const state = await request.storageState();
  state.origins = [
    {
      origin: process.env.BASE_URL,
      localStorage: [{ name: 'battle-pass-should-open-sidebar-on-load', value: 'false' }],
    },
  ];
  await fs.writeFile(statePath, JSON.stringify(state, null, 2));
}

setup('setup regular user', async ({ request }) => {
  await saveAuthState(request, {
    email: process.env.REGULAR_USER_EMAIL,
    password: process.env.REGULAR_USER_PASSWORD,
    statePath: '.auth/regularUserAuth.json',
  });
});

setup('setup add free user', async ({ request }) => {
  await saveAuthState(request, {
    email: process.env.ADD_FREE_USER_EMAIL,
    password: process.env.ADD_FREE_USER_PASSWORD,
    statePath: '.auth/adFreeUserAuth.json',
  });
});

setup('setup plus user', async ({ request }) => {
  await saveAuthState(request, {
    email: process.env.PLUS_USER_EMAIL,
    password: process.env.PLUS_USER_PASSWORD,
    statePath: '.auth/plusUserAuth.json',
  });
});
