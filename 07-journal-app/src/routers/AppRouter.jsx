import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JournalSreen from '../components/journal/JournalSreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRouters } from './PublicRouters'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false)
    const [isCheking, setIsCheking] = useState(true)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLogged(true)
            } else {
                setIsLogged(false)
            }
            setIsCheking(false)
        })
    }, [dispatch, setIsLogged, setIsCheking])

    if (isCheking) {
        return <h1>Cargandooo...</h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PrivateRoutes isLogged={isLogged}>
                        <JournalSreen />
                    </PrivateRoutes>

                } exact />
                <Route path='/*' element={
                    <PublicRouters isLogged={isLogged}>
                        <AuthRouter />
                    </PublicRouters>
                } exact />
            </Routes>

        </BrowserRouter>
    )
}
