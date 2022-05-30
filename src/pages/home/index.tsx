import React from 'react';
import { Navbar } from './elements/navbar/Navbar';
import { Footer } from 'components';
import { About, Action, Brands, ExampleBox, Hero, Quiz } from './sections';

const Home: React.FC = () => (
	<>
		<Navbar />
		<Hero />
		<About />
		<ExampleBox />
		<Brands />
		<Quiz />
		<Action />
		<Footer />
	</>
);

export default Home;