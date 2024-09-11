/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0c1b3d',
        'school-bus-yellow': '#ffdd00',
        'glaucous': '#0f224d',
        'ghost-white': '#f8f7ff',
        'lavender': '#e6e6fa',
      },
      spacing: {
        '128': '32rem',
        '192': '48rem',
        '224': '56rem',
      }
    },
    fontFamily: {
      'display': ['Manrope'],
      'body': ['Inter'],
    }
  },
  plugins: [],
}

