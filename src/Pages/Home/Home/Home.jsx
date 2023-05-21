import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import SubCategoryTap from '../SubCategoryTap/SubCategoryTap';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <SubCategoryTap></SubCategoryTap>
        </div>
    );
};

export default Home;