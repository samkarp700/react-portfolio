/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'orange': '#E65F5C',
      'green': '#B5D99C',
      'yellow': '#FFFF82',
      'gray-light': 'F5F7DC',
      'dark-purple': '0F0326',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}