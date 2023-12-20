import React from 'react';
import './SpecialMenu.css';

import {images,data} from '../../constants';
import { SubHeading,MenuItem } from '../../components';
import { Link } from 'react-router-dom';
const SpecialMenu = () => {
  return (
    <div className='specialMenu flex__center section__padding' id='menu'>

      <div className='specialMenu-title'>
        <SubHeading title="Menu That Fits Your Pallate"/>
        <p className='headtext__cormorant'>Today&apos;s Special</p>
      </div>

      <div className="specialMenu-menu">
        <div className="specialMenu-menu__wine flex__center">
          <p className="specialMenu-menu_heading">Wine & Beer</p>
          <div className="specialMenu-menu-items">
            {
              data.wines.map((wine,index) =>(
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
              ))
            }
          </div>
        </div>

        <div className="specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

        <div className="specialMenu-menu__cocktail flex__center">
          <p className="specialMenu-menu_heading">Cocktails</p>
          <div className="specialMenu-menu-items">
            {
              data.cocktails.map((cocktail,index) =>(
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
              ))
            }
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: 15 }}>
<Link to='/auth'><button type="button" className="custom__button">View More</button></Link>
    </div>

    </div>
  )
}

export default SpecialMenu;
