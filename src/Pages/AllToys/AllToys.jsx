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
        setSearchValue(event.target.value);
        // Filter toys based on search term
        const filteredToys = allToys.filter((toy) =>
            (toy.toyName.toLowerCase().includes(searchValue.toLowerCase()))
        );
        setAllToys(filteredToys);
        console.log(filteredToys);
    };


    console.log(allToys, toys);

    return (
        <div className='my-12'>
            <div className="form-control mb-6">
                <div className="input-group justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered" value={searchValue} onChange={handleSearchChange} />
                    <button onClick={handleSearchChange} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th className='text-sm font-bold'>SL No.</th>
                            <th className='text-sm font-bold'>Seller Name</th>
                            <th className='text-sm font-bold'>Toy Name</th>
                            <th className='text-sm font-bold'>Sub-category</th>
                            <th className='text-sm font-bold'>Price</th>
                            <th className='text-sm font-bold'>Available Quantity</th>
                            <th className='text-sm font-bold'>Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            allToys.map((toy, i) => <Toy
                                key={toy._id}
                                toy={toy}
                                i={i}
                            ></Toy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
