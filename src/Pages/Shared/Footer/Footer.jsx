import moment from 'moment-timezone';
import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-neutral'>
            <div className="footer p-10 text-neutral-content items-center">
                <div className='mx-auto'>
                    <img src="https://i.ibb.co/PGSxjFX/345661271-907576583633683-8660512588925463605-n-removebg-preview.png" className='w-24 h-24' alt="" />
                    <h5><span className='text-lg'>Toy Biz Co.</span><br />Providing reliable tech since 2000</h5>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://twitter.com/'><FaTwitter className='text-4xl text-[#1c93e4]'></FaTwitter></a>
                        <a href='https://www.youtube.com/'><FaYoutube className='text-4xl text-[#f10002]'></FaYoutube></a>
                        <a href='https://www.facebook.com/'><FaFacebook className='text-4xl text-[#1771e6]'></FaFacebook></a>
                    </div>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Subscribe</span>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered text-black opacity-70 w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='text-[#FFFFFF] text-center opacity-70 text-sm md:text-lg lg:text-lg pb-4'>Copyright © {moment().format("YYYY")} - All right reserved by Toy Biz Co.</h4>
            </div>
        </footer>
    );
};

export default Footer;