/// <reference types="cypress" />


describe('modal initialise', (): void => {
    it('Check that the modal is not open when the app is opened', (): void => {
        cy.get('#modal-container').should('not.exist');
    });
});

describe('modal destination', (): void => {

    beforeEach((): void => {
        cy.initApp();
        cy.openModal();
    })

    it('Clicking on the close button closes the modal', (): void => {
        cy.closeModal();
    })

    it('Clicking on the confirm button does not close the modal', (): void => {
        const confirmButton = cy.get('#confirm');
        confirmButton.should('exist');
        confirmButton.click();
        confirmButton.should('exist');
    })
    it('Click on the transparent background to close the modal', (): void => {
        const modalShadow = cy.get('#modal-shadow');
        modalShadow.should('exist');
        modalShadow.click({
            force: true
        });
        modalShadow.should('not.exist');
    });
});