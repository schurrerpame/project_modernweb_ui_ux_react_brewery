import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const imagesGalery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04,images.gallery05,images.gallery06]
const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {

      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }

  }
  return (
    <div className="app__gallery flex__center section__padding">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo gallery</h1>
        <p className="p__onpensans" style={{ color: '#aaa', margin: '2rem 0' }}>Experience our IPA Craft Beer Factory through captivating images. Discover the artistry, passion, and exceptional range of handcrafted brews. Join us on this visual journey celebrating IPA craft beer. </p>
        <button type="button" className="custom__button">Visit Us</button>
      </div>
      
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagesGalery.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`} >
              <img src={image} alt={index} />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />

        </div>
      </div>
    </div>
  );
}

export default Gallery;
