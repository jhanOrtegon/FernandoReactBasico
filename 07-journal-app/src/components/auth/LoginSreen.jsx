import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginSreen = () => {

    const initialState = {
        'email': '',
        'password': ''
    }
    const dispath = useDispatch();

    const [values, handleInputChange, reset] = useForm(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(values).every(e => e === '')) {
            alert('el email y el password , no deben estar vacios');
            return;
        }

        alert('todo ha ido bien');

        dispath(login(new Date().getTime(), values.email))

        reset();
    }

    return (
        <>
            <h3 className='auth__title'>Login</h3>
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
                >
                    Login
                </button>

                <p className='center mt-1'>Login with social networks</p>

                <div
                    className="google-btn mb-3"
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
