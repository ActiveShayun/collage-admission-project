'use client';

import UseAuth from '@/app/authProvider/AuthContext';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, handleSignOut } = UseAuth()

    const logoutUser = () => {
        handleSignOut()
            .then(() => {
                toast.success('Logout Successful')
            })
    }

    const deskTopMenu = <>
        <Link href={'/'}>Home</Link>
        <Link href={'/pages/allCollagePage'}>Colleges</Link>
        <Link href={'/pages/admissionPage/'}>Admission</Link>

        {
            user ? (
                <Link href={'/pages/collageForm'}>Add College</Link>
            ) : <Link href={'/login'}>Add College</Link>
        }
        {
            user ? (
                <Link href={'/pages/myCollage'}>My College</Link>
            ) : <Link href={'/login'}>My College</Link>
        }
    </>


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {deskTopMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Think</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                    {deskTopMenu}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className='flex items-center gap-4'>
                            <Link href={'/pages/userProfilePage'}>
                                <Avatar
                                    title={user?.displayName}
                                    alt="user photo"
                                    src={user?.photoURL} />
                            </Link>
                            <button onClick={logoutUser}
                                className='btn'>Logout</button>
                        </div>
                        :
                        <div>

                            <Link className='border py-1 px-4 font-medium rounded-md'
                                href={'/login'}>login</Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;