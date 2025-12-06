import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

     const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authData = {
        registerUser,
        signInUser,
        updateUser,
        setUser,
        user,
        loading,
        logOut
    }

  return <AuthContext value={authData}>{children}</AuthContext>
}

export {AuthContext}
export default AuthProvider