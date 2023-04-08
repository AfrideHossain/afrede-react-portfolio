import React from "react";

const Footer = () => {
  return (
    <div className="container divide-y py-4 px-20">
      <div className="flex flex-col md:flex-row justify-evenly items-center py-4">
        <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Afrede
          <br />
          Hossain
        </h1>
        <div className="flex gap-12 items-center ms-auto">
          <div className="flex text-[#666666] font-medium gap-8">
            <p>+880 17047 60805</p>
            <p>afredehossain@gmail.com</p>
          </div>

          <ul className="list-none flex gap-8 text-3xl text-[#666666]">
            <li className="icon">
              <a href="/" className="bx bxl-github"></a>
            </li>
            <li className="icon">
              <a href="/" className="bx bxl-linkedin"></a>
            </li>
            <li className="icon">
              <a href="/" className="bx bxl-facebook-circle"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center py-4">
        <ul className="list-none flex gap-8 text-[#666666] font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Tech Stack</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <p className="text-[#666666] font-medium">
          Designed by Pavan MG and built by Afrede with Love & Coffee
        </p>
      </div>
    </div>
  );
};

export default Footer;
