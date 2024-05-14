import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = () => {
  return (
    <>
      <section className="flex items-center justify-center gap-10 bg-[#F3F2EF] flex-wrap py-20">
        {/* ************************HRM********************** */}
        <div className="text-center shadow-xl py-7 px-10 bg-white">
          <h1 className="font-semibold text-2xl">HRM & CRM</h1>
          <p className="font-bold my-2">__________________________</p>
          <p>Manage your business</p>
          <h1 className="my-5 text-2xl font-semibold">
            US$5/<span className="text-[15px]">mo</span>
          </h1>
          <p className="mb-5">7% off for 3 months +</p>
          <p className="bg-[#0A8543] py-3 w-[12rem] text-white font-bold rounded-[10px] mb-10  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </p>
          <p className="bg-[#0D333E] py-3 w-[12rem] text-white font-bold rounded-[10px] mb-5  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </p>
        </div>
        {/* ************************POS********************** */}
        <div className="text-center shadow-xl py-7 px-10  bg-white">
          <h1 className="font-semibold text-2xl">POS & PRJ MGT</h1>
          <p className="font-bold my-2">__________________________</p>
          <p>Manage your business</p>
          <h1 className="my-5 text-2xl font-semibold">
            US$5/<span className="text-[15px]">mo</span>
          </h1>
          <p className="mb-5">7% off for 3 months +</p>
          <p className="bg-[#0A8543] py-3 w-[12rem] text-white font-bold rounded-[10px] mb-10  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </p>
          <p className="bg-[#0D333E] py-3 w-[12rem] text-white font-bold rounded-[10px] mb-5  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </p>
        </div>
        {/* ************************MGT********************** */}
        <div className="text-center shadow-xl py-7 px-10  bg-white">
          <h1 className="font-semibold text-2xl">MGT & ACC</h1>
          <p className="font-bold my-2">__________________________</p>
          <p>Manage your business</p>
          <h1 className="my-5 text-2xl font-semibold">
            US$5/<span className="text-[15px]">mo</span>
          </h1>
          <p className="mb-5">7% off for 3 months +</p>
          <p className="bg-[#0A8543] py-3 w-[12rem] text-white font-bold rounded-[10px] mb-10  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </p>
          <p className="bg-[#0D333E] py-3 w-[12rem] text-white font-bold rounded-[10px] mb-5  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
