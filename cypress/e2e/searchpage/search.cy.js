const baseData = require('../../fixtures/shared.json')
const mockData = require('../../fixtures/APIResults.json')
describe('Search component', () => {
    beforeEach(() => {
      cy.intercept('*/search/*', mockData.search)
      cy.visit(baseData.host + '/search')
    })
    it('renders the component', () => {
      //activate later
      // cy.get('.whole').should('have.v-card', ':style', 'background-image: url(http://localhost:8000/storage/avatars/${image})')
      cy.get('.whole').first().should('contain.html','h3')
      cy.get('.whole').first().should('contain.text', mockData.search.data[0].name)
      cy.get('.whole').first().should('contain.text',mockData.search.data[0].description.substr(0,35))
      cy.get('.whole').first().should('contain.text',mockData.search.data[0].category_id)
      //idk why it doesn't work?
      // let body = cy.get('body').first()
      // body.should('contain.search-card')
    });
})

describe('navBar', function () {
  beforeEach(function () {
      cy.intercept('*/user/this')
      cy.visit(baseData.host)
  });
  it('should show tabs in desktop mode', function () {
      cy.get('.v-tab').should("have.length", 4)
      let firstTab = cy.get('.v-tab').first()
      firstTab.should("have.text", 'صفحه اصلی')
      firstTab.next().should("have.text", 'جستجو')
      firstTab.next().should("have.text", 'درباره ما')

  });
  it('should have current tab focussed', function () {
      cy.get('.v-tab--active').should("have.text", 'صفحه اصلی')
  });
  it('should show login button if user is not logged in', function () {
      cy.clearCookies()
      cy.get('.v-tab').last().should('contain.text', 'ورود')
  });
  it('should show avatar if user is logged in', function () {
      cy.intercept('*/user/this', mockData.this).as('getUser')
      cy.visit(baseData.host)
      cy.wait('@getUser')
      cy.get('.v-avatar').should("be.visible")
  });
});
