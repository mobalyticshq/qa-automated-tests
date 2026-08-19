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
