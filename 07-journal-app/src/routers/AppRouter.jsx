import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JournalSreen from '../components/journal/JournalSreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JournalSreen />} exact />
                <Route path='/*' element={<AuthRouter />} exact />
            </Routes>

        </BrowserRouter>
    )
}
