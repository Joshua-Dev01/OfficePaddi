import React from "react";
import { NavLink } from "react-router-dom";
import CustormizedHRM from "/service-page/serve-you/HRM.svg";
import Report from "/service-page/serve-you/report.svg";
import statistic from "/service-page/serve-you/statistic.svg";
import system from "/service-page/system/support-systems.svg";
import reliable from "/service-page/system/reliable.svg";
import reliableTwo from "/service-page/system/reliable2.svg";
import double from "/service-page/software/double-img.svg";
import draw from "/service-page/plan/ourservice.svg";
import { Footer } from "../component/Footer/Footer";
import ServiceCard from "../component/service-card/ServiceCard";
export const Services = () => {
  return (
    <>
      <code className="absolute font-sans">
        <div className=" mv:text-center">
          {/* *****************************************WHAT WE DO****************************** */}
          <div className="relative top-[10rem] text-center text-[0D333E] mb-[15rem] mv:px-10">
            <p className="font-bold">SERVICES</p>
            <h1 className="text-2xl">What We DO </h1>
            <p className="text-center w-[60%] mx-auto mv:w-[100%]">
  We empower businesses with an all-in-one platform to efficiently
  manage HR, CRM, POS, Project Management, Stock Management,
  and Accounting for streamlined operations and growth.
</p>

            <h2 className="text-3xl mt-10">
              You Have Done The Work. Now Let Us Serve You.
            </h2>
          </div>
          {/* *****************************************END OF WHAT WE DO****************************** */}

          {/* ************SERVE YOU*********** */}
          <div className="flex items-center justify-center text-center gap-9 mx-16 xs:grid xs:grid-cols-2 xsm:block mv:mx-4 mv:text-[20px]">
            {/* ************HRM*********** */}
            <div>
              <img src={CustormizedHRM} alt="" />
              <p className="text-[1.2rem] font-semibold my-5">
                Customized HRM{" "}
              </p>
              <p>
                Our HRM solutions provide you with the tools to build a
                customized solution that fits your unique HR needs and manage
                your workforce efficiently.
              </p>
            </div>
            {/* ************END OF HRM*********** */}

            {/* ************REPORT *********** */}
            <div>
              <img src={Report} alt="" />
              <p className="text-[1.2rem] font-semibold my-5">Our Report </p>
              <p>
                Stop guessing and start winning! Our powerful reporting tools
                generate detailed reports that track key performance metrics and
                identify trends. 
              </p>
            </div>
            {/* ************END OF REPORT*********** */}

            {/* ************STATISTIC *********** */}
            <div>
              <img src={statistic} alt="" />
              <p className="text-[1.2rem] font-semibold my-5">Our Statistic </p>
              <p>
                Our live statistics provide a crystal-clear view of your
                business operations, all in real-time. Monitor key metrics like
                sales figures, and customer engagement, all at a glance.
              </p>
            </div>
            {/* ************END OF STATISTIC*********** */}
          </div>
          {/* ************END OF SERVE YOU*********** */}

          <div className="text-center relative top-[5rem] bg-[#0D333E] text-white py-10 mb-32">
            <h1 className="text-[30px]">See What Wokrr Can do</h1>
            <p className="text-[#0FD46C] my-5 font-semibold">
              Buy Now and Manage
            </p>

            <span className="flex gap-5 items-center justify-center">
              <p className="bg-[#0FD46C] py-2 px-5 rounded-[5px] text-black">
                <NavLink exact to="/" className="whitespace-nowrap">
                  Buy & Manage
                </NavLink>
              </p>
              <p className="border py-2 px-5 rounded-[5px] text-white">
                <NavLink exact to="/" className="whitespace-nowrap">
                  Free 30 Days trial
                </NavLink>
              </p>
            </span>
          </div>

          {/* ******************Good Management System************************* */}
          <div className="mv:text-[20px]">
            <h1 className="text-center text-2xl">
              We Have A Good Management System to Assist you{" "}
            </h1>

            <div className="flex items-center justify-center my-14 gap-14 mx-24 xs:grid xs:grid-cols-2 xs:gap-8 xs:mx-4 xsm:block xsm:my-0">
  <div className="text-center">
    <img src={system} alt="" className="mx-auto" />
    <p className="font-semibold my-5">24/7 Support system</p>
    <p>
      Our expert team is always available to assist you, ensuring
      you have the help you need whenever you need it.
    </p>
  </div>

  <div className="text-center xsm:my-20">
    <img src={reliable} alt="" className="mx-auto" />
    <p className="font-semibold my-5">Reliable</p>
    <p>
      You can rely on our management system to keep your business
      running smoothly with dependable features and performance.
    </p>
  </div>

  <div className="text-center">
    <img src={reliableTwo} alt="" className="mx-auto" />
    <p className="font-semibold my-5">Secure</p>
    <p>
      We prioritize your data's safety, employing advanced
      encryption and regular updates to maintain security and
      confidentiality.
    </p>
  </div>
</div>

          </div>
          {/* ******************END Good Management System************************* */}

          {/* ******************PLAN************************* */}
          <div>
            <h1 className="text-3xl text-center my-16 mv:text-2xl">
              Choose a Plan that suit you
            </h1>
            <ServiceCard />
          </div>
          {/* ******************END OF PLAN************************* */}

          {/* ******************OUR SERVICES************************* */}
          {/* <section className="grid grid-cols-3 mx-10 my-32 ipad:grid-cols-2 xsm:grid-cols-1 mv:mx-4 mv:text-[20px]">
            <div className="flex gap-3 ">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet,consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src={draw} alt="" className="w-10 mv:hidden" />
              <div className="mt-10">
                <h1 className="font-bold">HRM</h1>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </section> */}

          <div>
            <div className="flex items-center justify-center px-10 mx-16 lap:flex-wrap lap:text-center mv:mx-4 mv:text-[20px]">
              <img src={double} alt="" />

              <div>
                <h2 className="text-2xl">Office Padi is Trusted Globally!</h2>
                <p className="mv:w-[100%] mv:mt-10">
                  Join thousands of satisfied users who rely on our
                  comprehensive solutions to manage their operations efficiently
                  and effectively.
                </p>
              </div>
            </div>
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
          </div>

          {/* ***************FOOTER********** */}
        </div>
        <Footer />
      </code>
    </>
  );
};
