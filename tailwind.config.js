/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out 1.7s both",
        fadeInUpShort: "fadeInUp 1s ease-in-out 0.7s both",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: "100%,",
          },
        },
        fadeInUp: {
          "0%": {
            top: 96,
            opacity: 0,
          },
          "100%": { top: 0, opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
