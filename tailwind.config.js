const { useEffect } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      green: 'rgb(181, 217, 156)',
      red: 'rgb(230, 95, 92)',
      yellow: 'rgb(255, 255, 130)',
      light: 'rgb(245, 247, 220)',
      dark: 'rgb(15, 3, 38)'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
