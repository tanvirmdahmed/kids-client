import React from 'react';

const PhotoGallery = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-400 text-center">Educational Toy Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/3v6CF0M/9-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/j6ptSJ3/8-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/t2JVpYX/6-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/7xhWT89/5-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/mct1tRJ/4-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/j3trRky/3-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/j3trRky/3-1.jpg" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/C1PcC3M/2-1.png" alt="Shoes" />
                </div>
                <div className="card w-full bg-orange-200 shadow-xl p-3" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <img className='rounded-xl' src="https://i.ibb.co/qMNKYtq/1-1.png" alt="Shoes" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
