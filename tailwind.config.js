/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#080B10",
        surface: "#111620",
        cyanGlow: "#00F0FF",
        forgeAmber: "#FF8A00",
      },
      backgroundImage: {
        'crypto-gradient': 'linear-gradient(to right, #00F0FF, #FF8A00)',
      }
    },
  },
  plugins: [],
};
