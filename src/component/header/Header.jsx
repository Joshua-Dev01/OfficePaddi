import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderButtons } from "../HeaderButton/HeaderButtons";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Zoom } from "react-reveal";
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);
  const handleMouseEnter = () => setDropdown(true);
  const handleMouseLeave = () => setDropdown(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className="fixed w-[100%] flex items-center justify-between bg-white shadow-lg px-10 pb-5 z-20 ">
        <nav className="flex gap-16">
          <NavLink exact to="/" className="w-32 mt-5" onClick={scrollToTop}>
            <img src="logo2.png" alt="Logo" />
          </NavLink>
          <ul className="flex gap-10 mt-5 lap:hidden">
            <li>
              <NavLink exact to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                className="whitespace-nowrap"
                onClick={scrollToTop}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                className="whitespace-nowrap"
                onClick={scrollToTop}
              >
                Contact us
              </NavLink>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <NavLink
                exact
                to="/service"
                className="whitespace-nowrap flex"
                onClick={scrollToTop}
              >
                Our Services
                <FaAngleDown className="mt-1" />
              </NavLink>
              {dropdown && (
                <ul className="absolute top-14 left-0 bg-white shadow-lg py-12 px-5 text-black w-full">
                  <div className="mx-5 grid grid-cols-3 items-center justify-center gap-5">
                    <li className="hover:bg-gray-200 p-2">
                      <NavLink
                        exact
                        to="/hrmservices"
                        className="text-green-600 font-semibold flex gap-2 whitespace-nowrap"
                        onClick={scrollToTop}
                      >
                        <img src="hrmIcon.svg" alt="" /> HRM
                      </NavLink>
                      <p>Recruit and manage your workforce efficiently</p>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <NavLink
                        exact
                        to="/stockmgt"
                        className="text-green-600 font-semibold flex gap-2 whitespace-nowrap"
                        onClick={scrollToTop}
                      >
                        <img src="stock.svg" alt="" />
                        Stock Management
                        <img src="stockHeader.svg" alt="" />
                      </NavLink>
                      <p>
                        Office Paddy's integrated HRM and CRM tools simplify.
                      </p>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <NavLink
                        exact
                        to="/pos"
                        className="text-green-600 font-semibold flex gap-2 whitespace-nowrap"
                        onClick={scrollToTop}
                      >
                        <img src="posIcon.svg" alt="" />
                        Pos Services
                      </NavLink>
                      <p>
                        Office Paddy's integrated HRM and CRM tools simplify.
                      </p>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <NavLink
                        exact
                        to="/projectMgt"
                        className="text-green-600 font-semibold flex gap-2 whitespace-nowrap"
                        onClick={scrollToTop}
                      >
                        <img src="projMgtICON.svg" alt="" />
                        Project Management
                      </NavLink>
                      <p>
                        Office Paddy's integrated HRM and CRM tools simplify.
                      </p>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <NavLink
                        exact
                        to="/crm"
                        className="text-green-600 font-semibold flex gap-2 whitespace-nowrap"
                        onClick={scrollToTop}
                      >
                        <img src="crmIcon.svg" alt="" />
                        Crm
                      </NavLink>
                      <p>
                        Office Paddy's integrated HRM and CRM tools simplify.
                      </p>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <NavLink
                        exact
                        to="/accounting"
                        className="text-green-600 font-semibold flex gap-2 whitespace-nowrap"
                        onClick={scrollToTop}
                      >
                        <img src="accounting.svg" alt="" />
                        Accounting
                      </NavLink>
                      <p>
                        Office Paddy's integrated HRM and CRM tools simplify.
                      </p>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li>
              <NavLink exact to="/support" onClick={scrollToTop}>
                Support
              </NavLink>
            </li>
          </ul>
        </nav>
        <HeaderButtons />
        <p
          className="cursor-pointer hidden lap:block transition ease-in-out duration-300"
          onClick={handleClick}
        >
          {!nav ? (
            <IoIosMenu className="text-5xl w-10 mt-5" />
          ) : (
            <IoClose className="text-5xl w-10 mt-5" />
          )}
        </p>
      </header>
      <Zoom>
        {nav && (
          <ul className="hidden lap:block fixed top-20 bg-[#181F38] p-10 w-full h-full text-white shadow-lg z-20 leading-[4rem]">
            <li>
              <NavLink
                exact
                to="/"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                About us
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                exact
                
                className="whitespace-nowrap flex gap-2 "
                onClick={() => {          
                }}
              >
                Our Services <FaAngleDown className="mt-6" />
              </NavLink>
              <Zoom>
                <ul className="absolute top-16 bg-white text-black w-full px-5 py-2 hidden group-hover:block transition ease-in-out duration-100 leading-10">
                  <li>
                    <NavLink
                      exact
                      to="/hrmservices"
                      onClick={() => {
                        closeMenu();
                        scrollToTop();
                      }}
                    >
                      HRM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/stockmgt"
                      onClick={() => {
                        closeMenu();
                        scrollToTop();
                      }}
                    >
                      Stock Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/pos"
                      onClick={() => {
                        closeMenu();
                        scrollToTop();
                      }}
                    >
                      Pos Services
                    </NavLink>
                  </li>

                  <li className="hover">
                    <NavLink
                      exact
                      to="/projectMgt"
                      onClick={() => {
                        closeMenu();
                        scrollToTop();
                      }}
                    >
                      Project Management
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      exact
                      to="/crm"
                      onClick={() => {
                        closeMenu();
                        scrollToTop();
                      }}
                    >
                      Crm
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      exact
                      to="/accounting"
                      onClick={() => {
                        closeMenu();
                        scrollToTop();
                      }}
                    >
                      Accounting
                    </NavLink>
                  </li>
                </ul>
              </Zoom>
            </li>

            <li>
              <NavLink
                exact
                to="/contact"
                className="whitespace-nowrap"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Contact us
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/support"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Support
              </NavLink>
            </li>
          </ul>
        )}
      </Zoom>
    </>
  );
};
