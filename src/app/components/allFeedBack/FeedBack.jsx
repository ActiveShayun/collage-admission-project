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
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../shared/axiosHooks/axiosPublic';
import { LoaderIcon } from 'react-hot-toast';

const FeedBack = () => {
    const useAxios = axiosPublic()
    const { data: allComments = [], isLoading } = useQuery({
        queryKey: ['Comments',],
        queryFn: async () => {
            const res = await useAxios.get('/api/allFeedBack')
            console.log(res);
            return res.data
        }
    })
    console.log(allComments);
    return (
        <div className='mt-16'>
            <h2 className='text-center lg:text-4xl text-2xl font-semibold mb-8'>Students Feedback</h2>
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
                {isLoading ? <LoaderIcon className='animate-spin text-4xl' /> :
                    allComments?.map(collage => (
                        <SwiperSlide key={collage._id || collage.collage_Name}>
                            <div className='relative  p-4 group'>
                                <h2 className='text-2xl font-medium text-center mb-4'>Happy & Satisfied Faces</h2>
                                    <img 
                                        className="w-[100px] z-50 absolute -top-12 h-[100px] mx-auto rounded-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-500"
                                        src={collage.userPhoto}
                                        alt={collage.author_Name}
                                    />
                                    <div>
                                        <p className='absolute text-white bottom-0 z-50 bg-black uppercase p-0.5 italic group-hover:bg-[#EC0E0E] transition duration-500 ease-in-out'>
                                            {collage.collage_Name}
                                        </p>
                                        <p className='text-lg font-medium'>
                                            {collage.authorName}
                                        </p>
                                        <p className='pb-4'>
                                            {collage.description}
                                        </p>
                                    </div>
                                </div>
                                <div className='absolute top-0 left-0 bg-black w-full h-full z-20 opacity-30'></div>
                          
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default FeedBack;