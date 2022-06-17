import {Destination} from "../../src/model/destination";

Cypress.Commands.add('initApp', (): void => {
    cy.visit('http://localhost:3000')
});

Cypress.Commands.add('openModal', (): void => {
    const idAddDestinationButton = '#add-destination';
    const idModalContainer = '#modal-container';
    cy.get(idAddDestinationButton).should('exist');
    cy.get(idAddDestinationButton).click();
    cy.contains('Ajouter une nouvelle destination');
    cy.get(idModalContainer).should('exist');
});

Cypress.Commands.add('closeModal', (): void => {
    const cancelButton = cy.get('#cancel');
    cancelButton.click();
    cancelButton.should('not.exist');
});

Cypress.Commands.add('confirmModal', (): void => {
    const confirmButton = cy.get('#confirm');
    confirmButton.click();
});

Cypress.Commands.add('writeInput', (idInput: string, value: string | number | boolean): void => {
    if (value) {
        cy.get(`#${idInput}`).type(value);
        cy.get(`#${idInput}`).should('have.value', value);
    }
});

Cypress.Commands.add('fillCreateDestinationForm', (value: Destination): void => {
    cy.writeInput('name', value.name)
    cy.writeInput('adress', value.adress)
    cy.writeInput('imageLink', value.imageLink)
    cy.writeInput('averageRevenue', String(value.detail.averageRevenue))
    cy.writeInput('area', value.detail.area)
    cy.writeInput('countHabitant', value.detail.countHabitant)
    cy.writeInput('countHotel', value.detail.countHotel)
    cy.writeInput('checked', value.checked)
})


declare namespace Cypress {
    interface Chainable {
        initApp(): Chainable,
        openModal():  Chainable,
        closeModal(): Chainable,
        confirmModal(): Chainable,
        writeInput(idInput: string, value: string | number | boolean): Chainable,
        fillCreateDestinationForm(value: Destination): Chainable
    }
}