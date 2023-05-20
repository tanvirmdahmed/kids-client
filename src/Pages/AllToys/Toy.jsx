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
                    <button htmlFor="my-modal-3" className='btn btn-active'>View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default Toy;

