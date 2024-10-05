import React, { useState } from "react";
import magazine from "../assets/images/magazine.jpg";
import "./Component.css";
import icon from "../assets/images/top-right.png";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/contacts", formData)
      .then((response) => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <div>
      <div className="flex flex-wrap bg-[black]">
        <div className="bg-[black] text-[white] w-[50%] p-[2rem] mt-[2rem] font-instrument text-[1.5rem] font-bold">
          <p className="text-[3rem] font-semibold">SAY HELLO!</p>
          <br />
          <p className="text-[1.5rem] text-[gray] font-bold">
            Welcome to 1Day to Day1, your destination for inspiring
            entrepreneurial journeys. We're passionate about sharing stories of
            resilience, innovation, and triumph that define success in the
            business world. Expect to hear from one of our dedicated team
            members soon!
          </p>
          <br />
          FILL THIS FORM OUT
          <br />
          <br />
          <form
            className="w-[100%] font-normal flex flex-col gap-[1rem] rounded-xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              required
              maxLength="80"
              className="bg-[#0f0f0f] pl-[1rem] h-[3rem] text-[white] rounded-xl custom-input items-center inputBox"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              required
              maxLength="80"
              className="bg-[#0f0f0f] pl-[1rem] h-[6rem] rounded-xl inputBox"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <PhoneInput
              defaultCountry="in"
              placeholder="Number*"
              required
              value={formData.phone}
              onChange={handlePhoneChange}
            />
            <textarea
              maxLength="80"
              className="bg-[#0f0f0f] pl-[1rem] h-[9rem] rounded-xl inputBox"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[white] text-[black] w-[100%] h-[4rem] text-[1.2rem] rounded-xl font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="w-[50%] p-[2rem] mt-[2rem]">
          <img src={magazine} className="h-[55rem] rounded-xl" alt="Magazine" />
        </div>
      </div>
      <div className="flex flex-wrap bg-[black] text-[white] px-[4rem] pl-[7rem] pt-[5rem] font-instrument">
        <div className="flex flex-col gap-[1rem] text-[1.2rem] w-[25%] font-semibold leading-[1rem]">
          <h4 className="text-[gray] pb-[1rem] text-[1rem]">SOCIAL</h4>
          <span>FACEBOOK</span>
          <span>INSTAGRAM</span>
          <span>TWITTER</span>
          <span>LINKEDIN</span>
          <span>PINTEREST</span>
          <span>YOUTUBE</span>
        </div>
        <div className="flex flex-col gap-[1rem] text-[1.2rem] w-[25%] font-semibold leading-[1rem]">
          <h1 className="text-[gray] pb-[1rem] text-[1rem]">CURRENT LOCATION</h1>
          <span>UTTAR PRADESH,</span>
          <span>INDIA</span>
        </div>
        <div className="flex flex-col gap-[1rem] text-[1.2rem] w-[25%] font-semibold leading-[1rem]">
          <h1 className="text-[gray] pb-[1rem] text-[1rem]">PHONE</h1>
          <span>+91-7302344754</span>
          <span>+91-7618162404</span>
        </div>
        <div className="flex flex-col gap-[1rem] text-[1.2rem] w-[25%] font-semibold leading-[1rem]">
          <h1 className="text-[gray] pb-[1rem] text-[1rem]">EMAIL</h1>
          <a href="mailto:info@1daytoday1.com" style={{ color: "white" }}>
            info@1daytoday1.com
          </a>
          <a href="mailto:support@1daytoday1.com" style={{ color: "white" }}>
            support@1daytoday1.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
