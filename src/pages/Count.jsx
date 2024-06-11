import React, { useEffect, useState } from 'react'


function Count({sec,minutes,hour}) {
 
  return (
    <>
    <div className='flex justify-center text-center   mt-9 '>
          <div className='mr-2'>
            <input type="text" name="" id="" readOnly value={hour}   className='w-[50px] rounded outline-none text-2xl text-center h-14 m-2 block bg-blue-500 text-white ' />
            <label htmlFor="" className='text-gray-600 '>Hour</label>
            </div>        
          <div className=''>
            <input type="text" name="" id="" readonly="readonly" value={minutes}   className='w-[50px] outline-none text-2xl text-center rounded h-14 block m-2 bg-blue-500 text-white'  />
            <label htmlFor="" className='text-gray-600'>Minutes</label>
          </div>
          <div className='ml-2'>
            <input type="text" name="" id="" readOnly value={sec}  className='w-[50px] outline-none text-center text-2xl h-14 rounded block m-2 bg-blue-500 text-white' />
            <label htmlFor="" className='text-gray-600'>Second</label>
          </div>
           </div>
          
    </>
   
  )
}

export default Count