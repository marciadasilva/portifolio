import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Spinner from './common/Spinner';

// Loading component
const Loading = () => (
	<div className='full-centralize full-screen'>
		<Spinner />
	</div>
);

// Components
const Home = Loadable({
	loader  : () => import('./components/home/Home'),
	loading : () => <Loading />
});

const Works = Loadable({
	loader  : () => import('./components/works/Works'),
	loading : () => <Loading />
});

const Playground = Loadable({
	loader  : () => import('./components/playground/Playground'),
	loading : () => <Loading />
});

const Contact = Loadable({
	loader  : () => import('./components/contact/Contact'),
	loading : () => <Loading />
});

const About = Loadable({
	loader  : () => import('./components/about/About'),
	loading : () => <Loading />
});

const App = () => (
	<Router basename='/portifolio'>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/recent-works' component={Works} />
			<Route exact path='/playground' component={Playground} />
			<Route exact path='/about' component={About} />
			<Route exact path='/contact' component={Contact} />
		</Switch>
	</Router>
);

export default App;
