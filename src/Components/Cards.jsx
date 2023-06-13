import React from "react";
import first from "../images/image-retro-pcs.jpg";
import second from "../images/image-top-laptops.jpg";
import third from "../images/image-gaming-growth.jpg";
const Cards = () => {
  return (
    <div className="container mx-auto py-12 flex ">
      <ul className="md:flex md:gap-x-16 ">
        <li className="flex grid-cols-2 gap-x-5  ">
          <div className="left-part ">
            <img src={first} alt="" className="w-28" />
          </div>
          <div className="right-part flex flex-col mx-auto text-left">
            <h2 className="text-2xl text-[#C5C6CE]">01</h2>
            <h4 className="font-bold">Reviving Retro PCs</h4>
            <p className="text-sm">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </li>
        <li className="flex grid-cols-2 gap-x-5">
          <div className="left-part ">
            <img src={second} alt="" className="w-28" />
          </div>
          <div className="right-part flex flex-col mx-auto text-left">
            <h2 className="text-2xl text-[#C5C6CE]">02</h2>
            <h4 className="font-bold">Top 10 Laptops of 2022</h4>
            <p className="text-sm">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </li>
        <li className="flex grid-cols-2 gap-x-5">
          <div className="left-part ">
            <img src={third} alt="" className="w-28" />
          </div>
          <div className="right-part flex flex-col mx-auto text-left">
            <h2 className="text-2xl text-[#C5C6CE]">03</h2>
            <h4 className="font-bold">The Growth of Gaming</h4>
            <p className="text-sm">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
