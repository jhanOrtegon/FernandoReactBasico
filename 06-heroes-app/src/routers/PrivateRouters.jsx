import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

const PrivateRouters = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation().pathname;
    const parameters = useLocation().search;

    localStorage.setItem("lastPath", JSON.stringify({ lastPath: location }));
    localStorage.setItem("lastParameters", JSON.stringify({ parameters: parameters }));

    return (
        user.logged
            ? children
            : <Navigate to={'/login'}></Navigate>
    )

}

export default PrivateRouters;
