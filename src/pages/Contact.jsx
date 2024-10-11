import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import phoneicon from "/contact-page/phoneIcon.svg";
import { Footer } from "../component/Footer/Footer";
import Map from "../component/Service-map/Map";

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gwy7r1t", "template_spmj21t", form.current, {
        publicKey: "v32G-6bRv7nV3CTT3",
      })
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Clear the form fields
          setTimeout(() => setIsSent(false), 3000); // Hide pop-up after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {isSent && (
        <div className="fixed top-10 right-10 bg-white text-green px-4 py-5 rounded shadow-lg z-50">
          Message Sent Successfully!
        </div>
      )}

      <div className="relative top-[10rem] flex gap-20 mx-20  mb-56  ipad:block sr:mx-3">
        <div className="ipad:mb-16 sr:px-10">
          <h1 className="font-bold text-3xl text-[#0D333E] mb-2 whitespace-nowrap">
            Get In Touch
          </h1>
          <p className="whitespace-nowrap mb-6">Send us a message</p>
          <p className="">
            Have a question or need assistance? Fill out our contact form, and
            our team will get back to you promptly
          </p>

          <form action="" ref={form} onSubmit={sendEmail} className="mt-10">
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 xsm:block">
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
                className="border-b-2 border-black focus:no-underline focus:outline-none h-[5rem] w-[200%] placeholder-[#0D333E] xsm:w-full"
              ></textarea>
            </div>
            <div className="flex items-center justify-end xsm:justify-center ipad:justify-center">
              <input
                type="submit"
                value="Send"
                className="cursor-pointer bg-[#0D333E] text-white px-16 py-2 mt-5 flex rounded-[5px]"
              />
            </div>
          </form>
        </div>

        {/* *******************LOCATION************************ */}
        <div className="border-l-[1px] border-black pl-10 sr:px-10">
          <h1 className="mb-5 font-semibold">Call Us</h1>
          <p className="mb-5">
            Want to speak directly with our support team? Give us a call at the
            number below, and we'll be happy to help
          </p>
          <span className="flex mb-10">
            <img src={phoneicon} alt="" />
            <a href="tel:+234-708-676-8271">+234-708-676-8271</a>
          </span>
          <h1 className="mb-5">Visit Us</h1>
          <p>
            Want to stop by for a face-to-face consultation? Find us at the
            address below, and let's discuss how we can support your business
          </p>
          <h2 className="mt-5 font-bold text-center">23, Avenue Road, TX</h2>
        </div>
      </div>
      <Map />
     
      <Footer />
    </>
  );
};
