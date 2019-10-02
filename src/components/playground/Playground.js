import React from 'react';
import Codepen from 'react-codepen-embed';

import Layout from '../layout/Layout';

import './Playground.css';

const Playground = () => (
	<Layout>
		<section className='playground'>
			<h1 className='playground__title'>Playground</h1>
			<h2 className='playground__subtitle'>
				These are some pens that I do to experiment new things. <br />Check out
				all my pens!{' '}
				<span role='img' aria-label='emoji'>
					{' '}
					👀
				</span>
			</h2>
			<div className='pens'>
				<h3 className='pen-title'>Flower grid css</h3>
				<div className='pen'>
					<Codepen hash='NBQjYy' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Rotating words</h3>
				<div className='pen'>
					<Codepen hash='rrjBow' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Playing with hue-rotating</h3>
				<div className='pen'>
					<Codepen hash='WKGNEM' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>CSS curtain reveal content</h3>
				<div className='pen'>
					<Codepen hash='KxGprP' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Hover image</h3>
				<div className='pen'>
					<Codepen hash='RYdBqL' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Form show password</h3>
				<div className='pen'>
					<Codepen hash='jpjwvb' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Profile card</h3>
				<div className='pen'>
					<Codepen hash='pZJejw' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Material input</h3>
				<div className='pen'>
					<Codepen hash='QBqBpV' user='marciadasilva' height={500} />
				</div>
			</div>
			<div className='pens'>
				<h3 className='pen-title'>Percentage Calculator</h3>
				<div className='pen'>
					<Codepen hash='qpxqBo' user='marciadasilva' height={500} />
				</div>
			</div>
		</section>
	</Layout>
);

export default Playground;
