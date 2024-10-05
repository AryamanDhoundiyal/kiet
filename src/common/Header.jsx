import React, { useEffect, useState } from "react";
import email from "../assets/images/email.png";
import cross from "../assets/images/cross.png";
import "./commonStyles.css";
import { Link } from "react-router-dom";

const Header = ({ route }) => {
  const [localTime, setLocalTime] = useState("00:00:00");
  let interval;

  function printLiveLocalTime() {
    // Create a function to format the time as HH:MM:SS
    function formatTime() {
      const date = new Date();
      let hours = date.getHours().toString().padStart(2, "0");
      let minutes = date.getMinutes().toString().padStart(2, "0");
      let seconds = date.getSeconds().toString().padStart(2, "0");
      setLocalTime(`${hours}:${minutes}:${seconds}`);
    }

    // Update the time every second
    interval = setInterval(formatTime, 1000);
  }

  useEffect(() => {
    printLiveLocalTime();
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className={`flex justify-between p-[2rem] text-[white] bg-[black] items-center h-[15vh] flex-wrap border-[gray] font-instrument text-xl f font-semibold  ${
        route === "/navbar" ? "pt-[4rem]" : "border-b-[0.1px]"
      }`}
    >
      <p>
        <span className="text-[grey]">
          <Link
            className=" mail-icon hover:opacity-[0.5] cursor-pointer"
            to="/"
          >
            LOCAL
          </Link>
        </span>{" "}
        / {route === "/navbar" ? `24° 30' 0.0000" N` : localTime}
      </p>
      <div className="flex flex-col items-center justify-center">
        {route !== "/navbar" ? (
          <>
            <span className="text-[grey]">Register Here</span>
            <Link to="/contacts">
              <img
                src={email}
                alt="email"
                className="h-[2rem] w-[2rem] mail-icon cursor-pointer"
              />
            </Link>
          </>
        ) : (
          <Link to="/">
            <img
              src={cross}
              alt="cross"
              className="h-[2rem] w-[2rem] mail-icon cursor-pointer"
            />
          </Link>
        )}
      </div>
      <Link
        className="navigate rounded-[2rem] border-[2px] border-white p-[0.7rem]"
        to="/navbar"
      >
        {route === "/navbar" ? (
          <Link to="/contacts">SCHEDULE A CALL</Link>
        ) : (
          " NAVIGATE HERE"
        )}
      </Link>
    </div>
  );
};

export default Header;
