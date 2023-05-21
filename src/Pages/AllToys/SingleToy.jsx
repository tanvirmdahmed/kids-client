import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToy = useLoaderData();
    const { photoUrl, toyName, sellerName, sellerEmail, price, rating, quantity, description } = singleToy;
    console.log(singleToy);
    return (
        <div className="card flex-col md:flex-row lg:flex-row items-center justify-center card-side bg-base-100 shadow-xl mx-auto my-12 p-6" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <figure className='w-1/2'><img src={photoUrl} alt="Movie" /></figure>
            <div className=" w-1/2 ml-10 space-y-5">
                <h2 className="card-title text-3xl">{toyName}</h2>
                <p><strong>Seller Name:</strong> {sellerName}</p>
                <p><strong>Seller Email:</strong> {sellerEmail}</p>
                <p><strong>Price:</strong> ${price}</p>
                <div className='flex gap-2 items-center'>
                    <Rating className='text-[#c3a455] text-xl' placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly={true}
                    >
                    </Rating>
                    <span className='mb-1 font-bold text-[#c3a455]'>({rating})</span>
                </div>
                <p><strong>Available Quantity:</strong> {quantity} pcs</p>
                <p><strong>Description:</strong> {description}</p>
            </div>
        </div>
    );
};

export default SingleToy;