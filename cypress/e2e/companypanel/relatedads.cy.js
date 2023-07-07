const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('Related AdsComponent Tests', () => {
  it('renders the component correctly', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/related')
    cy.get('strong').should('contain', 'آگهی های مرتبط');
    cy.get('.v-col').should('have.length', 0);
  });

  it('fetches related ads on component mount', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/related')
    cy.intercept('POST', '**/ad/search', [
      {
        id: 1, title: "حمل و نقل مهتاب", category_id: 13, isCompany: 0, description: "آدرس شرکت:  شهرستان ری،جاده قدیم قم"
      },
      {
        id: 2, title: "حمل و نقل مهتاب", category_id: 13, isCompany: 0, description: "آدرس شرکت:  شهرستان ری،جاده قدیم قم"
      },
      {
        id: 3, title: "حمل و نقل مهتاب", category_id: 13, isCompany: 0, description: "آدرس شرکت:  شهرستان ری،جاده قدیم قم"
      }
      ]).as('fetchAds');

    cy.visit(baseData.host + '/company/related')
    cy.wait('@fetchAds').then(() => {
      cy.get('.v-card').should('have.length.greaterThan', 0);
    });
  });

  it('displays related ads correctly', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/related')
    const relatedAds = [
      { id: 1, title: "حمل و نقل مهتاب" },
      { id: 2, title: "حمل و نقل مهتاب" },
      { id: 3, title: "حمل و نقل مهتاب" }
    ];
    cy.intercept('POST', '**/ad/search', { body: relatedAds }).as('fetchAds');

    cy.visit(baseData.host + '/company/related')
    cy.wait('@fetchAds')
    relatedAds.forEach(ad => {
      cy.contains('.v-card__title', ad.title);
    });
  });

  it('does not fetch related ads if token is not provided', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/related')
    cy.clearCookies();
    cy.visit(baseData.host + '/company/related')
    cy.get('.v-card').should('have.length', 1)
  });

  it('fetches related ads with correct request headers', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/related')
    cy.intercept('POST', '**/ad/search', req => {
      expect(req.headers).to.include({
      });
      req.reply({ body: [] });
    }).as('fetchAds');

    cy.visit(baseData.host + '/company/related')
    cy.wait('@fetchAds');
  });

  // it('handles API error during related ads fetch', () => {
  //   cy.intercept('POST', '**/ad/search', { statusCode: 500 }).as('fetchAds');
  //
  //   cy.visit(baseData.host + '/company/related')
  //   cy.wait('@fetchAds');
  //   cy.contains('Failed to fetch related ads');
  // });
  //
  // it('navigates to ad details page on ad card click', () => {
  //   const adId = 123;
  //   cy.intercept('POST', '**/ad/search', { body: [{ id: adId }] }).as('fetchAds');
  //
  //   cy.visit(baseData.host + '/company/related')
  //   cy.wait('@fetchAds').then(() => {
  //     cy.get('.v-col').first().click();
  //     cy.url().should('include', `/ad/${adId}`);
  //   });
  // });
  //
  // it('does not navigate to ad details page on ad card click if disabled', () => {
  //   cy.intercept('POST', '**/ad/search', { body: [{ id: 123 }] }).as('fetchAds');
  //
  //   cy.visit(baseData.host + '/company/related')
  //   cy.wait('@fetchAds').then(() => {
  //     cy.get('v-col').first().should('have.class', 'disabled');
  //     cy.get('v-col').first().click();
  //     cy.url().should('not.include', '/ad/');
  //   });
  // });
  //
  // it('renders loading state during ad fetch', () => {
  //   cy.intercept('POST', '**/ad/search', { delay: 2000 }).as('fetchAds');
  //
  //   cy.visit(baseData.host + '/company/related')
  //   cy.contains('Loading...');
  //   cy.wait('@fetchAds');
  //   cy.contains('Loading...').should('not.exist');
  // });
  //
  // it('handles no related ads scenario', () => {
  //   cy.intercept('POST', '**/ad/search', { body: [] }).as('fetchAds');
  //
  //   cy.visit(baseData.host + '/company/related')
  //   cy.wait('@fetchAds');
  //   cy.contains('No related ads found');
  // });
});
