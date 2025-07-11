'use client'
import Link from 'next/link';
import React from 'react';

const Card = ({ collage_Banner, collage_Name, author_Name, admission_EndDate, admission_StartDate, _id ,collageCity }) => {
    return (
        <div className="group bg-gray-400 relative p-3 mb-4">
            <div className='relative overflow-hidden'>
                <img
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform ease-in-out duration-500 transform"
                    src={collage_Banner}
                    alt={collage_Name}
                />
                {collageCity && (
                    <p className='absolute text-white bottom-0 z-50 bg-black uppercase p-0.5 italic group-hover:bg-[#EC0E0E] transition duration-500 ease-in-out'>
                        {collageCity}
                    </p>
                )}
                <div className='absolute top-0 left-0 bg-black w-full h-full z-20 opacity-30'></div>
            </div>

            <div className=''>
                <div className='text-lg font-medium mt-4 mb-2'>
                    <p className='text-[#EC0E0E]'>{author_Name}</p>
                    <p>Admission starts from: {admission_StartDate}</p>
                    <p>Admission ends: {admission_EndDate}</p>
                    <h2 className='text-2xl mb-2'>{collage_Name}</h2>
                </div>
            </div>

            <Link href={`/pages/collageDetails/${_id}`} className='absolute bottom-0 right-0'>
                <button className='cursor-pointer bg-white px-3 py-1 font-semibold'>Details</button>
            </Link>
        </div>
    );
};

export default Card;