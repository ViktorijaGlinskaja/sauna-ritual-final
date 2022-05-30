import React from 'react';
import { Footer, Navbar } from 'components';
import { FAQ, Plan, Reviews, Summary } from './sections';

const Checkout: React.FC = () => (
    <>
        <Navbar />
        <Reviews />
        <FAQ />
        <Plan />
        <Summary />
        <Footer />
    </>
);

export default Checkout;