"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function FloatingOval() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Floating animation: slight vertical + rotate as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{
          y,
          rotate,
          borderRadius: "50% / 50%",
        }}
        className="md:px-16 md:py-16 px-8 py-8 border border-lightGray flex items-center justify-center text-white md:text-4xl text-xl bg-black absolute top-16 -left-[230px]"
      >
        WE BUILD 🔨
      </motion.div>
    </div>
  );
}