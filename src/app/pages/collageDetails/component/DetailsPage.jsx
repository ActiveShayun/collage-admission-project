'use client'
import AllCollage from '@/app/components/allCollageApi/AllCollage';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FcDislike, FcLike } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { ArrowRightAlt } from '@mui/icons-material';

const DetailsPage = ({ id }) => {
    console.log(id.id);
    const { allCollage, isLoading } = AllCollage()
    const collage = allCollage.find(collage => collage._id === id?.id)
    console.log(collage);
    return (
        <div>
            <div className='mt-12'>
                {/* text content */}
                < div>
                    <span className='bg-red-700 px-6 py-1 uppercase  text-white font-medium'>
                        {collage?.courses_Category}</span>
                    <h2 className='text-3xl font-bold my-4'>{collage?.collage_Name}</h2>
                </div>
                {/* button area */}
                <div className='flex gap-4 mb-4'>
                    <button className='flex items-center gap-3 mr-4 px-16 py-2 bg-[#3059B0]  text-white'
                    >
                        <FaFacebookSquare />
                        <span>Facebook</span>
                    </button>
                    <button className='flex items-center gap-3 mr-4 px-16 py-2 bg-[#55ACEF]  text-white'
                    >
                        <FaXTwitter />
                        <span>Twitter</span>
                    </button>
                </div>
                {/* image and date area */}
                <div className='mb-4'>
                    <p className='font-semibold '>BY <span className='text-red-700'>
                        {collage?.author_Name}</span></p>
                    <p className='text-gray-400 font-semibold text-lg'>
                        Admission start from
                        <span className='text-red-600 ml-2'>
                            {collage?.admission_StartDate}
                        </span>
                    </p>
                    <p className='text-gray-400 font-semibold text-lg'>
                        Admission end
                        <span className='text-red-600 ml-2'>
                            {collage?.admission_StartDate}
                        </span>
                    </p>
                </div>
                <img className='lg:h-[600px] w-full object-cover'
                    src={collage?.collage_Banner}
                    alt={collage?.collage_Name} />

                {/* SOCIAL LINK */}
                <div className='mb-8'>
                    <div className='flex flex-col lg:flex-row items-center gap-8 text-xl mt-4 '>
                        <p>SHARE</p>
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
                            <FcLike />
                            <span>{collage?.like}</span>
                        </button>
                        <button
                            className='flex items-center gap-2 cursor-pointer text-red-700'>
                            <FcDislike />
                            <span>{collage?.disLike}</span>
                        </button>
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
                    <p className='mt-8 text-gray-500'>{collage?.research_history}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;