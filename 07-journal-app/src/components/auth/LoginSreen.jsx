import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAsync, startGoogleLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import validator from "validator";
import { uiRemoveError, uiSetError } from '../../actions/ui'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export const LoginSreen = () => {

    const initialState = {
        'email': '',
        'password': ''
    }

    const dispath = useDispatch();
    const state = useSelector((state) => state.ui)
    const { msgError, loading } = state

    const [values, handleInputChange] = useForm(initialState);
    const { email, password } = values;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            dispath(loginAsync(email, password));
            !msgError && navigate('/')
        }
    }

    const validateForm = () => {
        if (!validator.isEmail(email)) {
            dispath(uiSetError('digita un correo Correcto'))
            return
        } else if (password.trim().length < 3) {
            dispath(uiSetError('digita un password Correcto'))
            return
        }
        dispath(uiRemoveError())
        return true;
    }

    const handleGoogleLogin = () => {
        dispath(startGoogleLogin());
    }

    return (
        <>
            <h3 className='auth__title'>Login</h3>
            {
                msgError &&
                <div className='auth__alert-error'>
                    {msgError.err}
                </div>
            }
            <form action="" onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type="email"
                    placeholder='Email'
                    className='auth__input'
                    autoComplete='off'
                    name='email'
                />

                <input
                    onChange={handleInputChange}
                    value={values.password}
                    type="password"
                    placeholder='Password'
                    className='auth__input'
                    autoComplete='off'
                    name='password'
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={loading}
                >
                    Login
                </button>

                <p className='center mt-1'>Login with social networks</p>

                <div
                    className="google-btn mb-3"
                    onClick={handleGoogleLogin}
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>

                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>

                </div>

                <Link to='/auth/register' className='link'>Create New Acount</Link>

            </form>
        </>
    )
}
