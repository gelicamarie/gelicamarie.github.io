module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          black: '#212121',
          orange: '#CC8747',
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
