module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#232129',
          accent: '#663399',
          code: '#8A6534',
          bg: '#FFF4DB',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
