import React from "react";
import projectIcon from "/service-page/service-dropdown/projectMgt/proIcon.svg";
import teams from "/service-page/service-dropdown/projectMgt/teamsIcon.svg";
import calendar from "/service-page/service-dropdown/projectMgt/calendarIcon.svg";
import feeds from "/service-page/service-dropdown/projectMgt/feedsIcon.svg";
const ProjectComp = () => {
  return (
    <>
   <div className="text-center bg-slate-200 py-10">
  <p className="text-2xl font-semibold mb-10">
    Our Project Management Features include:
  </p>
  <div className="grid grid-cols-1 gap-10 mx-4 md:grid-cols-2 lg:grid-cols-4">
    {/* ************PROJECT***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={projectIcon} alt="Project Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Project</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
    {/* ************TEAMS***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={teams} alt="Teams Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Teams</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
    {/* ************CALENDAR***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={calendar} alt="Calendar Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Calendar</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
    {/* ************FEEDS***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={feeds} alt="Feeds Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Feeds</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
  </div>
</div>



    </>
  );
};

export default ProjectComp;
