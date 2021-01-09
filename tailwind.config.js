module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          black: '#212121',
          orange: '#EF933F',
          white: '#E0D7CF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
