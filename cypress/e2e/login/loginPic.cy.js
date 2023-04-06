const baseData = require('../../fixtures/shared.json')

describe('login picture', () => {
  beforeEach(() => {
    cy.intercept('https://svgshare.com/i/g2T.svg', {
      fixture: 'image.svg',
    })
    cy.visit(baseData.host + '/login')
  })

  it('contains the text "ورود"', () => {
    cy.get('h1').should('contain', 'ورود')
  })

  it('has v-img element', () => {
    cy.get('div').find('v-img').should('exist')
  })

  it('has correct src attribute for v-img', () => {
    cy.get('v-img').should('have.attr', 'src', 'https://svgshare.com/i/g2T.svg')
  })

  it('has correct color style for h1', () => {
    cy.get('h1').should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('has correct margin-top style for img', () => {
    cy.get('.img').should('have.css', 'margin-top', '4em')
  })
})

