// Home.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Services from './Services';
import Partners from './Partners';
import WhyChooseUs from './Whychoosus';
import Main from './Main'

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Services />
            <Partners />
            <WhyChooseUs />

        </div>
    );
};

export default Home;
