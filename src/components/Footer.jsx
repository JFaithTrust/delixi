import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="container mx-auto flex gap-10 py-10">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          <div className="p-6 bg-white rounded-lg">
            <img src={logo} alt="" />
          </div>
          <p className="text-2xl font-bold">
            <span className="text-white">Delixi</span> Electric
          </p>
        </div>
        <p className="text-sm text-white">
          Thank you for the fastest service ever, I liked how everything in the
          house was ready on time in the house was ready on time.
        </p>
      </div>
      <div className="flex border-l-2 border-white">
        <div className="flex flex-col">
          <h1>Mahsulot turlari</h1>
          <div></div>
        </div>
        <div className="flex flex-col">
          <h1>Nav Menu</h1>
          <div></div>
        </div>
        <div className="flex flex-col">
          <h1>Biz bilan bog'lanish</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
