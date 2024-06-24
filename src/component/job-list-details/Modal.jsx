import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
    {
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[400px] flex flex-col ">
        <div className="bg-white p-5 rounded">
          {" "}
          <div className="flex items-center justify-between mb-3">
            <p>Add Your Details</p>
          <button
            className="text-black text-3xl font-sans "
            onClick={() => onClose()}
          >
            x
          </button>
          </div>{" "}
          {children}
        </div>
      </div>
    </div>
  );
};
