import { test as setup } from '@playwright/test';
import { saveAuthState } from '../../app/helpers/index';

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
