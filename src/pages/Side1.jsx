import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import img12 from "./icon-phone.png"

export default () => {
  return (
    < >
    <div className='md:hidden ml-3 mr-3 h-3 mt-3  '>
    <Swiper
    className='bg-gray-50   '
      spaceBetween={40}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='bold1 mb-3 bg-white  rounded-lg '
      ><div className='flex py-1  '>
        <img src={img12} className='w-[70px] 'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg   '
      ><div className='flex p-1 rounded-lg   '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg   '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold1 mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
    </>
  );
};