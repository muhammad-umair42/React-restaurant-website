import React from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
const Newsletter = () => {
  return (
    <div className='newsletter'>

      <SubHeading title='Newsletter'/>
      
      <p className="headtext__cormorant" style={{paddingBottom:'2rem'}}>Subscribe To Our Newsletter</p>
      <p className="p__opensans" style={{paddingBottom:'1rem'}}>And never miss latest updates!</p>

      <div className="newsletter__input">
        <input type="text" placeholder='Email Address'/>
        <button type='buttom' className='custom__button'>Subscribe</button>
      </div>

    </div>
  )
}

export default Newsletter
