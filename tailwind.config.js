/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary': {
          DEFAULT:'#08afd2',
          '50': '#ecfdff',
          '100': '#cff9fe',
          '200': '#b9f3fc',
          '300': '#68e3f8',
          '400': '#24ccec',
          '500': '#08afd2',
          '600': '#0a8bb0',
          '700': '#0f6f8f',
          '800': '#165b74',
          '900': '#174c62',
          '950': '#093143',
        },
      }
    },
  },
  plugins: [],
}

