import React from 'react';
import { Navbar } from './elements/navbar/Navbar';
import { Hero } from './sections';

const Home: React.FC = () => (
	<>
		<Navbar />
		<Hero />
	</>
);

export default Home;