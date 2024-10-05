import React from "react";
import { useState } from "react";
import ToggleSwitch from "./Toggle.jsx";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="bg-[black] text-[white] items-center overflow-x-hidden">
      <div className="text-[gray] text-center font-inter-tight  flex flex-col items-center justify-center font-semibold ">
        <span className="mt-[10rem] mb-[1rem]  text-[1rem] ">POWER UP</span>
      </div>
      <div className="text-center font-instrument text-[9rem] font-semibold flex flex-col items-center justify-center leading-[8rem] tracking-[-0.4rem] mt-2">
        <span>MEMBERSHIP</span>
        <span>PLANS</span>
      </div>
      <div className="flex items-center justify-center mt-8">
        <ToggleSwitch isChecked={isChecked} toggleSwitch={toggleSwitch} />
      </div>
    </div>
  );
};

export default Pricing;
