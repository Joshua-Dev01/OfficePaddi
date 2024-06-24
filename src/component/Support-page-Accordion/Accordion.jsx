import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className=''>
    <div className="border-b border-gray-400">
      <button
        className="w-full p-4 flex justify-between gap-10 items-center text-left focus:border-none"
        onClick={toggleAccordion}
      >
        <span className="font-semibold text-lg">{title}</span>
        <span className={`transform transition-transform ${isOpen ? '' : ''}`}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
    </div>
    </>
  );
};

export default Accordion;
