import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
const Recidencies = () => {
  return (
   <section className="r-wrapper">
    <div className="paddings r-container">
         <div className="r-head ">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residences</span>
         </div>
         <Swiper {...sliderSettings}>
           <SliderButtons />
             {
               data.map((card, i)=>(
                <SwiperSlide key={i}>
                  <div className="r-card">
                    <img src={card.image} alt="home" />
                    <span className='secondaryText r-price'>
                        <span style={{color:"orange"}}>$</span>
                        <span>{card.price}</span>
                    </span>
                    <span className='primaryText'>{card.name}</span>
                    <span className='secondarytext'>{card.detail}</span>
                  </div>

                </SwiperSlide>
               ))
             }
          
         </Swiper>
    </div>
   </section>
  )
}

export default Recidencies

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}