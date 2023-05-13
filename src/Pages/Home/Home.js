import React from 'react';
import Banner from '../Banner/Banner';
import Banners from '../Banners/Banners';
import HomeMenus from '../HomeMenus/HomeMenus';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <HomeMenus></HomeMenus>
        </div>
    );
};

export default Home;