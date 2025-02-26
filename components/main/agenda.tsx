"use client";

import Carousel from "@/components/ui/carousel";
import React from "react";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Idea Pitch & Feasibility Discussion",
      button: "Students pitch their startup ideas.\nWe analyze feasibility, market potential, and execution strategy.",
      src: "/phase_1.jpeg",
    },
    {
      title: "Development Phase",
      button: "Software: Website or app development begins \nHardware: Prototype creation and testing start.",
      src: "/phase_2.jpg",
    },
    {
      title: "Optimization & Marketing",
      button: "Software: Enhancing functionality, UI/UX, and performance.\nHardware: Improving design, efficiency, and production feasibility",
      src: "/phase_3.jpg",
    },
    {
      title: "Legal Protection & Rights",
      button: "Software: Securing trademarks, patents, and intellectual property rights\nHardware: Filing for design patents and ownership rights.",
      src: "/phase_4.png",
    },
  ];

  return (
    <div id="GamePlan" className="relative overflow-hidden w-full h-full py-20 z-20 -translate-y-64 md:-translate-y-3/4">
      <Carousel slides={slideData} />
    </div>
  );
}
