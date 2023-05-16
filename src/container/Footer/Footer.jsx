import React from 'react';
import { images } from '../../constants';
import { FaYoutubeSquare, FaFacebookSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <div className="app__footer app__bg" id="contact">
    <div className="app__footer-links">
      <div className="app__footer-links_contant">
        <ul><li><span>Contact Us</span></li>
        <li>9 W 53rd St, NY 10019, USA</li>
        <li>+1 212-344-1230 </li>
        <li className="app__footer-links-media"> <a href="/"><FaYoutubeSquare /></a>
      <a href="/"><FaFacebookSquare  /></a></li>
       </ul>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logopame} alt="logo footer" />
      </div>
      <div className="app__footer-links_work">
      <ul><li><span>Working Hours</span></li>
        <li>Monday-Friday:</li>
        <li>08:00 am -12:00 am</li></ul>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="opensans">Demo - Taste the Art of Hop Mastery - by Pame Schurrer</p>
    </div>
  </div>
);

export default Footer;
