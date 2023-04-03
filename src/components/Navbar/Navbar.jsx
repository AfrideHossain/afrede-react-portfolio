import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container max-h-16 flex items-center justify-evenly p-4">
      <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
        Afrede
        <br />
        Hossain
      </h1>
      <div className="flex justify-between items-center gap-10">
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
