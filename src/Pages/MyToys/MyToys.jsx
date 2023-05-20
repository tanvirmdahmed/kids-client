import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';

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
                        ></MyToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;