import React from "react";
import { About, Catalog, Comunity, Slider } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Slider />
      </div>
      <div className="container mx-auto px-20">
        <About />
      </div>
      <div className="container mx-auto px-20">
        <Comunity />
      </div>
      <div className="bg-red-100 px-20 my-10">
        <Catalog />
      </div>
    </div>
  );
};

export default Home;
