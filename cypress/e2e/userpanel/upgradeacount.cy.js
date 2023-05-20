const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");
describe('Submit Ads Page Design Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
  })
  
})


