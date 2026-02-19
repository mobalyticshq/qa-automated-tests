// @ts-check
import { defineConfig, devices } from '@playwright/test';
import os from 'os';
import dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

dotenv.config({ quiet: true });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

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
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.BASE_URL === 'https://mobalytics.gg' ? (process.env.CI ? '100%' : os.cpus().length) : 1,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['github'],
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
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // Browser settings:
    userAgent: 'mobalytics-automation-qa',
    browserName: 'chromium',
    screen: { width: 1920, height: 1080 },
    viewport: { width: 1680, height: 1050 },
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: '**/auth.setup.test.js',
    },
    {
      name: 'ngf-tests',
      dependencies: ['setup'],
      testMatch: 'e2e-tests/ngf.test.js',
    },
    {
      name: 'account-tests',
      // dependencies: ["setup"],
      // use: {
      //   storageState: ".auth/userRoleAuth.json",
      // },
      testMatch: 'e2e-tests/account.test.js',
    },
    {
      name: 'others-tests',
      dependencies: ['setup'],
      testMatch: 'e2e-tests/others.test.js',
    },
    {
      name: 'advertisement-tests',
      testMatch: 'e2e-tests/advertisement.test.js',
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
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
