import { GoogleObjects } from "../objectRepository/googleObjects";

export class GooglePage extends GoogleObjects {

    navigation() {
        // Navigation to google
        cy.visit('https://google.com')
    }

    search1() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Entering desired text for search 
            .type("Mountain")

            // Clicking enter to search
            .type('{enter}')
        cy.screenshot('search1')
    }

    search2() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Entering desired text for search 
            .type('gmail')

            // Clicking enter to search
            .type('{enter}')
        cy.screenshot('search2')
    }

    search3() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Entering desired text for search 
            .type("Test")

            // Clicking enter to search
            .type('{enter}')
        cy.screenshot('search3')
    }

    assertingSearchBox() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Checking visibility of search box and asserting
            .should('be.visible').and('have.id', 'APjFqb')
    }

    assertingSearchResult1() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Checking visibility of search box and asserting
            .should('have.text', 'Mountain')
    }

    assertingSearchResult2() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Checking visibility of search box and asserting
            .should('have.text', 'gmail')
    }

    assertingSearchResult3() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

            // Checking visibility of search box and asserting
            .should('have.text', 'Test')
    }
}