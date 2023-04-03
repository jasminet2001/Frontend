const baseData = require('../../fixtures/shared.json')

describe('home page', ()=>{
    beforeEach(()=>{
        cy.visit(baseData.host)
    })
    it('should load correctly', ()=>{
        cy.get("footer").should("be.visible")
    })
    it('should show categories', function () {
        cy.get
    });
})