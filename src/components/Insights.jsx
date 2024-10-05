import React, { useEffect } from "react";
import insights from "../assets/images/Insights.jpg";
import Carousel from "./Carousel";
import CardComponent from "./CardComponent";
import CardContent from "./CardContent";
import books from "../assets/images/Books.jpg";
import articles from "../assets/images/Articles.jpg";

const slides = [insights, insights, insights, insights, insights, insights];
const cards = [
  { img: books, title: "Books", path: "/books" },
  { img: articles, title: "Articles", path: "/articles" },
];

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on component mount
  }, []);
  const GuidedData = [
    {
      title: "Guided Insights",
      content:
        "Development optimizes the website's performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings",
    },
    {
      title: "Guided Insights",
      content:
        "Development optimizes the website's performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings",
    },
    {
      title: "Guided Insights",
      content:
        "Development optimizes the website's performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings",
    },
    {
      title: "Guided Insights",
      content:
        "Development optimizes the website's performance by optimizing code, reducing file sizes, and improving loading times. A fast-loading website enhances user experience, reduces bounce rates, and improves search engine rankings",
    },
  ];
  return (
    <div className="bg-[black] text-[white]">
      <div className="flex items-center text-center py-[5rem] px-[3rem]">
        <div className="flex flex-col text-[white] text-[1.5rem] font-inter-tight  leading-[rem] tracking-tight ">
          <p className="text-[4rem] font-semibold">GUIDED INSIGHTS</p>
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
        <CardContent data={GuidedData} />
      </div>{" "}
      <div className="py-5">
        <CardComponent cards={cards} />
      </div>
    </div>
  );
};

export default Insights;
