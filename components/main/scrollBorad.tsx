"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mb-0 ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  dark:text-white text-white">
              Ideas Breathe, <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Interfaces Speak
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
