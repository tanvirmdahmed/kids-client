import React from 'react';
import { FaEdit, FaRegStar, FaStar } from 'react-icons/fa';
import { MdDeleteSweep, MdDescription } from "react-icons/md";
import Rating from 'react-rating';

const MyToy = ({ myToy, i }) => {
    const { _id, photoUrl, toyName, rating, subCategory, price, quantity, description } = myToy;
    return (
        <tr className='text-center'>
            <td>{i + 1}</td>
            <td>
                <div className="flex items-center justify-center space-x-5">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className='flex gap-2 items-center'>
                            <Rating className='text-[#c3a455] text-xs' placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly={true}
                            >
                            </Rating>
                            <span className='mb-1 text-[#c3a455] text-xs'>({rating})</span>
                        </div>
                    </div>
                </div>
            </td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity} pcs</td>
            <td>
                {/* modal button */}
                <label htmlFor="my-modal-3" className="btn btn-square btn-outline btn-secondary">
                    <FaEdit></FaEdit>
                </label>
                {/* modal body */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box whitespace-normal items-start">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='text-2xl font-bold'>{toyName}</h1>
                        <form>
                            <div className="">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label>
                                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <label>
                                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Detail Description</span>
                                    </label>
                                    <label>
                                        <input type="text" name="description" defaultValue={description} placeholder="Detail Description" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            <input type="submit" value="Edit Toy" className="btn btn-block btn-info" />
                        </form>
                    </div>
                </div>
            </td>
            <td>
                <button className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default MyToy;