const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('PurchasePlanComponent', () => {
  it('displays the correct number of plans', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser');
    cy.visit(baseData.host);
    cy.wait('@getUser');
    cy.visit(baseData.host + '/company/payment');
    cy.get('[name="plan-card-desktop"]').should('have.length', 4);
  });

  it('displays plan titles correctly', () => {
    const plans = [
      {Title: 'کلاسیک', Color: 'rgba(55, 81, 255, 0)', Days: 60, Ads: 10, Price: 20000},
      {Title: 'پرو', Color: 'rgba(55, 81, 255, 0.1)', Days: 60, Ads: 15, Price: 40000},
      {Title: 'دلوکس', Color: 'rgba(55, 81, 255, 0.2)', Days: 90, Ads: 30, Price: 60000},
      {Title: 'مکس', Color: 'rgba(55, 81, 255, 0.3)', Days: 120, Ads: 45, Price: 80000}
    ];
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser');
    cy.visit(baseData.host);
    cy.wait('@getUser');
    cy.visit(baseData.host + '/company/payment');
    cy.get('[name="plans"]').each(($card, index) => {
      cy.wrap($card).find('[name="plan-card-desktop"]').should('contain', plans[index].Title);
    });
  });

  // it('displays plan details correctly', () => {
  //   cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
  //   cy.visit(baseData.host);
  //   cy.wait('@getUser');
  //   cy.intercept('GET', '**/user/BuyPlan/0').as('buyPlan');
  //   cy.visit(baseData.host + '/company/payment');
  //   const plans = [
  //     {Title: 'کلاسیک', Color: 'rgba(55, 81, 255, 0)', Days: 60, Ads: 10, Price: 20000},
  //     {Title: 'پرو', Color: 'rgba(55, 81, 255, 0.1)', Days: 60, Ads: 15, Price: 40000},
  //     {Title: 'دلوکس', Color: 'rgba(55, 81, 255, 0.2)', Days: 90, Ads: 30, Price: 60000},
  //     {Title: 'مکس', Color: 'rgba(55, 81, 255, 0.3)', Days: 120, Ads: 45, Price: 80000}
  //   ];
  //   cy.get('[name="plans"]').each(($card, index) => {
  //     const plan = plans[index];
  //     cy.wrap($card).find('[name="plan-card-desktop"]').should('contain', plan.Days)
  //   });
  // });
  //
  // it('clicks on the buy button and triggers the API request', () => {
  //   cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
  //   cy.visit(baseData.host)
  //   cy.intercept('GET', '**/user/BuyPlan/0', {statusCode:200 ,body:{message : "succesful"}}).as('buyPlan');
  //   cy.visit(baseData.host + '/company/payment');
  //   cy.get('[name="plans"]').first().within(() => {
  //     cy.contains('button', 'پرداخت (از اعتبار)').click();
  //   });
  //   cy.wait('@buyPlan');
  // });
  //
  // it('changes the background color of the plan card on hover', () => {
  //   cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
  //   cy.visit(baseData.host)
  //   cy.intercept('GET', '**/user/BuyPlan/0').as('buyPlan');
  //   cy.visit(baseData.host + '/company/payment');
  //   cy.get('[name="plans"]').first().trigger('mouseover').should('have.css', 'background-color', 'rgb(0, 0, 0)');
  // });
});
