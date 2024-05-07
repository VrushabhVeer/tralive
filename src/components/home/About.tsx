import Image from "next/image";
import React from "react";
import girl from "@/assets/traveling-cuate.png";

const About = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10 flex items-center justify-between flex-col md:flex-row gap-10 md:gap-20">
      <div className="w-full">
        <Image
          className="w-ull"
          src={girl}
          alt="traveling-girl"
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <p>About Us</p>
        <h1 className="text-4xl font-bold mt-1">
          Get ready for real time adventure
        </h1>
        <p className="mt-4">
          Tralive is more than just a travel agency; we are a team of explorers,
          dreamers, and adventurers who believe that the world is meant to be
          explored. With our expertise and dedication, we strive to provide you
          with the most authentic and exhilarating experiences possible.
        </p>

        <button className="bg-black rounded-full w-fit text-white px-10 py-3 mt-8">
          Book Your Destination
        </button>
      </div>
    </div>
  );
};

export default About;
