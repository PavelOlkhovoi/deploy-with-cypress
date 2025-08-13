import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    // Base URL for running the app locally with Vite dev server
    baseUrl: 'http://localhost:5173',
  },
});
