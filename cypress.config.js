const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  pageLoadTimeout: 130000,
 
  e2e: {
    baseUrl: 'https://loja.vr.com.br',
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/*.cy.js',
    env: {
      API_ACCESS_TOKEN: 'b43106be-e7fb-4267-89ec-10a6a1899b27',
      CLIENT_ID: '6f47347f-7950-3b38-afbd-6a773bed1cb3',
        
    },
  },

  
})
