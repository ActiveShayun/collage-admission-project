import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound4O4Page = () => {
    return (
        <div className=' max-w-7xl flex justify-center h-screen items-center'>
            <Link href={'/'}>
                <Image className='mx-auto h-full w-full' src={'/404page.jpg'}
                    width={400}
                    height={400} alt="" />
            </Link>
        </div>
    );
};

export default NotFound4O4Page;