import React, { useState } from 'react';

const UpdateModal = ({ myToy, handleUpdateToy }) => {
    const [close, setClose] = useState(false);

    const { _id, price, quantity, description } = myToy;

    return (
        <div>
            {/* modal body */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box whitespace-normal items-start">
                    <label htmlFor={_id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h1 className='text-2xl font-bold'>{toyName}</h1> */}
                    <form onSubmit={handleUpdateToy}>
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
        </div>
    );
};

export default UpdateModal;