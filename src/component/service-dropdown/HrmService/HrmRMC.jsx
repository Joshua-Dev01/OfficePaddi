import React from "react";
import recruit from "/service-page/service-dropdown/hrmservices/recruit.svg";
import manage from "/service-page/service-dropdown/hrmservices/manage.svg";
import comply from "/service-page/service-dropdown/hrmservices/comply.svg";
import { NavLink } from "react-router-dom";
export const HrmRMC = () => {
  return (
    <>
      {/* ***********************RECRUIT************************* */}
      <div className="mt-32 lap:text-center">
        <div className="flex items-center justify-center mx-20 gap-16 ms:flex-wrap sr:mx-0">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Recruit
            </h1>
            <p className="sr:w-[100%]  sr:px-9">
              Attract and hire top talent with our streamlined recruitment
              tools. Post job listings, manage applications, and communicate
              with candidates to build a strong and capable team.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={recruit} alt="" className="w-[40%] ms:w-[100%]  sr:px-9 " />
        </div>

        {/* ***********************MANAGE************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap-reverse sr:mx-0">
          <img src={manage} alt="" className="w-[40%] ms:w-[100%] sr:px-9 " />
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Manage
            </h1>
            <p className="sr:w-[100%]  sr:px-9">
              Effectively oversee your workforce with our comprehensive
              management features. You can track employee performance, manage
              schedules, and facilitate continuous development to ensure your
              team thrives
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
            <p className="sr:w-[100%]  sr:px-9">
              Stay compliant with the latest HR regulations and standards. Our
              compliance tools help you manage documentation, track mandatory
              training, and maintain accurate records, safeguarding your
              business from legal risks
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={comply} alt="" className="w-[40%] ms:w-[100%]  sr:px-9" />
        </div>
      </div>
    </>
  );
};
