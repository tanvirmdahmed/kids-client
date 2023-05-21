import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';
import { FaAngleDown } from 'react-icons/fa';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [myToysDefault, setMyToysDefault] = useState([]);
    const [myToysAsc, setMyToysAsc] = useState([]);
    const [myToysDsc, setMyToysDsc] = useState([]);
    const [update, setUpdate] = useState(false);
    console.log(myToys, myToysAsc);


    const url = `https://b7a11-toy-marketplace-server-side-tanvirmdahmed.vercel.app/myToys?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url, update]);

    const urlDefault = `https://b7a11-toy-marketplace-server-side-tanvirmdahmed.vercel.app/myToys?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(urlDefault)
            .then(res => res.json())
            .then(data => {
                setMyToysDefault(data);
                console.log(data);
            })
    }, []);

    const urlAsc = `https://b7a11-toy-marketplace-server-side-tanvirmdahmed.vercel.app/myToysAsc?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(urlAsc)
            .then(res => res.json())
            .then(data => setMyToysAsc(data))
    }, []);

    const urlDsc = `https://b7a11-toy-marketplace-server-side-tanvirmdahmed.vercel.app/myToysDsc?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(urlDsc)
            .then(res => res.json())
            .then(data => setMyToysDsc(data))
    }, []);

    const handleDefault = () => {
        setMyToys(myToysDefault);
    }

    const handleAscending = () => {
        setMyToys(myToysAsc);
    }

    const handleDescending = () => {
        setMyToys(myToysDsc);
    }


    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://b7a11-toy-marketplace-server-side-tanvirmdahmed.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className='my-6'>
            <div className="dropdown flex justify-end mb-5">
                <label tabIndex={0} className="flex items-center border-2 border-gray-900 rounded-lg p-3 my-4 m-1">Sort by Price <FaAngleDown></FaAngleDown></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleDefault}><a>Default</a></li>
                    <li onClick={handleDescending}><a>Price Low to High</a></li>
                    <li onClick={handleAscending}><a>Price Hight to Low</a></li>
                </ul>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-2xl'>
                            <th className='text-base font-bold'>Sl No.</th>
                            <th className='text-base font-bold'>Toy Name & Ratting</th>
                            <th className='text-base font-bold'>Sub-Category</th>
                            <th className='text-base font-bold'>Price</th>
                            <th className='text-base font-bold'>Available Quantity</th>
                            <th className='text-base font-bold'>Update Toy</th>
                            <th className='text-base font-bold'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, i) => <MyToy
                                key={myToy._id}
                                myToy={myToy}
                                i={i}
                                update={update}
                                setUpdate={setUpdate}
                                handleDelete={handleDelete}
                            ></MyToy>)
                        }
                    </tbody>
                </table>
                <div>
                    {
                        myToys.length === 0 && <p className='text-xl text-center my-14'>No data Available</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;