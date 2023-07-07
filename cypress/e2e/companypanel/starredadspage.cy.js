const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");

describe('Starred Ads Page Component Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.intercept('GET', '*/user/bookmarks', APIResults.bookmarks_for_user3).as('getBookmarks')
    cy.intercept('GET', '*/company/show/247', APIResults.company247).as('getCompany247')
    cy.intercept('GET', '*/company/show/253', APIResults.company253).as('getCompany253')
    cy.intercept('GET', '*/company/show/250', APIResults.company250).as('getCompany250')
    cy.visit(baseData.host + '/user/bookmarks')
    cy.wait('@getBookmarks')
    cy.wait('@getCompany247')
    cy.wait('@getCompany253')
    cy.wait('@getCompany250')

  });

  it('displays the title correctly', () => {
    cy.contains('نشانک ها').should('be.visible');
  });

  it('should display ad card details', () => {
    cy.get('.custom-card-bookmarked:first')
        .should('contain', 'آدرس شرکت')
        .and('contain', 'شماره تماس')
        .and('contain', 'ایمیل شرکت')
  })

  it('renders the component with a list of ad cards', () => {
    cy.get('.custom-card-bookmarked').should('have.length', 3)
    cy.get('.custom-card-bookmarked').should('have.length', 3)
  })

  it('should successfully make an API call to get_company', () => {
    cy.intercept('GET', '**/company/show/**').as('getCompany')
    cy.visit(baseData.host + '/user/bookmarks')
    cy.wait('@getCompany').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
      expect(interception.response.body).to.have.property('id')
      expect(interception.response.body).to.have.property('name')
      expect(interception.response.body).to.have.property('email')
      expect(interception.response.body).to.have.property('description')
      expect(interception.response.body).to.be.an('object')
    })
  })

  it('should navigate to the correct URL when "اطلاعات بیشتر" button is clicked', () => {
    cy.get('.custom-card-bookmarked:first').then(($adCard) => {
      const adId = $adCard.prop('id')
      cy.wrap($adCard).find('.v-card__actions').click()
      cy.url().should('include', `/c/${adId}`)
    })
  })
})
