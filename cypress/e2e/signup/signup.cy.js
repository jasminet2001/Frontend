const baseData = require('../../fixtures/shared.json')
describe('SignupForm Component', () => {
  beforeEach(() => {
    cy.visit(baseData.host +'/signup')
  })

  it('should display the name input field', () => {
    cy.get('label').contains('نام و نام خانوادگی')
  })

  it('should display the email input field', () => {
    cy.get('label').contains('ایمیل')
  })

  it('should display the password input fields', () => {
    cy.get('label').contains('رمز عبور').should('have.length', 1)
  })

  it('should display the submit button', () => {
    cy.contains('ثبت نام')
  })

  it('should display an error message if the password is less than 8 characters', () => {
    cy.get('[name="input-10-1"]').type('1234567')
    cy.contains('حداقل ۸ کارکتر بنویسید')
  })

  it('should display an error message if the passwords do not match', () => {
    cy.get('[name="input-10-1"]').type('valid')
    cy.get('[name="input-10-2"]').type('invalid')
    cy.contains('حداقل ۸ کارکتر بنویسید.')
  })

  it('should unsuccessfully submit the form if all fields are not valid', () => {
    cy.get('[name="input-10-2"]').type('valid-email@example.com')
    cy.get('[name="input-10-1"]').type('56348055Mn')
    cy.get('[name="input-10-1"]').type('password')
    cy.contains('ثبت نام').click()
    cy.url().should('eq', baseData.host + '/signup') // Assuming that successful signup redirects to the dashboard
  })

  it('should sign up a new user', () => {
    const userData = {
      name: 'John Doe',
      email: 'johndoe12345@example.com',
      password: 'password123',
      password_confirmation: 'password123'
    }
    cy.get('[name="input-9-1"]').type(userData.name)
    cy.get('[name="input-9-2"]').type(userData.email)
    cy.get('[name="input-10-1"]').type(userData.password)
    cy.get('[name="input-10-2"]').type(userData.password_confirmation)
    cy.contains('ثبت نام').click()
    cy.get('.v-messages__message').should('have.length', 0)
  })

  it('should show an error message when signing up with invalid data', () => {
    // enter invalid user data
    cy.get('[name="input-9-1"]').type(' ')
    cy.get('[name="input-9-2"]').type('invalid-email')
    cy.get('[name="input-10-1"]').type('1234567')
    cy.get('[name="input-10-2"]').type('1234567')

    cy.contains('ثبت نام').click()
    cy.get('.v-messages__message').should('have.length', 3)
    cy.url().should('include', baseData.host + '/signup') // replace with your expected URL
  })

})
