import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ContactSection from '../ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactSection></ContactSection>
            <h1>Hello world</h1>
        </div>
    );
};

export default Home;