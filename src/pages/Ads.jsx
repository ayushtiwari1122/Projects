import React from 'react'

function Ads() {
  return (
    <>
    <section className='md:mx-3 '>
        <div className='ads m-2 md:rounded-lg'>
            <p className='p-20   '>
            <span className='text-red-600   '>Exclusive Headphones</span>
           <b><h2 className='text-6xl   '>Discounts 50% On All Headphone</h2></b> 
           <button className='p-2 rounded-md text-white text-xl bg-blue-600 mt-6'>Shop Now</button>
            </p>
            </div>


            <section className='md:flex justify-between'>
            <div className='ads1 m-2  md:rounded-xl'>
            <p className='m-auto p-20 md:p-3 text-center '>
                    <button className='text-center p-1 text-white  bg-red-600 rounded'>New product</button>
                  <b> <h1 className='text-5xl md:text-2xl'>Release Date and price </h1></b> 
                  <p className='mt-1 text-xl'>Todays super offer</p>

                </p>
            </div>
            <div className='ads11 m-2  md:rounded-xl '>
            <p className='m-auto p-20  md:p-3 md:text-center '>
                    <button className='text-center p-1 text-white  bg-red-600 rounded'>New product</button>
                  <b> <h1 className='text-5xl md:text-2xl'>Release Date and price </h1></b> 
                  <p className='mt-1 text-xl'>Todays super offer</p>

                </p>
            </div>
            <div className='ads12 m-2  md:rounded-xl'>
            <p className='m-auto p-20  md:p-3  md:text-center'>
                    <button className='text-center p-1 text-white  bg-red-600 rounded'>New product</button>
                  <b> <h1 className='text-5xl md:text-2xl'>Release Date and price </h1></b> 
                  <p className='mt-1 text-xl'>Todays super offer</p>

                </p>
            </div>
            
            
            <div className='ads13 m-2  md:rounded-xl'>
                <p className='m-auto p-20  md:p-3  md:text-center '>
                    <button className='text-center p-1 text-white  bg-red-600 rounded'>New product</button>
                  <b> <h1 className='text-5xl md:text-2xl text-gray-950'>Release Date and price </h1></b> 
                  <p className='mt-1 text-xl '>Todays super offer</p>

                </p>
            </div>

            </section>
    </section>
    
    </>
  )
}

export default Ads