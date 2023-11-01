import { GoogleObjects } from "../objectRepository/googleObjects";

export class GooglePage extends GoogleObjects{

    navigation() {
        // Navigation to google
        cy.visit('https://google.com')
    }

    search() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

        // Entering desired text for search 
            .type("mountain")

            // Clicking enter to search
            .type('{enter}')
    }

    assertingSearchBox() {
        // Element to identify Serach box 
        cy.get(GoogleObjects.search_Box_ID)

        // Checking visibility of search box and asserting
        cy.should('be.visible').and('have.id', 'APjFqb')
    }

}