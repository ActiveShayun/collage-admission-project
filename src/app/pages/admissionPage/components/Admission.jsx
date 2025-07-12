'use client'
import AllCollage from '@/app/components/allCollageApi/AllCollage';
import React, { useState } from 'react';
import AdmissionModal from './AdmissionModal';

const Admission = () => {
    const { allCollage, isLoading } = AllCollage()
    const [open, setOpen] = React.useState(null);
    const [selectedCollage, setSelectedCollage] = useState(null)

    const handleOpen = (collage) => {
        setSelectedCollage(collage)
        console.log(collage);
        setOpen(true)
    };
    const handleClose = () => {
        setSelectedCollage(null)
        setOpen(false)
    };
    return (
        <div>
            <div className='my-8'>
                <h2 className='text-2xl font-bold text-center'>All Collage Admission Here</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    allCollage.map(collage => {
                        return (
                            <div key={collage._id}
                                className='border p-3 rounded-md relative'>
                                <img
                                    className='rounded-md'
                                    src={collage.collage_Banner}
                                    alt="" />
                                <h2 className='text-xl mt-4'>{collage.collage_Name}</h2>
                                <button onClick={() => handleOpen(collage)}
                                    className='absolute bottom-0 right-0
                                 bg-red-700 p-1 rounded-tl text-white cursor-pointer'>
                                    Admission</button>

                            </div>
                        )
                    })
                }
            </div>
            {
                selectedCollage && (
                    <AdmissionModal
                        handleClose={handleClose}
                        open={open}
                        selectedCollage={selectedCollage} />
                )
            }
        </div>
    );
};

export default Admission;