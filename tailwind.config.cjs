/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#1B2A41",
          2: "#0C1821",
          3: "#1F2232"
        },
        light: {
          1: "#CEDFE8",
          2: "#ABB9BE"
        }
      }
    },
  },
  plugins: [],
};
