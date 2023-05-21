import React, { useContext } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MathToy = ({ toy }) => {

    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div key={toy._url} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={toy.photoUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <p>Price: ${toy.price}</p>
                    <div className='flex gap-2 items-center'>
                        <Rating
                            className='text-[#c3a455] text-xl'
                            placeholderRating={toy.rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly={true}
                        />
                        <span className='mb-1 font-bold text-[#c3a455]'>({toy.rating})</span>
                    </div>
                    <div className="card-actions">
                        <Link to={`/singleToy/${toy._id}`} className="btn bg-gradient-to-r from-[#2563EB] to-[#0949d2] border-none">
                            View Details
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MathToy;
