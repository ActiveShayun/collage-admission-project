'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { upLoadImgBBPhoto } from '@/app/utility/utility';
import axiosPublic from '@/app/components/shared/axiosHooks/axiosPublic';
import UseAuth from '@/app/authProvider/AuthContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const AdmissionModal = ({ selectedCollage, open, handleClose }) => {
    const useAxios = axiosPublic()
    const { user } = UseAuth()
    const router = useRouter()
    console.log(selectedCollage);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        toast.success('submitting form...')
        console.log(data);
        const photo = data.photo[0]

        const img = await upLoadImgBBPhoto(photo)
        try {
            const submissionForm = {
                name: data.name,
                subject: data.subject,
                email: data?.email,
                phone: data.phone,
                address: data.address,
                date_of_birth: data.date_of_birth,
                photo: img,
                collageName: selectedCollage.collage_Name,
                collageBanner: selectedCollage.collage_Banner,
                postID: selectedCollage._id
            }
            console.log(submissionForm);
            const res = await useAxios.post('/api/submissionForm', submissionForm)
            console.log('submissionForm', res);
            if (res.data.insertedId) {
                toast.success('Your form is submitted')
                reset()
                router.push('/pages/myCollage')
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} className='w-full max-w-[90vw] sm:max-w-[500px] lg:max-w-[700px] max-h-screen overflow-y-auto p-4 bg-white rounded shadow-lg'>
                    <Typography id="keep-mounted-modal-title">
                        <h2 className='text-center text-2xl mb-4'>Submission Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* 1 row */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                <div>
                                    <label htmlFor="" className='block mb-1'>Name</label>
                                    <input
                                        defaultValue={user?.displayName}
                                        className='input w-full'
                                        {...register('name', { required: true })}
                                        type="text"
                                        placeholder='Enter your name' />
                                </div>
                                <div>
                                    <label htmlFor="" className='block mb-1'>Subject</label>
                                    <input
                                        className='input w-full'
                                        {...register('subject', { required: true })}
                                        type="text"
                                        placeholder='Enter your subject' />
                                </div>
                            </div>
                            {/* second row */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                <div>
                                    <label htmlFor="" className='block mb-1'>Email</label>
                                    <input
                                        className='input w-full'
                                        defaultValue={user?.email}
                                        {...register('email', { required: true })}
                                        type="email"
                                        placeholder='Enter your email' />
                                </div>
                                <div>
                                    <label htmlFor="" className='block mb-1'>Phone</label>
                                    <input
                                        className='input w-full'
                                        {...register('phone', { required: true })}
                                        type="phone"
                                        placeholder='Enter your phone' />
                                </div>
                            </div>
                            {/* row 3 */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
                                <div>
                                    <label htmlFor="" className='block mb-1'>Date of birth</label>
                                    <input
                                        className='input w-full'
                                        {...register('date_of_birth', { required: true })}
                                        type="date"
                                        placeholder='Enter your phone' />
                                </div>
                                <div>
                                    <label htmlFor="" className='block mb-1'>Photo</label>
                                    <input
                                        className='input w-full'
                                        {...register('photo', { required: true })}
                                        type="file"
                                        placeholder='Enter your phone' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='block mb-1'>Address</label>
                                <input
                                    className='input w-full'
                                    {...register('address', { required: true })}
                                    type="text"
                                    placeholder='Enter your address' />
                            </div>
                            <div className='mt-4'>
                                <Button
                                    className='w-full'
                                    type='submit'
                                    variant="contained" disableElevation>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default AdmissionModal;