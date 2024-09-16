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
        'slate-gray': '#798A9E'
      },
      spacing: {
        '60': '15rem',
        '88': '20rem',
        '116': '29rem',
        '128': '32rem',
        '164': '41rem',
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

