import React, { useState } from "react";
import cross from "../assets/images/plus.png";

const Dropdown = ({ label, content, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-[1rem]">
      <button
        onClick={toggleDropdown}
        className={` border border-white border-opacity-[0.2]  bg- 
           [transparent] rounded-lg text-[1.4rem] px-5 py-2.5 
            text-center inline-flex items-center  w-[90%] h-[5rem] font-semibold text-[white] font-instrument ${className}`}
        type="button"
      >
        <div className="flex justify-between items-center w-[100%]">
          {label}
          <img
            src={cross}
            alt=""
            className={`h-[2rem] w-[2rem] ${isOpen ? "rotate-[45deg]" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 w-[90%] bg-[transparent] text-[gray] opacity-[0.6]">
          <ul className="py-2 text-[1.2rem]  dark:text-gray-200 bg-[black] border border-[white] border-opacity-[0.1] rounded-lg  ">
            {content.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2  dark:hover:text-white bg-[transparent]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
