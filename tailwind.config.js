/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0c1b3d',
        'school-bus-yellow': '#ffdd00',
        'glaucous': '#6184d8',
        'ghost-white': '#f8f7ff',
        'lavender': '#e1dee9',
      },
      spacing: {
        '128': '32rem',
        '192': '48rem',
        '224': '56rem',
      }
    },
  },
  plugins: [],
}

