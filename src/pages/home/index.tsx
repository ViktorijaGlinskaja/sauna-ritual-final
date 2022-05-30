import React from 'react';
import { Navbar } from './elements/navbar/Navbar';
import { About, Hero } from './sections';

const Home: React.FC = () => (
	<>
		<Navbar />
		<Hero />
		<About />
	</>
);

export default Home;