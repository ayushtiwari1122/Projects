import React from 'react'

function Ad() {
  return (
 <>
 <div className='md:flex'>
 <div className='be m-4 rounded-2xl  '>
 <div className='text-center  md:text-left      box '>
    <p className='text-red-700 text-md'>USE CODE: SALE35%</p>
<b className='text-4xl mt-4'>Heavy On Features Light On Price</b>
<p className='text-lg mt-4'>AMAZING DISCOUNTS AND DEALS</p>
<button className='p-2 rounded-md text-white text-xl bg-blue-600 mt-6'>Shop Now</button>
</div>
 </div>



 <div className='be1 m-4 rounded-2xl  '>
 <div className='text-center pb-10   md:text-left  box1    '>
    <p className='text-white w-[200px] mx-auto md:mx-0 mb-3 text-center text-md bg-red-600'>NEW PRODUCT</p>
<b className='text-5xl mt-4 mx-auto  text-center'>Red Dead 2 Even Bette</b>
<a href=""><p className='text-sm mt-1  text-blue-800 '>RELEASE DATE & PRICE</p></a>
</div>
 </div>
 </div>
 </>
  )
}

export default Ad