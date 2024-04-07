/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d5f5d9",
          200: "#abebb3",
          300: "#82e08c",
          400: "#58d666",
          500: "#2ecc40",
          600: "#25a333",
          700: "#1c7a26",
          800: "#12521a",
          900: "#09290d",
        },
        secondary: {
          100: "#efcff4",
          200: "#e09ee9",
          300: "#d06edf",
          400: "#c13dd4",
          500: "#b10dc9",
          600: "#8e0aa1",
          700: "#6a0879",
          800: "#470550",
          900: "#230328",
        },
        tertiary: {
          100: "#ffe7d1",
          200: "#ffcea4",
          300: "#ffb676",
          400: "#ff9d49",
          500: "#ff851b",
          600: "#cc6a16",
          700: "#995010",
          800: "#66350b",
          900: "#331b05",
        },
      },
      fontFamily: {
        headFamily: ["Merriweather", "serif"],
        bodyFamily: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
