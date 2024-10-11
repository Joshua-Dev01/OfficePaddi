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
            <div className="flex space-x-5 xs:flex-wrap sr:space-x-0">
              <div>
                <img src={AboutImg} alt="" className="w-[70rem] xs:w-[30rem]" />
              </div>

              <div className="xs:mt-10 mt-20  mx-auto ">
                <h1 className="whitespace-nowrap text-4xl font-semibold text-[#0D333E]">
                  About Us
                </h1>

                <p className="w-[80%] sr:w-[100%] sr:px-10 sr:text-center">
                  We are a team of experts who understand your challenges and
                  are dedicated to developing innovative solutions that will
                  simplify business management for you and boost your bottom
                  line.
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
              <div className="flex items-center justify-center mx-16 gap-16 ms:flex-wrap sr:mx-17">
                <div>
                  <h1 className="text-3xl font-semibold whitespace-nowrap">
                    Our Mission
                  </h1>
                  <p className="sr:w-[100%]">
                    We have one mission: to provide your business with a
                    comprehensive, integrated management platform to streamline
                    operations and drive productivity, allowing you to focus on
                    your core goals and achieve sustainable growth
                  </p>
                </div>
                <img src="dash.svg" alt="" className="w-[40%] ms:w-[100%] " />
              </div>

              {/* **********************VISION***************************** */}

              <div className="flex items-center mb-60 justify-center mx-16 gap-16 ms:flex-wrap-reverse ms:mt-10 sr:mx-17">
                <img src="dash.svg" alt="" className="w-[40%] ms:w-[100%]" />
                <div>
                  <h1 className="text-3xl font-semibold whitespace-nowrap">
                    Our Vision
                  </h1>
                  <p className="sr:w-[100%]">
                    Our vision is for businesses worldwide to effortlessly
                    manage all aspects of their operations through a single,
                    unified platform. Our software will not only meets the
                    diverse needs of businesses but also anticipate and evolve
                    to the needs of businesses
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
