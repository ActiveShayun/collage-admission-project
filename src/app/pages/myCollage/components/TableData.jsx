'use client'
import * as React from 'react';
import TableRow from './TableRow';



const TableData = ({ myCollage, isLoading }) => {
    return (
        <div className="overflow-x-auto">
            <h2 className='text-center text-2xl font-bold mb-4'>Your Submission List</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Collage Name</th>
                        <th>Collage Banner</th>
                        <th>Date of birth</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <p>Data is Loading</p> :
                        myCollage?.map((collage, idx) => {
                            return (
                                <TableRow
                                    idx={idx}
                                    collage={collage}
                                    key={collage._id} />
                            )
                        })
                    }

                </tbody>
                {/* foot */}
                <tfoot className='text-center w-full'>
                    <p className='text-center block mx-auto'>Submission Details</p>
                </tfoot>
            </table>
        </div>
    );
};

export default TableData;