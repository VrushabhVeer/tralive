import Image from "next/image";
import React from "react";
import service from "@/assets/service-cuate.png";

const Service = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20 md:mt-40">
      <div className="text-center">
        <p>FAQ</p>
        <h1 className="text-4xl font-bold mt-1">
          Full range of travel service
        </h1>
      </div>
      <div className="w-full mt-8 flex items-center justify-between flex-col md:flex-row gap-10 md:gap-20">
        <div className="w-full">



        </div>
        <div className="w-full">
          <Image
            className="w-full"
            src={service}
            alt="traveling-girl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
