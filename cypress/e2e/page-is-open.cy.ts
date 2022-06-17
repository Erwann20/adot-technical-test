/// <reference types="cypress" />

describe('page-is-open', (): void => {
    it('front page can be opened', (): void => {
        cy.initApp();
        cy.contains('Destinations');
        cy.contains('Aucune destinations enregistrées.');
        cy.contains('AJOUTER');
    });
});