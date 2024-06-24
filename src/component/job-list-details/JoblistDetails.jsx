import React from "react";
import Date from "/job-list-details/date.svg";
import user from "/job-list-details/user.svg";
import view from "/job-list-details/view.svg";
import block from "/job-list-details/block.svg";
import dollar from "/job-list-details/dollar.svg";
import bag from "/job-list-details/bag.svg";
import office from "/job-list-details/office.svg";
import location from "/job-list-details/location.svg";
import call from "/job-list-details/call.svg";
import { useState } from "react";
import { Modal } from "./Modal";
// import { FileUpload } from "./FileUpload";
import { NavLink } from "react-router-dom";
import FileUpload from "./FileUpload";
export const JoblistDetails = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <code className="font-sans flex flex-col w-[100%]">
        <div>
        <h1 className="text-3xl font-semibold ml-20 mt-10"> <NavLink exact to="/" className="text-3xl text-gray-400 ipad:text-center">Job List</NavLink>  details</h1>
        <section className="flex mx-10 gap-11 mt-10 ipad:block ipad:mx-4">
          <div>
            <h1 className="font-bold">Product Researcher</h1>
            <p>Development</p>

            <div className=" mt-10 flex flex-wrap space-x-5 text-[15px] ipad:mx-0">
              <span className="flex gap-1">
                <img src={Date} alt="" />
                <p className="whitespace-nowrap">Post Date:Jun 15, 2027</p>
              </span>

              <span className="flex gap-1 ">
                <img src={Date} alt="" />
                <p className="whitespace-nowrap">Deadline:July 07, 2027</p>
              </span>

              <span className="flex gap-1">
                <img src={user} alt="" />
                <p>Applications:2</p>
              </span>

              <span className="flex gap-1">
                <img src={view} alt="" />
                <p>Views:70</p>
              </span>
            </div>
            {/* *************************** JOB DESCRIPTION **********************/}
            <div className="mt-10 xsm:w-80 xsm:mx-5">
              <h1 className="font-bold mb-3 ">Job Description</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco  laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in  voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum-
              </p>
            </div>
            {/* *************************** Requirements **********************/}

            <div className="mt-10 xsm:mx-5  xsm:w-80">
              <h1 className=" font-bold mb-3">Requirements</h1>
              <p className=" ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor  incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis{" "}
              </p>
              <div className="flex mv:items-center mv:justify-center">
              <div className="mt-5 mv:-ml-5 ">
                <span className="flex gap-1 mb-1 whitespace-nowrap">
                  <img src={block} alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </span>

                <span className="flex gap-1 mb-1 whitespace-nowrap">
                  <img src={block} alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </span>

                <span className="flex gap-1 mb-1 whitespace-nowrap">
                  <img src={block} alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </span>

                <span className="flex gap-1 mb-1 whitespace-nowrap">
                  <img src={block} alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </span>

                <span className="flex gap-1 mb-1 whitespace-nowrap">
                  <img src={block} alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </span>

                <span className="flex gap-1 whitespace-nowrap">
                  <img src={block} alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </span>
              </div>
              </div>
            </div>
          </div>
          {/* *****************************Apply for job****************************** */}
          <div className=" flex items-center justify-around mx-10">
          <div className=" border-[1px] w-96 border-black px-9 shadow-lg h-[90%] py-10 ipad:mt-10  ">
            <button
              className=" border-[1px] border-black px-10 py-1 rounded text-center mb-4 whitespace-nowrap"
              onClick={() => setShowModal(true)}
            >
              Apply For This Job
            </button>
            <div className="mb-3">
              <h1 className=" font-bold ml-8">Job Type</h1>
              <p className="text-[13px] ml-8">Full Time</p>
            </div>

            <div className="mb-3">
              <h1 className="flex font-bold gap-3">
                <img src={dollar} alt="" /> Salary
              </h1>
              <p className="text-[13px] ml-8">$3k - $5k</p>
            </div>

            <div className="mb-3">
              <h1 className="flex font-bold gap-3">
                <img src={bag} alt="" /> Experience
              </h1>
              <p className="text-[13px] ml-8">3 years</p>
            </div>

            <div className="mb-3">
              <h1 className="flex font-bold gap-3">
                <img src={office} alt="" /> Vacancy
              </h1>
              <p className="text-[13px] ml-8">7</p>
            </div>

            <div className="mb-3">
              <h1 className="flex font-bold gap-3">
                <img src={location} alt="" /> Location
              </h1>
              <p className="text-[13px] ml-8">35 crescent rd, New York, USA</p>
            </div>

            <div>
              <h1 className="flex font-bold gap-3">
                <img src={call} alt="" /> Contact INFO
              </h1>
              <p className="text-[13px] ml-8">+01 17445 775</p>
              <p className="text-[13px] ml-8">Workrr234@gmail.com</p>
            </div>
          </div>
          </div>
        </section>

          {/* *****************************Apply for job-FORM****************************** */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
         <form action="">
        <legend className="mb-2">Name</legend>
          <input type="text" required className="border-[1px] border-gray-500 w-[100%] rounded mb-3"/>

          <legend className="mb-2">Email Address</legend>
          <input type="email" required className="border-[1px] border-gray-500 w-[100%] rounded mb-3"/>
          <legend className="mb-2">Phone number</legend>
          <input type="text" required className="border-[1px] border-gray-500 w-[100%] rounded mb-3"/>
          <legend className="mb-2">Message</legend>
          <textarea name="" id="" required className="border-[1px] border-gray-500 w-[100%] rounded mb-3 h-20"></textarea>

          {/* <FileUpload /> */}
          <legend className="mb-2">Upload Your cover letter</legend>
        <FileUpload />

          <legend className="mt-2">Upload Your CV</legend>
          <FileUpload />
          <div className="flex items-center justify-center">
          <button className=" bg-[#181F38] text-white px-14 py-1 mt-6 rounded-3xl">Submit</button>
          </div>
         </form>
        </Modal>
        </div>
      </code>
    </>
  );
};
