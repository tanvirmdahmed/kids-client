import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;