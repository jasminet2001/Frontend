const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('CompanyOverview Tests', () => {

  it('renders the component correctly', () => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/c/251')
    cy.get('.v-app-bar').should('exist');
    cy.get('[name="header-component"]').should('exist');
    cy.get('[name="summary-side-bar"]').should('exist');
    cy.get('[name="commentscomponent"]').should('exist');
  });

  it('displays the company name correctly', () => {
    const companyInfo = {
      name: 'Negin Company',
      email: 'info@companyabc.com',
      phone: '123456789',
      website: 'www.companyabc.com',
      user: { name: 'John Doe' }
    };
    cy.intercept('GET', '**/company/show/250', { body: companyInfo }).as('fetchCompany');
    cy.visit(baseData.host + '/c/250')
    cy.wait('@fetchCompany').then(() => {
      cy.contains('[name="header-component"]', companyInfo.name);
    });
  });

  it('displays the company category correctly', () => {
    const companyInfo = {
      name: 'Negin Company',
      email: 'info@companyabc.com',
      phone: '123456789',
      website: 'www.companyabc.com',
      user: { name: 'Dr.Ahmadi' },
      category_id: 9
    };
    const companyCategory = 'غذایی';
    cy.intercept('GET', '**/company/show/*', { body: companyInfo }).as('fetchCompany');
    cy.intercept('GET', '**/categories', { body: { categories: [{ id: 9, name: companyCategory }] } }).as('fetchCategories');

    cy.visit(baseData.host + '/c/250')
    cy.wait('@fetchCompany');
    cy.wait('@fetchCategories').then(() => {
      cy.contains('[name="header-component"]', companyCategory);
    });
  });

  it('authentication error for save', () => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/c/251')
    cy.intercept('GET', '**/user/bookmarks', { body: [{ marked_id: 123 }] }).as('fetchBookmarks');
    cy.intercept('DELETE', '**/user/bookmarks/add', {statusCode: 201, body: { message: 'Unauthenticated.' } }).as('addBookmark');
    cy.wait('@fetchBookmarks');

    cy.get('[name="header-component"]').within(() => {
      cy.get('.icon').click();
    });

    cy.get('.v-toast').should('exist').then(toast => {
      expect(toast).to.contain.text("باید وارد حساب کاربری خود شوید")});
  });

  it('fetches and displays the company information correctly', () => {
    const companyInfo = {
      name: 'شیرین نوین',
      email: 'info@companyabc.com',
      phone: '123456789',
      website: 'www.companyabc.com',
      user: { name: 'John Doe' }
    };
    cy.intercept('GET', '**/company/show/251', { body: companyInfo }).as('fetchCompany');

    cy.visit(baseData.host + '/c/251')
    cy.wait('@fetchCompany').then(() => {
      cy.contains('[name="summary-side-bar"]', companyInfo.email);
      cy.contains('[name="summary-side-bar"]', companyInfo.name);
      cy.contains('[name="summary-side-bar"]', companyInfo.user.name);
      cy.contains('[name="summary-side-bar"]', companyInfo.phone);
      cy.contains('[name="summary-side-bar"]', companyInfo.website);
    });
  });

  it('fetches and displays the company rating correctly', () => {
    cy.intercept('*/authentication/this', APIResults.this3).as('getUser')
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/c/251')
    cy.intercept('GET', '**/user/bookmarks', { body: [{ marked_id: 123 }] }).as('fetchBookmarks');
    cy.intercept('DELETE', '**/user/bookmarks/add', { body: { message: 'success' } }).as('addBookmark');
    cy.wait('@fetchBookmarks');
    const averageRating = 3;
    cy.intercept('GET', '**/company/show/251', { body: { name: 'Company ABC' } }).as('fetchCompany');
    cy.intercept('GET', '**/Comment/getAvgRate/251', { body: { avg: averageRating } }).as('fetchRating');

    cy.get('[name="header-component"]').within(() => {
      cy.get('.v-rating').invoke('attr', 'value').then((value) => {
        const ratingValue = parseFloat(value);
        expect(ratingValue).to.be.a('number');
      });
    });
  });

  it('fetches and displays the company comments correctly', () => {
    const companyInfo = {
      name: 'شیرین نوین',
      email: 'info@companyshirinnovin.com',
      phone: '123456789',
      website: 'www.companyshirinnovin.com',
      user: { name: 'sepehr' },
      category_id: 9
    };
    cy.intercept('GET', '**/company/show/251', { body: companyInfo }).as('fetchCompany');
    cy.visit(baseData.host + '/c/251')
    const comments = [
      {
        "id": 3,
        "user_id": 130,
        "company_id": 247,
        "response": null,
        "comment": "خوب نبود",
        "rating": 2,
        "user": {
          "id": 130,
          "name": "یاسمن",
          "email": "admin@gmail.com",
          "todo": "\"[]\"",
          "phone": null,
          "avatar": null,
          "is_active": 1,
          "role": "company",
          "wallet": 61000,
          "activePlan": "noPlan",
          "AdsRemaining": 0,
          "PlanExpireDate": null
        }
      }
    ]
    cy.intercept('GET', '**/Comment/GetByCompany/251', { body: comments }).as('fetchComments');
    cy.wait('@fetchCompany');
    comments.forEach(comment => {
      cy.contains('[name="comment-component"]', comment.comment);
    });
  });

  it('saves the company when bookmark icon is clicked', () => {
    cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
    cy.intercept('GET', '**/company/show/251', {body: {
        name: 'شیرین نوین',
        email: 'info@companyshirinnovin.com',
        phone: '123456789',
        website: 'www.companyshirinnovin.com',
        user: { name: 'sepehr' },
        category_id: 9
      }}).as('fetchCompany');
    cy.visit(baseData.host)
    cy.wait('@getUser')
    cy.visit(baseData.host + '/c/251')
    cy.wait('@fetchCompany');
    cy.intercept('POST', '**/user/bookmarks/add', {statusCode: 201, body: {"message":"success"}}).as('addBookmark');
    cy.get('[name="header-component"]').within(() => {
      cy.get('[name="saved-icon"]').click();
    });
    cy.wait('@addBookmark').then(() => {
      cy.get('[name="header-component"]').within(() => {
        cy.get('[name="saved-icon"]').should('have.css', 'color', 'rgba(0, 0, 0, 0.54)');
      });
    });
  });
});
