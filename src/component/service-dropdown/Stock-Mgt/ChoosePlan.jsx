import React from "react";
import { NavLink } from "react-router-dom";

const ChoosePlan = () => {
  return (
    <>
    <div className=" py-20">
    <h1 className="text-center text-3xl font-semibold mb-11">Choose a plan that suits you</h1>
      <section className="flex items-center justify-center gap-10 flex-wrap ">
        {/* ************************HRM********************** */}
        <div className="text-center shadow py-7 px-10 bg-white rounded-2xl">
          <h1 className="font-semibold text-2xl">Free Trial</h1>
          <p className="font-bold my-2">__________________________</p>
          <p>Manage your business</p>
          <h1 className="my-5 text-2xl font-semibold"> Free </h1>
          <p className="mb-5">Free 30 days trial</p>

          <button className="bg-[#0D333E] py-3 w-[12rem] text-white rounded-[10px] mb-5  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Start Free Trial
            </NavLink>
          </button>
        </div>
        {/* ************************POS********************** */}
        <div className="text-center shadow py-7 px-10  bg-white rounded-2xl">
          <h1 className="font-semibold text-2xl">Free Version</h1>
          <p className="font-bold my-2">__________________________</p>
          <p>Manage your business</p>
          <h1 className="my-5 text-2xl font-semibold"> Free </h1>
          <p className="mb-5">Free with limited services</p>

          <button className="bg-[#0D333E] py-3 w-[12rem] text-white rounded-[10px] mb-5  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
             Start Free Version
            </NavLink>
          </button>
        </div>
        {/* ************************MGT********************** */}
        <div className="text-center shadow py-7 px-10  bg-white rounded-2xl">
          <h1 className="font-semibold text-2xl">Premium</h1>
          <p className="font-bold my-2">__________________________</p>
          <p>Manage your business</p>
          <h1 className="my-5 text-2xl font-semibold">
            US$5/<span className="text-[15px]">mo</span>
          </h1>
          <p className="mb-5">7% off for 3 months +</p>
          <button className="bg-[#0A8543] py-3 w-[12rem] text-white rounded-[10px] mb-5  whitespace-nowrap text-center">
            {" "}
            <NavLink exact to="/">
              {" "}
              Buy Now
            </NavLink>
          </button>
        </div>
      </section>
      </div>
    </>
  );
};

export default ChoosePlan;
