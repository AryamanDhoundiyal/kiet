import React from "react";
import "./commonStyles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "../common/Footer";

const Navbar = () => {
  const navbarItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "PRICING", path: "/pricing" },
    { name: "CONTACT", path: "/contacts" },
  ];
  return (
    <div className="h-[74vh] w-[100%] bg-[black] flex items-center justify-center text-[white]">
      <div className=" items-center justify-center flex flex-col font-instrument text-[8rem] font-semibold  mb-[1rem] navbar-menu">
        {navbarItems.map((element) => (
          <Link to={element.path} className="leading-[7rem] cursor-pointer">
            {element.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;

//  window.scrollTo(0, 0);
