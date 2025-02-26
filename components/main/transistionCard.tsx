"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export default function TextRevealCardPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center bg-transparent h-[40rem] rounded-2xl w-full z-50 relative overflow-hidden -translate-y-96 xs:hidden md:flex"
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <TextRevealCard text="You dream it" revealText="We engineer it.">
          <TextRevealCardTitle className="text-2xl font-bold">
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Hover over the card to unveil how dreams transform into reality.
          </TextRevealCardDescription>
        </TextRevealCard>
      </motion.div>
    </div>
  );
}
