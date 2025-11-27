import { test as setup, expect } from '@playwright/test';

setup('setup admin', async ({ page, request }) => {
  let apiEndpoint;
  if (process.env.BASE_URL === 'https://mobalytics.gg') {
    apiEndpoint = 'https://account.mobalytics.gg/api/graphql/v1/query';
  } else {
    apiEndpoint = 'https://stg.mobalytics.gg/api/account/gql/v1/query';
  }
  const loginResponse = await request.post(apiEndpoint, {
    data: {
      query: `
          mutation SignIn {
            signIn(
              email: "${process.env.ADMIN_EMAIL}"
              password: "${process.env.ADMIN_PASSWORD}"
            )
          }
        `,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  expect(loginResponse.ok()).toBeTruthy();

  // Извлекаем cookies из ответа
  const setCookieHeader = loginResponse.headers()['set-cookie'];
  if (!setCookieHeader) throw new Error('No set-cookie header in login response');

  // Парсим cookies для Playwright
  const cookies = setCookieHeader.split(/,(?=[^ ]+\=)/).map((cookieStr) => {
    const [cookiePair, ...attributes] = cookieStr.split(';');
    const index = cookiePair.indexOf('=');
    const name = cookiePair.slice(0, index).trim();
    const value = cookiePair.slice(index + 1).trim();
    return {
      name: name.trim(),
      value: value.trim(),
      domain: '.mobalytics.gg',
      path: '/',
    };
  });

  // Добавляем cookies в контекст браузера
  await page.context().addCookies(cookies);

  // Теперь сохраняем storageState с правильными cookies
  await page.context().storageState({ path: '.auth/adminAuth.json' });
});

setup('setup game manager', async ({ page, request }) => {
  let apiEndpoint;
  if (process.env.BASE_URL === 'https://mobalytics.gg') {
    apiEndpoint = 'https://account.mobalytics.gg/api/graphql/v1/query';
  } else {
    apiEndpoint = 'https://stg.mobalytics.gg/api/account/gql/v1/query';
  }
  const loginResponse = await request.post(apiEndpoint, {
    data: {
      query: `
          mutation SignIn {
            signIn(
              email: "${process.env.GAME_MANAGER_EMAIL}"
              password: "${process.env.GAME_MANAGER_PASSWORD}"
            )
          }
        `,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  expect(loginResponse.ok()).toBeTruthy();

  // Извлекаем cookies из ответа
  const setCookieHeader = loginResponse.headers()['set-cookie'];
  if (!setCookieHeader) throw new Error('No set-cookie header in login response');

  // Парсим cookies для Playwright
  const cookies = setCookieHeader.split(/,(?=[^ ]+\=)/).map((cookieStr) => {
    const [cookiePair, ...attributes] = cookieStr.split(';');
    const index = cookiePair.indexOf('=');
    const name = cookiePair.slice(0, index).trim();
    const value = cookiePair.slice(index + 1).trim();
    return {
      name: name.trim(),
      value: value.trim(),
      domain: '.mobalytics.gg',
      path: '/',
    };
  });

  // Добавляем cookies в контекст браузера
  await page.context().addCookies(cookies);

  // Теперь сохраняем storageState с правильными cookies
  await page.context().storageState({ path: '.auth/gameManagerAuth.json' });
});

setup('setup internal writer', async ({ page, request }) => {
  let apiEndpoint;
  if (process.env.BASE_URL === 'https://mobalytics.gg') {
    apiEndpoint = 'https://account.mobalytics.gg/api/graphql/v1/query';
  } else {
    apiEndpoint = 'https://stg.mobalytics.gg/api/account/gql/v1/query';
  }
  const loginResponse = await request.post(apiEndpoint, {
    data: {
      query: `
          mutation SignIn {
            signIn(
              email: "${process.env.INTERNAL_WRITER_EMAIL}"
              password: "${process.env.INTERNAL_WRITER_PASSWORD}"
            )
          }
        `,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  expect(loginResponse.ok()).toBeTruthy();

  // Извлекаем cookies из ответа
  const setCookieHeader = loginResponse.headers()['set-cookie'];
  if (!setCookieHeader) throw new Error('No set-cookie header in login response');

  // Парсим cookies для Playwright
  const cookies = setCookieHeader.split(/,(?=[^ ]+\=)/).map((cookieStr) => {
    const [cookiePair, ...attributes] = cookieStr.split(';');
    const index = cookiePair.indexOf('=');
    const name = cookiePair.slice(0, index).trim();
    const value = cookiePair.slice(index + 1).trim();
    return {
      name: name.trim(),
      value: value.trim(),
      domain: '.mobalytics.gg',
      path: '/',
    };
  });

  // Добавляем cookies в контекст браузера
  await page.context().addCookies(cookies);

  // Теперь сохраняем storageState с правильными cookies
  await page.context().storageState({ path: '.auth/internalWriterAuth.json' });
});
