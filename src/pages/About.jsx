import React from "react";
import AboutImg from "/about-page/about.svg";
import { Footer } from "../component/Footer/Footer";
export const About = () => {
  return (
    <>
      <code className="font-sans sr:text-center">
        <div>
          {/* *****************ABOUT********************* */}
          <div className="relative top-[10rem] ">
            <div className="flex space-x-5 xs:flex-wrap">
              <div>
                <img src={AboutImg} alt="" className="w-[70rem] xs:w-[30rem]" />
              </div>

              <div className="xs:mt-10 mt-20">
                <h1 className="whitespace-nowrap text-4xl font-semibold text-[#0D333E]">
                  About Us
                </h1>
                <p className=" w-[80%] sr:w-[100%]">
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>

            {/* *****************Users********************* */}
            <div className="flex flex-wrap items-center justify-around bg-[#F3F2EF] w-full py-10 mt-20">
              <div className="text-center ">
                <h1 className="bg-[#0A8543] w-20 h-20 py-5 rounded-full text-3xl text-white ">
                  15k
                </h1>
                <p className="text-3xl">Users</p>
              </div>

              <div className="text-center ">
                <h1 className="bg-[#0A8543] w-20 h-20 py-5 rounded-full text-3xl text-white ">
                  15k
                </h1>
                <p className=" text-3xl">Users</p>
              </div>

              <div className="text-center ">
                <h1 className="bg-[#0A8543] w-20 h-20 py-5 rounded-full text-3xl text-white ">
                  15k
                </h1>
                <p className=" text-3xl">Users</p>
              </div>
            </div>

            {/* **********************MISSION AND VISION***************************** */}
            <div className="my-20">
              {/* **********************MISSION***************************** */}
              <div className="flex items-center justify-center mx-16 gap-16 ms:flex-wrap sr:mx-0">
                <div>
                  <h1 className="text-3xl font-semibold whitespace-nowrap">Our Mission</h1>
                  <p className="sr:w-[100%]">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <img src="dash.svg" alt="" className="w-[40%] ms:w-[100%] " />
              </div>

              {/* **********************VISION***************************** */}

              <div className="flex items-center mb-60 justify-center mx-16 gap-16 ms:flex-wrap-reverse ms:mt-10 sr:mx-0">
                <img src="dash.svg" alt="" className="w-[40%] ms:w-[100%]" />
                <div>
                  <h1 className="text-3xl font-semibold whitespace-nowrap">Our Vision</h1>
                  <p className="sr:w-[100%]">
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>
            {/* **********************FOOTER***************************** */}
           
          </div>
        </div>
      </code>
      <Footer />
    </>
  );
};
