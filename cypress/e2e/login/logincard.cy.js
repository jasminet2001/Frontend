// const baseData = require('../../fixtures/shared.json')
// describe('LoginCard.vue', () => {
//   it('logs in with valid credentials', () => {
//     cy.visit(baseData.host + '/login')
//
//     // Enter valid email and password
//     cy.get('input[name="email"]').type('testuser@test.com')
//     cy.get('input[name="password"]').type('password123')
//
//     // Click the "ورود" button
//     cy.contains('ورود').click()
//
//     // Verify that the user is redirected to the dashboard
//     cy.url().should('include', baseData.host + '/user/dashboard')
//   })
//
//   it('shows an error with invalid credentials', () => {
//     cy.visit(baseData.host + '/login')
//
//     // Enter invalid email and password
//     cy.get('input[name="email"]').type('invalidemail@test.com')
//     cy.get('input[name="password"]').type('invalidpassword')
//
//     // Click the "ورود" button
//     cy.contains('ورود').click()
//
//     // Verify that an error message is displayed
//     cy.contains('ایمیل یا رمز عبور اشتباه است').should('be.visible')
//   })
// })
