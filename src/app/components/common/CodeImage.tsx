"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import code from "@/assets/code.svg"

export default function AnimatedPricingImages() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rotatePlus = useTransform(scrollYProgress, [0.3, 0.7], [0, -48]);
    const translatePlus = useTransform(scrollYProgress, [0.7, 1], ["40%", "55%"])
    const rotateThree = useTransform(scrollYProgress, [0, 0.5], [0, 18]);

    return (
        <div ref={ref} className="absolute inset-0 w-full h-full hidden md:block">
            <motion.div
                style={{
                    rotate: rotatePlus,
                }}
                className="absolute right-[-60px] top-[20%] z-0"
            >
                <svg width="240" height="240" className="fill-current text-black">
                    <use href="#svg10088519648" />
                </svg>

            </motion.div>
        </div>
    );
}
