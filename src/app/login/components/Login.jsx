'use client'
import UseAuth from '@/app/authProvider/AuthContext';
import SocialLogin from '@/app/components/shared/SocialLogin';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const Login = () => {

    const { handleSignInUser } = UseAuth()
    console.log("API KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const email = data.email.trim();
        const password = data.password
        console.log(name, email, password);
        handleSignInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success('Login successful')
                reset()
            })
            .catch(err => {
                console.log(err);
                toast.error(err.massage)
            })

    }

    return (
        <div className='my-8'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='max-w-[500px] mx-auto border rounded-lg p-4'>
                    <h2 className='text-2xl text-center'>SingIn Please</h2>

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
                            Sign In
                        </Button>
                    </div>
                    <div>
                        <p className='text-center mb-2'>Do you have an account?
                            <Link href={'/register'}>
                                <span className='text-green-700'>SignUp</span>
                            </Link>
                        </p>
                        <SocialLogin />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;