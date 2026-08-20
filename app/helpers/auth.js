import { expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const apiEndpoint =
  process.env.BASE_URL === 'https://mobalytics.gg'
    ? 'https://account.mobalytics.gg/api/graphql/v1/query'
    : 'https://stg.mobalytics.gg/api/account/gql/v1/query';

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

  // const uid = await getAccountUid(request);
  const response = await request.post(apiEndpoint, {
    data: {
      query: '{ account { uid } }',
    },
    headers: { 'Content-Type': 'application/json' },
  });
  expect(response.ok(), `AccountInfoQuery failed: ${response.status()}`).toBeTruthy();
  const body = await response.json();
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

    // const uid = await getAccountUid(request);
    const response = await request.post(apiEndpoint, {
      data: {
        query: '{ account { uid } }',
      },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.ok(), `AccountInfoQuery failed: ${response.status()}`).toBeTruthy();
    const body = await response.json();
    const uid = body.data.account.uid;

    await context.addCookies(state.cookies);
    await context.addInitScript((value) => {
      window.localStorage.setItem('battle-pass-should-open-sidebar-on-load', value);
    }, uid);
    await use();
  };
