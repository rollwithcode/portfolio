import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                red: '#F97563',
                textGray: "#7A7A7A",
                lightGray: "#ffffff29",
                green: "#99FE32",
            },
            borderRadius: {
                '44px': '44px',
                '80px': '80px',
                '48px': '48px',
                '30px': '30px',
            },
            boxShadow: {
                'lime-glow': '0 0 48px 8px #84cc16',
                'purple-glow': '0 0 48px 8px #a78bfa',
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;