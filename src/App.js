import React, { Component, Suspense, lazy } from 'react';
// import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Spinner from './common/Spinner';

// Loading component
const Loading = () => (
  <div className="full-centralize full-screen">
    <Spinner />
  </div>
);

// Components
const Home = lazy(() => import('./components/home/Home'));
const Works = lazy(() => import('./components/works/Works'));
const Playground = lazy(() => import('./components/playground/Playground'));
const Contact = lazy(() => import('./components/contact/Contact'));
const About = lazy(() => import('./components/about/About'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Router basename="/portifolio">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recent-works" component={Works} />
            <Route exact path="/playground" component={Playground} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default App;
