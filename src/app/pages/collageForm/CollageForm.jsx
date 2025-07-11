'use client'

import { Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { upLoadImgBBPhoto } from "@/app/utility/utility";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "@/app/authProvider/AuthContext";
import axiosPublic from "@/app/components/shared/axiosHooks/axiosPublic";

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

const CollageForm = () => {
    const { user } = UseAuth()
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("");
    const useAxios = axiosPublic()
    const categories = [
        "Engineering",
        "Medical",
        "Management",
        "Arts & Humanities",
        "Science",
        "Commerce",
        "Law",
        "Education",
        "Polytechnic",
        "Pharmacy"
    ];


    const {
        register,
        formState: { error },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = async (data) => {
        toast.success('Blog Adding...')
        setLoading(true)
        console.log('data', data)
        // const tagsArray = data.tags.split(',').map(tag => tag.trim())
        // console.log(tagsArray);
        const image = await upLoadImgBBPhoto(data.collageBanner[0])
        console.log(image);

        const collage = {
            collage_Banner: image,
            author_Email: data.authorEmail,
            author_Name: data.authorName,
            collage_Name: data.collageName,
            collage_Address: data.collageAddress,
            collage_Category: data.collageCategory,
            country: data.country,
            collage_Code: data.collageCode,
            collageCity: data.collageCity,
            admission_StartDate: data.startDate,
            admission_EndDate: data.endDate,
            seats_Available: data.seatsAvailable,
            courses_Category: data.coursesCategory,
            collage_description: data.collageDescription,
            like: 0,
            disLike: 0
        }
        try {

            const res = await useAxios.post('/api/addCollage', collage)
            console.log('add blog', res);
            if (res.insertedId) {
                toast.success('Blog Added Successful')
                setLoading(false)
                reset()
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="hero-content mx-auto w-full">
            <div className=" bg-base-100 w-full shadow-2xl p-4">
                <div className="w-full ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset w-full">
                            {/* row 1 */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-3">
                                {/* collage banner */}
                                <div>
                                    <label className="label mb-2 text-lg"> Upload Collage Banner</label>
                                    <Button className="w-full"
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload Collage Banner
                                        <VisuallyHiddenInput
                                            type="file"
                                            {...register('collageBanner', { required: true })}
                                            multiple
                                        />
                                    </Button>
                                </div>
                                {/* Author Email */}
                                <div>
                                    <label className="label mb-2 text-lg">Author Email</label>
                                    <input type="email"
                                        defaultValue={user?.email}
                                        {...register("authorEmail", { required: true })}
                                        className="input w-full"
                                        placeholder="Email" disabled />
                                </div>
                                {/* author name */}
                                <div>
                                    <label className="label mb-2 text-lg">Name</label>
                                    <input type="text"
                                        defaultValue={user?.displayName}
                                        {...register("authorName", { required: true })}
                                        className="input w-full"
                                        placeholder="Enter your name" />
                                </div>
                            </div>

                            {/* row 2 */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-3">
                                {/*Collage Name */}
                                <div>
                                    <label className="label mb-2 text-lg">Collage Name</label>
                                    <input type="text"
                                        {...register('collageName', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter a collage name" />
                                </div>
                                {/* Collage Address */}
                                <div>
                                    <label className="label mb-2 text-lg">Collage Address</label>
                                    <input type="text"
                                        {...register('collageAddress', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter a collage address" />
                                </div>
                                {/*category */}
                                <div>
                                    <label className="label block mb-2 text-lg">Pick a category</label>
                                    <select
                                        {...register('collageCategory', { required: true })}
                                        defaultValue="Pick a category"
                                        className="select w-full" required>
                                        <option disabled={true}>Pick a category</option>
                                        <option value={'governmentCollege'}>Government College</option>
                                        <option value={'privateCollege'}>Private College</option>
                                        <option value={'centralUniversity'}>Central University</option>
                                        <option value={'stateUniversity'}>State University</option>
                                        <option value={'internationalCollege'}>International College</option>
                                    </select>
                                </div>
                            </div>
                            {/* row 3 */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-3">
                                {/*Country*/}
                                <div>
                                    <label className="label mb-2 text-lg">Country</label>
                                    <input type="text"
                                        {...register('country', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter country" />
                                </div>
                                <div>
                                    <label className="label mb-2 text-lg">Collage Code</label>
                                    <input type="text"
                                        {...register('collageCode', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter collage code" />
                                </div>
                                <div>
                                    <label className="label mb-2 text-lg">Collage City</label>
                                    <input type="text"
                                        {...register('collageCity', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter collage city" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mb-3">
                                {/*Admission Start Date*/}
                                <div className="">
                                    <label className="label mb-2 text-lg  block">Admission Start Date</label>
                                    <div className="input  p-2 w-full">
                                        <input type="date"
                                            {...register('startDate', { required: true })}
                                            className="input w-full"
                                            placeholder="Enter " />
                                    </div>
                                </div>
                                {/* Admission End Date */}
                                <div>
                                    <label className="label mb-2 text-lg block">Admission End Date</label>
                                    <div className="input  p-2 w-full">
                                        <input type="date"
                                            {...register('endDate', { required: true })}
                                            className="input w-full"
                                            placeholder="Enter " />
                                    </div>
                                </div>
                                {/*Seats Available*/}
                                <div>
                                    <label className="label mb-2 text-lg">Seats Available</label>
                                    <input type="text"
                                        {...register('seatsAvailable', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter seats" />
                                </div>
                            </div>
                            {/* row 4 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                                <div>
                                    <label className="label block mb-2 text-lg">Provided Courses</label>
                                    <select className="select w-full"
                                        {...register('coursesCategory', { required: true })}
                                        defaultValue={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        {
                                            categories.map(cat => {
                                                return (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                {/*Collage Description*/}
                                <div>
                                    <label className="label mb-2 text-lg">Collage Description</label>
                                    <input type="text"
                                        {...register('collageDescription', { required: true })}
                                        className="input w-full"
                                        placeholder="Enter blog description" required/>
                                </div>
                            </div>

                            {
                                loading ?
                                    <div>
                                        <Button
                                            type="submit"
                                            variant="contained"

                                            className="btn btn-neutral mt-4 flex items-center gap-3 tracking-widest text-lg">
                                            <span className="animate-spin text-lg">
                                                s</span>
                                            Adding Collage....
                                        </Button>
                                    </div> :
                                    <Button
                                        type='submit'
                                        variant="contained"

                                        className="btn btn-neutral mt-4 tracking-widest text-lg">
                                        Add Collage</Button>
                            }

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CollageForm;