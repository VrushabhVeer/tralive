"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import logo from "@/assets/logo.png.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white px-4 md:px-12 sticky top-0 z-50">
        <div className="flex py-4 items-center justify-between">
          <button className="md:hidden lg:hidden" onClick={handleToggle}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <div className="font-semibold text-2xl">
            <Image className="w-[110px]" src={logo} alt="logo" loading="lazy" />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-[#020955]">
            <p>Home</p>
            <p>Events</p>
            <p>About</p>
            <p>Blogs</p>
            <p>Contact</p>
            <button className="bg-[#ffc729] hover:bg-[#e7b220] text-white font-medium px-8 py-2 rounded-full">+91 9078654323</button>
          </div>
        </div>

        {isOpen ? (
          <div className="pb-5 pt-5 md:hidden">
            <div className="flex flex-col space-y-5 ml-2">
              <p>Events</p>
              <p>About</p>
              <p>Blogs</p>
              <p>Contact</p>
              <button></button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
