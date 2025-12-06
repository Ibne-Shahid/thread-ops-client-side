import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <NavLink className={({ isActive }) => isActive ? "bg-secondary text-white" : ""} to="/"><li>Home</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "bg-secondary text-white" : ""} to="all-products"><li>All Products</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "bg-secondary text-white" : ""} to="about-us"><li>About Us</li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? "bg-secondary text-white" : ""} to="contact"><li>Contact</li></NavLink>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ThreadOps</NavLink>
            </div>

            <div className="navbar-end">

                <div className='hidden lg:block'>
                    <ul className="menu menu-horizontal px-10 gap-5 font-semibold">
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="/"><li>Home</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="all-products"><li>All Products</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="about-us"><li>About Us</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="contact"><li>Contact</li></NavLink>
                    </ul>
                </div>

                <div className='flex gap-2'>
                    <button className='btn btn-outline btn-secondary'>Login</button>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar