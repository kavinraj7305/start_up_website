"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import RegisterForm from "@/components/sub/RegisterForm";
import Image from "next/image";

const HeroContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.005 }); // ✅ Triggers when 0.5% is visible
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]); // ✅ Added `mainControls` to dependencies

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start xs:mr-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-6 xs:h-10 xs:w-24 xs:mr-0" />
          <h1 className="welcome-text text-[13px] xs:text-[20px] text-white pr-3">
            RIT INNOVATION
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-4xl xl:text-5xl font-bold text-white max-w-[600px] w-auto h-auto xs:text-xl md:text-2xl"
        >
          <span>
            From Ideas to Identity – We Help Students
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Build, Register, and Protect{" "}
            </span>
            Their Online Presence!
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="lg:text-lg text-gray-400 my-5 max-w-[600px] xs:text-sm md:text-lg xl:text-xl"
        >
          An interactive platform for our college startup club, connecting innovators, providing
          resources, and fostering collaboration through discussions, project showcases, and
          networking opportunities.
        </motion.p>
        <motion.a variants={slideInFromLeft(1)}>
          <RegisterForm />
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center xs:hidden sm:flex"
      >
        <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
