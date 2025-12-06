import React from 'react'
import AuthNav from '../../components/AuthNavbar/AuthNav'
import { Outlet } from 'react-router'


const AuthLayout = () => {
  return (
    <div>
        <AuthNav></AuthNav>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout