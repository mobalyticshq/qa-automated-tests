// @ts-check
import { defineConfig, devices } from '@playwright/test';
import os from 'os';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export default defineConfig({
  timeout: 90_000,
  expect: { timeout: 15_000 },
  testDir: './e2e-tests',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.BASE_URL === 'https://mobalytics.gg' ? (process.env.CI ? '100%' : os.cpus().length) : 1,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [process.env.CI ? 'line' : 'list'],
    ['html', { open: 'never' }],
    [
      'allure-playwright',
      {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          environment: process.env.BASE_URL === 'https://mobalytics.gg' ? 'PROD' : 'STG',
        },
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'retain-on-failure',
    // screenshot: 'only-on-failure',
    // video: 'on-first-retry',
    // Browser settings:
    userAgent: 'mobalytics-automation-qa',
    browserName: 'chromium',
    viewport: { width: 1680, height: 1050 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'auth-setup',
      testMatch: '**/auth.setup.test.js',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'off',
        video: 'off',
      },
    },
    {
      name: 'user-roles-setup',
      testMatch: '**/userRoles.setup.test.js',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'off',
        video: 'off',
      },
    },
    {
      name: 'ngf-tests',
      dependencies: ['auth-setup'],
      testDir: 'e2e-tests/ngf',
      use: {
        storageState: '.auth/adminAuth.json',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
      },
    },
    {
      name: 'account-tests',
      // dependencies: ["setup"],
      testDir: 'e2e-tests/accounts',
      use: {
        //   storageState: ".auth/userRoleAuth.json",
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
      },
    },
    {
      name: 'payment-tests',
      // dependencies: ["setup"],
      testDir: 'e2e-tests/payments',
      use: {
        // storageState: '.auth/userRoleAuth.json',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
      },
    },
    {
      name: 'specific-tests',
      dependencies: ['auth-setup'],
      testMatch: 'e2e-tests/specific.test.js',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
      },
    },
    {
      name: 'advertisement-tests',
      dependencies: ['user-roles-setup'],
      testDir: 'e2e-tests/advertisement',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'off',
      },
    },
    {
      name: 'sitemap-tests',
      testMatch: 'e2e-tests/sitemap.test.js',
      use: {
        video: 'off',
        screenshot: 'off',
        trace: 'off',
      },
    },
    {
      name: 'hydration-tests',
      testMatch: 'e2e-tests/hydration.test.js',
      use: {
        video: 'off',
        screenshot: 'off',
        trace: 'off',
      },
    },
  ],
});
