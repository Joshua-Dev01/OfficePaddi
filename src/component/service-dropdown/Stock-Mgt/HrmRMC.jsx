import React from "react";
import recruit from "/service-page/service-dropdown/stockmgt/inventoryImg.svg";
import track from "/service-page/service-dropdown/stockmgt/trackingImg.svg";
import opt from "/service-page/service-dropdown/stockmgt/optimizationImg.svg";
import { NavLink } from "react-router-dom";
export const HrmRMC = () => {
  return (
    <>
      {/* ***********************RECRUIT************************* */}
      <div className="mt-32 lap:text-center">
        <div className="flex items-center justify-center mx-20 gap-16 ms:flex-wrap sr:mx-0">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Inventory
            </h1>
            <p className="sr:w-[100%]">
              Maintain accurate and up-to-date records of your stock. Our
              inventory tools help you monitor stock levels, manage product
              details, and automate reordering to ensure you never run out of
              essential items
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={recruit} alt="" className="w-[40%] ms:w-[100%] " />
        </div>

        {/* ***********************MANAGE************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap-reverse sr:mx-0">
          <img src={track} alt="" className="w-[40%] ms:w-[100%] " />
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Tracking
            </h1>
            <p className="sr:w-[100%]">
              Keep a close eye on your stock movements with our advanced
              tracking features. From receiving to shipping, track every step of
              your inventory’s journey to improve accountability and reduce
              errors.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
        </div>
        {/* ***********************comply************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap sr:mx-0">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Comply
            </h1>
            <p className="sr:w-[100%]">
              Maximize efficiency with our inventory optimization tools. Analyze
              stock data to forecast demand, reduce excess inventory, and
              streamline your supply chain for better performance and
              profitability.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={opt} alt="" className="w-[40%] ms:w-[100%] " />
        </div>
      </div>
    </>
  );
};
