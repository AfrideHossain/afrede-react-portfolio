import React from "react";

const Footer = () => {
  return (
    <div className="container divide-y mt-6 py-6 md:px-20 px-4">
      <div className="flex flex-col md:flex-row justify-evenly md:items-center py-4 px-4">
        <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Afrede
          <br />
          Hossain
        </h1>
        <div className="flex flex-col md:flex-row md:gap-12 gap-6 md:items-center md:ms-auto">
          <div className="flex flex-col md:flex-row text-[#666666] font-medium md:gap-8">
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
      <div className="container flex flex-col md:gap-0 gap-5 md:flex-row justify-between md:items-center py-8 px-4">
        <ul className="list-none flex md:flex-row flex-col md:gap-8 gap-4 text-[#666666] font-medium">
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
          Designed by{" "}
          <a
            href=""
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] from-[-40%] to-[#E70FAA]"
          >
            Pavan MG
          </a>{" "}
          and crafted with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] from-[-60%] to-[#E70FAA]">
            Love
          </span>{" "}
          &{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] from-[-80%] to-[#E70FAA]">
            Caffeine
          </span>{" "}
          by Afrede.
        </p>
      </div>
    </div>
  );
};

export default Footer;
