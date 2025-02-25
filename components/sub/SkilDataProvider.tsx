"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  sizeClass: string; // Tailwind class for responsive width/height
  index: number;
}

const SkillDataProvider = ({ src, sizeClass, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex justify-center items-center"
    >
      <Image
        src={src}
        alt="skill image"
        className={`${sizeClass} object-contain`} // Tailwind class for responsiveness
        width={80} // Default width for Next.js
        height={80} // Default height for Next.js
      />
    </motion.div>
  );
};

export default SkillDataProvider;
