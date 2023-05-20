const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");
describe('Submit Ads Page Design Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
  })

  it('should display the "ثبت آگهی" title on desktop view', () => {
    cy.visit(baseData.host + '/user/subads')
    cy.contains('strong', 'ثبت آگهی').should('be.visible')
  })

  it('should display the "ثبت آگهی" title on responsive view', () => {
    cy.viewport('iphone-6')
    cy.visit(baseData.host + '/user/subads')
    cy.contains('strong', 'ثبت آگهی').should('be.visible')
  })

  it('should display the input fields on desktop view', () => {
    cy.visit(baseData.host + '/user/subads')
    cy.get('.card-desktop .v-text-field').should('have.length', 3)
    cy.get('.card-desktop .v-textarea').should('be.visible')
  })

  it('should display the input fields on responsive view', () => {
    cy.viewport('iphone-6')
    cy.visit(baseData.host + '/user/subads')
    cy.get('.card-res .v-text-field').should('have.length', 3)
    cy.get('.card-res .v-textarea').should('be.visible')
  })

  it('should display the category select field on desktop view', () => {
    cy.visit(baseData.host + '/user/subads')
    cy.get('.card-desktop .v-select').should('be.visible')
  })

  it('should display the category select field on responsive view', () => {
    cy.viewport('iphone-6')
    cy.visit(baseData.host + '/user/subads')
    cy.get('.card-res .v-select').should('be.visible')
  })

  it('should save the changes when "ذخیره تغییرات" button is clicked', () => {
    cy.visit(baseData.host + '/user/subads')
    cy.get('.btn').contains('ذخیره تغییرات').click()
  })

  it('should clear the form when "لغو" button is clicked', () => {
    cy.visit(baseData.host + '/user/subads')
    cy.get('.card-desktop .v-text-field').eq(0).type('شایان')
    cy.get('.card-desktop .v-select').click()
    cy.get('.v-list-item__title').contains('پلاستیک').click()
    cy.get('.card-desktop .v-textarea').type('آدرس شرکت: تهران')

    cy.get('.btn').contains('لغو').click()

    cy.get('.card-desktop .v-text-field').should('have.value', '')
    cy.get('.card-desktop .v-select').should('have.value', '')
    cy.get('.card-desktop .v-textarea').should('have.value', '')
})
})

describe('Submit Ads Page Functionality Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
  })
  it('should add an ad when "ذخیره تغییرات" button is clicked', () => {
    cy.visit(baseData.host + '/user/subads')

    cy.get('.card-desktop .v-text-field').eq(0).type('شایان')
    cy.get('.card-desktop .v-select').click()
    cy.get('.v-list-item__title').contains('پلاستیک').click()
    cy.get('.card-desktop .v-textarea').type('آدرس شرکت: تهران')

    cy.intercept('POST', '/api/ad/makeAd',{
      statusCode: 200,
      body: {
      title: 'شایان',
      category_id: '12',
      isCompany: '0',
      description: 'آدرس شرکت: تهران'}

    }).as('makeAd')

    cy.get('.btn').contains('ذخیره تغییرات').click()

    cy.wait('@makeAd').then((interception) => {
      const response = interception.response
      expect(response.statusCode).to.equal(200)
    })
    cy.get('.v-toast').should('exist').then(toast => {
      expect(toast).to.contain.text("آگهی شما با موفقیت ثبت شد.")
    })
  })

  it('should display an error toaster for invalid form submission', () => {
    cy.visit(baseData.host + '/user/subads')
    cy.intercept('POST', '*/ad/makeAd', {
      statusCode: 422,
      body: {
        errors: {
          title: ['فیلد عنوان الزامی است'],
          category_id: ['فیلد دسته بندی الزامی است'],
          description: ['فیلد توضیحات الزامی است']
        }
      }
    }).as('makeAd')
    cy.get('.btn').contains('ذخیره تغییرات').click()
    cy.wait('@makeAd').then(() => {
      cy.get('.v-toast').should('exist')
      cy.get('.v-toast').contains('فیلد توضیحات الزامی است')
      cy.get('.v-toast').contains('فیلد دسته بندی الزامی است')
      cy.get('.v-toast').contains('فیلد عنوان الزامی است')
    })
  })
})
