'use server'
import React from 'react';
import DetailsPage from '../component/DetailsPage';

const CollageDetailsPage = async ({ params }) => {
    const id = await params
    console.log(id);
    return (
        <div>
            <DetailsPage id={id} />
        </div>
    );
};

export default CollageDetailsPage;