'use client';
import { useState } from 'react';

export default function HeekoFooter() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <div className="bg-black min-h-screen relative overflow-hidden py-16">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(80)].map((_, i) => (
                    <div key={i} className="star" />
                ))}
            </div>



            <div className="relative z-10   ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-32">

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white opacity-60 text-sm font-medium mb-6 tracking-wider">Company</h3>
                            <div className="space-y-4">
                                {['WORK', 'SERVICES', 'PLANS'].map((item) => (
                                    <div key={item}>
                                        <a
                                            href="#"
                                            className="text-white text-lg font-medium tracking-wide hover:text-red transition-all duration-300 block group"
                                            onMouseEnter={() => setHoveredItem(item)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <span className={`transform transition-transform duration-300 ${hoveredItem === item ? 'translate-x-2' : ''}`}>
                                                {item}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white opacity-60 text-sm font-medium mb-6 tracking-wider">Follow us</h3>
                            <div className="space-y-4">
                                {['X.COM', 'LINKEDIN', 'DRIBBBLE', 'INSTAGRAM'].map((item) => (
                                    <div key={item}>
                                        <a
                                            href="#"
                                            className="text-white text-lg font-medium tracking-wide hover:text-red transition-all duration-300 block group"
                                            onMouseEnter={() => setHoveredItem(item)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <span className={`transform transition-transform duration-300 ${hoveredItem === item ? 'translate-x-2' : ''}`}>
                                                {item}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div></div>

                    <div className="space-y-8">
                        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-500 group ">
                            <div className="flex items-start space-x-6">

                                <div>
                                    <p className="text-white opacity-60 text-sm font-medium mb-2 tracking-wider">General Inquiries</p>
                                    <a
                                        href="mailto:RollWithCode@gmail.com"
                                        className="text-white text-2x2 font-bold hover:text-red transition-colors duration-300"
                                    >
                                        RollWithCode@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredItem('GET_IN_TOUCH')}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className={`absolute inset-0 bg-white rounded-full blur-xl transition-opacity duration-500 ${hoveredItem === 'GET_IN_TOUCH' ? 'opacity-20' : 'opacity-0'}`}></div>
                            <div className="relative border-2 border-white rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
                                <span className="text-2xl font-bold flex items-center justify-center space-x-3">
                                    <span className="text-white group-hover:text-black">GET IN TOUCH</span>
                                    <span className={`text-3xl transform transition-transform duration-500 text-white group-hover:text-black ${hoveredItem === 'GET_IN_TOUCH' ? 'rotate-180' : ''}`}>☻</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white border-opacity-10 pt-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-12 lg:space-y-0">

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <span className="text-6xl lg:text-8xl font-bold text-white hover:scale-110 transition-transform duration-300 cursor-default">©</span>
                                <span className="text-6xl lg:text-8xl font-bold text-red hover:scale-110 transition-transform duration-300 cursor-default">2025</span>
                            </div>
                            <div>
                                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                                    <span className="text-white hover:text-red transition-colors duration-300 cursor-default">Roll With </span>
                                    <span className="text-white hover:text-red transition-colors duration-300 cursor-default">Code</span>
                                </h2>
                            </div>
                        </div>

                        {/* Tagline */}
                        <div className="max-w-2xl lg:text-right">
                            <p className="text-white opacity-60 text-lg lg:text-xl font-medium leading-relaxed tracking-wide">
                                {['ASSISTING', 'STARTUPS', 'AND', 'BUSINESSES', 'TO', 'LAUNCH', 'THEIR'].map((word, index) => (
                                    <span
                                        key={word}
                                        className="hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block mr-2"
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        {word}
                                    </span>
                                ))}
                                <br />
                                {['DIGITAL', 'PRODUCTS', 'EFFICIENTLY', 'AND', 'EFFORTLESSLY'].map((word, index) => (
                                    <span
                                        key={word}
                                        className="hover:text-red hover:opacity-100 transition-all duration-300 cursor-default inline-block mr-2"
                                        style={{ transitionDelay: `${(index + 7) * 50}ms` }}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}