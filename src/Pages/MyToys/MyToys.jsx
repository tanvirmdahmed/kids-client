import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    console.log(myToys, user.email);

    const url = `http://localhost:5000/myToys?sellerEmail=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);


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


                fetch(`http://localhost:5000/myToys/${id}`, {
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
        <div className="overflow-x-auto w-full my-12">
            <table className="table w-full">
                {/* head */}
                <thead className='text-center'>
                    <tr>
                        <th>Sl No.</th>
                        <th>Toy Name & Ratting</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Edit Toy</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map((myToy, i) => <MyToy
                            key={myToy._id}
                            myToy={myToy}
                            i={i}
                            handleDelete={handleDelete}
                        ></MyToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;