import Image from "next/image";
import React from "react";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import youtube from "@/assets/youtube.png";
import twitterX from "@/assets/twitterX.png";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="w-10/12 mx-auto py-10 md:py-16 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <span>Company</span>
            <div className="text-sm mt-3">
              <p>Blog</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="flex flex-col">
            <span>Support</span>
            <div className="text-sm mt-3">
              <p>Help Center</p>
              <p>Safety Center</p>
              <p>Community Guidelines</p>
            </div>
          </div>

          <div className="flex flex-col">
            <span>Address</span>
            <div className="text-sm mt-3">
              <p>203 lake St. Mountain View, San Francisco, California, USA</p>
              <p>+12 392 3929 210</p>
              <p>info@yourdomain.com</p>
            </div>
          </div>

          <div className="flex flex-col">
            <span>Follow us</span>
            <div className="flex items-center space-x-4 mt-3">
              <div>
                <Image className="w-5" src={facebook} alt="facebook" />
              </div>
              <div>
                <Image className="w-5" src={instagram} alt="instagram" />
              </div>
              <div>
                <Image className="w-5" src={youtube} alt="youtube" />
              </div>
              <div>
                <Image className="w-6" src={twitterX} alt="twitterX" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-gray-700 text-center">
        <p className="text-xs">© 2024, Made by Vrushabh Veer.</p>
      </div>
    </div>
  );
}
