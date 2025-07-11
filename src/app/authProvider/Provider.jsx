'use client'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../lib/firebase/firebase.init';
export const AuthContext = createContext(null)
const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [location, setLoading] = useState(true)

    const signUpUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignInUser = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleAProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        setLoading(false)
        return signInWithPopup(auth, googleAProvider)
    }

    const handleUpDatedProfile = (updatedProfile) => {
        setLoading(false)
        return updateProfile(auth.currentUser, updatedProfile)
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubsCribe()
        }
    }, [])
    console.log('Provider', user);

    const authUsers = {
        signUpUser,
        handleSignInUser,
        handleGoogleLogin,
        handleUpDatedProfile,
        user
    }
    return (
        <AuthContext.Provider value={authUsers}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;