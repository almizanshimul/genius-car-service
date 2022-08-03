import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home; 