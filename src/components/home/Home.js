import React from 'react';

import Layout from '../layout/Layout';
import Card from './Card';

import './Home.css';

const Home = () => (
	<Layout>
		<section className='home'>
			<div className='home__content'>
				<div className='home__text'>
					<div>
						<span className='animated'>Hi!</span>{' '}
						<span className='animated'>I'm</span>{' '}
						<span className='change-color'>Marcia</span>
					</div>
					<div>
						<span className='animated'>Full</span>{' '}
						<span className='animated'> stack</span>{' '}
						<span className='animated'> web</span>{' '}
						<span className='animated'> development</span>
					</div>
					<div>
						<span className='animated'>Currently</span>{' '}
						<span className='animated'>working</span>{' '}
					</div>
					<div>
						<span className='animated'>as</span>{' '}
						<span className='animated'>a</span>{' '}
						<span className='animated'>Freelancer</span>{' '}
					</div>
				</div>
				<div className='home__profile'>
					<Card />
				</div>
			</div>
		</section>
	</Layout>
);

export default Home;
