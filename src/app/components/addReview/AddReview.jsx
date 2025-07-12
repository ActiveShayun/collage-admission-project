'use client'
import React, { useState } from 'react';
import axiosPublic from '../shared/axiosHooks/axiosPublic';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { upLoadImgBBPhoto } from '@/app/utility/utility';
import { Box, Button, Rating, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';
import StarIcon from '@mui/icons-material/Star';
import UseAuth from '@/app/authProvider/AuthContext';
import { RiLoaderLine } from 'react-icons/ri';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const AddReview = ({ collage, refetch }) => {
    const { user } = UseAuth()
    console.log(collage);
    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [error, setError] = useState('');

    const useAxios = axiosPublic()
    console.log(value);

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm()
    const onSubmit = async (formData) => {
        if (value === 0) {
            return setError('Please select rating')
        }
        toast.success('Your Comment Adding...')
        setLoading(true)
        console.log('data', formData)
        const image = await upLoadImgBBPhoto(formData.userPhoto[0])
        try {
            const review = {
                authorEmail: user?.email,
                authorName: formData.name,
                userPhoto: image,
                description: formData.comment,
                postId: collage._id,
                collage_Banner: collage.collage_Banner,
                collage_Name: collage.collage_Name,
                feedBack: value,
                like: 0
            }
            const { data } = await useAxios.post('/api/addComment', review)
            console.log('add blog', data);
            if (data.insertedId) {
                toast.success('comment Added Successful')
                setLoading(false)
                refetch()
                reset()
                setError('')
                setValue(0)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-lg uppercase mb-4 italic font-semibold'>
                        Write A FeedBack here*</h3>
                    <div className=" mb-3">
                        {/* upload image */}
                        <div className='mb-4'>
                            <div className='w-full mb-4'>
                                <Button className='w-[250px]  h-[100px] py-3 border rounded-full'
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Your Photo
                                    <VisuallyHiddenInput
                                        className='w-full h-14'
                                        type="file"
                                        {...register('userPhoto', { required: true })}
                                        multiple
                                    />
                                </Button>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                {/* name */}
                                <div className='mb-4 w-full'>
                                    <label htmlFor="" className='text-lg'>Your Name*</label>
                                    <TextField
                                        {...register('name', { required: true })}
                                        className='w-full border'
                                        id="standard-multiline-flexible"
                                        label="Enter your name"
                                        multiline
                                        maxRows={4}
                                        variant="standard"
                                    />
                                </div>
                                {/*Add star */}
                                <div className='pt-3 '>
                                    <label htmlFor="" className='text-lg mb-3 block'>
                                        Add Feedback Here
                                    </label>
                                    <div className='flex'>
                                        <div>
                                            <Rating
                                                name="hover-feedback"
                                                value={value}
                                                precision={0.5}
                                                getLabelText={getLabelText}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                    setHover(newHover);
                                                }}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                        </div>
                                        <div>
                                            {value !== null && (
                                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                            )}
                                        </div>
                                    </div>


                                    <p>
                                        {
                                            error && (
                                                <span className='text-red-700'>{error}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            {/*comment*/}
                            <div className='w-full mb-5'>
                                <label htmlFor="" className='text-lg'>Your Comment*</label>
                                <TextField
                                    {...register('comment', { required: true })}
                                    className='w-full'
                                    id="standard-multiline-flexible"
                                    label="Enter your comment"
                                    multiline
                                    maxRows={4}
                                    variant="standard"
                                />
                            </div>
                            {/* rating area */}

                            <div>
                                {
                                    loading ?
                                        <div>
                                            <Button
                                                className="btn btn-neutral flex items-center gap-3 tracking-widest text-lg">
                                                <span className="animate-spin text-lg">
                                                    <RiLoaderLine /></span>
                                                Posting Comment....
                                            </Button>
                                        </div> :
                                        <button
                                            type='submit'
                                            className='bg-[#EC0E0E] flex cursor-pointer font-semibold
                                          items-center gap-3 mr-4 px-16 py-2 text-white'
                                        >
                                            Post Review
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddReview;