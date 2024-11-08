///<reference types="Cypress"/>


// it('By ID', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('#email')
// });

// it('By Class', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.get('.hash-link')
// });

// it('By Tag value', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.get('nav')
// });

// it('By Tag', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('[name="pass"]')
// });

// it('By Diffent Tag', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });

// it('By Diffent Types', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.get('button[type="button"][aria-label="Close"]')
// });

// it.only('By contains name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// });

it('Using Get with Find and  Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(1)
});

it.only('Using Get with Find and  Eq', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents')
    cy.get('ul').find('ul').find('li').eq('25')
});