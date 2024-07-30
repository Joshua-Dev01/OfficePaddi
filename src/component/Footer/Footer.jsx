import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center gap-28 border-t pt-10 bs:flex-wrap bs:justify-start bs:ml-10 mx-12 mv:mx-4 ">
        <div className="-mt-36 bs:mt-10 ">
          <NavLink exact to="/" className="w-28 ">
            <img src="logo2.png" alt="" className="w-36" />
          </NavLink>
          <p className="my-10 mv:w-[100%]">
            At Office Padi, we believe in simplifying business management for
            business owners. That's why we offer comprehensive services
            seamlessly integrated in one place, giving you control over your
            business.
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
              <NavLink exact to="/" className="whitespace-nowrap">
                About us
              </NavLink>
            </p>
            <p>
              <NavLink exact to="/contact" className="whitespace-nowrap">
                Contact us
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service" className="whitespace-normal">
                Our Services
              </NavLink>
            </p>
          </div>

          <div className="leading-10 xsm:my-16">
            <h1 className="text-[20px] mb-5">Help</h1>
            <p>
              <NavLink exact to="/" className="whitespace-nowrap">
                Customer Support
              </NavLink>
            </p>
            <p>
              <NavLink exact to="/contact" className="whitespace-nowrap">
                Subscription support
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service" className="whitespace-nowrap">
                Terms & Conditions
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service" className="whitespace-nowrap">
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
              <NavLink exact to="/service" className="whitespace-nowrap">
                Project MGT{" "}
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink exact to="/service" className="whitespace-nowrap">
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
