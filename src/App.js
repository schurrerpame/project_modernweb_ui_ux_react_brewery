import React from 'react';

import { AboutUs, Footer, Gallery, Header, Intro, Laurels, TypeBeer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <TypeBeer />
    <Intro />
    <Laurels />
    <Gallery />
    <Footer />
  </div>
);

export default App;
