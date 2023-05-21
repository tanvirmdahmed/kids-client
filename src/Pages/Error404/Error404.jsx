import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='w-full'>
            <img className='w-full' src="https://i.ibb.co/GCX7WmK/7aqcppklh6bexoa70320.jpg" alt="" />
            <div className='text-center'>
                <Link to='/' className='btn btn-outline'>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error404;