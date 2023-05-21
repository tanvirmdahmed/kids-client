import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy, i }) => {

    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

    return (
        <tr>
            <th>{i + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity} pcs</td>
            <td>
                <Link to={`/singleToy/${_id}`}>
                    <button htmlFor="my-modal-3" className='btn bg-gradient-to-r from-[#5480e0] to-[#0949d2] border-none'>View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default Toy;

