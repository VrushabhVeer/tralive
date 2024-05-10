import Image from "next/image";
import React from "react";
import newyork from "@/assets/flight-booking-cuate.png";
import planning from "@/assets/writing.png";
import explore from "@/assets/traveling.png";
import trip from "@/assets/sunbed.png";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div className="w-11/12 md:w-11/12 mx-auto mt-10 mb-20">
      <div className="w-11/12 md:w-10/12 mx-auto flex items-center justify-between flex-col md:flex-col lg:flex-row gap-10 md:gap-20 mt-8">
        <div className="w-full">
          <Image
            className="w-ull"
            src={newyork}
            alt="new-york"
            loading="lazy"
          />
        </div>
        <div className="w-full">
          <p>About Us</p>
          <h1 className="text-4xl font-bold mt-1">Travel Around the world</h1>
          <p className="mt-4">
            At Tralive, we are passionate about crafting unforgettable travel
            experiences for every adventurer. Our mission is simple yet
            powerful: to inspire, enable, and empower you to explore the world
            in all its beauty and diversity.
          </p>
          <p className="mt-2">
            What sets us apart is our commitment to personalized service and
            attention to detail. From dreamy beach getaways to thrilling urban
            escapades, we curate journeys that cater to your unique preferences
            and interests. Our team of travel experts meticulously handpicks the
            best destinations, accommodations, and activities, ensuring that
            every moment of your trip is filled with wonder and delight.
          </p>

          <button className="px-10 py-3 bg-black text-white rounded-full font-medium transform hover:-translate-y-1 transition duration-400 mt-8">
            Book Your Destination
          </button>
        </div>
      </div>

      <div className="w-10/12 mx-auto mt-20 md:mt-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1">Top Value for you</h1>
          <p>Try veriety of benefits servises when using our servises.</p>
        </div>

        <div className="flex items-center justify-between flex-col md:flex-col lg:flex-row gap-8 md:gap-10 mt-8">
          <div className="p-6 border rounded-md">
            <div className="flex items-center justify-center">
              <Image
                className="w-16"
                src={planning}
                alt="planning"
                loading="lazy"
              />
            </div>

            <div className="text-center mt-5">
              <h2 className="font-semibold text-xl">Plan a trip</h2>
              <p className="mt-2">
                Whether you are a seasoned globetrotter or embarking on your
                first voyage, we are here to make your travel dreams a reality.
                Let us take care of the logistics so you can focus on creating
                priceless memories that last a lifetime.{" "}
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-md">
            <div className="flex items-center justify-center">
              <Image
                className="w-16"
                src={explore}
                alt="exploring"
                loading="lazy"
              />
            </div>

            <div className="text-center mt-5">
              <h2 className="font-semibold text-xl">Explore and save</h2>
              <p className="mt-2">
                Whether you are a seasoned globetrotter or embarking on your
                first voyage, we are here to make your travel dreams a reality.
                Let us take care of the logistics so you can focus on creating
                priceless memories that last a lifetime.{" "}
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-md">
            <div className="flex items-center justify-center">
              <Image className="w-16" src={trip} alt="trip" loading="lazy" />
            </div>

            <div className="text-center mt-5">
              <h2 className="font-semibold text-xl">Enjoy your trip</h2>
              <p className="mt-2">
                Whether you are a seasoned globetrotter or embarking on your
                first voyage, we are here to make your travel dreams a reality.
                Let us take care of the logistics so you can focus on creating
                priceless memories that last a lifetime.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
