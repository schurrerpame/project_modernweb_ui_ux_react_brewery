import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Laurels.css';

const Awardscard = ({ award: { title, subtitle, imgUrl } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="aword" />
    <div className="app__laurels_awards-card_content">
      <span>{title}</span>
      <p>{subtitle}</p>
    </div>
  </div>
)
const Laurels = () => (
  <div className="app__laurels app__bg flex__center section__padding" id="awards">
    <div className="app__laurels-content">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
       
          {data.awards.map((award) => <Awardscard award={award} key={award.title} />)}
      
      </div>
    </div>
    <div className="app__laurels_img">
      <img src={images.awards} alt="" />
    </div>

  </div>
);

export default Laurels;
