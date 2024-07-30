import React from "react";
import data from "./joblist.json";
import { NavLink } from "react-router-dom";
import Dollar from "/joblist/dollar.svg";
import Location from "/joblist/location.svg";
import Time from "/joblist/time.svg";
export const List = () => {
  return (
    <>
      <div className="pt-28 mx-16 lap:mx-2 sm:mx-0 ">
        <div className="rounded-lg  w-[100%] gap-5 flex lap:flex-wrap">
          {data.data.map((job) => (
            <div key={job.id} className=" bg-[#F1F1F1] shadow-lg m-0 w-[100%] ">
              <div className="flex items-center justify-between bg-light-gray  py-5 px-5">
                <h2 className="text-2 font-semibold">{job.title}</h2>
                <p className="text-gray-700 whitespace-nowrap font-semibold">
                 {job.employmentType.title}
                </p>
              </div>
              <div className="flex items-center justify-between py-5 px-5">
                <div className="flex flex-wrap gap-3">
                  <div className="flex gap-2  text-[13px] mv:flex-wrap">
                    <p className="text-gray-700 whitespace-nowrap flex">
                      <strong className="mt-1">
                        {" "}
                        <img src={Location} alt="" />
                      </strong>{" "}
                      {job.address}
                    </p>
                    <p className="text-gray-700 whitespace-nowrap flex">
                      <strong className="mt-1">
                        {" "}
                        <img src={Dollar} alt="" />
                      </strong>{" "}
                      {job.salary}
                    </p>
                  </div>
                </div>
                <span>
                  <NavLink
                    exact
                    to="/jobdetails"
                    className="text-[#007E1C] underline"
                  >
                    Details
                  </NavLink>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
