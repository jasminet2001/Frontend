const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");
describe('User Dashboard', () => {
    beforeEach(() => {
        cy.intercept('*/authentication/this', APIResults.this).as('getUser')
        cy.visit(baseData.host)
        cy.wait('@getUser')
        cy.visit(baseData.host + '/user/dashboard')
    })
    it('should display TopDisplayRow with correct items', () => {
        const itemList = [      { Title: 'بازدید از آگهی های شما', Info: '۶۴' },      { Title: 'آگهی های شما', Info: '۱۰' },      { Title: 'کل آگهی ها', Info: '۳۲۵' }    ]
        cy.get('.pa-4 .mb-5 strong')
            .should('contain', 'دید کلی')

        cy.get('.pa-4 .cols')
            .should('have.length', 3)

        cy.get('.pa-4 .cols')
            .each(($el, index) => {
                cy.wrap($el)
                    .within(() => {
                        cy.get('.rounded-l [name="title"]')
                            .should('contain',  itemList[index].Title);
                    })
            })
    })

    it('should display dashboard checklist and unanswered tickets when viewport is wider than md', () => {
        cy.viewport(1200, 800)

        cy.get('.pa-8 .v-col')
            .should('have.length', 2)
    })

    // it('should hide dashboard checklist and unanswered tickets when viewport is narrower than md', () => {
    //     cy.viewport(800, 600)
    //
    //     cy.get('.pa-8')
    //         .should('not.exist')
    //
    //     cy.get('.rounded-lg-pa-2')
    //         .should('exist')
    // })

    it('should display the dashboard elements in mobile view', () => {
        cy.viewport('iphone-6')
        cy.visit(baseData.host + '/user/dashboard')
        cy.contains('strong', 'دید کلی').should('be.visible')
        cy.get('.pa-4 .cols').should('have.length', 3)
        cy.get('.transparent').should('be.visible')
        cy.get('.rounded-lg-pa-2').should('be.visible')
        cy.get('.rounded-lg-pa-2').should('be.visible')
    })

    it('should be clickable unanswered tickets', () => {
        cy.get('.rounded-lg-pa-2')
            .each(($el) => {
                cy.wrap($el)
                    .within(() => {
                        cy.get('.v-card__title')
                            .click()

                        cy.get('.v-card__text')
                            .should('exist')
                    })
            })
    })
})
