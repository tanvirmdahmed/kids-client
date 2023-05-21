import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';

const AllToys = () => {
    useTitle('All Toys')
    const toys = useLoaderData();
    const [allToys, setAllToys] = useState(toys);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        // Filter toys based on search term
        const filteredToys = toys.filter((toy) =>
            toy.toyName.toLowerCase().includes(value.toLowerCase()) || toy.subCategory.toLowerCase().includes(value.toLowerCase())
        );
        setAllToys(filteredToys);
    };

    return (
        <div className='my-12'>
            <div className="form-control mb-6">
                <div className="input-group justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered" value={searchValue} onChange={handleSearchChange} />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto" data-aos="zoom-in-up">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-slate-500'>
                        <tr className='text-center'>
                            <th className='text-base font-bold'>SL No.</th>
                            <th className='text-base font-bold'>Seller Name</th>
                            <th className='text-base font-bold'>Toy Name</th>
                            <th className='text-base font-bold'>Sub-category</th>
                            <th className='text-base font-bold'>Price</th>
                            <th className='text-base font-bold'>Available Quantity</th>
                            <th className='text-base font-bold'>Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            allToys.map((toy, i) => (
                                <Toy
                                    key={toy._id}
                                    toy={toy}
                                    i={i}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
