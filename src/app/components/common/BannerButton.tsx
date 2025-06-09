'use client';

import { ArrowDown } from 'lucide-react';
import React from 'react';

const BannerButton: React.FC = () => {
    return (
        <div className='md:p-3 p-2 border-lightGray border-[0.5px] rounded-full'>
            <button
                className="group relative flex items-center justify-between md:gap-10 gap-2 border-[0.5px] border-lightGray text-white rounded-full md:px-3 md:py-3 py-2 px-2 overflow-hidden transition-all duration-300 hover:border-red"
            >
                <span className="md:text-4xl text-xl font-semibold transition-transform duration-300 group-hover:translate-x-2 md:px-5 px-3 md:pl-10 whitespace-nowrap">
                    View pricing
                </span>

                <span className="flex items-center justify-center md:w-24 md:h-24 w-16 h-16 rounded-full border-[0.5px] border-lightGray transition-colors duration-300 group-hover:border-red">
                    <ArrowDown className="md:w-10 md:h-10 w-6 h-6 text-red" />
                </span>

                <span className="absolute inset-0 rounded-full border-[0.5px] border-lightGray transition-colors duration-300 group-hover:border-red pointer-events-none"></span>
            </button>
        </div>

    );
};

export default BannerButton;