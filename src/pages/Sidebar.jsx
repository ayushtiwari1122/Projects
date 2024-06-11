import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import im from "./watch.png"

import 'swiper/css';
import Side from './Side';
import Side1 from './Side1';

export default () => {
  return (
    <> 
  <Side />
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='  w-full bg-blue-950 text-white text-center relative   h-[80vh]'>
        <p className='pt-2 animate absolute '>
        <h3 className='bg-red-500 p-1 w-[10rem] text-center  m-auto  rounded mb-2'>Weekend Deal</h3>
        <h1 className='text-5xl mx-10 md:text-6xl text-center text-white md:mt-7 mb-2'>All New <br />For a Better You</h1>
        <h5 className='text-2xl'>Better Deal At Home</h5>
        <p>From <b className='text-yellow-500 text-2xl md:text-3xl ml-2 mt-2'>$399.01</b></p>
        <button className='bg-blue-500 p-2 pl-5 pr-5 rounded m-2 md:mt-10'>Shop now</button>
        
        </p>
        <nav className='mt-5 animates absolute'><img src={im} className='w-[60%] md:w-[100%] m-auto' alt="" /></nav>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className=' w-full bg-red-950 text-white text-center relative   h-[80vh]'>
        <p className=' pt-2 animate absolute '>
        <h3 className='bg-red-500 p-1 w-[10rem] text-center  m-auto  rounded mb-2'>Weekend Deal</h3>
        <h1 className='text-5xl mx-10 md:text-6xl text-center text-white md:mt-7 mb-2'>All New <br />For a Better You</h1>
        <h5 className='text-2xl'>Better Deal At Home</h5>
        <p>From <b className='text-yellow-500 text-2xl md:text-3xl ml-2 mt-2'>$399.01</b></p>
        <button className='bg-blue-500 p-2 pl-5 pr-5 rounded m-2 md:mt-10'>Shop now</button>
        
        </p>
        <nav className='mt-5 animates absolute'><img src={im} className='w-[60%] md:w-[100%] m-auto' alt="" /></nav>
        </div></SwiperSlide>
        <SwiperSlide><div className=' w-full bg-yellow-950 text-white text-center relative   h-[80vh]'>
        <p className=' pt-2 animate absolute '>
        <h3 className='bg-red-500 p-1 w-[10rem] text-center  m-auto  rounded mb-2'>Weekend Deal</h3>
        <h1 className='text-5xl mx-10 md:text-6xl text-center text-white md:mt-7 mb-2'>All New <br />For a Better You</h1>
        <h5 className='text-2xl'>Better Deal At Home</h5>
        <p>From <b className='text-yellow-500 text-2xl md:text-3xl ml-2 mt-2'>$399.01</b></p>
        <button className='bg-blue-500 p-2 pl-5 pr-5 rounded m-2 md:mt-10'>Shop now</button>
        
        </p>
        <nav className='mt-5 animates absolute'><img src={im} className='w-[60%] md:w-[100%] m-auto' alt="" /></nav>
        </div></SwiperSlide>  
      
    </Swiper>
  
   <Side1/>
   </>
  );
};