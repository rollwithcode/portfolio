import React from "react";

type PricingCardProps = {
    title: string;
    subtitle: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    textColor: string;
    borderColor: string;
    glowColor: string;
    buttonColor: string;
    buttonText: string;
    buttonTextColor: string;
    onButtonClick?: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    subtitle,
    price,
    period,
    description,
    features,
    textColor,
    borderColor,
    glowColor,
    buttonColor,
    buttonText,
    buttonTextColor,
    onButtonClick,
}) => {
    return (
        <div
            className={`
        flex flex-col justify-between
        rounded-[44px] p-4 md:p-8 w-full max-w-lg min-h-[650px]
        border-[16px] ${borderColor}
        shadow-[0_0_48px_8px_var(--tw-shadow-color)] 
      `}
            style={{ ["--tw-shadow-color" as any]: `var(--${glowColor})` }}
        >
            <div>
                <div className="mb-2">
                    <span className={`text-4xl font-bold ${textColor}`}>
                        {title}
                    </span>
                </div>
                <div className="text-gray-300 mb-6">{subtitle}</div>
                <div className="flex items-end mb-2">
                    <span className="text-5xl font-bold text-white">{price}</span>
                    <span className="text-4xl text-gray-400 mb-1 ml-2">{period}</span>
                </div>
                <div className="text-gray-400 mb-6">{description}</div>
                <ul className="text-gray-100 space-y-3 my-12">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                            <svg className="w-5 h-5 text-gray-400 mx-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="md:text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={onButtonClick}
                className={`
          w-full py-4 rounded-full text-xl font-semibold transition
          ${buttonColor} ${buttonTextColor}
          hover:opacity-90
        `}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default PricingCard;
