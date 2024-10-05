import React from "react";
import { Link } from "react-router-dom";

const CardContent = ({ data }) => {
  return (
    <div>
      {data.map((cardData) => (
        <div className="flex flex-wrap pt-[6rem] px-[5rem] bg-[black] text-[white] text-[1rem]">
          <div className="flex flex-col text-[white] text-[2rem] font-inter-tight font-semibold w-[50%] leading-[6rem] tracking-tight ">
            {cardData.title}
          </div>
          <div className="flex flex-col text-[white] text-[1.5rem] font-inter-tight  opacity-[0.8] w-[50%]">
            {cardData.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContent;
