'use client'
import UseAuth from '@/app/authProvider/AuthContext';
import { ArrowRightAlt } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const { user } = UseAuth()
    return (
        <div className='bg-gray-400 py-8'>
            <div className='flex flex-col lg:flex-row  justify-center items-center gap-8 text-xl mt-4 '>
                <Link href={'/'}>
                    <FaFacebookSquare className='text-[#3059B0]' />
                </Link>
                <Link href={'/'}>
                    <FaXTwitter />
                </Link>
                <Link href={'/'}>
                    <FaLinkedinIn />
                </Link>
                <Link href={'/'}>
                    <FaInstagram />
                </Link>
                <button
                    className='flex items-center gap-2 cursor-pointer text-red-700'>
                    <ArrowRightAlt />
                    <Link href={'/pages/allCollagePage/'}>
                        <span className='text-black font-medium italic'>
                            Admission Process
                        </span>
                    </Link>
                </button>
            </div>

            <div className='flex justify-center gap-5 mt-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/pages/allCollagePage'}>Collages</Link>
                <Link href={'/pages/admissionPage/'}>Admission</Link>
                {
                    user ? (
                        <Link href={'/pages/myCollage'}>My College</Link>
                    ) : <Link href={'/login'}>My College</Link>
                }
            </div>
        </div>
    );
};

export default Footer;