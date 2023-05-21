import React, { useContext, useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import MathToy from './MathToy';

const SubCategoryTab = () => {
    const [categoryToys, setCategoryToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Math Toys");
    const [selectedTab, setSelectedTab] = useState(0);

    console.log(activeTab);

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoryToys(data);
            });

        // Update selectedTab when activeTab changes
        if (activeTab === 'Math Toys') {
            setSelectedTab(0);
        }
        else if (activeTab === 'Language Toys') {
            setSelectedTab(1);
        }
        else if (activeTab === 'Science Toys') {
            setSelectedTab(2);
        }
    }, [activeTab]);

    const handleTabChange = (index) => {
        const tabText = ["Math Toys", "Language Toys", "Science Toys"];
        setActiveTab(tabText[index]);
        console.log(tabText[index]);
    };


    return (
        <div className='my-12'>
            <Tabs className='text-center' selectedIndex={selectedTab} onSelect={handleTabChange}>
                <TabList>
                    <Tab>Math Toys</Tab>
                    <Tab>Language Toys</Tab>
                    <Tab>Science Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            categoryToys.map(toy =>
                                <div key={toy._id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <div key={toy._url} className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={toy.photoUrl} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{toy.toyName}</h2>
                                            <p>Price: ${toy.price}</p>
                                            <div className='flex gap-2 items-center'>
                                                <Rating
                                                    className='text-[#c3a455] text-xl'
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                    readonly={true}
                                                />
                                                <span className='mb-1 font-bold text-[#c3a455]'>({toy.rating})</span>
                                            </div>
                                            <div className="card-actions">
                                                <Link to={`/singleToy/${toy._id}`} className="btn bg-gradient-to-r from-[#2563EB] to-[#0949d2] border-none">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            categoryToys.map(toy =>
                                <div key={toy._id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <div key={toy._url} className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={toy.photoUrl} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{toy.toyName}</h2>
                                            <p>Price: ${toy.price}</p>
                                            <div className='flex gap-2 items-center'>
                                                <Rating className='text-[#c3a455] text-xl' placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                    readonly={true}
                                                >
                                                </Rating>
                                                <span className='mb-1 font-bold text-[#c3a455]'>({toy.rating})</span>
                                            </div>
                                            <div className="card-actions">
                                                <Link to={`/singleToy/${toy._id}`} className="btn bg-gradient-to-r from-[#2563EB] to-[#0949d2] border-none">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            categoryToys.map(toy =>
                                <div key={toy._id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <div key={toy._url} className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src={toy.photoUrl} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{toy.toyName}</h2>
                                            <p>Price: ${toy.price}</p>
                                            <div className='flex gap-2 items-center'>
                                                <Rating className='text-[#c3a455] text-xl' placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                    readonly={true}
                                                >
                                                </Rating>
                                                <span className='mb-1 font-bold text-[#c3a455]'>({toy.rating})</span>
                                            </div>
                                            <div className="card-actions">
                                                <Link to={`/singleToy/${toy._id}`} className="btn bg-gradient-to-r from-[#2563EB] to-[#0949d2] border-none">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default SubCategoryTab;
