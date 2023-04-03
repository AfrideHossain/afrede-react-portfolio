import React from "react";

const Card = () => {
  return (
    <div className="w-full md:w-80 rounded-xl shadow">
      <img
        className="w-full rounded-t-xl mb-2"
        src="https://img.freepik.com/free-photo/abstract-black-futuristic-background_53876-104058.jpg?w=740&t=st=1680287615~exp=1680288215~hmac=8f6d6cbc29ac1241a16d21398da1f649309a2fddb0dbde1aceaddb3467dc4138"
        alt=""
      />
      <div className="w-full p-4">
        <h1 className="font-medium text-2xl mb-2">Project title</h1>
        <p className="text-gray-500 text-lg font-light mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          obcaecati accusamus mollitia officia in consequuntur veritatis fuga
          deleniti eveniet molestiae!
        </p>
        <p className="text-[#42446E] mb-2 font-light">
          <span className="font-normal">Tech stacks:</span> html, css,
          JavaScript
        </p>
        <div className="flex justify-between text-base">
          <a href="/" className="flex gap-2 items-center">
            <i className="bx bx-link"></i>
            <span className="underline underline-offset-2"> Live Preview</span>
          </a>
          <a href="/" className="flex gap-2 items-center">
            <i className="bx bxl-github"></i>
            <span className="underline underline-offset-2"> View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
