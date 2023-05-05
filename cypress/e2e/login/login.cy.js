const baseData = require('../../fixtures/shared.json')
describe('Login component', () => {
  beforeEach(() => {
    cy.visit(baseData.host + '/login')
  })
  it('renders the component', () => {
    cy.get('h1').should('have.text', 'ورود')
    cy.get('img').should('have.attr', 'src', 'https://svgshare.com/i/g44.svg')
  })

  it('has a centered title', () => {
    cy.get('h1').should('have.css', 'text-align', 'start')
  })

  it('has a custom margin', () => {
    cy.get('.img').should('have.css', 'margin-top', '64px')
  })

  it('has a white title color', () => {
    cy.get('h1').should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('has a dark background', () => {
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('should show an error message when log in with invalid data', () => {
    // enter invalid user data
    cy.get('[name="input-10-0"]').type('invalid-email')
    cy.get('[name="input-10-1"]').type('1234567')

    cy.contains('ورود').click()
    cy.get('.v-messages__message').should('have.length', 2)
    cy.url().should('include', baseData.host + '/login')
  })

  it('should show dashboard page with successfull login!', () => {
    // enter invalid user data
    cy.get('[name="input-10-0"]').type('mahdieh9816@gmail.com')
    cy.get('[name="input-10-1"]').type('56348055Mn')

    cy.contains('ورود').click()
    cy.get('.v-messages__message').should('have.length', 0)
    cy.url().should('include', baseData.host + '/user/dashboard')
  })

})
