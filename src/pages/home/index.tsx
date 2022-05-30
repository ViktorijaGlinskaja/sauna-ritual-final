import React from 'react';
import { Navbar } from './elements/navbar/Navbar';
import { About, Brands, ExampleBox, Hero } from './sections';

const Home: React.FC = () => (
	<>
		<Navbar />
		<Hero />
		<About />
		<ExampleBox />
		<Brands />
	</>
);

export default Home;