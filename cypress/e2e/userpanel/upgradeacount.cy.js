const baseData = require('../../fixtures/shared.json')
const APIResults = require("../../fixtures/APIResults.json");
describe('User Upgrade Page Tests', () => {
  beforeEach(() => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
  })

  it('should render the component', () => {
    cy.visit(baseData.host + '/user/upgrade')
    cy.get('.card-desktop').should('be.visible')
  })

  it('should display an error toaster on form submission failure', () => {
    cy.visit(baseData.host + '/user/upgrade')
    cy.intercept('POST', '*/company/add', {
      statusCode: 422,
      body: {
        message: "The given data was invalid.",
        errors: {
          name: ["فیلد نام الزامی است"],
          category_id: ["فیلد دسته بندی الزامی است"],
          email: ["فیلد ایمیل الزامی است"],
          phone: ["فیلد تلفن الزامی است"]
        }
      }
    }).as('formSubmit')

    cy.get('.card-desktop').within(() => {
      cy.get('.btn').contains('ذخیره تغییرات').click()
    })

    cy.wait('@formSubmit').then(() => {
      cy.get('.v-toast').should('exist')
      cy.get('.v-toast').contains('فیلد نام الزامی است')
      cy.get('.v-toast').contains('فیلد دسته بندی الزامی است')
      cy.get('.v-toast').contains('فیلد ایمیل الزامی است')
      cy.get('.v-toast').contains('فیلد تلفن الزامی است')
    })
  })

  it('should select a category in the form', () => {
    cy.visit(baseData.host + '/user/upgrade')
    cy.get('.card-desktop .v-select').click()
    cy.get('.v-list-item__title').contains('خودرو').click()
  })

  it('should display correctly on mobile breakpoint', () => {
    cy.viewport('iphone-6')
    cy.visit(baseData.host + '/user/upgrade')
    cy.get('.card-res').should('be.visible')
  })

  it('should upload a profile image', () => {
    cy.visit(baseData.host + '/user/upgrade');
    cy.get('.card-desktop')
        .find('input[type="file"]')
        .then((fileInput) => {
          cy.fixture('image.png', 'base64').then((fileContent) => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/png');
            const testFile = new File([blob], 'image.png', { type: 'image/png' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            fileInput[0].files = dataTransfer.files;
            cy.wrap(fileInput).trigger('change', { force: true });
          });
      });
  });
  it('should fill in the form fields', () => {
    cy.visit(baseData.host + '/user/upgrade');
    cy.get('.card-desktop')
        .find('.v-text-field')
        .eq(1)
        .type('Company Name')
        .get('.card-desktop')
        .find('.v-text-field')
        .eq(2)
        .type('test@example.com')
        .get('.card-desktop')
        .find('.v-text-field')
        .eq(3)
        .type('1234567890')
        .get('.card-desktop')
        .find('.v-text-field')
        .eq(4)
        .type('https://example.com')
        .get('.card-desktop')
        .find('.v-text-field')
        .eq(5)
        .type('web.com')
        .get('.card-desktop')
        .find('.v-textarea')
        .type('Company description');
  });

})


