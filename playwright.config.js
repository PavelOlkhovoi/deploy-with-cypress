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
    // Use system Chrome in CI to avoid browser download
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
  // webServer configuration disabled in CI since Cypress handles server startup
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:5173',
  //   reuseExistingServer: true,
  //   timeout: 60_000,
  // },
});
