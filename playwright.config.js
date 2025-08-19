import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:4222',
    channel: process.env.CI ? 'chrome' : undefined,
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        // Use system Chrome in CI
        channel: process.env.CI ? 'chrome' : undefined,
      },
    },
  ],
  webServer: {
    command: 'npm run dev -- --port 4222',
    url: 'http://localhost:4222',
    reuseExistingServer: false,
    timeout: process.env.CI ? 90_000 : 60_000,
  },
});
