import {ModalContainer} from "./modal-container";
import {fireEvent, getByText, render, screen} from "@testing-library/react";

test('modal is visible', () => {
    const mockClose = jest.fn();
    render(<ModalContainer title={'azd'} isOpen={true} cancelAction={mockClose} okAction={() => console.log('')}><label>Test</label></ModalContainer>)
    const demo = document.querySelector('#modal-container')
    expect(demo).not.toBeNull();
})

test('modal is a good title', () => {
    const titleTest: string = 'title :)'
    const mockClose = jest.fn();
    render(<ModalContainer title={'azd'} isOpen={true} cancelAction={mockClose} okAction={() => console.log('')}><label>Test</label></ModalContainer>)
    const title = screen.getByText(titleTest)
    expect(title).toBeInTheDocument();
})

test('close on key', () => {
    const mockClose = jest.fn();
    render(<ModalContainer title={'azd'} isOpen={true} cancelAction={mockClose} okAction={() => console.log('')}><label>Test</label></ModalContainer>)
    fireEvent.keyDown(document, {
        key: 'Escape'
    })
    expect(mockClose.mock.calls.length).toBe(1)
})

test('on key down not beign escape', () => {
    const mockClose = jest.fn();
    render(<ModalContainer title={'azd'} isOpen={true} cancelAction={mockClose} okAction={() => console.log('')}><label>Test</label></ModalContainer>)
    fireEvent.keyDown(document, {
        key: 'Enter'
    })
    expect(mockClose.mock.calls.length).toBe(0)
})



