'use client'
import UseAuth from '@/app/authProvider/AuthContext';
import SocialLogin from '@/app/components/shared/SocialLogin';
import { upLoadImgBBPhoto } from '@/app/utility/utility';

import { Button } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Register = () => {

    const { signUpUser, handleUpDatedProfile } = UseAuth()
    console.log("API KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const photo = data.userImage[0]
        const name = data.name
        const email = data.email.trim();
        const password = data.password
        console.log(name, email, password);
        const img = await upLoadImgBBPhoto(photo)
        signUpUser(email, password)
            .then(result => {
                console.log(result);
                toast.success(' signUp successful')
                reset()
                handleUpDatedProfile({ displayName: name, photoURL: img })
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err);
            })
    }

    return (
        <div className='mt-8'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='max-w-[500px] mx-auto border rounded-lg p-4'>
                    <h2 className='text-2xl text-center'>Sing Up Please</h2>
                    {/* name */}
                    <div className='mb-4'>
                        <label className='text-lg block mb-2' htmlFor="">Photo*</label>
                        <input
                            {...register("userImage", { required: true })}
                            type="file"
                            className="py-2 px-3 w-full border rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-lg block mb-2' htmlFor="">Name*</label>
                        <input
                            {...register("name", { required: true })}
                            type="name"
                            className="py-2 px-3 w-full border rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-lg block mb-2'
                            htmlFor="">Email*</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            className="py-2 px-3 w-full border rounded-md"
                            placeholder="Enter your email" />
                    </div>
                    <div className='mb-4'>
                        <label className='text-lg block mb-2'
                            htmlFor="">Password*</label>
                        <input
                            {...register('password', { required: true })}
                            className='py-2 px-3 w-full border rounded-md'
                            type="password"
                            placeholder='Enter your password' />
                    </div>
                    <div className='mb-4'>
                        <Button
                            className='w-full'
                            type='submit'
                            variant="contained" disableElevation>
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        <p className='text-center mb-2'>Do you have an account?
                            <Link href={'/login'}>
                                <span className='text-green-700'>SignIn</span>
                            </Link>
                        </p>
                        <SocialLogin />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;