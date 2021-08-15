module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        red: {
          primary: '#FFE0E0',
          bg: '#F6F2F2',
          text: '#FD4E4E',
        }
      },
      backgroundImage: theme => ({
        'pink': "url('./image/Frame.png')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
