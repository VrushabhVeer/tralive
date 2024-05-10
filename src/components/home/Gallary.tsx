"use client";
import Image from "next/image";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import image8 from "@/assets/image8.jpg";

export function Gallary() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-20">
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image1}
          alt="image1"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image2}
          alt="image2"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image3}
          alt="image3"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image4}
          alt="image4"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image5}
          alt="image5"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image6}
          alt="image6"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image7}
          alt="image7"
          loading="lazy"
        />
      </div>
      <div>
        <Image
          className="w-full h-56 object-cover"
          src={image8}
          alt="image8"
          loading="lazy"
        />
      </div>
    </div>
  );
}
