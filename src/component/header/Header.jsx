import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderButtons } from "../HeaderButton/HeaderButtons";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  let [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  return (
    <>
      <header className="fixed w-[100%] flex items-center justify-between bg-white shadow-lg px-10 pb-5 z-20 ">
        <nav className="flex gap-16">
          {/* *********Nav logo********** */}
          <NavLink exact to="/" className="w-32 mt-5">
            <img src="logo2.png" alt="" />
          </NavLink>

          {/* ************NAV LINKS************* */}

          <ul className="flex gap-10 mt-5 lap:hidden">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/about" className="whitespace-nowrap">
                About us
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/contact" className="whitespace-nowrap">
                Contact us
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/service" className="whitespace-nowrap">
                Our Services
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/support">
                Support
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* **************End of navlinks************* */}

        {/* **************HeaderButtons************* */}
        <HeaderButtons />

        {/* ***************Hamburger icon************* */}
        <p
          className="cursor-pointer  hidden lap:block transition ease-in-out duration-300 "
          onClick={handleClick}
        >
          {!nav ? (
            <IoIosMenu className="text-5xl w-10 mt-5" />
          ) : (
            <IoClose className="text-5xl w-10 mt-5" />
          )}
        </p>
      </header>

      {/****** **********Responsive Header***************/}
      {nav && (
        <ul className="hidden lap:block fixed top-20 bg-[#181F38] p-10 w-full h-full text-white shadow-lg z-20 leading-[4rem]">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="whitespace-nowrap">
              Contact us
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/service" className="whitespace-nowrap">
              Our Services
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/support">
              Support
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/abt">
              abt
            </NavLink>
            </li>
        </ul>
      )}
    </>
  );
};
