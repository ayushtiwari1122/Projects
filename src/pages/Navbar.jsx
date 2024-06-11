import React, { useState } from 'react'
import img1 from "./logo.png"

function Navbar() {
  let [menu,setMenu]=useState(true)
  return (
    <>
    <section className='m-5 flex justify-between md:flex-wrap'>
      <div><img src={img1} className='w-[100px] ' alt="" /></div>


<div className='a hidden md:block '>
  <select name="" id="">
    <option value="1">All catagory</option>
  </select>
  <input type="text" placeholder='Search here' />
  <button className='bg-blue-600 p-[10px] rounded-r'>Search</button>
</div>

      <div className=''>

        <ul className='flex md:text-2xl gap-5  md:mr-10'>
        <li className=' flex  '><i class="bi bi-headset md:mr-2 hidden md:block"></i>
        <p className='text-gray-400 text-sm hidden md:block'><h3>Need help </h3><span className='text-blue-600'>+03829203</span></p>
        </li>

          <li className='md:hidden'>
          <i class="  bi bi-search"></i>
          </li>
          <li className='md:flex '>
          <i class="bi bi-person md:mr-2 "></i><p className='text-gray-400 text-sm hidden md:block'><h3>My account </h3><span className='text-black'><a href="">Login</a></span></p>

          </li>
          <li className='md:flex '><i class="bi bi-cart2 md:mr-2 "></i><p className='text-gray-400 text-sm hidden md:block'><h3>My cart</h3><span className='text-black'>$0.00</span></p>
</li>
        <li className='md:hidden'> <button onClick={()=>setMenu(!menu)} className={menu ?'':"hide" } ><i className="bi  bi-list"></i></button></li>
        </ul>

      </div>
    </section>

    <hr />

    <section className='hidden md:block'>
      <b>
      <div className='p-5 flex justify-between '>
       <div className='' >
          <i class="bi bi-list"></i>
          <select name="" className='pr-6 pl-2 outline-none' id="">
        <option value="">
Shop Categories
</option>
        </select></div>

        <div className='de'>
          <ul className='flex gap-10'>
            
        <select name="" id="">  <option value="">Home</option></select>
        <select name="" id="">  <option value="">Iwatchs</option></select>
        <select name="" id="">  <option value="">Laptops</option></select>
        <select name="" id="">  <option value="">Smartphones</option></select>
        <select name="" id="">  <option value="">Camares</option></select>
    
  <li className='ml-80 text-2xl'><i class="bi bi-heart"><sup className='text-white bg-blue-500 rounded-3xl'>1</sup></i></li>
          </ul>

        </div>
        <div className='de'>
          <h2>Today's Deal</h2>
        </div>
      </div></b>

    </section>
    </>
  )
}

export default Navbar