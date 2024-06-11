import React from 'react'

export default function Email() {
  return (
    <>
    <section className='bg p-10 m-2 rounded'>
        <div className='bg-white  pb-6 md:flex  md:pl-  rounded-2xl text-center'>
          <b className='text-2xl md:text-4xl md:ml-10 md:mr-10 md:mt-3  '> <p>Sign Up For Newsletter & Get 20% Off</p></b>
         <div> <input type="mail" placeholder='Email here....' className='bo py-[10px] px-[12px]  rounded-lg w-[70%] md:w-[34rem] mt-3'/>
         <button className='bg-black text-white py-[12px] px-4'>Subscribe</button> </div>
        </div>
    </section>
    </>
  )
}
