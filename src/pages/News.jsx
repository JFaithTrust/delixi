import React from "react";
import { NewsLeft, NewsRight } from "../components";

const News = () => {
  return (
    <div className="flex flex-col top-[78px] w-full relative">
      <NewsLeft />
      <NewsRight />
    </div>
  );
};

export default News;
