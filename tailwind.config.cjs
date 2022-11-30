/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#03071e",
          2: "#001233",
          3: "#002855"
        },
        accent: {
          blue: '#0466C8',
          'orange-1': '#FF3D00',
          'orange-2': '#C73C10'
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
