import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render } from '@testing-library/react'
import PersonForm from './PersonForm'

test('dando clic para agregar una persona', () => {

    const mockHandler = jest.fn()

    const component = render(<PersonForm 
        handleSubmit={mockHandler} handleChangeName={() => {}} 
        handleChangeNumber={() => {}} newName={''} 
        newNumber={''} />)

    const button = component.getByText('add')  

    fireEvent.click(button)  
     
    expect(mockHandler).toHaveBeenCalledTimes(1)

})