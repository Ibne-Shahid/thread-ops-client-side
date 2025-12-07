import React from 'react'
import { Link, NavLink } from 'react-router'
import useAuth from '../../Hooks/useAuth'
import { toast } from 'react-toastify'
import { PiFinnTheHumanFill } from 'react-icons/pi'


const Navbar = () => {
    const { firebaseUser, logOut, loading } = useAuth()

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("You have been logged out succesfully!")
            })
            .catch((error) => {
                const errorMessage = error.message

                toast.error(errorMessage)
            })
    }

    return (
        <div className="navbar bg-base-200 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/all-products">All Products</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about-us">About Us</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                        {firebaseUser && firebaseUser?.email ? (
                            <li className="mt-1">
                                <button className="btn btn-primary w-full" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="mt-2">
                                    <NavLink to="/login" className="btn btn-outline btn-secondary w-full">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="mt-1">
                                    <NavLink to="/register" className="btn btn-primary w-full">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>


                </div>
                <NavLink to="/" className="btn btn-ghost font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center lg:text-start">ThreadOps</NavLink>
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

                <div className='mr-3 bg-gray-300 p-1 rounded-full'>
                    {loading ? <span className="loading loading-spinner loading-xl"></span> : firebaseUser ? <img className='w-10 h-10 rounded-full' src={firebaseUser?.photoURL} alt="" /> : <PiFinnTheHumanFill size={35} />}
                </div>

                <div className='hidden lg:flex gap-2'>

                    {firebaseUser && firebaseUser?.email ? <button onClick={handleLogout} className='btn btn-primary'>Logout</button> : <><Link to="login"><button className='btn btn-outline btn-secondary'>Login</button></Link>
                        <Link to="register"><button className='btn btn-primary'>Register</button></Link></>}
                </div>
            </div>
        </div>
    )
}

export default Navbar