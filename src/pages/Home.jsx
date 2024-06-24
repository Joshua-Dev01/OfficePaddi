import React from "react";
import dash from "/wokrr-dashboard.jpg";
import Chooseimg from "/Home-page/choose-us/ChooseUs_Img.svg";
import Chooselines from "/Home-page/choose-us/choose-lines.svg";
import Hrmone from "/Home-page/services/Hrm-one.svg";
import Services_line from "/Home-page/services/services-line.svg";
import pos_two from "/Home-page/services/pos-two.svg";
import stockmgt from "/Home-page/services/stockMgt.svg";
import ServiceStar from "/Home-page/services/serviceBg-Star.svg";
import { GoHorizontalRule } from "react-icons/go";
import { Footer } from "../component/Footer/Footer";

export const Home = () => {
  return (
    <>
      <code className="font-sans absolute ipad:top-20">
        {/* ***************HERO SECTION****************** */}
        <div className=" bg-[#0D333E] w-[100%] h-full ipad:pt-24  mv:text-[20px] pb-10 ipad:text-center ">
          <div className="flex items-center justify-between xs:text-center  ipad:flex-wrap ipad:justify-center ">
            <div className="pl-20 mx-10 sr:mx-0 ipad:pl-0">
              <h1 className="text-4xl text-white leading-[3.5rem] whitespace-nowrap">
                One App that <br /> Manage Everthing
              </h1>
              <p className="text-white space-x-8 mb-12">
                The Bst Mannagment software{" "}
              </p>
              <button className="bg-white shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39]">
                Start Free trial
              </button>
            </div>

            <div className="hidden  ipad:mx-4 ipad:flex items-center justify-center mt-10">
              <img src={dash} alt="" className="ipad:w-[70%] mv:w-[100%]  " />
            </div>

            <div className="Hero-white-bg">
              <img
                src={dash}
                alt=""
                className="mt-48 w-[40%] absolute right-10 "
              />
            </div>
          </div>
        </div>
        {/*  *************** END OF HERO SECTION******************  */}

        {/*  ***************WHY CHOOSE US******************  */}
        <div>
          <div className="w-full mt-32 flex items-center justify-between px-20 lap:justify-center gap-64 lap:mt-52 lap:flex-wrap lap:gap-10 mv:px-2 mv:text-center">
            <div className="-mt-40 lap:-m-0">
              <h1 className="text-[#2D3250] text-3xl mb-10 lap:text-center whitespace-nowrap">
                Why
                <span className="border-b-4 border-[#024D39]"> choose us?</span>
              </h1>
              <p className="mv:text-[20px]">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </div>

            <div className="flex gap-10 sm:mb-20 sm:text-center xsm:items-center justify-center sm:gap-0">
              <img src={Chooseimg} alt="" className="w-[5rem] sr:hidden" />
              <section className="">
                <div className="w-[100%]">
                  <h1 className="text-2xl font-semibold">Accuracy </h1>
                  <p className="xs:px-2 xsm:w-406 mv:text-[20px]">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>

                <div className="my-12 sm:my-4 w-[100%]">
                  <h1 className="text-2xl font-semibold">Good Report</h1>
                  <p className=" xs:px-2 mv:text-[20px]">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>

                <div>
                  <h1 className="text-2xl font-semibold">Productivity</h1>
                  <p className="w-72 xs:px-2 mv:text-[20px] mv:w-[100%]">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <img src={Chooselines} alt="" className="w-96" />
        </div>
        {/*  ***************END OF WHY CHOOSE US******************  */}

        {/*  *************** SERVICES ******************  */}

        <div className="bg-[#E9ECED] py-20 my-20 mv:text-center">
          <h1 className="text-[#2D3250] text-3xl text-center mb-20 ">
            <span className="border-b-2 border-[#024D39]">Our </span> Services
          </h1>

          {/* ********HRM & CRM************ */}
          <section className="flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10 mv:px-4">
            <div>
              <img src={Hrmone} alt="" className="-z-50 ml-32 " />
              <h1 className="my-5 font-bold text-2xl te"> HRM & CRM</h1>
              <p className=" mv:text-[20px]">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
              <img src={Services_line} alt="" className="mt-16" />
            </div>
            <img src={dash} alt="" className="w-[25rem] z-10" />
          </section>

          {/* ********POS & PROJECT MGT************ */}
          <section className="flex items-center justify-center my-28 gap-44 px-20 sv:flex-wrap-reverse sv:gap-10 mv:px-4">
            <img src={dash} alt="" className="w-[25rem] z-10" />
            <div>
              <img src={pos_two} alt="" className=" ml-32" />
              <h1 className="my-5 font-bold text-2xl"> POS & PROJECT MGT</h1>
              <p className="mv:text-[20px]">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
              <img src={Services_line} alt="" className="mt-16" />
            </div>
          </section>

          {/* ********STOCK MGT & ACCOUNTING************ */}
          <section className="flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10 mv:px-4">
            <div>
              <img src={stockmgt} alt="" className=" ml-32" />
              <h1 className="my-5 font-bold text-2xl whitespace-nowrap">
                {" "}
                STOCK MGT & ACCOUNTING
              </h1>
              <p className=" mv:text-[20px]">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.
              </p>
              <img src={Services_line} alt="" className="mt-16" />
            </div>
            <img src={dash} alt="" className="w-[25rem]" />
          </section>

          {/* ************Background STAR******************** */}
          <img
            src={ServiceStar}
            alt=""
            className="absolute left-[47rem] top-[125rem] lap:hidden"
          />
          <img
            src={ServiceStar}
            alt=""
            className="absolute left-[10rem] top-[152rem] "
          />
        </div>
        {/*  ***************END OF SERVICES ******************  */}

        {/*  ***************STEPS TO USE ******************  */}
        <div className="steps">
          <h1 className="text-3xl text-center text-[#024D39]">
            Steps to <span className="border-b-4 border-[#EA5317]">use</span>
          </h1>

          <section className="grid grid-cols-3 mx-16 gap-14 lap:grid-cols-2 my-20 lap:mx-5 xsm:grid-cols-1 mv:text-center">
            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Subscribe to your desire plan
                </span>
              </h1>
              <p className="mv:text-[20px] ">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Subscribe to your desire plan
                </span>
              </h1>
              <p className="mv:text-[20px] ">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Subscribe to your desire plan
                </span>
              </h1>
              <p className="mv:text-[20px] ">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Subscribe to your desire plan
                </span>
              </h1>
              <p className="mv:text-[20px] ">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Subscribe to your desire plan
                </span>
              </h1>
              <p className="mv:text-[20px] ">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Subscribe to your desire plan
                </span>
              </h1>
              <p className="mv:text-[20px] ">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent
              </p>
            </div>
          </section>

          {/* ********************END OF STEPS TO USE************************** */}
        </div>

        {/* ****************FOOTER**************** */}
        <Footer />
      </code>
    </>
  );
};
