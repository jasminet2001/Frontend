const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");

describe('User Dashboard', () => {
    beforeEach(() => {
        cy.intercept('*/user/this', APIResults.this).as('getUser')
        cy.visit(baseData.host)
        cy.wait('@getUser')
        cy.visit(baseData.host + '/user/dashboard')

    })

})
