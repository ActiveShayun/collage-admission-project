'use client'
import AllCollage from '@/app/components/allCollageApi/AllCollage';
import Card from '@/app/components/shared/card/Card';
// import Card from '@/app/components/shared/card/Card';

import React from 'react';

const Collages = () => {
    const { allCollage, isLoading } = AllCollage()
    return (
        <div className='mt-8'>
            <h2 className='lg:text-4xl text-3xl font-semibold mb-8 text-center'>All Collage Find Here</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    allCollage?.map(collage => {
                        return (
                            <Card
                                key={collage._id}
                                _id={collage._id}
                                collage_Banner={collage.collage_Banner}
                                collage_Name={collage.collage_Name}
                                admission_StartDate={collage.admission_StartDate}
                                admission_EndDate={collage.admission_EndDate}
                                author_Name={collage.author_Name}
                                collageCity={collage.collageCity}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Collages;