const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('Company Sidebar Component', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/dashboard')
  })

    it('should exist side bar navigation', () => {
        cy.get('.overflow-hidden').should('exist')
    })

  it('displays user avatar and name in sidebar', () => {
    cy.get('.v-list-item__title').contains('mahdieh')
    cy.get('.v-list-item__subtitle').contains('mahdieh9816@gmail.com')
    cy.get('.v-image__image').should('exist')
  })

  // it('should have a visible app bar on small and down screens', () => {
  //   cy.viewport('iphone-6')
  //   cy.visit(baseData.host + '/company/dashboard')
  //   cy.get('.v-app-bar').should('be.visible')
  // })

  it('should have the drawer closed on page load on large screens', () => {
    cy.viewport('macbook-15')
    cy.visit(baseData.host + '/company/dashboard')
    cy.get('.v-navigation-drawer').should('be.visible')
  })

  it('should navigate to the home route on logging out', () => {
    cy.get('[name="logout"]').click()
    cy.url().should('eq', baseData.host+'/')
  })

  it('renders the dashboard link', () => {
    cy.get('.v-list-item__title')
        .eq(1)
        .should('have.text', 'داشبورد')

    cy.get('.v-list-item')
        .eq(2)
        .should('have.attr', 'href')
        .and('equal', '/company/dashboard')
  })

  it('renders the edit profile link', () => {
    cy.get('.v-list-item__title')
        .eq(2)
        .should('have.text', 'ویرایش پروفایل')

    cy.get('.v-list-item')
        .eq(3)
        .should('have.attr', 'href')
        .and('equal', '/company/editprofile')
  })

  it('renders the change password link', () => {
    cy.get('.v-list-item__title')
        .eq(3)
        .should('have.text', 'ویرایش رمز عبور')

    cy.get('.v-list-item')
        .eq(4)
        .should('have.attr', 'href')
        .and('equal', '/company/changepass')
  })

  it('renders the bookmarks link', () => {
    cy.get('.v-list-item__title')
        .eq(4)
        .should('have.text', 'نشانک ها')

    cy.get('.v-list-item')
        .eq(5)
        .should('have.attr', 'href')
        .and('equal', '/company/bookmarks')
  })

  it('renders the recieved requests link', () => {
    cy.get('.v-list-item__title')
        .eq(6)
        .should('have.text', 'درخواست های دریافت شده')

    cy.get('.v-list-item')
        .eq(7)
        .should('have.attr', 'href')
        .and('equal', '/company/recievedrequests')
  })

  it('renders the sent requests link', () => {
    cy.get('.v-list-item__title')
        .eq(7)
        .should('have.text', 'درخواست های ارسال شده')

    cy.get('.v-list-item')
        .eq(8)
        .should('have.attr', 'href')
        .and('equal', '/company/sentrequests')
  })

  it('renders the submit ad link', () => {
    cy.get('.v-list-item__title')
        .eq(8)
        .should('have.text', 'ثبت آگهی')

    cy.get('.v-list-item')
        .eq(9)
        .should('have.attr', 'href')
        .and('equal', '/company/subad')
  })

  it('renders the wallet link', () => {
    cy.get('.v-list-item__title')
        .eq(9)
        .should('have.text', 'کیف پول')

    cy.get('.v-list-item')
        .eq(10)
        .should('have.attr', 'href')
        .and('equal', '/company/payment')
  })

  it('renders the my ads link', () => {
    cy.get('.v-list-item__title')
        .eq(10)
        .should('have.text', 'آگهی های من')

    cy.get('.v-list-item')
        .eq(11)
        .should('have.attr', 'href')
        .and('equal', '/company/adslist')
  })

  it('renders home page', () => {
    cy.get('.v-list-item__title')
        .eq(11)
        .should('have.text', 'صفحه اصلی')

    cy.get('.v-list-item')
        .eq(12)
        .should('have.attr', 'href')
        .and('equal', '/')
  })

})
