/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm-max': { max: '374.99px' },
      md: '768px',
      lg: '1280px',
    },
    fontFamily: {
      manrope: [
        'Manrope',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
    },
    extend: {
      colors: {
        'main-bg': '  #f9f9f9',
        'my-black': '#262626',
        'my-black-15': 'rgba(38, 38, 38, 0.15)',
        'my-black-50': 'rgba(38, 38, 38, 0.5)',
        'my-black-80': 'rgba(38, 38, 38, 0.8)',
        'my-black-40': 'rgba(38, 38, 38, 0.4)',
        'my-white': '#FFFFFF',
        'my-white-15': 'rgba(255, 255, 255, 0.15)',
        'my-white-40': 'rgba(255, 255, 255, 0.4)',
        'my-white-50': 'rgba(255, 255, 255, 0.5)',
        'my-yellow': '#F6B83D',
        'my-yellow-dark': '#F9B020',
        'my-yellow-light-hover': '#fbe7c1',
        'my-yellow-light': '#FFF4DF',
        'my-green': '#08AA83',
        'my-red': '#EF2447',
      },
    },
  },
  corePlugins: {
    container: false,
    containerBig: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          minWidth: '320px',
          maxWidth: '375px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px',
          '@screen md': {
            paddingLeft: '32px',
            paddingRight: '32px',
            maxWidth: '768px',
          },
          '@screen lg': {
            paddingLeft: '32px',
            paddingRight: '32px',
            maxWidth: '1280px',
          },
        },
      });
    },
    ({ addComponents }) => {
      addComponents({
        '.containerBig': {
          minWidth: '320px',
          maxWidth: '375px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px',
          '@screen md': {
            paddingLeft: '32px',
            paddingRight: '32px',
            maxWidth: '768px',
          },
          '@screen lg': {
            paddingLeft: '64px',
            paddingRight: '63px',
            maxWidth: '1280px',
          },
        },
      });
    },
  ],
};
