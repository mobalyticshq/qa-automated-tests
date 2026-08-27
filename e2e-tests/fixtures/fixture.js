import { test as base, expect } from '@playwright/test';
import { makeStCleanup, authByRole, registerAccount } from '../../app/helpers/index';
export { expect } from '@playwright/test';

export const test = base.extend({
  uiRegisterAccount: registerAccount('ui'),
  apiRegisterAccount: registerAccount('api'),
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
});
