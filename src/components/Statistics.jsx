import React from "react";
import { statistics } from "../constants";

const Statistics = () => {
  return (
    <div className="flex flex-col mt-10">
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        quibusdam magnam ex maxime, autem nobis sint, atque dolor sunt quos{" "}
        <br />
        ipsum deleniti blanditiis aspernatur iusto aliquid eum deserunt et.
        Totam?
      </p>
      <div className="flex justify-between mt-10">
        {statistics.map((item) => (
          <div className="flex flex-col py-4 px-8 bg-red-600 text-white space-y-1 items-center rounded-2xl">
            <p className="text-4xl">{`${item.count}+`}</p>
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
