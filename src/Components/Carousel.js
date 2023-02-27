import React from 'react'
import './Carousel.css'
import {images} from '../Helpers/CarouselData'



function Carousel() {
  return (
    <div className='carousel'>
      <div className='carouselInner'>
        <img src={images[1].img}/>
      </div>
    </div>
  )
}

export default Carousel
