const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");

describe('Change Password Design Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/user/changepass')
  })

  it('should render correctly on desktop', () => {
    cy.viewport(1280, 800) // Set the viewport to a desktop resolution
    cy.get('.card-desktop').should('be.visible')
  })

  it('should render correctly on mobile', () => {
    cy.viewport(375, 667) // Set the viewport to a mobile resolution
    cy.get('.card-res', { timeout: 5000 }).should('be.visible')
  })

  it('should have the "رمز عبور فعلی" text field', () => {
    cy.get('label').contains('رمز عبور فعلی').should('be.visible')
  })

  // Add similar tests for the other text fields and buttons

  it('should enter a value in the "رمز عبور فعلی" field', () => {
    const password = 'password123'
    cy.get('label').contains('رمز عبور فعلی').next('input').type(password)
        .should('have.value', password)
  })

  it('should have the "رمز عبور جدید" text field', () => {
    cy.get('label').contains('رمز عبور جدید').should('be.visible')
  })

  // Add similar tests for the other text fields and buttons

  it('should enter a value in the "رمز عبور جدید" field', () => {
    const password = 'password123'
    cy.get('label').contains('رمز عبور جدید').next('input').type(password)
        .should('have.value', password)
  })

  // Add similar tests for entering values in the other fields

  it('should click the "ذخیره تغییرات" button', () => {
    cy.get('button').contains('ذخیره تغییرات').click()
    // Add assertions for the expected behavior after clicking the button
  })

  it('should click the "لغو" button', () => {
    cy.get('button').contains('لغو').click()
    // Add assertions for the expected behavior after clicking the button
  })

  it('should handle success response', () => {
    cy.intercept('POST', '*/user/changepass', { statusCode: 200 })
    cy.get('button').contains('ذخیره تغییرات').click()
    // Add assertions for the expected success message or behavior
  })
})

describe("Change Password Functionality Tests", () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/user/changepass')
  })

  it('should handle successful password change', () => {
    cy.intercept('POST', '*/user/changepass', {
      statusCode: 200,
      body: { message: 'Password changed successfully' },
    }).as('changePassword')

    // Enter values in the password fields
    cy.get('label').contains('رمز عبور فعلی').next('input').type('5634MnMn')
    cy.get('label').contains('رمز عبور جدید').next('input').type('5634MnMn')
    cy.get('label').contains('تکرار رمز عبور جدید').next('input').type('5634MnMn')

    // Click the "ذخیره تغییرات" button
    cy.get('button').contains('ذخیره تغییرات').click()

    // Wait for the password change request to complete
    cy.wait('@changePassword')
    cy.get('.v-toast').should('exist').then(toast => {
      expect(toast).to.contain.text('رمز عبور با موفقیت تغییر یافت')
    })
  })

  it('should handle validation error response', () => {
    const validationErrors = {
      errors: {
        password: ['رمز عبور فعلی نامعتبر است'],
        newPassword: ['رمز عبور جدید نامعتبر است'],
      }
    }
    cy.intercept('POST', '*/user/changepass', { statusCode: 422, body: validationErrors })
    cy.get('button').contains('ذخیره تغییرات').click()
    // Add assertions for the expected validation error messages or behavior
  })

  it('should handle unauthorized error response', () => {
    cy.intercept('POST', '*/user/changepass', { statusCode: 401 })
    cy.get('button').contains('ذخیره تغییرات').click()
    // Add assertions for the expected unauthorized error message or behavior
  })

  it('should handle validation error on password change', () => {
    cy.intercept('POST', '*/user/changepass', {
      statusCode: 422,
      body: {
        errors: {
          password: ['رمز عبور فعلی نامعتبر است'],
          newPassword: ['رمز عبور جدید نامعتبر است'],
        },
      },
    }).as('changePassword')

    // Enter values in the password fields
    cy.get('label').contains('رمز عبور فعلی').next('input').type('5634Mn')
    cy.get('label').contains('رمز عبور جدید').next('input').type('newPassword')
    cy.get('label').contains('تکرار رمز عبور جدید').next('input').type('newPassword')

    // Click the "ذخیره تغییرات" button
    cy.get('button').contains('ذخیره تغییرات').click()

    // Wait for the password change request to complete
    cy.wait('@changePassword')

    cy.get('.v-toast').should('exist').then(toast => {
      expect(toast).to.contain.text('رمز عبور فعلی نامعتبر است')
    })
  })

  it('should display error message for password mismatch', () => {
    cy.intercept('POST', '*/user/changepass', {
      statusCode: 422,
      body: {
        errors: {
          newPassword: ["رمز عبور جدید با تاییدیه مطابقت ندارد."],
        },
      },
    }).as('changePassword')
    // Enter different values in the "رمز عبور جدید" and "تکرار رمز عبور جدید" fields
    cy.get('label').contains('رمز عبور فعلی').next('input').type('5634MnMn')
    cy.get('label').contains('رمز عبور جدید').next('input').type('2121sword1')
    cy.get('label').contains('تکرار رمز عبور جدید').next('input').type('password2')

    // Click outside the fields to trigger validation
    cy.get('button').contains('ذخیره تغییرات').click()

    // Verify the error message for password mismatch
    cy.get('.v-toast').should('exist').then(toast => {
      expect(toast).to.contain.text("رمز عبور جدید با تاییدیه مطابقت ندارد.")
    })
  })

})
