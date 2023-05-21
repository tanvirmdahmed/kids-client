import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { CgMenuLeftAlt } from "react-icons/cg";
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut, photo } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-teal-300 rounded-b-lg shadow-lg py-4 w-full mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <CgMenuLeftAlt className='h-8 w-8'></CgMenuLeftAlt>
                    </label>

                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 bg-base-200 shadow rounded-box w-40 gap-4">
                        <ActiveLink to='/' className="text-orange-400">Home</ActiveLink>
                        <ActiveLink to='/allToys'>All Toys</ActiveLink>
                        {
                            user && <ActiveLink to='/myToys'>My Toys</ActiveLink>
                        }
                        {
                            user && <ActiveLink to='/addToy'>Add a Toy</ActiveLink>
                        }
                        <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <Link to='/'>
                        <img src="https://i.ibb.co/x19776c/encounter-kids-01-removebg-preview.png" className='w-8 md:w-12 lg:w-12 h-8 md:h-10 lg:h-12' alt="" />
                    </Link>
                    <Link to='/' className="text-xl md:text-xl lg:text-3xl font-extrabold"><span className='text-[#01B5FF]'>K</span><span className='text-[#FE8400]'>I</span><span className='text-[#E000EC]'>D</span><span className='text-[#857416]'>S</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal gap-7 text-lg">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                    {
                        user && <ActiveLink to='/myToys'>My Toys</ActiveLink>
                    }
                    {
                        user && <ActiveLink to='/addToy'>Add a Toy</ActiveLink>
                    }
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </div>
            </div>
            <div className="navbar-end gap-6">
                {/* <div className="avatar">
                    <div className="w-8 md:w-10 lg:w-12 rounded-full">
                        <img src="https://i.ibb.co/d5jTFNf/3147853.jpg" />
                    </div>
                </div> */}
                {
                    user &&
                    <div className="avatar">
                        <div className="w-8 md:w-12 lg:w-12 border-gray-200 border-2 rounded-full">
                            {
                                photo ? <img title={user.displayName} className='tool' src={photo} /> : <div className='h-full w-full flex justify-center items-center'><FaUser title={user.displayName} className='text-2xl'></FaUser></div>
                            }

                        </div>
                    </div>
                }
                {
                    user ? <Link onClick={handleLogOut} className="btn bg-gradient-to-r from-[#2563EB] to-[#0949d2]  border-none hover:bg-[#0949d2]">Logout</Link> : <Link to='/login' className="btn bg-gradient-to-r from-[#2563EB] to-[#0949d2] border-none hover:bg-[#0949d2]">Login</Link>
                }
                {
                    !user && <Link to='/register' className="btn bg-gradient-to-r from-[#bb9631] to-[#c3930e] border-none hover:bg-[#0949d2]">Register</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;