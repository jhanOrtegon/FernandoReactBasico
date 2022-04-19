import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import CalendarScreen from '../components/calendar/CalendarScreen'

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/login' element={<LoginScreen />} exact />
                <Route path='/calendar' element={<CalendarScreen />} exact />
                <Route path='/' element={<LoginScreen />} exact />
                <Route path='/*' element={<Navigate to='/auth/login' />} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
