import { expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const apiEndpoint =
  process.env.BASE_URL === 'https://mobalytics.gg'
    ? 'https://account.mobalytics.gg/api/graphql/v1/query'
    : 'https://stg.mobalytics.gg/api/account/gql/v1/query';

/**
 * Signs in via the account GraphQL API and saves the resulting storageState to a file.
 * The target directory is created if missing — `.auth/` is gitignored, so on CI it does not exist.
 * @param {import('@playwright/test').APIRequestContext} request
 * @param {{ email: string, password: string, statePath: string }} options
 */
export async function saveAuthState(request, { email, password, statePath }) {
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
  expect(state.cookies.length, `no session cookie received for ${email}`).toBeGreaterThan(0);

  state.origins = [
    {
      origin: process.env.BASE_URL,
      localStorage: [{ name: 'battle-pass-should-open-sidebar-on-load', value: 'false' }],
    },
  ];

  await fs.mkdir(path.dirname(statePath), { recursive: true });
  await fs.writeFile(statePath, JSON.stringify(state, null, 2));
}
