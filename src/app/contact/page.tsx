import Image from "next/image";
import React from "react";
import whatsapp from "@/assets/whatsapp.png";
import telegram from "@/assets/telegram.png";
import phone from "@/assets/call.png";
import address from "@/assets/address.png"
import email from "@/assets/mail.png"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10 mb-20">
      <div>
        <h1 className="text-4xl font-bold mb-1">Contact Us</h1>
        <p>Get in touch and let us know how we can help.</p>
      </div>

      <div className="w-full flex justify-between flex-col md:flex-col lg:flex-row gap-10 md:gap-20 mt-8">
        <div className="w-full">
          <div className="flex gap-5 flex-row items-center">
            <div className="w-full">
              <input
                className="w-full rounded-md py-3 px-4 border border-zinc-400"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full rounded-md py-3 px-4 border border-zinc-400"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mt-5">
            <input
              className="w-full rounded-md py-3 px-4 border border-zinc-400"
              type="number"
              placeholder="Mobile Number"
            />
          </div>
          <div className="mt-5">
            <input
              className="w-full rounded-md py-3 px-4 border border-zinc-400"
              type="email"
              placeholder="Email addresss"
            />
          </div>
          <div className="mt-5">
            <textarea
              className="w-full rounded-md py-3 px-4 border border-zinc-400 h-36"
              placeholder="Leave us message"
            />
          </div>

          <button className="w-full py-3 bg-black text-white rounded-md font-medium transform hover:-translate-y-1 transition duration-400 mt-8">
            Submit
          </button>
        </div>

        <div className="w-full flex flex-wrap gap-5">
          <div className="w-full">
            <h2 className="text-xl font-bold">Call Us</h2>
            <p className="mt-2">Call our team Mon-Fri from 9am to 10pm</p>

            <div className="flex items-center gap-3 mt-2">
              <Image className="w-3 mt-1" src={phone} alt="phone" loading="lazy" />
              <p>+91 9078654323</p>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-xl font-bold">Visit Us</h2>
            <p className="mt-2">Our head office address</p>

            <div className="flex items-center gap-3 mt-2">
              <Image className="w-4" src={address} alt="address" loading="lazy" />
              <p>203 lake St. Mountain View, San Francisco, California, USA</p>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <Image className="w-4 mt-1" src={email} alt="email" loading="lazy" />
              <p>info@tralive.com</p>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-xl font-bold">Chat With Us</h2>
            <p className="mt-2">Speak to our friendly team via live chat.</p>
            <div className="mt-4 flex gap-5 flex-row items-center">
              <div className="w-6">
                <Image
                  className="w-full"
                  src={whatsapp}
                  alt="whatsapp"
                  loading="lazy"
                />
              </div>
              <div className="w-6">
                <Image
                  className="w-full"
                  src={telegram}
                  alt="telegram"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
