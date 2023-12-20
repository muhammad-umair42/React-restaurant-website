import React, { useRef, useState } from 'react';
import './Intro.css';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';

 const Intro = () => {
  const [playVid,setPlayVid] = useState(true);
  const vidRef = useRef();

  return (
    <div className='video'>
      <video
      ref={vidRef}
      src={meal}
      type='video/mp4'
      loop
      controls={false}
      autoPlay={true}
      muted
      />

      <div className="video__overlay flex__center"
      onClick={()=>
        {
          setPlayVid(!playVid);
          if(playVid){
            vidRef.current.pause();
          }else{
            vidRef.current.play();
          }
        }
        } >
        <div className="video__overlay-button flex__center"
        >
          {
          playVid ? <BsPauseFill color='#fff' fontSize={50}/> : <BsFillPlayFill color='#fff' fontSize={50}/>
          }
        </div>
        
      </div>
     
    </div>
  )
}

export default Intro
