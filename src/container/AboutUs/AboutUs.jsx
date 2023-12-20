import React from 'react';
import './AboutUs.css';

import {images} from '../../constants';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='about-us flex__center app__bg section__padding' id='about'>

      <div className="about-us__overlay flex__center">
        <img src={images.G} alt="G"/>
      </div>

      <div className="about-us__content flex__center">

        <div className="about-us__content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img reverse__image' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
         <Link to='/auth'> <button type='button' className='custom__button'>Know More</button></Link>
        </div>

        <div className="about-us__knife">
          <img src={images.knife} alt='knife'/>
        </div>
      
        <div className="about-us__content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img ' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <Link to='/auth'> <button type='button' className='custom__button'>Know More</button></Link>

        </div>
        
      </div>


    </div>
  )
}

export default AboutUs
