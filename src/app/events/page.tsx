import Image from "next/image";
import React from "react";
import darjeeling from "@/assets/darjeeling.jpg";
import ladakh from "@/assets/ladakh.jpg";
import hampi from "@/assets/humpi.jpg";
import konkan from "@/assets/konkan.jpg";
import tadoba from "@/assets/tadoba.jpg";
import ooty from "@/assets/ooty.jpg";
import jaisalmer from "@/assets/jaisalmer.jpg";
import jaipur from "@/assets/jaipur.jpg";
import location from "@/assets/location.png";

const page = () => {
  return (
    <div className="w-11/12 md:w-11/12 mx-auto mt-10 mb-20">
      <div>
        <h1 className="text-4xl font-bold mb-1">Upcomming India</h1>
        <p>Our upcomming india tours</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-10">
        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={darjeeling}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Darjeeling</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>West Bengal</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={ladakh}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Ladakh</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Ladakh</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={jaisalmer}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Jaisalmer</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Rajstan</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={tadoba}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Tadoba</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={jaipur}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Jaisalmer</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Rajstan</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={hampi}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Hampi</h2>
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
              className="w-full object-cover h-56 rounded-md"
              src={konkan}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Konkan</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="relative">
            <Image
              className="w-full object-cover h-56 rounded-md"
              src={ooty}
              alt="tour-image"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-2 text-sm font-semibold rounded-full bg-white">
              ₹ 50,000
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">Ooty</h2>
              <p className="font-medium">6 days</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Image
                className="w-5"
                src={location}
                alt="location-icon"
                loading="lazy"
              />
              <p>Tamilnadu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
