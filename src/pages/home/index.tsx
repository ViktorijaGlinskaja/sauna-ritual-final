import React from 'react';
import { Navbar } from './elements/navbar/Navbar';
import { About, ExampleBox, Hero } from './sections';

const Home: React.FC = () => (
	<>
		<Navbar />
		<Hero />
		<About />
		<ExampleBox />
	</>
);

export default Home;