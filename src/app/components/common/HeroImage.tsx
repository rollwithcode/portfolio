"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import fan from "@/assets/fan-again.png"

export default function HeroImage() {
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
                className="absolute right-[-160px] top-[70%] z-10 "
            >
                <Image src={fan} alt="" width={400} />
            </motion.div>
        </div>
    );
}