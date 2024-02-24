import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'full': '0px 0px 90px -30px  #000',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'float-slow': 'float 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, -20%)  rotate(0deg)' },
          '25%': { transform: 'translate(20%, 0) rotate(15deg)' },
          '50%': { transform: 'translate(0, 20%) rotate(30deg)' },
          '75%': { transform: 'translate(-20%, 0) rotate(15deg)' },
          '100%': { transform: 'translate(0, -20%) rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
