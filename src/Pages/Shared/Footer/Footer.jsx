import moment from 'moment-timezone';
import React, { useContext } from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Footer = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='bg-neutral px-3 md:lg:px-0 rounded-t-lg'>
            <div className="footer footer-center py-4">
                <div className="grid grid-flow-col gap-4 text-lg text-white opacity-75">
                    {/* <a className="link link-hover text-sm md:text-lg lg:text-lg">About us</a>
                    <a className="link link-hover text-sm md:text-lg lg:text-lg">Contact</a>
                    <a className="link link-hover text-sm md:text-lg lg:text-lg">Toys</a>
                    <a className="link link-hover text-sm md:text-lg lg:text-lg">Menu</a> */}
                    <Link to='/'>Home</Link>
                    <Link to='/allToys'>All Toys</Link>
                    {
                        user && <Link to='/myToys'>My Toys</Link>
                    }
                    {
                        user && <Link to='/addToy'>Add a Toy</Link>
                    }
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <div className='mx-auto text-white opacity-90' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img src="https://i.ibb.co/PGSxjFX/345661271-907576583633683-8660512588925463605-n-removebg-preview.png" className='w-24 h-24' alt="" />
                    <h5 className='text-lg md:text-xl lg:text-2xl'>Toy Biz Co.</h5>
                    <p className='text-sm'>Providing reliable tech since 2000</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://twitter.com/'><FaTwitter className='text-2xl text-[#1c93e4]'></FaTwitter></a>
                        <a href='https://www.youtube.com/'><FaYoutube className='text-2xl text-[#f10002]'></FaYoutube></a>
                        <a href='https://www.facebook.com/'><FaFacebook className='text-2xl text-[#1771e6]'></FaFacebook></a>
                    </div>
                </div>
                <div className='text-white opacity-60'>
                    <p className='text-sm md:text-lg lg:text-lg'>Copyright © {moment().format("YYYY")} - All right reserved by Toy Biz Co.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;