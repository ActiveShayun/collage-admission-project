'use client'
import React, { useContext } from 'react';
import { AuthContext } from './Provider';

const UseAuth = () => {
    const useAuth = useContext(AuthContext)
    return useAuth
};

export default UseAuth;