import React from "react";
import { NavLink } from "react-router-dom";
import Dollar from "/joblist/dollar.svg";
import Location from "/joblist/location.svg";
import Time from "/joblist/time.svg";

export const JobList = () => {
  return (
    <>
      <h1 className="text-[#101828] pt-28 text-3xl ml-24 mb-10">Job List</h1>
      <section className=" grid grid-cols-2 gap-10  mx-20 lap:flex lap:flex-wrap sm:mx-3">
      

        <div className="bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
          <div className="bg-[#F9F9F9] flex items-center justify-between py-3 px-5">
            <h1>
              Product Researcher <br />{" "}
              <span className="text-[13px] text-[#181F38]">Development</span>
            </h1>
            <p>Full Time</p>
          </div>

          <div className="flex items-center justify-between py-5 px-5  bg-[#F1F1F1] ">
            <div className="flex gap-5  text-[13px] mv:flex-wrap ">
              <span className="flex whitespace-nowrap">
                <img src={Location} alt="" />
                New york
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Dollar} alt="" />
                $3,000- $5,000
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Time} alt="" />5 days ago
              </span>
            </div>
            <span>
            <NavLink exact to="/jobdetails" className="text-[#007E1C] underline">
              Details
            </NavLink>
            </span>
          </div>
        </div>

        <div className="bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
          <div className="bg-[#F9F9F9] flex items-center justify-between py-3 px-5">
            <h1>
              Product Researcher <br />{" "}
              <span className="text-[13px] text-[#181F38]">Development</span>
            </h1>
            <p>Full Time</p>
          </div>

          <div className="flex items-center justify-between py-5 px-5  bg-[#F1F1F1] ">
            <div className="flex gap-5  text-[13px] mv:flex-wrap ">
              <span className="flex whitespace-nowrap">
                <img src={Location} alt="" />
                New york
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Dollar} alt="" />
                $3,000- $5,000
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Time} alt="" />5 days ago
              </span>
            </div>
            <span>
            <NavLink exact to="/" className="text-[#007E1C] underline">
              Details
            </NavLink>
            </span>
          </div>
        </div>
        <div className="bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
          <div className="bg-[#F9F9F9] flex items-center justify-between py-3 px-5">
            <h1>
              Product Researcher <br />{" "}
              <span className="text-[13px] text-[#181F38]">Development</span>
            </h1>
            <p>Full Time</p>
          </div>

          <div className="flex items-center justify-between py-5 px-5  bg-[#F1F1F1] ">
            <div className="flex gap-5  text-[13px] mv:flex-wrap ">
              <span className="flex whitespace-nowrap">
                <img src={Location} alt="" />
                New york
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Dollar} alt="" />
                $3,000- $5,000
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Time} alt="" />5 days ago
              </span>
            </div>
            <span>
            <NavLink exact to="/" className="text-[#007E1C] underline">
              Details
            </NavLink>
            </span>
          </div>
        </div>
        <div className="bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
          <div className="bg-[#F9F9F9] flex items-center justify-between py-3 px-5">
            <h1>
              Product Researcher <br />{" "}
              <span className="text-[13px] text-[#181F38]">Development</span>
            </h1>
            <p>Full Time</p>
          </div>

          <div className="flex items-center justify-between py-5 px-5  bg-[#F1F1F1] ">
            <div className="flex gap-5  text-[13px] mv:flex-wrap ">
              <span className="flex whitespace-nowrap">
                <img src={Location} alt="" />
                New york
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Dollar} alt="" />
                $3,000- $5,000
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Time} alt="" />5 days ago
              </span>
            </div>
            <span>
            <NavLink exact to="/" className="text-[#007E1C] underline">
              Details
            </NavLink>
            </span>
          </div>
        </div>
        <div className="bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
          <div className="bg-[#F9F9F9] flex items-center justify-between py-3 px-5">
            <h1>
              Product Researcher <br />{" "}
              <span className="text-[13px] text-[#181F38]">Development</span>
            </h1>
            <p>Full Time</p>
          </div>

          <div className="flex items-center justify-between py-5 px-5  bg-[#F1F1F1] ">
            <div className="flex gap-5  text-[13px] mv:flex-wrap ">
              <span className="flex whitespace-nowrap">
                <img src={Location} alt="" />
                New york
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Dollar} alt="" />
                $3,000- $5,000
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Time} alt="" />5 days ago
              </span>
            </div>
            <span>
            <NavLink exact to="/" className="text-[#007E1C] underline">
              Details
            </NavLink>
            </span>
          </div>
        </div>
        <div className="bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
          <div className="bg-[#F9F9F9] flex items-center justify-between py-3 px-5">
            <h1>
              Product Researcher <br />{" "}
              <span className="text-[13px] text-[#181F38]">Development</span>
            </h1>
            <p>Full Time</p>
          </div>

          <div className="flex items-center justify-between py-5 px-5  bg-[#F1F1F1] ">
            <div className="flex gap-5  text-[13px] mv:flex-wrap ">
              <span className="flex whitespace-nowrap">
                <img src={Location} alt="" />
                New york
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Dollar} alt="" />
                $3,000- $5,000
              </span>
              <span className="flex whitespace-nowrap">
                <img src={Time} alt="" />5 days ago
              </span>
            </div>
            <span>
            <NavLink exact to="/" className="text-[#007E1C] underline">
              Details
            </NavLink>
            </span>
          </div>
        </div>

       
      </section>
    </>
  );
};
