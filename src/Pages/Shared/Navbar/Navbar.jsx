import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="navbar py-4 w-[70%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <CgMenuLeftAlt className='h-8 w-8'></CgMenuLeftAlt>
                    </label>

                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow-2xl rounded-box w-52 gap-4">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/allToys'>All Toys</ActiveLink>
                        <ActiveLink to='/addToy'>Add a Toy</ActiveLink>
                        <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src="https://i.ibb.co/PGSxjFX/345661271-907576583633683-8660512588925463605-n-removebg-preview.png" className='w-12 h-12' alt="" />
                    <Link to='/' className="text-3xl font-bold">Toy Biz</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal gap-7 text-lg">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/allToys'>All Toys</ActiveLink>
                    <ActiveLink to='/addToy'>Add a Toy</ActiveLink>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </div>
            </div>
            <div className="navbar-end gap-6">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://i.ibb.co/d5jTFNf/3147853.jpg" />
                    </div>
                </div>
                <Link to='/login'>
                    <button className="btn btn-outline">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;