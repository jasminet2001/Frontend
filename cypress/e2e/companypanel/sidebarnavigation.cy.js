// const APIResults = require("../../fixtures/APIResults.json");
// const baseData = require("../../fixtures/shared.json");
// describe('Company Sidebar Component', () => {
//   beforeEach(() => {
//     cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
//     cy.visit(baseData.host)
//     cy.wait('@getUser')
//     cy.visit(baseData.host + '/company/dashboard')
//   })
//
//   it('displays user avatar and name in sidebar', () => {
//     cy.get('.v-list-item-title').contains('John Doe')
//     cy.get('.v-list-item-subtitle').contains('johndoe@example.com')
//     cy.get('.v-img').should('be.visible')
//   })
// })
