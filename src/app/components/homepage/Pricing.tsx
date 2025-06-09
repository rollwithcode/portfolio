import React from "react";
import PricingCard from "@/app/components/PricingCard";
import AnimatedQuote from "../Quote";
import AnimatedPricingImages from "../PricingImages";

const pricingOptions = [
    {
        title: "Standard",
        subtitle: "Ideal for a trial, a few tasks, or small projects, offering maximum flexibility.",
        price: "$100",
        period: "/m",
        description: "Pause or cancel any time",
        features: [
            "Dedicated senior designer",
            "3 hours of focused work daily",
            "Weekly update calls",
            "Async comms",
            "Pause or cancel anytime",
        ],
        textColor: "text-green",
        borderColor: "border-green",
        glowColor: "green",
        buttonColor: "bg-green",
        buttonText: "→ Book an Intro Call",
        buttonTextColor: "text-black",
    },
    {
        title: "Premium",
        subtitle: "Ideal for businesses or individuals with clear, specific needs.",
        price: "$250",
        period: "/m",
        description: "Pause or cancel any time",
        features: [
            "Dedicated senior designer",
            "6 hours of focused work daily",
            "Bi-weekly update calls",
            "1:1 Async comms via Slack",
            "Pause or cancel anytime",
        ],
        textColor: "text-red",
        borderColor: "border-red",
        glowColor: "red",
        buttonColor: "bg-red",
        buttonText: "→ Book an Intro Call",
        buttonTextColor: "text-black",
    },
];

export default function PricingPage() {

    return (
        <section id="pricing" className="relative md:pt-16 pt-10">
            <AnimatedPricingImages />
            <AnimatedQuote>
                Great businesses are built, not born.
            </AnimatedQuote>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center bg-black py-16">
                {pricingOptions.map((option) => (
                    <PricingCard key={option.title} {...option} />
                ))}
            </div>
        </section>
    );
}
