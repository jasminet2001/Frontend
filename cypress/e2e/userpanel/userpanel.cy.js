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

    it('should have the drawer closed on page load on large screens', () => {
        cy.viewport('macbook-15')
        cy.visit(baseData.host + '/user/dashboard')
        cy.get('.v-navigation-drawer').should('be.visible')
    })


    it('should navigate to the home route on logging out', () => {
        cy.get('.btn-log-out').click()
        cy.url().should('eq', baseData.host+'/')
    })

    // it('should remove user and token cookies on logging out', () => {
    //     cy.window().its('$cookies').invoke('set', 'user', {name: 'test', email: 'test@test.com'})
    //     cy.window().its('$cookies').invoke('set', 'token', 'abc123')
    //     cy.get('.btn-log-out').click()
    //     cy.window().its('$cookies').invoke('get', 'user').should('not.exist')
    //     cy.window().its('$cookies').invoke('get', 'token').should('not.exist')
    // })

    it('renders the dashboard link', () => {
        cy.get('.v-list-item__title')
            .eq(1)
            .should('have.text', 'داشبورد')

        cy.get('.v-list-item')
            .eq(2)
            .should('have.attr', 'href')
            .and('equal', '/user/dashboard')
    })

    it('renders the edit profile link', () => {
        cy.get('.v-list-item__title')
            .eq(2)
            .should('have.text', 'ویرایش پروفایل')

        cy.get('.v-list-item')
            .eq(3)
            .should('have.attr', 'href')
            .and('equal', '/user/editprofile')
    })

    it('renders the change password link', () => {
        cy.get('.v-list-item__title')
            .eq(3)
            .should('have.text', 'ویرایش رمز عبور')

        cy.get('.v-list-item')
            .eq(4)
            .should('have.attr', 'href')
            .and('equal', '/user/changepass')
    })

    it('renders the bookmarks link', () => {
        cy.get('.v-list-item__title')
            .eq(4)
            .should('have.text', 'نشانک ها')

        cy.get('.v-list-item')
            .eq(5)
            .should('have.attr', 'href')
            .and('equal', '/user/bookmarks')
    })

    it('renders the submit ad link', () => {
        cy.get('.v-list-item__title')
            .eq(5)
            .should('have.text', 'ثبت آگهی')

        cy.get('.v-list-item')
            .eq(6)
            .should('have.attr', 'href')
            .and('equal', '/user/subads')
    })

    it('renders the upgrade account link', () => {
        cy.get('.v-list-item__title')
            .eq(6)
            .should('have.text', 'ارتقای حساب')

        cy.get('.v-list-item')
            .eq(7)
            .should('have.attr', 'href')
            .and('equal', '/user/upgrade')
    })

    it('renders the wallet link', () => {
        cy.get('.v-list-item__title')
            .eq(7)
            .should('have.text', 'کیف پول')

        cy.get('.v-list-item')
            .eq(8)
            .should('have.attr', 'href')
            .and('equal', '/user/payment')
    })

    it('renders the my ads link', () => {
        cy.get('.v-list-item__title')
            .eq(8)
            .should('have.text', 'آگهی های من')

        cy.get('.v-list-item')
            .eq(9)
            .should('have.attr', 'href')
            .and('equal', '/user/myads')
    })

})

