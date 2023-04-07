const baseData = require('../../fixtures/shared.json')
const APIResults = require('../../fixtures/APIResults.json')

describe('home page', ()=>{
    beforeEach(()=>{
        cy.visit(baseData.host)
    })
    it('should load correctly', ()=>{
        cy.get("footer").should("be.visible")
    })
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
        cy.intercept('*/user/this', APIResults.this).as('getUser')
        cy.visit(baseData.host)
        cy.wait('@getUser')
        cy.get('.v-avatar').should("be.visible")
    });
});

describe('categories', function () {
    beforeEach(()=>{
        cy.intercept('*/categories', APIResults.categories).as("getCategories")
        cy.visit(baseData.host)
        cy.wait('@getCategories')
    })
    it('should show categories', function () {
        cy.get(".category-label").should("have.length", 10)
    });
    it('should show category photo after hovering the label', function () {
        cy.get(".category-label").first().trigger("mouseover")
        cy.get(".v-image__image[style *= \""+APIResults.categories.categories[0].photo+"\"]").should("be.visible")
    });
});