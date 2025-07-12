'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import AllCollage from '../allCollageApi/AllCollage';


const Banner = () => {

    const { allCollage, isLoading } = AllCollage()
    return (
        <div className='mt-8 mb-16'>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {allCollage.map(collage => (
                    <SwiperSlide key={collage.id || collage.collage_Name}>
                        <div className='relative overflow-hidden h-[400px] border group'>
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-500"
                                src={collage.graduation_Group_Photo}
                                alt={collage.author_Name}
                            />
                            <p className='absolute text-white bottom-0 z-50 bg-black uppercase p-0.5 italic group-hover:bg-[#EC0E0E] transition duration-500 ease-in-out'>
                                {collage.collage_Name}
                            </p>
                            <div className='absolute top-0 left-0 bg-black w-full h-full z-20 opacity-30'></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Banner;