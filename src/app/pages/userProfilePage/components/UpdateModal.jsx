'use client'
import UseAuth from '@/app/authProvider/AuthContext';
import axiosPublic from '@/app/components/shared/axiosHooks/axiosPublic';
import { upLoadImgBBPhoto } from '@/app/utility/utility';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const UpdateModal = ({ userData, open, handleClose, setOpen, refetch }) => {
    const useAxios = axiosPublic()
    const { user } = UseAuth()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        toast.success('updating user...')
        console.log(data);
        const photo = data.photo[0]

        const img = await upLoadImgBBPhoto(photo)
        try {
            const updatedForm = {
                name: data.name,
                university_Name: data.university_Name,
                email: data?.email,
                phone: data.phone,
                address: data.address,
                photo: img,
            }
            const res = await useAxios.patch(`/api/updatedUser/${userData._id}`, updatedForm)
            console.log('submissionForm', res);
            if (res.data.modifiedCount > 0) {
                toast.success('User information updated successful')
                reset()
                refetch()
                setOpen(false)
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title">
                    <h2 className='text-center text-2xl mb-4'>Profile Update Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* 1 row */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                            <div>
                                <label htmlFor="" className='block'>Name</label>
                                <input
                                    defaultValue={user?.displayName}
                                    className='input'
                                    {...register('name', { required: true })}
                                    type="text"
                                    placeholder='Enter your name' />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>University Name</label>
                                <input
                                    className='input'
                                    {...register('university_Name', { required: true })}
                                    type="text"
                                    placeholder='Enter your university name' />
                            </div>
                        </div>
                        {/* second row */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                            <div>
                                <label htmlFor="" className='block'>Email</label>
                                <input
                                    className='input'
                                    defaultValue={user?.email}
                                    {...register('email', { required: true })}
                                    type="email"
                                    placeholder='Enter your email' />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>Phone</label>
                                <input
                                    className='input'
                                    {...register('phone', { required: true })}
                                    type="phone"
                                    placeholder='Enter your phone' />
                            </div>
                        </div>
                        {/* row 3 */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                            <div>
                                <label htmlFor="" className='block'>Address</label>
                                <input
                                    className='input'
                                    {...register('address', { required: true })}
                                    type="text"
                                    placeholder='Enter your address' />
                            </div>
                            <div>
                                <label htmlFor="" className='block'>Photo</label>
                                <input
                                    className='input'
                                    {...register('photo', { required: true })}
                                    type="file"
                                    placeholder='Enter your phone' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Button
                                className='w-full'
                                type='submit'
                                variant="contained" disableElevation>
                                Update
                            </Button>
                        </div>
                    </form>
                </Typography>
            </Box>
        </Modal>
    );
};

export default UpdateModal;