import React, { useEffect } from "react";
import CardContent from "./CardContent";
import Carousel from "./Carousel";
import magazine from "../assets/images/magazine.jpg";
import CardComponent from "./CardComponent";
import story from "../assets/images/SuccessStory.jpg";
import insights from "../assets/images/Insights.jpg";

const slides = [magazine, magazine, magazine, magazine, magazine, magazine];
const cards = [
  { img: story, title: "Success stories", path: "/success" },
  { img: insights, title: "Guided Insights", path: "/insights" },
];
const Magazine = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on component mount
  }, []);
  const magazineContent = [
    {
      title: "Research",
      content:
        "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites",
    },
    {
      title: "Research",
      content:
        "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites",
    },
    {
      title: "Research",
      content:
        "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites",
    },
    {
      title: "Research",
      content:
        "Informing decision-making: Research provides data and evidence to support design decisions. It helps designers make informed choices about layout, color schemes, typography, and other design elements, leading to more effective and user-friendly websites",
    },
  ];
  return (
    <div className="bg-[black] text-white">
      <div className="flex items-center text-center py-[5rem] px-[3rem]">
        <div className="flex flex-col text-[white] text-[1.5rem] font-inter-tight  leading-[rem] tracking-tight ">
          <p className="text-[4rem] font-semibold">MAGAZINES</p>
          <p className="text-[gray] px-[8rem]">
            Step inside a Lightric Motors vehicle and experience the perfect
            fusion of luxury and efficiency. Our interiors are meticulously
            crafted with premium materials and cutting-edge technology to create
            driving experience.
          </p>
        </div>
      </div>
      <div className="py-[4rem]">
        <Carousel slides={slides} />
      </div>
      <div>
        <CardContent data={magazineContent} />
      </div>
      <div className="py-5">
        <CardComponent cards={cards} />
      </div>
    </div>
  );
};

export default Magazine;
