'use client'
import React from 'react';
import AllCollage from '../allCollageApi/AllCollage';
import CollageCard from './CollageCard';

const Collages = () => {
    const { allCollage, isLoading, setSearch, search } = AllCollage()
    console.log(allCollage);
    return (
        <div>
            <div className='lg:w-3/5 mx-auto'>
                <h2 className='text-center text-2xl font-semibold mb-4'>All Collage Here</h2>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search colleges..."
                    className="border px-3 py-2 mx-auto block rounded mb-4 w-full max-w-md"
                />
            </div>
            <div className='grid grid-cols-1 justify-center lg:grid-cols-4 gap-4'>
                { isLoading ? <p className='text-center'>Loading</p> :
                    allCollage.map(collage => {
                        return <CollageCard key={collage._id} collage={collage} />
                    })
                }
            </div>
        </div>
    );
};

export default Collages;