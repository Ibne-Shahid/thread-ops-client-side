import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import useAuth from '../../Hooks/useAuth'
import { toast } from 'react-toastify'
import { PiFinnTheHumanFill } from 'react-icons/pi'
import { FaUser, FaSignOutAlt, FaCaretDown } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Navbar = () => {
    const { firebaseUser, logOut, loading } = useAuth()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("You have been logged out successfully!")
                setDropdownOpen(false)
            })
            .catch((error) => {
                const errorMessage = error.message
                toast.error(errorMessage)
            })
    }

    const toggleDropdown = () => {
        if (firebaseUser) {
            setDropdownOpen(!dropdownOpen)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="navbar bg-base-200 shadow-sm px-10 sticky top-0 z-50">
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
                            <NavLink to="/allProducts">All Products</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about-us">About Us</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {
                            firebaseUser && <li>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                        }

                        {firebaseUser && firebaseUser?.email ? (
                            <>
                                <li>
                                    <NavLink to="/profile" onClick={() => setDropdownOpen(false)}>My Profile</NavLink>
                                </li>
                                <li className="mt-1">
                                    <button className="btn btn-primary w-full" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
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

            <div className="navbar-center">
                <div className='hidden lg:block'>
                    <ul className="menu menu-horizontal px-10 gap-3 font-semibold">
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="/"><li>Home</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="/allProducts"><li>All Products</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="/about-us"><li>About Us</li></NavLink>
                        <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="/contact"><li>Contact</li></NavLink>
                        {
                            firebaseUser && <NavLink className={({ isActive }) => `${isActive ? "bg-secondary text-white" : ""} p-1 rounded-md`} to="/dashboard"><li>Dashboard</li></NavLink>
                        }
                    </ul>
                </div>
            </div>

            <div className="navbar-end flex-nowrap">
                <div className="mr-2">
                    <ThemeToggle />
                </div>

                <div className="relative" ref={dropdownRef}>
                    <div 
                        className={`flex items-center gap-2 bg-base-300 p-1 rounded-full cursor-pointer ${firebaseUser ? 'hover:bg-base-300/80 transition-colors' : ''}`}
                        onClick={toggleDropdown}
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-xl"></span>
                        ) : firebaseUser ? (
                            <>
                                <img 
                                    className='w-10 h-10 rounded-full' 
                                    src={firebaseUser?.photoURL || 'https://via.placeholder.com/40'} 
                                    alt="Profile" 
                                />
                                <FaCaretDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </>
                        ) : (
                            <PiFinnTheHumanFill size={35} />
                        )}
                    </div>

                    {firebaseUser && dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-md shadow-lg py-2 z-50 border border-base-300">
                            <div className="px-4 py-2 border-b border-base-300">
                                <p className="text-sm font-semibold truncate">{firebaseUser.displayName || 'User'}</p>
                                <p className="text-xs text-gray-500 truncate">{firebaseUser.email}</p>
                            </div>
                            
                            <Link 
                                to="/dashboard/my-profile" 
                                className="flex items-center gap-2 px-4 py-3 hover:bg-base-200 transition-colors"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <FaUser className="text-secondary" />
                                <span>My Profile</span>
                            </Link>
                            
                            <Link 
                                to="/dashboard" 
                                className="flex items-center gap-2 px-4 py-3 hover:bg-base-200 transition-colors"
                                onClick={() => setDropdownOpen(false)}
                            >
                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </Link>

                            <div className="border-t border-base-300 mt-1 pt-1">
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-3 text-error hover:bg-base-200 transition-colors w-full text-left"
                                >
                                    <FaSignOutAlt />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {!firebaseUser && (
                    <div className='hidden lg:flex gap-2 ml-3'>
                        <Link to="login">
                            <button className='btn btn-outline btn-secondary'>Login</button>
                        </Link>
                        <Link to="register">
                            <button className='btn btn-primary'>Register</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar