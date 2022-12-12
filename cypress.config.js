const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return dotenvPlugin(config, dotenv, true)
    },
    specPattern: "cypress/tests/examples/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
