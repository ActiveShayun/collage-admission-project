'use client'
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosPublic from '../shared/axiosHooks/axiosPublic';
import { Rating } from '@mui/material';
import AddReview from '../addReview/AddReview';

const AllReview = ({ collage }) => {
    console.log(collage);
    const useAxios = axiosPublic()

    const { data: allReview = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await useAxios.get(`/api/allcomment/${collage?._id}`)
            console.log(res);
            return res.data
        }
    })
    return (
        <div>
            <div className='border-b border-gray-200 mb-8 text-2xl font-medium'>

                <h2 className='text-red-700 border-b border-red-600 w-[150px]  flex items-center gap-4 '>
                    <span >{allReview?.length}</span>
                    <span className='text-black'>Comments</span>
                </h2>
            </div>
            <div className='mb-8'>
                {
                    allReview?.map(c => {
                        return <div
                            key={c._id}
                            className='text-lg flex items-start mb-4
                            gap-6'>
                            <img
                                className=' w-[60px] h-[60px] rounded-full border'
                                src={c.userPhoto} alt="" />

                            <div className=''>
                                <h1 className='text-xl font-semibold italic'>{c.authorName}</h1>
                                <div className='flex items-center gap-4'>
                                    <Rating name="size-small" defaultValue={c.feedBack} size="small" />
                                </div>
                                <p className='text-gray-500'>{c.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <AddReview collage={collage} refetch={refetch} />
        </div>
    );
};

export default AllReview;