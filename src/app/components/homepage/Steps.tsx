import React from "react";
import Step from "../Step";

const stepsData = [
    {
        number: "01",
        title: "SUBSCRIBE",
        description:
            "Join our exclusive Slack channel. Upon subscription, you'll be paired with a top-tier designer.",
    },
    {
        number: "02",
        title: "REQUEST",
        description:
            "Share your design needs. We typically deliver these within an average of 2 business days, addressing them one by one.",
    },
    {
        number: "03",
        title: "REFINE",
        description:
            "Need further adjustments? We'll tweak your design until it matches your vision perfectly.",
    },
    {
        number: "04",
        title: "GROW",
        description:
            "Witness your project's growth as your vision becomes reality with each design request."
    }
];

export default function Steps() {
    return (
        <section className="pt-20 pb-16 bg-black w-full min-h-screen">
            <div className="flex justify-center mb-12">
                <div className="border border-red/80 rounded-full px-14 py-4 w-fit bg-black">
                    <span className="text-4xl md:text-5xl text-white font-light flex items-center gap-4">
                        HOW IT WORKS
                        <span className="text-3xl" role="img" aria-label="magic wand">🪄</span>
                    </span>
                </div>
            </div>
            <div>
                {stepsData.map((step, i) => (
                    <Step
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </section>
    );
}
