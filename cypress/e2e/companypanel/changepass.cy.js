const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");

describe('Change Password Design Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/changepass')
  })

  it('should render correctly on desktop', () => {
    cy.viewport(1280, 800)
    cy.get('.card-desktop').should('be.visible')
  })

  it('should render correctly on mobile', () => {
    cy.viewport(375, 667)
    cy.get('.card-res', { timeout: 5000 }).should('be.visible')
  })

  it('should have the "رمز عبور فعلی" text field', () => {
    cy.get('label').contains('رمز عبور فعلی').should('be.visible')
  })


  it('should enter a value in the "رمز عبور فعلی" field', () => {
    const password = 'password123'
    cy.get('label').contains('رمز عبور فعلی').next('input').type(password)
        .should('have.value', password)
  })

  it('should have the "رمز عبور جدید" text field', () => {
    cy.get('label').contains('رمز عبور جدید').should('be.visible')
  })


  it('should enter a value in the "رمز عبور جدید" field', () => {
    const password = 'password123'
    cy.get('label').contains('رمز عبور جدید').next('input').type(password)
        .should('have.value', password)
  })

  it('should click the "ذخیره تغییرات" button', () => {
    cy.get('button').contains('ذخیره تغییرات').click()
  })

  it('should click the "لغو" button', () => {
    cy.get('button').contains('لغو').click()
  })

  it('should handle success response', () => {
    cy.intercept('POST', '*/user/changepass', { statusCode: 200 })
    cy.get('button').contains('ذخیره تغییرات').click()
  })
})

describe("Change Password Functionality Tests", () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/company/changepass')
  })

  it('should handle successful password change', () => {
    cy.intercept('POST', '*/user/changepass', {
      statusCode: 200,
      body: { message: 'Password changed successfully' },
    }).as('changePassword')

    cy.get('label').contains('رمز عبور فعلی').next('input').type('56348055Mn')
    cy.get('label').contains('رمز عبور جدید').next('input').type('56348055Mn')
    cy.get('label').contains('تکرار رمز عبور جدید').next('input').type('56348055Mn')

    cy.get('button').contains('ذخیره تغییرات').click()

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
  })

  it('should handle unauthorized error response', () => {
    cy.intercept('POST', '*/user/changepass', { statusCode: 401 })
    cy.get('button').contains('ذخیره تغییرات').click()
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

    cy.get('label').contains('رمز عبور فعلی').next('input').type('5634Mn')
    cy.get('label').contains('رمز عبور جدید').next('input').type('newPassword')
    cy.get('label').contains('تکرار رمز عبور جدید').next('input').type('newPassword')

    cy.get('button').contains('ذخیره تغییرات').click()

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
    cy.get('label').contains('رمز عبور فعلی').next('input').type('5634MnMn')
    cy.get('label').contains('رمز عبور جدید').next('input').type('2121sword1')
    cy.get('label').contains('تکرار رمز عبور جدید').next('input').type('password2')

    cy.get('button').contains('ذخیره تغییرات').click()

    cy.get('.v-toast').should('exist').then(toast => {
      expect(toast).to.contain.text("رمز عبور جدید با تاییدیه مطابقت ندارد.")
    })
  })

})
