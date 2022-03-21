import React from 'react'

export const LoginSreen = () => {
    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form action="">
                <input type="email" placeholder='Email' className='auth__input' autoComplete='off' />
                <input type="password" placeholder='Password' className='auth__input' autoComplete='off' />
                <button type='submit' className='btn btn-primary btn-block'>Login</button>
                <span>Login with social networks</span>
                <div
                    className="google-btn"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </form>
        </>
    )
}
