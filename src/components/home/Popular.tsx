import Image from "next/image";
import React from "react";
import location from "@/assets/location.png";
import gokarna from "@/assets/gokarna.jpg";
import varanasi from "@/assets/varanasi.jpg";
import munnar from "@/assets/munnar.jpg";
import kaziranga from "@/assets/kaziranga.jpg";

const Popular = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="text-center">
        <p>Best Regional Tours</p>
        <h1 className="text-4xl font-bold mt-1">Popular India</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-t-md"
              src={gokarna}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Gokarna</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Karnataka</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-t-md"
              src={munnar}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Munnar</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Kerala</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-t-md"
              src={varanasi}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Varanasi</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-t-md"
              src={kaziranga}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Kaziranga</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Assam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
