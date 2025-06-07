"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import plus from "../../assets/plus-sign.png";
import three from "../../assets/three-bars.png";

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
                className="absolute top-[40%] left-[-60px] z-10"
            >
                <Image src={plus} alt="" width={240} />
            </motion.div>
            <motion.div
                style={{
                    rotate: rotateThree,
                }}
                className="absolute right-[-60px] top-[20%] z-10 "
            >
                <Image src={three} alt="" width={240} />
            </motion.div>
        </div>
    );
}
