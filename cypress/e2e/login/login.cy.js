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

})
