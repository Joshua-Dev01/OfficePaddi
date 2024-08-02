import React from "react";
import dash from "/wokrr-dashboard.jpg";
import Chooseimg from "/Home-page/choose-us/ChooseUs_Img.svg";
import Chooselines from "/Home-page/choose-us/choose-lines.svg";
import Hrmone from "/Home-page/services/Hrm-one.svg";
import Services_line from "/Home-page/services/services-line.svg";
import pos_two from "/Home-page/services/pos-two.svg";
import stockmgt from "/Home-page/services/stockMgt.svg";
import ServiceStar from "/Home-page/services/serviceBg-Star.svg";
import { GoHorizontalRule } from "react-icons/go";
import { Footer } from "../component/Footer/Footer";

export const Index = () => {
  return (
    <>
      <code className="font-sans absolute ipad:top-20">
        {/* ***************HERO SECTION****************** */}
        <div className=" bg-[#0D333E] w-[100%] h-full ipad:pt-24  mv:text-[20px] pb-10 ipad:text-center ">
          <div className="flex items-center justify-between xs:text-center  ipad:flex-wrap ipad:justify-center ">
            <div className="pl-20 mx-10 sr:mx-0 ipad:pl-0">
              <h1 className="text-4xl text-white leading-[3.5rem] whitespace-nowrap">
                Your Complete Business <br /> Management Suite
              </h1>
              {/* <p className="text-white space-x-8 mb-12">
                The Bst Mannagment software{" "}
              </p> */}
              <button className="bg-white shadow-lg py-2 px-10 rounded-[20px] whitespace-nowrap text-[#024D39] mt-12">
                Start Free trial
              </button>
            </div>

            <div className="hidden  ipad:mx-4 ipad:flex items-center justify-center mt-10">
              <img src={dash} alt="" className="ipad:w-[70%] mv:w-[100%]  " />
            </div>

            <div className="Hero-white-bg">
              <img
                src={dash}
                alt=""
                className="mt-48 w-[40%] absolute right-10 "
              />
            </div>
          </div>
        </div>
        {/*  *************** END OF HERO SECTION******************  */}

        {/*  ***************WHY CHOOSE US******************  */}
        <div>
          <div className="w-full mt-32 flex items-center justify-between px-20 lap:justify-center gap-64 lap:mt-52 lap:flex-wrap lap:gap-10 mv:px-2 mv:text-center">
            <div className="-mt-40 lap:-m-0">
              <h1 className="text-[#2D3250] text-3xl mb-10 lap:text-center whitespace-nowrap">
                Why
                <span className="border-b-4 border-[#024D39]"> choose us?</span>
              </h1>
              <p className="">
                Are you worried about data errors and inefficient workflows?
                Office Paddy takes the guesswork out of business management.
              </p>

              <p className="mt-10">
                Our powerful tools ensure accurate data handling, minimising
                errors, and maximising efficiency. Spend less time on manual
                tasks and more on strategic work that grows your business
                faster!
              </p>
            </div>

            <div className="flex gap-10 sm:mb-20 sm:text-center xsm:items-center justify-center sm:gap-0">
              <img src={Chooseimg} alt="" className="w-[9rem] mv:hidden" />
              <section className="">
                <div className="w-[100%]">
                  <h1 className="text-2xl font-semibold">Accuracy </h1>
                  <p className="w-[100%] xs:px-2">
                    We prioritize accuracy, ensuring precise data handling and
                    calculations in every aspect of our platform, from inventory
                    management to financial reporting. Say goodbye to errors and
                    discrepancies and experience the peace of mind that comes
                    with accurate information at your fingertips.
                  </p>
                </div>

                <div className="my-12 sm:my-4 w-[100%]">
                  <h1 className="text-2xl font-semibold">Good Report</h1>
                  <p className="w-[100%] xs:px-2">
                    Office Paddy's powerful reporting goes beyond data and
                    delivers clear, actionable insights you can use immediately.
                    With our intuitive analytics tools, you can track sales
                    trends, monitor project progress in real-time, and analyze
                    employee productivity.
                  </p>
                </div>

                <div>
                  <h1 className="text-2xl font-semibold">Productivity</h1>
                  <p className="w-[100%] xs:px-2 mv:w-[100%]">
                    Is your team drowning in repetitive tasks? We streamline
                    workflows and automate repetitive tasks, freeing valuable
                    time and allowing your teams to focus on high-value projects
                    and strategic work. See results faster and reach your
                    business goals with a happier, more productive workforce.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <img src={Chooselines} alt="" className=" lap:w-72" />
        </div>
        {/*  ***************END OF WHY CHOOSE US******************  */}

        {/*  *************** SERVICES ******************  */}

        <div className="bg-[#E9ECED] py-20 my-20 mv:text-center">
          <h1 className="text-[#2D3250] text-3xl text-center mb-20 ">
            <span className="border-b-2 border-[#024D39]">Our </span> Services
          </h1>

          {/* ********HRM & CRM************ */}
          <section className="flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10 mv:px-4">
            <div>
              <img src={Hrmone} alt="" className="-z-50 ml-32 " />
              <h1 className="my-5 font-bold text-2xl te"> HRM & CRM</h1>
              <p className="">
                Office Paddy's integrated HRM and CRM tools simplify everything
                from recruitment to retirement, keeping your employees happy and
                your business compliant. 
              </p>

              <p className="mt-10">
                Use our CRM features today to build stronger customer
                relationships, allowing you to track interactions and close
                deals faster.
              </p>

              <img src={Services_line} alt="" className="mt-16" />
            </div>
            <img src={dash} alt="" className="w-[25rem] z-10" />
          </section>

          {/* ********POS & PROJECT MGT************ */}
          <section className="flex items-center justify-center my-28 gap-44 px-20 sv:flex-wrap-reverse sv:gap-10 mv:px-4">
            <img src={dash} alt="" className="w-[25rem] z-10" />
            <div>
              <img src={pos_two} alt="" className=" ml-32" />
              <h1 className="my-5 font-bold text-2xl"> POS & PROJECT MGT</h1>
              <p className="">
                Are you stressed about slow checkouts or missed project
                deadlines? Our services include seamless solutions for your
                sales and projects, making your retail experience a breeze. With
                our Project Management tools keeping you organized to ensure
                timely delivery and optimal resource allocation.
                <p className="mt-5">
                  Subscribe to Office Paddy now for unparalleled efficiency and
                  control!
                </p>
              </p>
              <img src={Services_line} alt="" className="mt-16" />
            </div>
          </section>

          {/* ********STOCK MGT & ACCOUNTING************ */}
          <section className="flex items-center justify-center gap-44 px-20 sv:flex-wrap sv:gap-10 mv:px-4">
            <div>
              <img src={stockmgt} alt="" className=" ml-32" />
              <h1 className="my-5 font-bold text-2xl whitespace-nowrap">
                {" "}
                STOCK MGT & ACCOUNTING
              </h1>
              <p className=" ">
                We offer integrated stock management and accounting solutions to
                help you control and manage inventory efficiently. The tools
                allow you to monitor your inventory in real-time inventory,
                reduce waste, and optimize your supply chain. 
              </p>

              <p className="mt-5">
                Our accounting features ensure accurate financial tracking,
                compliance, and quick report generation. Use Office Paddy to
                give your business a solid foundation as we promote transparency
                and financial health
              </p>
              <img src={Services_line} alt="" className="mt-16" />
            </div>
            <img src={dash} alt="" className="w-[25rem]" />
          </section>

          {/* ************Background STAR******************** */}
          <img
            src={ServiceStar}
            alt=""
            className="absolute left-[47rem] top-[125rem] lap:hidden"
          />
          <img
            src={ServiceStar}
            alt=""
            className="absolute left-[10rem] top-[152rem] "
          />
        </div>
        {/*  ***************END OF SERVICES ******************  */}

        {/*  ***************STEPS TO USE ******************  */}
        <div className="steps">
          <h1 className="text-3xl text-center text-[#024D39]">
            Steps to <span className="border-b-4 border-[#EA5317]">use</span>
          </h1>

          <section className="grid grid-cols-3 mx-16 gap-14 lap:grid-cols-2 my-20 lap:mx-5 xsm:grid-cols-1 mv:text-center">
            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                01
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">Sign Up</span>
              </h1>
              <p className=" ">
                1. Visit our website and click on the "Sign Up" button.
              </p>
              <p>
                {" "}
                2. Enter your details and create an account with a secure
                password.
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                02
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">Choose Your Plan</span>
              </h1>
              <p className="">
                1. Select the subscription plan that best fits your business
                needs.
              </p>
              <p>
                {" "}
                2. Enter your payment information and complete the subscription
                process.
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                03
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">Set Up Your Profile</span>
              </h1>
              <p className=" ">
                1. Fill out your company profile with relevant information.{" "}
              </p>
              <p>
                2. Customize your settings to tailor the platform to your
                business operations.
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                04
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">Import Data</span>
              </h1>
              <p className=" ">
                Import your existing data into the platform, such as employee
                information, customer details, inventory lists, and financial
                records
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                05
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">
                  Personalize Your Services
                </span>
              </h1>
              <p className=" ">
                1. Activate and configure the specific modules you need, such as
                HRM, CRM, etc
              </p>
              <p>
                {" "}
                2. Set up user roles and permissions to control your team's
                access levels
              </p>
            </div>

            <div>
              <h1 className="flex text-[20px] font-medium mb-5 text-[#00BF6F]">
                06
                <GoHorizontalRule className="mt-1" />
                <span className="text-[#024D39]">Start Managing</span>
              </h1>
              <p className="">
                1. Begin using the platform to manage your business operations.
              </p>
              <p>
                {" "}
                2. Utilize our comprehensive support resources, to help you get
                the most out of the platform.
              </p>
            </div>
          </section>

          {/* ********************END OF STEPS TO USE************************** */}
        </div>

        {/* ****************FOOTER**************** */}
        <Footer />
      </code>
    </>
  );
};
