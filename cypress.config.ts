import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';


export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    JSON: false,
    html: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
  defaultCommandTimeout: 30000,
});