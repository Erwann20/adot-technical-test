import {render, screen} from "@testing-library/react";
import {ActionLink} from "./action-link";

describe('action-link test unit', () => {
    test('test action-link title', () => {
        render(<ActionLink actionClick={() => jest.fn} libelle='Test Action' isPrimary={true}></ActionLink>)
        const textButton = screen.getByText('Test Action');
        expect(textButton).toBeInTheDocument();
    })
    test('test action-link isPrimary', () => {
        render(<ActionLink actionClick={() => jest.fn} libelle='Test Action' isPrimary={true}></ActionLink>)
        const textButton = screen.getByTestId('action-link');
        expect(textButton).toHaveClass('primary-link')
        expect(textButton).not.toHaveClass('secondary-link')
    })
    test('test action-link isSecondary', () => {
        render(<ActionLink actionClick={() => jest.fn} libelle='Test Action' isPrimary={false}></ActionLink>)
        const textButton = screen.getByTestId('action-link');
        expect(textButton).toHaveClass('secondary-link')
        expect(textButton).not.toHaveClass('primary-link')
    })

    test('test action-link isCliked', () => {
        const mockCallBack = jest.fn();
        render(<ActionLink actionClick={mockCallBack} libelle='Test Action' isPrimary={false}></ActionLink>)
        const textButton = screen.getByTestId('action-link');
        textButton.click()
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
})