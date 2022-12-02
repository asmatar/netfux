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
        'login': '550px',
        'small-tab': '600px',
        'tablette-md' : '800px'
      },
      colors: {
        'net-gray': '#696969',
      },
      backgroundImage: {
        'gradient':'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
        login: "url(/images/login/netflixbg1.jpg)",
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
