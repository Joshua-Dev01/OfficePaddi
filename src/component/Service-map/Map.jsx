import React from "react";
const Map = () => {
  
  return (
    <>
      <div className="flex items-center justify-center mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8403916067423!2d6.786660974246248!3d6.152125127369108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104393c4ce0fc0d7%3A0x94236a312aec156d!2sDMGS%20Onitsha!5e0!3m2!1sen!2sng!4v1714659375934!5m2!1sen!2sng"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-[80%] mx-10 h-[450px] shadow-lg"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
