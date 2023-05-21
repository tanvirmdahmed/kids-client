import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const CustomerFeedback = () => {
    return (
        <div className="hero h-[100vh] md:h-[60vh] lg:h-[70vh] my-12 rounded-lg" style={{ backgroundImage: `url("https://i.ibb.co/TPsCGkX/depositphotos-115154806-stock-photo-little-kids-playing-with-toy.jpg")` }}>
            <div className="hero-overlay mix-blend-multiply bg-indigo-800 bg-opacity-80"></div>
            <div className="hero-content flex-col md:flex-col lg:flex-row text-neutral-content items-start lg:mx-24">
                <div className='px-5' data-aos="zoom-out-right">
                    <p className="mb-2 md:mb-2 lg:mb-5 sm:text-sm">TESTIMONIALS</p>
                    <h1 className="mb-4 md:mb-2 lg:mb-5 text-lg md:text-2xl lg:text-3xl font-bold">What Our Clients Say About Us</h1>
                    <p className='mb-3'>We appreciate your kind and honest feedback and invite you to our amazing store.</p>
                    <button className='btn bg-[#12AEE0] rounded-full'>About Us</button>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row w-full md-[80%] lg:w-[60%] gap-5">
                    <div className="card w-full bg-base-100 opacity-70 shadow-xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <div className="card-body">
                            <p className='text-[#3D416A] opacity-75 text-start mb-2'>"What a great store for the entire family! My kids love this place because of the toys!"</p>
                            <div>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.ibb.co/HhYTGvh/testi-1-copyright-120x120.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-black opacity-70">Hart Hagerty</div>
                                        <div className="text-sm text-[#20233f] opacity-50">CEO, Business co.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card w-full bg-base-100 opacity-75 shadow-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="card-body">
                            <p className='text-[#3D416A] opacity-75 text-start mb-2'>"What a great store for the entire family! My kids love this place because of the toys!"</p>
                            <div>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.ibb.co/HhYTGvh/testi-1-copyright-120x120.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-black opacity-70">Hart Hagerty</div>
                                        <div className="text-sm text-[#3D416A] opacity-50">CEO, Business co.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;