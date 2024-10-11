import React from "react";
import plannig from "/service-page/service-dropdown/projectMgt/planningImg.svg";
import tracking from "/service-page/service-dropdown/projectMgt/trackingImg.svg";
import collab from "/service-page/service-dropdown/projectMgt/collaboration.svg";
import { NavLink } from "react-router-dom";
export const ProjectRMC = () => {
  return (
    <>
      {/* ***********************plannig************************* */}
      <div className="mt-32 lap:text-center">
        <div className="flex items-center justify-center mx-20 gap-16 ms:flex-wrap sr:mx-10">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap  text-green">
              Planning
            </h1>
            <p className="sr:w-[100%]">
              Create comprehensive project plans, allocate resources, and
              establish clear timelines to ensure your team stays on track from
              the outset.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={plannig} alt="" className="w-[40%] ms:w-[100%] " />
        </div>

        {/* ***********************TRACKING************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap-reverse sr:mx-10">
          <img src={tracking} alt="" className="w-[40%] ms:w-[100%] " />
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap  text-green">
              Tracking
            </h1>
            <p className="sr:w-[100%]">
              Monitor every aspect of your projects in real-time with our
              tracking features. Stay informed about progress, adjust timelines
              as needed, and ensure all project elements are moving forward
              smoothly
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
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap sr:mx-10">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap text-green">
              Collaboration
            </h1>
            <p className="sr:w-[100%]">
              Boost teamwork and communication with our collaboration tools.
              Share documents, communicate in real-time, and coordinate tasks
              effortlessly to keep everyone aligned and productive.
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
