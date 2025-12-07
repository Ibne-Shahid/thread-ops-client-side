import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'

const useRoles = () => {

    const axiosSecure = useAxiosSecure()
    const {firebaseUser} = useAuth()
    const {data: loggedInUser} = useQuery({
        queryKey: ["role", firebaseUser?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users?email=${firebaseUser.email}`)
            return res.data
        }
    })

    const user = loggedInUser
    

  return user
}

export default useRoles