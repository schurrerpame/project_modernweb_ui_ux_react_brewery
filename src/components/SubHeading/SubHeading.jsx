import React from 'react';
import images from '../../constants/images';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom:'1rem'}}>
    <p className="p__cormorant flex__center">  <img src={images.hop} alt="hop" className="shop_img" style={{ marginRight:'10px'}} /> {title} </p>
  
  
  </div>
);

export default SubHeading;
