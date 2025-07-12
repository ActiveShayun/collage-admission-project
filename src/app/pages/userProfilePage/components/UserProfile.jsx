'use client'
import UseAuth from '@/app/authProvider/AuthContext';
import axiosPublic from '@/app/components/shared/axiosHooks/axiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UpdateModal from './UpdateModal';

const UserProfile = () => {
    const [open, setOpen] = React.useState(null);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const { user } = UseAuth()
    const useAxios = axiosPublic()
    const { data: userData = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await useAxios.get(`/api/singleUser/${user?.email}`)
            console.log(res);
            return res.data
        }
    })
    console.log(userData);
    return (
        < div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md font-sans" >
            {/* Header */}
            <div className='flex gap-8 mb-4'>
                <img className='w-[100px] h-[100px] rounded-full border'
                    src={userData?.photo} alt="" />
                <div>
                    <h2 h1 className="text-2xl font-bold text-gray-900" >{userData?.name} </h2>
                    <p className="text-lg text-gray-600 mb-6">{userData?.email}</p>

                </div>
            </div>
            {/* Profile Fields */}
            <div className="space-y-6">
                {/* Name */}
                <div className='flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-gray-900">{userData?.name}</p>
                </div>

                {/* Email */}
                <div className='flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email account</label>
                    <p className="text-gray-900">{userData?.email}</p>
                </div>

                {/* Mobile */}
                <div className='flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number</label>
                    <p className="text-gray-400">{userData?.phone}</p>
                </div>

                {/* Location */}
                <div className='flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <p className="text-gray-900">
                        {userData?.address}</p>
                </div>
                {/* university name */}
                <div className='flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        University</label>
                    <p className="text-gray-900">{userData?.university_Name}</p>
                </div>
            </div>

            {/* Save Button */}
            <button onClick={handleOpen}
                className="mt-8 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                Save Changes
            </button>
            <UpdateModal
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                userData={userData}
                refetch={refetch} />
        </div >
    );
};

export default UserProfile;