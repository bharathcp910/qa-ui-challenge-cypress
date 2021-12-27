/// <reference types="cypress" />

import { navigateTo } from "../support/left-navigation/left-navigation";
import { onPatientResourcePage } from "../support/patient-resource-page/patient-resource-operations";
import { onResultsPage } from "../support/read-results/results-page";

describe ('Tests to get patient details', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Read a patient when no ID is given', () => {
        navigateTo.patientResourcePage();
        onPatientResourcePage.selectCrudOperations();
        onPatientResourcePage.getPatientDetailsWithoutId();
        onResultsPage.validatePatientWithoutId();
    })
})