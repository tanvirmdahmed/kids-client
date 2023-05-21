import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../../public/page-not-found.json';
import Lottie from 'lottie-react';

const Error404 = () => {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-center'>
                <Lottie animationData={pageNotFound} className='w-[65%]'></Lottie>
            </div>
            <div className='text-center'>
                <Link to='/' className='btn btn-outline'>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error404;