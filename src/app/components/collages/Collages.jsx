'use client'
import React from 'react';
import AllCollage from '../allCollageApi/AllCollage';
import Card from '../shared/card/Card';

const Collages = () => {
    const { allCollage, isLoading, setSearch, search } = AllCollage()
    console.log(allCollage);
    return (
        <div>
            <div className='lg:w-3/5 mx-auto mb-8'>
                <h2 className='text-center lg:text-4xl text-2xl font-semibold mb-4'>All Collage Here</h2>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search colleges..."
                    className="border px-3 py-2 mx-auto block rounded  w-full max-w-md"
                />
            </div>
            <div className='grid grid-cols-1 justify-center lg:grid-cols-4 gap-4'>
                {isLoading ? <p className='text-center'>Loading</p> :
                    allCollage.slice(0, 4).map(collage => {
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