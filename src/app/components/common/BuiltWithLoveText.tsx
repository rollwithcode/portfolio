"use client";
import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function BuiltWithLoveText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ perspective: 1000 }}
      className="flex justify-center items-center flex-col gap-4"
    >
      {/* Main Heading Flip */}
      <motion.h2
        initial={{ rotateX: 90, opacity: 0 }}
        animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-red md:text-7xl text-3xl mb-2 tracking-tight"
        style={{ transformStyle: "preserve-3d" }}
      >
        Built With <span className="font-bold text-white">Love</span>
      </motion.h2>

      {/* Subtitle Flip (delayed) */}
      {showSubtitle && (
        <motion.p
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-5xl text-xl text-textGray font-medium"
          style={{ transformStyle: "preserve-3d" }}
        >
          (And a lot of coffee)
        </motion.p>
      )}
    </div>
  );
}
