import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";

const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(false);
  const navToggler = () => {
    if (navtoggle) {
      setNavtoggle(false);
    } else {
      setNavtoggle(true);
    }
  };
  return (
    <nav className="relative container py-4 md:max-h-20 h-fit flex md:flex-row flex-col md:items-center md:justify-evenly justify-between p-4">
      <div className="flex justify-between items-center">
        <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Afrede
          <br />
          Hossain
        </h1>
        <div className="md:hidden" onClick={navToggler}>
          {navtoggle ? (
            <XMarkIcon className="h-6 w-6 text-[#666666]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#666666]" />
          )}
        </div>
      </div>
      <div
        className={`${
          navtoggle ? "flex" : "hidden"
        } md:flex md:flex-row flex-col md:h-auto h-screen justify-center md:justify-between items-center md:gap-10 gap-5`}
      >
        <ul className="list-none h-auto flex md:flex-row flex-col gap-8 text-[#666666] font-medium md:text-left text-center">
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
    </nav>
  );
};

export default Navbar;
