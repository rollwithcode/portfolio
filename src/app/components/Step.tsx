"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import StepStar from "./icons/StepStar";

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
                bg-black border border-lightGray rounded-3xl lg:rounded-full
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
                    <span className="text-[3rem] md:text-[4rem] font-extrabold text-green tracking-tight select-none">
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
