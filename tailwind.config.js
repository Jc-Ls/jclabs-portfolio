/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brutalist: {
          dark: '#050505',
          accent: '#EAB308',
          neutral: '#333333',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
      },
      fontFamily: {
        space: ['var(--font-space)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};