"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type StepProps = {
    number: string;
    title: string;
    description: string;
};

export default function Step({ number, title, description }: StepProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const isSmallScreen = useMediaQuery("(max-width: 1023px)");

    const scale = useTransform(scrollYProgress, isSmallScreen ? [0, 0.3] : [0, 0.1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 1], isSmallScreen ? [0, 0.3, 1, 1] : [0, 0.7, 1, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity, minHeight: "120px" }}
            className="
                w-full max-w-7xl mx-auto my-6
                bg-black border border-gray-600 rounded-3xl lg:rounded-full
                px-6 py-4 lg:py-0
                flex items-center
            "
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-[80px_2.5fr_50px_3.5fr] items-center gap-2 md:gap-4">
                <div className="flex justify-center items-center h-full">
                    <span className="text-[3rem] text-gray-500 italic font-light select-none">
                        {number}
                    </span>
                </div>
                <div className="flex justify-center lg:justify-end items-center h-full">
                    <span className="text-[3rem] md:text-[4rem] font-extrabold text-red tracking-tight select-none">
                        {title}
                    </span>
                </div>
                <div className="flex justify-center items-center h-full">
                    <StepStar />
                </div>
                <div className="flex justify-start items-center h-full">
                    <span className="text-base md:text-lg text-gray-200 font-normal text-center lg:text-left">
                        {description}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

function StepStar() {
    return (
        <svg viewBox="0 0 34 34" width={34} height={34} fill="none">
            <path
                d="M 16.167 33 C 15.542 29.417 13 24.917 8.167 21.292 C 5.792 19.5 3.375 18.333 1 17.833 L 1 16.083 C 5.708 14.958 10.333 11.792 13.292 7.5 C 14.792 5.333 15.75 3.208 16.167 1 L 17.917 1 C 18.625 5.208 21.875 9.875 26.292 13 C 28.458 14.542 30.708 15.583 33 16.083 L 33 17.833 C 28.375 18.792 23 22.917 20.333 27.125 C 19 29.25 18.208 31.208 17.917 33 Z"
                fill="white"
            />
        </svg>
    );
}
