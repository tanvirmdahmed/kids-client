import React from 'react';

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
                {/* <button htmlFor="my-modal-3" className='btn btn-active'>View Details</button> */}
                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-3" className="btn">View Details</label> */}
                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div> */}
                <label htmlFor="my-modal-3" className="btn">View Details</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box whitespace-normal items-start">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-left">Congratulations random Internet user!</h3>
                        <p className="py-4 text-justify">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default Toy;

