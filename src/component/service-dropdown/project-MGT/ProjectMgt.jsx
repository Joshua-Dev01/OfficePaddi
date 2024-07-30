import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "/service-page/service-dropdown/projectMgt/projectHero.svg";
import Recruitment from "/service-page/service-dropdown/hrmservices/RecruitmentIcon.svg";
import Management from "/service-page/service-dropdown/hrmservices/ManagementIcon.svg";
import Compliance from "/service-page/service-dropdown/hrmservices/Compliance.svg";
import { Footer } from "../../Footer/Footer";
import ProjectComp from "./ProjectComp";
import { ProjectRMC } from "./ProjectRMC";
import ChoosePlan from "./ChoosePlan";

export const ProjectMGT = () => {
  return (
    <>
      <div className="absolute top-[10rem] ">
        {/* ***********************Hero section************************* */}

        <div className="flex items-center justify-center mx-10 lap:flex-wrap lap:gap-10 ">
          <div>
            <p className="text-navy text-3xl font-bold leading-10 mb-5 mv:text-center">
              Project <br />
              Management
            </p>
            <p className="w-[80%] mv:w-[100%] mv:text-center">
              Our HRM solutions provide you with the tools to build a customized
              solution that fits your unique HR needs and manage your workforce
              efficiently.
            </p>
            <div className="flex gap-5 mt-6  ">
              <NavLink
                exact
                to="/"
                className="bg-green shadow-lg py-4 px-5 rounded-[10px] whitespace-nowrap "
              >
                Buy & Manage
              </NavLink>
              <NavLink
                exact
                to="/"
                className="bg-navy shadow-lg py-4 px-5 rounded-[10px] whitespace-nowrap text-white "
              >
                Free 30 Days trial
              </NavLink>
            </div>
          </div>
          <div>
            <img src={Hero} alt="" className="w-[50rem]" />
          </div>
        </div>

        {/* ***********************End Hero section************************* */}

        <div className="flex flex-wrap items-center justify-around  mt-36 bg-navy text-white py-10 leading-10 ">
          <div className="flex flex-col items-center">
            <img src={Recruitment} alt="" />
            <p className="">Planning</p>
          </div>
          <div>
            <img src={Management} alt="" />
            <p>Tracking</p>
          </div>
          <div>
            <img src={Compliance} alt="" />
            <p>Collaboration</p>
          </div>
        </div>

        {/* ***********************HRM Features************************* */}
        <ProjectComp />
        <ProjectRMC />
        {/* ***********************CHOOSE PLAN************************* */}
        <ChoosePlan />
        <div className="greenBG text-center relative top-[5rem] text-white py-10 mb-32 mv:bg-center ">
          <h1 className="text-[30px]">See What Wokrr Can do</h1>
          <p className="text-[#0FD46C] my-5 font-semibold">
            Buy Now and Manage
          </p>

          <span className="flex gap-5 items-center justify-center mv:mx-4">
            <p className="bg-[#0D333E] py-2 px-5 rounded-[5px] text-white">
              <NavLink exact to="/" className="whitespace-nowrap">
                Buy & Manage
              </NavLink>
            </p>
            <p className="border border-black py-2 px-5 rounded-[5px] text-black">
              <NavLink exact to="/" className="whitespace-nowrap">
                Free 30 Days trial
              </NavLink>
            </p>
          </span>
        </div>
        {/* ***********************FOOTER************************* */}
        <Footer />
      </div>
    </>
  );
};
