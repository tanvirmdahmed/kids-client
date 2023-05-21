import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

import Newsletter from '../Newsletter/Newsletter';
import SubCategoryTab from '../SubCategoryTap/SubCategoryTab';
import CustomerFeedback from './CustomerFeedback/CustomerFeedback';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <SubCategoryTab></SubCategoryTab>
            <CustomerFeedback></CustomerFeedback>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;