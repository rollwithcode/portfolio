"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function AnimatedQuote({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.125]);
    const y = useTransform(scrollYProgress, [0.8, 1], [0, -60]);

    return (
        <motion.div
            style={{ scale, y }}
            className="
                    border border-gray-500 rounded-3xl w-fit max-w-2xl mx-auto bg-black
                    flex justify-center items-center"
        >
            <p className="text-center text-gray-300 text-xl md:text-3xl font-light p-6 tracking-tight" style={{ fontFamily: "serif" }}>
                {children}
            </p>
        </motion.div>);
}
