import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { beerVideo } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
 const [playVideo, setplayVideo] = useState(false);

 const handleVideo = () =>{
  setplayVideo((prevPlayVideo)=> !prevPlayVideo)

  if(playVideo){
    vidRef.current.pause();
  }else{
    vidRef.current.play();
  }
 }

  return (
    <div className="app__video">
      <video
        src={beerVideo}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
   
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center"
       onClick={handleVideo}>

      {playVideo 
      ?  <BsPauseFill  color="#fff" fontSize={30}/> 
      : <BsFillPlayFill color="#fff" fontSize={30} />}
       </div>
    </div>
    </div>
  )
}

export default Intro;
