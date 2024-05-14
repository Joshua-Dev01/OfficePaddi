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
      {/* ***************HERO SECTION****************** */}
      <div className=" bg-[#0D333E] w-[100vw] h-[105vh]  xs:h-[120vh] overflow-hidden ">
        <div className="flex items-center justify-between xs:text-center ">
          <div className="pl-20">
            <h1 className="text-4xl text-white leading-[3.5rem]">
              One App that <br /> Manage Everthing
            </h1>
            <p className="text-white space-x-8 mb-12">
              The Bst Mannagment software{" "}
            </p>
            <button className="bg-white shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39]">
              Start Free trial
            </button>
          </div>

          <div className="Hero-white-bg">
            <img
              src={dash}
              alt=""
              className="w-[42%] absolute top-[16rem] right-16 xs:top-[35rem] xs:left-24"
            />
          </div>
        </div>
      </div>
      {/*  *************** END OF HERO SECTION******************  */}

      {/*  ***************WHY CHOOSE US******************  */}
      <div>
        <div className="w-full mt-32 flex items-center justify-between px-20 overflow-x-hidden lap:justify-center lap:gap-16 lap:mt-52 lap:flex-wrap">
          <div className="-mt-40 lap:-m-0">
            <h1 className="text-[#2D3250] text-3xl mb-10 lap:text-center">
              Why
              <span className="border-b-4 border-[#024D39]"> choose us?</span>
            </h1>
            <p className="w-80 lap:text-center xsm:w-56">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>

          <div className="flex gap-10 sm:mb-20 sm:text-center xsm:items-center justify-center sm:gap-0">
            <img src={Chooseimg} alt="" className="w-[5rem] sr:hidden" />
            <section className="">
              <div className="w-[100%]">
                <h1 className="text-2xl font-semibold">Accuracy </h1>
                <p className="w-72 xs:px-2 xsm:w-406">
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>

              <div className="my-12 sm:my-4">
                <h1 className="text-2xl font-semibold">Good Report</h1>
                <p className="w-72 xs:px-2">
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-semibold">Productivity</h1>
                <p className="w-72 xs:px-2">
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </section>
          </div>
        </div>
        <img src={Chooselines} alt="" className="w-96" />
      </div>
      {/*  ***************END OF WHY CHOOSE US******************  */}

      {/*  *************** SERVICES ******************  */}

      <div className="bg-[#E9ECED] py-20 my-20">
        <h1 className="text-[#2D3250] text-3xl text-center mb-20 ">
          <span className="border-b-2 border-[#024D39]">Our </span> Services
        </h1>

        {/* ********HRM & CRM************ */}
        <section className="flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10">
          <div>
            <img src={Hrmone} alt="" />
            <h1 className="my-5 font-bold text-2xl"> HRM & CRM</h1>
            <p className="xsm:w-56">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
            <img src={Services_line} alt="" className="mt-16" />
          </div>
          <img src={dash} alt="" className="w-[25rem] z-10" />
        </section>

        {/* ********POS & PROJECT MGT************ */}
        <section className="flex items-center justify-center my-28 gap-44 px-20 sv:flex-wrap-reverse sv:gap-10">
          <img src={dash} alt="" className="w-[25rem] z-10" />
          <div>
            <img src={pos_two} alt="" />
            <h1 className="my-5 font-bold text-2xl"> POS & PROJECT MGT</h1>
            <p className="xsm:w-56">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>
            <img src={Services_line} alt="" className="mt-16" />
          </div>
        </section>

        {/* ********STOCK MGT & ACCOUNTING************ */}
        <section className="flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10">
          <div>
            <img src={stockmgt} alt="" />
            <h1 className="my-5 font-bold text-2xl"> STOCK MGT & ACCOUNTING</h1>
            <p className="xsm:w-56">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
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

        <section className="grid grid-cols-3 mx-16 gap-14 lap:grid-cols-2 my-20 lap:mx-5 xsm:grid-cols-1 ">
          <div>
            <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
              01
              <GoHorizontalRule className="mt-1" />
              <span className="text-[#024D39]">
                Subscribe to your desire plan
              </span>
            </h1>
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
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
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
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
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
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
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
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
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
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
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
            </p>
          </div>
        </section>

        {/* ********************END OF STEPS TO USE************************** */}
      </div>

      {/* ****************FOOTER**************** */}
      <Footer />
    </>
  );
};
