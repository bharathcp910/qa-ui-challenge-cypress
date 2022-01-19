/// <reference types="cypress" />

export class PatientResourcePage {

    selectCrudOperations() {
        cy.get('#crud-tab').should('exist');
        cy.get('#crud-tab').should('be.visible');
        cy.get('#crud-tab').scrollIntoView().click();
    }

    getPatientDetailsWithoutId() {
        cy.get('#read-btn').should('be.visible')
        cy.get('#read-btn').click();
    }
}

export const onPatientResourcePage = new PatientResourcePage();