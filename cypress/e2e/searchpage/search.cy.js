const baseData = require('../../fixtures/shared.json')
describe('Search component', () => {
    beforeEach(() => {
      cy.visit(baseData.host + '/signup')
    })
    it('renders the component', () => {
      cy.get('search-card').should('have.v-card', ':style', 'background-image: url(http://localhost:8000/storage/avatars/${image})')
      cy.get('search-card').should('have.h2')
      cy.get('search-card').should('have.p')
      cy.get('search-card').should('have.prop')
    })
  
})