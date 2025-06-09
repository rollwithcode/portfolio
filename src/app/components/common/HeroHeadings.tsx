"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function FlipIntro() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 1200); // delay for subtitle
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ perspective: 1000 }}
      className="flex justify-center items-center md:min-h-screen flex-col gap-4"
    >
      {/* Main Heading Flip */}
      <motion.h1
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white font-bold md:text-8xl text-4xl m-0 p-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        Welcome to <span className="text-red">Roll With Code!</span>
      </motion.h1>

      {/* Subtitle Flip (delayed) */}
      {showSubtitle && (
        <motion.p
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-6xl text-2xl text-textGray font-medium"
          style={{ transformStyle: "preserve-3d" }}
        >
          Where ideas roll in and websites roll out
        </motion.p>
      )}
    </div>
  );
}
