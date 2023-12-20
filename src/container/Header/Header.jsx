import React from 'react';
import './Header.css';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <div className='header app__wrapper section__padding' id='home'>

      <div className='app__wrapper_info'>
        <SubHeading title='Chase The New Flavour'/>
        <h1 className='header-h1'>The Key To Fine Dining</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
       <Link to='/auth'><button type='button' className='custom__button'>Explore Menu</button></Link> 
      </div>
      
      <div className="app__wrapper_img header-img">
      <img src={images.welcome} alt="header_img" />
    </div>
      
    </div>
  )
}

export default Header
