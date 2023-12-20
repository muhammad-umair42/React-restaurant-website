import React from 'react';
import './Footer.css';
import {images} from '../../constants';
import { Newsletter } from '../../components';


const Footer = () => {
  return (
    <div className='app__bg section__padding flex'>

      <Newsletter/>
      <div className="Footer section__padding ">

        <div className="footer__contactus">
          <p className="p__cormorant" style={{color:'#DCCA87'}}>Contact Us</p>
          <p className="fontsm">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="fontsm">+1 212-344-1230</p>
          <p className="fontsm">+1 212-555-1230</p>
        </div>

        <div className="footer__main">
          <p className="headtext__cormorant">GERICHT</p>
          <p className="fontsm">"The Best Way To Find Yourself is To Lose Yourself in The Service Of Others."</p>   
            <img src={images.spoon} alt="spoon" />
        </div>

        <div className="footer__working">
          <p className="p__cormorant" style={{color:'#DCCA87'}}>Working Hours</p>
          <p className="fontsm">Monday-Friday:</p> 
          <p className="fontsm">08:00 am -12:00 am</p>
          <p className="fontsm">Saturday-Sunday:</p>
          <p className="fontsm">07:00am -11:00 pm</p>
        </div>
        
      </div>
    
    </div>
  )
}

export default Footer
