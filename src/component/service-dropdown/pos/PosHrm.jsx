import React from 'react'
import sale from "/service-page/service-dropdown/pos/saleImg.svg";
import payment from "/service-page/service-dropdown/pos/paymentImg.svg";
import billing from "/service-page/service-dropdown/pos/billingImg.svg";
import { NavLink } from 'react-router-dom';
export const PosHrm = () => {
  return (
    <>
 {/* ***********************Sale************************* */}
 <div className='mt-32 lap:text-center'>
 <div className="flex items-center justify-center mx-20 gap-16 ms:flex-wrap sr:mx-10">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              sales
            </h1>
            <p className="sr:w-[100%]">
            Manage transactions smoothly, apply discounts effortlessly, and provide a quick and pleasant checkout experience for your customers
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={sale} alt="" className="w-[40%] ms:w-[100%] " />
        </div>

        {/* ***********************MANAGE************************* */}
        <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap-reverse sr:mx-10">
        <img src={payment} alt="" className="w-[40%] ms:w-[100%] " />
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Payment
            </h1>
            <p className="sr:w-[100%]">
            Our POS system supports various payment methods, including credit cards, mobile payments, and more, ensuring convenience and security.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>        
        </div>
          {/* ***********************BILLING************************* */}
          <div className="flex items-center my-20 justify-center mx-20 gap-16 ms:flex-wrap sr:mx-10">
          <div>
            <h1 className="text-2xl text-green-600 whitespace-nowrap">
              Billing
            </h1>
            <p className="sr:w-[100%]">
            Generate accurate invoices, manage receipts, and maintain clear records to streamline your financial operations and improve customer satisfaction.
            </p>
            <button className="bg-white border border-black shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-5">
              {" "}
              <NavLink exact to="/">
                Buy & Manage
              </NavLink>
            </button>
          </div>
          <img src={billing} alt="" className="w-[40%] ms:w-[100%] " />
        </div>
        </div>
    </>
  )
}
