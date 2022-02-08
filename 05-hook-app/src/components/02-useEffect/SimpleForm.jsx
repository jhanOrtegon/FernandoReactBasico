import React, { useState, useEffect } from 'react'
import "./effect.css";
import Messaje from './Messaje';

const SimpleForm = () => {

    const [state, setState] = useState({
        name: "",
        email: ""
    });

    const handleInputChange = ({ target }) => {
        setState(
            { ...state, [target.name]: target.value }
        )
    }
    const { name } = state;

    useEffect(() => {
        console.log("ok");
    }, [state.email])


    return (
        <>
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

            {(name === "jhan") ? <Messaje /> : null}

        </>
    )
}

export default SimpleForm;
