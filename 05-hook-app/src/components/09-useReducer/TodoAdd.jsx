import React from 'react'

export const TodoAdd = ({ handleSubmit, handleChange, inputValor }) => {
    return (
        <>
            <h3>Agregar TODO</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    className='form-control'
                    name='inputTodo'
                    value={inputValor.inputTodo}
                />
                <button
                    type='submit'
                    className='btn btn-success text-center w-100 mt-2'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
