/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
      },
    },
  },
  plugins: [],
};
