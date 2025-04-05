import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe'
import Footer from '../Footer';

function ProductsPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <RightImage />
        <LeftImage />
        <Universe />
        <Footer />
        </>
        

      );
}

export default ProductsPage;