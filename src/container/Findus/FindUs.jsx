import React from 'react';
import { Link } from 'react-router-dom';
import {SubHeading} from '../../components';
import {images} from '../../constants';
const FindUs = () => {
  return (
    <div className='app__bg section__padding flex__center app__wrapper' id='contact'>

      <div className="app__wrapper_info">
        <SubHeading title='Contact'/>
        
        <p className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</p>
        <p className="p__opensans">Lane Ends Bungaloe,Whatcroft HallLine, Rudheath, CW9 7SG</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 02:00 am</p>
        <Link to='/auth'><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button></Link>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="" />
      </div>
      
    </div>
  )
}

export default FindUs
