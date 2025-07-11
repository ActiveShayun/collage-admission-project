'use client'
import React from 'react';
import AllCollage from '../allCollageApi/AllCollage';
import CollageCard from './CollageCard';

const Collages = () => {
    const { allCollage, isLoading } = AllCollage()
    console.log(allCollage);
    return (
        <div>
            {
                allCollage.map(collage => {
                    return <CollageCard key={collage._id} collage={collage} />
                })
            }
        </div>
    );
};

export default Collages;