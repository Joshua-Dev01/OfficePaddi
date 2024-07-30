import React from "react";
import contact from "/service-page/service-dropdown/crm/contact.svg";
import leads from "/service-page/service-dropdown/crm/leadsIcon.svg";
import opportunity from "/service-page/service-dropdown/crm/opportunityIcon.svg";
import conversation from "/service-page/service-dropdown/crm/conversationIcon.svg";
const CrmComp = () => {
  return (
    <>
   <div className="text-center bg-slate-200 py-10">
  <p className="text-2xl font-semibold mb-10">
    Our Project Management Features include:
  </p>
  <div className="grid grid-cols-1 gap-10 mx-20 md:grid-cols-2 lg:grid-cols-4">
    {/* ************PROJECT***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={contact} alt="Project Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Contact</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
    {/* ************TEAMS***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={leads} alt="Teams Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Leads</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
    {/* ************CALENDAR***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={opportunity} alt="Calendar Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Opportunity</p>
      <p className="text-center">
        Our expert team is always available to assist you, ensuring you have
        the help you need whenever you need it.
      </p>
    </div>
    {/* ************FEEDS***************** */}
    <div className="flex flex-col items-center shadow py-10 px-5 rounded-3xl bg-white">
      <img src={conversation} alt="Feeds Icon" className="mb-3 w-20" />
      <p className="font-bold text-xl mb-3">Conversation</p>
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

export default CrmComp;
