const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");

describe('Component Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/user/bookmarks')
    cy.intercept('GET', '*/user/bookmarks', APIResults.bookmarks_for_user3).as('getBookmarks')
    cy.wait('@getBookmarks')
    cy.intercept('*/company/show/247', APIResults.company247).as('getCompany247')
    cy.intercept('GET', '*/company/show/253', APIResults.company253).as('getCompany253')
    cy.intercept('GET', '*/company/show/250', APIResults.company250).as('getCompany250')
    cy.wait('@getCompany247')
    cy.wait('@getCompany253')
    cy.wait('@getCompany250')

  });

  it('displays the title correctly', () => {
    cy.contains('نشانک ها').should('be.visible');
  });

  it('displays the ad cards', () => {
    cy.get('.ad-card').should('have.length', 10); // Replace '.ad-card' with the correct selector for your ad card component
  });

  it('toggles the starred state on click', () => {
    cy.get('.ad-card:first').as('firstCard');

    cy.get('@firstCard').find('.star-icon').click(); // Replace '.star-icon' with the correct selector for the star icon
    cy.get('@firstCard').should('have.class', 'starred');

    cy.get('@firstCard').find('.star-icon').click();
    cy.get('@firstCard').should('not.have.class', 'starred');
  });

  it('loads ad data from the server', () => {
    cy.intercept('GET', '/company/show/*', {fixture: 'ad.json'}); // Replace '/company/show/*' with the correct API endpoint and 'ad.json' with a fixture containing ad data

    cy.get('.ad-card').should('have.length', 1);
    cy.get('.ad-card:first').contains('سلام').should('be.visible');
    cy.get('.ad-card:first').contains('لورم ایپسوم متن ساختگی').should('be.visible');
  });

  it('marks ads as starred when loaded from bookmarks', () => {
    cy.intercept('GET', '/user/bookmarks', {fixture: 'bookmarks.json'}); // Replace '/user/bookmarks' with the correct API endpoint and 'bookmarks.json' with a fixture containing bookmarked ad data

    cy.get('.ad-card').should('have.length', 5);
    cy.get('.ad-card').should('have.class', 'starred');
  });

  it('does not display ads without a pic', () => {
    cy.intercept('GET', '/company/show/*', {fixture: 'ad_no_pic.json'}); // Replace '/company/show/*' with the correct API endpoint and 'ad_no_pic.json' with a fixture containing an ad with no pic

    cy.get('.ad-card').should('not.exist');
  });

  it('displays a message when there are no starred ads', () => {
    cy.intercept('GET', '/user/bookmarks', {fixture: 'bookmarks_empty.json'}); // Replace '/user/bookmarks' with the correct API endpoint and 'bookmarks_empty.json' with a fixture containing empty bookmarked ad data

    cy.contains('No starred ads').should('be.visible');
  });

  it('displays the ad cards on small screens', () => {
    cy.viewport('iphone-6'); // Adjust the viewport size as per your requirements

    cy.get('.ad-card').should('have.length', 10);
  });

  it('displays the ad cards with dense layout', () => {
    cy.get('.ad-card').should('have.class', 'dense');
  });
})
