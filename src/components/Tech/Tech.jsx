import React from "react";

const Tech = () => {
  return (
    <div className="container p-4 flex flex-col items-center">
      <h1 className="font-bold text-3xl text-center my-3 text-[#42446E]">
        My Tech Arsenal
      </h1>
      <p className="text-center text-[#42446E]">
        The powerful technologies I wield to create digital wonders.
      </p>
      <div className="grid grid-cols-3 w-full md:grid-cols-6 gap-10 mt-10 md:max-w-4xl">
        <img
          className="w-16"
          src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
        />
        <img
          className="w-16"
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
        />
        <img
          className="w-16"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        />
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <img
          className="w-16"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
        />
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        />
        <img
          className="w-16"
          src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
        />
        <img
          className="w-16"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
        />
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        />
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        />
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
        />
      </div>
    </div>
  );
};

export default Tech;
