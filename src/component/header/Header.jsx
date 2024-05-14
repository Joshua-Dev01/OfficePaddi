import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderButtons } from '../HeaderButton/HeaderButtons'
import { useState } from "react";
import { IoIosMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';



export const Header = () => {

  let [nav,setNav]=useState(false);

  function handleClick(){
     setNav(!nav)
  }; 



  return (
         <>
    <header className='fixed w-[100%] flex items-center justify-between bg-white shadow-lg px-10 pb-5 z-20 '>
    <nav className='flex gap-16'>

      {/* *********Nav logo********** */}
   <NavLink exact to="/" className="w-28"><img src="logo1.png" alt="" /></NavLink>


   {/* ************NAV LINKS************* */}

   <ul className='flex gap-10 mt-8 lap:hidden'>

    <li>
    <NavLink exact to="/">About us</NavLink>
    </li>

    <li>
    <NavLink exact to="/contact" >Contact us</NavLink>
    </li>

    <li>
    <NavLink exact to="/service">Our Services</NavLink>
    </li>

    <li>
    <NavLink exact to="/support">Support</NavLink>
    </li>
   </ul>
    </nav>
    {/* **************End of navlinks************* */}


         {/* **************HeaderButtons************* */}
          <HeaderButtons />



          {/* ***************Hamburger icon************* */}
      <p className="cursor-pointer hidden lap:block" onClick={handleClick}>
        {!nav ? (<IoIosMenu className='text-5xl' />) : ( <IoClose className='text-5xl' />)}</p> 
    </header>


           {/****** **********Responsive Header***************/}
           {nav&&
    <ul className='hidden lap:block fixed top-24 leading-10 bg-[#0D333E] p-10 w-full text-white shadow-lg z-20 xsm:right-0 xsm:w-[50%] xsm:h-[100vh] xsm:leading-[6rem]
    xsm:text-center'>

   <li>
   <NavLink exact to="/">About us</NavLink>
  </li>

    <li>
    <NavLink exact to="/contact" className="whitespace-nowrap">Contact us</NavLink>
    </li>

     <li>
    <NavLink exact to="/service" className="whitespace-nowrap">Our Services</NavLink>
    </li>

    <li>
    <NavLink exact to="/support">Support</NavLink>
   </li>
   </ul>
           }
      </>
  )
}
