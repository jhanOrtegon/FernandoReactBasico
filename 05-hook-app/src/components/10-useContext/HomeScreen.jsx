import React, { useContext } from 'react'
import { UsersContext } from './UsersContext'

export const HomeScreen = () => {

    const { user, setUser } = useContext(UsersContext);

    return (
        <>
            <h1>HomeScreen</h1>
            <pre>
                {JSON.stringify(user)}
            </pre>
            <hr />
            <button className='btn btn-lg btn-warning' onClick={() => setUser({})}>Logout</button>
        </>
    )
}
