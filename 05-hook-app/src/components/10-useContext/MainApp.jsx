import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UsersContext } from './UsersContext'

export const MainApp = () => {

    const [user, setUser] = useState({});
    return (
        <UsersContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UsersContext.Provider>
    )
}
