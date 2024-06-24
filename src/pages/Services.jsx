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
          <div className="relative top-[10rem] text-center text-[0D333E] mb-[15rem] mv:mx-4">
            <p className="font-bold">SERVICES</p>
            <h1 className="text-2xl">What We DO </h1>
            <p>
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate <br className="mv:hidden" /> libero et velit interdum,
              ac aliquet odio mattis
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
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            {/* ************END OF HRM*********** */}

            {/* ************REPORT *********** */}
            <div>
              <img src={Report} alt="" />
              <p className="text-[1.2rem] font-semibold my-5">Our Report </p>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            {/* ************END OF REPORT*********** */}

            {/* ************STATISTIC *********** */}
            <div>
              <img src={statistic} alt="" />
              <p className="text-[1.2rem] font-semibold my-5">Our Statistic </p>
              <p>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
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
              We Have A Good Management System to assist you{" "}
            </h1>

            <div className="flex items-center justify-center my-14 gap-14 mx-24 xs:grid xs:grid-cols-2 xsm:block mv:mx-4">
              <div>
                <img src={system} alt="" className="ml-28" />
                <p className="font-semibold m-5 ">24/7 Support system </p>
                <p cl>
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>

              <div className=" xsm:my-20">
                <img src={reliable} alt="" className="ml-28" />
                <p className="font-semibold my-5">Reliable </p>
                <p>
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>

              <div>
                <img src={reliableTwo} alt="" className="ml-28" />
                <p className="font-semibold my-5">Reliable </p>
                <p>
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </div>
          </div>
          {/* ******************END Good Management System************************* */}

          {/* ******************PLAN************************* */}
          <div>
            <h1 className="text-3xl text-center my-16">
              Choose a Plan that suit you
            </h1>
            <ServiceCard />
          </div>
          {/* ******************END OF PLAN************************* */}

          {/* ******************OUR SERVICES************************* */}
          <section className="grid grid-cols-3 mx-10 my-32 ipad:grid-cols-2 xsm:grid-cols-1 mv:mx-4 mv:text-[20px]">
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
          </section>

          <div>
            <div className="flex items-center justify-center mx-16 lap:flex-wrap lap:text-center mv:mx-4 mv:text-[20px]">
              <img src={double} alt="" />

              <div>
                <h2 className="text-3xl">Our Software all over the World</h2>
                <p className="mv:w-[100%] mv:mt-10">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
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
