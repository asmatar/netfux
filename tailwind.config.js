/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        netflix: ['var(--netflix)'],
        NetflixBold: ['NetflixBold'],
      },
      screens: {
        'big-phone': '500px',
        'small-tab': '600px',
        'tablette-md' : '800px'
      },
      colors: {
        'net-gray': '#696969',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};
