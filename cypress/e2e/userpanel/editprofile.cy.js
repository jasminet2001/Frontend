const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('EditProfile component', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/user/editprofile')
  })

  it('should display page title', () => {
    cy.get('.pa-8 strong').should('contain', 'ویرایش پروفایل')
  })

  it('should accept text in the name input field', () => {
    const name = 'Sepehr Mirshahi'
    cy.get('[name="username"]').type(name).should('have.value', name)
  })

  it('should accept email in the email input field', () => {
    const email = 'sample.ex@example.com'
    cy.get('[name="email"]').type(email).should('have.value', email)
  })

  it('should accept numbers in the phone input field', () => {
    const phone = '09054659352'
    cy.get('[name="phone-number"]').type(phone).should('have.value', phone)
  })

  // it('should enable the save button when inputs are filled out', () => {
  //   const name = 'sepehr'
  //   const email = 'sep.mirshahi@gmail.com'
  //   const phone = '09303028220'
  //   const fileName = null
  //   cy.fixture(fileName).then(fileContent => {
  //     cy.get('[name="username"]').type(name)
  //     cy.get('[name="email"]').type(email)
  //     cy.get('[name="phone-number"]').type(phone)
  //     cy.get('[name="profile-img"]').attachFile({
  //       fileContent: fileContent.toString(),
  //       fileName: fileName,
  //       mimeType: 'image/jpeg'
  //     })
  //     cy.get('.btn-mobile').contains('ذخیره تغییرات').should('be.enabled')
  //   })
  // })

  it('should reset inputs when clear button is clicked', () => {
    const name = 'Sepehr Mirshahi'
    const email = 'sepehr@example.com'
    const phone = '1234567890'
    cy.get('[name="username"]').type(name)
    cy.get('[name="email"]').type(email)
    cy.get('[name="phone-number"]').type(phone)
    cy.get('.v-btn').contains('لغو').click()
    cy.get('.v-btn').contains('لغو').click()
    cy.get('[name="username"]').should('have.value', '')
    cy.get('[name="email"]', { timeout: 10000 }).should('have.value', '')
    cy.get('[name="phone-number"]', { timeout: 10000 }).should('have.value', '')
  })
})
