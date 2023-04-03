import React from "react";
import Navbar from "../Navbar/Navbar";
import afrede from "../../images/afrede1.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="container h-screen flex flex-col md:flex-row justify-evenly items-center p-4">
        <div className="text-4xl font-bold text-[#42446E] leading-tight md:text-5xl">
          <p className="text-center md:text-left tracking-[-1px]">
            Hi 👋,
            <br />
            My name is <br />
            <span className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
              Afrede Hossain
            </span>
            <br />I am a full stack web developer
          </p>
        </div>
        <div className="w-60 p-2 rounded-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          <img className="w-full rounded-full" src={afrede} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
