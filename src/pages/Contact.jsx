import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import phoneicon from "/contact-page/phoneIcon.svg";
import { Footer } from "../component/Footer/Footer";
import Map from "../component/Service-map/Map";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gwy7r1t", "template_spmj21t", form.current, {
        publicKey: "v32G-6bRv7nV3CTT3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="relative top-[10rem] flex gap-20 mx-20  mb-56  ipad:block sr:mx-3 ">
        <div className="ipad:mb-16">
          <h1 className="font-bold text-3xl text-[#0D333E] mb-6 whitespace-nowrap">Get In Touch</h1>
          <p className="whitespace-nowrap">Send us a message</p>
          <p className="">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <form action="" ref={form} onSubmit={sendEmail} className="mt-10">
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 xsm:block ">
              <input
                type="text"
                required
                placeholder="Name"
                className="border-b-2 border-black pb-5 focus:outline-none placeholder-[#0D333E] xsm:w-full xsm:mb-10"
              />
              <input
                type="text"
                required
                placeholder="Email address"
                className="border-b-2 border-black pb-5 focus:outline-none placeholder-[#0D333E] xsm:w-full xsm:mb-10"
              />
              <input
                type="text"
                required
                placeholder="Company name"
                className="border-b-2 border-black pb-5 focus:outline-none placeholder-[#0D333E] xsm:w-full xsm:mb-10"
              />
              <input
                type="text"
                required
                placeholder="Phone number"
                className="border-b-2 border-black pb-5 focus:outline-none placeholder-[#0D333E] xsm:w-full xsm:mb-10"
              />
              <textarea
                name="Message"
                placeholder="Message"
                cols="30"
                rows="10"
                className="border-b-2 border-black  focus:no-underline focus:outline-none h-[5rem] w-[200%] placeholder-[#0D333E] xsm:w-full"
              ></textarea>
            </div>
            <div className="flex items-center justify-end xsm:justify-center ipad:justify-center">
            <input
              type="submit"
              value="Send"
              className="cursor-pointer bg-[#0D333E] text-white px-16 py-2 mt-5 flex rounded-[5px] "
            />
            </div>
          </form>
        </div>

        {/* *******************LOCATION************************ */}
        <div className="border-l-[1px] border-black pl-10  ">
          <h1 className="mb-5">Call Us</h1>
          <p className="mb-5">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <span className="flex mb-10">
            <img src={phoneicon} alt="" />
           <a href="tel:+234-708-676-8271">+234-708-676-8271</a>
          </span>
          <h1 className="mb-5">Visit Us</h1>
          <p>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <h2 className="mt-5 font-bold text-center">23, avenur raod. Tx</h2>
        </div>
      </div>
      <Map />
      <Footer />
    </>
  );
};
