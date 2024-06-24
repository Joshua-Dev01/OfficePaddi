import React from "react";
import SideLines from "/support-page/side-design.svg";
import FAQ from "/support-page/faqs-img.svg";
import Accordion from "../component/Support-page-Accordion/Accordion";
import { Footer } from "../component/Footer/Footer";

export const Support = () => {
  return (
    <>
      <code className="relative top-40 font-sans">
        <div className="flex items-center justify-center">
          <div className="text-center mb-10">
            <p className="font-semibold">SUPPORT</p>
            <p className="font-[23px] text-2xl">How Can We Help You</p>
            <p className="w-[10%">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <img src={SideLines} alt="" className="w-56" />

        {/* *********************FQA**************************** */}
        <div className="flex items-center justify-around mx-20 flex-wrap ms:mx-0 mv:text-center mv:justify-center mb-20">
          <div className="  ">
            <p className="font-bold text-2xl mb-5">FAQs</p>
            <p className="w-[23rem] mv:w-[100%] ">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <img src={FAQ} alt="" className="w-[40%] mv:w-[90%] mv:my-16" />
        </div>
        {/* *********************FQA ACCORDION**************************** */}
        <div className="flex flex-wrap bg-custom-pattern bg-cover text-white w-[100%] pt-10 pb-20">
          <div className="max-w-xl mx-auto mt-10">
            <Accordion
              title="Why Can’t I find some features on the Services?"
              content="Content for section 1."
            />
            <Accordion
              title="Why Can’t I find some features on the Services?"
              content="Content for section 2."
            />
            <Accordion
              title="Why Can’t I find some features on the Services?"
              content="Content for section 3."
            />
          </div>

          <div className="max-w-xl mx-auto mt-10">
            <Accordion
              title="Why Can’t I find some features on the Services?"
              content="Content for section 1."
            />
            <Accordion
              title="Why Can’t I find some features on the Services?"
              content="Content for section 2."
            />
            <Accordion
              title="Why Can’t I find some features on the Services?"
              content="Content for section 3."
            />
          </div>
        </div>
        {/* *********************END OF FQA ACCORDION**************************** */}

        <div>
          <div className="flex items-center justify-evenly space-y-16  mt-20 mb-56 flex-wrap">
            <h1 className="font-semibold text-2xl mt-10">Was This Helpful?</h1>

            <div className="flex gap-5 ">
              <button className="border h-8 border-gray-500 px-7 font-semibold focus:bg-[#007E1C]  focus:text-white">
                Yes
              </button>
              <button className="border h-8 border-gray-500 px-7 font-semibold focus:bg-[#007E1C] focus:text-white">
                No
              </button>
            </div>

            <div>
              <p>Contact Us</p>
              <p>Email: Support@gmail.com</p>
              <p>Phone: 000 000 000 000</p>
            </div>
          </div>
        </div>
      </code>
      {/* ***************************Footer********************* */}
      <Footer />
    </>
  );
};
