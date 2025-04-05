import React from 'react';
import Hero from './Hero.jsx';
import Awards from './Awards.jsx';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Education from './Education.jsx';
import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAcc />
        <Footer />
        </>
     );
}

export default HomePage;

