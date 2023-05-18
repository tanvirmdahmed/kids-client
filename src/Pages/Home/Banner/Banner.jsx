import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full max-h-[840px] rounded-lg mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/8jqKV9f/slider4-1.jpg" className="w-full" />
                <div className="absolute flex flex-col justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h3 className='text-6xl font-extrabold text-[#FFFFFF] mb-4 ml-20'>WE PLAY AND LEARN:</h3>
                    <h3 className='text-6xl font-extrabold text-[#FFDE5A] ml-20'>WHO SAID EDUCATION WAS BORING?</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4tXn8CR/side1-1.jpg" className="w-full" />
                <div className="absolute flex flex-col justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h3 className='text-6xl font-extrabold text-[#FFFFFF] mb-4 ml-20'>WE PLAY AND LEARN:</h3>
                    <h3 className='text-6xl font-extrabold text-[#FFDE5A] ml-20'>WHO SAID EDUCATION WAS BORING?</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/DfkGnDy/slide2-1.jpg" className="w-full" />
                <div className="absolute flex flex-col justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h3 className='text-6xl font-extrabold text-[#FFFFFF] mb-4 ml-20'>WE PLAY AND LEARN:</h3>
                    <h3 className='text-6xl font-extrabold text-[#FFDE5A] ml-20'>WHO SAID EDUCATION WAS BORING?</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/y4c5GKy/slide3-1.jpg" className="w-full" />
                <div className="absolute flex flex-col justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h3 className='text-6xl font-extrabold text-[#FFFFFF] mb-4 ml-20'>WE PLAY AND LEARN:</h3>
                    <h3 className='text-6xl font-extrabold text-[#FFDE5A] ml-20'>WHO SAID EDUCATION WAS BORING?</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;