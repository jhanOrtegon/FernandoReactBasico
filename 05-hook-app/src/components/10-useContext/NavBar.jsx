import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink className={({ isActive }) => isActive ? 'nav-link nav-item active' : 'nav-link nav-item'} to='/' >Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link nav-item active' : 'nav-link nav-item'} to='/about' >About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link nav-item active' : 'nav-link nav-item'} to='/login' >Login</NavLink>
                </div>
            </div>
        </nav >
    )
}
