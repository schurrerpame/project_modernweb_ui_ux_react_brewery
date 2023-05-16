import React from 'react';
import images from '../../constants/images'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__hedear app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      
      <SubHeading title="Where Artistry Meets Hoppiness" />
      <h1 className="app__header-h1">Tratany  Brewery</h1>
      <p className="p__opensans" style={{ margin: '2rem 0 4rem' }}> Where passion for crafting the perfect IPA meets unparalleled quality. At our craft beer brewery, we take pride in using only the finest hops and ingredients in every batch we brew. </p>
      <a className="custom__button" href="#beers">Explore our full selection of handcrafted IPAs </a>
     
    </div>
    <div className="app__wrapper_img">
      <img src={images.beer} alt="header" />
    
    </div>
    <div className="app__header-hashtag">#Beer #HoppyTrails</div>
  </div>
);

export default Header;
