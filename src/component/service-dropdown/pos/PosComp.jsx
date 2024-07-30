import React from "react";
import Sales from "/service-page/service-dropdown/pos/saleIcon.svg";
import inventory from "/service-page/service-dropdown/pos/posInventory.svg";
import crm from "/service-page/service-dropdown/pos/crm.svg";
import report from "/service-page/service-dropdown/pos/saleReport.svg";
const PosComp = () => {
  return (
    <div className="text-center bg-slate-200 py-10">
      <p className="uppercase text-2xl font-semibold mb-10">Our pOS Features include:</p>
      <div className="grid grid-cols-3 items-center justify-center leading-7 gap-10 mx-24 xs:grid xs:grid-cols-2 xsm:block mv:mx-4 mv:text-center">
        {/* ****************sales******************* */}
        <div className="flex flex-col items-center">
          <img src={Sales} alt="" className="mb-3  w-16" />
          <p className="font-bold text-[20px] mb-3">Sales</p>
          <p className="w-[100%]">
          Process transactions quickly and efficiently, manage discounts, and ensure a seamless checkout experience for your customers.

          </p>
        </div>
        {/* ****************inventory******************* */}
        <div className="flex flex-col items-center my-10">
          <img src={inventory} alt="" className="mb-3  w-16" />
          <p className="font-bold text-[20px] mb-3">Inventory</p>
          <p className="w-[100%]">
          Track stock levels, manage product variations, and automate reordering to ensure you always have the right products on hand
          </p>
        </div>
        {/* ****************crm******************* */}
        <div className="flex flex-col items-center">
          <img src={crm} alt="" className="mb-3 w-16" />
          <p className="font-bold text-[20px] mb-3">CRM</p>
          <p className="w-[100%]">
          Store customer information, track purchase history, and personalize interactions to boost loyalty and sales.

          </p>
        </div>
           {/* ****************Sales Report******************* */}
           <div className="flex flex-col items-center">
          <img src={report} alt="" className="mb-3 w-16" />
          <p className="font-bold text-[20px] mb-3">Sales Report</p>
          <p className="w-[100%]">
          Gain insights into your sales performance with detailed reports. Analyze sales data, track trends, and generate custom reports to make smarter business decisions 
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosComp;
