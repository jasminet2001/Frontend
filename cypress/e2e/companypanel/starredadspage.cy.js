// const baseData = require('../../fixtures/shared.json')
// const APIResults = require("../../fixtures/APIResults.json");

const APIResults = require("../../fixtures/APIResults.json");
const baseData = require("../../fixtures/shared.json");
describe('Starred Ads Page Component Tests', () => {
    beforeEach(() => {
        const adList = [
            { id: 1, marked: { name: 'Ad 1', description: 'Description 1', email: 'email1@example.com', phone: '1234567890' } },
            { id: 2, marked: { name: 'Ad 2', description: 'Description 2', email: 'email2@example.com', phone: '9876543210' } },
            { id: 3, marked: { name: 'Ad 3', description: 'Description 3', email: 'email3@example.com', phone: '5555555555' } }
        ];
        cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
        cy.intercept('GET', '**/user/bookmarks', adList).as('getBookmarks');
        cy.visit(baseData.host)
        cy.wait('@getUser')
        cy.visit(baseData.host + '/company/bookmarks')
        cy.wait('@getBookmarks');
    });

    it('displays the title correctly', () => {
        cy.contains('نشانک های من').should('be.visible');
    });

    it('displays starred ads correctly', () => {
        cy.get('.v-card').should('have.length', 4);
    });

})
// describe(' Delete Starred Ads Tests', () => {
//     it('initializes component correctly', () => {
//         cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
//         cy.intercept('GET', '**/user/bookmarks', []).as('getBookmarks');
//         cy.visit(baseData.host)
//         cy.wait('@getUser')
//         cy.visit(baseData.host + '/company/bookmarks')
//         cy.wait('@getBookmarks');
//         cy.window().then((win) => {
//             expect(win).to.be.an('array');
//             expect(win).to.be.empty;
//         });
//     });
//     it('toggles the starred state of an ad correctly', () => {
//         const adList = [
//             { id: 1, marked: { name: 'Ad 1', description: 'Description 1', email: 'email1@example.com', phone: '1234567890' } },
//             { id: 2, marked: { name: 'Ad 2', description: 'Description 2', email: 'email2@example.com', phone: '9876543210' } },
//             { id: 3, marked: { name: 'Ad 3', description: 'Description 3', email: 'email3@example.com', phone: '5555555555' } }
//         ];
//         cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
//         cy.intercept('GET', '**/user/bookmarks', adList).as('getBookmarks');
//         cy.visit(baseData.host)
//         cy.wait('@getUser')
//         cy.visit(baseData.host + '/company/bookmarks')
//         cy.wait('@getBookmarks');
//         cy.intercept('DELETE', '**/user/bookmarks/del/1', {}).as('deleteBookmark');
//         cy.get('.v-card').each((card, index) => {
//             if (index === 1) {
//                 cy.wrap(card)
//                     .find('[name="more-info-btn"]')
//                     .as('deleteButton');
//             }
//         })
//         cy.wait('@deleteBookmark');
//         cy.get('@deleteButton').click();
//         cy.get('.v-card').should('have.length', adList.length);
//     });
//
//     it('deletes a bookmark correctly', () => {
//         const adList = [
//             { id: 1, marked: { name: 'Ad 1', description: 'Description 1', email: 'email1@example.com', phone: '1234567890' } },
//             { id: 2, marked: { name: 'Ad 2', description: 'Description 2', email: 'email2@example.com', phone: '9876543210' } },
//             { id: 3, marked: { name: 'Ad 3', description: 'Description 3', email: 'email3@example.com', phone: '5555555555' } }
//         ];
//         cy.intercept('*/authentication/this', APIResults.this2).as('getUser')
//         cy.intercept('GET', '**/user/bookmarks', adList).as('getBookmarks');
//         cy.visit(baseData.host)
//         cy.wait('@getUser')
//         cy.visit(baseData.host + '/company/bookmarks')
//         cy.wait('@getBookmarks');
//         const bookmarkId = 1;
//         cy.intercept('DELETE', `**/user/bookmarks/del/${bookmarkId}`, {}).as('deleteBookmark');
//         cy.window().then((win) => {
//             win.deleteBookmark(bookmarkId);
//         });
//         cy.wait('@deleteBookmark').then((xhr) => {
//             expect(xhr.response.statusCode).to.equal(200);
//             expect(xhr.response.body).to.be.empty;
//         });
//     });
// })
