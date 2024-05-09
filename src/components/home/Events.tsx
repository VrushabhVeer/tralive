"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import turkey from "@/assets/turkey.png";
import japan from "@/assets/japan.png";
import europe from "@/assets/european-union.png";
import australia from "@/assets/australia.png";
import thailand from "@/assets/thailand.png";

export function Events() {
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

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1604156788856-2ce5f2171cce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Turkey",
    flag: turkey,
    date: "12 Jan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Japan",
    flag: japan,
    date: "12 May",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Europe",
    flag: europe,
    date: "12 March",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605235904827-2fc511a86dd0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Australia",
    flag: australia,
    date: "12 June",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Thailand",
    flag: thailand,
    date: "12 April",
  },
];
