interface StepStarProps {
    className?: string;
}

function StepStar({ className = "md:w-10 md:h-10 w-5 h-5" }: StepStarProps) {
    return (
        <svg
            viewBox="0 0 34 34"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M 16.167 33 C 15.542 29.417 13 24.917 8.167 21.292 C 5.792 19.5 3.375 18.333 1 17.833 L 1 16.083 C 5.708 14.958 10.333 11.792 13.292 7.5 C 14.792 5.333 15.75 3.208 16.167 1 L 17.917 1 C 18.625 5.208 21.875 9.875 26.292 13 C 28.458 14.542 30.708 15.583 33 16.083 L 33 17.833 C 28.375 18.792 23 22.917 20.333 27.125 C 19 29.25 18.208 31.208 17.917 33 Z"
                fill="white"
            />
        </svg>
    );
}


export default function Carousel() {
    return (
        <div className="text-wrapper overflow-hidden whitespace-nowrap w-full lg:flex items-center md:mt-20 mt-5 border-y border-lightGray py-6">
            <div className="flowing-text select-none uppercase md:text-8xl text-2xl font-extrabold md:gap-24 gap-8">
                <span>Ideate</span>
                <span><StepStar/></span>
                <span>Design</span>
                <span><StepStar /></span>
                <span>Develop</span>
                <span><StepStar /></span>
                <span>Test</span>
                <span><StepStar /></span>
                <span>Deploy</span>
                <span><StepStar /></span>
                <span>Scale</span>
                <span><StepStar /></span>
                <span>Maintain</span>
            </div>
        </div>
    )
}