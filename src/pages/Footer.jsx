import React from 'react'
import img2 from './logo.png'
import img3 from './payment.png'

function Footer() {
  return (
    <>
    <hr />
    <section className='m-5 md:flex justify-between'><div className='text-xl'>
      <img src={img2} className='w-[100px]' alt="" />
    <p className='mt-3'>Find a location nearest you. see <u className='text-red-400'> Our Stores</u></p>
<h6 className='text-lg'>Support1234@Ecomall.com</h6>

<b className='mt-2'>+08 9229 8228</b>

<ul className='flex gap-4 mt-6'>
  <li><i className='bi-facebook'></i></li>
  <li><i class="bi bi-pinterest"></i></li>
  <li><i className='bi-twitter'></i></li>
  <li><i className='bi-instagram'></i></li>
</ul>
    
    
    
    </div>
    <div>
    < h1 className='text-2xl mt-6'>About us </h1>
    <div className='flex text-lg gap-40 py-4 md:block'>
    <ul className=''>  
      
      <li>About Us</li>
      <li>News & Blog</li>
      <li>Brands</li>
      </ul>
<ul>
<li>Press Center</li>
<li>Advertising</li>
<li>Investors</li>
      </ul>
    </div></div>

    <div>
    < h1 className='text-2xl mt-6'>About us </h1>
    <div className='flex text-lg gap-40 py-4 md:block'>
    <ul className=''>  
      
      <li>About Us</li>
      <li>News & Blog</li>
      <li>Brands</li>
      </ul>
<ul>
<li>Press Center</li>
<li>Advertising</li>
<li>Investors</li>
      </ul>
    </div></div>

    <div>
    < h1 className='text-2xl mt-6'>About us </h1>
    <div className='flex text-lg gap-40 py-4 md:block'>
    <ul className=''>  
      
      <li>About Us</li>
      <li>News & Blog</li>
      <li>Brands</li>
      </ul>
<ul>
<li>Press Center</li>
<li>Advertising</li>
<li>Investors</li>
      </ul>
    </div></div>
    
    
    
    
    
    </section>
    <div  className='md:ml-2 m-5'><h2 className='text-xl mb-2'><b>Treanding Tags:</b></h2>
    <p className=''>
      <button className='good p-1 ml-1  '>Accessories</button>
      <button className='good p-1 ml-1 '>Apple iphone</button>
      <button className='good p-1 ml-1'>Camera & Video</button>
      <button className='good p-1 ml-1 '>Cellphone</button>
      <button className='good p-1 ml-1 mt-1'>Desktop Computers</button>
      <button className='good p-1 ml-1'>Electronic</button>
      <button className='good p-1 ml-1'>Game</button>
<button className='good p-1 ml-1'>Gaming Headsets</button>
<button className='good p-1 ml-1 mt-1'>Headphone</button>
<button className='good p-1 ml-1'>iwatch</button>
<button className='good p-1 ml-1'>Kids' Electronics</button>
<button className='good p-1 ml-1'>Laptop</button>
<button className='good p-1 ml-1'>Mobile & Tablet</button>
<button className='good p-1 ml-1 mt-1'>Panasonic</button>
<button className='good p-1 ml-1'>PC Gaming
</button>
    </p>
    </div>
    <hr  className='mt-7 p-1'/>
    <div className='flex flex-col items-center md:mx-5 md:flex-row md:justify-between'>
  <p className='mb-1'>© Ecomall. All Rights Reserved.</p>
  <img src={img3} className='w-[250px] ' alt="" />
    </div>
    </>
  )
}

export default Footer