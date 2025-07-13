'use client'
import Link from 'next/link';
import React from 'react';

const TableRow = ({ idx, collage }) => {
    return (
        <>
            <tr>
                <th>
                    <label>
                        {idx + 1}
                    </label>
                </th>
                <th>
                    <label>
                        {collage.name}
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={collage.photo}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Subject</div>
                            <div className="text-sm opacity-50">{collage.subject}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span>{collage.collageName}</span>
                </td>
                <th>
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={collage.collageBanner}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </th>
                <th>
                    <Link href={`/pages/collageDetails/${collage.postID}`}>
                        Details
                    </Link>

                </th>
                <th>
                    {collage.date_of_birth}
                </th>
            </tr>
        </>
    );
};

export default TableRow;