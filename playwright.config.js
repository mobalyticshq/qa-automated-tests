// @ts-check
import { defineConfig, devices } from '@playwright/test';
import os from 'os';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

/**
 * Playwright AI agents (planner / generator / healer) drive a paused "seed" test to
 * explore the app and generate specs. Seed projects live behind PW_AGENT_MODE so a
 * normal `npm test` never runs them; the agents get the flag from .mcp.json.
 * Manual use:  PW_AGENT_MODE=1 npm test -- --project seed-admin
 */
const agentSeedProjects = process.env.PW_AGENT_MODE
  ? [
      {
        name: 'seed-anonymous',
        testDir: 'e2e-tests/agent-seeds',
        testMatch: '**/anonymous.seed.test.js',
        use: { trace: 'off', screenshot: 'off', video: 'off' },
      },
      {
        name: 'seed-admin',
        testDir: 'e2e-tests/agent-seeds',
        testMatch: '**/admin.seed.test.js',
        dependencies: ['auth-setup'],
        use: { storageState: '.auth/adminAuth.json', trace: 'off', screenshot: 'off', video: 'off' },
      },
      {
        name: 'seed-regular-user',
        testDir: 'e2e-tests/agent-seeds',
        testMatch: '**/regular-user.seed.test.js',
        dependencies: ['user-roles-setup'],
        use: { storageState: '.auth/regularUserAuth.json', trace: 'off', screenshot: 'off', video: 'off' },
      },
      {
        name: 'seed-plus-user',
        testDir: 'e2e-tests/agent-seeds',
        testMatch: '**/plus-user.seed.test.js',
        dependencies: ['user-roles-setup'],
        use: { storageState: '.auth/plusUserAuth.json', trace: 'off', screenshot: 'off', video: 'off' },
      },
    ]
  : [];

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
      testMatch: '**/authByPermissions.setup.test.js',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'off',
        video: 'off',
      },
    },
    {
      name: 'user-roles-setup',
      testMatch: '**/authByUserRoles.setup.test.js',
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
        video: 'off',
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
        video: 'off',
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
        video: 'off',
      },
    },
    {
      name: 'specific-tests',
      dependencies: ['auth-setup'],
      testMatch: 'e2e-tests/specific.test.js',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'off',
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
    ...agentSeedProjects,
  ],
});
