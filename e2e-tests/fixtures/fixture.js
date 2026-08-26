import { test as base, expect } from '@playwright/test';
import { Moba } from '../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';
import { makeStCleanup, authByRole, apiEndpointV1, apiEndpointV2 } from '../../app/helpers/index';
export { expect } from '@playwright/test';

const credentials = `ns+${uuidv4().substring(0, 4)}@mobalyticshq.com`;

export const test = base.extend({
  apiAuthAdmin: authByRole(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD),
  apiAuthGameManager: authByRole(process.env.GAME_MANAGER_EMAIL, process.env.GAME_MANAGER_PASSWORD),
  apiAuthInternalWriter: authByRole(process.env.INTERNAL_WRITER_EMAIL, process.env.INTERNAL_WRITER_PASSWORD),

  cleanupStPoE2Pages: makeStCleanup((urls) => urls.openAdminPoe2Page()),
  cleanupStSts2Pages: makeStCleanup((urls) => urls.openAdminSts2Page()),
  cleanupStOverwatchPages: makeStCleanup((urls) => urls.openAdminOverwatchPage()),
  cleanupStMarathonPages: makeStCleanup((urls) => urls.openAdminMarathonPage()),
  cleanupStEndfieldPages: makeStCleanup((urls) => urls.openAdminEndfieldPage()),
  cleanupStPoEPages: makeStCleanup((urls) => urls.openAdminPoePage()),
  cleanupStLoLPages: makeStCleanup((urls) => urls.openAdminLoLPage()),
  cleanupStTFTPages: makeStCleanup((urls) => urls.openAdminTFTPage()),
  cleanupStValorantPages: makeStCleanup((urls) => urls.openAdminValorantPage()),
  cleanupStDestiny2Pages: makeStCleanup((urls) => urls.openAdminDestiny2Page()),
  cleanupStDiablo4Pages: makeStCleanup((urls) => urls.openAdminDiablo4Page()),
  cleanupSt2xkoPages: makeStCleanup((urls) => urls.openAdmin2xkoPage()),
  cleanupStHades2Pages: makeStCleanup((urls) => urls.openAdminHades2Page()),
  cleanupStBorderlands4Pages: makeStCleanup((urls) => urls.openAdminBorderlands4Page()),
  cleanupStNightreignPages: makeStCleanup((urls) => urls.openAdminNightreignPage()),
  cleanupStDeadlockPages: makeStCleanup((urls) => urls.openAdminDeadlockPage()),
  cleanupStMhwPages: makeStCleanup((urls) => urls.openAdminMhwPage()),
  cleanupStMarvelRivalsPages: makeStCleanup((urls) => urls.openAdminMarvelRivalsPage()),
  cleanupStBazaarPages: makeStCleanup((urls) => urls.openAdminBazaarPage()),
  cleanupStZzzPages: makeStCleanup((urls) => urls.openAdminZzzPage()),
  cleanupStRiftboundPages: makeStCleanup((urls) => urls.openAdminRiftboundPage()),

  uiRegisterAccount: async ({ page }, use) => {
    const moba = new Moba(page);

    await moba.mainURLs.openMhwPage();
    await moba.navbar.gotoSignInPage();
    await moba.authorizePage.registerAccount(credentials);

    await use(moba);
  },

  apiRegisterAccount: async ({ request, context }, use) => {
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

    await use();
  },
});
