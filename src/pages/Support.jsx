import React from "react";
import SideLines from "/support-page/side-design.svg";
import FAQ from "/support-page/faqs-img.svg";
import Accordion from "../component/Support-page-Accordion/Accordion";
import { Footer } from "../component/Footer/Footer";
import { SupportForm } from "../component/Support-page-Accordion/SupportForm";

export const Support = () => {
  return (
    <>
      <code className="relative top-40 font-sans">
        <div className="flex items-center justify-center">
          <div className="text-center mb-5">
            <p className="font-semibold">SUPPORT</p>
            <p className="font-[23px] text-2xl">How Can We Help You</p>
            <p className="w-full max-w-md mx-auto text-center leading-relaxed sr:px-10">
              Need assistance or have questions? Our support team is committed
              to providing prompt and effective solutions. Reach out to us, and
              let's resolve your issues together.
            </p>
          </div>
        </div>
        <img src={SideLines} alt="" className="w-56" />

        {/* *********************FQA**************************** */}
        <div className="flex items-center justify-around mx-20 flex-wrap ms:mx-0 sr:text-center mv:justify-center mb-20">
          <div className="  ">
            <p className="font-bold text-2xl mb-5">FAQs</p>
            <p className="w-[23rem] sr:w-[100%] sr:px-10 sr:mb-10">
              Looking for quick solutions? Find detailed answers to the most
              frequently asked questions from various topics to help you get the
              most out of our platform.
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
          <div className="flex items-center justify-evenly space-y-16  mt-20 mb-56 flex-wrap sr:px-10 sr:gap-3">
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
      <SupportForm />
      {/* ***************************Footer********************* */}
      <Footer />
    </>
  );
};
