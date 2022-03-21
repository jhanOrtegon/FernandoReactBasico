import React from 'react'
import { Link } from 'react-router-dom'

export const LoginSreen = () => {
    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form action="">
                <input type="email" placeholder='Email' className='auth__input' autoComplete='off' />
                <input type="password" placeholder='Password' className='auth__input' autoComplete='off' />
                <button type='submit' className='btn btn-primary btn-block'>Login</button>
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
