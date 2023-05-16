import  React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaYoutubeSquare, FaFacebookSquare } from 'react-icons/fa';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.logopame} alt="App Logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home </a></li>
      <li className="p__opensans"><a href="#about">About </a></li>
      <li className="p__opensans"><a href="#beers">Our Beers </a></li>
      <li className="p__opensans"><a href="#awards">Awards </a></li>
      <li className="p__opensans"><a href="#contact">Contact </a></li>
    </ul>

    <div className="app__navbar-media">
      <a href="/"><FaYoutubeSquare /></a>
      <a href="/"><FaFacebookSquare /></a>
    </div>
    <div className="app__navbar-smallscreen">
      <MdMenu color="#fff" fontSize={37} onClick={() => setToggleMenu(true)} />
      
      { toggleMenu && ( 

      <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
        <MdClose fontSize={37} className="overlay__close" onClick={() =>setToggleMenu(false)} />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans"><a href="#home" onClick={() =>setToggleMenu(false)}>Home </a></li>
          <li className="p__opensans"><a href="#about" onClick={() =>setToggleMenu(false)}>About </a></li>
          <li className="p__opensans"><a href="#beers" onClick={() =>setToggleMenu(false)}>Our Beers</a></li>
          <li className="p__opensans"><a href="#awards" onClick={() =>setToggleMenu(false)}>Awards </a></li>
          <li className="p__opensans"><a href="#contact" onClick={() =>setToggleMenu(false)}>Contact </a></li>
        </ul>
      </div>
    )}
    </div>
  </nav>

  )
}

export default Navbar;
