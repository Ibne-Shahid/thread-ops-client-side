import React from 'react'
import AuthNav from '../../components/AuthNavbar/AuthNav'
import { Link, Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <div>
            <AuthNav />
            <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-teal-200 py-10'>
                <div className='lg:flex-1 flex justify-center'>
                    <div className="w-full max-w-md">
                        <p className='font-bold text-2xl md:text-4xl mb-6 text-center lg:hidden'>Welcome to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ThreadOps</span></p>
                        <Outlet />
                    </div>
                </div>
                <div className='lg:flex-1 flex flex-col justify-center lg:items-center gap-6'>
                    <img className='rounded-full w-96 hidden lg:block' src="/auth-photo.jpg" alt="Auth Illustration" />
                    <Link to="/"><button className='btn btn-outline btn-primary w-full lg:w-fit mt-5 lg:mt-0'>Back to Home</button></Link>
                </div>
                

            </div>
        </div>
    )
}

export default AuthLayout
