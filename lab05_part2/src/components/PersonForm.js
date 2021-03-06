import React from 'react'

const PersonForm = ({handleSubmit, handleChangeName, handleChangeNumber, newName, newNumber}) => {

    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                name: <input onChange={handleChangeName} value={newName}/>
                number: <input onChange={handleChangeNumber} value={newNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        
    )
}

export default PersonForm
