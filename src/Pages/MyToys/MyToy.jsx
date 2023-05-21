import React from 'react';
import { FaEdit, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import UpdateModal from './UpdateModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToy = ({ myToy, i, update, setUpdate, handleDelete }) => {
    const { _id, photoUrl, toyName, rating, subCategory, price, quantity } = myToy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const price = parseInt(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const description = form.description.value;

        const updatedToy = { price, quantity, description }

        console.log(updatedToy);

        // send data to the server
        fetch(`http://localhost:5000/myToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setUpdate(!update);
                    toast.success('Toy successfully updated!', {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                }
            })
    }


    return (
        <tr className='text-center' data-aos="fade-up"
            data-aos-duration="1000">
            <td>{i + 1}</td>
            <td>
                <div className="flex items-center justify-start space-x-5">
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
                <label htmlFor={_id} className="btn btn-square btn-outline">
                    <FaEdit></FaEdit>
                </label>
                {/* modal body */}
                <UpdateModal
                    myToy={myToy}
                    handleUpdateToy={handleUpdateToy}
                ></UpdateModal>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default MyToy;