import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginSreen } from '../auth/LoginSreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route path='/auth/login' element={<LoginSreen />} exact />
                    <Route path='/auth/register' element={<RegisterScreen />} exact />
                    <Route path='/*' element={<Navigate to='auth/login' />} exact />
                </Routes>
            </div>
        </div>
    )
}
