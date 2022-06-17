/// <reference types="cypress" />

import {Destination} from "../../src/model/destination";

describe('create-destination', (): void => {
    let goodValue: Destination;
    let badValue: Destination;

    beforeEach((): void => {
        cy.initApp();
        cy.openModal();
        cy.fixture('destination/good-destination.json').then((goodDestination: Destination): void => {
            goodValue = goodDestination;
        });
        cy.fixture('destination/bad-destination.json').then((badDestination: Destination): void => {
            badValue = badDestination;
        });
    });

    it('Fill in the name of the destination and check that ' +
        'the modal does not close and verify that the destination has not been created', (): void => {
        cy.fillCreateDestinationForm(badValue);
        cy.confirmModal();
        cy.get('#modal-shadow').should('exist');
    });

    it('Fill in all the form fields, validate and ' +
        'check that the destination has been added', (): void => {
        cy.fillCreateDestinationForm(goodValue);
        cy.confirmModal();
        cy.get('#modal-shadow').should('not.exist');
        cy.contains(goodValue.adress);
        cy.contains(goodValue.name);
        cy.contains(goodValue.detail.countHotel);
        cy.contains(goodValue.detail.countHabitant);
        cy.contains(goodValue.detail.area);
        cy.contains(goodValue.detail.averageRevenue);
    });
});