import React from "react";
import { example, newsDetail } from "../assets";

const NewsDetail = () => {
  return (
    <div className="top-[78px] relative">
      <img
        src={newsDetail}
        alt=""
        className="w-full object-cover object-center h-[600px]"
      />
      <div className="flex flex-col container mx-auto px-20 py-20">
        <h1 className="text-red-600 font-semibold text-2xl text-center">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>
        <div>
        <img src={example} alt="" className="float-left w-80 h-80" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            saepe aut deleniti non vitae necessitatibus soluta repellat rem ut
            mollitia, molestiae animi numquam vero ab iure magnam nisi fuga
            facilis ducimus nulla eos dolorum ipsum! Aperiam incidunt aut rem
            illo, reprehenderit exercitationem, facere delectus quam natus amet
            blanditiis possimus voluptates quibusdam eos vitae nemo, nobis modi?
            Accusantium veniam reiciendis ex minima eos, similique at ad dolor
            exercitationem nesciunt ipsum amet excepturi possimus voluptates
            ullam repellendus repellat pariatur unde est? Dolor eligendi esse
            quibusdam officia enim tenetur, explicabo odit! Laboriosam id vero
            deleniti rem atque incidunt beatae iste possimus quisquam numquam.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
