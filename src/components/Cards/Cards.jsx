import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="w-full mt-16">
      <h1 className="font-bold text-3xl text-center my-3 text-[#42446E]">
        Adventures in Code
      </h1>
      <p className="text-center text-[#42446E]">
        A journey through my most exciting web development projects
      </p>
      <div className="w-fit mt-10 mx-auto p-4 grid grid-cols-3 gap-10 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
