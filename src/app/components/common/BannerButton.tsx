'use client';

import { ArrowDown } from 'lucide-react';
import React from 'react';

const BannerButton: React.FC = () => {
    return (
        <div className='p-3 border-lightGray border-[0.5px] rounded-full'>
            <button
                className="group relative flex items-center justify-between gap-10 border-[0.5px] border-lightGray text-white rounded-full px-3 py-3 overflow-hidden transition-all duration-300 hover:border-red"
            >
                <span className="text-4xl font-semibold transition-transform duration-300 group-hover:translate-x-2 px-5 pl-10">
                    View pricing
                </span>

                <span className="flex items-center justify-center w-24 h-24 rounded-full border-[0.5px] border-lightGray transition-colors duration-300 group-hover:border-red">
                    <ArrowDown className="w-10 h-10 text-red" />
                </span>

                <span className="absolute inset-0 rounded-full border-[0.5px] border-lightGray transition-colors duration-300 group-hover:border-red pointer-events-none"></span>
            </button>
        </div>

    );
};

export default BannerButton;