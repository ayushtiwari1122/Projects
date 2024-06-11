import React from 'react'
import i1 from './s.png'
import i2 from './sa.png'
import i3 from './o.png'
import i4 from './l.png'
import i5 from './so.png'
import i from './p.png'



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default () => {
  return (
    <>
    <div className='opp p-3 py-10'>
    <Swiper
      spaceBetween={50}
      
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <span ><img src={i1} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i2} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i3} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i4} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i5} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i1} className=''alt="" /></span>
        </SwiperSlide>
        <SwiperSlide>
        <span ><img src={i1} className=''alt="" /></span>
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
};

