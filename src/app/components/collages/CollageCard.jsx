'use client'
import Link from 'next/link';
import React from 'react';

const CollageCard = ({ p, w, collage }) => {
    console.log(collage);
    return (
        <div className={`${p ? 'mb-4 px-4' : ''} group bg-gray-400 relative p-3`}>
            <div className='relative overflow-hidden'>
                <img className={`${w ? 'h-75' : ''} w-full h-52 object-cover
                 group-hover:scale-110 transition-transform ease-in-out duration-500 transform`}
                    src={collage.collage_Banner}
                    alt={collage.collage_Name}
                />
                <p className='absolute text-white bottom-0 z-50
                 bg-black uppercase p-0.5 italic group-hover:bg-[#EC0E0E] transition duration-500 ease-in-out'>{collage.collageCity}</p>
                {/* Overlay black layer with opacity */}
                <div className='absolute top-0 left-0 bg-black w-full h-full z-20 opacity-30'></div>
            </div>
            {/* text content */}
            <div className=''>
                <div className='text-lg font-medium mt-4 mb-2'>
                    <p className='text-[#EC0E0E]'>
                        {collage.author_Name}
                    </p>
                    <p>
                        Admission start from -{collage.admission_StartDate}
                    </p>
                    <p>
                        Admission End -{collage.admission_EndDate}
                    </p>
                    <h2 className='text-2xl mb-2'>{collage.collage_Name}</h2>
                </div>
            </div>
            <Link className='absolute bottom-0 right-0' 
            href={`pages/collageDetails/${collage._id}`}>
                <button className='cursor-pointer bg-white px-3 py-1 font-semibold
                  '>Details</button>
            </Link>
        </div>
    );
};

export default CollageCard;