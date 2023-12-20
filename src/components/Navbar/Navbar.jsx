import React, { useState } from 'react';
import './Navbar.css';

import images from '../../constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggleNav,setToggleNav] = useState(false);

  return (
    <nav className='navbar'>

      <div className='nav__logo'>
        <img src={images.gericht} alt='logo'/>
      </div>


      <ul className='nav__links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contact Us</a></li>
      </ul>


      <div className='nav__login'>
        <Link to='/auth' className='p__opensans'> Log In / Registeration</Link>
        <div></div>
       <Link to='/auth' className='p__opensans'> Book Table</Link>
        
        
      </div>



      <div className='navbar__smallscreen'>

          <GiHamburgerMenu cursor='pointer' color='#fff' fontSize={27} onClick={()=> setToggleNav(true)} />

            {toggleNav && (

              <div className='nav__sm__overlay flex__center slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={32} className='overlay__close' onClick={()=>setToggleNav(false)}/>

            <ul className='nav__links__sm'>
            <li><a href="#home" onClick={() => setToggleNav(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleNav(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleNav(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleNav(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleNav(false)}>Contact</a></li>

        </ul>
        </div>

            )}

      </div>
      
    </nav>
  )
}

export default Navbar
