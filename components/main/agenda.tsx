"use client";

import Carousel from "@/components/ui/carousel";
import React from "react";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Idea Pitch & Feasibility Discussion",
      button: "Students pitch their startup ideas.\nWe analyze feasibility, market potential, and execution strategy.",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Development Phase",
      button: "Software: Website or app development begins \nHardware: Prototype creation and testing start.",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Optimization & Marketing",
      button: "Software: Enhancing functionality, UI/UX, and performance.\nHardware: Improving design, efficiency, and production feasibility",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Legal Protection & Rights",
      button: "Software: Securing trademarks, patents, and intellectual property rights\nHardware: Filing for design patents and ownership rights.",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20 z-20 -translate-y-64 md:-translate-y-3/4">
      <Carousel slides={slideData} />
    </div>
  );
}
