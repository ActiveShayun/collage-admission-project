'use client'
import UseAuth from '@/app/authProvider/AuthContext';
import axiosPublic from '@/app/components/shared/axiosHooks/axiosPublic';
import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import TableData from './TableData';

const MyCollage = () => {
    const { user } = UseAuth()
    const axiosHooks = axiosPublic()
    const { data: myCollage = [], isLoading } = useQuery({
        queryKey: ['collages'],
        queryFn: async () => {
            const res = await axiosHooks.get(`/api/myCollage/${user?.email}`)
            console.log(res);
            return res.data
        }

    })
    return (
        <div className='mt-8'>
            <TableData
                myCollage={myCollage}
                isLoading={isLoading} />
        </div>
    );
};

export default MyCollage;