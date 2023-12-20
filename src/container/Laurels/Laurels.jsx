import React from 'react';
import './Laurels.css';
import {images,data} from '../../constants';
import {SubHeading} from '../../components';

const Award =({title,img,subtitle})=>(
  <div className="award__item">
    <div className="award__item-img">
      <img src={img} alt="award" />
    </div>
    <div className="award__item_info">
    <p className="award__item_info-title p__cormorant">{title}</p>
    <p className="p__opensans award__item_info-subtitle">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => {
  return (

    <div className='laurels app__bg' id='awards'>

      <div className="logo__top">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="laurels__main app__wrapper section__padding-custom flex__center">

        <div className=" app__wrapper_info ">
            <SubHeading title='Awards & Recognition'/>
            <h1 className="headtext__cormorant">Our Laurels</h1>
            
            <div className="laurels__awards">
              {data.awards.map((award)=>(
              
                <Award img={award.imgUrl} title={award.title} subtitle={award.subtitle} key={award.title}/>
              ))}
            </div>  
        </div>

        <div className="app__wrapper_img">
          <img src={images.laurels} alt="Laurel " />
        </div>
        
      </div>

    </div>
  )
}

export default Laurels
