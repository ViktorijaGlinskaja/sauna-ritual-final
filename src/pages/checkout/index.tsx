import React from 'react';
import { Footer, Navbar } from 'components';
import { FAQ, Reviews } from './sections';

const Checkout: React.FC = () => (
    <>
        <Navbar />
        <Reviews />
        <FAQ />
    </>
);

export default Checkout;