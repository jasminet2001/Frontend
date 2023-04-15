const baseData = require('../../fixtures/shared.json')
const mockData = require('../../fixtures/APIResults.json')
describe('Search component', () => {
    beforeEach(() => {
      cy.intercept('*/search/*', mockData.search)
      cy.visit(baseData.host + '/search')
    })
    it('renders the component', () => {
      cy.get('.whole').should('have.v-card', ':style', 'background-image: url(http://localhost:8000/storage/avatars/${image})')
      cy.get('.whole').should('have.h2')
      cy.get('.whole').should('contain.text', mockData.search.data[0].name)
      // cy.get('.whole').should('have.prop')
    })
  
})