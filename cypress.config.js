const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  pageLoadTimeout: 130000,
 
  e2e: {

    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/*.cy.js',
  },

  
})
