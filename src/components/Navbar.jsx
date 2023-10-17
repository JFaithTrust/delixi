import React from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="border-b-2 border-red-600">
      <div className="flex container mx-auto py-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="text-xl font-semibold">Katalog</div>
        </div>
        <div className="flex gap-10 text-xl font-semibold items-center">
          {navLinks.map((item) => (
            <h1 key={item.path}>{item.title}</h1>
          ))}
          <button className="bg-red-500 text-white p-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
