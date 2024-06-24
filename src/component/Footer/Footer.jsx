import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center m gap-28 border-t-2 pt-10 bs:flex-wrap bs:justify-start bs:ml-10 mx-12 mv:mx-4 mv:text-[20px]">
        <div className="-mt-36 bs:mt-10 ">
          <NavLink exact to="/" className="w-28 ">
            <img src="logo1.png" alt="" className="w-36" />
          </NavLink>
          <p className="mb-10 mv:w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales involutpat ullamcorper amet adipiscing fermentum.
          </p>
          {/* **********SOCIAL MEDIA ICON************* */}
          <div className="flex gap-6">
            <FaTwitter /> <FaFacebook /> <FaInstagram /> <FaGithub />
          </div>
        </div>

        <section className="flex gap-20 bs:items-center justify-around bs:gap-30 xs:grid xs:grid-cols-2 xsm:block  ">
          <div className="leading-10">
            <h1 className="text-[20px] mb-5">Company</h1>
            <p>
              <NavLink exact to="/">
                About us
              </NavLink>
            </p>
            <p>
              <NavLink exact to="/contact">
                Contact us
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                Our Services
              </NavLink>
            </p>
          </div>

          <div className="leading-10 xsm:my-16">
            <h1 className="text-[20px] mb-5">Help</h1>
            <p>
              <NavLink exact to="/">
                Customer Support
              </NavLink>
            </p>
            <p>
              <NavLink exact to="/contact">
                Subscription support
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                Terms & Conditions
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                Privacy Policy
              </NavLink>
            </p>
          </div>

          <div className="leading-10">
            <h1 className="text-[20px] mb-5">Resources</h1>
            <p>
              <NavLink exact to="/">
                HRM
              </NavLink>
            </p>
            <p>
              <NavLink exact to="/contact">
                {" "}
                CRM
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                POS
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                Project MGT{" "}
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                {" "}
                Stock MGT{" "}
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service">
                Accounting{" "}
              </NavLink>
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};
