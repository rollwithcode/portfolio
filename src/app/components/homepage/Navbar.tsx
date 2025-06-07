
"use client";
import React, { useState } from "react";

const NAV_ITEMS = [
    { label: "SERVICES", href: "#" },
    { label: "WORK", href: "#" },
    { label: "PRICING", href: "#pricing" },
];

const CTA = { label: "START A PROJECT", href: "#" };

export default function Navbar() {
    const [open, setOpen] = useState<Boolean>(false);

    return (
        <header className="sticky top-0 w-full flex items-center justify-between py-2 px-2 sm:px-4 bg-transparent z-50 font-sans mt-3">
            <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
                <div
                    className="bg-[rgba(255,255,255,0.04)] border border-white/10 rounded-2xl px-4 py-4 flex items-center"
                    style={{ minWidth: 68, minHeight: 44, fontFamily: "inherit", backdropFilter: "blur(40px)" }}
                >
                    <span className="text-white font-bold text-xl tracking-wide">
                        RWC
                        <span className="font-normal">.</span>
                    </span>
                </div>

                <div className="hidden lg:flex bg-[rgba(255,255,255,0.04)] border border-white/10 rounded-2xl px-6 py-4 items-center min-w-[170px] sm:min-w-[250px] ml-2"
                    style={{ backdropFilter: "blur(40px)" }}>
                    <span className="text-gray-300 font-medium select-none truncate">
                        Build Websites for Business
                    </span>
                </div>
            </div>

            <button
                className={`flex flex-col justify-center items-center lg:hidden ${!open ? 'gap-[6px]' : 'gap-0'} w-12 h-12 p-3 bg-[rgba(255,255,255,0.04)] rounded-lg border border-white/10 z-50 relative ml-2 duration-300 ease`}
                onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}
                type="button"
                style={{ backdropFilter: "blur(40px)" }}
            >
                <span
                    className='block w-6 h-0.5 rounded bg-white transition-all duration-300 ease'
                />
                <span
                    className='block w-6 h-0.5 rounded bg-white transition-all duration-300 ease'
                />
            </button>

            <div
                className={`
                        lg:flex items-center gap-3 transition-all duration-300 ease-in-out
                        ${open
                        ? "lg:flex flex-col fixed left-1/2 top-3 z-40 w-[96vw] -translate-x-1/2 bg-black/90 border border-white/10 rounded-2xl pt-8 pb-5 px-2 max-h-[500px] opacity-100 translate-y-0"
                        : "lg:flex flex-col fixed left-1/2 top-3 z-40 w-[96vw] bg-black/90 border border-white/10 rounded-2xl pt-8 pb-5 px-2 max-h-0 opacity-0 -translate-x-1/2 -translate-y-4 lg:flex-row lg:static lg:bg-transparent lg:border-0 lg:w-auto lg:pt-0 lg:pb-0 lg:px-0 lg:max-h-none lg:opacity-100 lg:translate-x-0 lg:translate-y-0"}
    `}
                style={{
                    fontFamily: "inherit",
                    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                <div
                    className="flex flex-col lg:flex-row items-center w-full bg-[rgba(255,255,255,0.04)] border border-white/10 rounded-2xl px-8 py-4 gap-4"
                    style={{ backdropFilter: "blur(40px)" }}
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            href={item.href}
                            className="text-gray-300 font-medium tracking-tight px-2 transition-colors duration-150 hover:text-white w-full lg:w-auto text-center"
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <GlowingCTA href={CTA.href} label={CTA.label} onClick={() => setOpen(false)} />
            </div>

            <div
                className={`
                    fixed inset-0 z-30 bg-black/80 transition-all duration-300
                    ${open ? "block backdrop-blur-[4px] opacity-100" : "hidden opacity-0"}
                `}
                onClick={() => setOpen(false)}
            />
        </header>
    );
}

function GlowingCTA({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="relative glow-edge px-5 py-3 rounded-xl font-bold text-base sm:text-lg flex justify-center items-center bg-black text-red-400 transition-all duration-300 shadow-lg text-red group w-full lg:w-fit mt-3 lg:mt-0"
        >
            <span
                className="glow-shift-anim"
                aria-hidden="true"
            />
            <span className="relative z-10 flex items-center group-hover:translate-x-2 transition-all duration-200 ease text-nowrap">
                <span className="mr-2">→</span>
                {label}
            </span>
        </a>
    );
}
