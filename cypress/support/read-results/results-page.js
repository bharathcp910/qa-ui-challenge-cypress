/// <reference types="cypress" />

export class ResultsPage {

    validatePatientWithoutId() {
        cy.get('.alert').contains('Warning!').should('be.visible');
        cy.get('.alert').contains('No ID specified').should('be.visible');
    }
}

export const onResultsPage = new ResultsPage();