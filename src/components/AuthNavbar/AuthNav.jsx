import React from 'react'
import { NavLink } from 'react-router'

const AuthNav = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm px-10">
            <div className="navbar-start">
                <NavLink to="/" className="btn btn-ghost font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center lg:text-start">ThreadOps</NavLink>
            </div>
        </div>
    )
}

export default AuthNav