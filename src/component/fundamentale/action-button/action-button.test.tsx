import {render, screen} from "@testing-library/react";
import {ActionButton} from "./action-button";


describe('action-button test unit', () => {
    test('test action-button title', () => {
        render(<ActionButton actionClick={() => jest.fn} id='action-button'>Valider</ActionButton>);
        const textButton = screen.getByText('Valider');
        expect(textButton).toBeInTheDocument();
    })

    test('test action-button have is-primary in styleclass ', () => {
        render(<ActionButton actionClick={() => jest.fn} id='action-button'>Valider</ActionButton>);
        const textButton = screen.getByRole('button');
        expect(textButton).toHaveClass('is-primary')
    })

    test('test action-button is clicked', () => {
        const mockCallBack = jest.fn();
        render(<ActionButton actionClick={mockCallBack} id='action-button'>Valider</ActionButton>);
        const textButton = screen.getByRole('button');
        textButton.click()
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
})
