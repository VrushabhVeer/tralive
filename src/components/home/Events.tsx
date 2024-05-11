"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import turkey from "@/assets/turkey.png";
import japan from "@/assets/japan.png";
import egypt from "@/assets/egypt.png";
import australia from "@/assets/australia.png";
import thailand from "@/assets/thailand.png";

const Events = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <div className="text-center mb-8">
        <p>Check Our Best Promotional Tour</p>
        <h1 className="text-4xl font-bold mt-1">Upcomming Events</h1>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Events;

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1505783638529-f3fdc62e1bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Turkey",
    flag: turkey,
    date: "6 days - 6 nights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Japan",
    flag: japan,
    date: "6 days - 6 nights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600520611035-84157ad4084d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Egypt",
    flag: egypt,
    date: "6 days - 6 nights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Australia",
    flag: australia,
    date: "6 days - 6 nights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Thailand",
    flag: thailand,
    date: "6 days - 6 nights",
  },
];
