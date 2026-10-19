import { test as setup } from '@playwright/test';
import { saveAuthState } from '../../app/helpers/index';

setup('setup admin', async ({ request }) => {
  await saveAuthState(request, {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    statePath: '.auth/adminAuth.json',
  });
});

setup('setup game manager', async ({ request }) => {
  await saveAuthState(request, {
    email: process.env.GAME_MANAGER_EMAIL,
    password: process.env.GAME_MANAGER_PASSWORD,
    statePath: '.auth/gameManagerAuth.json',
  });
});

setup('setup internal writer', async ({ request }) => {
  await saveAuthState(request, {
    email: process.env.INTERNAL_WRITER_EMAIL,
    password: process.env.INTERNAL_WRITER_PASSWORD,
    statePath: '.auth/internalWriterAuth.json',
  });
});

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
