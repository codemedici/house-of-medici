import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#111111",
        groovyBackground: "#191919",
        bumpyBackground: "#151515",
        whiteBumpyBackground: "#c4c4c4",
        whiteGroovyBackground: "rgb(244,244,244)",
      },
      boxShadow: {
        bumpy: "inset 3px 3px 12px #4646466A",
        groovy: "inset 3px 3px 12px #000000",
        shine: "0px 0px 10px 0px #ffffff",
        shineSmall: "0px 0px 8px -2px rgba(255, 255, 255, 0.5)",
        whiteBumpy: "inset 3px 3px 12px #ffffff",
        whiteGroovy: "inset 3px 3px 3px #e6e6e6",
        glassImage: "inset 10px 10px 20px -10px rgba(255, 255, 255, 0.5)",
      },
      keyframes: {
        pulse: {
          "0%": {
            transform: "scale(0.75)",
          },
          "20%": {
            transform: "scale(1)",
          },
          "40%": {
            transform: "scale(0.75)",
          },
          "60%": {
            transform: "scale(1)",
          },
          "80%": {
            transform: "scale(0.75)",
          },
          "100%": {
            transform: "scale(0.75)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        pulse: "pulse 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
