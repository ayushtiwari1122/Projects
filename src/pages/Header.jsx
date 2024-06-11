import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <section className='bg-black text-white p-2 pl-10 pr-10 hidden md:block' >
      <div className='flex justify-between'>
        <ul className='flex gap-5'>
          <li>English</li>
          <li>USD </li>
          <li>Free Shipping On All Orders Over $100</li>
          
        </ul>
        <ul className='flex gap-5'>
          <li className='text-yellow-500 '> <i class="mr-2 bi-lightning-charge-fill"></i>Flash Sale</li>
          <li>Track Order</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </section>
    <Navbar/>
    
    </>
  )
}

export default Header