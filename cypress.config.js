import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    // Base URL for running the app locally with Vite dev server
    baseUrl: 'http://localhost:5173',
    
    // CI Optimizations
    video: false,                    // Disable video recording in CI
    screenshotOnRunFailure: false,   // Disable screenshots on failure
    watchForFileChanges: false,      // Disable file watching in CI
    defaultCommandTimeout: 8000,     // Reduce default timeout
    pageLoadTimeout: 10000,          // Reduce page load timeout
    requestTimeout: 8000,            // Reduce request timeout
    responseTimeout: 8000,           // Reduce response timeout
    
    // Environment-specific settings
    ...(process.env.CI && {
      video: false,
      screenshotOnRunFailure: false,
      trashAssetsBeforeRuns: false,  // Don't clean up assets in CI
    }),
  },
});
