import { test as base } from '@playwright/test';
import { Moba } from '../../app/page-object/moba';
import { v4 as uuidv4 } from 'uuid';
import { saveAuthState, makeStCleanup } from '../../app/helpers/index';

export { expect } from '@playwright/test';
export const test = base.extend({
  apiAuthAdmin: async ({ request }, use) => {
    const admin = await saveAuthState(request, {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      statePath: '.auth/adminAuth.json',
    });
    await use(admin);
  },

  apiAuthInternalWriter: async ({ request }, use) => {
    const internalWriter = await saveAuthState(request, {
      email: process.env.INTERNAL_WRITER_EMAIL,
      password: process.env.INTERNAL_WRITER_PASSWORD,
      statePath: '.auth/internalWriterAuth.json',
    });
    await use(internalWriter);
  },

  apiAuthGameManager: async ({ request }, use) => {
    const gameManager = await saveAuthState(request, {
      email: process.env.GAME_MANAGER_EMAIL,
      password: process.env.GAME_MANAGER_PASSWORD,
      statePath: '.auth/gameManagerAuth.json',
    });
    await use(gameManager);
  },

  // Per-game ST page cleanup — see makeStCleanup in app/helpers/stCleanup.js
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

  // Register account
  registerAccount: async ({ page }, use) => {
    const moba = new Moba(page);
    const uniqueId = uuidv4().substring(0, 4);
    const credentials = `ns+${uniqueId}@mobalyticshq.com`;

    await moba.mainURLs.openMhwPage();
    await moba.navbar.gotoSignInPage();
    await moba.authorizePage.registerAccount(credentials);

    await use(moba);
  },
});
