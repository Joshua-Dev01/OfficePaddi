import React from "react";
import sales from "/service-page/service-dropdown/stockmgt/sales.svg";
import Inventory from "/service-page/service-dropdown/stockmgt/roundInventory.svg";
import production from "/service-page/service-dropdown/stockmgt/product.svg";
import report from "/service-page/service-dropdown/stockmgt/report.svg";
const HrmComp = () => {
  return (
    <>
      <div className=" items-center justify-center mt-20 text-center py-10">
        <h1 className="text-center font-semibold text-2xl mb-10 sr:px-7">
          Our Stock Management Features include:
        </h1>
        <div className="grid grid-cols-1 gap-10 mx-4 md:grid-cols-2 lg:grid-cols-4 px-10">

          <div className="flex flex-col items-center my-10 shadow py-10 px-5 rounded-3xl">
            <img src={sales} alt="" className="mb-3 w-20" />
            <p className="font-bold text-[20px] mb-3">Sales</p>
            <p className="w-[100%]">
              Track orders, manage customer relationships, and optimize your
              sales strategy to boost your business growth
            </p>
          </div>
          <div className="flex flex-col items-center my-10 shadow py-10 px-5 rounded-3xl">
            <img src={Inventory} alt="" className="mb-3 w-20" />
            <p className="font-bold text-[20px] mb-3">Inventory</p>
            <p className="w-[100%]">
              Monitor stock levels, track movements, and automate reordering to
              ensure you always have the right products available.
            </p>
          </div>
          <div className="flex flex-col items-center my-10 shadow py-10 px-5 rounded-3xl">
            <img src={production} alt="" className="mb-3 w-20" />
            <p className="font-bold text-[20px] mb-3">Production</p>
            <p className="w-[100%]">
              Plan and monitor production schedules, track materials, and ensure
              timely delivery of your products.
            </p>
          </div>
          <div className="flex flex-col items-center my-10 shadow py-10 px-5 rounded-3xl">
            <img src={report} alt="" className="mb-3 w-20" />
            <p className="font-bold text-[20px] mb-3">Reports</p>
            <p className="w-[100%]">
              Generate detailed reports on sales, inventory, and production to
              make informed decisions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrmComp;
