import React from "react";
import Card from "../common/Card";

const CardComponent = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-[2rem] justify-center items-center mt-[5rem]">
      {cards.map((cardData) => (
        <Card data={cardData} />
      ))}
    </div>
  );
};

export default CardComponent;
