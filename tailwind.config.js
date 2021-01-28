module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          black: '#212121',
          orange: '#C8792F',
          white: '#FFFFFF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
