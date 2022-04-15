import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from "validator";
import { useDispatch, useSelector } from 'react-redux';
import { uiRemoveError, uiSetError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const initialState = {
        name: '', email: '', password: '', password2: ''
    }

    const [valuesForm, change] = useForm(initialState);
    const { name, email, password, password2 } = valuesForm
    const dispatch = useDispatch();
    const stateUI = useSelector(({ ui }) => ui);
    const { msgError } = stateUI;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterEmailPassword(email, password, name))
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(uiSetError('el name es requerido'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(uiSetError('el correo es requerido'))

            return false
        } else if (password !== password2 || password.length < 6) {
            dispatch(uiSetError('la contraseña debe ser mayor a 6 caracteres y deben de ser iguales'))
            return false
        }

        dispatch(uiRemoveError())

        return true
    }


    return (
        <>
            <h3 className='auth__title'>Register</h3>
            {
                msgError &&
                <div className='auth__alert-error'>
                    {msgError.err}
                </div>
            }

            <form onSubmit={handleRegister}>

                <input onChange={change} type="text" placeholder='Name' name='name' className='auth__input' autoComplete='off' />
                <input onChange={change} type="email" placeholder='Email' name='email' className='auth__input' autoComplete='off' />
                <input onChange={change} type="password" placeholder='Password' name='password' className='auth__input' autoComplete='off' />
                <input onChange={change} type="password" placeholder='Confirm Password' name='password2' className='auth__input' autoComplete='off' />
                <button type='submit' className='btn btn-primary btn-block'>Register</button>
                <Link to='/auth/login' className='link'>Already Register?</Link>
            </form>

        </>
    )
}
