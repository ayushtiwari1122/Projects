import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import img12 from "./icon-phone.png"

export default () => {
  return (
    < >
    <div className='hidden md:block '>
    <Swiper
    className='bg-gray-50 p-4 m '
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='bold mb-3 bg-white  rounded-lg '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg   '
      ><div className='flex p-1 rounded-lg  '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg   '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bold mb-3 bg-white rounded-lg  '
      ><div className='flex p-1 '>
        <img src={img12} className='w-[70px]'alt="" /><h2 className='mt-auto mb-auto text-lg'><b>Phone</b></h2>
        </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
    </>
  );
};