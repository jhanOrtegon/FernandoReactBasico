import React, { useState } from 'react'
import useForm from '../hooks/useForm';
import "./effect.css";

const FormWitchCustomHook = () => {

    const [formState, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>UseEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    className='form-control'
                    name='name'
                    placeholder='digita tu nombre'
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className='form-control'
                    name='email'
                    placeholder='digita tu email'
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className='form-control'
                    name='password'
                    placeholder='tu password ******'
                    autoComplete='false'
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit' className='btn btn-lg btn-danger'>Enviar Formulario</button>

        </form>
    )
}

export default FormWitchCustomHook
