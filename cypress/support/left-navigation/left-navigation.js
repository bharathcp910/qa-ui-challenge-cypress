/// <reference types="cypress" />

export class LeftNavigation {

    patientResourcePage() {
        cy.get('#leftResourcePatient').should('exist');
        cy.get('#leftResourcePatient').should('be.visible');
        cy.get('#leftResourcePatient').scrollIntoView().click();
    }
}

export const navigateTo = new LeftNavigation();