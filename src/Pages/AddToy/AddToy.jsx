import React, { useContext } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add a Toy')

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const photoUrl = form.photoUrl.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = { toyName, sellerName, sellerEmail, subCategory, photoUrl, price, rating, quantity, description }

        console.log(newToy);

        // send data to the server
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div className="p-24">
            <h2 className="text-5xl text-center font-extrabold mb-10">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form toy name and seller name row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label>
                            <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label>
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form seller email and sub-category row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label>
                            <input type="email" name="sellerEmail" defaultValue={user.email} placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        {/* <label>
                            <input type="text" name="subCategory" placeholder="Sub-Category" className="input input-bordered w-full" />
                        </label> */}
                        <select className="select select-bordered w-full" name='subCategory' placeholder='Sub-Category'>
                            <option>Science kits</option>
                            <option>Math learning toys</option>
                            <option>engineering kits</option>
                        </select>
                    </div>
                </div>
                {/* form photo url and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Photo URL</span>
                        </label>
                        <label>
                            <input type="url" name="photoUrl" placeholder="Toy Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form rating and available quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form detail description row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label>
                            <input type="text" name="description" placeholder="Detail Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block btn-secondary" />

            </form>
        </div>
    );
};

export default AddToy;