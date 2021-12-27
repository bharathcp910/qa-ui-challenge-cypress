/// <reference types="cypress" />

export class LeftNavigation {

    patientResourcePage() {
        cy.get('#leftResourcePatient').scrollIntoView().click();
    }
}

export const navigateTo = new LeftNavigation();