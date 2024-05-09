"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import logo from "@/assets/logo.png.webp";
import phone from "@/assets/phone.png";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledUp = window.scrollY > 0;
      setScrollUp(isScrolledUp);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-white px-4 md:px-12 sticky top-0 z-50 ${
          scrollUp ? "shadow-md" : ""
        }`}
      >
        <div className="flex flex-row-reverse md:flex-row-reverse lg:flex-row py-4 items-center justify-between">
          <button className="lg:hidden" onClick={handleToggle}>
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
            <Link href="/">
              <Image
                className="w-[110px]"
                src={logo}
                alt="logo"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="hidden md:hidden lg:flex items-center space-x-8">
            <Link href="/">
              <p>Home</p>{" "}
            </Link>
            <Link href="events">
              <p>Events</p>{" "}
            </Link>
            <Link href="about">
              <p>About</p>{" "}
            </Link>
            <Link href="/blogs">
              <p>Blogs</p>{" "}
            </Link>
            <Link href="/contact">
              <p>Contact</p>{" "}
            </Link>
            <button className="flex items-center gap-2 bg-[#ffc729] text-sm text-white font-semibold px-6 py-2 rounded-full">
              <Image className="w-4" src={phone} alt="phone" loading="lazy" />{" "}
              +91 9078654323
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="pb-5 pt-5 lg:hidden">
            <div className="flex flex-col space-y-5 ml-2">
              <Link href="/events">
                <p>Events</p>{" "}
              </Link>
              <Link href="/about">
                <p>About</p>{" "}
              </Link>
              <Link href="/blogs">
                <p>Blogs</p>{" "}
              </Link>
              <Link href="contact">
                <p>Contact</p>{" "}
              </Link>
              <div>
                <button className="flex items-center gap-2 bg-[#ffc729] text-sm text-white font-semibold px-6 py-2 rounded-full">
                  <Image
                    className="w-4"
                    src={phone}
                    alt="phone"
                    loading="lazy"
                  />{" "}
                  +91 9078654323
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
