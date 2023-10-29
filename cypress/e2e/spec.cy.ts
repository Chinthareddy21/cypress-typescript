/// <reference types="cypress"/>

// Test code
it('Google', () => {
  // Navigation to google
  cy.visit('https://google.com')

    // Element to identify Serach box 
    .get('#APjFqb')

    // Checking visibility of search box and asserting
    .should('be.visible').and('have.id', 'APjFqb')

    // Entering desired text for search and clicking enter to search 
    .type("mountain{enter}")
})