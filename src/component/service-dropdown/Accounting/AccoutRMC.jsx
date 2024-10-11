import React from "react";
import Bookkeeping from "/service-page/service-dropdown/Accounting/bookKeepingImg.svg";
import reporting from "/service-page/service-dropdown/Accounting/reportingImg.svg";
import finance from "/service-page/service-dropdown/Accounting/financeImg.svg";
import { NavLink } from "react-router-dom";
export const AccoutRMC = () => {
  return (
    <>
      {/* ***********************Bookkeeping************************* */}
      <div className="mt-32 lap:text-center">
        <div className="flex items-center justify-center mx-20 gap-16 ms:flex-wrap sr:mx-10 l">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap  text-green">
              Bookkeeping
            </h1>
            <p className="sr:w-[100%]">
              Track income, expenses, and categorize transactions in real-time.
              Our intuitive interface makes it easy to stay organized, reduce
              errors, and ensure compliance with accounting standards.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={Bookkeeping} alt="" className="w-[40%] ms:w-[100%] " />
        </div>

        {/* ***********************Reporting************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap-reverse sr:mx-10">
          <img src={reporting} alt="" className="w-[40%] ms:w-[100%] " />
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap  text-green">
              Reporting
            </h1>
            <p className="sr:w-[100%]">
              With our reporting features, you can gain deep insights into your
              financial performance, generate detailed financial statements,
              including balance sheets, income statements, and cash flow
              reports.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
        </div>
        {/* ***********************Finance************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap sr:mx-10">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap text-green">
              Finance
            </h1>
            <p className="sr:w-[100%]">
              Managing every aspect of your business finances is easier here.
              Oversee cash flow, plan and track budgets, and optimize financial
              strategies to ensure your company’s financial stability and
              growth.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={finance} alt="" className="w-[40%] ms:w-[100%] " />
        </div>
      </div>
    </>
  );
};
