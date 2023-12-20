import React, { useRef } from 'react';
import './Gallery.css';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const ImageCard = ({imgUrl,number}) =>
{
return(
    <div className="image">
      <img src={imgUrl} alt="img" />
    </div>
)
}



const Gallery = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction)=>{
    const { current } = scrollRef;
  
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const galleryImgs = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

  return (

    <div className='section__padding_custom flex__center gallery'>

      <div className="gallery__info">
      <SubHeading title='Instagram'/>
      <p className="headtext__cormorant">Photo Gallery</p>
      <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volupat mattis ipsum turpis elit elit  scelerisque egestas mu.</p>
  <Link to='/auth'>    <button type='button' className="custom__button btn">View More</button></Link>
      </div>

      <div className="gallery__images">

        <div className="gallery__images-wrapper" ref={scrollRef}>
        {galleryImgs.map((galleryImg,index)=>(
          <ImageCard imgUrl={galleryImg} number={index}/>
        ))}
         </div>

        <div className="arrowleft">
          <BsArrowLeftShort color='#fff' fontSize={30} onClick={()=>handleScroll('left')}/>
        </div>
        
        <div className="arrowright">
          <BsArrowRightShort color='#fff' fontSize={30} onClick={()=>handleScroll('right')}/>
        </div>
      </div>

    </div>


  )
}

export default Gallery
