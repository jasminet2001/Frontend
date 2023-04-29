const baseData = require('../../fixtures/shared.json')
const mockData = require('../../fixtures/APIResults.json')
describe('Search component', () => {
    beforeEach(() => {
      cy.intercept('**/api/company/search**', mockData.search)
      cy.visit(baseData.host + '/search')
    })
    it('renders the component', () => {
      cy.get('.whole').first().should('contain.html','h3')
      cy.get('.whole').first().should('contain.text', mockData.search.data[0].name)
      cy.get('.whole').first().should('contain.text',mockData.search.data[0].description.substr(0,35))
      cy.get('.whole').first().should('contain.text',mockData.search.data[0].category_id)
    });
})

describe('navBar', function () {
  beforeEach(function () {
      cy.intercept('**/api/user/this')
      cy.visit(baseData.host)
  });
  it('should show tabs in desktop mode', function () {
      cy.get('.v-tab').should("have.length", 4)
      let firstTab = cy.get('.v-tab').first()
      firstTab.should("have.text", 'صفحه اصلی')
      firstTab.next().should("have.text", 'جستجو')
      firstTab.next().should("have.text", 'درباره ما')
  });
  it('should show login button if user is not logged in', function () {
      cy.clearCookies()
      cy.get('.v-tab').last().should('contain.text', 'ورود')
  });
});
