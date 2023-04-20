const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");

describe('User Dashboard', () => {
    beforeEach(() => {
        cy.intercept('*/user/this', APIResults.this).as('getUser')
        cy.visit(baseData.host)
        cy.wait('@getUser')
        cy.visit(baseData.host + '/user/dashboard')
    })
    it('should display TopDisplayRow with correct items', () => {
        const itemList = [      { Title: 'بازدید از آگهی های شما', Info: '۶۴' },      { Title: 'آگهی های شما', Info: '۱۰' },      { Title: 'کل آگهی ها', Info: '۳۲۵' }    ]
        cy.get('.pa-4 .mb-5 strong')
            .should('contain', 'دید کلی')

        cy.get('.pa-4 hr')
            .should('exist')

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

    it('should display ads container with a list of ads', () => {
        const adList = [{ title: 'تست 1234', Date: '1/1/1', sender:{name : 'sepehr'}, description: 'لورم ایپسوم متن ساختگی' } ]
        cy.get('.pa-4 .mb-5 strong')
            .should('contain', 'آگهی ها')
        cy.get('.justify-center strong').should('contain',  adList[0].title)
        cy.get('.v-card__subtitle').should('contain',  adList[0].sender.name)
        cy.get('.v-card__text').should('contain',  adList[0].description)
    })

    it('should display dashboard checklist and unanswered tickets when viewport is wider than md', () => {
        cy.viewport(1200, 800)

        cy.get('.pa-8 .v-col')
            .should('have.length', 2)

        cy.get('.pa-8 .v-col:first-child .rounded-lg-pa-2')
            .should('exist')

        cy.get('.pa-8 .v-col:last-child .rounded-lg-pa-2')
            .should('exist')
    })

    it('should hide dashboard checklist and unanswered tickets when viewport is narrower than md', () => {
        cy.viewport(800, 600)

        cy.get('.pa-8')
            .should('not.exist')

        cy.get('.rounded-lg-pa-2')
            .should('exist')
    })

    it('should display ad details when clicking on an ad in AdsContainer', () => {
        cy.get('.pa-4')
            .find('.rounded-lg-pa-2')
            .first()
            .click()

        // cy.url()
            // .should('contain', '/ad-details/')
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

                        // cy.get('.v-card__title')
                        //     .click()
                        //
                        // cy.get('.v-card__text')
                        //     .should('not.exist')

                    })
            })
    })

})

describe('SideBarNavigation component', () => {
    beforeEach(() => {
        cy.intercept('*/user/this', APIResults.this).as('getUser')
        cy.visit(baseData.host)
        cy.wait('@getUser')
        cy.visit(baseData.host + '/user/dashboard')
    })

    it('should exist side bar navigation', () => {
        cy.get('.overflow-hidden').should('exist')
    })

    it('should have a visible app bar on small and down screens', () => {
        cy.viewport('iphone-6')
        cy.visit(baseData.host + '/user/dashboard')
        cy.get('.v-app-bar').should('be.visible')
    })

    it('should toggle the drawer on clicking the app bar nav icon', () => {
        cy.get('.-app-bar-nav-icon1').click()
        cy.get('.v-navigation-drawer').should('be.visible')
    })

    it('should have the drawer closed on page load on large screens', () => {
        cy.viewport('macbook-15')
        cy.visit(baseData.host + '/user/dashboard')
        cy.get('.v-navigation-drawer').should('not.be.visible')
    })
})
