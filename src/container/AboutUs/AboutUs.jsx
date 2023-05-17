import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';
import { SubHeading } from '../../components';

const AboutUs = () => (

  <div className="app_aboutus app__bg flex__center section__padding" id="about">
    <div className="app_aboutus-content flex-center">
      <div className="app__aboutus-content_about">
        <SubHeading title="About Us" />
        <p className="p__opensans">At our craft beer factory, we embrace the art of brewing. With unwavering dedication, we create exceptional IPAs and APAs, elevating flavor profiles and satisfying the discerning palates of beer aficionados worldwide. Join us on this flavorful journey.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app_aboutus-hop"><img src={images.hopBig} alt="About us" />
      </div>
      <div className="app__aboutus-content_history"><SubHeading title="Our History" />
        <p className="p__opensans">Founded years ago, our craft beer factory has a rich history rooted in passion and innovation. From humble beginnings, we've honed our skills and refined our IPA and APA recipes to perfection. Our commitment to quality and craft has earned us a reputation for brewing excellence.</p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>

);

export default AboutUs;
