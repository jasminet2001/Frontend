const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('EditProfile component', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/editprofile')
  })

  it('should display page title', () => {
    cy.get('.pa-8 strong').should('contain', 'ویرایش پروفایل')
  })

  it('should accept text in the name input field', () => {
    const name = 'mahdieh'
    cy.get('[name="companyname"]').type(name).should('have.value', name)
  })

  it('should accept email in the email input field', () => {
    const email = 'mahdieh9816@gmail.com'
    cy.get('[name="email"]').type(email).should('have.value', email)
  })

  it('should accept numbers in the phone input field', () => {
    const phone = '09054659352'
    cy.get('[name="phone-number"]').type(phone).should('have.value', phone)
  })

  // it('should enable the save button when inputs are filled out', () => {
  //   const name = 'mahdieh'
  //   const email = 'mahdieh9816@gmail.com'
  //   const phone = '09054659352'
  //   cy.intercept('POST', '*/company/update/125', (req) => {
  //     req.reply((res) => {
  //       res.send({ user: { name: name, email: email, phone: phone } });
  //     });
  //   }).as('updateProfile');
  //
  //   cy.get('input[name="companyname"]').clear().type(name);
  //   cy.get('input[name="email"]').clear().type(email);
  //   cy.get('input[name="phone-number"]').clear().type(phone);
  //
  //   cy.get('.btn').contains('ذخیره تغییرات').click();
  //
  //   cy.wait('@updateProfile').its('response.statusCode').should('eq', 200);
  //
  // })

  // it('should handle a server error during profile update', () => {
  //   const name = 'mahdieh';
  //   const email = 'mahdieh9816@gmail.com';
  //   const phone = '09054659352';
  //
  //   cy.intercept('POST', '*/company/update/125', (req) => {
  //     req.reply({ statusCode: 500, body: { error: 'Server error' } });
  //   }).as('updateProfile');
  //
  //   cy.get('input[name="companyname"]').clear().type(name);
  //   cy.get('input[name="email"]').clear().type(email);
  //   cy.get('input[name="phone-number"]').clear().type(phone);
  //
  //   cy.get('.btn').contains('ذخیره تغییرات').click();
  //
  //   cy.wait('@updateProfile');
  //
  //   cy.get('.toast').should('contain', 'خطا در ویرایش اطلاعات');
  // });

  it('should reset inputs when clear button is clicked', () => {
    const name = 'mahdieh'
    const email = 'mahdieh9816@gmail.com'
    const phone = '09054659352'
    cy.get('[name="companyname"]').type(name)
    cy.get('[name="email"]').type(email)
    cy.get('[name="phone-number"]').type(phone)
    cy.get('.v-btn').contains('لغو').click()
    cy.get('.v-btn').contains('لغو').click()
    cy.get('[name="companyname"]').should('have.value', '')
    cy.get('[name="email"]', { timeout: 10000 }).should('have.value', '')
    cy.get('[name="phone-number"]', { timeout: 10000 }).should('have.value', '')
  })
})
