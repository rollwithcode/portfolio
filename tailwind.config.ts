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
        lightGray: "#ffffff29"
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
