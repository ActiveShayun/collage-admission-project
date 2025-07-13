'use client'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../lib/firebase/firebase.init';
import axiosPublic from '../components/shared/axiosHooks/axiosPublic';
import toast from 'react-hot-toast';
export const AuthContext = createContext(null)
const Provider = ({ children }) => {
    const useAxios = axiosPublic()
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

    // handle reset password
    const handlePasswordReset = () => {
        const email = getValues('email')
        console.log('reset password',email);

        if (!email) {
            toast.error("please provide a valid email")
        }
        else {
            sendPasswordResetEmail(auth, email)
        }
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            if (currentUser?.email) {
                const user = {
                    name: currentUser.displayName,
                    photo: currentUser.photoURL,
                    email: currentUser.email
                }
                try {
                    const res = await useAxios.post('/api/addUser', user)
                    console.log('user post', res);
                } catch (error) {
                    if (error?.response?.status === 409) {

                    }
                    else {
                        console.log('user save failed to database');
                    }
                }

            }
        })
        return () => {
            unSubsCribe()
        }
    }, [])

    const handleSignOut = () => {
        return signOut(auth)
    }
    console.log('Provider', user);

    const authUsers = {
        signUpUser,
        handleSignInUser,
        handleGoogleLogin,
        handleUpDatedProfile,
        handlePasswordReset,
        user,
        handleSignOut
    }
    return (
        <AuthContext.Provider value={authUsers}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;