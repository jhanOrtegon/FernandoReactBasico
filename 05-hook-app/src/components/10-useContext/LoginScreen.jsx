import React, { useContext } from 'react'
import { UsersContext } from './UsersContext'

export const LoginScreen = () => {
    const { setUser } = useContext(UsersContext);
    return (
        <>
            <h1>Login</h1>
            <button className='btn btn-danger' onClick={() => setUser({ id: 10, name: "jhan" })}>Logueate aqui</button>
        </>

    )
}
