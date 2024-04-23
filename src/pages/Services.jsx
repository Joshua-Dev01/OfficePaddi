import React from 'react'
import { NavLink } from 'react-router-dom';

export const Services = () => {
  return (
    <>
         <div className='relative top-[10rem] text-center text-[0D333E]'>
         <p className='font-bold'>SERVICES</p>
         <h1 className='text-2xl'>What We DO </h1>
         <p>Jorem ipsum dolor sit amet, consectetur adipiscing 
         elit. Nunc vulputate <br /> libero et velit interdum, 
         ac aliquet odio mattis</p>
        <h2 className='text-3xl mt-10'>You Have Done The Work. Now Let Us Serve You.</h2>
        </div>

   
      <div className='text-center relative top-[15rem] bg-[#0D333E] text-white py-5'>
      <h1>See What Wokrr Can do</h1>
      <p>Buy Now and Manage</p>

      <span className='flex gap-5 items-center justify-center'>
      <NavLink exact to="/">Buy & Manage</NavLink>
      <NavLink exact to="/">Free 30 Days trial</NavLink>
      </span>
     </div>
    </>
  )
}
