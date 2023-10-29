/// <reference types="cypress"/>

it('passes', () => {
  cy.visit('https://google.com')
    .get('#APjFqb')
    .should('be.visible').and('have.id', 'APjFqb')
    .type("mountain{enter}")
})