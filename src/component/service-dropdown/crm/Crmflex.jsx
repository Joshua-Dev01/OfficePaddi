import React from "react";
import Engagement from "/service-page/service-dropdown/crm/engagementImg.svg";
import management from "/service-page/service-dropdown/crm/managementImg.svg";
import collab from "/service-page/service-dropdown/crm/collaboration.svg";
import { NavLink } from "react-router-dom";
export const Crmflex = () => {
  return (
    <>
      {/* ***********************plannig************************* */}
      <div className="mt-32 lap:text-center">
        <div className="flex items-center justify-center mx-20 gap-16 ms:flex-wrap sr:mx-0">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap text-green">
              Engagement
            </h1>
            <p className="sr:w-[100%]">
              Personalize interactions, automate follow-ups, and keep your
              customers engaged through targeted communication strategies
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={Engagement} alt="" className="w-[40%] ms:w-[100%] " />
        </div>

        {/* ***********************TRACKING************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap-reverse sr:mx-0">
          <img src={management} alt="" className="w-[40%] ms:w-[100%] " />
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap  text-green">
              Management
            </h1>
            <p className="sr:w-[100%]">
              Manage contacts, track interactions, and analyze customer behavior
              to create meaningful connections and drive sales growth.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
        </div>
        {/* ***********************Collaboration************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap sr:mx-0">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap  text-green">
              Collaboration
            </h1>
            <p className="sr:w-[100%]">
              Share insights, coordinate efforts, and work together seamlessly
              to ensure every customer interaction is handled efficiently and
              effectively.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={collab} alt="" className="w-[40%] ms:w-[100%] " />
        </div>
      </div>
    </>
  );
};
