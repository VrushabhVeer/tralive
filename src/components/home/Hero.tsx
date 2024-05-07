"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center w-11/12 md:w-7/12 text-center"
      >
        <div className="text-3xl md:text-6xl font-bold text-center">
          Lifelong memorise just a few steps away
        </div>
        <div className="text-base py-4">
          Unleash your wanderlust and immerse yourself in unforgettable
          adventures with Tralive. From iconic landmarks to hidden gems, our
          curated selection of destinations promises to ignite your passion for
          exploration.
        </div>
        <button className="px-10 py-3 bg-black text-white rounded-full font-medium transform hover:-translate-y-1 transition duration-400">
          Explore now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
