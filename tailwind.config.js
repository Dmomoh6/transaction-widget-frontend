/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.storybook/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    extend: {
      colors: {
        primary_black: "#1d1d1d",
        primary_grey: "#B4BACC",
        secondary_grey: "#EDEEF3",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
