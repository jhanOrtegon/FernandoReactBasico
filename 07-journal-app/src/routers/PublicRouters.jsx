import { Navigate } from "react-router-dom";
export const PublicRouters = ({ children, isLogged }) => {
    return (
        isLogged
            ? <Navigate to='/' />
            : children
    )
}