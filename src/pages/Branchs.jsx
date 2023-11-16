import React from "react";
import { List, Map } from "../components";

const Branchs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full top-[78px] relative h-screen">
      <div className="md:col-span-1 md:h-fit xs:h-[180px] h-[230px]">
        <List className="pb-0 sm:p-20" />
      </div>
      <div className="md:col-span-3 pb-20">
        <Map />
      </div>
    </div>
  );
};

export default Branchs;
