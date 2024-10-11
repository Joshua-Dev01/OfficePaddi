import React from "react";
import cloud from "/service-page/service-dropdown/hrmservices/Hrcloud.svg";
import portal from "/service-page/service-dropdown/hrmservices/portal.svg";
import Accounting from "/service-page/service-dropdown/hrmservices/Accounting.svg";
const HrmComp = () => {
  return (
    <>
      <div className="flex items-center justify-center text-center bg-slate-200 py-10">
        <div className="flex items-center justify-center leading-7 gap-10 mx-24 xs:grid xs:grid-cols-2 xsm:block mv:mx-4 mv:text-center">
          <div className="flex flex-col items-center">
            <img src={cloud} alt="" className="mb-3" />
            <p className="font-bold text-[20px] mb-3">HR Cloud</p>
            <p className="w-[100%] mv:px-9">
              Manage all your HR tasks in one place with our secure HR Cloud. We
              ensure your HR data is always accessible and up-to-date
            </p>
          </div>
          <div className="flex flex-col items-center my-10">
            <img src={portal} alt="" className="mb-3" />
            <p className="font-bold text-[20px] mb-3">Employment Portal</p>
            <p className="w-[100%]  mv:px-9">
              Post job openings, track applications, and communicate with
              candidates seamlessly to find the best talent for your team.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Accounting} alt="" className="mb-3" />
            <p className="font-bold text-[20px] mb-3">Accounting</p>
            <p className="w-[100%]  mv:px-9">
              Our accounting feature allows for accurate payroll management,
              ensuring your HR and accounting are always in sync
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrmComp;
