import React from "react";
import "./commonStyles.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="w-[45%]  rounded-[1rem] border-[Gray]">
      <Link to={data.path}>
        <img
          src={data.img}
          alt="card-img"
          className="rounded-t-[1rem] h-[30rem] card-image"
        />
      </Link>
      <p className="font-instrument text-[2rem] bg-[#0a0a0a] p-[1rem] pl-[2rem] rounded-b-[1rem] border-[Gray] border-b-[1px]">
        <Link to={data.path}>{data.title}</Link>
      </p>
    </div>
  );
};

export default Card;
